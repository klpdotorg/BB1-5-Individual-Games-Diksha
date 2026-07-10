Game.preloader_sg4_1_1=function(game){
	this.preloadBar=null;
};

Game.preloader_sg4_1_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg4.1.1)
		this.load.image('4_1_1bg',basePath+'assets/gradeAssets/sg4.1.1/Bg.png');
		this.load.atlas('4_1_1cone',basePath+'assets/gradeAssets/sg4.1.1/cone icons.png',basePath+'assets/gradeAssets/sg4.1.1/cone icons.json');
		this.load.atlas('4_1_1cube',basePath+'assets/gradeAssets/sg4.1.1/cube icons.png',basePath+'assets/gradeAssets/sg4.1.1/cube icons.json');
		this.load.atlas('4_1_1cuboid',basePath+'assets/gradeAssets/sg4.1.1/cuboid icons.png',basePath+'assets/gradeAssets/sg4.1.1/cuboid icons.json');
		this.load.atlas('4_1_1cylinder',basePath+'assets/gradeAssets/sg4.1.1/Cylinder icons.png',basePath+'assets/gradeAssets/sg4.1.1/Cylinder icons.json');
		this.load.atlas('4_1_1sphere',basePath+'assets/gradeAssets/sg4.1.1/Sphere icons.png',basePath+'assets/gradeAssets/sg4.1.1/Sphere icons.json');
		this.load.atlas('4_1_1tick',basePath+'assets/gradeAssets/sg4.1.1/tickMark.png',basePath+'assets/gradeAssets/sg4.1.1/tickMark.json');
		this.load.atlas('4_1_1cone1',basePath+'assets/gradeAssets/sg4.1.1/cone1.png',basePath+'assets/gradeAssets/sg4.1.1/cone1.json');
		this.load.atlas('4_1_1cone2',basePath+'assets/gradeAssets/sg4.1.1/cone2.png',basePath+'assets/gradeAssets/sg4.1.1/cone2.json');
		this.load.atlas('4_1_1cone3',basePath+'assets/gradeAssets/sg4.1.1/cone3.png',basePath+'assets/gradeAssets/sg4.1.1/cone3.json');
		this.load.atlas('4_1_1cone4',basePath+'assets/gradeAssets/sg4.1.1/cone4.png',basePath+'assets/gradeAssets/sg4.1.1/cone4.json');
		this.load.atlas('4_1_1cube1',basePath+'assets/gradeAssets/sg4.1.1/cube1.png',basePath+'assets/gradeAssets/sg4.1.1/cube1.json');
		this.load.atlas('4_1_1cube2',basePath+'assets/gradeAssets/sg4.1.1/cube2.png',basePath+'assets/gradeAssets/sg4.1.1/cube2.json');
		this.load.atlas('4_1_1cube3',basePath+'assets/gradeAssets/sg4.1.1/cube3.png',basePath+'assets/gradeAssets/sg4.1.1/cube3.json');
		this.load.atlas('4_1_1cube4',basePath+'assets/gradeAssets/sg4.1.1/cube4.png',basePath+'assets/gradeAssets/sg4.1.1/cube4.json');
		this.load.atlas('4_1_1cube5',basePath+'assets/gradeAssets/sg4.1.1/cube5.png',basePath+'assets/gradeAssets/sg4.1.1/cube5.json');
		this.load.atlas('4_1_1cuboid1',basePath+'assets/gradeAssets/sg4.1.1/cuboid1.png',basePath+'assets/gradeAssets/sg4.1.1/cuboid1.json');
		this.load.atlas('4_1_1cuboid2',basePath+'assets/gradeAssets/sg4.1.1/cuboid2.png',basePath+'assets/gradeAssets/sg4.1.1/cuboid2.json');
		this.load.atlas('4_1_1cuboid3',basePath+'assets/gradeAssets/sg4.1.1/cuboid3.png',basePath+'assets/gradeAssets/sg4.1.1/cuboid3.json');
		this.load.atlas('4_1_1cuboid4',basePath+'assets/gradeAssets/sg4.1.1/cuboid4.png',basePath+'assets/gradeAssets/sg4.1.1/cuboid4.json');
		this.load.atlas('4_1_1cuboid5',basePath+'assets/gradeAssets/sg4.1.1/cuboid5.png',basePath+'assets/gradeAssets/sg4.1.1/cuboid5.json');
		this.load.atlas('4_1_1cuboid6',basePath+'assets/gradeAssets/sg4.1.1/cuboid6.png',basePath+'assets/gradeAssets/sg4.1.1/cuboid6.json');
		this.load.atlas('4_1_1cylinder1',basePath+'assets/gradeAssets/sg4.1.1/cylinder1.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder1.json');
		this.load.atlas('4_1_1cylinder2',basePath+'assets/gradeAssets/sg4.1.1/cylinder2.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder2.json');
		this.load.atlas('4_1_1cylinder3',basePath+'assets/gradeAssets/sg4.1.1/cylinder3.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder3.json');
		this.load.atlas('4_1_1cylinder4',basePath+'assets/gradeAssets/sg4.1.1/cylinder4.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder4.json');
		this.load.atlas('4_1_1cylinder5',basePath+'assets/gradeAssets/sg4.1.1/cylinder5.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder5.json');
		this.load.atlas('4_1_1cylinder6',basePath+'assets/gradeAssets/sg4.1.1/cylinder6.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder6.json');
		this.load.atlas('4_1_1cylinder7',basePath+'assets/gradeAssets/sg4.1.1/cylinder7.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder7.json');
		this.load.atlas('4_1_1cylinder8',basePath+'assets/gradeAssets/sg4.1.1/cylinder8.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder8.json');
		this.load.atlas('4_1_1cylinder9',basePath+'assets/gradeAssets/sg4.1.1/cylinder9.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder9.json');
		this.load.atlas('4_1_1sphere1',basePath+'assets/gradeAssets/sg4.1.1/sphere1.png',basePath+'assets/gradeAssets/sg4.1.1/sphere1.json');
		this.load.atlas('4_1_1sphere2',basePath+'assets/gradeAssets/sg4.1.1/sphere2.png',basePath+'assets/gradeAssets/sg4.1.1/sphere2.json');
		this.load.atlas('4_1_1sphere3',basePath+'assets/gradeAssets/sg4.1.1/sphere3.png',basePath+'assets/gradeAssets/sg4.1.1/sphere3.json');
		this.load.atlas('4_1_1sphere4',basePath+'assets/gradeAssets/sg4.1.1/sphere4.png',basePath+'assets/gradeAssets/sg4.1.1/sphere4.json');
		this.load.atlas('4_1_1sphere5',basePath+'assets/gradeAssets/sg4.1.1/sphere5.png',basePath+'assets/gradeAssets/sg4.1.1/sphere5.json');
		this.load.atlas('4_1_1sphere6',basePath+'assets/gradeAssets/sg4.1.1/sphere6.png',basePath+'assets/gradeAssets/sg4.1.1/sphere6.json');
		this.load.atlas('4_1_1sphere7',basePath+'assets/gradeAssets/sg4.1.1/sphere7.png',basePath+'assets/gradeAssets/sg4.1.1/sphere7.json');
		this.load.atlas('4_1_1cone21',basePath+'assets/gradeAssets/sg4.1.1/cone21.png',basePath+'assets/gradeAssets/sg4.1.1/cone21.json');
		this.load.atlas('4_1_1cone22',basePath+'assets/gradeAssets/sg4.1.1/cone22.png',basePath+'assets/gradeAssets/sg4.1.1/cone22.json');
		this.load.atlas('4_1_1cube31',basePath+'assets/gradeAssets/sg4.1.1/cube31.png',basePath+'assets/gradeAssets/sg4.1.1/cube31.json');
		this.load.atlas('4_1_1cuboid41',basePath+'assets/gradeAssets/sg4.1.1/cuboid41.png',basePath+'assets/gradeAssets/sg4.1.1/cuboid41.json');
		this.load.atlas('4_1_1cylinder21',basePath+'assets/gradeAssets/sg4.1.1/cylinder21.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder21.json');
		this.load.atlas('4_1_1cylinder41',basePath+'assets/gradeAssets/sg4.1.1/cylinder41.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder41.json');
		this.load.atlas('4_1_1cylinder71',basePath+'assets/gradeAssets/sg4.1.1/cylinder71.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder71.json');
		this.load.atlas('4_1_1cylinder72',basePath+'assets/gradeAssets/sg4.1.1/cylinder72.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder72.json');
		this.load.atlas('4_1_1cylinder91',basePath+'assets/gradeAssets/sg4.1.1/cylinder91.png',basePath+'assets/gradeAssets/sg4.1.1/cylinder91.json');
		this.load.atlas('4_1_1sphere11',basePath+'assets/gradeAssets/sg4.1.1/sphere11.png',basePath+'assets/gradeAssets/sg4.1.1/sphere11.json');
		this.load.atlas('4_1_1sphere31',basePath+'assets/gradeAssets/sg4.1.1/sphere31.png',basePath+'assets/gradeAssets/sg4.1.1/sphere31.json');
		this.load.atlas('4_1_1sphere41',basePath+'assets/gradeAssets/sg4.1.1/sphere41.png',basePath+'assets/gradeAssets/sg4.1.1/sphere41.json');
		this.load.atlas('4_1_1sphere51',basePath+'assets/gradeAssets/sg4.1.1/sphere51.png',basePath+'assets/gradeAssets/sg4.1.1/sphere51.json');
		this.load.atlas('4_1_1sphere61',basePath+'assets/gradeAssets/sg4.1.1/sphere61.png',basePath+'assets/gradeAssets/sg4.1.1/sphere61.json');
		this.load.atlas('4_1_1sphere21',basePath+'assets/gradeAssets/sg4.1.1/sphere21.png',basePath+'assets/gradeAssets/sg4.1.1/sphere21.json');

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
		this.load.atlas('glow', basePath+'assets/gradeAssets/unity/commonAssets/glow.png', basePath+'assets/gradeAssets/unity/commonJson/glow.json');



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
		this.state.start('sg4_1_1level1');
	},
};
