exports.calc_fine=(books,days)=>{
    var f = 0;
    if(days>5){
      f=10*days;
    }else if(days>10){
      f=20*days;
    }

    if(days<=30){
      if(days<=5){
        f=5;
      }else if (days>5 && days<=10){
        f = 10;
      }else if (days>10 && days<=30){
      f = 50;
      }
      f *=books;
      console.log("Total Books:"+books);
      console.log("Total days:"+days);
      console.log("Total fine to be paid:"+f);
    }else{
      console.log("your membership has been cancelled");
    }

}
