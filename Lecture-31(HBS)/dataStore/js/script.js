const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'todos.json');
// console.log(__dirname);
console.log(filePath);

class MyDB {
    static addTodo(newTask) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath, {
                encoding: 'utf-8'
            },
                (err, data) => {
                    if (err) return reject(err);
                    let parsedData = JSON.parse(data);
                    parsedData.push(newTask);
                    fs.writeFile(
                        filePath,
                        JSON.stringify(parsedData),
                        (err) => {
                            if (err) return reject(err)
                            resolve("Data added successfully in DB");
                        }
                    )
                }
            )
            
        })
    }

    static getTodos() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    console.log("Inside getTodos",data);
                    if (err) return reject(err);
                    resolve(data);
                })
        })
    }
}

let obj = [
    {name:'Coding',id:1},
    {name:'Swimming',id:2},
    {name:'Dancing',id:3},
]

console.log(JSON.stringify(obj));

module.exports = MyDB;
// const MyDB = require('script.js');


// module.exports.MyDB = MyDB;
// const {MyDB} = require('script.js');