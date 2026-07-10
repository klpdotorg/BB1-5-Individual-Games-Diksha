Game.preloader_sg7_2_2x=function(game){
	this.preloadBar=null;
};

Game.preloader_sg7_2_2x.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg7.2.2x)
		this.load.atlas('SG3_1_1rightmark',basePath+'assets/gradeAssets/sg3.1.1/rightmark.png',basePath+'assets/gradeAssets/sg3.1.1/rightmark.json');
		this.load.image('sg7_2_2x_c1',basePath+'assets/gradeAssets/sg7.2.2x/1.png');
		this.load.image('sg7_2_2x_c3',basePath+'assets/gradeAssets/sg7.2.2x/3.png');
		this.load.image('sg7_2_2x_c6',basePath+'assets/gradeAssets/sg7.2.2x/6.png');
		this.load.image('sg7_2_2x_c7',basePath+'assets/gradeAssets/sg7.2.2x/5.png');
		this.load.image('sg7_2_2x_c8',basePath+'assets/gradeAssets/sg7.2.2x/10.png');
		this.load.image('sg7_2_2x_t1',basePath+'assets/gradeAssets/sg7.2.2x/7.png');
		this.load.image('sg7_2_2x_t2',basePath+'assets/gradeAssets/sg7.2.2x/8.png');
		this.load.image('sg7_2_2x_t3',basePath+'assets/gradeAssets/sg7.2.2x/9.png');
		this.load.image('sg7_2_2x_s1',basePath+'assets/gradeAssets/sg7.2.2x/13.png');
		this.load.image('sg7_2_2x_s2',basePath+'assets/gradeAssets/sg7.2.2x/14.png');
		this.load.image('sg7_2_2x_s3',basePath+'assets/gradeAssets/sg7.2.2x/20.png');
		this.load.image('sg7_2_2x_r2',basePath+'assets/gradeAssets/sg7.2.2x/25.png');
		this.load.image('sg7_2_2x_r3',basePath+'assets/gradeAssets/sg7.2.2x/26.png');
		this.load.image('sg7_2_2x_r6',basePath+'assets/gradeAssets/sg7.2.2x/29.png');
		this.load.image('sg7_2_2x_r7',basePath+'assets/gradeAssets/sg7.2.2x/30.png');
		this.load.image('sg7_2_2x_r8',basePath+'assets/gradeAssets/sg7.2.2x/32.png');
		this.load.atlas('sg7_2_2x_choice1',basePath+'assets/gradeAssets/sg7.2.2x/Op1.png',basePath+'assets/gradeAssets/sg7.2.2x/second/Op1.json');
		this.load.atlas('sg7_2_2x_choice2',basePath+'assets/gradeAssets/sg7.2.2x/Op2.png',basePath+'assets/gradeAssets/sg7.2.2x/second/Op2.json');
		this.load.atlas('sg7_2_2x_choice3',basePath+'assets/gradeAssets/sg7.2.2x/Op3.png',basePath+'assets/gradeAssets/sg7.2.2x/second/Op3.json');
		this.load.atlas('sg7_2_2x_choice4',basePath+'assets/gradeAssets/sg7.2.2x/Op4.png',basePath+'assets/gradeAssets/sg7.2.2x/second/Op4.json');
		this.load.atlas('sg7_2_2x_choice5',basePath+'assets/gradeAssets/sg7.2.2x/Op5.png',basePath+'assets/gradeAssets/sg7.2.2x/second/Op5.json');

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
		this.state.start('sg7_2_2xlevel1');
	},
};
