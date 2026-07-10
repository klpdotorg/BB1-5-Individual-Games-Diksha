Game.preloader_sg14_1_3=function(game){
	this.preloadBar=null;
};

Game.preloader_sg14_1_3.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg14.1.3)
		this.load.image('SG14_1_3grid1', basePath+'assets/gradeAssets/sg14.1.3/grid1.png');
		this.load.image('SG14_1_3emptygrid1', basePath+'assets/gradeAssets/sg14.1.3/emptygrid1.png');
		this.load.image('SG14_1_3blue', basePath+'assets/gradeAssets/sg14.1.3/blue.png');
		this.load.image('SG14_1_3green', basePath+'assets/gradeAssets/sg14.1.3/green.png');
		this.load.image('SG14_1_3orange', basePath+'assets/gradeAssets/sg14.1.3/orange.png');
		this.load.image('SG14_1_3purple', basePath+'assets/gradeAssets/sg14.1.3/purple.png');
		this.load.image('SG14_1_3red', basePath+'assets/gradeAssets/sg14.1.3/red.png');
		this.load.image('SG14_1_3yellow', basePath+'assets/gradeAssets/sg14.1.3/yellow.png');
		this.load.atlas('SG14_1_3screen', basePath+'assets/gradeAssets/sg14.1.3/screen.png', basePath+'assets/gradeAssets/sg14.1.3/screen.json');
		this.load.image('SG14_1_3grid2', basePath+'assets/gradeAssets/sg14.1.3/grid2.png');
		this.load.image('SG14_1_3emptygrid2', basePath+'assets/gradeAssets/sg14.1.3/emptygrid2.png');
		this.load.image('SG14_1_3hexagon', basePath+'assets/gradeAssets/sg14.1.3/hexagon.png');
		this.load.image('SG14_1_3grid3', basePath+'assets/gradeAssets/sg14.1.3/grid3.png');
		this.load.image('SG14_1_3emptygrid3', basePath+'assets/gradeAssets/sg14.1.3/emptygrid3.png');
		this.load.image('SG14_1_3yellowtriangle', basePath+'assets/gradeAssets/sg14.1.3/yellowtriangle.png');
		this.load.image('SG14_1_3redtriangle', basePath+'assets/gradeAssets/sg14.1.3/redtriangle.png');
		this.load.image('SG14_1_3grid4', basePath+'assets/gradeAssets/sg14.1.3/grid4.png');
		this.load.image('SG14_1_3emptygrid4', basePath+'assets/gradeAssets/sg14.1.3/emptygrid4.png');
		this.load.image('SG14_1_3yellowhexa1', basePath+'assets/gradeAssets/sg14.1.3/yellowhexa1.png');
		this.load.image('SG14_1_3yellowhexa2', basePath+'assets/gradeAssets/sg14.1.3/yellowhexa2.png');
		this.load.image('SG14_1_3orange1', basePath+'assets/gradeAssets/sg14.1.3/orange1.png');
		this.load.image('SG14_1_3orange2', basePath+'assets/gradeAssets/sg14.1.3/orange2.png');
		this.load.image('SG14_1_3orange3', basePath+'assets/gradeAssets/sg14.1.3/orange3.png');
		this.load.image('SG14_1_3purple1', basePath+'assets/gradeAssets/sg14.1.3/purple1.png');
		this.load.image('SG14_1_3purple2', basePath+'assets/gradeAssets/sg14.1.3/purple2.png');
		this.load.image('SG14_1_3purple3', basePath+'assets/gradeAssets/sg14.1.3/purple3.png');
		this.load.image('SG14_1_3grid5', basePath+'assets/gradeAssets/sg14.1.3/grid5.png');
		this.load.image('SG14_1_3emptygrid5', basePath+'assets/gradeAssets/sg14.1.3/emptygrid5.png');
		this.load.image('SG14_1_3square', basePath+'assets/gradeAssets/sg14.1.3/square.png');
		this.load.image('SG14_1_3greenleft', basePath+'assets/gradeAssets/sg14.1.3/greenleft.png');
		this.load.image('SG14_1_3greenright', basePath+'assets/gradeAssets/sg14.1.3/greenright.png');
		this.load.image('SG14_1_3blueshape', basePath+'assets/gradeAssets/sg14.1.3/blueshape.png');
		this.load.image('SG14_1_3hexa', basePath+'assets/gradeAssets/sg14.1.3/hexa.png');
		this.load.image('SG14_1_3grid6', basePath+'assets/gradeAssets/sg14.1.3/grid6.png');
		this.load.image('SG14_1_3emptygrid6', basePath+'assets/gradeAssets/sg14.1.3/emptygrid6.png');
		this.load.image('SG14_1_3redpentagon1', basePath+'assets/gradeAssets/sg14.1.3/redpentagon1.png');
		this.load.image('SG14_1_3redpentagon2', basePath+'assets/gradeAssets/sg14.1.3/redpentagon2.png');
		this.load.image('SG14_1_3orangepentagon1', basePath+'assets/gradeAssets/sg14.1.3/orangepentagon1.png');
		this.load.image('SG14_1_3orangepentagon2', basePath+'assets/gradeAssets/sg14.1.3/orangepentagon2.png');
		this.load.image('SG14_1_3blue1', basePath+'assets/gradeAssets/sg14.1.3/blue1.png');
		this.load.image('SG14_1_3green1', basePath+'assets/gradeAssets/sg14.1.3/green1.png');
		this.load.image('SG14_1_3grid7', basePath+'assets/gradeAssets/sg14.1.3/grid7.png');
		this.load.image('SG14_1_3emptygrid7', basePath+'assets/gradeAssets/sg14.1.3/emptygrid7.png');
		this.load.image('SG14_1_3redtri', basePath+'assets/gradeAssets/sg14.1.3/redtri.png');
		this.load.image('SG14_1_3yellowtri', basePath+'assets/gradeAssets/sg14.1.3/yellowtri.png');
		this.load.image('SG14_1_3lbsquare', basePath+'assets/gradeAssets/sg14.1.3/lbsquare.png');
		this.load.image('SG14_1_3bsquare', basePath+'assets/gradeAssets/sg14.1.3/bsquare.png');
		this.load.image('SG14_1_3grid8', basePath+'assets/gradeAssets/sg14.1.3/grid8.png');
		this.load.image('SG14_1_3emptygrid8', basePath+'assets/gradeAssets/sg14.1.3/emptygrid8.png');
		this.load.image('SG14_1_3rightgreen', basePath+'assets/gradeAssets/sg14.1.3/rightgreen.png');
		this.load.image('SG14_1_3leftgreen', basePath+'assets/gradeAssets/sg14.1.3/leftgreen.png');
		this.load.image('SG14_1_3rightorange', basePath+'assets/gradeAssets/sg14.1.3/rightorange.png');
		this.load.image('SG14_1_3leftorange', basePath+'assets/gradeAssets/sg14.1.3/leftorange.png');
		this.load.image('SG14_1_3yellowhexa', basePath+'assets/gradeAssets/sg14.1.3/yellowhexa.png');
		this.load.image('SG14_1_3orangesquare', basePath+'assets/gradeAssets/sg14.1.3/orangesquare.png');
		this.load.image('SG14_1_3grid9', basePath+'assets/gradeAssets/sg14.1.3/grid9.png');
		this.load.image('SG14_1_3emptygrid9', basePath+'assets/gradeAssets/sg14.1.3/emptygrid9.png');
		this.load.image('SG14_1_3octagon', basePath+'assets/gradeAssets/sg14.1.3/octagon.png');
		this.load.image('SG14_1_3purplesquare', basePath+'assets/gradeAssets/sg14.1.3/purplesquare.png');
		this.load.image('SG14_1_3purplePenta', basePath+'assets/gradeAssets/sg14.1.3/purplePenta.png');
		this.load.image('SG14_1_3yellowPenta', basePath+'assets/gradeAssets/sg14.1.3/yellowPenta.png');

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
		this.state.start('sg14_1_3level1');
	},
};
