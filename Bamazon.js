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
    type: 'list',
    name: 'Shoe',
    message: "What Shoes are You Looking to Buy?",
    choices: [{
      name: "Nike",
      value: 1
    },
    {
      name: "Adidas",
      value: 2
    },
    {
      name: "New Balance",
      value: 3
    },
    {
      name: "Reebok",
      value: 4
    },
    {
      name: "Puma",
      value: 5
    },
    {
      name: "Asics",
      value: 6
    },
    {
      name: "Gucci",
      value: 7
    },
    {
      name: "Jordans",
      value: 8
    },
    {
      name: "Saucony",
      value: 9
    },
    {
      name: "Timbaland",
      value: 10
    }]
  },



]).then(function(answers){
  var quantity;
  var id = answers.Shoe;
  connection.query("SELECT * FROM products WHERE ?",
  { id: id }, function(err, res) {
    //svar userInput = JSON.stringify(answers.name);
    var response = res[0];
    console.log("--------------------")
    console.log(`You've selected ${response.shoe}!`)
    //console.log("The quantity is " + response.quantity)
    quantity = response.quantity;
    inquirer.prompt ([
      {
        name: 'numberOfPairs',
        message: "How many Pairs are You Looking to Buy?",
      }
    ]).then(function(answer) {
      console.log(quantity);
      console.log("You want to buy: " + answer.numberOfPairs);
      var updatedQuantity = quantity - answers.numberOfPairs;
      console.log("updatedQuantity " + updatedQuantity);
      if (answer.numberOfPairs <= quantity) {
        connection.query("UPDATE products SET quantity = ? WHERE ?", [updatedQuantity, { id: id }],  function(err, res) {
          if (err) throw err;// var response = res[0];
          console.log("We Got It!");
          console.log(res);
        });
      } else {
          console.log("We are Out!");
        }

      //}
    });


  })
    })
  //   if (userInput ===  answers.name) {
  // }



}





  //
  // {
  //   type: 'Units',
  //   name: 'Quantity',
  //   message: "How Many Pair's Are You Looking To Buy?",
  // }
