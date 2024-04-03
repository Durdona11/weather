let btn_one = document.querySelector(".btn-one");
// let btn_two = document.querySelector(".btn-two");
let title = document.querySelector(".title");
let text = document.querySelector(".text");
let big = document.querySelector(".container");
let img_one = document.querySelector(".img-one");
let img_two = document.querySelector(".img-two");

btn_one.addEventListener("click", () => {
 if(text.textContent==="Rainy day"){
  text.textContent = "Sunny day";
  big.classList.remove("big-black");
  title.classList.remove("text-blue");
  text.classList.remove("text-blue");
  btn_one.classList.add("btn-after");
  // btn_two.classList.remove("btn-after");
  img_two.classList.add("img2");
  img_one.classList.remove("img1");
 } 
 else if(text.textContent==="Sunny day"){
  text.textContent="Rainy day";
  big.classList.add("big-black");
  title.classList.add("text-blue");
  text.classList.add("text-blue");
  // btn_two.classList.add("btn-after");
  btn_one.classList.remove("btn-after");
  img_two.classList.remove("img2");
  img_one.classList.add("img1");
 }
});

// btn_two.addEventListener("click", () => {
//   text.textContent = "Rainy day";
//   big.classList.add("big-black");
//   title.classList.add("text-blue");
//   text.classList.add("text-blue");
//   btn_two.classList.add("btn-after");
//   btn_one.classList.remove("btn-after");
//   img_two.classList.remove("img2");
//   img_one.classList.add("img1");
// });
