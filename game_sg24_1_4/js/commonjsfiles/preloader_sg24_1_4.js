Game.preloader_sg24_1_4=function(game){
	this.preloadBar=null;
};

Game.preloader_sg24_1_4.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg24.1.4)
		this.load.image('sg16_2_4_box',basePath+'assets/gradeAssets/sg16.2.4/box.png');
		this.load.image('sg24_1_4_symbol',basePath+'assets/gradeAssets/sg24.1.4/Symbol.png');
		this.load.atlas('sg24_1_4_RightButton',basePath+'assets/gradeAssets/sg24.1.4/RightButton.png' ,basePath+'assets/gradeAssets/sg24.1.4/RightButton.json');
		this.load.atlas('sg24_1_4_EraseButton',basePath+'assets/gradeAssets/sg24.1.4/EraseButton.png' ,basePath+'assets/gradeAssets/sg24.1.4/EraseButton.json');
		this.load.image('sg24_1_4_dotline1',basePath+'assets/gradeAssets/sg24.1.4/doteline1.png');
		this.load.image('sg24_1_4_dotline2',basePath+'assets/gradeAssets/sg24.1.4/doteline2.png');
		this.load.image('sg24_1_4_dotline3',basePath+'assets/gradeAssets/sg24.1.4/doteline3.png');
		this.load.image('sg24_1_4_dotline4',basePath+'assets/gradeAssets/sg24.1.4/doteline4.png');
		this.load.image('sg24_1_4_dotline5',basePath+'assets/gradeAssets/sg24.1.4/doteline5.png');
		this.load.image('sg24_1_4_dotline6',basePath+'assets/gradeAssets/sg24.1.4/doteline6.png');
		this.load.image('sg24_1_4_dotline7',basePath+'assets/gradeAssets/sg24.1.4/doteline7.png');
		this.load.image('sg24_1_4_img1',basePath+'assets/gradeAssets/sg24.1.4/img1.png');
		this.load.image('sg24_1_4_img2',basePath+'assets/gradeAssets/sg24.1.4/img2.png');
		this.load.image('sg24_1_4_img3',basePath+'assets/gradeAssets/sg24.1.4/img3.png');
		this.load.image('sg24_1_4_img4',basePath+'assets/gradeAssets/sg24.1.4/img4.png');
		this.load.image('sg24_1_4_img5',basePath+'assets/gradeAssets/sg24.1.4/img5.png');
		this.load.image('sg24_1_4_dot',basePath+'assets/gradeAssets/sg24.1.4/dote.png');
		this.load.atlas('sg24_1_4_line1',basePath+'assets/gradeAssets/sg24.1.4/line1.png' ,basePath+'assets/gradeAssets/sg24.1.4/line1.json');
		this.load.atlas('sg24_1_4_line2',basePath+'assets/gradeAssets/sg24.1.4/line2.png' ,basePath+'assets/gradeAssets/sg24.1.4/line2.json');
		this.load.atlas('sg24_1_4_line3',basePath+'assets/gradeAssets/sg24.1.4/line3.png' ,basePath+'assets/gradeAssets/sg24.1.4/line3.json');
		this.load.atlas('sg24_1_4_footstep1',basePath+'assets/gradeAssets/sg24.1.4/footstep1.png' ,basePath+'assets/gradeAssets/sg24.1.4/footstep1.json');
		this.load.atlas('sg24_1_4_footstep2',basePath+'assets/gradeAssets/sg24.1.4/footstep2.png' ,basePath+'assets/gradeAssets/sg24.1.4/footstep2.json');
		this.load.atlas('sg24_1_4_footstep3',basePath+'assets/gradeAssets/sg24.1.4/footstep3.png' ,basePath+'assets/gradeAssets/sg24.1.4/footstep3.json');
		this.load.atlas('sg24_1_4_footstep4',basePath+'assets/gradeAssets/sg24.1.4/footstep4.png' ,basePath+'assets/gradeAssets/sg24.1.4/footstep4.json');
		this.load.atlas('sg24_1_4_footstep5',basePath+'assets/gradeAssets/sg24.1.4/footstep5.png' ,basePath+'assets/gradeAssets/sg24.1.4/footstep5.json');
		this.load.atlas('sg24_1_4_footstep6',basePath+'assets/gradeAssets/sg24.1.4/footstep6.png' ,basePath+'assets/gradeAssets/sg24.1.4/footstep6.json');
		this.load.atlas('sg24_1_4_footstep7',basePath+'assets/gradeAssets/sg24.1.4/footstep7.png' ,basePath+'assets/gradeAssets/sg24.1.4/footstep7.json');
		this.load.atlas('sg24_1_4_footstep8',basePath+'assets/gradeAssets/sg24.1.4/footstep8.png' ,basePath+'assets/gradeAssets/sg24.1.4/footstep8.json');

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
		this.load.atlas('sg16_2_4_calNum', basePath+'assets/gradeAssets/sg16.2.4/calNum.png', basePath+'assets/gradeAssets/sg16.2.4/calNum.json');
		this.load.image('sg16_2_4_footer', basePath+'assets/commonAssets/bottomBar.png');



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
		this.state.start('sg24_1_4level1');
	},
};
