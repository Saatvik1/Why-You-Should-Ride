from flask import Flask
from flask import jsonify, request
from flask_cors import CORS, cross_origin
from joblib import load

import json
import os
import re
import string


import sqlalchemy
from sqlalchemy import create_engine, text

connection_string = "mysql+mysqlconnector://" + os.getenv("DATABASE_USERNAME")+ ":" + os.getenv("DATABASE_PASSWORD") +"@" + os.getenv("DATABASE_HOST") + ":" + "3306" + "/why_you_should_ride_a_motorcycle"
engine = create_engine(connection_string, echo=True)
connection = engine.connect()


from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.utils.class_weight import compute_sample_weight
from sklearn.ensemble import RandomForestClassifier
from sklearn.multioutput import MultiOutputClassifier
from sklearn.metrics import accuracy_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import GradientBoostingClassifier
import sklearn
import numpy as np
import pandas as pd


app = Flask(__name__)

CORS(app)

random_forest = load('F:\\jupyter_workspace\\WhyYouShouldRide\\Why-You-Should-Ride\\random_forest_model_second.joblib')
scaler = load('F:\\jupyter_workspace\\WhyYouShouldRide\\Why-You-Should-Ride\\scaler.joblib')



@app.route("/",  methods=['GET', 'POST'])
@cross_origin()
def hello():
    return "Hello World!";
 
if __name__ == "__main__":
    app.run(debug = True, host = "0.0.0.0", port = 3000)



@app.route("/get/coords", methods = ['GET'])
@cross_origin()
def get_coords():

    year = None
    try:
        temp = request.args.get('year')
        if(temp == '2019'):
            year = 'tn'
        elif(temp == '2020'):
            year = 'tt'
        elif(temp == '2021'):
            year = 'tto'
        else:
            return {'status' : False, "message": "Please provide proper YEAR VALUE."}
    except Exception as _:
        return {'status' : False, "message": "Please provide proper request body."}

    #print(year)
    query = f"SELECT all_accidents_table.LATITUDE, all_accidents_table.LONGITUD FROM (SELECT vehicle.CASE_INDEX FROM {year}_vehicle_table vehicle WHERE vehicle.BODY_TYPNAME LIKE 'Two Wheel Motorcycle%' OR vehicle.BODY_TYPNAME LIKE 'Off-road Motorcycle%') AS V INNER JOIN all_accidents_table ON V.CASE_INDEX = all_accidents_table.CASE_INDEX;"

    result = connection.execute(text(query))
    rows = result.fetchall()

    df = pd.DataFrame(rows, columns=result.keys())

    #print(df.head())

    res = []

    for index, row in df.iterrows():
        res.append([row['LATITUDE'], row['LONGITUD']])


    return res




@app.route("/get/predict", methods = ['GET'])
@cross_origin()
def get_predict():

    helmet_value = None
    drink_value = None
    speed_difference = None
    age_value = None
    engine_size_value = None
    day_of_week_value = None
    month_value = None

    try:
        print(request.args)
        helmet_value = request.args.get('helmet')
        drink_value = request.args.get('drink')
        speed_difference = request.args.get('speed')
        age_value = request.args.get('age')
        engine_size_value = request.args.get('engineSize')
        day_of_week_value = request.args.get('dayOfWeek')
        month_value = request.args.get('month')

    except Exception as _:
        return {'status' : False, "message": "Please provide proper request body."}

    print(helmet_value)
    print(drink_value)
    print(speed_difference)
    print(age_value)
    print(engine_size_value)
    print(day_of_week_value)
    print(month_value)

    value_to_scale = [[speed_difference]]

    scaled_value = scaler.transform(value_to_scale)

    scaled_value = scaled_value[0][0]

    sample_input = []

    # Append values for each feature
    sample_input.append(float(helmet_value))  # HELM_USENAME
    sample_input.append(int(scaled_value))  # LIM_DIFF (scaled speed difference)
    sample_input.append(int(drink_value))   # ALC_RES
    sample_input.append(1 if age_value == '1' else 0)  # age_0-18
    sample_input.append(1 if age_value == '2' else 0)  # age_19-32
    sample_input.append(1 if age_value == '3' else 0)  # age_33-49
    sample_input.append(1 if age_value == '4' else 0)  # age_50+
    # Append values for MAK_MODNAME, DAY_WEEK, and MONTH based on your request arguments
    sample_input.append(int(engine_size_value))
    sample_input.extend([1 if day_of_week_value == str(i) else 0 for i in range(1, 8)])  # DAY_WEEK_1 to DAY_WEEK_7
    sample_input.extend([1 if month_value == str(i) else 0 for i in range(1, 13)])  # MONTH_1 to MONTH_12

# Ensure the input data is in the format expected by your model (a list of lists)
    sample_input = [sample_input]

    print(sample_input)
    print(sklearn.__version__)


    predicted_outputs = random_forest.predict(sample_input)
    probabilities = random_forest.predict_proba(sample_input)
    print("Predicted outputs:", predicted_outputs)
    print("Probability output: ", probabilities)

    

    # Accessing the value 0.7
    before = probabilities[1][0]
    array = probabilities[0][0][0]

    # Printing the value
    #print(before)
    #print(array)

    kvs = []

    for i, inj in enumerate(probabilities):
        print(i)
        print(inj)
        for j, arr in enumerate(inj):
            print(arr)
            kvs.append((i,arr[0]))
    
    
    sorted_kvs = sorted(kvs, key=lambda x: x[1], reverse=False)
    print(sorted_kvs)

    injury_dict = {
        0 : "Fatal",
        1 : "No Injury",
        2 : "Possible Injury",
        3 : "Minor Injury",
        4 : "Major Injury",
    }

    return f"Prediction: {injury_dict[sorted_kvs[0][0]]} OR {injury_dict[sorted_kvs[1][0]]}"
    