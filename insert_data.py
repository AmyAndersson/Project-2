import pymongo

# Setup connection to mongodb
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# Select & create database
db = client.data

#collection
cleandata = db.cleandata
with open('clean_data.csv') as f:
    file_data = csv.load(f)
    cleandata.insert(file_data)

client.close()
                                                                                                                                                                                                                                                                                                  
