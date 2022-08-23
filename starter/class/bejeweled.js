const Screen = require("./screen");
const Cursor = require("./cursor");

const emojiPedia = [
  0x26BD,
  0x1F94E,
  0x1F3C0,
  0x1F3D0,
  0x1F3C8,
  0x1F3BE,
  0x1F3B1
];
class Bejeweled {

  constructor() {

   this.playerTurn = "O";

    // Initialize this
    this.grid = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',]
    ];

    this.emojiList = emojiPedia.map(unicode => String.fromCharCode(unicode));

    this.cursor = new Cursor(8, 8);

    Screen.initialize(8, 8);
    Screen.setGridlines(false);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static checkMatches(grid) {

    // Fill this in

  }

}

module.exports = Bejeweled;
