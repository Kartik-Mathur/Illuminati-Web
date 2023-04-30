
let db;

let data = [
    {
        name: "Tripti",
        age: 20,
        hobbies: ["Dancing", "Eating", "Singing"]
    },
    {
        name: "Ujjwal",
        age: 19,
        hobbies: ["Badminton", "Cooking"]
    }
]

db.users.insertMany(data);

let products = [
    {
        _id: ObjectId("644e2e15696fbf263afa6460"),
        name: 'Chai',
        price: 20,
        description: 'Sasti chaai, ekdum swaad'
    },
    {
        _id: ObjectId("644e2e15696fbf263afa6461"),
        name: 'Coffee',
        price: 30,
        description: 'Nescafe, dedo'
    },
    {
        _id: ObjectId("644e2e15696fbf263afa6462"),
        name: 'Books',
        price: 120,
        description: 'Dooglapan'
    }
]

db.users.updateOne(
    {
        name: 'Tripti'
    },
    {
        $set: {
            products: [
                ObjectId("644e2e15696fbf263afa6460"),
                ObjectId("644e2e15696fbf263afa6461")
            ]
        }
    })

db.users.updateOne(
    {
        name: 'Ujjwal'
    },
    {
        $set: {
            products: [
                ObjectId("644e2e15696fbf263afa6462"),
                ObjectId("644e2e15696fbf263afa6461")
            ]
        }
    })

db.users.findOne({ name: 'Tripti' }).products;
// This will only give the products of tripti

// PROJECTIONS: To pick the fields that we want
// db.users.find({},PROJECTIONS);
db.users.find({}, { name: 1, _id: 0, hobbies: 1 });

db.users.aggregate({
    $lookup:
    {
        from: "products",
        localField: "products",
        foreignField: "_id",
        as: "myProducts"
    }
})