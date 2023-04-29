
- cls;
    To clear the screen

- show dbs; 
    To see the available database

- use products;
    To create a new DB products

Insert a document
<pre>db.products.insertOne({
...     "name":"Book",
...     "price": 40.12,
...     "description":"This is an awesome book"
})</pre>

Insert Many

<pre>db.products.insertMany([{
...     "name":"Laptop",
...     "price": 400,
...     "description":"This is an awesome Laptop"
... },
... {
...     "name":"PEN",
...     "price": 4,
...     "description":"This is an awesome Pen"
... }]);</pre>

Search a product

- db.products.find().forEach(d=>printjson(d))