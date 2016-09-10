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
var chosenColor = '#000000';
var colorArr =  ['#000000','#c0c0c0','#808080','#ffffff','#800000','#ff0000',
  '#800080','#ff00ff','#008000','#00ff00','#808000','#ffff00','#000080',
  '#0000ff','#008080','#00ffff','#ffa500','#f0f8ff','#faebd7','#7fffd4',
  '#f0ffff','#f5f5dc','#ffe4c4','#ffe4c4','#8a2be2','#a52a2a','#deb887',
  '#5f9ea0','#7fff00','#d2691e','#ff7f50','#6495ed','#fff8dc','#dc143c',
  '#00008b','#008b8b','#b8860b','#a9a9a9','#006400','#a9a9a9','#bdb76b',
  '#8b008b','#556b2f','#ff8c00','#9932cc','#8b0000','#e9967a','#8fbc8f',
  '#483d8b','#2f4f4f','#2f4f4f','#00ced1','#9400d3','#ff1493','#00bfff',
  '#696969','#1e90ff','#b22222','#fffaf0','#228b22','#dcdcdc','#f8f8ff',
  '#ffd700','#daa520','#adff2f','#808080','#f0fff0','#ff69b4','#cd5c5c',
  '#4b0082','#fffff0','#f0e68c','#e6e6fa','#fff0f5','#7cfc00','#fffacd',
  '#add8e6','#f08080','#e0ffff','#fafad2','#d3d3d3','#90ee90','#d3d3d3',
  '#ffb6c1','#ffa07a','#20b2aa','#87cefa','#778899','#b0c4de','#ffffe0',
  '#32cd32','#faf0e6','#66cdaa','#0000cd','#ba55d3','#9370db','#3cb371',
  '#7b68ee','#00fa9a','#48d1cc','#c71585','#191970','#f5fffa','#ffe4e1',
  '#ffe4b5','#ffdead','#fdf5e6','#6b8e23','#ff4500','#da70d6','#eee8aa',
  '#98fb98','#afeeee','#db7093','#ffefd5','#ffdab9','#cd853f','#ffc0cb',
  '#dda0dd','#b0e0e6','#bc8f8f','#4169e1','#8b4513','#fa8072','#f4a460',
  '#2e8b57','#fff5ee','#a0522d','#87ceeb','#6a5acd','#708090','#708090',
  '#fffafa','#00ff7f','#4682b4','#d2b48c','#d8bfd8','#ff6347','#40e0d0',
  '#ee82ee','#f5deb3','#f5f5f5','#9acd32','#663399'
  ];
var colorGrid = createGrid(12, 12, {class: 'color'});
document.getElementById('colorGrid').appendChild(colorGrid);
var colorColumns = document.querySelectorAll('.color .color');
Array.prototype.forEach.call(colorColumns, function (colorColumn, index) {
  colorColumn.style.backgroundColor = colorArr[index];
  colorColumn.specificColor = colorArr[index];
  colorColumn.addEventListener("click", changeColor);
});

var myGrid = createGrid(10, 10, {class: 'grid'});
var grid = document.getElementById('pixelPainter');
document.getElementById('pixelPainter').appendChild(myGrid);

var columns = document.querySelectorAll('.grid .grid');
Array.prototype.forEach.call(columns, function (column) {
  column.addEventListener("mousedown", paintDrag);
  });

Array.prototype.forEach.call(columns, function (column) {
  column.addEventListener("mouseup", paintStop);
  });

Array.prototype.forEach.call(columns, function (column) {
  column.addEventListener("click", paintReplace);
  });

var buttons = document.querySelectorAll('button');
var eraseButton = buttons[0];
var eraseButtonAttr = {
  className: 'button',
  style: 'width: 80px; height: 20px;',
  onclick: changeColor,
  specificColor: null
};

addAttributes(eraseButton, eraseButtonAttr);


function changeColor () {
  chosenColor = this.specificColor;
  console.log(chosenColor);
}

function paintCell (event) {
  event.target.style.backgroundColor = chosenColor;
}

function paintDrag () {
  Array.prototype.forEach.call(columns, function (column) {
    column.addEventListener("mousemove", paintCell);
  });
}

function paintStop () {
  Array.prototype.forEach.call(columns, function (column) {
    column.removeEventListener("mousemove", paintCell);
  });

}

function paintDelete () {
  chosenColor = null;
}

function paintReplace () {
  Array.prototype.forEach.call(columns, function (column, index) {
    column.style.backgroundColor = chosenColor;
  });
}