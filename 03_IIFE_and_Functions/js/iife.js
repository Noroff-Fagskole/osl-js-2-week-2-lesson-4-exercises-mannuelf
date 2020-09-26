
(function() {
  console.log("👋 Hello world");
})();

(async function getJokes(...args) {

  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const jokes = await response.json();
  console.log("getJokes", jokes);
  return jokes;
})();

/*
async function getJokes() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const jokes = await response.json();
  console.log("getJokes", jokes);
}

getJokes();
*/

