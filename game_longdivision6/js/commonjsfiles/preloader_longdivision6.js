Game.preloader_longdivision6=function(game){
	this.preloadBar=null;
};

Game.preloader_longdivision6.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (longdivision6)
		this.load.image('NSN2skipDemoVideos',basePath+'assets/NSN2/gradeAssets/skipArrow.png');
		this.load.atlas('NSN2backNSN2btn',basePath+'assets/NSN2/commonAssets/backbtn.png' ,basePath+'json/NSN2/gradeJson/backbtn.json');
		this.load.atlas('NSN2CommonSpeakerNSN2btn',basePath+'assets/NSN2/commonAssets/speaker.png' ,basePath+'json/NSN2/gradeJson/speaker.json');
		this.load.atlas('NSN2starAnim',basePath+'assets/NSN2/commonAssets/starAnim.png',basePath+'json/NSN2/gradeJson/starAnim.json');
		this.load.atlas('NSN2replay',basePath+'assets/NSN2/commonAssets/reply.png' ,basePath+'json/NSN2/gradeJson/reply.json');
		this.load.atlas('NSN2btn',basePath+'assets/NSN2/commonAssets/btn.png',basePath+'json/NSN2/gradeJson/btn.json');
		this.load.image('NSN2background1',basePath+'assets/NSN2/commonAssets/bg1.png');
		this.load.image('NSN2tittleBar',basePath+'assets/NSN2/commonAssets/tittleBar.png');
		this.load.image('NSN2navBar',basePath+'assets/NSN2/commonAssets/navBar.png');
		this.load.image('NSN2timeNSN2bg',basePath+'assets/NSN2/commonAssets/timebg.png');
		this.load.atlas('NSN2mesg',basePath+'assets/NSN2/commonAssets/callout btn.png',basePath+'json/NSN2/gradeJson/callout btn.json');
		this.load.image('NSN2score',basePath+'assets/NSN2/commonAssets/scoreBg.png');
		this.load.atlas('NSN2pointAnim',basePath+'assets/NSN2/commonAssets/whiteminusBg.png',basePath+'json/NSN2/gradeJson/whiteminusBg.json');
		this.load.image('NSN2bg',basePath+'assets/NSN2/commonAssets/bg.png');
		this.load.image('NSN2mainbox',basePath+'assets/NSN2/gradeAssets/box.png');
		this.load.image('NSN2circle1',basePath+'assets/NSN2/gradeAssets/circle_1.png');
		this.load.image('NSN2circle2',basePath+'assets/NSN2/gradeAssets/circle_2.png');
		this.load.image('NSN2circle3',basePath+'assets/NSN2/gradeAssets/circle_3.png');
		this.load.image('NSN2circle4',basePath+'assets/NSN2/gradeAssets/circle_6.png');
		this.load.image('NSN2circle5',basePath+'assets/NSN2/gradeAssets/circle_10.png');
		this.load.image('NSN2circle6',basePath+'assets/NSN2/gradeAssets/circle_15.png');
		this.load.image('NSN2circle7',basePath+'assets/NSN2/gradeAssets/circle_21.png');
		this.load.image('NSN2circle8',basePath+'assets/NSN2/gradeAssets/circle_28.png');
		this.load.image('NSN2circle9',basePath+'assets/NSN2/gradeAssets/circle_36.png');
		this.load.image('NSN2square1',basePath+'assets/NSN2/gradeAssets/square_1.png');
		this.load.image('NSN2square2',basePath+'assets/NSN2/gradeAssets/square_2.png');
		this.load.image('NSN2square3',basePath+'assets/NSN2/gradeAssets/square_9.png');
		this.load.image('NSN2square4',basePath+'assets/NSN2/gradeAssets/square_16.png');
		this.load.image('NSN2square5',basePath+'assets/NSN2/gradeAssets/square_25.png');
		this.load.image('NSN2square6',basePath+'assets/NSN2/gradeAssets/square_36.png');
		this.load.image('NSN2square7',basePath+'assets/NSN2/gradeAssets/square_49.png');
		this.load.atlas('NSN2trianglebox',basePath+'assets/NSN2/gradeAssets/triangle box.png',basePath+'json/NSN2/gradeJson/triangle box.json');
		this.load.atlas('NSN2squarebox',basePath+'assets/NSN2/gradeAssets/square box.png',basePath+'json/NSN2/gradeJson/square box.json');
		this.load.atlas('NSN2tick',basePath+'assets/NSN2/gradeAssets/tickMark.png',basePath+'json/NSN2/gradeJson/tickMark.json');
		this.load.atlas('NSN2icon1',basePath+'assets/NSN2/gradeAssets/icon1.png',basePath+'json/NSN2/gradeJson/icon1.json');
		this.load.atlas('NSN2icon2',basePath+'assets/NSN2/gradeAssets/icon2.png',basePath+'json/NSN2/gradeJson/icon2.json');
		this.load.atlas('NSN2icon3',basePath+'assets/NSN2/gradeAssets/icon3.png',basePath+'json/NSN2/gradeJson/icon3.json');
		this.load.atlas('NSN2icon4',basePath+'assets/NSN2/gradeAssets/icon4.png',basePath+'json/NSN2/gradeJson/icon4.json');

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
		this.load.image('longdivision6', basePath+'assets/newGames/longdivision6.png');



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
		this.state.start('longdivision6');
	},
};
