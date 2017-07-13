(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.YouWonTextShadow = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("You Won!", "30px 'Bernard MT Condensed'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 198;
	this.text.setTransform(196.6,0,1.99,1.99);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,401.2,96.7);


(lib.YouWonText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("You Won!", "30px 'Bernard MT Condensed'", "#237800");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 198;
	this.text.setTransform(196.6,0,1.99,1.99);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,401.2,96.7);


(lib.RestartText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Restart Game", "30px 'Bernard MT Condensed'", "#586700");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 182;
	this.text.setTransform(90.9,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185.9,39.7);


(lib.Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjrjtQDqgKDsAKQAMDsgMDqQjsAUjqgUQgKjqAKjsg");
	this.shape.setTransform(23.6,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9));

	// Gradient
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.612)"],[0.055,1],-3.4,-12.7,0,-3.4,-12.7,36.4).s().p("AjqDoQgNjrANjqQDqgLDrALQANDsgNDpQh1ALh2AAQh0AAh2gLg");
	this.shape_1.setTransform(23.6,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(9));

	// Color Tint
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFED00").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_2.setTransform(23.6,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#86FF93").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_3.setTransform(23.6,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#95F4FF").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_4.setTransform(23.6,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC561").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_5.setTransform(23.6,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CEAAFF").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_6.setTransform(23.6,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDBAFF").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_7.setTransform(23.6,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,50.3,50.7);


(lib.BGTile = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#86E02B").s().p("AlxFxIAAriILiAAIAALig");
	this.shape.setTransform(37,37);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,74);


(lib.Background = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7E02B").s().p("A3bfPMAAAg+eMAu2AAAMAAAA+eg");
	this.shape.setTransform(150,200);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,400);


(lib.YouWonAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// You Won Text
	this.instance = new lib.YouWonText();
	this.instance.setTransform(200.6,61.3,1,1,0,0,0,200.6,48.4);
	this.instance.alpha = 0.059;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:46.3,alpha:1},4,cjs.Ease.get(1)).wait(9));

	// You Won Text
	this.instance_1 = new lib.YouWonTextShadow();
	this.instance_1.setTransform(200.6,63.3,1,1,0,0,0,200.6,48.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:48.3,alpha:1},4,cjs.Ease.get(1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,12.9,401.2,96.7);


