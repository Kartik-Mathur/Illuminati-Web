const { getDB } = require("../database/database");
const collectionName = 'posts';

class Posts {
    constructor(imageUrl, description, title) {
        this.imageUrl = imageUrl;
        this.description = description;
        this.title = title;
    }

    save() {
        return getDB().collection(collectionName)
            .insertOne(this);
    }

    static getPosts() {
        // return getDB().collection(collectionName).find({});
        return new Promise(async (resolve, reject) => {
            try {
                let data = await getDB().collection(collectionName).find({}).toArray();
                console.log(data);
                resolve(data);
            }
            catch(err){
                reject(err);
            }
        })
    }
}

module.exports = Posts;