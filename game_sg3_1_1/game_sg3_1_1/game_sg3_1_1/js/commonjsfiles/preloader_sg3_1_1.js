Game.preloader_sg3_1_1=function(game){
	this.preloadBar=null;
};

Game.preloader_sg3_1_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg3.1.1)
		this.load.atlas('SG3_1_1rightmark',basePath+'assets/gradeAssets/sg3.1.1/rightmark.png',basePath+'assets/gradeAssets/sg3.1.1/rightmark.json');
		this.load.image('SG3_1_1bluepencil',basePath+'assets/gradeAssets/sg3.1.1/blue pencil.png');
		this.load.image('SG3_1_1greenpencil',basePath+'assets/gradeAssets/sg3.1.1/green pencil.png');
		this.load.image('SG3_1_1pinkpencil',basePath+'assets/gradeAssets/sg3.1.1/pink pencil.png');
		this.load.image('SG3_1_1redpencil',basePath+'assets/gradeAssets/sg3.1.1/red pencil.png');
		this.load.image('SG3_1_1yellowpencil',basePath+'assets/gradeAssets/sg3.1.1/yellow pencil.png');
		this.load.image('SG3_1_1eraser',basePath+'assets/gradeAssets/sg3.1.1/eraser.png');
		this.load.atlas('SG3_1_1circle',basePath+'assets/gradeAssets/sg3.1.1/circle.png',basePath+'assets/gradeAssets/sg3.1.1/circle.json');
		this.load.atlas('SG3_1_1circle2',basePath+'assets/gradeAssets/sg3.1.1/circle2.png',basePath+'assets/gradeAssets/sg3.1.1/circle2.json');
		this.load.atlas('SG3_1_1oval',basePath+'assets/gradeAssets/sg3.1.1/oval.png',basePath+'assets/gradeAssets/sg3.1.1/oval.json');
		this.load.atlas('SG3_1_1oval2',basePath+'assets/gradeAssets/sg3.1.1/oval2.png',basePath+'assets/gradeAssets/sg3.1.1/oval2.json');
		this.load.atlas('SG3_1_1rectangle',basePath+'assets/gradeAssets/sg3.1.1/rectangle.png',basePath+'assets/gradeAssets/sg3.1.1/rectangle.json');
		this.load.atlas('SG3_1_1rectangle2',basePath+'assets/gradeAssets/sg3.1.1/rectangle2.png',basePath+'assets/gradeAssets/sg3.1.1/rectangle2.json');
		this.load.atlas('SG3_1_1square',basePath+'assets/gradeAssets/sg3.1.1/square.png',basePath+'assets/gradeAssets/sg3.1.1/square.json');
		this.load.atlas('SG3_1_1square2',basePath+'assets/gradeAssets/sg3.1.1/square2.png',basePath+'assets/gradeAssets/sg3.1.1/square2.json');
		this.load.atlas('SG3_1_1triangle',basePath+'assets/gradeAssets/sg3.1.1/triangle.png',basePath+'assets/gradeAssets/sg3.1.1/triangle.json');
		this.load.atlas('SG3_1_1triangle2',basePath+'assets/gradeAssets/sg3.1.1/triangle2.png',basePath+'assets/gradeAssets/sg3.1.1/triangle2.json');
		this.load.atlas('SG3_1_1shapecircle',basePath+'assets/gradeAssets/sg3.1.1/shapecircle.png',basePath+'assets/gradeAssets/sg3.1.1/shapecircle.json');
		this.load.atlas('SG3_1_1shapecircle2',basePath+'assets/gradeAssets/sg3.1.1/shapecircle2.png',basePath+'assets/gradeAssets/sg3.1.1/shapecircle2.json');
		this.load.atlas('SG3_1_1shapeoval',basePath+'assets/gradeAssets/sg3.1.1/shapeoval.png',basePath+'assets/gradeAssets/sg3.1.1/shapeoval.json');
		this.load.atlas('SG3_1_1shapeoval2',basePath+'assets/gradeAssets/sg3.1.1/shapeoval2.png',basePath+'assets/gradeAssets/sg3.1.1/shapeoval2.json');
		this.load.atlas('SG3_1_1shaperectangle',basePath+'assets/gradeAssets/sg3.1.1/shaperectangle.png',basePath+'assets/gradeAssets/sg3.1.1/shaperectangle.json');
		this.load.atlas('SG3_1_1shaperectangle2',basePath+'assets/gradeAssets/sg3.1.1/shaperectangle2.png',basePath+'assets/gradeAssets/sg3.1.1/shaperectangle2.json');
		this.load.atlas('SG3_1_1shapesquare',basePath+'assets/gradeAssets/sg3.1.1/shapesquare.png',basePath+'assets/gradeAssets/sg3.1.1/shapesquare.json');
		this.load.atlas('SG3_1_1shapesquare2',basePath+'assets/gradeAssets/sg3.1.1/shapesquare2.png',basePath+'assets/gradeAssets/sg3.1.1/shapesquare2.json');
		this.load.atlas('SG3_1_1shapetriangle',basePath+'assets/gradeAssets/sg3.1.1/shapetriangle.png',basePath+'assets/gradeAssets/sg3.1.1/shapetriangle.json');
		this.load.atlas('SG3_1_1shapetriangle2',basePath+'assets/gradeAssets/sg3.1.1/shapetriangle2.png',basePath+'assets/gradeAssets/sg3.1.1/shapetriangle2.json');

		// Common UI assets  (all paths inside assets/commonAssets/ — no separate json/ folder)
		this.load.image('prgressbarOutLine', basePath+'assets/commonAssets/prgressbarOutLine.png');
		this.load.image('preloadBar',        basePath+'assets/commonAssets/prgressbar.png');
		this.load.atlas('newCommonBackBtnForAll', basePath+'assets/commonAssets/newBackBtn.png',      basePath+'assets/commonAssets/newBackBtn.json');
		this.load.atlas('grade11_speaker',        basePath+'assets/commonAssets/grade11_speaker.png', basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.image('Level42C_Topbar',        basePath+'assets/commonAssets/Topbar.png');
		this.load.image('Level42C_timer',         basePath+'assets/commonAssets/timer.png');
		this.load.atlas('starAnim1',              basePath+'assets/commonAssets/starAnim1.png',       basePath+'assets/commonAssets/starAnim1.json');
		this.load.image('CommonBackground',       basePath+'assets/commonAssets/commonBg.png');
		this.load.image('commonBg1', basePath+'assets/commonAssets/commonBg1.png');
		this.load.image('commonBg2', basePath+'assets/commonAssets/commonBg2.png');

		// Score screen buttons (local)
		this.load.image('CommonHomeBtn',   'assets/homeIconScore.png');
		this.load.image('CommonNextBtn',   'assets/nextIconScore.png');
		this.load.image('CommonReplayBtn', 'assets/replayIconScore.png');
		this.load.image('shareIconScore',  'assets/shareIconScore.png');





		// Shared sounds (from BB preloader main body — all games need these)
		this.load.audio('waudio', 'sounds/WrongCelebrationSound.mp3');
		this.load.audio('ClickSound', 'sounds/ClickSound.mp3');
		this.load.audio('celebr', 'sounds/celebration.mp3');
		this.load.audio('snapSound', 'sounds/snapSound.mp3');
		this.load.audio('goingdown', 'sounds/goingdown.mp3');
		this.load.audio('goingup', 'sounds/goingup.mp3');
		this.load.audio('spin2', 'sounds/spin2.mp3');
		this.load.audio('waterFill', 'sounds/waterFillingSound.mp3');
		this.load.audio('watersplash', 'sounds/watersplash.mp3');
		this.load.audio('clocktick', 'sounds/clocktick.mp3');
		this.load.audio('click', 'sounds/chime.mp3');
		this.load.audio('tinklesound', 'sounds/tinkle.mp3');
		this.load.audio('slide', 'sounds/slidingsound.mp3');
		this.load.audio('roll', 'sounds/rollingsound.mp3');
		this.load.audio('dragsnapsound', 'sounds/Drag_Snap.mp3');
		this.load.audio('snakeSound', 'sounds/snake.mp3');
		this.load.audio('ladderSound', 'sounds/ladder.mp3');
		this.load.audio('autoSound', 'sounds/autoSound.mp3');
		this.load.audio('CarrotBite', 'sounds/CarrotBite.mp3');
		this.load.audio('Rabbit', 'sounds/Rabbit.mp3');
		this.load.audio('Tap', 'sounds/Tap.mp3');
		this.load.audio('tap', 'sounds/Tap.mp3');
		this.load.audio('EHowMany', 'sounds/EHowMany.mp3');
		this.load.audio('HHowMany', 'sounds/HHowMany.mp3');
		this.load.audio('KHowMany', 'sounds/KHowMany.mp3');
		this.load.audio('dragMango', 'sounds/Drag_Snap.mp3');
		this.load.audio('bubble', 'sounds/Bubbles.mp3');
		this.load.audio('bubbleBurst', 'sounds/Bubble Burst.mp3');
		this.load.audio('coinFall', 'sounds/CoinDrop.mp3');
		this.load.audio('cashOut', 'sounds/CashOut.mp3');
		this.load.audio('WaterDropSplash', 'sounds/WaterDropSplash.mp3');
		this.load.audio('anim1sound', 'sounds/Mouse.mp3');
		this.load.audio('anim2sound', 'sounds/Elephant.mp3');
		this.load.audio('buzzSound', 'sounds/buzzsound.mp3');
		this.load.audio('RabbitSound', 'sounds/Rabbit.mp3');
		this.load.audio('ClungSound', 'sounds/clung.mp3');
		this.load.audio('eggCrack', 'sounds/eggCrack.mp3');
		this.load.audio('RabbitMovingSound', 'sounds/rabbitMovingSound.mp3');
		this.load.audio('lockSound1', 'sounds/locksound1.mp3');
		this.load.audio('lockSound2', 'sounds/locksound2.mp3');
		this.load.audio('scrollSound', 'sounds/tick1.mp3');
	},

	create:function(){
		this.state.start('sg3_1_1level1');
	},
};
