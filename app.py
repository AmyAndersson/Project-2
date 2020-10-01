from flask import Flask, render_template
from flask_pymongo import PyMongo


app = Flask(__name__)

#create conection
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. 
datagov = client.datagovau

@app.route("/")
def index():
    listings = mongo.db.listings.find_one()
    return render_template("index.html", listings=listings)


@app.route("/scrape")
def scraper():
    listings = mongo.db.listings
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)
