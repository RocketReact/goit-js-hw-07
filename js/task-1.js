const chooseLi = document.querySelectorAll('.item');
const countLi = chooseLi.length;
console.log('Number of categories:', countLi);

chooseLi.forEach((item) => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('.item>ul li').length);
});
