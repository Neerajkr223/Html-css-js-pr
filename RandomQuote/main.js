const quotesArray = [
  {
    genre: "Motivational",
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    genre: "Inspirational",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    genre: "Humor",
    quote: "I'm on a whiskey diet. I've lost three days already.",
    author: "Tommy Cooper",
  },
  {
    genre: "Romantic",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    genre: "Philosophical",
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    genre: "Science Fiction",
    quote:
      "The future is already here – it's just not very evenly distributed.",
    author: "William Gibson",
  },
  {
    genre: "Fantasy",
    quote: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien",
  },
  {
    genre: "Self-Help",
    quote:
      "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "A.A. Milne",
  },
];
const quote = document.querySelector(".quote");
const genre = document.querySelector(".genre");
const author = document.getElementById("generator");
let prevIndex = null;
generator.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * quotesArray.length);
  if (prevIndex === randomIndex) {
    randomIndex = Math.floor(Math.random() * quotesArray.length);
  }
  quote.innerText = quotesArray[randomIndex].quote;
  genre.innerText = quotesArray[randomIndex].genre;
  prevIndex.innerText = quotesArray[randomIndex].prevIndex;
  prevIndex = randomIndex;
});
