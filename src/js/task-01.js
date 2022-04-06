const liItem = document.querySelectorAll(".item");

console.log("Number of categories:", liItem.length)



const listHeaders = document.querySelectorAll(".item h2");

listHeaders.forEach(function (element) {
    // console.log(element)
    // console.log(element.textContent)
    // console.log(element.nextElementSibling)
    // console.log(element.nextElementSibling.children)
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`);
});

const ItemEl = document.querySelectorAll(".item");

ItemEl.forEach((elem) => {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});
