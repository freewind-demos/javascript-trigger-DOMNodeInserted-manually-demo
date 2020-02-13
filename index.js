const main = document.getElementById('main');
main.addEventListener('DOMNodeInserted', () => {
  console.log('### DOMNodeInserted')
});

setInterval(() => {
  const newChild = document.createElement('div');
  main.appendChild(newChild)
}, 1000)

