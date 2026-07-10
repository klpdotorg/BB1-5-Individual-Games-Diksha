Game.preloader_unity_5_1=function(game){
	this.preloadBar=null;
};

Game.preloader_unity_5_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (unity/5.1)
		this.load.image('grade51_background',basePath+'assets/gradeAssets/unity/5.1/bg.png');
		this.load.image('grade51_bg1',basePath+'assets/gradeAssets/unity/5.1/bg1.png');
		this.load.image('grade51_boxbg', basePath+'assets/gradeAssets/unity/5.1/Boxbg.png');
		this.load.image('grade51_timebg', basePath+'assets/gradeAssets/unity/5.1/timebg.png');
		this.load.image('grade51_WhiteBox', basePath+'assets/gradeAssets/unity/5.1/WhiteBox.png');
		this.load.image('grade51_TopBar', basePath+'assets/gradeAssets/unity/5.1/Topbar.png');
		this.load.image('grade51_dottedBox', basePath+'assets/gradeAssets/unity/5.1/dottedBox.png');
		this.load.image('grade51_plusSign', basePath+'assets/gradeAssets/unity/5.1/plusSign.png');
		this.load.image('grade51_equalSymbol', basePath+'assets/gradeAssets/unity/5.1/equalSymbol.png');
		this.load.atlas('grade51_carrotsAnim',basePath+'assets/gradeAssets/unity/5.1/carrotsAnim.png' ,basePath+'assets/gradeAssets/unity/5.1/carrotsAnim.json');
		this.load.atlas('grade51_RabitAnim',basePath+'assets/gradeAssets/unity/5.1/RabitAnim.png' ,basePath+'assets/gradeAssets/unity/5.1/RabitAnim.json');
		this.load.atlas('grade51_calNum',basePath+'assets/gradeAssets/unity/5.1/calNum.png' ,basePath+'assets/gradeAssets/unity/5.1/calNum.json');
		this.load.atlas('grade51_greenNumbers',basePath+'assets/gradeAssets/unity/5.1/greenNumbers.png' ,basePath+'assets/gradeAssets/unity/5.1/greenNumbers.json');
		this.load.atlas('grade51_carrot',basePath+'assets/gradeAssets/unity/5.1/carrot.png' ,basePath+'assets/gradeAssets/unity/5.1/carrot.json');
		this.load.atlas('grade51_greenNumbers1',basePath+'assets/gradeAssets/unity/5.1/greenNumbers1.png' ,basePath+'assets/gradeAssets/unity/5.1/greenNumbers1.json');
		this.load.atlas('grade51_txtbox',basePath+'assets/gradeAssets/unity/5.1/txtbox.png' ,basePath+'assets/gradeAssets/unity/5.1/txtbox.json');
		this.load.atlas('grade51_tick',basePath+'assets/gradeAssets/unity/5.1/tick.png' ,basePath+'assets/gradeAssets/unity/5.1/tick.json');
		this.load.atlas('grade51_eraser',basePath+'assets/gradeAssets/unity/5.1/eraser.png' ,basePath+'assets/gradeAssets/unity/5.1/eraser.json');
		this.load.atlas('grade51_thinkingCloud',basePath+'assets/gradeAssets/unity/5.1/thinkingCloud.png',basePath+'assets/gradeAssets/unity/5.1/thinkingCloud.json');
		this.load.atlas('grade51_backbtn',basePath+'assets/gradeAssets/unity/5.1/backbtn.png' ,basePath+'assets/gradeAssets/unity/5.1/backbtn.json');
		this.load.atlas('grade51_speaker',basePath+'assets/gradeAssets/unity/5.1/speaker.png' ,basePath+'assets/gradeAssets/unity/5.1/speaker.json');
		this.load.atlas('grade51_starAnim',basePath+'assets/gradeAssets/unity/5.1/starAnim.png',basePath+'assets/gradeAssets/unity/5.1/starAnim.json');
		this.load.atlas('grade51_btn',basePath+'assets/gradeAssets/unity/5.1/btn.png',basePath+'assets/gradeAssets/unity/5.1/btn.json');
		this.load.image('grade51_tittleBar', basePath+'assets/gradeAssets/unity/5.1/tittleBar.png');
		this.load.atlas('grade51_replay', basePath+'assets/gradeAssets/unity/5.1/reply.png', basePath+'assets/gradeAssets/unity/5.1/reply.json');

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
		this.load.image('skipDemoVideos', basePath+'assets/commonAssets/skipArrow.png');



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
		this.state.start('unity5_1level1');
	},
};
