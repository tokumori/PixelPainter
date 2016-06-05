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

var myGrid = createGrid(10, 10, {class: 'grid'});
document.getElementById('pixelPainter').appendChild(myGrid);

var chosenColor = '#000000';
var columns = document.querySelectorAll('.grid .grid');
Array.prototype.forEach.call(columns, function (column) {
  column.addEventListener("mousedown", paintDrag);
  });

Array.prototype.forEach.call(columns, function (column) {
  column.addEventListener("mouseup", paintStop);
  });

var buttons = document.querySelectorAll('button');
var redButton = buttons[0];
var greenButton = buttons[1];
var blueButton = buttons[2];
var yellowButton = buttons[3];
var pinkButton = buttons[4];

var redButtonAttr = {
  className: 'button',
  style: 'width: 80px; height: 20px;',
  onclick: changeColor,
  specificColor: 'FF0000'
};

addAttributes(redButton, redButtonAttr);

function changeColor () {
  chosenColor = this.specificColor;
}

function paintCell (event) {
  event.target.style.backgroundColor = chosenColor;
}

function paintDrag () {
  Array.prototype.forEach.call(columns, function (column) {
  column.addEventListener("mousemove", paintCell);
  });
}

function paintStop() {
  Array.prototype.forEach.call(columns, function (column) {
  column.removeEventListener("mousemove", paintCell);
  });

}

function paintDelete() {
  chosenColor = null;
}