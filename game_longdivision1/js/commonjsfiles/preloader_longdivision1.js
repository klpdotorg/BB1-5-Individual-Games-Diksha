Game.preloader_longdivision1=function(game){
	this.preloadBar=null;
};

Game.preloader_longdivision1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (longdivision1)
		this.load.atlas('NOLDGbackbtn',basePath+'assets/NOLD/commonAssets/backbtn.png' ,basePath+'json/NOLDG1_4_5/backbtn.json');
		this.load.atlas('NOLDGCommonSpeakerBtn',basePath+'assets/NOLD/commonAssets/speaker.png' ,basePath+'json/NOLDG1_4_5/speaker.json');
		this.load.atlas('NOLDGstarAnim',basePath+'assets/NOLD/commonAssets/starAnim.png',basePath+'json/NOLDG1_4_5/starAnim.json');
		this.load.atlas('NOLDGreplay',basePath+'assets/NOLD/commonAssets/reply.png' ,basePath+'json/NOLDG1_4_5/reply.json');
		this.load.atlas('NOLDGbtn',basePath+'assets/NOLD/commonAssets/btn.png',basePath+'json/NOLDG1_4_5/btn.json');
		this.load.atlas('NOLDGnumpadNum',basePath+'assets/NOLD/commonAssets/numpadNum.png',basePath+'json/NOLDG1_4_5/numpadNum.json');
		this.load.atlas('NOLDGrightmark',basePath+'assets/NOLD/commonAssets/rightmark.png',basePath+'json/NOLDG1_4_5/rightmark.json');
		this.load.atlas('NOLDGerase',basePath+'assets/NOLD/commonAssets/erase.png',basePath+'json/NOLDG1_4_5/erase.json');
		this.load.image('NOLDGnumbg',basePath+'assets/NOLD/commonAssets/numbg.png');
		this.load.image('NOLDhand',basePath+'assets/NOLD/commonAssets/hand.png');
		this.load.image('NOLDGNOLDGsg7_1_2background1',basePath+'assets/NOLD/commonAssets/bg1.png');
		this.load.image('NOLDGsg7_1_2tittleBar',basePath+'assets/NOLD/commonAssets/tittleBar.png');
		this.load.image('NOLDGsg7_1_2navBar',basePath+'assets/NOLD/commonAssets/navBar.png');
		this.load.image('NOLDGsg7_1_2timebg',basePath+'assets/NOLD/commonAssets/timebg.png');
		this.load.image('NOLDGskipDemoVideos',basePath+'assets/NOLD/commonAssets/skipArrow.png');
		this.load.image('NOLDGsg7_1_2background',basePath+'assets/NOLD/commonAssets/Bg.png');
		this.load.atlas('NOLDGsg7_1_2tick',basePath+'assets/NOLD/commonAssets/tickBtn.png',basePath+'json/NOLDG1_4_5/tickBtn.json');
		this.load.atlas('NOLDGblueCoin1to10',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/blueCoin1to10.png',basePath+'json/NOLDG1_4_5/blueCoin1to10.json');
		this.load.atlas('NOLDGblueCoinDrop',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/blueCoinDrop.png',basePath+'json/NOLDG1_4_5/blueCoinDrop.json');
		this.load.atlas('NOLDGnumbers',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/numbers.png',basePath+'json/NOLDG1_4_5/numbers.json');
		this.load.atlas('NOLDGyellowCoin1to10',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/yellowCoin1to10.png',basePath+'json/NOLDG1_4_5/yellowCoin1to10.json');
		this.load.atlas('NOLDGyellowCoin1to25',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/yellowCoin1to25.png',basePath+'json/NOLDG1_4_5/yellowCoin1to25.json');
		this.load.atlas('NOLDGyellowCoinDrop',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/yellowCoinDrop.png',basePath+'json/NOLDG1_4_5/yellowCoinDrop.json');
		this.load.atlas('numberBlue',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/numberBlue.png',basePath+'json/NOLDG1_4_5/numberBlue.json');
		this.load.atlas('NOLDGglowCoin',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/glowCoin.png',basePath+'json/NOLDG1_4_5/glowCoin.json');
		this.load.atlas('NOLDGwhiteTextBox',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/whiteTextBox.png',basePath+'json/NOLDG1_4_5/whiteTextBox.json');
		this.load.image('NOLDGboard',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/board.png');
		this.load.image('NOLDGangle',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/angle.png');
		this.load.image('NOLDGblueCoin',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/blueCoin.png');
		this.load.image('NOLDGdragObject',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/dragObject.png');
		this.load.image('NOLDGdragObject1',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/dragObject1.png');
		this.load.image('NOLDGdragObject2',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/dragObject2.png');
		this.load.image('NOLDGyellowCoin',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/yellowCoin.png');
		this.load.image('NOLDGunderLine',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/underLine.png');
		this.load.image('NOLDblueCoinCut',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/blueCoinCut.png');
		this.load.image('NOLDyellowCoinCut',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/yellowCoinCut.png');
		this.load.image('NOLDdownArrow',basePath+'assets/NOLD/gradeAssets/NOLDG1_4_5/downArrow.png');

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
		this.load.atlas('eraser', basePath+'assets/gradeAssets/4.3A/commonAssets/eraser.png', basePath+'assets/gradeAssets/4.3A/eraser.json');
		this.load.image('longdivision1', basePath+'assets/newGames/longdivision1.png');
		this.load.image('longdivision5', basePath+'assets/newGames/longdivision5.png');



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
		this.state.start('longdivision1');
	},
};
