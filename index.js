alert("Request you to open in desktop mode");
let title = document.getElementById("title");
let description = document.getElementById("des");
let save = document.getElementsByClassName("save");
let box2 = document.getElementsByClassName("box-2");
let unorder = document.getElementsByTagName("ul");


save[0].addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission


  let ulist = document.createElement("ul");
  ulist.classList.add("save-data");

  let li = document.createElement("li");
  ulist.appendChild(li);
  let liTitle = document.createTextNode(title.value);
  li.appendChild(liTitle);

  let li2 = document.createElement("li");
  ulist.appendChild(li2);
  let liDes = document.createTextNode(description.value);
  li2.appendChild(liDes);

  let li3 = document.createElement("li");
  ulist.appendChild(li3);
  let i = document.createElement("i");
  i.classList.add("fa-solid");
  i.classList.add("fa-trash");
  li3.appendChild(i);

  box2[0].appendChild(ulist);

  title.value = ' ';
  description.value = ' ';

  // console.log(de[0]);
  console.log(ulist);

  i.addEventListener("click",function(){
        ulist.remove();
        
  });
  
});

// i.addEventListener("click", function () {
//   ulist.remove();



