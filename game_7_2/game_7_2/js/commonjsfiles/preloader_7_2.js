Game.preloader_7_2=function(game){
	this.preloadBar=null;
};

Game.preloader_7_2.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (7.2)
		this.load.image('Level72_bg1', basePath+'assets/gradeAssets/7.2/backg2.png');
		this.load.image('Level72_bg2', basePath+'assets/gradeAssets/7.2/backg.png');
		this.load.atlas('numbg', basePath+'assets/gradeAssets/7.2/numbg.png', basePath+'assets/gradeAssets/7.2/numbg.json');
		this.load.atlas('rightBtn', basePath+'assets/gradeAssets/7.2/rightBtn.png', basePath+'assets/gradeAssets/7.2/rightBtn.json');
		this.load.atlas('wrongBtn', basePath+'assets/gradeAssets/7.2/wrongBtn.png', basePath+'assets/gradeAssets/7.2/wrongBtn.json');
		this.load.atlas('Level72_tickMark', basePath+'assets/gradeAssets/7.2/tickMark.png', basePath+'assets/gradeAssets/7.2/tickMark.json');
		this.load.atlas('Level72_minHand', basePath+'assets/gradeAssets/7.2/minuteHand.png', basePath+'assets/gradeAssets/7.2/minuteHand.json');
		this.load.atlas('Level72_hourHand', basePath+'assets/gradeAssets/7.2/hourHand.png', basePath+'assets/gradeAssets/7.2/hourHand.json');
		this.load.atlas('Level72_circleToCover', basePath+'assets/gradeAssets/7.2/A3.png', basePath+'assets/gradeAssets/7.2/A3.json');
		this.load.image('Level72_hr', basePath+'assets/gradeAssets/7.2/hr.png');
		this.load.image('Level72_mn', basePath+'assets/gradeAssets/7.2/mn.png');
		this.load.atlas('Level72_clock', basePath+'assets/gradeAssets/7.2/clock.png', basePath+'assets/gradeAssets/7.2/clock.json');
		this.load.atlas('Level72_inputBox', basePath+'assets/gradeAssets/7.2/inputBox.png', basePath+'assets/gradeAssets/7.2/inputBox.json');
		this.load.atlas('Level72_showNumbers', basePath+'assets/gradeAssets/7.2/0To9.png', basePath+'assets/gradeAssets/7.2/0To9.json');

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
		this.load.image('box', basePath+'assets/gradeAssets/unity/commonAssets/box.png');
		this.load.atlas('Level42A_CommonSpeakerBtn', basePath+'assets/gradeAssets/4.2A/commonAssets/speaker.png', basePath+'assets/gradeAssets/4.2A/speaker.json');



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
		this.state.start('grade7_2level1');
	},
};
