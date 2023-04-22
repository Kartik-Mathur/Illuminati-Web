const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname,'..','data','data.json');

class Posts{
    static addPost(post){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                filePath,
                {
                    encoding: 'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data);
                    data.push(post);
                    fs.writeFile(
                        filePath,
                        JSON.stringify(data),
                        (err)=>{
                            if(err) return reject(err);
                            resolve(data);
                        }
                    )
                }
            )
        })
    }

    static getAllPost(){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                filePath,{encoding:'utf-8'},
                (err,data)=>{
                    if(err) return reject(err);
                    resolve(data);
                }
            )
        })
    }

    static deletePost(id){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                filePath,
                {
                    encoding:'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data);
                    data = data.filter((d)=>d.id != id);
                    fs.writeFile(
                        filePath,
                        JSON.stringify(data),
                        (err)=>{
                            if(err) return reject(err);
                            resolve(data);
                        }
                    )
                }
            )
        })
    }
}


module.exports = Posts;
