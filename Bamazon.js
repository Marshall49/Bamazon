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
    choices: {
      shoeName: "Nike",
      indexNumber: 1
    }
    // {
    //   shoeName: "Adidas",
    //   indexNumber: 2
    // },
    // {
    //   shoeName: "New Balance",
    //   indexNumber: 3
    // }
    // {
    //   shoeName: "Reebok",
    //   indexNumber: 4
    // }
    // {
    //   shoeName: "Puma",
    //   indexNumber: 5
    // },
    // {
    //   shoeName: "Asics",
    //   indexNumber: 6
    // },
    // {
    //   shoeName: "Gucci",
    //   indexNumber: 7
    // },
    // {
    //   shoeName: "Air Jordans",
    //   indexNumber: 8
    // },
    // {
    //   shoeName: "Saucony",
    //   indexNumber: 9
    // },
    // {
    //   shoeName: "Timbaland",
    //   indexNumber: 10
    // }
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
