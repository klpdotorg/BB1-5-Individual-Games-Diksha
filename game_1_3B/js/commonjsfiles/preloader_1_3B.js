Game.preloader_1_3B=function(game){
	this.preloadBar=null;
};

Game.preloader_1_3B.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (1.3B)
		this.load.image('Level13B_background', basePath+'assets/gradeAssets/1.3B/bg.png');
		this.load.atlas('Level13B_flagmain11', basePath+'assets/gradeAssets/1.3B/m1.png', basePath+'assets/gradeAssets/1.3B/m1.json');
		this.load.image('Level13B_Ans1', basePath+'assets/gradeAssets/1.3B/o11.png');
		this.load.image('Level13B_Ans2', basePath+'assets/gradeAssets/1.3B/o12.png');
		this.load.image('Level13B_Ans3', basePath+'assets/gradeAssets/1.3B/o13.png');
		this.load.atlas('Level13B_flagmain12', basePath+'assets/gradeAssets/1.3B/m2.png', basePath+'assets/gradeAssets/1.3B/m2.json');
		this.load.image('Level13B_Ans21', basePath+'assets/gradeAssets/1.3B/o21.png');
		this.load.image('Level13B_Ans22', basePath+'assets/gradeAssets/1.3B/o22.png');
		this.load.image('Level13B_Ans23', basePath+'assets/gradeAssets/1.3B/o23.png');
		this.load.atlas('Level13B_flagmain31', basePath+'assets/gradeAssets/1.3B/m3.png', basePath+'assets/gradeAssets/1.3B/m3.json');
		this.load.image('Level13B_Ans31', basePath+'assets/gradeAssets/1.3B/o31.png');
		this.load.image('Level13B_Ans32', basePath+'assets/gradeAssets/1.3B/o32.png');
		this.load.image('Level13B_Ans33', basePath+'assets/gradeAssets/1.3B/o33.png');
		this.load.atlas('Level13B_flagmain41', basePath+'assets/gradeAssets/1.3B/m4.png', basePath+'assets/gradeAssets/1.3B/m4.json');
		this.load.image('Level13B_Ans41', basePath+'assets/gradeAssets/1.3B/o41.png');
		this.load.image('Level13B_Ans42', basePath+'assets/gradeAssets/1.3B/o42.png');
		this.load.atlas('Level13B_flagmain51', basePath+'assets/gradeAssets/1.3B/m5.png', basePath+'assets/gradeAssets/1.3B/m5.json');
		this.load.image('Level13B_Ans51', basePath+'assets/gradeAssets/1.3B/o51.png');
		this.load.image('Level13B_Ans52', basePath+'assets/gradeAssets/1.3B/o52.png');
		this.load.image('Level13B_Ans53', basePath+'assets/gradeAssets/1.3B/o53.png');
		this.load.atlas('Level13B_flagmain61', basePath+'assets/gradeAssets/1.3B/m6.png', basePath+'assets/gradeAssets/1.3B/m6.json');
		this.load.image('Level13B_Ans61', basePath+'assets/gradeAssets/1.3B/o61.png');
		this.load.image('Level13B_Ans62', basePath+'assets/gradeAssets/1.3B/o62.png');
		this.load.image('Level13B_Ans63', basePath+'assets/gradeAssets/1.3B/o63.png');
		this.load.atlas('Level13B_flagmain71', basePath+'assets/gradeAssets/1.3B/m7.png', basePath+'assets/gradeAssets/1.3B/m7.json');
		this.load.atlas('Level13B_flagmain81', basePath+'assets/gradeAssets/1.3B/m8.png', basePath+'assets/gradeAssets/1.3B/m8.json');
		this.load.image('Level13B_Ans81', basePath+'assets/gradeAssets/1.3B/o81.png');
		this.load.image('Level13B_Ans82', basePath+'assets/gradeAssets/1.3B/o82.png');
		this.load.image('Level13B_Ans83', basePath+'assets/gradeAssets/1.3B/o83.png');
		this.load.atlas('Level13B_flagmain91', basePath+'assets/gradeAssets/1.3B/m9.png', basePath+'assets/gradeAssets/1.3B/m9.json');
		this.load.image('Level13B_Ans91', basePath+'assets/gradeAssets/1.3B/o91.png');
		this.load.image('Level13B_Ans92', basePath+'assets/gradeAssets/1.3B/o92.png');
		this.load.image('Level13B_Ans93', basePath+'assets/gradeAssets/1.3B/o93.png');
		this.load.atlas('Level13B_flagmain10_1', basePath+'assets/gradeAssets/1.3B/m10.png', basePath+'assets/gradeAssets/1.3B/m10.json');
		this.load.image('Level13B_Ans10_1', basePath+'assets/gradeAssets/1.3B/o101.png');
		this.load.image('Level13B_Ans10_2', basePath+'assets/gradeAssets/1.3B/o102.png');
		this.load.image('Level13B_Ans10_3', basePath+'assets/gradeAssets/1.3B/o103.png');
		this.load.atlas('Level13B_flagmain11_1', basePath+'assets/gradeAssets/1.3B/m11.png', basePath+'assets/gradeAssets/1.3B/m11.json');
		this.load.image('Level13B_Ans11_1', basePath+'assets/gradeAssets/1.3B/o111.png');
		this.load.image('Level13B_Ans11_2', basePath+'assets/gradeAssets/1.3B/o101.png');
		this.load.image('Level13B_Ans11_3', basePath+'assets/gradeAssets/1.3B/o113.png');

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
		this.load.atlas('Level321_CommonSpeakerBtn', basePath+'assets/commonAssets/grade11_speaker.png', basePath+'assets/commonAssets/grade11_speaker.json');



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
		this.state.start('grade1_3Blevel1');
	},
};
