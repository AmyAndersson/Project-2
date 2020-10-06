from flask import Flask, render_template
from flask import Flask, jsonify

app = Flask(__name__)

#create conection
# engine = create_engine("sqlite:///")

# Connect to a database. 
db1 = client.data

@app.route("/file1")
def index():
    species = mongo.datagovau.find_one()
    return render_template("index.html", listings=species)
#^this will need to return json file 

if __name__ == "__main__":
    app.run(debug=True)
