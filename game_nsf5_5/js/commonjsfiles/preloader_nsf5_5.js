Game.preloader_nsf5_5=function(game){
	this.preloadBar=null;
};

Game.preloader_nsf5_5.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (nsf5.5)
		this.load.image('F2_5backg',basePath+'assets/gradeAssets/nsf2.5/backg.png');
		this.load.atlas("NSF5_5_TickMark",basePath+"assets/gradeAssets/nsf5.5/tick.png",basePath+"assets/gradeAssets/nsf5.5/tick.json");
		this.load.atlas("NSF5_5_Eraser",basePath+"assets/gradeAssets/nsf5.5/erase.png",basePath+"assets/gradeAssets/nsf5.5/erase.json");
		this.load.atlas('NSF5_5_numberpad',basePath+'assets/gradeAssets/nsf5.5/numberpad.png',basePath+'assets/gradeAssets/nsf5.5/numberpad.json');
		this.load.atlas("NSF5_5_AnsBox",basePath+"assets/gradeAssets/nsf5.5/AnsBox.png",basePath+"assets/gradeAssets/nsf5.5/AnsBox.json");
		this.load.image('NSF5_5_Bottombar',basePath+'assets/gradeAssets/nsf5.5/bottombar.png');
		this.load.image('NSF5_5_Line',basePath+'assets/gradeAssets/nsf5.5/line1.png');
		this.load.image('NSF5_5_BG',basePath+'assets/gradeAssets/nsf5.5/BackGround.png');
		this.load.image("NSF5_5_SmallPlate",basePath+"assets/gradeAssets/nsf5.5/smallplate.png");
		this.load.image("NSF5_5_BigPlate",basePath+"assets/gradeAssets/nsf5.5/bigplate.png");
		this.load.image("NSF5_5_RedPlate",basePath+"assets/gradeAssets/nsf5.5/RedPlate.png");
		this.load.image("NSF5_5_GreenPlate",basePath+"assets/gradeAssets/nsf5.5/GreenPlate.png");
		this.load.image("NSF5_5_BigCake1",basePath+"assets/gradeAssets/nsf5.5/A1.png");
		this.load.image("NSF5_5_BigCake2",basePath+"assets/gradeAssets/nsf5.5/A2.png");
		this.load.image("NSF5_5_BigCake3",basePath+"assets/gradeAssets/nsf5.5/A3.png");
		this.load.image("NSF5_5_BigCake4",basePath+"assets/gradeAssets/nsf5.5/A4.png");
		this.load.image("NSF5_5_BigCake5",basePath+"assets/gradeAssets/nsf5.5/A5.png");
		this.load.image("NSF5_5_BigCake6",basePath+"assets/gradeAssets/nsf5.5/A6.png");
		this.load.image("NSF5_5_BigCake7",basePath+"assets/gradeAssets/nsf5.5/A7.png");
		this.load.image("NSF5_5_BigCake8",basePath+"assets/gradeAssets/nsf5.5/A8.png");
		this.load.image("NSF5_5_BigCake9",basePath+"assets/gradeAssets/nsf5.5/A9.png");
		this.load.image("NSF5_5_BigCake10",basePath+"assets/gradeAssets/nsf5.5/A10.png");
		this.load.atlas("NSF5_5_4p_Cake1",basePath+"assets/gradeAssets/nsf5.5/4/1.png",basePath+"assets/gradeAssets/nsf5.5/4/1.json");
		this.load.atlas("NSF5_5_4p_Cake2",basePath+"assets/gradeAssets/nsf5.5/4/2.png",basePath+"assets/gradeAssets/nsf5.5/4/2.json");
		this.load.atlas("NSF5_5_4p_Cake3",basePath+"assets/gradeAssets/nsf5.5/4/3.png",basePath+"assets/gradeAssets/nsf5.5/4/3.json");
		this.load.atlas("NSF5_5_4p_Cake4",basePath+"assets/gradeAssets/nsf5.5/4/4.png",basePath+"assets/gradeAssets/nsf5.5/4/4.json");
		this.load.atlas("NSF5_5_16p_Cake1",basePath+"assets/gradeAssets/nsf5.5/16/1.png",basePath+"assets/gradeAssets/nsf5.5/16/1.json");
		this.load.atlas("NSF5_5_16p_Cake2",basePath+"assets/gradeAssets/nsf5.5/16/2.png",basePath+"assets/gradeAssets/nsf5.5/16/2.json");
		this.load.atlas("NSF5_5_16p_Cake3",basePath+"assets/gradeAssets/nsf5.5/16/3.png",basePath+"assets/gradeAssets/nsf5.5/16/3.json");
		this.load.atlas("NSF5_5_16p_Cake4",basePath+"assets/gradeAssets/nsf5.5/16/4.png",basePath+"assets/gradeAssets/nsf5.5/16/4.json");
		this.load.atlas("NSF5_5_16p_Cake5",basePath+"assets/gradeAssets/nsf5.5/16/5.png",basePath+"assets/gradeAssets/nsf5.5/16/5.json");
		this.load.atlas("NSF5_5_16p_Cake6",basePath+"assets/gradeAssets/nsf5.5/16/6.png",basePath+"assets/gradeAssets/nsf5.5/16/6.json");
		this.load.atlas("NSF5_5_16p_Cake7",basePath+"assets/gradeAssets/nsf5.5/16/7.png",basePath+"assets/gradeAssets/nsf5.5/16/7.json");
		this.load.atlas("NSF5_5_16p_Cake8",basePath+"assets/gradeAssets/nsf5.5/16/8.png",basePath+"assets/gradeAssets/nsf5.5/16/8.json");
		this.load.atlas("NSF5_5_16p_Cake9",basePath+"assets/gradeAssets/nsf5.5/16/9.png",basePath+"assets/gradeAssets/nsf5.5/16/9.json");
		this.load.atlas("NSF5_5_16p_Cake10",basePath+"assets/gradeAssets/nsf5.5/16/10.png",basePath+"assets/gradeAssets/nsf5.5/16/10.json");
		this.load.atlas("NSF5_5_16p_Cake11",basePath+"assets/gradeAssets/nsf5.5/16/11.png",basePath+"assets/gradeAssets/nsf5.5/16/11.json");
		this.load.atlas("NSF5_5_16p_Cake12",basePath+"assets/gradeAssets/nsf5.5/16/12.png",basePath+"assets/gradeAssets/nsf5.5/16/12.json");
		this.load.atlas("NSF5_5_16p_Cake13",basePath+"assets/gradeAssets/nsf5.5/16/13.png",basePath+"assets/gradeAssets/nsf5.5/16/13.json");
		this.load.atlas("NSF5_5_16p_Cake14",basePath+"assets/gradeAssets/nsf5.5/16/14.png",basePath+"assets/gradeAssets/nsf5.5/16/14.json");
		this.load.atlas("NSF5_5_16p_Cake15",basePath+"assets/gradeAssets/nsf5.5/16/15.png",basePath+"assets/gradeAssets/nsf5.5/16/15.json");
		this.load.atlas("NSF5_5_16p_Cake16",basePath+"assets/gradeAssets/nsf5.5/16/16.png",basePath+"assets/gradeAssets/nsf5.5/16/16.json");
		this.load.image("NSF5_5_Fraction-6/10",basePath+"assets/gradeAssets/nsf5.5/6-10.png");
		this.load.image("NSF5_5_Fraction-8/10",basePath+"assets/gradeAssets/nsf5.5/8-10.png");
		this.load.image("NSF5_5_Fraction-6/14",basePath+"assets/gradeAssets/nsf5.5/6-14.png");
		this.load.image("NSF5_5_Fraction-3/18",basePath+"assets/gradeAssets/nsf5.5/3-18.png");
		this.load.image("NSF5_5_Fraction-4/18",basePath+"assets/gradeAssets/nsf5.5/4-18.png");
		this.load.image("NSF5_5_Fraction-6/12",basePath+"assets/gradeAssets/nsf5.5/6-12.png");
		this.load.image("NSF5_5_Fraction-6/15",basePath+"assets/gradeAssets/nsf5.5/6-15.png");
		this.load.image("NSF5_5_Fraction-6/16",basePath+"assets/gradeAssets/nsf5.5/6-16.png");
		this.load.image("NSF5_5_Fraction-8/14",basePath+"assets/gradeAssets/nsf5.5/8-14.png");
		this.load.image("NSF5_5_Fraction-9/18",basePath+"assets/gradeAssets/nsf5.5/9-18.png");
		this.load.image("NSF5_5_Fraction-1",basePath+"assets/gradeAssets/nsf5.5/1.png");
		this.load.image("NSF5_5_Fraction-1/2",basePath+"assets/gradeAssets/nsf5.5/1-2.png");
		this.load.image("NSF5_5_Fraction-1/3",basePath+"assets/gradeAssets/nsf5.5/1-3.png");
		this.load.image("NSF5_5_Fraction-1/4",basePath+"assets/gradeAssets/nsf5.5/1-4.png");
		this.load.image("NSF5_5_Fraction-1/5",basePath+"assets/gradeAssets/nsf5.5/1-5.png");
		this.load.image("NSF5_5_Fraction-1/6",basePath+"assets/gradeAssets/nsf5.5/1-6.png");
		this.load.image("NSF5_5_Fraction-1/7",basePath+"assets/gradeAssets/nsf5.5/1-7.png");
		this.load.image("NSF5_5_Fraction-1/8",basePath+"assets/gradeAssets/nsf5.5/1-8.png");
		this.load.image("NSF5_5_Fraction-1/9",basePath+"assets/gradeAssets/nsf5.5/1-9.png");
		this.load.image("NSF5_5_Fraction-1/10",basePath+"assets/gradeAssets/nsf5.5/1-10.png");

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
		this.load.image('hand', basePath+'assets/commonAssets/hand.png');

		// Score screen buttons (local)
		this.load.image('CommonHomeBtn',   'assets/homeIconScore.png');
		this.load.image('CommonNextBtn',   'assets/nextIconScore.png');
		this.load.image('CommonReplayBtn', 'assets/replayIconScore.png');
		this.load.image('shareIconScore',  'assets/shareIconScore.png');


		// Shared images/atlases from BB preloader (keys this game references)
		this.load.atlas('CommonSpeakerBtn', basePath+'assets/commonAssets/speaker.png', basePath+'assets/commonAssets/speaker.json');


		// Assets required by commonNavBar (commonFiles.js)
		this.load.image('navBar',       basePath+'assets/commonAssets/Nv bar.png');
		this.load.image('backBtn',      basePath+'assets/landingScreen/backBtn.png');
		this.load.image('speakerBtn',   basePath+'assets/commonAssets/speakerBtn.png');
		this.load.image('timerBg',      basePath+'assets/commonAssets/timerBg.png');
		this.load.image('scoreBg',      basePath+'assets/commonAssets/scoreBg.png');
		this.load.atlas('hintIcon',     basePath+'assets/commonAssets/hint.png',          basePath+'assets/commonAssets/hint.json');
		this.load.image('hintwand',     basePath+'assets/commonAssets/hintwand.png');
		this.load.atlas('hint1',        basePath+'assets/commonAssets/1.png',             basePath+'assets/commonAssets/1.json');
		this.load.atlas('hint2',        basePath+'assets/commonAssets/2.png',             basePath+'assets/commonAssets/2.json');
		this.load.atlas('hint3',        basePath+'assets/commonAssets/3.png',             basePath+'assets/commonAssets/3.json');
		this.load.image('popupbg',      basePath+'assets/commonAssets/popupbg.png');
		this.load.image('popupbgEmpty', basePath+'assets/commonAssets/popupbg1.png');
		this.load.image('closebtn',     basePath+'assets/commonAssets/close.png');
		this.load.atlas('popuphint',    basePath+'assets/commonAssets/popuphint.png',     basePath+'assets/commonAssets/popuphint.json');
		this.load.atlas('deductBg',     basePath+'assets/commonAssets/minusBg.png',       basePath+'assets/commonAssets/minusBg.json');
		this.load.atlas('endscreendeductBg', basePath+'assets/commonAssets/whiteminusBg.png', basePath+'assets/commonAssets/whiteminusBg.json');
		this.load.atlas('hintscreennew', basePath+'assets/commonAssets/hintscreen.png',   basePath+'assets/commonAssets/hintscreen.json');
		this.load.image('mcIconVolume',       basePath+'assets/commonAssets/volume.png');
		this.load.image('mcIconTime',         basePath+'assets/commonAssets/time.png');
		this.load.image('mcIconLength',       basePath+'assets/commonAssets/length.png');
		this.load.image('mcIconWeight',       basePath+'assets/commonAssets/weight.png');
		this.load.image('mcIconNumber',       basePath+'assets/commonAssets/number.png');
		this.load.image('mcIconSequence',     basePath+'assets/commonAssets/sequence.png');
		this.load.image('mcIconComparison',   basePath+'assets/commonAssets/comparison.png');
		this.load.image('mcIconFraction',     basePath+'assets/commonAssets/fraction.png');
		this.load.image('mcIconPlacevalue',   basePath+'assets/commonAssets/placevalue.png');
		this.load.image('mcIconAddition',     basePath+'assets/commonAssets/addition.png');
		this.load.image('mcIconSubtraction',  basePath+'assets/commonAssets/subtraction.png');
		this.load.image('mcIconDivision',     basePath+'assets/commonAssets/division.png');
		this.load.image('mcIconMultiplication', basePath+'assets/commonAssets/multiplication.png');

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
		this.state.start('nsf5_5level1');
	},
};
