Game.preloader_sg8_2_2=function(game){
	this.preloadBar=null;
};

Game.preloader_sg8_2_2.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg8.2.2)
		this.load.atlas('SG3_1_1rightmark',basePath+'assets/gradeAssets/sg3.1.1/rightmark.png',basePath+'assets/gradeAssets/sg3.1.1/rightmark.json');
		this.load.atlas('8_2_2angle1',basePath+'assets/gradeAssets/sg8.2.2/angle1.png',basePath+'assets/gradeAssets/sg8.2.2/angle1.json');
		this.load.atlas('8_2_2angle2',basePath+'assets/gradeAssets/sg8.2.2/angle2.png',basePath+'assets/gradeAssets/sg8.2.2/angle2.json');
		this.load.atlas('8_2_2angle3',basePath+'assets/gradeAssets/sg8.2.2/angle3.png',basePath+'assets/gradeAssets/sg8.2.2/angle3.json');
		this.load.atlas('8_2_2angle4',basePath+'assets/gradeAssets/sg8.2.2/angle4.png',basePath+'assets/gradeAssets/sg8.2.2/angle4.json');
		this.load.atlas('8_2_2angle5',basePath+'assets/gradeAssets/sg8.2.2/angle5.png',basePath+'assets/gradeAssets/sg8.2.2/angle5.json');
		this.load.atlas('8_2_2angle6',basePath+'assets/gradeAssets/sg8.2.2/angle6.png',basePath+'assets/gradeAssets/sg8.2.2/angle6.json');
		this.load.atlas('8_2_2angle7',basePath+'assets/gradeAssets/sg8.2.2/angle7.png',basePath+'assets/gradeAssets/sg8.2.2/angle7.json');
		this.load.atlas('8_2_2angle8',basePath+'assets/gradeAssets/sg8.2.2/angle8.png',basePath+'assets/gradeAssets/sg8.2.2/angle8.json');
		this.load.image('8_2_2eraser',basePath+'assets/gradeAssets/sg8.2.2/eraser.png');
		this.load.image('8_2_2white',basePath+'assets/gradeAssets/sg8.2.2/white box.png');
		this.load.atlas('8_2_2box',basePath+'assets/gradeAssets/sg8.2.2/box.png',basePath+'assets/gradeAssets/sg8.2.2/box.json');
		this.load.atlas('8_2_2tick',basePath+'assets/gradeAssets/sg8.2.2/tickMark.png',basePath+'assets/gradeAssets/sg8.2.2/tickMark.json');
		this.load.image('sg8_2_2dot',basePath+'assets/gradeAssets/sg8.2.2/dot.png');
		this.load.image('8_2_2dot1',basePath+'assets/gradeAssets/sg8.2.2/dot1.png');
		this.load.image('8_2_2dot2',basePath+'assets/gradeAssets/sg8.2.2/dot2.png');
		this.load.image('8_2_2dot3',basePath+'assets/gradeAssets/sg8.2.2/dot3.png');
		this.load.image('8_2_2dot4',basePath+'assets/gradeAssets/sg8.2.2/dot4.png');
		this.load.image('8_2_2dot5',basePath+'assets/gradeAssets/sg8.2.2/dot5.png');
		this.load.image('8_2_2dot6',basePath+'assets/gradeAssets/sg8.2.2/dot6.png');
		this.load.image('8_2_2shape1',basePath+'assets/gradeAssets/sg8.2.2/shape1.png');
		this.load.image('8_2_2shape2',basePath+'assets/gradeAssets/sg8.2.2/shape2.png');
		this.load.image('8_2_2shape3',basePath+'assets/gradeAssets/sg8.2.2/shape3.png');
		this.load.image('8_2_2shape4',basePath+'assets/gradeAssets/sg8.2.2/shape4.png');
		this.load.image('8_2_2shape5',basePath+'assets/gradeAssets/sg8.2.2/shape5.png');
		this.load.image('8_2_2shape6',basePath+'assets/gradeAssets/sg8.2.2/shape6.png');
		this.load.image('8_2_2shape7',basePath+'assets/gradeAssets/sg8.2.2/shape7.png');
		this.load.image('8_2_2shape8',basePath+'assets/gradeAssets/sg8.2.2/shape8.png');
		this.load.image('8_2_2shape9',basePath+'assets/gradeAssets/sg8.2.2/shape9.png');
		this.load.image('sg8_2_2shape10',basePath+'assets/gradeAssets/sg8.2.2/shape10.png');
		this.load.image('sg8_2_2shape11',basePath+'assets/gradeAssets/sg8.2.2/shape11.png');
		this.load.image('sg8_2_2shape12',basePath+'assets/gradeAssets/sg8.2.2/shape12.png');
		this.load.image('sg8_2_2shape13',basePath+'assets/gradeAssets/sg8.2.2/shape13.png');
		this.load.image('sg8_2_2shape14',basePath+'assets/gradeAssets/sg8.2.2/shape14.png');
		this.load.atlas('8_2_2yellow',basePath+'assets/gradeAssets/sg8.2.2/yellow dot.png',basePath+'assets/gradeAssets/sg8.2.2/yellow dot.json');

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
		this.load.atlas('eraser', basePath+'assets/gradeAssets/4.3A/commonAssets/eraser.png', basePath+'assets/gradeAssets/4.3A/eraser.json');



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
		this.state.start('sg8_2_2level1');
	},
};
