const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, '..', 'data', 'users.json');
const { v4: uuidv4 } = require('uuid');

class Users {
    static getUser(username, password) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath, {
                encoding: 'utf-8'
            },
                (err, data) => {
                    if (err) return reject(err)
                    data = JSON.parse(data);
                    let user = data.filter(u => u.username == username);
                    if(user.length > 0) return resolve(user);
                    reject("User not found");
                }
            )
        })
    }

    static addUser(username, password) {
        return new Promise((resolve, reject) => {
            console.log(username,password)
            fs.readFile(
                filePath, {
                encoding: 'utf-8'
            },
                (err, data) => {
                    if (err) return reject(err)
                    data = JSON.parse(data);
                    let existingUser = data.filter((d) => {
                        if (d.username == username) return true;
                        return false;
                    })
                    if (existingUser.length > 0) return reject('User is already present');

                    data.push({
                        username,
                        password,
                        id: uuidv4()
                    })
                    fs.writeFile(filePath,
                        JSON.stringify(data),
                        (err) => {
                            if (err) return reject(err);
                            resolve("User Added Successfully");
                        })
                }
            )
        })
    }

    static deleteUser(username, password) { }
}

module.exports = Users;