users
{
    name: 'Tripti',
        products_id: [
            {
                _id: id1,
                quantity: 2
            },
            {
                _id: id2,
                quantity: 3
            }
            ,
            {
                _id: id3,
                quantity: 4
            }
        ]
}

{ name: 'Tripti2.0', products_id: [id2, id1] }

products
{ name: "Chaai", _id: id1, price: 10 },
{ name: "Coffee", _id: id2, price: 40 },
{ name: "Paani", _id: id3, price: 30 },
{ name: "Juice", _id: id4, price: 50 },


// Or
users
[
    {
        name: 'Tripti',
        products: [
            { name: "Chaai", _id: id1, price: 10 },
            { name: "Coffee", _id: id2, price: 20 },
        ]
    },
    {
        name: 'Tripti2.0',
        products: [
            { name: "Paani", _id: id3, price: 30 },
            { name: "Coffee", _id: id2, price: 20 },
            { name: "Juice", _id: id4, price: 50 }
        ]
    }
]