(lib.Restart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.RestartText();
	this.instance.setTransform(87.7,31.7,1,1,0,0,0,92.9,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:29.6},0).wait(1).to({y:31.7},0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7E02B").s("#000000").ss(1,1,1).rr(-85.85,-32.85,171.7,65.7,9);
	this.shape.setTransform(85.8,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBFF00").s("#000000").ss(1,1,1).rr(-85.85,-32.85,171.7,65.7,9);
	this.shape_1.setTransform(85.8,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#91A803").s("#000000").ss(1,1,1).rr(-85.85,-32.85,171.7,65.7,9);
	this.shape_2.setTransform(85.8,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(3));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s("#000000").ss(1,1,1).rr(-85.85,-32.85,171.7,65.7,9);
	this.shape_3.setTransform(85.8,32.8);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-1,185.9,67.7);


(lib.NumberedBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Number Text
	this.numberText = new cjs.Text("99", "30px 'Bernard MT Condensed'");
	this.numberText.name = "numberText";
	this.numberText.textAlign = "center";
	this.numberText.lineHeight = 32;
	this.numberText.lineWidth = 45;
	this.numberText.setTransform(21.5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.numberText).wait(4));

	// Box
	this.instance = new lib.Box();
	this.instance.setTransform(23.6,23.6,1,1,0,0,0,23.6,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({regX:23.7,regY:23.7,scaleX:0.95,scaleY:0.95,x:23.7,y:23.7},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,49.3,50.4);


(lib.BGAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(26));

	// BG Tile
	this.instance = new lib.BGTile();
	this.instance.setTransform(45.8,351.3,0.895,0.893,0,0,0,37.1,37.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:34.9,y:359.7,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:26.6,y:366.4,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:23.3,y:369,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:22.6,y:369.9,alpha:1},0).wait(41));

	// BG Tile
	this.instance_1 = new lib.BGTile();
	this.instance_1.setTransform(77.4,318.3,0.895,0.893,0,0,0,36.8,36.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:68.6,y:325.7,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:61.7,y:331.1,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:58.9,y:333.2,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:58.1,y:333.4,alpha:1},0).wait(36));

	// BG Tile
	this.instance_2 = new lib.BGTile();
	this.instance_2.setTransform(108.3,370.2,0.895,0.893,0,0,0,36.9,36.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:101,y:380.3,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:95.4,y:388,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:93.2,y:391,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:92.6,y:391.4,alpha:1},0).wait(35));

	// BG Tile
	this.instance_3 = new lib.BGTile();
	this.instance_3.setTransform(171.6,360.7,0.895,0.893,0,0,0,37,37.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(1).to({regY:37,scaleX:0.94,scaleY:0.94,x:167.6,y:369.7,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:164.6,y:376.7,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:163.3,y:379.5,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:163,y:380.4,alpha:1},0).wait(31));

	// BG Tile
	this.instance_4 = new lib.BGTile();
	this.instance_4.setTransform(125,328.4,0.895,0.893,0,0,0,36.8,36.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:118.7,y:336,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:113.7,y:341.7,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:111.7,y:344,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:111,y:344.5,alpha:1},0).wait(34));

	// BG Tile
	this.instance_5 = new lib.BGTile();
	this.instance_5.setTransform(39,289.8,0.895,0.893,0,0,0,37.2,37);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(1).to({regX:37,scaleX:0.94,scaleY:0.94,x:27.7,y:295,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:19.1,y:299,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:15.6,y:300.6,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:15,y:301,alpha:1},0).wait(40));

	// BG Tile
	this.instance_6 = new lib.BGTile();
	this.instance_6.setTransform(98.1,269,0.895,0.893,0,0,0,36.9,36.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:90.2,y:273.3,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:84.1,y:276.5,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:81.7,y:277.7,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:81,y:278,alpha:1},0).wait(39));

	// BG Tile
	this.instance_7 = new lib.BGTile();
	this.instance_7.setTransform(58.7,229.4,0.895,0.893,0,0,0,37,37);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:48.6,y:231.3,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:40.8,y:232.8,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:37.8,y:233.3,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:37,y:233.5,alpha:1},0).wait(38));

	// BG Tile
	this.instance_8 = new lib.BGTile();
	this.instance_8.setTransform(17.2,104.9,0.895,0.893,0,0,0,37,36.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).wait(1).to({regY:37,scaleX:0.94,scaleY:0.94,x:4.8,y:100.1,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-4.7,y:96.4,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:-8.5,y:94.9,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:-9.4,y:94.5,alpha:1},0).wait(37));

	// BG Tile
	this.instance_9 = new lib.BGTile();
	this.instance_9.setTransform(77.4,109.5,0.895,0.893,0,0,0,36.8,36.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:68.6,y:104.9,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:61.7,y:101.3,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:58.9,y:99.8,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:58.1,y:99.5,alpha:1},0).wait(36));

	// BG Tile
	this.instance_10 = new lib.BGTile();
	this.instance_10.setTransform(118,156.3,0.895,0.893,0,0,0,36.8,36.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:111.4,y:154.4,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:106.2,y:152.8,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:104.2,y:152.2,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:103.5,y:152,alpha:1},0).wait(34));

	// BG Tile
	this.instance_11 = new lib.BGTile();
	this.instance_11.setTransform(209.9,173.8,0.895,0.893,0,0,0,36.8,37);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).wait(1).to({regX:37,scaleX:0.94,scaleY:0.94,x:208.3,y:172.7,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:206.9,y:171.9,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:206.3,y:171.5,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:206,alpha:1},0).wait(35));

	// BG Tile
	this.instance_12 = new lib.BGTile();
	this.instance_12.setTransform(224.6,245.9,0.895,0.893,0,0,0,37.2,37);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).wait(1).to({regX:37,scaleX:0.94,scaleY:0.94,x:223.4,y:248.7,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:222.7,y:250.9,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:222.4,y:251.7,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:222.5,y:252,alpha:1},0).wait(37));

	// BG Tile
	this.instance_13 = new lib.BGTile();
	this.instance_13.setTransform(224.6,296.7,0.895,0.893,0,0,0,37.2,37);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({_off:false},0).wait(1).to({regX:37,scaleX:0.94,scaleY:0.94,x:223.4,y:302.4,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:222.7,y:306.8,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:222.4,y:308.6,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:222.5,y:309,alpha:1},0).wait(39));

	// BG Tile
	this.instance_14 = new lib.BGTile();
	this.instance_14.setTransform(224.6,356,0.895,0.893,0,0,0,37.2,37.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:223.4,y:364.8,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:222.7,y:371.5,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:222.4,y:374.2,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:222.5,y:375,alpha:1},0).wait(35));

	// BG Tile
	this.instance_15 = new lib.BGTile();
	this.instance_15.setTransform(267.7,362.9,0.895,0.893,0,0,0,37,37);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:269,y:372.3,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:270.1,y:379.5,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:270.5,y:382.3,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,y:383,alpha:1},0).wait(34));

	// BG Tile
	this.instance_16 = new lib.BGTile();
	this.instance_16.setTransform(267.7,343.3,0.895,0.893,0,0,0,37,37.4);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(8).to({_off:false},0).wait(1).to({regY:37,scaleX:0.94,scaleY:0.94,x:269,y:351.2,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:270.1,y:357.5,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:270.5,y:360,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,y:361,alpha:1},0).wait(33));

	// BG Tile
	this.instance_17 = new lib.BGTile();
	this.instance_17.setTransform(267.7,276.9,0.895,0.893,0,0,0,37,36.6);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10).to({_off:false},0).wait(1).to({regY:37,scaleX:0.94,scaleY:0.94,x:269,y:281.9,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:270.1,y:285.5,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:270.5,y:287,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(31));

	// BG Tile
	this.instance_18 = new lib.BGTile();
	this.instance_18.setTransform(267.7,222.8,0.895,0.893,0,0,0,37,37.2);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(11).to({_off:false},0).wait(1).to({regY:37,scaleX:0.94,scaleY:0.94,x:269,y:224,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:270.1,y:225.2,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:270.5,y:225.6,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,y:226,alpha:1},0).wait(30));

	// BG Tile
	this.instance_19 = new lib.BGTile();
	this.instance_19.setTransform(267.7,163.3,0.895,0.893,0,0,0,37,37.2);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4).to({_off:false},0).wait(1).to({regY:37,scaleX:0.94,scaleY:0.94,x:269,y:161.3,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:270.1,y:159.9,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:270.5,y:159.3,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,y:159.5,alpha:1},0).wait(37));

	// BG Tile
	this.instance_20 = new lib.BGTile();
	this.instance_20.setTransform(256.2,128.5,0.895,0.893,0,0,0,36.9,37.1);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(8).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:256.9,y:124.6,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:257.4,y:121.8,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:257.6,y:120.6,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:257.5,y:120.5,alpha:1},0).wait(33));

	// BG Tile
	this.instance_21 = new lib.BGTile();
	this.instance_21.setTransform(280.4,97.3,0.895,0.893,0,0,0,36.9,37.1);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(6).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:282.4,y:91.6,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:283.9,y:87.4,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:284.5,y:85.7,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,y:85.5,alpha:1},0).wait(35));

	// BG Tile
	this.instance_22 = new lib.BGTile();
	this.instance_22.setTransform(293.2,50.8,0.895,0.893,0,0,0,37.4,37.1);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:295.6,y:42.6,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:297.7,y:36.4,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:298.5,y:34,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:299,y:33.5,alpha:1},0).wait(40));

	// BG Tile
	this.instance_23 = new lib.BGTile();
	this.instance_23.setTransform(246.6,46.9,0.895,0.893,0,0,0,37.1,37);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(4).to({_off:false},0).wait(1).to({regX:37,scaleX:0.94,scaleY:0.94,x:246.7,y:38.8,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:246.9,y:32.5,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,y:30,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:247,y:29.5,alpha:1},0).wait(37));

	// BG Tile
	this.instance_24 = new lib.BGTile();
	this.instance_24.setTransform(232.9,62.1,0.895,0.893,0,0,0,37,36.8);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(3).to({_off:false},0).wait(1).to({regY:37,scaleX:0.94,scaleY:0.94,x:232.3,y:54.9,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:231.8,y:49.3,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:231.6,y:47.1,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:231.5,y:46.5,alpha:1},0).wait(38));

	// BG Tile
	this.instance_25 = new lib.BGTile();
	this.instance_25.setTransform(180.3,43.6,0.895,0.893,0,0,0,36.8,37.2);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(2).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:177.1,y:34.9,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:174.5,y:28.4,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:173.5,y:25.8,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:173,y:25.5,alpha:1},0).wait(39));

	// BG Tile
	this.instance_26 = new lib.BGTile();
	this.instance_26.setTransform(174.4,68.1,0.895,0.893,0,0,0,36.7,36.7);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(5).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:171,y:61.3,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:168.2,y:55.9,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:167.1,y:53.7,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:166.6,y:53,alpha:1},0).wait(36));

	// BG Tile
	this.instance_27 = new lib.BGTile();
	this.instance_27.setTransform(114.1,36.2,0.895,0.893,0,0,0,36.8,37.1);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(4).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:107.3,y:27.4,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:101.9,y:20.6,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:99.7,y:18,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:99,y:17.5,alpha:1},0).wait(37));

	// BG Tile
	this.instance_28 = new lib.BGTile();
	this.instance_28.setTransform(108.3,68.1,0.895,0.893,0,0,0,36.9,36.7);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(6).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:101,y:61.3,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:95.4,y:55.9,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:93.2,y:53.7,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:92.6,y:53,alpha:1},0).wait(35));

	// BG Tile
	this.instance_29 = new lib.BGTile();
	this.instance_29.setTransform(56.5,50.8,0.895,0.893,0,0,0,36.9,37.1);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(5).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:46.4,y:42.6,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:38.5,y:36.4,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:35.4,y:34,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:34.6,y:33.5,alpha:1},0).wait(36));

	// BG Tile
	this.instance_30 = new lib.BGTile();
	this.instance_30.setTransform(56.5,166.1,0.895,0.893,0,0,0,36.9,37.2);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(8).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:46.4,y:164.2,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:38.5,y:162.8,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:35.4,y:162.3,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:34.6,y:162.5,alpha:1},0).wait(33));

	// BG Tile
	this.instance_31 = new lib.BGTile();
	this.instance_31.setTransform(118,203.1,0.895,0.893,0,0,0,36.8,37);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(9).to({_off:false},0).wait(1).to({regX:37,scaleX:0.94,scaleY:0.94,x:111.4,y:203.5,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:106.2,y:203.8,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:104.2,y:203.9,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:103.5,y:204,alpha:1},0).wait(32));

	// BG Tile
	this.instance_32 = new lib.BGTile();
	this.instance_32.setTransform(176.9,240.1,0.895,0.893,0,0,0,37.1,37.2);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(10).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:173.1,y:242.4,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:170.3,y:244.3,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:169.1,y:245.1,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:169,y:245.5,alpha:1},0).wait(31));

	// BG Tile
	this.instance_33 = new lib.BGTile();
	this.instance_33.setTransform(184.5,304.4,0.895,0.893,0,0,0,37.1,36.9);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(6).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:181.1,y:310.6,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:178.6,y:315.2,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:177.6,y:317.1,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:177.5,y:317.4,alpha:1},0).wait(35));

	// BG Tile
	this.instance_34 = new lib.BGTile();
	this.instance_34.setTransform(125,262.2,0.895,0.893,0,0,0,36.8,36.8);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(8).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:118.7,y:266.2,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:113.7,y:269.2,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:111.7,y:270.4,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:111,y:270.5,alpha:1},0).wait(33));

	// BG Tile
	this.instance_35 = new lib.BGTile();
	this.instance_35.setTransform(234.6,196.4,0.895,0.893,0,0,0,37.1,37);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(4).to({_off:false},0).wait(1).to({regX:37,scaleX:0.94,scaleY:0.94,x:234,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:233.6,y:196.5,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:233.5,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(37));

	// BG Tile
	this.instance_36 = new lib.BGTile();
	this.instance_36.setTransform(199.2,124.5,0.895,0.893,0,0,0,37.1,37);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(5).to({_off:false},0).wait(1).to({regX:37,scaleX:0.94,scaleY:0.94,x:196.7,y:120.5,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:194.8,y:117.5,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:194,y:116.2,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,y:116,alpha:1},0).wait(36));

	// BG Tile
	this.instance_37 = new lib.BGTile();
	this.instance_37.setTransform(136,130,0.895,0.893,0,0,0,36.8,36.6);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(3).to({_off:false},0).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:130.3,y:126.8,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:125.9,y:124.1,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:124.1,y:123,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:123.5,y:122.5,alpha:1},0).wait(38));

	// BG Tile
	this.instance_38 = new lib.BGTile();
	this.instance_38.setTransform(180.3,186,0.895,0.893,0,0,0,36.8,37.1);
	this.instance_38.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({regX:37,regY:37,scaleX:0.94,scaleY:0.94,x:177.1,y:185.4,alpha:0.467},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:174.5,y:185,alpha:0.826},0).wait(1).to({scaleX:1,scaleY:1,x:173.5,y:184.9,alpha:0.968},0).wait(1).to({scaleX:1,scaleY:1,x:173,y:185,alpha:1},0).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.6,152.8,201,231.3);


(lib.GameoverView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(2));

	// Button
	this.restartButton = new lib.Restart();
	this.restartButton.setTransform(154.1,270.2,1,1,0,0,0,85.8,32.8);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.Restart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restartButton).wait(18));

	// You Won
	this.instance = new lib.YouWonAnimation();
	this.instance.setTransform(153.4,165.2,1,1,0,0,0,200.6,49.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(17));

	// BG
	this.instance_1 = new lib.BGAnimation();
	this.instance_1.setTransform(37,37,1,1,0,0,0,37,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.6,152.8,236.3,231.3);


// stage content:
(lib.CountGamewithAnimation = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.NumberedBox();
	this.instance.setTransform(200.5,80.9,1,1,0,0,0,23.6,23.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.NumberedBox(), 3);

	// Layer 2
	this.instance_1 = new lib.GameoverView();
	this.instance_1.setTransform(100.8,24.3,1,1,0,0,0,100.8,24.3);

	// Layer 3
	this.instance_2 = new lib.Background();
	this.instance_2.setTransform(150,200,1,1,0,0,0,150,200);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(150,200,300,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;