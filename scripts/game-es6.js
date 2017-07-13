//Container is an object to contain graphics
class NumberedBox extends createjs.Container {
	constructor(number=0) {
		super();

		//lib is defined in the imported file: count-game-graphics.js
		var movieclip = new lib.NumberedBox();
		movieclip.numberText.text = number;
		//When we add this container to the stage the graphics will be displayed
		this.addChild(movieclip);

		//random position
		movieclip.x = Math.random() * 200;
		movieclip.y = Math.random() * 200;
	}
}

class Game {

  constructor() {
    console.log(`Welcome to my great game. Version ${this.version()}`);
    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    createjs.Ticker.setFPS(60);

    //this keeps redrawing the stage
    createjs.Ticker.on("tick", this.stage);

    //adding NumberedBox to the stage
    this.stage.addChild(new NumberedBox(88));
  }

  version() {
    return '1.0.0';
  }
}

// Start the game
var game = new Game();