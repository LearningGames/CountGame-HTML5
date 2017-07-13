//Container is an object to contain graphics
class NumberedBox extends createjs.Container {
	constructor(number=0) {
		super();

		//lib is defined in the imported file: count-game-graphics.js
		var movieclip = new lib.NumberedBox();
		movieclip.numberText.text = number;
		//When we add this container to the stage the graphics will be displayed
		this.addChild(movieclip);

		this.setBounds(0,50,50);
	}
}

class Game {

  constructor() {
    console.log(`Welcome to my great game. Version ${this.version()}`);
    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    //aliases the canvas with the stage object
    this.stage.width = this.canvas.width;
    this.stage.height = this.canvas.height;

    createjs.Ticker.setFPS(60);

    //this keeps redrawing the stage
    createjs.Ticker.on("tick", this.stage);

    //adding NumberedBoxes to the stage
    this.generateBoxes(10);
  }

  version() {
    return '1.0.0';
  }

  generateBoxes(amount=10) {
  	for (var i = amount; i > 0; --i) {
  		var movieclip = new NumberedBox(i);
  		this.stage.addChild(movieclip);
  		//random position but we dont want to put it at the edges
		movieclip.x = Math.random() * (this.stage.width - movieclip.getBounds().width);
		movieclip.y = Math.random() * (this.stage.height - movieclip.getBounds().height);
  	}
  }
}

// Start the game
var game = new Game();