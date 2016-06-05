function createGrid (numRows, numCol, attr) {
  var grid = document.createElement('div');
    if (numRows < 0 || typeof numRows !== 'number') {
      throw new TypeError('Kaboom');
    } else {
      if (attr === undefined && typeof numCol === 'object') {
        attr = numCol;
      }
      if (typeof numCol !== 'number') {
        numCol = numRows;
      }
      for (var i = 0; i < numRows; i++) {
        var rowElem = document.createElement('div');
        if (typeof attr === 'object') {
          addAttributes(rowElem, attr);
        }
        grid.appendChild(rowElem);
        var colElem;
          for (var k = 0; k < numCol; k++) {
            colElem = document.createElement('div');
            if (typeof attr === 'object'){
              addAttributes(colElem, attr);
            }
            rowElem.appendChild(colElem);
          }
      }
    }
  return grid;
}

function addAttributes (element, attributes) {
  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(function (attribute) {
      if (attribute === 'class') {
        element['className'] = attributes[attribute];
      }
      element[attribute] = attributes[attribute];
    });
  } else {
    throw new TypeError('オブジェクトを入れてください');
  }
}




// function paintCell (event) {
//   this.style.backgroundColor = chosenColor;
// }
