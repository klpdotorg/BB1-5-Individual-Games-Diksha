Game.preloader_sg20_1_4=function(game){
	this.preloadBar=null;
};

Game.preloader_sg20_1_4.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg20.1.4)
		this.load.atlas('SG20_1_4banana',basePath+'assets/gradeAssets/sg20.1.4/banana.png',basePath+'assets/gradeAssets/sg20.1.4/banana.json');
		this.load.atlas('SG20_1_4boot',basePath+'assets/gradeAssets/sg20.1.4/boot.png',basePath+'assets/gradeAssets/sg20.1.4/boot.json');
		this.load.atlas('SG20_1_4can',basePath+'assets/gradeAssets/sg20.1.4/can.png',basePath+'assets/gradeAssets/sg20.1.4/can.json');
		this.load.atlas('SG20_1_4comb',basePath+'assets/gradeAssets/sg20.1.4/comb.png',basePath+'assets/gradeAssets/sg20.1.4/comb.json');
		this.load.atlas('SG20_1_4cup',basePath+'assets/gradeAssets/sg20.1.4/cup.png',basePath+'assets/gradeAssets/sg20.1.4/cup.json');
		this.load.atlas('SG20_1_4hammer',basePath+'assets/gradeAssets/sg20.1.4/hammer.png',basePath+'assets/gradeAssets/sg20.1.4/hammer.json');
		this.load.atlas('SG20_1_4hand',basePath+'assets/gradeAssets/sg20.1.4/hand.png',basePath+'assets/gradeAssets/sg20.1.4/hand.json');
		this.load.atlas('SG20_1_4horizontal',basePath+'assets/gradeAssets/sg20.1.4/horizontal.png',basePath+'assets/gradeAssets/sg20.1.4/horizontal.json');
		this.load.atlas('SG20_1_4key',basePath+'assets/gradeAssets/sg20.1.4/key.png',basePath+'assets/gradeAssets/sg20.1.4/key.json');
		this.load.atlas('SG20_1_4leg',basePath+'assets/gradeAssets/sg20.1.4/leg.png',basePath+'assets/gradeAssets/sg20.1.4/leg.json');
		this.load.image('SG20_1_4mirror',basePath+'assets/gradeAssets/sg20.1.4/mirror.png');
		this.load.atlas('SG20_1_4triangle',basePath+'assets/gradeAssets/sg20.1.4/triangle.png',basePath+'assets/gradeAssets/sg20.1.4/triangle.json');
		this.load.atlas('SG20_1_4umbrella',basePath+'assets/gradeAssets/sg20.1.4/umbrella.png',basePath+'assets/gradeAssets/sg20.1.4/umbrella.json');
		this.load.atlas('SG20_1_4vertical',basePath+'assets/gradeAssets/sg20.1.4/vertical.png',basePath+'assets/gradeAssets/sg20.1.4/vertical.json');
		this.load.image('SG20_1_4water',basePath+'assets/gradeAssets/sg20.1.4/water.png');
		this.load.atlas('SG20_1_4watercan',basePath+'assets/gradeAssets/sg20.1.4/watercan.png',basePath+'assets/gradeAssets/sg20.1.4/watercan.json');
		this.load.atlas('SG20_1_4bubbleanimation',basePath+'assets/gradeAssets/sg20.1.4/BubbleAni.png',basePath+'assets/gradeAssets/sg20.1.4/BubbleAni.json');
		this.load.image('SG20_1_4bubble',basePath+'assets/gradeAssets/sg20.1.4/Bubble.png');

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
		this.state.start('sg20_1_4level1');
	},
};
