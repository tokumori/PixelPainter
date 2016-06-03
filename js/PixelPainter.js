function createGrid (rows, x, y) {
  var grid = document.createElement('div');
    grid.className = 'grid';

  var colElem = document.createElement('div');
    if (rows < 0 || typeof rows !== 'number') {
      throw new Error('Kaboom');
    } else {
      for (var i = 0; i < rows; i++) {
        var rowElem = document.createElement('div');
        rowElem.className = 'row';
        grid.appendChild(rowElem);
      }
    }
  return grid;
}