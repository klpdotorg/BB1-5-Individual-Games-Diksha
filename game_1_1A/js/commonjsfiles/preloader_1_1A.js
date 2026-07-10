Game.preloader_1_1A=function(game){
	this.preloadBar=null;
};

Game.preloader_1_1A.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (1.1A)
		this.load.image('grade11_TopBar', basePath+'assets/gradeAssets/1.1A/grade11_TopBar.png');
		this.load.atlas('flg1o1', basePath+'assets/gradeAssets/1.1A/flg1o1.png', basePath+'assets/gradeAssets/1.1A/flg1o1.json');
		this.load.image('flg1o2', basePath+'assets/gradeAssets/1.1A/flg1o2.png');
		this.load.image('flg1o3', basePath+'assets/gradeAssets/1.1A/flg1o3.png');
		this.load.atlas('flg2o2', basePath+'assets/gradeAssets/1.1A/flg2o2.png', basePath+'assets/gradeAssets/1.1A/flg2o2.json');
		this.load.image('flg2o1', basePath+'assets/gradeAssets/1.1A/flg2o1.png');
		this.load.image('flg2o3', basePath+'assets/gradeAssets/1.1A/flg2o3.png');
		this.load.atlas('flg3o3', basePath+'assets/gradeAssets/1.1A/flg3o3.png', basePath+'assets/gradeAssets/1.1A/flg3o3.json');
		this.load.image('flg3o1', basePath+'assets/gradeAssets/1.1A/flg3o1.png');
		this.load.image('flg3o2', basePath+'assets/gradeAssets/1.1A/flg3o2.png');
		this.load.atlas('flg4o2', basePath+'assets/gradeAssets/1.1A/flg4o2.png', basePath+'assets/gradeAssets/1.1A/flg4o2.json');
		this.load.image('flg4o1', basePath+'assets/gradeAssets/1.1A/flg4o1.png');
		this.load.image('flg4o3', basePath+'assets/gradeAssets/1.1A/flg4o3.png');
		this.load.atlas('flg5o1', basePath+'assets/gradeAssets/1.1A/flg5o1.png', basePath+'assets/gradeAssets/1.1A/flg5o1.json');
		this.load.image('flg5o2', basePath+'assets/gradeAssets/1.1A/flg5o2.png');
		this.load.image('flg5o3', basePath+'assets/gradeAssets/1.1A/flg5o3.png');
		this.load.atlas('flg6o2', basePath+'assets/gradeAssets/1.1A/flg6o2.png', basePath+'assets/gradeAssets/1.1A/flg6o2.json');
		this.load.image('flg6o1', basePath+'assets/gradeAssets/1.1A/flg6o1.png');
		this.load.image('flg6o3', basePath+'assets/gradeAssets/1.1A/flg6o3.png');
		this.load.atlas('flg7o3', basePath+'assets/gradeAssets/1.1A/flg7o3.png', basePath+'assets/gradeAssets/1.1A/flg7o3.json');
		this.load.image('flg7o1', basePath+'assets/gradeAssets/1.1A/flg7o1.png');
		this.load.image('flg7o2', basePath+'assets/gradeAssets/1.1A/flg7o2.png');
		this.load.atlas('flg8o1', basePath+'assets/gradeAssets/1.1A/flg8o1.png', basePath+'assets/gradeAssets/1.1A/flg8o1.json');
		this.load.image('flg8o2', basePath+'assets/gradeAssets/1.1A/flg8o2.png');
		this.load.image('flg8o3', basePath+'assets/gradeAssets/1.1A/flg8o3.png');
		this.load.atlas('flg9o1', basePath+'assets/gradeAssets/1.1A/flg9o1.png', basePath+'assets/gradeAssets/1.1A/flg9o1.json');
		this.load.image('flg9o2', basePath+'assets/gradeAssets/1.1A/flg9o2.png');
		this.load.image('flg9o3', basePath+'assets/gradeAssets/1.1A/flg9o3.png');
		this.load.atlas('flg10o1', basePath+'assets/gradeAssets/1.1A/flg10o1.png', basePath+'assets/gradeAssets/1.1A/flg10o1.json');
		this.load.image('flg10o2', basePath+'assets/gradeAssets/1.1A/flg10o2.png');
		this.load.image('flg10o3', basePath+'assets/gradeAssets/1.1A/flg10o3.png');
		this.load.atlas('flg11o1', basePath+'assets/gradeAssets/1.1A/flg11o1.png', basePath+'assets/gradeAssets/1.1A/flg11o1.json');
		this.load.image('flg11o2', basePath+'assets/gradeAssets/1.1A/flg11o2.png');
		this.load.image('flg11o3', basePath+'assets/gradeAssets/1.1A/flg11o3.png');
		this.load.atlas('flg12o3', basePath+'assets/gradeAssets/1.1A/flg12o3.png', basePath+'assets/gradeAssets/1.1A/flg12o3.json');
		this.load.image('flg12o1', basePath+'assets/gradeAssets/1.1A/flg12o1.png');
		this.load.image('flg12o2', basePath+'assets/gradeAssets/1.1A/flg12o2.png');
		this.load.atlas('flg13o1', basePath+'assets/gradeAssets/1.1A/flg13o1.png', basePath+'assets/gradeAssets/1.1A/flg13o1.json');
		this.load.image('flg13o2', basePath+'assets/gradeAssets/1.1A/flg13o2.png');
		this.load.image('flg13o3', basePath+'assets/gradeAssets/1.1A/flg13o3.png');
		this.load.atlas('flg14o1', basePath+'assets/gradeAssets/1.1A/flg14o1.png', basePath+'assets/gradeAssets/1.1A/flg14o1.json');
		this.load.image('flg14o2', basePath+'assets/gradeAssets/1.1A/flg14o2.png');
		this.load.image('flg14o3', basePath+'assets/gradeAssets/1.1A/flg14o3.png');
		this.load.atlas('flg15o1', basePath+'assets/gradeAssets/1.1A/flg15o1.png', basePath+'assets/gradeAssets/1.1A/flg15o1.json');
		this.load.image('flg15o2', basePath+'assets/gradeAssets/1.1A/flg15o2.png');
		this.load.image('flg15o3', basePath+'assets/gradeAssets/1.1A/flg15o3.png');

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
		this.state.start('grade1_1Alevel1');
	},
};
