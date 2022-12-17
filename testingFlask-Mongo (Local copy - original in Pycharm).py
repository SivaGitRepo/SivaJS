from flask import Flask, request, jsonify, json
from flask_cors import CORS
import os
from dotenv import load_dotenv
from pymongo import MongoClient
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
 data = request.json

 projection = {"$project": {"SECTOR": 1, "_id": 0}}
 documents_to_find = {
     "$match": {"PE": {"$gt": 0, "$lt": 5}, "PB": {"$gt": 0, "$lt": 2}, "Turnover in Crores": {"$gt": 0}}}
 group_by = {"$group": {"_id": "$SECTOR", "count": {"$sum": 1}}}
 cursor = stock_data.aggregate([documents_to_find, group_by])

 data = []
 for group1 in cursor:
     print(group1)
     data.append(group1)
 
 data = jsonify(data)
 return data

if __name__ == "__main__":
  #testingFlask.run(debug=True)
  testingFlask.run()