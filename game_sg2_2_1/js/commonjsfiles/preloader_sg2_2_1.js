Game.preloader_sg2_2_1=function(game){
	this.preloadBar=null;
};

Game.preloader_sg2_2_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg2.2.1)
		this.load.atlas("sg2_2_1_boxIcon",basePath+"assets/gradeAssets/sg2.2.1/icon1.png",basePath+"assets/gradeAssets/sg2.2.1/icon1.json");
		this.load.atlas("sg2_2_1_roundIcon",basePath+"assets/gradeAssets/sg2.2.1/icon2.png",basePath+"assets/gradeAssets/sg2.2.1/icon2.json");
		this.load.image("sg2_2_1_Drum",basePath+"assets/gradeAssets/sg2.2.1/image1.png");
		this.load.image("sg2_2_1_Tyre",basePath+"assets/gradeAssets/sg2.2.1/image2.png");
		this.load.image("sg2_2_1_Bottle",basePath+"assets/gradeAssets/sg2.2.1/image3.png");
		this.load.image("sg2_2_1_Bucket",basePath+"assets/gradeAssets/sg2.2.1/image4.png");
		this.load.image("sg2_2_1_Cylinder",basePath+"assets/gradeAssets/sg2.2.1/image5.png");
		this.load.image("sg2_2_1_Coin",basePath+"assets/gradeAssets/sg2.2.1/image6.png");
		this.load.atlas("sg2_2_1_TickMark",basePath+"assets/gradeAssets/sg2.2.1/tick.png",basePath+"assets/gradeAssets/sg2.2.1/tick.json");
		this.load.atlas("sg2_2_1_DrumAnim1",basePath+"assets/gradeAssets/sg2.2.1/anim1.png",basePath+"assets/gradeAssets/sg2.2.1/anim1.json");
		this.load.atlas("sg2_2_1_TyreAnim2",basePath+"assets/gradeAssets/sg2.2.1/anim2.png",basePath+"assets/gradeAssets/sg2.2.1/anim2.json");
		this.load.atlas("sg2_2_1_BottleAnim3",basePath+"assets/gradeAssets/sg2.2.1/anim3.png",basePath+"assets/gradeAssets/sg2.2.1/anim3.json");
		this.load.atlas("sg2_2_1_BucketAnim4",basePath+"assets/gradeAssets/sg2.2.1/anim4.png",basePath+"assets/gradeAssets/sg2.2.1/anim4.json");
		this.load.atlas("sg2_2_1_CylinderAnim5",basePath+"assets/gradeAssets/sg2.2.1/anim5.png",basePath+"assets/gradeAssets/sg2.2.1/anim5.json");
		this.load.atlas("sg2_2_1_CoinAnim6",basePath+"assets/gradeAssets/sg2.2.1/anim6.png",basePath+"assets/gradeAssets/sg2.2.1/anim6.json");

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
		this.load.image('box', basePath+'assets/gradeAssets/unity/commonAssets/box.png');


		// Assets required by commonNavBar (commonFiles.js)
		this.load.image('navBar',       basePath+'assets/commonAssets/Nv bar.png');
		this.load.image('backBtn',      basePath+'assets/landingScreen/backBtn.png');
		this.load.image('speakerBtn',   basePath+'assets/commonAssets/speakerBtn.png');
		this.load.image('timerBg',      basePath+'assets/commonAssets/timerBg.png');
		this.load.image('scoreBg',      basePath+'assets/commonAssets/scoreBg.png');
		this.load.atlas('hintIcon',     basePath+'assets/commonAssets/hint.png',          basePath+'assets/commonAssets/hint.json');
		this.load.image('hintwand',     basePath+'assets/commonAssets/hintwand.png');
		this.load.atlas('hint1',        basePath+'assets/commonAssets/1.png',             basePath+'assets/commonAssets/1.json');
		this.load.atlas('hint2',        basePath+'assets/commonAssets/2.png',             basePath+'assets/commonAssets/2.json');
		this.load.atlas('hint3',        basePath+'assets/commonAssets/3.png',             basePath+'assets/commonAssets/3.json');
		this.load.image('popupbg',      basePath+'assets/commonAssets/popupbg.png');
		this.load.image('popupbgEmpty', basePath+'assets/commonAssets/popupbg1.png');
		this.load.image('closebtn',     basePath+'assets/commonAssets/close.png');
		this.load.atlas('popuphint',    basePath+'assets/commonAssets/popuphint.png',     basePath+'assets/commonAssets/popuphint.json');
		this.load.atlas('deductBg',     basePath+'assets/commonAssets/minusBg.png',       basePath+'assets/commonAssets/minusBg.json');
		this.load.atlas('endscreendeductBg', basePath+'assets/commonAssets/whiteminusBg.png', basePath+'assets/commonAssets/whiteminusBg.json');
		this.load.atlas('hintscreennew', basePath+'assets/commonAssets/hintscreen.png',   basePath+'assets/commonAssets/hintscreen.json');
		this.load.image('mcIconVolume',       basePath+'assets/commonAssets/volume.png');
		this.load.image('mcIconTime',         basePath+'assets/commonAssets/time.png');
		this.load.image('mcIconLength',       basePath+'assets/commonAssets/length.png');
		this.load.image('mcIconWeight',       basePath+'assets/commonAssets/weight.png');
		this.load.image('mcIconNumber',       basePath+'assets/commonAssets/number.png');
		this.load.image('mcIconSequence',     basePath+'assets/commonAssets/sequence.png');
		this.load.image('mcIconComparison',   basePath+'assets/commonAssets/comparison.png');
		this.load.image('mcIconFraction',     basePath+'assets/commonAssets/fraction.png');
		this.load.image('mcIconPlacevalue',   basePath+'assets/commonAssets/placevalue.png');
		this.load.image('mcIconAddition',     basePath+'assets/commonAssets/addition.png');
		this.load.image('mcIconSubtraction',  basePath+'assets/commonAssets/subtraction.png');
		this.load.image('mcIconDivision',     basePath+'assets/commonAssets/division.png');
		this.load.image('mcIconMultiplication', basePath+'assets/commonAssets/multiplication.png');

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
		this.state.start('sg2_2_1level1');
	},
};
