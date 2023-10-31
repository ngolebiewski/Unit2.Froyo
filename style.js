/*
A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
When they view the browser console, they observe a table listing how many of each flavor they have ordered. 
In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.
*/

//prompt user
  //Welcome to Frodo's Froyo Festival🍦
  // "Enter a list of comma-separated froyo flavors"
    //test with: vanilla,vanilla,vanilla,strawberry,coffee,coffee
  //accept user input as a string called customerOrderString

  const customerOrderString = prompt(`Welcome to Frodo's Froyo Festival🍦\nEnter a list of comma-separated froyo flavors: `)

  //alert --- "thanks for your order, open the console and look at the results"
  alert("Thanks for your order, open the console and look at the results");

  //create an array called customerOrderArray via split "," method,
  const customerOrderArray = customerOrderString.split(',');
  
  //initialize customerOrderObject as an empty object
  const customerOrderObject = {};
  console.log(customerOrderObject);

  //make this a function called froyoOrderTaker
  const froyoOrderMaker = (froyoFlavors) => {
    //loop through array and add to an object called customerOrderObject
      //loop through array and add to an object called customerOrderObject
      //logic to add in if key is not in there. if key is in add 1 to value
        //no vanilla in object ---> add froyoObject[vanilla] = 1
        //yes vanilla in keys ----> froyoObject[vanilla] +=1 
    for (let i = 0; i < froyoFlavors.length; i++) {
      if (froyoFlavors[i] in customerOrderObject) {
        customerOrderObject[i]++;
      } else {
        customerOrderObject[i] = 1;
      }
    }
  }

//console out the froyoOrderTaker   
console.log(customerOrderObject);

   


////or//////////

//start with the order Array
  //Google how to find unique names in an Array
  //filter method on each unique name
  //take these and put in object
  

//console out 