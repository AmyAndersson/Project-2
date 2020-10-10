from flask import Flask, render_template
from flask import Flask, jsonify
from sqlalchemy import create_engine
import pandas as pd
from config import username
from config import password
from config import database

app = Flask(__name__)

#create connection to databse
engine = create_engine(f"postgresql://{username}:{password}@localhost:5432/{database}")
conn=engine.connect()


@app.route("/datatwo")
def data2():
    #print("ahhh")
    data2 = pd.read_sql("SELECT * FROM spcs",conn)
    #print(data2)
    var2 = data2.to_json(orient="records")
    #print(type(var2))
    return var2

@app.route("/index.html")
def html():
    
    return render_template("index.html")

@app.route("/dashboard.html")
def dashboard():
    
    return render_template("dashboard.html")

@app.route("/data.html")
def datasources():
    
    return render_template("data.html")

if __name__ == "__main__":
    app.run(debug=True)
