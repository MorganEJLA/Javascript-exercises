/*
  WRITE YOUR SOLUTION HERE
*/

class book {
  constructor(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies
  }



get availability(){
  return this.getAvailability();
}

getAvailability(){ 
  if(this.numCopies == 0){
    return "Out of Stock";
  } else if (this.numCopies <10){
    return "Low Stock";

  }
    return "In Stock";
  }



  sell(numCopiesSold = 1){
  this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5){
  this.numCopies += numCopiesStocked;
}

}