let college = {
    name: 'DTU',
    year: 2023
}

let worldWide = {
    name: 'UPSC',
    year: 1960
}


function exam(studentName, city){
    console.log(this,studentName,city);
    this.studentName = studentName;
    this.city = city;
}

let fun = exam.bind(college,"Tripti",'Bombay');
fun();

// exam.apply(worldWide, ['Vaibhav', 'Delhi']);
// console.log(worldWide);

// exam.call(worldWide, 'Vaibhav', 'Delhi');
// console.log(worldWide);