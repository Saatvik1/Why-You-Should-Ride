# Why-You-Should-Ride

## Project Plan: 
### Context and Ideation: 
#### There are millions of motorcyclists in the U.S. It's a popular hobby for many and is a part of many cultures. While it may be fun and thrilling to ride motorcycles, it also comes with its disadvantages and risks. As an aspiring and beginner rider, I want my fellow riders to stay as safe as possible. My goal is to raise awareness, beyond the known knowledge that motorcycles are dangerous so that riders can take specific actions to ride safely instead of receiving the common fear-mongering comment. 

### Project Outline: 
#### Data will be selected by the NHTSA [insert link to data sources] (general website link) [insert link]. NHTSA provides detailed data on all motor crashes and publicy realeases said data. These datasets are very large and will require a lot of cleaning and formatting before it is ready to use. 

#### First step will be to collect relevant data. The datasets they provide are fragmented. The same crash will appear in different csv sheets with different data (weather, vehicle, person, etc). 
- Decide what datasheets.
  - vehicle, accident, person, weather, distract, drimpair, drugs (need to check if certain details like weather, distract, drugs, and other info are only reported with (non)fatalities, it will bias the model)
    - Drug test administered regardless, or by some other decision making process I am not aware of. Distract colinearity will be discovered during EDA / Model creation. 
  - List of columns that are important:
    - drimpair:
      - ST_CASE
      - VEH_NO
      - DRIMPAIRNAME
    - weather:
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
      - COUNTNAME
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
      - MAN_COL
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
      - L_COMPLNAME (valid liscence for class m for example)
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
- Download the data, and perform data cleaning. Prepare it for migration to database. Will be done using python and data sci libraries such as Pandas, numpy, etc.
- Plan MySQL DB structure. Will be using Planet Scale as MySQL DB provider.
  - Make E-R diagram, and write out table properties, and then creation queries.
- Make any changes to datasets before migration.
- Migrate
- Perform EDA using SQL queries with python.
- Note down significant findings, and impactful factors.
- Setup Streamlit site.
- Create map of U.S with accident visualizations that are interactable. User will be able to select time period as well. This might be able to be done with Folium and streamlit.
- Create dashboards using Power BI. Optional use tableau as well for other visualizations. Implement on website that the user can interact with.
- Create a model that takes the crash data, all the various parameters, and then comes up with classifications and probabilities of severity of crash. For example:
  -   User inputs: ride with no helmet, speed, and it is raining. Model will output that if a crash were to occur, the probability of X outcome (fatal, totaled, light, etc).
  -   Not sure what will be used to deploy this model.
  -   Will be a form like structure.
