db.people.aggregate([
    { $match: { age: 20 } }
]);


db.people.aggregate([
    { $match: { age: 20 } },
    { $group: { _id: "$hobbies.name", totalUsers: { $sum: 1 } } },
    {$project: {_id:1,name:1}}
]);

db.people.aggregate([
    { $match: { age: 20 } },
    {$project: {_id:1,name:1}}
]);


db.people.aggregate([
    { $group: { _id: "$hobbies.name", totalUsers: { $sum: 1 } } }
]);