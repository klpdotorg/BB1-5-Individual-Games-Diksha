Game.preloader_1_4=function(game){
	this.preloadBar=null;
};

Game.preloader_1_4.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (1.4)
		this.load.image('Level12A_background', basePath+'assets/gradeAssets/1.4/firstSceneBg.png');
		this.load.image('Level12A_stick', basePath+'assets/gradeAssets/1.4/stick.png');
		this.load.atlas('Level12A_scene1wind1', basePath+'assets/gradeAssets/1.4/reduced/scene1wind1.png', basePath+'assets/gradeAssets/1.4/scene1wind1.json');
		this.load.atlas('Level12A_scene1wind2', basePath+'assets/gradeAssets/1.4/reduced/scene1wind2.png', basePath+'assets/gradeAssets/1.4/scene1wind2.json');
		this.load.atlas('Level12A_scene1wind3', basePath+'assets/gradeAssets/1.4/reduced/scene1wind3.png', basePath+'assets/gradeAssets/1.4/scene1wind3.json');
		this.load.atlas('Level12A_scene1wind33', basePath+'assets/gradeAssets/1.4/reduced/scene1wind33.png', basePath+'assets/gradeAssets/1.4/scene1wind33.json');
		this.load.atlas('Level12A_scene2wind1', basePath+'assets/gradeAssets/1.4/reduced/scene2wind1.png', basePath+'assets/gradeAssets/1.4/scene2wind1.json');
		this.load.atlas('Level12A_scene2wind2', basePath+'assets/gradeAssets/1.4/reduced/scene2wind2.png', basePath+'assets/gradeAssets/1.4/scene2wind2.json');
		this.load.atlas('Level12A_scene2wind3', basePath+'assets/gradeAssets/1.4/reduced/scene2wind3.png', basePath+'assets/gradeAssets/1.4/scene2wind3.json');
		this.load.atlas('Level12A_scene3wind1', basePath+'assets/gradeAssets/1.4/reduced/scene3wind1.png', basePath+'assets/gradeAssets/1.4/scene3wind1.json');
		this.load.atlas('Level12A_scene3wind2', basePath+'assets/gradeAssets/1.4/reduced/scene3wind2.png', basePath+'assets/gradeAssets/1.4/scene3wind2.json');
		this.load.atlas('Level12A_scene3wind3', basePath+'assets/gradeAssets/1.4/reduced/scene3wind3.png', basePath+'assets/gradeAssets/1.4/scene3wind3.json');
		this.load.atlas('Level12A_scene2Btn1', basePath+'assets/gradeAssets/1.4/scene2Btn1.png', basePath+'assets/gradeAssets/1.4/scene2Btn1.json');
		this.load.atlas('Level12A_scene2Btn2', basePath+'assets/gradeAssets/1.4/scene2Btn2.png', basePath+'assets/gradeAssets/1.4/scene2Btn2.json');
		this.load.atlas('Level12A_scene2Btn3', basePath+'assets/gradeAssets/1.4/scene2Btn3.png', basePath+'assets/gradeAssets/1.4/scene2Btn3.json');
		this.load.atlas('Level12A_pencil', basePath+'assets/gradeAssets/1.4/levelLastScene/pencil.png', basePath+'assets/gradeAssets/1.4/pencil.json');
		this.load.image('Level12A_centerCircle', basePath+'assets/gradeAssets/1.4/centerCircle.png');
		this.load.image('Level12A_wind2Center', basePath+'assets/gradeAssets/1.4/levelLastScene/wind2Center.png');
		this.load.atlas('Level12A_replay', basePath+'assets/gradeAssets/1.4/reply.png', basePath+'assets/gradeAssets/1.4/reply.json');
		this.load.image('Level12A_eraser', basePath+'assets/gradeAssets/1.4/levelLastScene/eraser.png');
		this.load.atlas('Level12A_checkbtn', basePath+'assets/gradeAssets/1.4/levelLastScene/checkbtn.png', basePath+'assets/gradeAssets/1.4/checkbtn.json');
		this.load.atlas('Level12A_wind1', basePath+'assets/gradeAssets/1.4/levelLastScene/w1.png', basePath+'assets/gradeAssets/1.4/w1.json');
		this.load.atlas('Level12A_wind2', basePath+'assets/gradeAssets/1.4/levelLastScene/w2.png', basePath+'assets/gradeAssets/1.4/w2.json');
		this.load.atlas('Level12A_wind3', basePath+'assets/gradeAssets/1.4/levelLastScene/w3.png', basePath+'assets/gradeAssets/1.4/w3.json');
		this.load.image('commonBg1', basePath+'assets/commonAssets/commonBg1.png');
		this.load.image('commonBg2', basePath+'assets/commonAssets/commonBg2.png');
		this.load.image('bottomBar', basePath+'assets/commonAssets/bottomBar.png');

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
		this.load.image('bottomBar', basePath+'assets/commonAssets/bottomBar.png');
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
		this.state.start('grade1_4level1');
	},
};
