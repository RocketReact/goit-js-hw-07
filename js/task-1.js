const chooseLi = document.querySelectorAll('.item');
const countLi = chooseLi.length;
console.log('Number of categories:', countLi);

const firstH2 = document.querySelectorAll('#categories .item');

firstH2.forEach((item) => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('ul li').length);
});
