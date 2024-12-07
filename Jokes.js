const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,explicit&type=single";
let joker = document.querySelector("#joke");

let getJokes = async ()=>{
let response = await fetch(url);
let data = await response.json();
console.log(data);
joker.textContent = data.joke;
}

let gbtn = document.querySelector("#generate-btn");
gbtn.addEventListener("click",()=>{
    getJokes();
})


