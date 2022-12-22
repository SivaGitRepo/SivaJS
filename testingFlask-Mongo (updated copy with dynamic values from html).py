from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from pymongo import MongoClient
import json
import pandas as pd

load_dotenv()

MONGODB_URI = os.environ["MONGODB_URI"]

client = MongoClient(MONGODB_URI)

db = client.LearnMongo

stock_data = db.Collec1

testingFlask = Flask(__name__)                                 # Set up Flask
cors = CORS(testingFlask)                                      # Set up Flask to bypass CORS

# <strong>#Create the receiver API POST endpoint</strong>:
@testingFlask.route("/receiver", methods=["POST","GET"])
def postME():
 print ("inside postME function")
 headers = {'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'}
 jsonData = json.dumps(request.json)
 requestData = json.loads(jsonData)

 for req in requestData:
     if req == 'PEfrom':
         PEfrom = requestData[req]
     if req == 'PEto':
         PEto = requestData[req]
     if req == 'PBfrom':
         PBfrom = requestData[req]
     if req == 'PBto':
         PBto = requestData[req]
     if req == 'TurnoverCrores':
         TurnoverCr = requestData[req]
     print (req, '||', requestData[req])

 projection = {"$project": {"SECTOR": 1, "_id": 0}}
 documents_to_find = {
     "$match": {"PE": {"$gt": PEfrom, "$lt": PEto}, "PB": {"$gt": PBfrom, "$lt": PBto}, "Turnover in Crores": {"$gt": TurnoverCr}}}
 group_by = {"$group": {"_id": "$SECTOR", "count": {"$sum": 1}}}
 cursor = stock_data.aggregate([documents_to_find, group_by])

 data = []
 for group1 in cursor:
     #print(group1)
     data.append(group1)
 
 data = jsonify(data)
 return data

if __name__ == "__main__":
  #testingFlask.run(debug=True)
  testingFlask.run()


# json Methods:
## load()     : This method is used to load data from a JSON file into a python dict.
## Loads( ) : This method is used to load data from a JSON variable into a python dict.
## dump()  :  This method is used to load data from the python dictionary to the JSON file.
## dumps(): This method is used to load data from the python dictionary to the JSON variable.