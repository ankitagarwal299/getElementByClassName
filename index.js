// Import stylesheets
import './style.css';

// Write Javascript code!
const rootElem = document.getElementById('root');

function findByClass(cls) {
  let result = [];

  function traverse(curNode) {
    if (!curNode) return;

    if (Array.from(curNode.classList).indexOf(cls) > -1) {
      result.push(curNode.getAttribute('id'));
    }

    for (let node of curNode.children) {
      traverse(node);
    }
  }

  traverse(rootElem);

  return result;
}

/*Test Cases */
console.log(findByClass('a')); //["root", "a-2", "a-3"]
console.log(findByClass('b')); //["b-1"]
console.log(findByClass('d')); //["d-1", "d-2"]
