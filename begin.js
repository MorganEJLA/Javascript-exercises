/*
  WRITE YOUR SOLUTION HERE
*/

class Movie {
    constructor(title, director, genre, releaseYear, rating) {
      this.title = title;
      this.director = director;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.rating = rating;
    }
  


  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

  const Sabrina = new Movie ("Sabrina", "Billy Wilder", "RomCom", 1955, 7.7);
  console.log(Sabrina);
  console.log(Sabrina.getOverview());
