# -*- coding: utf-8 -*-
"""
Created on Wed May 24 15:49:44 2023

@author: Malilanz
"""


from flask import Flask, jsonify, request
from flask_cors import CORS
import carouseldata as cd
import categoryname as cn
import servicename as sn

app = Flask(__name__)
CORS(app)


@app.route('/carouseldata', methods=['GET'])
def get_carousel_data():
    carousel_data, response = cd.get_data()
    return jsonify(carousel_data)

@app.route('/categorynames', methods=['GET'])
def get_category_names():
    category_names, response = cn.get_data()
    return jsonify(category_names)

@app.route('/servicenames', methods=['GET'])
def get_service_names():
    service_names, response = sn.get_data()
    return jsonify(service_names)

if __name__ == '__main__':
    app.run()

