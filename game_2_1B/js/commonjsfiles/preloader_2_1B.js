Game.preloader_2_1B=function(game){
	this.preloadBar=null;
};

Game.preloader_2_1B.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (2.1B)
		this.load.image('Level21B_bg1', basePath+'assets/gradeAssets/2.1B/bg1.png');
		this.load.image('Level21B_bg3', basePath+'assets/gradeAssets/2.1B/bg3.png');
		this.load.image('Level21B_sh', basePath+'assets/gradeAssets/2.1B/sh.png');
		this.load.image('Level21B_sh1', basePath+'assets/gradeAssets/2.1B/level2/sh1.png');
		this.load.image('Level21B_cloud21', basePath+'assets/gradeAssets/2.1B/level2/cloud21.png');
		this.load.image('Level21B_cloud22', basePath+'assets/gradeAssets/2.1B/level2/cloud22.png');
		this.load.image('Level21B_cloud23', basePath+'assets/gradeAssets/2.1B/level2/cloud23.png');
		this.load.image('Level21B_cloud24', basePath+'assets/gradeAssets/2.1B/level2/cloud24.png');
		this.load.image('Level21B_cloud25', basePath+'assets/gradeAssets/2.1B/level2/cloud25.png');
		this.load.image('Level21B_cloud26', basePath+'assets/gradeAssets/2.1B/level2/cloud26.png');
		this.load.image('Level21B_cloud27', basePath+'assets/gradeAssets/2.1B/level2/cloud27.png');
		this.load.image('Level21B_cloud28', basePath+'assets/gradeAssets/2.1B/level2/cloud28.png');
		this.load.image('Level21B_cloud29', basePath+'assets/gradeAssets/2.1B/level2/cloud29.png');
		this.load.image('Level21B_cloud2', basePath+'assets/gradeAssets/2.1B/c2.png');
		this.load.atlas('Level21B_building1', basePath+'assets/gradeAssets/2.1B/level2/building1.png', basePath+'assets/gradeAssets/2.1B/building1.json');
		this.load.atlas('Level21B_building2', basePath+'assets/gradeAssets/2.1B/level2/building2.png', basePath+'assets/gradeAssets/2.1B/building2.json');
		this.load.atlas('Level21B_ladder1', basePath+'assets/gradeAssets/2.1B/level2/ladder1.png', basePath+'assets/gradeAssets/2.1B/ladder1.json');
		this.load.atlas('Level21B_ladder2', basePath+'assets/gradeAssets/2.1B/level2/ladder2.png', basePath+'assets/gradeAssets/2.1B/ladder2.json');
		this.load.atlas('Level21B_giraffe21', basePath+'assets/gradeAssets/2.1B/level2/giraffe21.png', basePath+'assets/gradeAssets/2.1B/giraffe21.json');
		this.load.atlas('Level21B_cat21', basePath+'assets/gradeAssets/2.1B/level2/cat21.png', basePath+'assets/gradeAssets/2.1B/cat21.json');
		this.load.atlas('Level21B_bottle21', basePath+'assets/gradeAssets/2.1B/level2/bottle21.png', basePath+'assets/gradeAssets/2.1B/bottle21.json');
		this.load.atlas('Level21B_bottle22', basePath+'assets/gradeAssets/2.1B/level2/bottle22.png', basePath+'assets/gradeAssets/2.1B/bottle22.json');
		this.load.atlas('Level21B_gate21', basePath+'assets/gradeAssets/2.1B/level2/gate21.png', basePath+'assets/gradeAssets/2.1B/gate21.json');
		this.load.atlas('Level21B_gate22', basePath+'assets/gradeAssets/2.1B/level2/gate22.png', basePath+'assets/gradeAssets/2.1B/gate22.json');
		this.load.atlas('Level21B_road1', basePath+'assets/gradeAssets/2.1B/level2/road1.png', basePath+'assets/gradeAssets/2.1B/road1.json');
		this.load.atlas('Level21B_road2', basePath+'assets/gradeAssets/2.1B/level2/road2.png', basePath+'assets/gradeAssets/2.1B/road2.json');
		this.load.image('Level21B_tree21', basePath+'assets/gradeAssets/2.1B/level2/tree21.png');
		this.load.atlas('Level21B_chair21', basePath+'assets/gradeAssets/2.1B/level2/chair21.png', basePath+'assets/gradeAssets/2.1B/chair21.json');
		this.load.atlas('Level21B_chair22', basePath+'assets/gradeAssets/2.1B/level2/chair22.png', basePath+'assets/gradeAssets/2.1B/chair22.json');
		this.load.atlas('Level21B_river21', basePath+'assets/gradeAssets/2.1B/level2/river21.png', basePath+'assets/gradeAssets/2.1B/river21.json');
		this.load.atlas('Level21B_river22', basePath+'assets/gradeAssets/2.1B/level2/river22.png', basePath+'assets/gradeAssets/2.1B/river22.json');
		this.load.image('Level21B_tree22', basePath+'assets/gradeAssets/2.1B/level2/tree22.png');
		this.load.atlas('Level21B_dog21', basePath+'assets/gradeAssets/2.1B/level2/dog21.png', basePath+'assets/gradeAssets/2.1B/dog21.json');
		this.load.atlas('Level21B_cat22', basePath+'assets/gradeAssets/2.1B/level2/cat22.png', basePath+'assets/gradeAssets/2.1B/cat22.json');
		this.load.atlas('Level21B_shirt21', basePath+'assets/gradeAssets/2.1B/level2/shirt21.png', basePath+'assets/gradeAssets/2.1B/shirt21.json');
		this.load.atlas('Level21B_shirt22', basePath+'assets/gradeAssets/2.1B/level2/shirt22.png', basePath+'assets/gradeAssets/2.1B/shirt22.json');
		this.load.atlas('Level21B_snake21', basePath+'assets/gradeAssets/2.1B/level2/snake21.png', basePath+'assets/gradeAssets/2.1B/snake21.json');
		this.load.atlas('Level21B_snake22', basePath+'assets/gradeAssets/2.1B/level2/snake22.png', basePath+'assets/gradeAssets/2.1B/snake22.json');
		this.load.atlas('Level21B_bird21', basePath+'assets/gradeAssets/2.1B/level2/bird21.png', basePath+'assets/gradeAssets/2.1B/bird21.json');
		this.load.atlas('Level21B_bird22', basePath+'assets/gradeAssets/2.1B/level2/bird22.png', basePath+'assets/gradeAssets/2.1B/bird22.json');
		this.load.atlas('Level21B_fish21', basePath+'assets/gradeAssets/2.1B/level2/fish21.png', basePath+'assets/gradeAssets/2.1B/fish21.json');
		this.load.atlas('Level21B_fish22', basePath+'assets/gradeAssets/2.1B/level2/fish22.png', basePath+'assets/gradeAssets/2.1B/fish22.json');
		this.load.atlas('Level21B_snake23', basePath+'assets/gradeAssets/2.1B/level2/snake23.png', basePath+'assets/gradeAssets/2.1B/snake23.json');
		this.load.atlas('Level21B_snake24', basePath+'assets/gradeAssets/2.1B/level2/snake24.png', basePath+'assets/gradeAssets/2.1B/snake24.json');
		this.load.atlas('Level21B_book21', basePath+'assets/gradeAssets/2.1B/level2/book21.png', basePath+'assets/gradeAssets/2.1B/book21.json');
		this.load.atlas('Level21B_book22', basePath+'assets/gradeAssets/2.1B/level2/book22.png', basePath+'assets/gradeAssets/2.1B/book22.json');
		this.load.atlas('Level21B_tyre21', basePath+'assets/gradeAssets/2.1B/level2/tyre21.png', basePath+'assets/gradeAssets/2.1B/tyre21.json');
		this.load.atlas('Level21B_tyre22', basePath+'assets/gradeAssets/2.1B/level2/tyre22.png', basePath+'assets/gradeAssets/2.1B/tyre22.json');
		this.load.image('Level21B_scooter21', basePath+'assets/gradeAssets/2.1B/level2/scooter21.png');
		this.load.atlas('Level21B_bread21', basePath+'assets/gradeAssets/2.1B/level2/bread21.png', basePath+'assets/gradeAssets/2.1B/bread21.json');
		this.load.atlas('Level21B_bread22', basePath+'assets/gradeAssets/2.1B/level2/bread22.png', basePath+'assets/gradeAssets/2.1B/bread22.json');
		this.load.atlas('Level21B_rope21', basePath+'assets/gradeAssets/2.1B/level2/rope21.png', basePath+'assets/gradeAssets/2.1B/rope21.json');
		this.load.atlas('Level21B_rope22', basePath+'assets/gradeAssets/2.1B/level2/rope22.png', basePath+'assets/gradeAssets/2.1B/rope22.json');
		this.load.atlas('Level21B_tree23', basePath+'assets/gradeAssets/2.1B/level2/tree23.png', basePath+'assets/gradeAssets/2.1B/tree23.json');
		this.load.atlas('Level21B_tree24', basePath+'assets/gradeAssets/2.1B/level2/tree24.png', basePath+'assets/gradeAssets/2.1B/tree24.json');

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
		this.state.start('grade2_1Blevel1');
	},
};
