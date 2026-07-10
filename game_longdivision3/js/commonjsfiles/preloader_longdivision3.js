Game.preloader_longdivision3=function(game){
	this.preloadBar=null;
};

Game.preloader_longdivision3.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (longdivision3)
		this.load.image('Dhg1_5_bgA',basePath+'assets/DH2/commonAssets/BG2.png');
		this.load.image('Dhg1_5_bg3',basePath+'assets/DH2/commonAssets/bg3.png');
		this.load.image('Dhg1_5_tittleBaar',basePath+'assets/DH2/commonAssets/tittleBaar.png');
		this.load.image('Dhg1_5_Topbar',basePath+'assets/DH2/commonAssets/navBar.png');
		this.load.image('Dhg1_5_timer',basePath+'assets/DH2/commonAssets/timer.png');
		this.load.image('Dhg1_5_footer',basePath+'assets/DH2/commonAssets/footer.png');
		this.load.image('Dhg1_5_skipDemoVideos',basePath+'assets/DH2/commonAssets/skipArrow.png');
		this.load.atlas('Dhg1_5_BackDhg1_5_btn',basePath+'assets/DH2/commonAssets/backbtn.png' ,basePath+'json/DH2/backbtn.json');
		this.load.atlas('Dhg1_5_btn',basePath+'assets/DH2/commonAssets/btn.png' ,basePath+'json/DH2/btn.json');
		this.load.atlas('rightDhg1_5_btn',basePath+'assets/DH2/commonAssets/1.png' ,basePath+'json/DH2/1.json');
		this.load.atlas('wrongDhg1_5_btn',basePath+'assets/DH2/commonAssets/2.png' ,basePath+'json/DH2/2.json');
		this.load.atlas('Dhg1_5_speaker',basePath+'assets/DH2/commonAssets/speaker.png' ,basePath+'json/DH2/speaker.json');
		this.load.atlas('Dhg1_5_starAnim',basePath+'assets/DH2/commonAssets/starAnim.png' ,basePath+'json/DH2/starAnim.json');
		this.load.atlas('Dhg1_5_replay',basePath+'assets/DH2/commonAssets/reply.png' ,basePath+'json/DH2/reply.json');
		this.load.image('Dhg1_5_Box1',basePath+'assets/DH2/gameAssets/new box 1.png');
		this.load.image('Dhg1_5_Box3',basePath+'assets/DH2/gameAssets/new box 2.png');
		this.load.image('Dhg1_5_Box2',basePath+'assets/DH2/gameAssets/box 9.png');
		this.load.image('Dhg1_5_Box4',basePath+'assets/DH2/gameAssets/box 10.png');
		this.load.atlas('Dhg1_5_circle',basePath+'assets/DH2/gameAssets/A1.png',basePath+'json/DH2/gameAssets/A1.json');
		this.load.atlas('Dhg1_5_square',basePath+'assets/DH2/gameAssets/A2.png',basePath+'json/DH2/gameAssets/A2.json');
		this.load.atlas('Dhg1_5_triangle',basePath+'assets/DH2/gameAssets/A3.png',basePath+'json/DH2/gameAssets/A3.json');
		this.load.atlas('Dhg1_5_oval',basePath+'assets/DH2/gameAssets/A4.png',basePath+'json/DH2/gameAssets/A4.json');
		this.load.atlas('Dhg1_5_papaya',basePath+'assets/DH2/gameAssets/A5.png',basePath+'json/DH2/gameAssets/A5.json');
		this.load.atlas('Dhg1_5_cherry',basePath+'assets/DH2/gameAssets/A6.png',basePath+'json/DH2/gameAssets/A6.json');
		this.load.atlas('Dhg1_5_carrot',basePath+'assets/DH2/gameAssets/A7.png',basePath+'json/DH2/gameAssets/A7.json');
		this.load.atlas('Dhg1_5_watermelon',basePath+'assets/DH2/gameAssets/A8.png',basePath+'json/DH2/gameAssets/A8.json');
		this.load.atlas('Dhg1_5_orange',basePath+'assets/DH2/gameAssets/A9.png',basePath+'json/DH2/gameAssets/A9.json');
		this.load.atlas('Dhg1_5_basketball',basePath+'assets/DH2/gameAssets/A10.png',basePath+'json/DH2/gameAssets/A10.json');
		this.load.atlas('Dhg1_5_boot',basePath+'assets/DH2/gameAssets/A11.png',basePath+'json/DH2/gameAssets/A11.json');
		this.load.atlas('Dhg1_5_flower',basePath+'assets/DH2/gameAssets/A12.png',basePath+'json/DH2/gameAssets/A12.json');
		this.load.atlas('Dhg1_5_ballon',basePath+'assets/DH2/gameAssets/A13.png',basePath+'json/DH2/gameAssets/A13.json');
		this.load.atlas('Dhg1_5_ball',basePath+'assets/DH2/gameAssets/A14.png',basePath+'json/DH2/gameAssets/A14.json');
		this.load.atlas('Roman_num',basePath+'assets/DH2/gameAssets/Nu 12345.png',basePath+'json/DH2/gameAssets/Nu 12345.json');
		this.load.atlas('Dhg1_5_textbox',basePath+'assets/DH2/gameAssets/textbox.png',basePath+'json/DH2/gameAssets/textbox.json');
		this.load.atlas('Dhg1_5_numpad',basePath+'assets/DH2/gameAssets/calNum.png',basePath+'json/DH2/gameAssets/calNum.json');
		this.load.atlas('Dhg1_5_plus',basePath+'assets/DH2/gameAssets/P.png',basePath+'json/DH2/gameAssets/P.json');
		this.load.atlas('Dhg1_5_minus',basePath+'assets/DH2/gameAssets/M.png',basePath+'json/DH2/gameAssets/M.json');
		this.load.atlas('Dhg1_5_green_bar',basePath+'assets/DH2/gameAssets/z1.png',basePath+'json/DH2/gameAssets/z1.json');
		this.load.atlas('Dhg1_5_red_bar',basePath+'assets/DH2/gameAssets/z2.png',basePath+'json/DH2/gameAssets/z2.json');
		this.load.atlas('Dhg1_5_yellow_bar',basePath+'assets/DH2/gameAssets/z3.png',basePath+'json/DH2/gameAssets/z3.json');
		this.load.atlas('Dhg1_5_blue_bar',basePath+'assets/DH2/gameAssets/z4.png',basePath+'json/DH2/gameAssets/z4.json');
		this.load.atlas('Dhg1_5_silver_bar',basePath+'assets/DH2/gameAssets/s1.png',basePath+'json/DH2/gameAssets/s1.json');

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
		this.load.image('longdivision3', basePath+'assets/newGames/longdivision3.png');
		this.load.image('longdivision4', basePath+'assets/newGames/longdivision4.png');



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
		this.state.start('longdivision3');
	},
};
