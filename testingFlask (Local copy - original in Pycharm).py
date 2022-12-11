from flask import Flask, request, jsonify, json
from flask_cors import CORS

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
 data.append({'make': 'Maruthi', 'model': 'Swift-Dzire'})
 print (data)
 data = jsonify(data)
 return data
if __name__ == "__main__":
  #testingFlask.run(debug=True)
  testingFlask.run()