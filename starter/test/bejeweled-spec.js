const { expect } = require('chai');
const { spies } = require('chai');

const Bejeweled = require("../class/bejeweled.js");
const Screen = require("../class/screen");

chai.use(spies);

const emojiPedia = [
  0x26BD,
  0x1F94E,
  0x1F3C0,
  0x1F3D0,
  0x1F3C8,
  0x1F3BE,
  0x1F3B1
];

const emojis = emojiPedia.map(unicode => String.fromCharCode(unicode));

describe('Bejeweled', () => {
  let bejeweled;
  let grid;

  beforeEach(() => {
    bejeweled = new Bejeweled();
    grid = Array.from({ length: 8 }, (v, i) => Array.from({ length: 8 }, (v, i) => i));
  });

  // SECTION! - tests for setting up a basic board
  context('calling the constructor', () => {
    it('should instantiate a 8x8 matrix', () => {
      expect(bejeweled.grid.length).to.equal(grid.length);
      expect(bejeweled.grid[0].length).to.equal(grid[0].length);
    });

    it('should instantiate an instance of Bejeweled class', () => {
      expect(bejeweled).to.instanceOf(Bejeweled);
    });
  });

  context('emoticon property of the Bejeweled class instance', () => {
    it('should consist 7 different emojis', () => {
      const isEmoji = emojis.every(unicode => bejeweled.emojiList.includes(unicode));

      expect(bejeweled.emojiList).to.have.lengthOf(7);
      expect(isEmoji).to.be.true;
    });

    it('should fill the grid modules in a random sequence', () => {
      const hasEmoji = Screen.grid.every(row =>
        row.every(module => module !== " ")
      );
      expect(hasEmoji).to.be.true;
    });
  });

  // Add tests for a valid swap that matches 3
  context('swapping two elements in adjacent modules', () => {
    let x = String.fromCodePoint(0x26BD);
    it('should recognize valid horizontal swaps matching 3 elements', () => {
      grid[0][1] = grid[0][2] = grid[0][3] = grid[0][4] = x;

      expect(Bejeweled.checkMatches(grid)).to.be.true;
    });


    it('should recognize valid vertical swaps matching 3 elements', () => {
      grid[1][1] = grid[2][1] = grid[3][1] = grid[4][1] = x; 

      expect(Bejeweled.checkMatches(grid)).to.be.true;
    });

    it('should recognize valid diagonal swaps matching 3 elements', () => {
      grid[0][3] = grid[1][4] = grid[2][5] = grid[3][6] = x;

      expect(Bejeweled.checkMatches(grid)).to.be.true;
    });

    it('should revert invalid swaps and throw an error', () => {
      let spy = chai.spy(console,'log');
      grid[1][4] = grid[1][5] = x;

      Bejeweled.checkMatches(grid);
      expect(grid[1][4]).to.equal(x);
      expect(grid[1][5]).to.equal(x);
    });
  });
 


  //   // Add tests for swaps that set up combos
  //   describe("combo swaps", () => {



  //   });

  //   // Add tests to check if there are no possible valid moves
  //   describe("check for available swaps", () => {



  //   });

});

