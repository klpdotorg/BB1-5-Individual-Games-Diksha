Game.preloader_sg2_1_1=function(game){
	this.preloadBar=null;
};

Game.preloader_sg2_1_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg2.1.1)
		this.load.atlas('sg2_1_1roll',basePath+'assets/gradeAssets/sg2.1.1/roll.png',basePath+'assets/gradeAssets/sg2.1.1/roll.json');
		this.load.atlas('sg2_1_1slide',basePath+'assets/gradeAssets/sg2.1.1/slide.png',basePath+'assets/gradeAssets/sg2.1.1/slide.json');
		this.load.atlas('sg2_1_1orange-anim',basePath+'assets/gradeAssets/sg2.1.1/orange-anim.png',basePath+'assets/gradeAssets/sg2.1.1/orange-anim.json');
		this.load.atlas('sg2_1_1redball-anim',basePath+'assets/gradeAssets/sg2.1.1/redball-anim.png',basePath+'assets/gradeAssets/sg2.1.1/redball-anim.json');
		this.load.atlas('sg2_1_1watermelon-anim',basePath+'assets/gradeAssets/sg2.1.1/watermelon-anim.png',basePath+'assets/gradeAssets/sg2.1.1/watermelon-anim.json');
		this.load.atlas('sg2_1_1egg-anim',basePath+'assets/gradeAssets/sg2.1.1/egg-anim.png',basePath+'assets/gradeAssets/sg2.1.1/egg-anim.json');
		this.load.atlas('sg2_1_1rollingpin-anim',basePath+'assets/gradeAssets/sg2.1.1/rollingpin-anim.png',basePath+'assets/gradeAssets/sg2.1.1/rollingpin-anim.json');
		this.load.atlas('sg2_1_1tire-anim',basePath+'assets/gradeAssets/sg2.1.1/tire-anim.png',basePath+'assets/gradeAssets/sg2.1.1/tire-anim.json');
		this.load.atlas('sg2_1_1breadglow',basePath+'assets/gradeAssets/sg2.1.1/bread-glow.png',basePath+'assets/gradeAssets/sg2.1.1/bread-glow.json');
		this.load.atlas('sg2_1_1eraserglow',basePath+'assets/gradeAssets/sg2.1.1/eraser-glow.png',basePath+'assets/gradeAssets/sg2.1.1/eraser-glow.json');
		this.load.atlas('sg2_1_1giftboxglow',basePath+'assets/gradeAssets/sg2.1.1/giftbox-glow.png',basePath+'assets/gradeAssets/sg2.1.1/giftbox-glow.json');
		this.load.atlas('sg2_1_1keyglow',basePath+'assets/gradeAssets/sg2.1.1/key-glow.png',basePath+'assets/gradeAssets/sg2.1.1/key-glow.json');
		this.load.atlas('sg2_1_1shoeglow',basePath+'assets/gradeAssets/sg2.1.1/shoe-glow.png',basePath+'assets/gradeAssets/sg2.1.1/shoe-glow.json');
		this.load.atlas('sg2_1_1spannerglow',basePath+'assets/gradeAssets/sg2.1.1/spanner-glow.png',basePath+'assets/gradeAssets/sg2.1.1/spanner-glow.json');
		this.load.atlas('sg2_1_1orangeanimglow',basePath+'assets/gradeAssets/sg2.1.1/orange-animglow.png',basePath+'assets/gradeAssets/sg2.1.1/orange-animglow.json');
		this.load.atlas('sg2_1_1redballanimglow',basePath+'assets/gradeAssets/sg2.1.1/redball-animglow.png',basePath+'assets/gradeAssets/sg2.1.1/redball-animglow.json');
		this.load.atlas('sg2_1_1watermelonanimglow',basePath+'assets/gradeAssets/sg2.1.1/watermelon-animglow.png',basePath+'assets/gradeAssets/sg2.1.1/watermelon-animglow.json');
		this.load.atlas('sg2_1_1egganimglow',basePath+'assets/gradeAssets/sg2.1.1/egg-animglow.png',basePath+'assets/gradeAssets/sg2.1.1/egg-animglow.json');
		this.load.atlas('sg2_1_1rollingpinanimglow',basePath+'assets/gradeAssets/sg2.1.1/rollingpin-animglow.png',basePath+'assets/gradeAssets/sg2.1.1/rollingpin-animglow.json');
		this.load.atlas('sg2_1_1tireanimglow',basePath+'assets/gradeAssets/sg2.1.1/tire-animglow.png',basePath+'assets/gradeAssets/sg2.1.1/tire-animglow.json');

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
		this.state.start('sg2_1_1level1');
	},
};
