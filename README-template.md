# Table of Contents

- [Table of Contents](#table-of-contents)
- [Website Link](#live-version-available)
- [Development Process](#development-process)
- [Why I Made This](#why-i-made-this)
- [Old Notes During Development](#live-notes)

# Why You Should Ride
A project I worked on to raise awareness about the dangers of motorcycle riding and to uncover hidden trends and reasons why riding is proportionately more dangerous than other forms of transportation. 
# Live Version Available! 
# [Why You Should Ride a Motorcycle!](whyyoushouldride.com)
No quick start is required, go to [whyyoushouldride.com](whyyoushouldride.com). There you can view my suggestions for motorcycle riders based on EDA results, explore the data sets, and predict accident severity. 

![image](https://github.com/Saatvik1/Why-You-Should-Ride/assets/103705402/7e1e39f1-f60c-4c74-97dd-5f4b96e0eebc)
![image](https://github.com/Saatvik1/Why-You-Should-Ride/assets/103705402/64039ff7-6943-496e-905d-57cf704a3c87)


# Development Process
[(Back to top)](#table-of-contents)
- Collect Data from NHTSA (CSV)
- Extract, transfer, load, (ETL) and MySQL schema creation and population (Python, Pandas, SQL)
  - Using Pandas to convert CSVs to data frames, I learned more about the dataset and cleaned it up.
  - Uploaded data to MySQL database into a schema that I created.
  - Details in [this jupyter notebook](https://github.com/Saatvik1/Why-You-Should-Ride/blob/main/Motorcycle_Accident_Analysis_and_ML.ipynb)
 
    
- Exploratory data analysis (EDA) (SQL, Python, Pandas, Numpy, Matplotlib, Statistical Analysis)
  - Dived into the data and it's story. Utilized my knowledge in data analytics and statistics to find significant trends and differences.
  - Details in [this jupyter notebook](https://github.com/Saatvik1/Why-You-Should-Ride/blob/main/Motorcycle_Accident_Analysis_and_ML.ipynb)
  - [Summary of findings](https://whyyoushouldride.com/) 
 
    
- Model Creation (Python, Scikit-learn, Machine Learning)
  - Performed feature engineering on dataset.
  - Created a random forest model resulting in an 81% accuracy.
  - Details in [this jupyter notebook](https://github.com/Saatvik1/Why-You-Should-Ride/blob/main/Motorcycle_Accident_Analysis_and_ML.ipynb)
 
    
- Result Deployment (Flask and React)
  - Reported findings on web-app.
  - Deployed web-app to [whyyoushouldride.com](whyyoushouldride.com).
  - Details in [this section of repository](https://github.com/Saatvik1/Why-You-Should-Ride/tree/main/website)
 
  
# Why I Made This
[(Back to top)](#table-of-contents)
- I made this because I have a very strong interest in motorcycles. I get told a lot that it is very dangerous, and I wanted to find out why, and what I can do to make riding safer, for myself and others.


# Live Notes
[(Back to top)](#table-of-contents)
# Why-You-Should-Ride

## Project Plan: 
### Context and Ideation: 
#### There are millions of motorcyclists in the U.S. It's a popular hobby for many and is a part of many cultures. While it may be fun and thrilling to ride motorcycles, it also comes with its disadvantages and risks. As an aspiring and beginner rider, I want my fellow riders to stay as safe as possible. My goal is to raise awareness, beyond the known knowledge that motorcycles are dangerous so that riders can take specific actions to ride safely instead of receiving the common fear-mongering comment. 

### Project Outline: 
#### Data will be selected by the NHTSA [https://www.nhtsa.gov/]. NHTSA provides detailed data on all motor crashes and publicy realeases said data. These datasets are very large and will require a lot of cleaning and formatting before it is ready to use. 

#### First step will be to collect relevant data. The datasets they provide are fragmented. The same crash will appear in different csv sheets with different data (weather, vehicle, person, etc). 
- Decide what datasheets.
  - vehicle, accident, person, weather, distract, drimpair, drugs (need to check if certain details like weather, distract, drugs, and other info are only reported with (non)fatalities, it will bias the model)
    - Drug test administered regardless, or by some other decision making process I am not aware of. Distract colinearity will be discovered during EDA / Model creation. 
  - List of columns that are important:
    - drimpair:
      - ST_CASE
      - VEH_NO
      - DRIMPAIRNAME
    - weather: (note: this is not available in 2019 dataset and before. But, there is a weather column in accident).
      - ST_CASE
      - WEATHERNAME
    - distract
      - ST_CASE
      - VEH_NO
      - DRDISTRACTNAME
    - drugs
      - ST_CASE
      - VEH_NO
      - PER_NO
      - DRUGRES
      - DRUGRESNAME
    - accident
      - ST_CASE
      - COUNTY
      - COUNTYNAME
      - CITY
      - CITYNAME
      - MONTH
      - DAY
      - DAY_WEEK
      - YEAR
      - HOUR
      - MINUTE
      - TWAY_ID
      - ROUTENAME
      - LATITUDE
      - LONGITUD
      - MAN_COLL
      - MAN_COLLNAME
      - LGT_COND
      - LGT_CONDNAME
    - vehicle
      - ST_CASE
      - VEH_NO
      - MAKENAME
      - BODY_TYPNAME
      - MOD_YEAR
      - MAK_MODNAME
      - TRAV_SP
      - IMPACT1
      - DEFORMEDNAME
      - L_STATUSNAME
      - L_COMPLNAME (valid license for class m for example)
      - DR_HGT
      - DR_WGT
      - VSPD_LIMNAME
      - VALIGNNAME
      - VSURCONDNAME
      - P_CRASH2
      - P_CRASH2NAME
    - person
      - ST_CASE
      - VEH_NO
      - PER_NO
      - AGE
      - SEX
      - PER_TYP
      - PER_TYPNAME
      - INJ_SEV
      - INJ_SEVNAME
      - HELM_USE
      - HELM_USENAME
      - HELM_MIS
      - HELM_MISNAME
      - DRINKING
      - DRINKINGNAME
      - ALC_RES
      - ALC_RESNAME
- Download the data, and perform data cleaning. Prepare it for database migration. This will be done using Python and data science libraries such as Pandas, numpy, etc.
  - Using 2019, 2020, and 2021 data and using Anaconda Jupyter nb on a local device.
  - Will go from 2021 to 2019, starting from the largest data sets first (to keep things consistent).
    - The first step will to be take the datasets, import them into a dataframe, and get rid of unnecessary columns. Repeat for all the datasets that year, then merge them (need to figure out how). At the end will have 3 dataframes for all 3 years, and from there we can start cleaning up the data. 
- Plan MySQL DB structure. Will be using Planet Scale as a MySQL DB provider.
  - Will merge all the year's accidents so that one table is a reference point for all the rest. Chose not to merge other tables since they would be massive and take days to upload (the accidents table took over 5 hours to upload).
- Make any changes to datasets before migration.
- Migrate
- Perform EDA using SQL queries with Python.
  - Questions being asked:
  - What percentage of accidents are motorcycles? What percentage of fatalities are motorcycles? (pie charts)
  - What were the different types of weather factors in motorcycle accidents with percentages? One way anova test to test stat significance of weather. Null is that there is no stat significance.
    - One way anova takes the variance between the groups (in this case types of weather), and compares it against the variance within the groups. So if there is little variance in each group, and there is a large variance between groups, it suggests that the weather group is statistically significant in accidents.
  - Types of injuries in motorcycle accidents
  - What are the different types of motorcycles that are commonly in an accident? (sports, offroad, cruiser...)
  - Is there a correlation between helmets and injury severity, drinking/drugs and injury severity, speed and injury severity, speed and helmets, speed and drinking/drugs... correlation tests? Venn diagrams to show overlap?
  - What percentage of motorcycle accidents did the driver not have a valid license (this includes suspended ones)? Male/female statistics? (general MF, and also what % did no license accidents be male/female)
  - Distracted, impaired, helmet, injury severity
  - Weather statistics, see what percentage of accidents in weather were speed related, alc related, distract.
  - How people got hit / fell off statistics
  - Time vs statistics. Time vs # of moto accidents, average statistics per month over the 3 years.
  - X statistic normalized over the 3 years to show relative increases. And also raw amount. Something like a Z test to see if they are significant increases maybe? First need to figure out distribution.
  - Age range most deaths.
- Note down significant findings, and impactful factors.
- Set up Streamlit site.
- Create a map of the U.S. with accident visualizations that are intractable. Users will be able to select periods as well. This might be able to be done with Folium and Streamlit.
- Create dashboards using Power BI. Optional use tableau as well for other visualizations. Implement on website that the user can interact with.
  - I couldn't embed a BI dashboard because of admin issues. Microsoft is greedy, and stony brook sucks. But i did decided to put the map on using Leaflet, a react library.   
- Create a model that takes the crash data, and all the various parameters, and then comes up with classifications and probabilities of the severity of the crash. For example:
  -   User inputs: ride with no helmet, speed, and it is raining. The model will output that if a crash occurs, the probability of X outcome (fatal, totaled, light, etc).
  -   Not sure what will be used to deploy this model.
