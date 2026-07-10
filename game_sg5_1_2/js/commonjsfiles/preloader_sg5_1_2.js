Game.preloader_sg5_1_2=function(game){
	this.preloadBar=null;
};

Game.preloader_sg5_1_2.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg5.1.2)
		this.load.atlas('SG3_1_1rightmark',basePath+'assets/gradeAssets/sg3.1.1/rightmark.png',basePath+'assets/gradeAssets/sg3.1.1/rightmark.json');
		this.load.atlas('sg5_1_2bluecircle',basePath+'assets/gradeAssets/sg5.1.2/Circle/bluecircle.png',basePath+'assets/gradeAssets/sg5.1.2/Circle/bluecircle.json');
		this.load.atlas('sg5_1_2orangecircle',basePath+'assets/gradeAssets/sg5.1.2/Circle/orangecircle.png',basePath+'assets/gradeAssets/sg5.1.2/Circle/orangecircle.json');
		this.load.atlas('sg5_1_2pinkcircle',basePath+'assets/gradeAssets/sg5.1.2/Circle/pinkcircle.png',basePath+'assets/gradeAssets/sg5.1.2/Circle/pinkcircle.json');
		this.load.atlas('sg5_1_2purplecircle',basePath+'assets/gradeAssets/sg5.1.2/Circle/purplecircle.png',basePath+'assets/gradeAssets/sg5.1.2/Circle/purplecircle.json');
		this.load.atlas('sg5_1_2redcircle',basePath+'assets/gradeAssets/sg5.1.2/Circle/redcircle.png',basePath+'assets/gradeAssets/sg5.1.2/Circle/redcircle.json');
		this.load.atlas('sg5_1_2blueOval',basePath+'assets/gradeAssets/sg5.1.2/oval/blueOval.png',basePath+'assets/gradeAssets/sg5.1.2/oval/blueOval.json');
		this.load.atlas('sg5_1_2greenOval',basePath+'assets/gradeAssets/sg5.1.2/oval/greenOval.png',basePath+'assets/gradeAssets/sg5.1.2/oval/greenOval.json');
		this.load.atlas('sg5_1_2lightgreenOval',basePath+'assets/gradeAssets/sg5.1.2/oval/lightgreenOval.png',basePath+'assets/gradeAssets/sg5.1.2/oval/lightgreenOval.json');
		this.load.atlas('sg5_1_2pinkOval',basePath+'assets/gradeAssets/sg5.1.2/oval/pinkOval.png',basePath+'assets/gradeAssets/sg5.1.2/oval/pinkOval.json');
		this.load.atlas('sg5_1_2skyblueOval',basePath+'assets/gradeAssets/sg5.1.2/oval/skyblueOval.png',basePath+'assets/gradeAssets/sg5.1.2/oval/skyblueOval.json');
		this.load.atlas('sg5_1_2blueRectangle',basePath+'assets/gradeAssets/sg5.1.2/rectangle/blueRectangle.png',basePath+'assets/gradeAssets/sg5.1.2/rectangle/blueRectangle.json');
		this.load.atlas('sg5_1_2orangeRectangle',basePath+'assets/gradeAssets/sg5.1.2/rectangle/orangeRectangle.png',basePath+'assets/gradeAssets/sg5.1.2/rectangle/orangeRectangle.json');
		this.load.atlas('sg5_1_2pinkRectangle',basePath+'assets/gradeAssets/sg5.1.2/rectangle/pinkRectangle.png',basePath+'assets/gradeAssets/sg5.1.2/rectangle/pinkRectangle.json');
		this.load.atlas('sg5_1_2purpleRectangle',basePath+'assets/gradeAssets/sg5.1.2/rectangle/purpleRectangle.png',basePath+'assets/gradeAssets/sg5.1.2/rectangle/purpleRectangle.json');
		this.load.atlas('sg5_1_2skyblueRectangle',basePath+'assets/gradeAssets/sg5.1.2/rectangle/skyblueRectangle.png',basePath+'assets/gradeAssets/sg5.1.2/rectangle/skyblueRectangle.json');
		this.load.atlas('sg5_1_2greenSquare',basePath+'assets/gradeAssets/sg5.1.2/square/greenSquare.png',basePath+'assets/gradeAssets/sg5.1.2/square/greenSquare.json');
		this.load.atlas('sg5_1_2lightgreenSquare',basePath+'assets/gradeAssets/sg5.1.2/square/lightgreenSquare.png',basePath+'assets/gradeAssets/sg5.1.2/square/lightgreenSquare.json');
		this.load.atlas('sg5_1_2orangeSquare',basePath+'assets/gradeAssets/sg5.1.2/square/orangeSquare.png',basePath+'assets/gradeAssets/sg5.1.2/square/orangeSquare.json');
		this.load.atlas('sg5_1_2pinkSquare',basePath+'assets/gradeAssets/sg5.1.2/square/pinkSquare.png',basePath+'assets/gradeAssets/sg5.1.2/square/pinkSquare.json');
		this.load.atlas('sg5_1_2purpleSquare',basePath+'assets/gradeAssets/sg5.1.2/square/purpleSquare.png',basePath+'assets/gradeAssets/sg5.1.2/square/purpleSquare.json');
		this.load.atlas('sg5_1_2blueTriangle',basePath+'assets/gradeAssets/sg5.1.2/triangle/blueTriangle.png',basePath+'assets/gradeAssets/sg5.1.2/triangle/blueTriangle.json');
		this.load.atlas('sg5_1_2greenTriangle',basePath+'assets/gradeAssets/sg5.1.2/triangle/greenTriangle.png',basePath+'assets/gradeAssets/sg5.1.2/triangle/greenTriangle.json');
		this.load.atlas('sg5_1_2pinkTriangle',basePath+'assets/gradeAssets/sg5.1.2/triangle/pinkTriangle.png',basePath+'assets/gradeAssets/sg5.1.2/triangle/pinkTriangle.json');
		this.load.atlas('sg5_1_2skyblueTriangle',basePath+'assets/gradeAssets/sg5.1.2/triangle/skyblueTriangle.png',basePath+'assets/gradeAssets/sg5.1.2/triangle/skyblueTriangle.json');
		this.load.atlas('sg5_1_2yellowTriangle',basePath+'assets/gradeAssets/sg5.1.2/triangle/yellowTriangle.png',basePath+'assets/gradeAssets/sg5.1.2/triangle/yellowTriangle.json');

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


		// Shared images/atlases from BB preloader (keys this game references)
		this.load.atlas('CommonBackBtn', basePath+'assets/commonAssets/backbtn.png', basePath+'assets/commonAssets/backbtn.json');
		this.load.atlas('CommonSpeakerBtn', basePath+'assets/commonAssets/speaker.png', basePath+'assets/commonAssets/speaker.json');



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
		this.state.start('sg5_1_2level1');
	},
};
