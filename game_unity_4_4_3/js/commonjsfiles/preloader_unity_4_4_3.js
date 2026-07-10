Game.preloader_unity_4_4_3=function(game){
	this.preloadBar=null;
};

Game.preloader_unity_4_4_3.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (unity/4.4.3)
		this.load.image('Level441_bg1',basePath+'assets/gradeAssets/4.4.1/BG.png');
		this.load.image('boy1',basePath+'assets/gradeAssets/4.4.1/Boy1.png');
		this.load.image('boy2',basePath+'assets/gradeAssets/4.4.1/Boy2.png');
		this.load.image('boy3',basePath+'assets/gradeAssets/4.4.1/Boy3.png');
		this.load.image('Tree',basePath+'assets/gradeAssets/4.4.1/Tree.png');
		this.load.atlas('box1',basePath+'assets/gradeAssets/4.4.1/box1.png' ,basePath+'assets/gradeAssets/4.4.1/box1.json');
		this.load.atlas('box2',basePath+'assets/gradeAssets/4.4.1/box 2.png' ,basePath+'assets/gradeAssets/4.4.1/box 2.json');
		this.load.atlas('BoyhandsUp',basePath+'assets/gradeAssets/4.4.1/BoyhandsUp.png' ,basePath+'assets/gradeAssets/4.4.1/BoyhandsUp.json');
		this.load.atlas('BoyRightPointing',basePath+'assets/gradeAssets/4.4.1/BoyRightPointing.png' ,basePath+'assets/gradeAssets/4.4.1/BoyRightPointing.json');
		this.load.atlas('BoyWrong',basePath+'assets/gradeAssets/4.4.1/BoyWrong.png' ,basePath+'assets/gradeAssets/4.4.1/BoyWrong.json');
		this.load.atlas('BoyJumping',basePath+'assets/gradeAssets/4.4.1/BoyJumping.png' ,basePath+'assets/gradeAssets/4.4.1/BoyJumping.json');
		this.load.atlas('BoyLeftPointing',basePath+'assets/gradeAssets/4.4.1/BoyLeftPointing.png' ,basePath+'assets/gradeAssets/4.4.1/BoyLeftPointing.json');
		this.load.atlas('BoyRightPointing_blue',basePath+'assets/gradeAssets/4.4.1/BoyRightPointing_blue.png' ,basePath+'assets/gradeAssets/4.4.1/BoyRightPointing_blue.json');
		this.load.atlas('BoyJumping_blue',basePath+'assets/gradeAssets/4.4.1/BoyJumping_blue.png' ,basePath+'assets/gradeAssets/4.4.1/BoyJumping_blue.json');
		this.load.atlas('BoyhandsUp_blue',basePath+'assets/gradeAssets/4.4.1/BoyhandsUp_blue.png' ,basePath+'assets/gradeAssets/4.4.1/BoyhandsUp_blue.json');
		this.load.atlas('tickBtn',basePath+'assets/gradeAssets/4.4.1/rightmark.png' ,basePath+'assets/gradeAssets/4.4.1/rightmark.json');

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
		this.load.image('Level42B_timer', basePath+'assets/gradeAssets/4.2A/commonAssets/timer.png');



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
		this.state.start('unity4_4_3level1');
	},
};
