let database = "VITinternship";
use(database);
db.createCollection("Students");

// db.Students.insertOne({
//     name : "Achyuth",
//     age:20,
//     course:"CSE",
// });

db.Students.insertOne({
  name: "Dhoni",
  age: 20,
  course: "ECE",
});

db.Students.find();
