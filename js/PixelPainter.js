function createGrid (rows, x, y) {
  var grid = document.createElement('div');
    grid.className = 'grid';

  var colElem = document.createElement('div');
  for (var i = 0; i < rows; i++) {
    if (rows >= 0) {
      var rowElem = document.createElement('div');
      rowElem.className = 'row';
      grid.appendChild(rowElem);
    } else {
      throw new Error('Kaboom');
    }
  }
  return grid;
}