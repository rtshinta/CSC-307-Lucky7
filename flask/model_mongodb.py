import pymongo
from bson import ObjectId

class Model(dict):
    """
    A simple model that wraps mongodb document
    """
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    def save(self):
        if not self._id:
            self.collection.insert(self)
        else:
            self.collection.update(
                { "_id": ObjectId(self._id) }, self)
        self._id = str(self._id)

    def reload(self):
        if self._id:
            result = self.collection.find_one({"_id": ObjectId(self._id)})
            if result :
                self.update(result)
                self._id = str(self._id)
                return True
        return False

    def remove(self):
        if self._id:
            resp = self.collection.remove({"_id": ObjectId(self._id)})
            self.clear()
            return resp

class User(Model):
    #db_client = pymongo.MongoClient('localhost', 27017)
    db_client = pymongo.MongoClient('mongodb+srv://csc307:csc307@popup-307.ugbrh.mongodb.net/<dbname>?retryWrites=true&w=majority')
    collection = db_client["users"]["users_list"]

    def find_all(self):
        users = list(self.collection.find())
        for user in users:
            user["_id"] = str(user["_id"])
        return users

    def find_by_name(self, name):
        users = list(self.collection.find({"name": name}))
        for user in users:
            user["_id"] = str(user["_id"])
        return users

    def find_by_name_and_job(self, name, job):
        users = list(self.collection.find({"name": name, "job":job}))
        for user in users:
            user["_id"] = str(user["_id"])
        return users
    
    def update(self,key,value):
            resp = self.collection.update({"_id": ObjectId(self._id)},{'$set' : {key: value}})
            return resp