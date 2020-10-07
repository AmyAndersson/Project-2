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
    data1 = pd.read_sql("SELECT * FROM dataone LIMIT 10",conn)
    var = data1.to_json(orient="records")
    return jsonify(var)

#^this will need to return json file 

if __name__ == "__main__":
    app.run(debug=True)
