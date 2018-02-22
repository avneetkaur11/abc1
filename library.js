var funcs = require("./funcs");


users = [
  {
    name:"Avneet",
    books:4,
    days:35
  },
  {
    name:"Ravi",
    books:1,
    days:6
  },
  {
    name:"Arjun",
    books:5,
    days:1
  }
]

for(i=0;i<3;i++){
  console.log("Name:"+users[i].name);
  funcs.calc_fine(users[i].books,users[i].days);
  console.log("----------------");
}
