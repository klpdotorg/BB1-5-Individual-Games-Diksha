Game.preloader_2_2=function(game){
	this.preloadBar=null;
};

Game.preloader_2_2.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (2.2)
		this.load.image('Level22_bg', basePath+'assets/gradeAssets/2.2/commomAssets/bg.png');
		this.load.image('Level22_gamebg', basePath+'assets/gradeAssets/2.2/gameAssets/gamebg.png');
		this.load.atlas('Level22_gameBox', basePath+'assets/gradeAssets/2.2/gameAssets/gameBox.png', basePath+'assets/gradeAssets/2.2/gameBox.json');
		this.load.atlas('Level22_allimg', basePath+'assets/gradeAssets/2.2/gameAssets/allimg2.png', basePath+'assets/gradeAssets/2.2/allimg2.json');
		this.load.atlas('Level22_tickMark', basePath+'assets/gradeAssets/2.2/gameAssets/tickMark.png', basePath+'assets/gradeAssets/2.2/tickMark.json');
		this.load.image('Level22_croc', basePath+'assets/gradeAssets/2.2/gameAssets/croc.png');
		this.load.image('Level22_glow', basePath+'assets/gradeAssets/2.2/gameAssets/glow.png');
		this.load.image('Level22_Building', basePath+'assets/gradeAssets/2.2/gameAssets/1.png');
		this.load.image('Level22_OrangeHouse', basePath+'assets/gradeAssets/2.2/gameAssets/2.png');
		this.load.image('Level22_PurpleHouse', basePath+'assets/gradeAssets/2.2/gameAssets/3.png');
		this.load.image('Level22_BlueHouse', basePath+'assets/gradeAssets/2.2/gameAssets/4.png');
		this.load.image('Level22_LongStairs', basePath+'assets/gradeAssets/2.2/gameAssets/5.png');
		this.load.image('Level22_SecondLongestStairs', basePath+'assets/gradeAssets/2.2/gameAssets/6.png');
		this.load.image('Level22_MediumStairs', basePath+'assets/gradeAssets/2.2/gameAssets/7.png');
		this.load.image('Level22_ShortestStairs', basePath+'assets/gradeAssets/2.2/gameAssets/8.png');
		this.load.image('Level22_GreyDog', basePath+'assets/gradeAssets/2.2/gameAssets/9.png');
		this.load.image('Level22_WhiteDog', basePath+'assets/gradeAssets/2.2/gameAssets/10.png');
		this.load.image('Level22_BlackDog', basePath+'assets/gradeAssets/2.2/gameAssets/11.png');
		this.load.image('Level22_BrownDog', basePath+'assets/gradeAssets/2.2/gameAssets/12.png');
		this.load.image('Level22_OrangeSnake', basePath+'assets/gradeAssets/2.2/gameAssets/13.png');
		this.load.image('Level22_GreenDottedSnake', basePath+'assets/gradeAssets/2.2/gameAssets/14.png');
		this.load.image('Level22_RedSnake', basePath+'assets/gradeAssets/2.2/gameAssets/15.png');
		this.load.image('Level22_GreenSnake', basePath+'assets/gradeAssets/2.2/gameAssets/16.png');
		this.load.image('Level22_BrownBottle', basePath+'assets/gradeAssets/2.2/gameAssets/17.png');
		this.load.image('Level22_OrangeBottle', basePath+'assets/gradeAssets/2.2/gameAssets/18.png');
		this.load.image('Level22_BlackBottle', basePath+'assets/gradeAssets/2.2/gameAssets/19.png');
		this.load.image('Level22_BlueBottle', basePath+'assets/gradeAssets/2.2/gameAssets/20.png');
		this.load.image('Level22_LargeBox', basePath+'assets/gradeAssets/2.2/gameAssets/21.png');
		this.load.image('Level22_SecondLargestBox', basePath+'assets/gradeAssets/2.2/gameAssets/22.png');
		this.load.image('Level22_MediumBox', basePath+'assets/gradeAssets/2.2/gameAssets/23.png');
		this.load.image('Level22_SmallBox', basePath+'assets/gradeAssets/2.2/gameAssets/24.png');
		this.load.image('Level22_Giraffe', basePath+'assets/gradeAssets/2.2/gameAssets/25.png');
		this.load.image('Level22_Elephant', basePath+'assets/gradeAssets/2.2/gameAssets/26.png');
		this.load.image('Level22_Dog', basePath+'assets/gradeAssets/2.2/gameAssets/27.png');
		this.load.image('Level22_Cat', basePath+'assets/gradeAssets/2.2/gameAssets/28.png');
		this.load.image('Level22_Crane', basePath+'assets/gradeAssets/2.2/gameAssets/29.png');
		this.load.image('Level22_Crow', basePath+'assets/gradeAssets/2.2/gameAssets/30.png');
		this.load.image('Level22_Pigeon', basePath+'assets/gradeAssets/2.2/gameAssets/31.png');
		this.load.image('Level22_Sparrow', basePath+'assets/gradeAssets/2.2/gameAssets/32.png');

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
		this.load.image('box', basePath+'assets/gradeAssets/unity/commonAssets/box.png');
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
		this.state.start('grade2_2level1');
	},
};
