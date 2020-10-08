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



# what do we want this to do when the index route
@app.route("/dataone")
def index():
    data1 = pd.read_sql("SELECT * FROM dataone",conn)
    var = data1.to_json(orient="records")
    return jsonify(var)

@app.route("/datatwo")
def data():
    print("ahhh")
    data2 = pd.read_sql("SELECT * FROM spcs",conn)
    print(data2)
    var2 = data2.to_json(orient="records")
    return jsonify(var2)

@app.route("/")
def html():
    
    return render_template("test.html")


if __name__ == "__main__":
    app.run(debug=True)
