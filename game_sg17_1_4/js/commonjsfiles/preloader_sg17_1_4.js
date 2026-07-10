Game.preloader_sg17_1_4=function(game){
	this.preloadBar=null;
};

Game.preloader_sg17_1_4.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg17.1.4)
		this.load.atlas('sg17_1_4backbtn',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/backbtn.png' ,basePath+'assets/gradeAssets/sg17.1.4/backbtn.json');
		this.load.atlas('sg17_1_4CommonSpeakerBtn',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/speaker.png' ,basePath+'assets/gradeAssets/sg17.1.4/speaker.json');
		this.load.atlas('sg17_1_4starAnim',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/starAnim.png',basePath+'assets/gradeAssets/sg17.1.4/starAnim.json');
		this.load.atlas('sg17_1_4replay',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/reply.png' ,basePath+'assets/gradeAssets/sg17.1.4/reply.json');
		this.load.atlas('sg17_1_4btn',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/btn.png',basePath+'assets/gradeAssets/sg17.1.4/btn.json');
		this.load.image('sg17_1_4background1',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/bg1.png');
		this.load.image('sg17_1_4tittleBar',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/tittleBar.png');
		this.load.image('sg17_1_4navBar',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/navBar.png');
		this.load.image('sg17_1_4timebg',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/timebg.png');
		this.load.image('sg17_1_4background',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Bg.png');
		this.load.atlas('sg17_1_4tick',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/b3.png',basePath+'assets/gradeAssets/sg17.1.4/b3.json');
		this.load.image('sg17_1_4whitebox',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/whitebox.png');
		this.load.atlas('sg17_1_4btn1',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/btn1.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/btn1.json');
		this.load.atlas('sg17_1_4btn2',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/btn2.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/btn2.json');
		this.load.atlas('sg17_1_4btn3',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/btn3.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/btn3.json');
		this.load.atlas('sg17_1_4btn4',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/btn4.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/btn4.json');
		this.load.atlas('sg17_1_4yellowTriangle',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape1.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape1.json');
		this.load.atlas('sg17_1_4redTriangle',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape2.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape2.json');
		this.load.atlas('sg17_1_4pinkTriangle',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape3.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape3.json');
		this.load.atlas('sg17_1_4greensquare',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape4.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape4.json');
		this.load.atlas('sg17_1_4purpleTriangle',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape5.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape5.json');
		this.load.atlas('sg17_1_4yellow',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape6.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape6.json');
		this.load.atlas('sg17_1_4blueTriangle',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape7.png',basePath+'assets/gradeAssets/sg17.1.4/commonAssets/Shape7.json');
		this.load.atlas('sg17_1_4s2',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s2.png',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s2.json');
		this.load.atlas('sg17_1_4s3',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s3.png',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s3.json');
		this.load.atlas('sg17_1_4s4',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s4.png',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s4.json');
		this.load.atlas('sg17_1_4s6',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s6.png',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s6.json');
		this.load.atlas('sg17_1_4s8',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s8.png',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s8.json');
		this.load.atlas('sg17_1_4s12',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s12.png',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s12.json');
		this.load.atlas('sg17_1_4s21',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s21.png',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s21.json');
		this.load.atlas('sg17_1_4s22',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s22.png',basePath+'assets/gradeAssets/sg17.1.4/gradeAssets/s22.json');

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
		this.state.start('sg17_1_4level1');
	},
};
