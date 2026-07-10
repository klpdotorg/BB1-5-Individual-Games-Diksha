Game.preloader_sg21_3_6=function(game){
	this.preloadBar=null;
};

Game.preloader_sg21_3_6.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg21.3.6)
		this.load.atlas('sg_tick', basePath+'assets/gradeAssets/sg21.3.6/b3.png',basePath+'assets/gradeAssets/sg21.3.6/b3.json');
		this.load.image('sg_whitebox', basePath+'assets/gradeAssets/sg21.3.6/whitebox.png');
		this.load.atlas('sg_s1', basePath+'assets/gradeAssets/sg21.3.6/1.png',basePath+'assets/gradeAssets/sg21.3.6/1.json');
		this.load.atlas('sg_s2', basePath+'assets/gradeAssets/sg21.3.6/2.png', basePath+'assets/gradeAssets/sg21.3.6/2.json');
		this.load.atlas('sg_s3', basePath+'assets/gradeAssets/sg21.3.6/3.png',basePath+'assets/gradeAssets/sg21.3.6/3.json');
		this.load.atlas('sg_s4', basePath+'assets/gradeAssets/sg21.3.6/4.png',basePath+'assets/gradeAssets/sg21.3.6/4.json');
		this.load.atlas('sg_s5', basePath+'assets/gradeAssets/sg21.3.6/5.png',basePath+'assets/gradeAssets/sg21.3.6/5.json');
		this.load.atlas('sg_s6', basePath+'assets/gradeAssets/sg21.3.6/6.png',basePath+'assets/gradeAssets/sg21.3.6/6.json');
		this.load.atlas('sg_s7', basePath+'assets/gradeAssets/sg21.3.6/x7.png',basePath+'assets/gradeAssets/sg21.3.6/x7.json');
		this.load.atlas('sg_s8', basePath+'assets/gradeAssets/sg21.3.6/x8.png',basePath+'assets/gradeAssets/sg21.3.6/x8.json');
		this.load.atlas('sg_s9', basePath+'assets/gradeAssets/sg21.3.6/x9.png',basePath+'assets/gradeAssets/sg21.3.6/x9.json');
		this.load.atlas('sg_s10', basePath+'assets/gradeAssets/sg21.3.6/x10.png',basePath+'assets/gradeAssets/sg21.3.6/x10.json');
		this.load.atlas('sg_s11', basePath+'assets/gradeAssets/sg21.3.6/x11.png',basePath+'assets/gradeAssets/sg21.3.6/x11.json');
		this.load.atlas('sg_s12', basePath+'assets/gradeAssets/sg21.3.6/x12.png',basePath+'assets/gradeAssets/sg21.3.6/x12.json');
		this.load.atlas('sg_s13', basePath+'assets/gradeAssets/sg21.3.6/x13.png',basePath+'assets/gradeAssets/sg21.3.6/x13.json');
		this.load.atlas('sg_s14', basePath+'assets/gradeAssets/sg21.3.6/x14.png',basePath+'assets/gradeAssets/sg21.3.6/x14.json');
		this.load.atlas('sg_s15', basePath+'assets/gradeAssets/sg21.3.6/x15.png',basePath+'assets/gradeAssets/sg21.3.6/x15.json');
		this.load.atlas('sg_s16', basePath+'assets/gradeAssets/sg21.3.6/x16.png',basePath+'assets/gradeAssets/sg21.3.6/x16.json');
		this.load.atlas('sg_s17', basePath+'assets/gradeAssets/sg21.3.6/x17.png',basePath+'assets/gradeAssets/sg21.3.6/x17.json');
		this.load.atlas('sg_s18', basePath+'assets/gradeAssets/sg21.3.6/x18.png',basePath+'assets/gradeAssets/sg21.3.6/x18.json');
		this.load.atlas('sg_s19', basePath+'assets/gradeAssets/sg21.3.6/x19.png',basePath+'assets/gradeAssets/sg21.3.6/x19.json');
		this.load.atlas('sg_s20', basePath+'assets/gradeAssets/sg21.3.6/x20.png',basePath+'assets/gradeAssets/sg21.3.6/x20.json');

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
		this.state.start('sg21_3_6level1');
	},
};
