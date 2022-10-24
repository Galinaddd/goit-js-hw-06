const ulRef = document.querySelector('#categories');
const itemRef = document.querySelectorAll('.item');

console.log('Number of categories: ', ulRef.children.length);
// або так:
// console.log(itemRef.length);
for (let i = 0; i < ulRef.children.length; i += 1) {
  console.log('Category:', ulRef.children[i].firstElementChild.textContent);
  console.log('Elements:', itemRef[i].lastElementChild.children.length);
  console.log('');
}
