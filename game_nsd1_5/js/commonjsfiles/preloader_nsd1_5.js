Game.preloader_nsd1_5=function(game){
	this.preloadBar=null;
};

Game.preloader_nsd1_5.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (nsd1.5)
		this.load.image('nsd1_5_bg',basePath+'assets/gradeAssets/nsd1.5/bg2.png');
		this.load.image('nsd1_5_line',basePath+'assets/gradeAssets/nsd1.5/1.png');
		this.load.image('nsd1_5_circle1',basePath+'assets/gradeAssets/nsd1.5/Symbol1.png');
		this.load.image('nsd1_5_circle2',basePath+'assets/gradeAssets/nsd1.5/Symbol2.png');
		this.load.image('nsd1_5_circle3',basePath+'assets/gradeAssets/nsd1.5/Symbol3.png');
		this.load.image('nsd1_5_circle4',basePath+'assets/gradeAssets/nsd1.5/Symbol4.png');
		this.load.image('nsd1_5_circle5',basePath+'assets/gradeAssets/nsd1.5/Symbol5.png');
		this.load.image('nsd1_5_circle6',basePath+'assets/gradeAssets/nsd1.5/Symbol6.png');
		this.load.image('nsd1_5_circle7',basePath+'assets/gradeAssets/nsd1.5/Symbol7.png');
		this.load.image('nsd1_5_circle8',basePath+'assets/gradeAssets/nsd1.5/Symbol8.png');
		this.load.image('nsd1_5_circle9',basePath+'assets/gradeAssets/nsd1.5/Symbol9.png');
		this.load.image('nsd1_5_circle10',basePath+'assets/gradeAssets/nsd1.5/Symbol10.png');
		this.load.image('nsd1_5_circle11',basePath+'assets/gradeAssets/nsd1.5/Symbol11.png');
		this.load.image('nsd1_5_circle12',basePath+'assets/gradeAssets/nsd1.5/Symbol12.png');
		this.load.image('nsd1_5_egg1',basePath+'assets/gradeAssets/nsd1.5/Symbol13.png');
		this.load.image('nsd1_5_egg2',basePath+'assets/gradeAssets/nsd1.5/Symbol14.png');
		this.load.image('nsd1_5_egg3',basePath+'assets/gradeAssets/nsd1.5/Symbol15.png');
		this.load.image('nsd1_5_egg4',basePath+'assets/gradeAssets/nsd1.5/Symbol16.png');
		this.load.image('nsd1_5_egg5',basePath+'assets/gradeAssets/nsd1.5/Symbol17.png');
		this.load.image('nsd1_5_egg6',basePath+'assets/gradeAssets/nsd1.5/Symbol18.png');
		this.load.image('nsd1_5_egg7',basePath+'assets/gradeAssets/nsd1.5/Symbol19.png');
		this.load.image('nsd1_5_egg8',basePath+'assets/gradeAssets/nsd1.5/Symbol20.png');
		this.load.image('nsd1_5_egg9',basePath+'assets/gradeAssets/nsd1.5/Symbol21.png');
		this.load.image('nsd1_5_egg10',basePath+'assets/gradeAssets/nsd1.5/Symbol22.png');
		this.load.image('nsd1_5_egg11',basePath+'assets/gradeAssets/nsd1.5/Symbol23.png');
		this.load.image('nsd1_5_egg12',basePath+'assets/gradeAssets/nsd1.5/Symbol24.png');
		this.load.atlas('nsd1_5_back1',basePath+'assets/gradeAssets/nsd1.5/2.png' ,basePath+'assets/gradeAssets/nsd1.5/2.json');
		this.load.atlas('nsd1_5_back2',basePath+'assets/gradeAssets/nsd1.5/4.png' ,basePath+'assets/gradeAssets/nsd1.5/4.json');
		this.load.atlas('nsd1_5_back3',basePath+'assets/gradeAssets/nsd1.5/3.png' ,basePath+'assets/gradeAssets/nsd1.5/3.json');
		this.load.atlas('nsd1_5_back4',basePath+'assets/gradeAssets/nsd1.5/5.png' ,basePath+'assets/gradeAssets/nsd1.5/5.json');
		this.load.atlas('nsd1_5_back5',basePath+'assets/gradeAssets/nsd1.5/6.png' ,basePath+'assets/gradeAssets/nsd1.5/6.json');
		this.load.atlas('nsd1_5_back6',basePath+'assets/gradeAssets/nsd1.5/7.png' ,basePath+'assets/gradeAssets/nsd1.5/7.json');
		this.load.atlas('nsd1_5_back7',basePath+'assets/gradeAssets/nsd1.5/8.png' ,basePath+'assets/gradeAssets/nsd1.5/8.json');
		this.load.atlas('nsd1_5_ball1',basePath+'assets/gradeAssets/nsd1.5/q1.png' ,basePath+'assets/gradeAssets/nsd1.5/q1.json');
		this.load.atlas('nsd1_5_ball2',basePath+'assets/gradeAssets/nsd1.5/q2.png' ,basePath+'assets/gradeAssets/nsd1.5/q2.json');
		this.load.atlas('nsd1_5_ball3',basePath+'assets/gradeAssets/nsd1.5/q3.png' ,basePath+'assets/gradeAssets/nsd1.5/q3.json');
		this.load.atlas('nsd1_5_ball4',basePath+'assets/gradeAssets/nsd1.5/q4.png' ,basePath+'assets/gradeAssets/nsd1.5/q4.json');
		this.load.atlas('nsd1_5_ball5',basePath+'assets/gradeAssets/nsd1.5/q5.png' ,basePath+'assets/gradeAssets/nsd1.5/q5.json');
		this.load.atlas('nsd1_5_ball6',basePath+'assets/gradeAssets/nsd1.5/q6.png' ,basePath+'assets/gradeAssets/nsd1.5/q6.json');
		this.load.atlas('nsd1_5_ball7',basePath+'assets/gradeAssets/nsd1.5/q7.png' ,basePath+'assets/gradeAssets/nsd1.5/q7.json');
		this.load.atlas('nsd1_5_ball8',basePath+'assets/gradeAssets/nsd1.5/q8.png' ,basePath+'assets/gradeAssets/nsd1.5/q8.json');
		this.load.atlas('nsd1_5_ball9',basePath+'assets/gradeAssets/nsd1.5/q9.png' ,basePath+'assets/gradeAssets/nsd1.5/q9.json');
		this.load.atlas('nsd1_5_ball10',basePath+'assets/gradeAssets/nsd1.5/q10.png' ,basePath+'assets/gradeAssets/nsd1.5/q10.json');
		this.load.atlas('nsd1_5_ball11',basePath+'assets/gradeAssets/nsd1.5/q11.png' ,basePath+'assets/gradeAssets/nsd1.5/q11.json');
		this.load.atlas('nsd1_5_ball12',basePath+'assets/gradeAssets/nsd1.5/q12.png' ,basePath+'assets/gradeAssets/nsd1.5/q12.json');

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
		this.load.image('nsd1_5_bg', basePath+'assets/gradeAssets/nsd1.5/bg2.png');
		this.load.image('skipDemoVideos', basePath+'assets/commonAssets/skipArrow.png');



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
		this.state.start('nsd1_5level1');
	},
};
