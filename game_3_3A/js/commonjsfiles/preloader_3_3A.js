Game.preloader_3_3A=function(game){
	this.preloadBar=null;
};

Game.preloader_3_3A.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (3.3A)
		this.load.image('Level33A_gameBg', basePath+'assets/gradeAssets/3.3A/gameAssets/gameBg.png');
		this.load.atlas('Level33A_Can', basePath+'assets/gradeAssets/3.3A/gameAssets/Can.png', basePath+'assets/gradeAssets/3.3A/Can.json');
		this.load.atlas('Level33A_Carrot', basePath+'assets/gradeAssets/3.3A/gameAssets/Carot.png', basePath+'assets/gradeAssets/3.3A/Carot.json');
		this.load.atlas('Level33A_Coin', basePath+'assets/gradeAssets/3.3A/gameAssets/Coin.png', basePath+'assets/gradeAssets/3.3A/Coin.json');
		this.load.atlas('Level33A_Ball', basePath+'assets/gradeAssets/3.3A/gameAssets/Ball.png', basePath+'assets/gradeAssets/3.3A/Ball.json');
		this.load.atlas('Level33A_Book', basePath+'assets/gradeAssets/3.3A/gameAssets/Book.png', basePath+'assets/gradeAssets/3.3A/Book.json');
		this.load.atlas('Level33A_Banana', basePath+'assets/gradeAssets/3.3A/gameAssets/Banana.png', basePath+'assets/gradeAssets/3.3A/Banana.json');
		this.load.atlas('Level33A_Comb', basePath+'assets/gradeAssets/3.3A/gameAssets/comb.png', basePath+'assets/gradeAssets/3.3A/comb.json');
		this.load.atlas('Level33A_Eraser', basePath+'assets/gradeAssets/3.3A/gameAssets/eraser.png', basePath+'assets/gradeAssets/3.3A/eraser.json');
		this.load.atlas('Level33A_Eraser2', basePath+'assets/gradeAssets/3.3A/gameAssets/eraser2.png', basePath+'assets/gradeAssets/3.3A/eraser2.json');
		this.load.atlas('Level33A_Glass', basePath+'assets/gradeAssets/3.3A/gameAssets/Glass.png', basePath+'assets/gradeAssets/3.3A/Glass.json');
		this.load.atlas('Level33A_Glass2', basePath+'assets/gradeAssets/3.3A/gameAssets/Glass2.png', basePath+'assets/gradeAssets/3.3A/Glass2.json');
		this.load.atlas('Level33A_Mug', basePath+'assets/gradeAssets/3.3A/gameAssets/Mug.png', basePath+'assets/gradeAssets/3.3A/Mug.json');
		this.load.atlas('Level33A_muggg', basePath+'assets/gradeAssets/3.3A/gameAssets/muggg.png', basePath+'assets/gradeAssets/3.3A/muggg.json');
		this.load.atlas('Level33A_Key', basePath+'assets/gradeAssets/3.3A/gameAssets/Key.png', basePath+'assets/gradeAssets/3.3A/Key.json');
		this.load.atlas('Level33A_Pappaya', basePath+'assets/gradeAssets/3.3A/gameAssets/Pappaya.png', basePath+'assets/gradeAssets/3.3A/Pappaya.json');
		this.load.atlas('Level33A_pappaya1', basePath+'assets/gradeAssets/3.3A/gameAssets/pappaya1.png', basePath+'assets/gradeAssets/3.3A/pappaya1.json');
		this.load.atlas('Level33A_Pencil', basePath+'assets/gradeAssets/3.3A/gameAssets/Pencil.png', basePath+'assets/gradeAssets/3.3A/Pencil.json');
		this.load.atlas('Level33A_ScrewDriver', basePath+'assets/gradeAssets/3.3A/gameAssets/ScrewDriver.png', basePath+'assets/gradeAssets/3.3A/ScrewDriver.json');
		this.load.atlas('Level33A_Shoe', basePath+'assets/gradeAssets/3.3A/gameAssets/Shoe.png', basePath+'assets/gradeAssets/3.3A/Shoe.json');
		this.load.atlas('Level33A_bottle32', basePath+'assets/gradeAssets/3.3A/gameAssets/bottle32.png', basePath+'assets/gradeAssets/3.3A/bottle32.json');
		this.load.atlas('Level33A_tomato32', basePath+'assets/gradeAssets/3.3A/gameAssets/tomato32.png', basePath+'assets/gradeAssets/3.3A/tomato32.json');
		this.load.atlas('Level33A_carrot32', basePath+'assets/gradeAssets/3.3A/gameAssets/carrot32.png', basePath+'assets/gradeAssets/3.3A/carrot32.json');
		this.load.atlas('Level33A_banana32', basePath+'assets/gradeAssets/3.3A/gameAssets/banana32.png', basePath+'assets/gradeAssets/3.3A/banana32.json');
		this.load.atlas('Level33A_bread', basePath+'assets/gradeAssets/3.3A/gameAssets/bread.png', basePath+'assets/gradeAssets/3.3A/bread.json');
		this.load.atlas('Level33A_ball32', basePath+'assets/gradeAssets/3.3A/gameAssets/ball32.png', basePath+'assets/gradeAssets/3.3A/ball32.json');
		this.load.atlas('Level33A_banana322', basePath+'assets/gradeAssets/3.3A/gameAssets/banana322.png', basePath+'assets/gradeAssets/3.3A/banana322.json');
		this.load.atlas('Level33A_block50', basePath+'assets/gradeAssets/3.3A/gameAssets/block50.png', basePath+'assets/gradeAssets/3.3A/block50.json');
		this.load.atlas('Level33A_bottle322', basePath+'assets/gradeAssets/3.3A/gameAssets/bottle322.png', basePath+'assets/gradeAssets/3.3A/bottle322.json');
		this.load.atlas('Level33A_redbook', basePath+'assets/gradeAssets/3.3A/gameAssets/redbook.png', basePath+'assets/gradeAssets/3.3A/redbook.json');
		this.load.image('Level33A_level2weight1', basePath+'assets/gradeAssets/3.3A/gameAssets/level2/level2weight1.png');
		this.load.image('Level33A_level2weight2', basePath+'assets/gradeAssets/3.3A/gameAssets/level2/level2weight2.png');
		this.load.image('Level33A_level2Bg', basePath+'assets/gradeAssets/3.3A/gameAssets/level2/level2Bg.png');
		this.load.image('Level33A_txtbox', basePath+'assets/gradeAssets/3.3A/gameAssets/level2/box.png');
		this.load.atlas('Level33A_numbg', basePath+'assets/gradeAssets/3.3A/gameAssets/level2/numbg.png', basePath+'assets/gradeAssets/3.3A/numbg.json');
		this.load.atlas('Level33A_rightBtn', basePath+'assets/gradeAssets/3.3A/gameAssets/level2/rightBtn.png', basePath+'assets/gradeAssets/3.3A/rightBtn.json');
		this.load.atlas('Level33A_wrongBtn', basePath+'assets/gradeAssets/3.3A/gameAssets/level2/wrongBtn.png', basePath+'assets/gradeAssets/3.3A/wrongBtn.json');
		this.load.atlas('Level33A_Eraser2Anim', basePath+'assets/gradeAssets/3.3A/gameAssets/eraser2Anim.png', basePath+'assets/gradeAssets/3.3A/eraser2Anim.json');
		this.load.atlas('Level33A_BananaAnim', basePath+'assets/gradeAssets/3.3A/gameAssets/BananaAnim.png', basePath+'assets/gradeAssets/3.3A/BananaAnim.json');
		this.load.atlas('Level33A_CarrotAnim', basePath+'assets/gradeAssets/3.3A/gameAssets/CarrotAnim.png', basePath+'assets/gradeAssets/3.3A/CarrotAnim.json');
		this.load.atlas('Level33A_CoinAnim', basePath+'assets/gradeAssets/3.3A/gameAssets/CoinAnim.png', basePath+'assets/gradeAssets/3.3A/CoinAnim.json');
		this.load.atlas('Level33A_Glass2Anim', basePath+'assets/gradeAssets/3.3A/gameAssets/GlassAnim.png', basePath+'assets/gradeAssets/3.3A/GlassAnim.json');
		this.load.atlas('Level33A_level2weight3', basePath+'assets/gradeAssets/3.3A/gameAssets/level2/L2.png', basePath+'assets/gradeAssets/3.3A/L2.json');
		this.load.atlas('Level33A_level2weight4', basePath+'assets/gradeAssets/3.3A/gameAssets/level2/R2.png', basePath+'assets/gradeAssets/3.3A/R2.json');
		this.load.image('Level33A_bg1', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/bg1.png');
		this.load.image('Level33A_level2weight32', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/level2weight32.png');
		this.load.image('Level33A_level2weight42', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/level2weight42.png');
		this.load.atlas('Level33A_50g', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/50g.png', basePath+'assets/gradeAssets/3.3A/50g.json');
		this.load.atlas('Level33A_100g', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/100g.png', basePath+'assets/gradeAssets/3.3A/100g.json');
		this.load.atlas('Level33A_200g', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/200g.png', basePath+'assets/gradeAssets/3.3A/200g.json');
		this.load.atlas('Level33A_500g', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/500g.png', basePath+'assets/gradeAssets/3.3A/500g.json');
		this.load.atlas('Level33A_50gAnim', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/50gAnim.png', basePath+'assets/gradeAssets/3.3A/50gAnim.json');
		this.load.atlas('Level33A_100gAnim', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/100gAnim.png', basePath+'assets/gradeAssets/3.3A/100gAnim.json');
		this.load.atlas('Level33A_200gAnim', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/200gAnim.png', basePath+'assets/gradeAssets/3.3A/200gAnim.json');
		this.load.atlas('Level33A_500gAnim', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/500gAnim.png', basePath+'assets/gradeAssets/3.3A/500gAnim.json');
		this.load.atlas('Level33A_50gg', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/50gg.png', basePath+'assets/gradeAssets/3.3A/50gg.json');
		this.load.atlas('Level33A_100gg', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/100gg.png', basePath+'assets/gradeAssets/3.3A/100gg.json');
		this.load.atlas('Level33A_200gg', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/200gg.png', basePath+'assets/gradeAssets/3.3A/200gg.json');
		this.load.atlas('Level33A_500gg', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/500gg.png', basePath+'assets/gradeAssets/3.3A/500gg.json');
		this.load.atlas('Level33A_w1AnimGlow', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/w1AnimGlow.png', basePath+'assets/gradeAssets/3.3A/w1AnimGlow.json');
		this.load.atlas('Level33A_targetAnim', basePath+'assets/gradeAssets/3.3A/gameAssets/level33a/targetAnim.png', basePath+'assets/gradeAssets/3.3A/targetAnim.json');
		this.load.atlas('Level33A_bottle2', basePath+'assets/gradeAssets/3.3A/gameAssets/level3/bottle2.png', basePath+'assets/gradeAssets/3.3A/bottle2.json');
		this.load.atlas('Level33A_bottle', basePath+'assets/gradeAssets/3.3A/gameAssets/level3/bottle.png', basePath+'assets/gradeAssets/3.3A/bottle.json');

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
		this.state.start('grade3_3Alevel1');
	},
};
