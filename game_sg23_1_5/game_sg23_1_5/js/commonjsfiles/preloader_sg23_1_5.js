Game.preloader_sg23_1_5=function(game){
	this.preloadBar=null;
};

Game.preloader_sg23_1_5.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg23.1.5)
		this.load.atlas('SG23_1_5ball',basePath+'assets/gradeAssets/sg23.1.5/ball.png',basePath+'assets/gradeAssets/sg23.1.5/ball.json');
		this.load.atlas('SG23_1_5box',basePath+'assets/gradeAssets/sg23.1.5/box.png',basePath+'assets/gradeAssets/sg23.1.5/box.json');
		this.load.atlas('SG23_1_5carrot',basePath+'assets/gradeAssets/sg23.1.5/carrot.png',basePath+'assets/gradeAssets/sg23.1.5/carrot.json');
		this.load.atlas('SG23_1_5cone',basePath+'assets/gradeAssets/sg23.1.5/cone.png',basePath+'assets/gradeAssets/sg23.1.5/cone.json');
		this.load.atlas('SG23_1_5cone1',basePath+'assets/gradeAssets/sg23.1.5/cone1.png',basePath+'assets/gradeAssets/sg23.1.5/cone1.json');
		this.load.atlas('SG23_1_5cube',basePath+'assets/gradeAssets/sg23.1.5/cube.png',basePath+'assets/gradeAssets/sg23.1.5/cube.json');
		this.load.atlas('SG23_1_5cutter',basePath+'assets/gradeAssets/sg23.1.5/cutter.png',basePath+'assets/gradeAssets/sg23.1.5/cutter.json');
		this.load.atlas('SG23_1_5donut',basePath+'assets/gradeAssets/sg23.1.5/donut.png',basePath+'assets/gradeAssets/sg23.1.5/donut.json');
		this.load.atlas('SG23_1_5drum',basePath+'assets/gradeAssets/sg23.1.5/drum.png',basePath+'assets/gradeAssets/sg23.1.5/drum.json');
		this.load.atlas('SG23_1_5heart',basePath+'assets/gradeAssets/sg23.1.5/heart.png',basePath+'assets/gradeAssets/sg23.1.5/heart.json');
		this.load.atlas('SG23_1_5house',basePath+'assets/gradeAssets/sg23.1.5/house.png',basePath+'assets/gradeAssets/sg23.1.5/house.json');
		this.load.atlas('SG23_1_5moon',basePath+'assets/gradeAssets/sg23.1.5/moon.png',basePath+'assets/gradeAssets/sg23.1.5/moon.json');
		this.load.atlas('SG23_1_5nopark',basePath+'assets/gradeAssets/sg23.1.5/nopark.png',basePath+'assets/gradeAssets/sg23.1.5/nopark.json');
		this.load.atlas('SG23_1_5plus',basePath+'assets/gradeAssets/sg23.1.5/plus.png',basePath+'assets/gradeAssets/sg23.1.5/plus.json');
		this.load.atlas('SG23_1_5shape1',basePath+'assets/gradeAssets/sg23.1.5/shape1.png',basePath+'assets/gradeAssets/sg23.1.5/shape1.json');
		this.load.atlas('SG23_1_5shape2',basePath+'assets/gradeAssets/sg23.1.5/shape2.png',basePath+'assets/gradeAssets/sg23.1.5/shape2.json');
		this.load.atlas('SG23_1_5shape3',basePath+'assets/gradeAssets/sg23.1.5/shape3.png',basePath+'assets/gradeAssets/sg23.1.5/shape3.json');
		this.load.atlas('SG23_1_5shape4',basePath+'assets/gradeAssets/sg23.1.5/shape4.png',basePath+'assets/gradeAssets/sg23.1.5/shape4.json');
		this.load.atlas('SG23_1_5shape5',basePath+'assets/gradeAssets/sg23.1.5/shape5.png',basePath+'assets/gradeAssets/sg23.1.5/shape5.json');
		this.load.atlas('SG23_1_5strainer',basePath+'assets/gradeAssets/sg23.1.5/strainer.png',basePath+'assets/gradeAssets/sg23.1.5/strainer.json');
		this.load.atlas('SG23_1_5suitcase',basePath+'assets/gradeAssets/sg23.1.5/suitcase.png',basePath+'assets/gradeAssets/sg23.1.5/suitcase.json');
		this.load.image('SG23_2_5book',basePath+'assets/gradeAssets/sg23.2.5/book.png');
		this.load.atlas('SG23_2_5Box',basePath+'assets/gradeAssets/sg23.2.5/Box.png',basePath+'assets/gradeAssets/sg23.2.5/Box.json');
		this.load.atlas('SG23_2_5ink1',basePath+'assets/gradeAssets/sg23.2.5/ink1.png',basePath+'assets/gradeAssets/sg23.2.5/ink1.json');
		this.load.atlas('SG23_2_5ink2',basePath+'assets/gradeAssets/sg23.2.5/ink2.png',basePath+'assets/gradeAssets/sg23.2.5/ink2.json');
		this.load.atlas('SG23_2_5ink3',basePath+'assets/gradeAssets/sg23.2.5/ink3.png',basePath+'assets/gradeAssets/sg23.2.5/ink3.json');
		this.load.atlas('SG23_2_5ink4',basePath+'assets/gradeAssets/sg23.2.5/ink4.png',basePath+'assets/gradeAssets/sg23.2.5/ink4.json');
		this.load.atlas('SG23_2_5ink5',basePath+'assets/gradeAssets/sg23.2.5/ink5.png',basePath+'assets/gradeAssets/sg23.2.5/ink5.json');
		this.load.atlas('SG23_2_5ink6',basePath+'assets/gradeAssets/sg23.2.5/ink6.png',basePath+'assets/gradeAssets/sg23.2.5/ink6.json');
		this.load.atlas('SG23_2_5ink7',basePath+'assets/gradeAssets/sg23.2.5/ink7.png',basePath+'assets/gradeAssets/sg23.2.5/ink7.json');
		this.load.atlas('SG23_2_5ink8',basePath+'assets/gradeAssets/sg23.2.5/ink8.png',basePath+'assets/gradeAssets/sg23.2.5/ink8.json');
		this.load.atlas('SG23_2_5ink9',basePath+'assets/gradeAssets/sg23.2.5/ink9.png',basePath+'assets/gradeAssets/sg23.2.5/ink9.json');
		this.load.atlas('SG23_2_5ink10',basePath+'assets/gradeAssets/sg23.2.5/ink10.png',basePath+'assets/gradeAssets/sg23.2.5/ink10.json');
		this.load.atlas('SG23_2_5ink11',basePath+'assets/gradeAssets/sg23.2.5/ink11.png',basePath+'assets/gradeAssets/sg23.2.5/ink11.json');
		this.load.atlas('SG23_2_5ink12',basePath+'assets/gradeAssets/sg23.2.5/ink12.png',basePath+'assets/gradeAssets/sg23.2.5/ink12.json');
		this.load.atlas('SG23_2_5ink13',basePath+'assets/gradeAssets/sg23.2.5/ink13.png',basePath+'assets/gradeAssets/sg23.2.5/ink13.json');
		this.load.atlas('SG23_2_5ink14',basePath+'assets/gradeAssets/sg23.2.5/ink14.png',basePath+'assets/gradeAssets/sg23.2.5/ink14.json');
		this.load.atlas('SG23_2_5ink15',basePath+'assets/gradeAssets/sg23.2.5/ink15.png',basePath+'assets/gradeAssets/sg23.2.5/ink15.json');

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
		this.state.start('sg23_1_5level1');
	},
};
