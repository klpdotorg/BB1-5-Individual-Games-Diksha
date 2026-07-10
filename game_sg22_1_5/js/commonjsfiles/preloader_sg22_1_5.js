Game.preloader_sg22_1_5=function(game){
	this.preloadBar=null;
};

Game.preloader_sg22_1_5.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg22.1.5)
		this.load.image('SG22_1_5clock',basePath+'assets/gradeAssets/sg22.1.5/clock.png');
		this.load.image('SG22_1_5anticlock',basePath+'assets/gradeAssets/sg22.1.5/anticlock.png');
		this.load.image('SG22_1_5bottombar',basePath+'assets/gradeAssets/sg22.1.5/bottombar.png');
		this.load.image('SG22_1_5box',basePath+'assets/gradeAssets/sg22.1.5/box.png');
		this.load.atlas('SG22_1_5ansbox',basePath+'assets/gradeAssets/sg22.1.5/ansbox.png',basePath+'assets/gradeAssets/sg22.1.5/ansbox.json');
		this.load.atlas('SG22_1_5erase',basePath+'assets/gradeAssets/sg22.1.5/erase.png',basePath+'assets/gradeAssets/sg22.1.5/erase.json');
		this.load.atlas('SG22_1_5rightmark',basePath+'assets/gradeAssets/sg22.1.5/rightmark.png',basePath+'assets/gradeAssets/sg22.1.5/rightmark.json');
		this.load.atlas('SG22_1_5numberpad',basePath+'assets/gradeAssets/sg22.1.5/numberpad.png',basePath+'assets/gradeAssets/sg22.1.5/numberpad.json');
		this.load.atlas('SG22_1_5shape1',basePath+'assets/gradeAssets/sg22.1.5/shape1.png',basePath+'assets/gradeAssets/sg22.1.5/shape1.json');
		this.load.atlas('SG22_1_5shape1Anim',basePath+'assets/gradeAssets/sg22.1.5/shape1Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape1Anim.json');
		this.load.atlas('SG22_1_5shape2',basePath+'assets/gradeAssets/sg22.1.5/shape2.png',basePath+'assets/gradeAssets/sg22.1.5/shape2.json');
		this.load.atlas('SG22_1_5shape2Anim',basePath+'assets/gradeAssets/sg22.1.5/shape2Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape2Anim.json');
		this.load.atlas('SG22_1_5shape3',basePath+'assets/gradeAssets/sg22.1.5/shape3.png',basePath+'assets/gradeAssets/sg22.1.5/shape3.json');
		this.load.atlas('SG22_1_5shape3Anim',basePath+'assets/gradeAssets/sg22.1.5/shape3Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape3Anim.json');
		this.load.atlas('SG22_1_5shape4',basePath+'assets/gradeAssets/sg22.1.5/shape4.png',basePath+'assets/gradeAssets/sg22.1.5/shape4.json');
		this.load.atlas('SG22_1_5shape4Anim',basePath+'assets/gradeAssets/sg22.1.5/shape4Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape4Anim.json');
		this.load.atlas('SG22_1_5shape5',basePath+'assets/gradeAssets/sg22.1.5/shape5.png',basePath+'assets/gradeAssets/sg22.1.5/shape5.json');
		this.load.atlas('SG22_1_5shape5Anim',basePath+'assets/gradeAssets/sg22.1.5/shape5Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape5Anim.json');
		this.load.atlas('SG22_1_5shape6',basePath+'assets/gradeAssets/sg22.1.5/shape6.png',basePath+'assets/gradeAssets/sg22.1.5/shape6.json');
		this.load.atlas('SG22_1_5shape6Anim',basePath+'assets/gradeAssets/sg22.1.5/shape6Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape6Anim.json');
		this.load.atlas('SG22_1_5shape7',basePath+'assets/gradeAssets/sg22.1.5/shape7.png',basePath+'assets/gradeAssets/sg22.1.5/shape7.json');
		this.load.atlas('SG22_1_5shape7Anim',basePath+'assets/gradeAssets/sg22.1.5/shape7Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape7Anim.json');
		this.load.atlas('SG22_1_5shape8',basePath+'assets/gradeAssets/sg22.1.5/shape8.png',basePath+'assets/gradeAssets/sg22.1.5/shape8.json');
		this.load.atlas('SG22_1_5shape8Anim',basePath+'assets/gradeAssets/sg22.1.5/shape8Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape8Anim.json');
		this.load.atlas('SG22_1_5shape9',basePath+'assets/gradeAssets/sg22.1.5/shape9.png',basePath+'assets/gradeAssets/sg22.1.5/shape9.json');
		this.load.atlas('SG22_1_5shape9Anim',basePath+'assets/gradeAssets/sg22.1.5/shape9Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape9Anim.json');
		this.load.atlas('SG22_1_5shape10',basePath+'assets/gradeAssets/sg22.1.5/shape10.png',basePath+'assets/gradeAssets/sg22.1.5/shape10.json');
		this.load.atlas('SG22_1_5shape10Anim',basePath+'assets/gradeAssets/sg22.1.5/shape10Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape10Anim.json');
		this.load.atlas('SG22_1_5shape11',basePath+'assets/gradeAssets/sg22.1.5/shape11.png',basePath+'assets/gradeAssets/sg22.1.5/shape11.json');
		this.load.atlas('SG22_1_5shape11Anim',basePath+'assets/gradeAssets/sg22.1.5/shape11Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape11Anim.json');
		this.load.atlas('SG22_1_5shape12',basePath+'assets/gradeAssets/sg22.1.5/shape12.png',basePath+'assets/gradeAssets/sg22.1.5/shape12.json');
		this.load.atlas('SG22_1_5shape12Anim',basePath+'assets/gradeAssets/sg22.1.5/shape12Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape12Anim.json');
		this.load.atlas('SG22_1_5shape13',basePath+'assets/gradeAssets/sg22.1.5/shape13.png',basePath+'assets/gradeAssets/sg22.1.5/shape13.json');
		this.load.atlas('SG22_1_5shape13Anim',basePath+'assets/gradeAssets/sg22.1.5/shape13Anim.png',basePath+'assets/gradeAssets/sg22.1.5/shape13Anim.json');
		this.load.atlas('SG22_1_5Glowshape1',basePath+'assets/gradeAssets/sg22.1.5/finalShape1.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape1.json');
		this.load.atlas('SG22_1_5Glowshape2',basePath+'assets/gradeAssets/sg22.1.5/finalShape2.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape2.json');
		this.load.atlas('SG22_1_5Glowshape3',basePath+'assets/gradeAssets/sg22.1.5/finalShape3.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape3.json');
		this.load.atlas('SG22_1_5Glowshape4',basePath+'assets/gradeAssets/sg22.1.5/finalShape4.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape4.json');
		this.load.atlas('SG22_1_5Glowshape5',basePath+'assets/gradeAssets/sg22.1.5/finalShape5.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape5.json');
		this.load.atlas('SG22_1_5Glowshape6',basePath+'assets/gradeAssets/sg22.1.5/finalShape6.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape6.json');
		this.load.atlas('SG22_1_5Glowshape7',basePath+'assets/gradeAssets/sg22.1.5/finalShape7.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape7.json');
		this.load.atlas('SG22_1_5Glowshape8',basePath+'assets/gradeAssets/sg22.1.5/finalShape8.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape8.json');
		this.load.atlas('SG22_1_5Glowshape9',basePath+'assets/gradeAssets/sg22.1.5/finalShape9.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape9.json');
		this.load.atlas('SG22_1_5Glowshape10',basePath+'assets/gradeAssets/sg22.1.5/finalShape10.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape10.json');
		this.load.atlas('SG22_1_5Glowshape11',basePath+'assets/gradeAssets/sg22.1.5/finalShape11.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape11.json');
		this.load.atlas('SG22_1_5Glowshape12',basePath+'assets/gradeAssets/sg22.1.5/finalShape12.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape12.json');
		this.load.atlas('SG22_1_5Glowshape13',basePath+'assets/gradeAssets/sg22.1.5/finalShape13.png',basePath+'assets/gradeAssets/sg22.1.5/finalShape13.json');
		this.load.atlas('SG22_1_5_AntiCW_shape1Anim',basePath+'assets/gradeAssets/sg22.1.5/1.png',basePath+'assets/gradeAssets/sg22.1.5/1.json');
		this.load.atlas('SG22_1_5_AntiCW_shape2Anim',basePath+'assets/gradeAssets/sg22.1.5/2.png',basePath+'assets/gradeAssets/sg22.1.5/2.json');
		this.load.atlas('SG22_1_5_AntiCW_shape3Anim',basePath+'assets/gradeAssets/sg22.1.5/3.png',basePath+'assets/gradeAssets/sg22.1.5/3.json');
		this.load.atlas('SG22_1_5_AntiCW_shape4Anim',basePath+'assets/gradeAssets/sg22.1.5/4.png',basePath+'assets/gradeAssets/sg22.1.5/4.json');
		this.load.atlas('SG22_1_5_AntiCW_shape5Anim',basePath+'assets/gradeAssets/sg22.1.5/5.png',basePath+'assets/gradeAssets/sg22.1.5/5.json');
		this.load.atlas('SG22_1_5_AntiCW_shape6Anim',basePath+'assets/gradeAssets/sg22.1.5/6.png',basePath+'assets/gradeAssets/sg22.1.5/6.json');
		this.load.atlas('SG22_1_5_AntiCW_shape7Anim',basePath+'assets/gradeAssets/sg22.1.5/7.png',basePath+'assets/gradeAssets/sg22.1.5/7.json');
		this.load.atlas('SG22_1_5_AntiCW_shape8Anim',basePath+'assets/gradeAssets/sg22.1.5/8.png',basePath+'assets/gradeAssets/sg22.1.5/8.json');
		this.load.atlas('SG22_1_5_AntiCW_shape9Anim',basePath+'assets/gradeAssets/sg22.1.5/9.png',basePath+'assets/gradeAssets/sg22.1.5/9.json');
		this.load.atlas('SG22_1_5_AntiCW_shape10Anim',basePath+'assets/gradeAssets/sg22.1.5/10.png',basePath+'assets/gradeAssets/sg22.1.5/10.json');
		this.load.atlas('SG22_1_5_AntiCW_shape11Anim',basePath+'assets/gradeAssets/sg22.1.5/11.png',basePath+'assets/gradeAssets/sg22.1.5/11.json');
		this.load.atlas('SG22_1_5_AntiCW_shape12Anim',basePath+'assets/gradeAssets/sg22.1.5/12.png',basePath+'assets/gradeAssets/sg22.1.5/12.json');
		this.load.atlas('SG22_1_5_AntiCW_shape13Anim',basePath+'assets/gradeAssets/sg22.1.5/13.png',basePath+'assets/gradeAssets/sg22.1.5/13.json');

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
		this.state.start('sg22_1_5level1');
	},
};
