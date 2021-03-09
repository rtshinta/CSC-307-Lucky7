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

# CORS stands for Cross Origin Requests.
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/users', methods=['GET', 'POST'])
def get_users():
    if request.method == 'GET':
        result = User().find_all()
        return {"users_list": result}
    elif request.method == 'POST':
        userToAdd = request.get_json()  
        userToAdd['latitude'] = zcdb[int(userToAdd['zipcode'])].latitude
        userToAdd['longitude'] = zcdb[int(userToAdd['zipcode'])].longitude
        newUser = User(userToAdd)
        newUser.save()  
        resp = jsonify(newUser), 201
        return resp


@app.route('/users/<id>', methods=['GET', 'DELETE', 'PATCH'])
def get_user(id):
    if request.method == 'GET':
        user = User({"_id": id})
        if user.reload():
            return user
        else:
            return jsonify({"error": "User not found"}), 404
    elif request.method == 'DELETE':
        user = User({"_id": id})
        resp = user.remove()
        if resp['n'] == 1:
            return jsonify({"success": "User was removed"}), 204
        return jsonify({"error": "User not found"}), 404
    elif request.method == 'PATCH':
        user = User({"_id": id})
        data = request.get_json()
        for key in data:
            user.update_user(key, data[key])
        return jsonify({"Success": "User was patched"}), 200


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
    zipcode = request.args.get('zipcode')
    maxrange = request.args.get('range')
    try:
        len(zipcode) == 5
        zipcode = int(zipcode)
    except (RuntimeError, ValueError):
        return {"users_list": User().find_all()}
    if zipcode:
        user = User().find_all()
        zipcode = zcdb[int(zipcode)]
        l1 = []
        for x in range(len(user)):
            l1.append(user[x]['zipcode'])
        locations = []
        for x in range(len(l1)):
            locations.append(zcdb[int(l1[x])])
        filtered = []
        for x in range(len(locations)):
            distance = calculateDistance(zipcode.latitude, zipcode.longitude,
                                         locations[x].latitude,
                                         locations[x].longitude)
            if math.floor(distance) <= int(maxrange):
                filtered.append(user[x])
        return {"users_list": filtered}
    return {"users_list": User().find_all()}


@app.route('/user_zipcode')
def get_user_zipcode():
    zipcode = request.args.get('zipcode')
    latAndlon = []
    if zipcode:
        latAndlon.append(zcdb[int(zipcode)].latitude)
        latAndlon.append(zcdb[int(zipcode)].longitude)
    return {"users_list": latAndlon}
