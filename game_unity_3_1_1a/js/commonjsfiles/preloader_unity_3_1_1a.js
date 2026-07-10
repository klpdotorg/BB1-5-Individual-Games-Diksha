Game.preloader_unity_3_1_1a=function(game){
	this.preloadBar=null;
};

Game.preloader_unity_3_1_1a.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (unity/3.1.1a)
		this.load.atlas('unity3_1_1rightmark',basePath+'assets/gradeAssets/3.1.1/rightmark.png',basePath+'assets/gradeAssets/3.1.1/rightmark.json');
		this.load.atlas('unity3_1_1box',basePath+'assets/gradeAssets/3.1.1/box.png',basePath+'assets/gradeAssets/3.1.1/box.json');
		this.load.atlas('unity3_1_1boxanim',basePath+'assets/gradeAssets/3.1.1/boxanim.png',basePath+'assets/gradeAssets/3.1.1/boxanim.json');
		this.load.atlas('unity3_1_1eraser',basePath+'assets/gradeAssets/3.1.1/eraser.png',basePath+'assets/gradeAssets/3.1.1/eraser.json');
		this.load.atlas('unity3_1_1numberpad',basePath+'assets/gradeAssets/3.1.1/numberpad.png',basePath+'assets/gradeAssets/3.1.1/numberpad.json');
		this.load.image('unity3_1_1scorebox', basePath+'assets/gradeAssets/3.1.1/scorebox.png');
		this.load.image('unity3_1_1tbox', basePath+'assets/gradeAssets/3.1.1/tbox.png');
		this.load.image('unity3_1_1tbox2', basePath+'assets/gradeAssets/3.1.1/tbox2.png');
		this.load.atlas('unity3_1_1woodstick1',basePath+'assets/gradeAssets/3.1.1/woodstick1.png',basePath+'assets/gradeAssets/3.1.1/woodstick1.json');
		this.load.atlas('unity3_1_1woodstick2',basePath+'assets/gradeAssets/3.1.1/woodstick2.png',basePath+'assets/gradeAssets/3.1.1/woodstick2.json');
		this.load.atlas('unity3_1_1woodstickanim',basePath+'assets/gradeAssets/3.1.1/woodstickanim.png',basePath+'assets/gradeAssets/3.1.1/woodstickanim.json');
		this.load.image('unity3_1_1b2', basePath+'assets/gradeAssets/3.1.1/b2.png');
		this.load.atlas('unity3_1_1ansbox',basePath+'assets/gradeAssets/3.1.1/ansbox.png',basePath+'assets/gradeAssets/3.1.1/ansbox.json');
		this.load.image('unity3_1_1backg',basePath+'assets/commonAssets/backg.png');
		this.load.atlas('unity3_1_2rightmark',basePath+'assets/gradeAssets/3.1.1/rightmark.png',basePath+'assets/gradeAssets/3.1.1/rightmark.json');
		this.load.atlas('unity3_1_2coin',basePath+'assets/gradeAssets/3.1.1/coin.png',basePath+'assets/gradeAssets/3.1.1/coin.json');
		this.load.atlas('unity3_1_2coinanim',basePath+'assets/gradeAssets/3.1.1/coinanim.png',basePath+'assets/gradeAssets/3.1.1/coinanim.json');
		this.load.atlas('unity3_1_2eraser',basePath+'assets/gradeAssets/3.1.1/eraser.png',basePath+'assets/gradeAssets/3.1.1/eraser.json');
		this.load.atlas('unity3_1_2numberpad',basePath+'assets/gradeAssets/3.1.1/numberpad.png',basePath+'assets/gradeAssets/3.1.1/numberpad.json');
		this.load.image('unity3_1_2scorebox', basePath+'assets/gradeAssets/3.1.1/scorebox.png');
		this.load.image('unity3_1_2tbox', basePath+'assets/gradeAssets/3.1.1/tbox.png');
		this.load.image('unity3_1_2b2', basePath+'assets/gradeAssets/3.1.1/b2.png');
		this.load.atlas('unity3_1_2ansbox',basePath+'assets/gradeAssets/3.1.1/ansbox.png',basePath+'assets/gradeAssets/3.1.1/ansbox.json');
		this.load.atlas('unity3_1_2box',basePath+'assets/gradeAssets/3.1.1/box.png',basePath+'assets/gradeAssets/3.1.1/box.json');
		this.load.atlas('unity3_1_2boxanim',basePath+'assets/gradeAssets/3.1.1/boxanim.png',basePath+'assets/gradeAssets/3.1.1/boxanim.json');
		this.load.image('unity3_1_2backg',basePath+'assets/commonAssets/backg.png');

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
		this.load.image('Level321_navBar', basePath+'assets/commonAssets/navBar.png');
		this.load.image('Level321_timebg', basePath+'assets/commonAssets/timebg.png');
		this.load.atlas('Level321_CommonSpeakerBtn', basePath+'assets/commonAssets/grade11_speaker.png', basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.image('Unity4_1_1hand', basePath+'assets/gradeAssets/4.1.1/hand.png');
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
		this.state.start('unity3_1_1alevel1');
	},
};
