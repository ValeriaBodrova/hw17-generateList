const array = [1, [1.1, 1.2, 1.3], 2, 3];
const ulEl = document.querySelector('ul');

function generateList(array) {
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
    
    if (Array.isArray(array[i])) {
      const subList = document.createElement('ul');
      
      for (let j = 0; j < array[i].length; j++) {
        const subLi = document.createElement('li');
        subLi.textContent = array[i][j];
        subList.append(subLi);
      }
      
      li.append(subList);
    } else {
      li.textContent = array[i];
    }
    
    ulEl.append(li);
  }
}

generateList(array);