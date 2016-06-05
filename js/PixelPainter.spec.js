var expect = chai.expect;
var should = chai.should();

  describe('createGrid()', function () {

    it('should have a function called createGrid', function () {
      expect(createGrid).to.exist;
      expect(createGrid).to.be.a('function');
    });

    it('should return an HTMLElement', function () {
      expect(createGrid(1)).to.be.instanceof(HTMLElement);
    });
  });

  describe('rows', function () {
    it('should only accept a non-negative number', function () {
      expect(createGrid.bind(null)).to.throw(Error);
      expect(createGrid.bind(null, {})).to.throw(Error);
      expect(createGrid.bind(null, -1)).to.throw(Error);
      expect(createGrid.bind(null, 1)).to.not.throw(Error);
    });
    it('should return the same number of rows as provided', function() {
      expect(createGrid(1).children).to.have.length(1);
      expect(createGrid(10).children).to.have.length(10);
    });
  });

  describe('columns', function () {
    it('should equal the number of rows if NO argument is provided', function () {
      expect(createGrid(1).firstChild.children).to.have.length(1);
      expect(createGrid(10).firstChild.children).to.have.length(10);
    });
    it('should return the number of rows provided by the argument', function () {
      expect(createGrid(1, 10).children).to.have.length(1);
      expect(createGrid(1, 10).firstChild.children).to.have.length(10);
      expect(createGrid(10, 5).children).to.have.length(10);
      expect(createGrid(10, 5).firstChild.children).to.have.length(5);
    });
  });

  describe('attributes', function () {
    it('should apply attributes to all elements if NO column argument is provided', function () {
      expect(createGrid(1, {}).children).to.have.length(1);
      expect(createGrid(1, {}).firstChild.children).to.have.length(1);
      var testGrid = createGrid(10, {class: 'grid'});
      var testGrid2 = createGrid(10, {class: 'grid', style: 'background-color: black'});
      for (var i = 0; i < testGrid.children.length; i++) {
        expect(testGrid.children[i].hasAttribute('class')).to.equal(true);
        expect(testGrid.firstChild.children[i].hasAttribute('class')).to.equal(true);
        expect(testGrid2.children[i].hasAttribute('class')).to.equal(true);
        expect(testGrid2.children[i].hasAttribute('style')).to.equal(true);
        expect(testGrid2.firstChild.children[i].hasAttribute('class')).to.equal(true);
        expect(testGrid2.firstChild.children[i].hasAttribute('style')).to.equal(true);
      }
    });
    it('should apply attributes to all rows and columns if a column argument is provided', function () {
      var colTestGrid = createGrid(10, 5, {class: 'grid'});
      expect(colTestGrid.children).to.have.length(10);
      expect(colTestGrid.firstChild.children).to.have.length(5);
      for (var i = 0; i < colTestGrid.children; i++) {
        expect(colTestGrid.children[i].hasAttribute('class')).to.equal(true);
        expect(colTestGrid.firstChild.children[i].hasAttribute('class')).to.equal(true);
      }
    })
  });