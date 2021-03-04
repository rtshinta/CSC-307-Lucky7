from flask import Flask, render_template, redirect, url_for
from flask import request
from flask import jsonify
from flask_cors import CORS
import random
import string
from model_mongodb import User
import math
from math import sin, cos, sqrt, atan2, radians
from pyzipcode import ZipCodeDatabase
zcdb = ZipCodeDatabase()


app = Flask(__name__)

#CORS stands for Cross Origin Requests.
CORS(app) #Here we'll allow requests coming from any domain. Not recommended for production environment.



@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/users', methods=['GET', 'POST'])
def get_users():
    if request.method == 'GET':
        #http://127.0.0.1:5000/users?name=Test&job=asdf
        search_username = request.args.get('name')
        search_job = request.args.get('job')
        if search_username and search_job:
            # TODO: Replace with database access
            #result = find_users_by_name_job(search_username, search_job)  
            result = User().find_by_name_and_job(search_username, search_job)
        elif search_username:
            # using list shorthand for filtering the list.
            # TODO: Replace with database access
            #result = [user for user in users['users_list'] if user['name'] == search_username]
            result = User().find_by_name(search_username)
        else:
            result = User().find_all()
        return {"users_list": result}
    elif request.method == 'POST':
        userToAdd = request.get_json() # no need to generate an id ourselves
        userToAdd['latitude'] = zcdb[int(userToAdd['zipcode'])].latitude
        userToAdd['longitude'] = zcdb[int(userToAdd['zipcode'])].longitude
        newUser = User(userToAdd)
        newUser.save() # pymongo gives the record an "_id" field automatically
        resp = jsonify(newUser), 201
        return resp

@app.route('/users/<id>', methods=['GET', 'DELETE'])
def get_user(id):
    if request.method == 'GET':
        #http://127.0.0.1:5000/users/602344b8aba6d37fafe9fae9
        user = User({"_id":id})
        if user.reload() :
            return user
        else :
            return jsonify({"error": "User not found"}), 404
    elif request.method == 'DELETE':
        user = User({"_id":id})
        resp = user.remove()

        # TODO: Check the resp object if the removal was successful or not.
        # Return a 404 status code if it was not successful
        #print(resp)
        #if resp['n'] == 1 and resp['ok'] == 1.0:
            #return resp, 204
            #return resp, 201
        if resp['n'] == 1:
            return jsonify({"success": "User was removed"}), 204
    
        return jsonify({"error": "User not found"}), 404

def calculateDistance(lat1, lon1, lat2, lon2):
    R = 3958.8

    lat1 = radians(float(lat1))
    lon1 = radians(float(lon1))
    lat2 = radians(float(lat2))
    lon2 = radians(float(lon2))
    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    return R * c

@app.route('/zipcodes')
def get_zipcodes():
    user = User().find_all()
    zipcode = request.args.get('zipcode')
    maxrange = request.args.get('range')
    zipcode = zcdb[int(zipcode)]
    #zcdb[93405]        
    #return {"users_list": user}
    l = []
    for x in range(len(user)):
        l.append(user[x]['zipcode'])
    #return {"users_list": l}
    locations = []
    for x in range(len(l)):
        locations.append(zcdb[int(l[x])])
    filtered = []
    for x in range(len(locations)):
        distance = calculateDistance(zipcode.latitude, zipcode.longitude, locations[x].latitude, locations[x].longitude)
        if math.floor(distance) <= int(maxrange):
            filtered.append(user[x])
    return {"users_list": filtered}

@app.route('/user_zipcode')
def get_user_zipcode():
    zipcode = request.args.get('zipcode')
    latAndlon = []
    if zipcode:
        latAndlon.append(zcdb[int(zipcode)].latitude)
        latAndlon.append(zcdb[int(zipcode)].longitude)
    return {"users_list": latAndlon}
    