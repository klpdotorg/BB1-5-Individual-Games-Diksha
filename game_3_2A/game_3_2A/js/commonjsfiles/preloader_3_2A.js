Game.preloader_3_2A=function(game){
	this.preloadBar=null;
};

Game.preloader_3_2A.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (3.2A)
		this.load.image('Level32A_gameBg', basePath+'assets/gradeAssets/3.2A/gameAssets/gameBg.png');
		this.load.image('Level32A_weight1', basePath+'assets/gradeAssets/3.2A/gameAssets/weight1.png');
		this.load.image('Level32A_weight2', basePath+'assets/gradeAssets/3.2A/gameAssets/weight2.png');
		this.load.image('Level32A_weight3', basePath+'assets/gradeAssets/3.2A/gameAssets/weight3.png');
		this.load.atlas('Level32A_Can', basePath+'assets/gradeAssets/3.2A/gameAssets/Can.png', basePath+'assets/gradeAssets/3.2A/Can.json');
		this.load.atlas('Level32A_Carrot', basePath+'assets/gradeAssets/3.2A/gameAssets/Carot.png', basePath+'assets/gradeAssets/3.2A/Carot.json');
		this.load.atlas('Level32A_Coin', basePath+'assets/gradeAssets/3.2A/gameAssets/Coin.png', basePath+'assets/gradeAssets/3.2A/Coin.json');
		this.load.atlas('Level32A_Ball', basePath+'assets/gradeAssets/3.2A/gameAssets/Ball.png', basePath+'assets/gradeAssets/3.2A/Ball.json');
		this.load.atlas('Level32A_Book', basePath+'assets/gradeAssets/3.2A/gameAssets/Book.png', basePath+'assets/gradeAssets/3.2A/Book.json');
		this.load.atlas('Level32A_Banana', basePath+'assets/gradeAssets/3.2A/gameAssets/Banana.png', basePath+'assets/gradeAssets/3.2A/Banana.json');
		this.load.atlas('Level32A_Comb', basePath+'assets/gradeAssets/3.2A/gameAssets/comb.png', basePath+'assets/gradeAssets/3.2A/comb.json');
		this.load.atlas('Level32A_Eraser', basePath+'assets/gradeAssets/3.2A/gameAssets/eraser.png', basePath+'assets/gradeAssets/3.2A/eraser.json');
		this.load.atlas('Level32A_Eraser2', basePath+'assets/gradeAssets/3.2A/gameAssets/eraser2.png', basePath+'assets/gradeAssets/3.2A/eraser2.json');
		this.load.atlas('Level32A_Glass', basePath+'assets/gradeAssets/3.2A/gameAssets/Glass.png', basePath+'assets/gradeAssets/3.2A/Glass.json');
		this.load.atlas('Level32A_Glass2', basePath+'assets/gradeAssets/3.2A/gameAssets/Glass2.png', basePath+'assets/gradeAssets/3.2A/Glass2.json');
		this.load.atlas('Level32A_Mug', basePath+'assets/gradeAssets/3.2A/gameAssets/Mug.png', basePath+'assets/gradeAssets/3.2A/Mug.json');
		this.load.atlas('Level32A_Key', basePath+'assets/gradeAssets/3.2A/gameAssets/Key.png', basePath+'assets/gradeAssets/3.2A/Key.json');
		this.load.atlas('Level32A_Pappaya', basePath+'assets/gradeAssets/3.2A/gameAssets/Pappaya.png', basePath+'assets/gradeAssets/3.2A/Pappaya.json');
		this.load.atlas('Level32A_Pencil', basePath+'assets/gradeAssets/3.2A/gameAssets/Pencil.png', basePath+'assets/gradeAssets/3.2A/Pencil.json');
		this.load.atlas('Level32A_ScrewDriver', basePath+'assets/gradeAssets/3.2A/gameAssets/ScrewDriver.png', basePath+'assets/gradeAssets/3.2A/ScrewDriver.json');
		this.load.atlas('Level32A_Shoe', basePath+'assets/gradeAssets/3.2A/gameAssets/Shoe.png', basePath+'assets/gradeAssets/3.2A/Shoe.json');
		this.load.image('Level32A_level2Bg', basePath+'assets/gradeAssets/3.2A/gameAssets/level2/level2Bg.png');
		this.load.image('Level32A_txtbox', basePath+'assets/gradeAssets/3.2A/gameAssets/level2/box.png');
		this.load.atlas('Level32A_numbg', basePath+'assets/gradeAssets/3.2A/gameAssets/level2/numbg.png', basePath+'assets/gradeAssets/3.2A/numbg.json');
		this.load.atlas('Level32A_rightBtn', basePath+'assets/gradeAssets/3.2A/gameAssets/level2/rightBtn.png', basePath+'assets/gradeAssets/3.2A/rightBtn.json');
		this.load.atlas('Level32A_wrongBtn', basePath+'assets/gradeAssets/3.2A/gameAssets/level2/wrongBtn.png', basePath+'assets/gradeAssets/3.2A/wrongBtn.json');

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
		this.state.start('grade3_2Alevel1');
	},
};
