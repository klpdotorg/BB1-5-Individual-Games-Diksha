Game.preloader_3_1=function(game){
	this.preloadBar=null;
};

Game.preloader_3_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (3.1)
		this.load.image('Level31_bg1', basePath+'assets/gradeAssets/3.1/bg1.png');
		this.load.image('Level31_bg3', basePath+'assets/gradeAssets/3.1/bg3.png');
		this.load.image('Level31_sh1', basePath+'assets/gradeAssets/3.1/sh1.png');
		this.load.image('Level31_sh2', basePath+'assets/gradeAssets/3.1/sh2.png');
		this.load.image('Level31_sh3', basePath+'assets/gradeAssets/3.1/sh3.png');
		this.load.image('Level31_sh4', basePath+'assets/gradeAssets/3.1/sh4.png');
		this.load.image('Level31_sh5', basePath+'assets/gradeAssets/3.1/sh5.png');
		this.load.image('Level31_sh6', basePath+'assets/gradeAssets/3.1/sh6.png');
		this.load.image('Level31_sh7', basePath+'assets/gradeAssets/3.1/sh7.png');
		this.load.image('Level31_sh8', basePath+'assets/gradeAssets/3.1/sh8.png');
		this.load.image('Level31_sh9', basePath+'assets/gradeAssets/3.1/sh9.png');
		this.load.image('Level31_sh10', basePath+'assets/gradeAssets/3.1/sh10.png');
		this.load.image('Level31_sh11', basePath+'assets/gradeAssets/3.1/sh11.png');
		this.load.image('Level31_sh13', basePath+'assets/gradeAssets/3.1/sh13.png');
		this.load.image('Level31_sh14', basePath+'assets/gradeAssets/3.1/sh14.png');
		this.load.image('Level31_sh15', basePath+'assets/gradeAssets/3.1/sh15.png');
		this.load.image('Level31_sh16', basePath+'assets/gradeAssets/3.1/sh16.png');
		this.load.image('Level31_sh17', basePath+'assets/gradeAssets/3.1/sh17.png');
		this.load.image('Level31_sh18', basePath+'assets/gradeAssets/3.1/sh18.png');
		this.load.image('Level31_sh19', basePath+'assets/gradeAssets/3.1/sh19.png');
		this.load.image('Level31_sh20', basePath+'assets/gradeAssets/3.1/sh20.png');
		this.load.image('Level31_sh21', basePath+'assets/gradeAssets/3.1/sh21.png');
		this.load.image('Level31_sh22', basePath+'assets/gradeAssets/3.1/sh22.png');
		this.load.image('Level31_sh23', basePath+'assets/gradeAssets/3.1/sh23.png');
		this.load.image('Level31_sh24', basePath+'assets/gradeAssets/3.1/sh24.png');
		this.load.atlas('Level31_watermelon', basePath+'assets/gradeAssets/3.1/watermelon.png', basePath+'assets/gradeAssets/3.1/watermelon.json');
		this.load.atlas('Level31_cherry', basePath+'assets/gradeAssets/3.1/cherry.png', basePath+'assets/gradeAssets/3.1/cherry.json');
		this.load.atlas('Level31_leaf1', basePath+'assets/gradeAssets/3.1/leaf1.png', basePath+'assets/gradeAssets/3.1/leaf1.json');
		this.load.atlas('Level31_bottle1', basePath+'assets/gradeAssets/3.1/bottle1.png', basePath+'assets/gradeAssets/3.1/bottle1.json');
		this.load.atlas('Level31_crow1', basePath+'assets/gradeAssets/3.1/crow1.png', basePath+'assets/gradeAssets/3.1/crow1.json');
		this.load.atlas('Level31_lizard1', basePath+'assets/gradeAssets/3.1/lizard1.png', basePath+'assets/gradeAssets/3.1/lizard1.json');
		this.load.atlas('Level31_car1', basePath+'assets/gradeAssets/3.1/car1.png', basePath+'assets/gradeAssets/3.1/car1.json');
		this.load.atlas('Level31_chair1', basePath+'assets/gradeAssets/3.1/chair1.png', basePath+'assets/gradeAssets/3.1/chair1.json');
		this.load.atlas('Level31_dog1', basePath+'assets/gradeAssets/3.1/dog1.png', basePath+'assets/gradeAssets/3.1/dog1.json');
		this.load.atlas('Level31_bird1', basePath+'assets/gradeAssets/3.1/bird1.png', basePath+'assets/gradeAssets/3.1/bird1.json');
		this.load.atlas('Level31_bee1', basePath+'assets/gradeAssets/3.1/bee1.png', basePath+'assets/gradeAssets/3.1/bee1.json');
		this.load.atlas('Level31_elephant1', basePath+'assets/gradeAssets/3.1/elephant1.png', basePath+'assets/gradeAssets/3.1/elephant1.json');
		this.load.atlas('Level31_bottle2', basePath+'assets/gradeAssets/3.1/bottle2.png', basePath+'assets/gradeAssets/3.1/bottle2.json');
		this.load.atlas('Level31_key1', basePath+'assets/gradeAssets/3.1/key1.png', basePath+'assets/gradeAssets/3.1/key1.json');
		this.load.atlas('Level31_suitcase', basePath+'assets/gradeAssets/3.1/suitcase.png', basePath+'assets/gradeAssets/3.1/suitcase.json');
		this.load.atlas('Level31_spanner', basePath+'assets/gradeAssets/3.1/spanner.png', basePath+'assets/gradeAssets/3.1/spanner.json');
		this.load.atlas('Level31_scooter1', basePath+'assets/gradeAssets/3.1/scooter1.png', basePath+'assets/gradeAssets/3.1/scooter1.json');
		this.load.atlas('Level31_bulb1', basePath+'assets/gradeAssets/3.1/bulb1.png', basePath+'assets/gradeAssets/3.1/bulb1.json');
		this.load.atlas('Level31_tree1', basePath+'assets/gradeAssets/3.1/tree1.png', basePath+'assets/gradeAssets/3.1/tree1.json');
		this.load.atlas('Level31_bird2', basePath+'assets/gradeAssets/3.1/bird2.png', basePath+'assets/gradeAssets/3.1/bird2.json');
		this.load.atlas('Level31_croc1', basePath+'assets/gradeAssets/3.1/croc1.png', basePath+'assets/gradeAssets/3.1/croc1.json');
		this.load.atlas('Level31_snake1', basePath+'assets/gradeAssets/3.1/snake1.png', basePath+'assets/gradeAssets/3.1/snake1.json');
		this.load.atlas('Level31_book1', basePath+'assets/gradeAssets/3.1/book1.png', basePath+'assets/gradeAssets/3.1/book1.json');
		this.load.atlas('Level31_bread1', basePath+'assets/gradeAssets/3.1/bread1.png', basePath+'assets/gradeAssets/3.1/bread1.json');

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
		this.state.start('grade3_1level1');
	},
};
