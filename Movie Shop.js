// Test 1 --> Movie Shop

const movies = [
  {
    title: "Lord of the Rings",
    price: 28000,
  },
  {
    title: "Star Wars",
    price: 24000,
  },
  {
    title: "Spiderman 3",
    price: 15000,
  },
  {
    title: "Inception",
    price: 32000,
  },
];

const shoppingLists = [
  ["Lord of the Rings", "Spiderman 3"],
  ["Star Wars", "Inception", "Spiderman 3"],
];

function totalPrice(movies, shoppingLists) {
  for (let i = 0; i < shoppingLists.length; i++) {
    let totalPrice = 0;
    const movieList = shoppingLists[i];
    
    for (let j = 0; j < movieList.length; j++) {
      const movieTitle = movieList[j];

      const movie = movies.find((movie) => movie.title === movieTitle);
      if (movie) {
        totalPrice += movie.price;
      }
    }
    console.log(totalPrice);
  }
}

totalPrice(movies, shoppingLists)