import pytest
import sample_backend
from flask import Flask, render_template, redirect, url_for
from flask import request
from flask import jsonify
from flask_cors import CORS
import random
import string
from model_mongodb import User
import requests
from sample_backend import *
from sample_backend import app
from bson import ObjectId
from pyzipcode import ZipCodeDatabase
zcdb = ZipCodeDatabase()


url = 'http://127.0.0.1:5000/'


def test_hello():
    response = app.test_client().get('/')
    assert response.status_code == 200
    assert response.data == b'Hello, World!'


def test_getUsers():
    response = app.test_client().get('/users')
    assert response.status_code == 200


def test_calculate_distance():
    miles = calculateDistance(37.5630, 122.3255, 35.277189, 120.70305)
    assert miles == 181.87357364904815


def test_zipcode():
    assert zcdb[93405].city == "San Luis Obispo"


def test_get_zipcodes():
    response = app.test_client().get('/zipcodes?zipcode=93405&range=50')
    assert response.status_code == 200


def test_get_zipcodes_invalid():
    response = app.test_client().get('/zipcodes?zipcode=abc&range=50')
    assert response.status_code == 200


def test_get_user_zipcode():
    response = app.test_client().get('/user_zipcode?zipcode=93405')
    assert response.status_code == 200


def test_id():
    response = app.test_client().get('/users/602751f0c861c54ab5acf9db')
    assert response.status_code == 200


def test_invalid_id():
    response = app.test_client().get('/users/602751f0c861c54ab5acf9d0')
    assert response.status_code == 404


def test_postUsers():
    response = app.test_client().post('/users', json={
      "date": "2021-12-01",
      "description": "dfba",
      "event": "gdsf",
      "location": "dfgb",
      "photo": "https://iso.500px.com/wp-content/uploads/2016/02/" +
      "stock-photo-133673159-1500x1000.jpg",
      "rating": 5,
      "tags": "onefish, twofish, redfish, bluefish",
      "zipcode": "93405"
    })
    assert response.status_code == 201
