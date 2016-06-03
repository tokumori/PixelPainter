var expect = chai.expect;
var should = chai.should();

  beforeEach(function () {

  });

  describe('createGrid()', function () {

    it('should have a function called createGrid', function () {
      expect(createGrid).to.exist;
      expect(createGrid).to.be.a('function');
    });

    it('should return an HTMLElement', function () {
      expect(createGrid()).to.be.instanceof(HTMLElement);
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