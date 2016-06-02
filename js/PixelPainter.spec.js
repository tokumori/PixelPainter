var expect = chai.expect;
var should = chai.should();
  describe('createGrid()', function () {

      it('should have a function called createGrid', function () {
        expect(createGrid).to.exist;
        expect(createGrid).to.be.a('function');
      });

      it('should return an HTMLElement', function () {
        expect(createGrid()).to.be.instanceof(HTMLElement);
      });

  });