var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  start();
});

//function to "start shopping" (ask customer what they want to shop for)
function start(){

// show list of inventory items (include id/name/price)
connection.query("SELECT * FROM Products", function(err, res){
  if(err) throw err;

  console.log("Welcome to Bamazon! \n" + "Let's have some fun & shop 'til you drop! \n")

  for(var i = 0; i<res.length;i++){
    console.log("ID: " + res[i].item_id + "\n" + "Product: " + res[i].product_name + "\n" + "Department: " + res[i].department_name + "\n" + "Price: " + res[i].price + "\n" + "Quantity In Stock: " + res[i].stock_quantity + "\n");
  }

// begin shopping!  Ask customers what they would like to purchase.
    inquirer
        .prompt([
          {
            name: "chooseItem",
            type: "list",
            message: "Which items would you like to add to your cart?",
            choices: ["Camera", "Headphones", "Laptop", "Jeans", "Sweater", "Shorts", "Skirt", "Tent", "Cooler", "Backpack"]
          },
          {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function(value){
              if(isNaN(value)){
                return false;
              } else{
                return true;
              }
            }
          }
        ]).then(function(ans){
            
              var whatToBuy = (ans.id)-1;
              var howMuchToBuy = parseInt(ans.qty);
              var total_cost = parseFloat(((res[whatToBuy].Price)*howMuchToBuy).toFixed(2));

      // confirm there is sufficient product remaining (stock_quantity) 
      if(res[whatToBuy].StockQuantity >= howMuchToBuy){
        //after purchase, updates quantity in Products
        connection.query("UPDATE Products SET ? WHERE ?", [
        {stock_quantity: (res[whatToBuy].stock_quantity - howMuchToBuy)},
        {ItemID: ans.id}
        ], function(err, result){
            if(err) throw err;
            console.log("Item has been added to your cart! Your total is $" + total_cost.toFixed(2) + ". Your item(s) will be shipped to you in 3-5 business days.");
        });

        // connection.query("SELECT * FROM departments", function(err, deptRes){
        //   if(err) throw err;
        //   var index;
        //   for(var i = 0; i < deptRes.length; i++){
        //     if(deptRes[i].DepartmentName === res[whatToBuy].DepartmentName){
        //       index = i;
        //     }
        //   }
          
        //   //updates totalSales in departments table
        //   connection.query("UPDATE Departments SET ? WHERE ?", [
        //   {TotalSales: deptRes[index].TotalSales + grandTotal},
        //   {DepartmentName: res[whatToBuy].DepartmentName}
        //   ], function(err, deptRes){
        //       if(err) throw err;
        //       //console.log("Updated Dept Sales.");
        //   });
        // });

      } else{
        console.log("Oops, it looks like we have limited quantity of that item in stock.  Please adjust desired quantity.");
      }

      reprompt();
    })
})
}

//asks if they would like to purchase another item
function reprompt(){
  inquirer.prompt([{
    type: "confirm",
    name: "reply",
    message: "Would you like to shop around some more?"
  }]).then(function(ans){
    if(ans.reply){
      start();
    } else{
      console.log("Thank you for your patronage!  We value your business and look forward to seeing you soon.");
    }
  });
}

start();