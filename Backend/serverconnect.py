# -*- coding: utf-8 -*-
"""
Created on Sat May 27 00:15:52 2023

@author: Malilanz
"""

import mysql.connector


def connectdb():
    
    try:
        connection = mysql.connector.connect(host='localhost',
                                             database='quantum_quest',
                                             user='root',
                                             password='')
    
    except mysql.connector.Error:
        response = False
        
    finally:
        if connection.is_connected():
            response = True
            return connection, response
        else:
            return None,response

def closeconnection(cursor, connection):
    if connection.is_connected():
        connection.close()
        return True
