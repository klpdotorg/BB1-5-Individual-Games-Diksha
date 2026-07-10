Game.preloader_unity_11_1=function(game){
	this.preloadBar=null;
};

Game.preloader_unity_11_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (unity/11.1)
		this.load.atlas('unity11_1starAnim',basePath+'assets/commonAssets/starAnim1.png',basePath+'assets/commonAssets/starAnim1.json');
		this.load.image('unity11_1topbar',basePath+'assets/commonAssets/topbar.png');
		this.load.image('unity11_1timerbg',basePath+'assets/commonAssets/timebg.png');
		this.load.atlas('unity11_1speaker',basePath+'assets/commonAssets/grade11_speaker.png',basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.image('unity11_1backg',basePath+'assets/gradeAssets/11.1/backg.png');
		this.load.atlas('unity11_1erase', basePath+'assets/gradeAssets/11.1/erase.png', basePath+'assets/gradeAssets/11.1/erase.json');
		this.load.atlas('unity11_1mul', basePath+'assets/gradeAssets/11.1/mul.png', basePath+'assets/gradeAssets/11.1/mul.json');
		this.load.atlas('unity11_1numberpad', basePath+'assets/gradeAssets/11.1/numberpad.png', basePath+'assets/gradeAssets/11.1/numberpad.json');
		this.load.atlas('unity11_1numbers', basePath+'assets/gradeAssets/11.1/numbers.png', basePath+'assets/gradeAssets/11.1/numbers.json');
		this.load.atlas('unity11_1apple',basePath+'assets/gradeAssets/11.1/apple.png' ,basePath+'assets/gradeAssets/11.1/apple.json');
		this.load.atlas('unity11_1rightmark',basePath+'assets/gradeAssets/11.1/rightmark.png',basePath+'assets/gradeAssets/11.1/rightmark.json');
		this.load.image('unity11_1b2', basePath+'assets/gradeAssets/11.1/b2.png');
		this.load.image('unity11_1a1', basePath+'assets/gradeAssets/11.1/a1.png');
		this.load.image('unity11_1a2', basePath+'assets/gradeAssets/11.1/a2.png');
		this.load.image('unity11_1a3', basePath+'assets/gradeAssets/11.1/a3.png');
		this.load.image('unity11_1ansbox', basePath+'assets/gradeAssets/11.1/ansbox.png');
		this.load.image('unity11_1apple1', basePath+'assets/gradeAssets/11.1/apple1.png');
		this.load.image('unity11_1apple2', basePath+'assets/gradeAssets/11.1/apple2.png');
		this.load.image('unity11_1apple3', basePath+'assets/gradeAssets/11.1/apple3.png');
		this.load.image('unity11_1box', basePath+'assets/gradeAssets/11.1/box.png');
		this.load.image('unity11_1equal', basePath+'assets/gradeAssets/11.1/equal.png');
		this.load.image('unity11_1set', basePath+'assets/gradeAssets/11.1/set.png');
		this.load.image('unity11_1plus', basePath+'assets/gradeAssets/11.1/plus.png');
		this.load.atlas('unity11_2starAnim',basePath+'assets/commonAssets/starAnim1.png',basePath+'assets/commonAssets/starAnim1.json');
		this.load.image('unity11_2topbar',basePath+'assets/commonAssets/topbar.png');
		this.load.image('unity11_2timerbg',basePath+'assets/commonAssets/timebg.png');
		this.load.atlas('unity11_2speaker',basePath+'assets/commonAssets/grade11_speaker.png',basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.image('unity11_2backg',basePath+'assets/gradeAssets/11.1/backg.png');
		this.load.atlas('unity11_2erase', basePath+'assets/gradeAssets/11.1/erase.png', basePath+'assets/gradeAssets/11.1/erase.json');
		this.load.atlas('unity11_2mul', basePath+'assets/gradeAssets/11.1/mul.png', basePath+'assets/gradeAssets/11.1/mul.json');
		this.load.atlas('unity11_2numberpad', basePath+'assets/gradeAssets/11.1/numberpad.png', basePath+'assets/gradeAssets/11.1/numberpad.json');
		this.load.atlas('unity11_2numbers', basePath+'assets/gradeAssets/11.1/numbers.png', basePath+'assets/gradeAssets/11.1/numbers.json');
		this.load.atlas('unity11_2apple',basePath+'assets/gradeAssets/11.1/apple.png' ,basePath+'assets/gradeAssets/11.1/apple.json');
		this.load.atlas('unity11_2rightmark',basePath+'assets/gradeAssets/11.1/rightmark.png',basePath+'assets/gradeAssets/11.1/rightmark.json');
		this.load.image('unity11_2b2', basePath+'assets/gradeAssets/11.1/b2.png');
		this.load.image('unity11_2a1', basePath+'assets/gradeAssets/11.1/a1.png');
		this.load.image('unity11_2a2', basePath+'assets/gradeAssets/11.1/a2.png');
		this.load.image('unity11_2a3', basePath+'assets/gradeAssets/11.1/a3.png');
		this.load.image('unity11_2ansbox', basePath+'assets/gradeAssets/11.1/ansbox.png');
		this.load.image('unity11_2apple1', basePath+'assets/gradeAssets/11.1/apple1.png');
		this.load.image('unity11_2apple2', basePath+'assets/gradeAssets/11.1/apple2.png');
		this.load.image('unity11_2apple3', basePath+'assets/gradeAssets/11.1/apple3.png');
		this.load.image('unity11_2box', basePath+'assets/gradeAssets/11.1/box.png');
		this.load.image('unity11_2equal', basePath+'assets/gradeAssets/11.1/equal.png');
		this.load.image('unity11_2set', basePath+'assets/gradeAssets/11.1/set.png');
		this.load.image('unity11_2plus', basePath+'assets/gradeAssets/11.1/plus.png');

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
		this.load.atlas('Level43A_numbg', basePath+'assets/gradeAssets/4.3A/commonAssets/numbg.png', basePath+'assets/gradeAssets/4.3A/numbg.json');



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
		this.state.start('unity11_1level1');
	},
};
