# -*- coding: utf-8 -*-
"""
Created on Sat May 27 12:34:46 2023

@author: Malilanz
"""

import serverconnect as dbc
import json

def insert_data(name, image_url, alt_text, nav_link):
    
    try:
    
        sql_connection, sql_response = dbc.connectdb()
        
        cursor = sql_connection.cursor()
        
        query = "INSERT INTO service_name (name, image_url, alt_text, nav_link) VALUES (%s, %s, %s, %s)"
        
        values = (name, image_url, alt_text, nav_link)
        
        cursor.execute(query, values)
    
        sql_connection.commit()
    
    except :
        response = False
    
    finally:
        sql_response = dbc.closeconnection(cursor, sql_connection)
        if sql_response == True:
            response = True
        return response


def get_data():
    
    try:
    
        sql_connection, sql_response = dbc.connectdb()
        
        cursor = sql_connection.cursor()
        
        query = "SELECT * FROM service_name"
    
        cursor.execute(query)
        
        results = cursor.fetchall()
        
        rows = []
        for row in results:
            row_data = {
                "id": row[0],
                "name": row[1],
                "image_url": row[2],
                "alt_text": row[3],
                "nav_link": row[4]
            }
            rows.append(row_data)
        
        json_data = json.dumps(rows)
    
    except:
        response = False
    
    finally:
        sql_response = dbc.closeconnection(cursor, sql_connection)
        if sql_response == True:
            response = True 
            return json_data, response
        else:
            return None, response
