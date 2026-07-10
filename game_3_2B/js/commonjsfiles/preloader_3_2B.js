Game.preloader_3_2B=function(game){
	this.preloadBar=null;
};

Game.preloader_3_2B.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (3.2B)
		this.load.image('Level32B_gameBg', basePath+'assets/gradeAssets/3.2B/gameAssets/gameBg.png');
		this.load.atlas('Level32B_Can', basePath+'assets/gradeAssets/3.2B/gameAssets/Can.png', basePath+'assets/gradeAssets/3.2B/Can.json');
		this.load.atlas('Level32B_Carrot', basePath+'assets/gradeAssets/3.2B/gameAssets/Carot.png', basePath+'assets/gradeAssets/3.2B/Carot.json');
		this.load.atlas('Level32B_Coin', basePath+'assets/gradeAssets/3.2B/gameAssets/Coin.png', basePath+'assets/gradeAssets/3.2B/Coin.json');
		this.load.atlas('Level32B_Ball', basePath+'assets/gradeAssets/3.2B/gameAssets/Ball.png', basePath+'assets/gradeAssets/3.2B/Ball.json');
		this.load.atlas('Level32B_Book', basePath+'assets/gradeAssets/3.2B/gameAssets/Book.png', basePath+'assets/gradeAssets/3.2B/Book.json');
		this.load.atlas('Level32B_Banana', basePath+'assets/gradeAssets/3.2B/gameAssets/Banana.png', basePath+'assets/gradeAssets/3.2B/Banana.json');
		this.load.atlas('Level32B_Comb', basePath+'assets/gradeAssets/3.2B/gameAssets/comb.png', basePath+'assets/gradeAssets/3.2B/comb.json');
		this.load.atlas('Level32B_Eraser', basePath+'assets/gradeAssets/3.2B/gameAssets/eraser.png', basePath+'assets/gradeAssets/3.2B/eraser.json');
		this.load.atlas('Level32B_Eraser2', basePath+'assets/gradeAssets/3.2B/gameAssets/eraser2.png', basePath+'assets/gradeAssets/3.2B/eraser2.json');
		this.load.atlas('Level32B_Glass', basePath+'assets/gradeAssets/3.2B/gameAssets/Glass.png', basePath+'assets/gradeAssets/3.2B/Glass.json');
		this.load.atlas('Level32B_Glass2', basePath+'assets/gradeAssets/3.2B/gameAssets/Glass2.png', basePath+'assets/gradeAssets/3.2B/Glass2.json');
		this.load.atlas('Level32B_Mug', basePath+'assets/gradeAssets/3.2B/gameAssets/Mug.png', basePath+'assets/gradeAssets/3.2B/Mug.json');
		this.load.atlas('Level32B_Key', basePath+'assets/gradeAssets/3.2B/gameAssets/Key.png', basePath+'assets/gradeAssets/3.2B/Key.json');
		this.load.atlas('Level32B_Pappaya', basePath+'assets/gradeAssets/3.2B/gameAssets/Pappaya.png', basePath+'assets/gradeAssets/3.2B/Pappaya.json');
		this.load.atlas('Level32B_Pencil', basePath+'assets/gradeAssets/3.2B/gameAssets/Pencil.png', basePath+'assets/gradeAssets/3.2B/Pencil.json');
		this.load.atlas('Level32B_ScrewDriver', basePath+'assets/gradeAssets/3.2B/gameAssets/ScrewDriver.png', basePath+'assets/gradeAssets/3.2B/ScrewDriver.json');
		this.load.atlas('Level32B_Shoe', basePath+'assets/gradeAssets/3.2B/gameAssets/Shoe.png', basePath+'assets/gradeAssets/3.2B/Shoe.json');
		this.load.image('Level32B_level2weight1', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight1.png');
		this.load.image('Level32B_level2weight2', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight2.png');
		this.load.image('Level32B_level2weight32', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight3.png');
		this.load.image('Level32B_level2weight42', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight4.png');
		this.load.image('Level32B_level2Bg', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/level2Bg.png');
		this.load.image('Level32B_txtbox', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/box.png');
		this.load.atlas('Level32B_numbg', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/numbg.png', basePath+'assets/gradeAssets/3.2B/numbg.json');
		this.load.atlas('Level32B_rightBtn', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/rightBtn.png', basePath+'assets/gradeAssets/3.2B/rightBtn.json');
		this.load.atlas('Level32B_wrongBtn', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/wrongBtn.png', basePath+'assets/gradeAssets/3.2B/wrongBtn.json');
		this.load.atlas('Level32B_Eraser2Anim', basePath+'assets/gradeAssets/3.2B/gameAssets/eraser2Anim.png', basePath+'assets/gradeAssets/3.2B/eraser2Anim.json');
		this.load.atlas('Level32B_BananaAnim', basePath+'assets/gradeAssets/3.2B/gameAssets/BananaAnim.png', basePath+'assets/gradeAssets/3.2B/BananaAnim.json');
		this.load.atlas('Level32B_CarrotAnim', basePath+'assets/gradeAssets/3.2B/gameAssets/CarrotAnim.png', basePath+'assets/gradeAssets/3.2B/CarrotAnim.json');
		this.load.atlas('Level32B_CoinAnim', basePath+'assets/gradeAssets/3.2B/gameAssets/CoinAnim.png', basePath+'assets/gradeAssets/3.2B/CoinAnim.json');
		this.load.atlas('Level32B_Glass2Anim', basePath+'assets/gradeAssets/3.2B/gameAssets/GlassAnim.png', basePath+'assets/gradeAssets/3.2B/GlassAnim.json');
		this.load.atlas('Level32B_level2weight3', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/L2.png', basePath+'assets/gradeAssets/3.2B/L2.json');
		this.load.atlas('Level32B_level2weight4', basePath+'assets/gradeAssets/3.2B/gameAssets/level2/R2.png', basePath+'assets/gradeAssets/3.2B/R2.json');

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
		this.load.image('Level24A_txtbox', basePath+'assets/gradeAssets/2.4A/commonAssets/box.png');
		this.load.image('bottomBar', basePath+'assets/commonAssets/bottomBar.png');
		this.load.atlas('Level43A_numbg', basePath+'assets/gradeAssets/4.3A/commonAssets/numbg.png', basePath+'assets/gradeAssets/4.3A/numbg.json');
		this.load.atlas('Level42A_CommonSpeakerBtn', basePath+'assets/gradeAssets/4.2A/commonAssets/speaker.png', basePath+'assets/gradeAssets/4.2A/speaker.json');
		this.load.atlas('tick', basePath+'assets/gradeAssets/4.3A/commonAssets/tick.png', basePath+'assets/gradeAssets/4.3A/tick.json');
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
		this.state.start('grade3_2Blevel1');
	},
};
