//Container is an object to contain graphics
class NumberedBox extends createjs.Container {
	constructor(game, number=0) {
		super();

		//we need the game instance to handle the click
		this.game = game;
		this.number = number;
		//lib is defined in the imported file: count-game-graphics.js
		var movieclip = new lib.NumberedBox();
		movieclip.numberText.text = number;

    //Handling button animation
    new createjs.ButtonHelper(movieclip, 0, 1, 2, false, new lib.NumberedBox(), 3);

		//When we add this container to the stage the graphics will be displayed
		this.addChild(movieclip);

		this.setBounds(0,50,50);

		//handle click/tap
		this.on('click', this.handleClick.bind(this));
	}

	handleClick() {
		this.game.handleClick(this);
	}
}

//Class to control GameData
class GameData {
	constructor() {
		this.amountOfBox = 3;
		this.resetData();
	}

	resetData() {
		this.currentNumber = 1;
	}

	nextNumber() {
		this.currentNumber += 1;
	}

	isRightNumber(numberTapped) {
		return this.currentNumber === numberTapped;
	}

	isGameWin() {
		return this.currentNumber > this.amountOfBox;
	}
}

class Game {

  constructor() {
    console.log(`Welcome to my great game. Version ${this.version()}`);
    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    this.stage.enableMouseOver();

    //enable touch devices
    createjs.Touch.enable(this.stage);

    this.retinalize();

    createjs.Ticker.setFPS(60);

    //this keeps redrawing the stage
    createjs.Ticker.on("tick", this.stage);

    this.gameData = new GameData();

    this.restartGame();
  }

  version() {
    return '1.0.0';
  }

  restartGame() {
    this.gameData.resetData();
    this.stage.removeAllChildren();
        //Adding layers to the stage
    this.stage.addChild(new lib.Background());

    //adding NumberedBoxes to the stage
    this.generateBoxes(this.gameData.amountOfBox);
  }

  generateBoxes(amount=10) {
  	for (var i = amount; i > 0; --i) {
  		//this has the Game instance
  		var movieclip = new NumberedBox(this, i);
  		this.stage.addChild(movieclip);
  		//random position but we dont want to put it at the edges
		movieclip.x = Math.random() * (this.stage.width - movieclip.getBounds().width);
		movieclip.y = Math.random() * (this.stage.height - movieclip.getBounds().height);
  	}
  }

  handleClick(numberedBox) {
  	if (this.gameData.isRightNumber(numberedBox.number)) {
  		this.stage.removeChild(numberedBox);
  		this.gameData.nextNumber();
  	}

    if (this.gameData.isGameWin()) {
      var gameOverView = new lib.GameoverView();
      this.stage.addChild(gameOverView);

      gameOverView.restartButton.on('click', (function() {
        this.restartGame();
      }).bind(this));
    }
  }

  retinalize() {
  	//aliases the canvas with the stage object
    this.stage.width = this.canvas.width;
    this.stage.height = this.canvas.height;

    let ratio = window.devicePixelRatio;
  	if (ratio === undefined) {
  		return;
  	}

  	this.canvas.setAttribute('width', Math.round(this.stage.width * ratio));
  	this.canvas.setAttribute('height', Math.round(this.stage.height * ratio));

  	this.stage.scaleX = this.stage.scaleY = ratio;

  	//Set CSS
  	this.canvas.style.width = this.stage.width + "px";
  	this.canvas.style.height = this.stage.height + "px";
  }
}

// Start the game
var game = new Game();