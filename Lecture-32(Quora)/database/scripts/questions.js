const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, '..', 'data', 'questions.json');

class Questions {
    static addQuestion(question) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                { encoding: 'utf-8' },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data);
                    data.push(question);
                    fs.writeFile(
                        filePath,
                        JSON.stringify(data),
                        (err) => {
                            if (err) return reject(err);
                            resolve(question);
                        }
                    )
                }
            )
        })
    }

    static getQuestions(id){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                filePath,
                { encoding: 'utf-8' },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data);
                    let questions = data.filter((d)=>d.id == id);
                    resolve(questions);
                }
            )
        })
    }

    static deleteQuestion() { }
}

module.exports = Questions;