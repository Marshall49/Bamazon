var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "Bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  allShoes();
  Question();
});

function allShoes() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].shoe + " | " + "Price " + res[i].price + " | " + "Quantity " + res[i].quantity);
    }
    console.log("-----------------------------------");
  });

}

function Question() {
inquirer.prompt ([
  {
    type: 'Shoe',
    name: 'What',
    message: "What Shoes are You Looking to Buy?",
    choices: ['Nike', 'Adidas', 'New Balance', 'Reebok', 'Puma', 'Asics', 'Gucci', 'Air Jordans', 'Saucony', 'Timbaland'],
  },
]).then(function(answers){
  connection.query("SELECT * FROM products", function(err, res) {
    var userInput = JSON.stringify(answers.What, null, 2);
    console.log(userInput);
    if (userInput ===  answers.choices, null, 2) {
    console.log("The User chose");
  }
  else {
    console.log("Nope");
  }


})
})
}



  //
  // {
  //   type: 'Units',
  //   name: 'Quantity',
  //   message: "How Many Pair's Are You Looking To Buy?",
  // }
