Game.preloader_5_2=function(game){
	this.preloadBar=null;
};

Game.preloader_5_2.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (5.2)
		this.load.image('Level52_bg1', basePath+'assets/gradeAssets/5.2/commonAssets52/bg1.png');
		this.load.atlas('Level52_btn', basePath+'assets/gradeAssets/5.2/commonAssets52/btn.png', basePath+'assets/gradeAssets/5.2/btn.json');
		this.load.image('Level52_bg3', basePath+'assets/gradeAssets/5.2/commonAssets52/bg3.png');
		this.load.image('Level52_tittleBaar', basePath+'assets/gradeAssets/5.2/commonAssets52/tittleBaar.png');
		this.load.atlas('Level52_replay', basePath+'assets/gradeAssets/5.2/commonAssets52/reply.png', basePath+'assets/gradeAssets/5.2/reply.json');
		this.load.image('Level52_glow', basePath+'assets/gradeAssets/5.2/glow.png');
		this.load.image('Level52_Bg', basePath+'assets/gradeAssets/5.2/Bg.png');
		this.load.image('Level52_main_image1', basePath+'assets/gradeAssets/5.2/Slide1/main_image.png');
		this.load.image('Level52_main_image2', basePath+'assets/gradeAssets/5.2/Slide2/main_image.png');
		this.load.image('Level52_main_image3', basePath+'assets/gradeAssets/5.2/Slide3/main_image.png');
		this.load.image('Level52_main_image4', basePath+'assets/gradeAssets/5.2/Slide4/main_image.png');
		this.load.image('Level52_main_image5', basePath+'assets/gradeAssets/5.2/Slide5/main_image.png');
		this.load.image('Level52_main_image6', basePath+'assets/gradeAssets/5.2/Slide6/main_image.png');
		this.load.atlas('Level52_blankimg', basePath+'assets/gradeAssets/5.2/animslide.png', basePath+'assets/gradeAssets/5.2/animslide.json');
		this.load.atlas('Level52_sunday', 'assets/newAssets/07.png', 'assets/newAssets/07.json');
		this.load.atlas('Level52_monday', 'assets/newAssets/01.png', 'assets/newAssets/01.json');
		this.load.atlas('Level52_tuesday', 'assets/newAssets/02.png', 'assets/newAssets/02.json');
		this.load.atlas('Level52_wednesday', 'assets/newAssets/03.png', 'assets/newAssets/03.json');
		this.load.atlas('Level52_thursday', 'assets/newAssets/04.png', 'assets/newAssets/04.json');
		this.load.atlas('Level52_friday', 'assets/newAssets/05.png', 'assets/newAssets/05.json');
		this.load.atlas('Level52_saturday', 'assets/newAssets/06.png', 'assets/newAssets/06.json');
		this.load.image('Level52_wed1', basePath+'assets/gradeAssets/5.2/Slide1/wed1.png');
		this.load.image('Level52_tue1', basePath+'assets/gradeAssets/5.2/Slide1/tue1.png');
		this.load.image('Level52_sun1', basePath+'assets/gradeAssets/5.2/Slide1/sun1.png');
		this.load.image('Level52_sat1', basePath+'assets/gradeAssets/5.2/Slide1/sat1.png');
		this.load.image('Level52_fri1', basePath+'assets/gradeAssets/5.2/Slide1/fri1.png');
		this.load.image('Level52_thu1', basePath+'assets/gradeAssets/5.2/Slide1/thu1.png');
		this.load.image('Level52_mon1', basePath+'assets/gradeAssets/5.2/Slide1/mon1.png');
		this.load.image('Level52_mon2', basePath+'assets/gradeAssets/5.2/Slide2/mon2.png');
		this.load.image('Level52_sat2', basePath+'assets/gradeAssets/5.2/Slide2/sat2.png');
		this.load.image('Level52_sun2', basePath+'assets/gradeAssets/5.2/Slide2/sun2.png');
		this.load.image('Level52_fri2', basePath+'assets/gradeAssets/5.2/Slide2/fri2.png');
		this.load.image('Level52_tue2', basePath+'assets/gradeAssets/5.2/Slide2/tue2.png');
		this.load.image('Level52_thu2', basePath+'assets/gradeAssets/5.2/Slide2/thu2.png');
		this.load.image('Level52_wed2', basePath+'assets/gradeAssets/5.2/Slide2/wed2.png');
		this.load.image('Level52_sun3', basePath+'assets/gradeAssets/5.2/Slide3/sun3.png');
		this.load.image('Level52_fri3', basePath+'assets/gradeAssets/5.2/Slide3/fri3.png');
		this.load.image('Level52_mon3', basePath+'assets/gradeAssets/5.2/Slide3/mon3.png');
		this.load.image('Level52_wed3', basePath+'assets/gradeAssets/5.2/Slide3/wed3.png');
		this.load.image('Level52_thu3', basePath+'assets/gradeAssets/5.2/Slide3/thu3.png');
		this.load.image('Level52_sat3', basePath+'assets/gradeAssets/5.2/Slide3/sat3.png');
		this.load.image('Level52_tue3', basePath+'assets/gradeAssets/5.2/Slide3/tue3.png');
		this.load.image('Level52_tue4', basePath+'assets/gradeAssets/5.2/Slide4/tue4.png');
		this.load.image('Level52_wed4', basePath+'assets/gradeAssets/5.2/Slide4/wed4.png');
		this.load.image('Level52_mon4', basePath+'assets/gradeAssets/5.2/Slide4/mon4.png');
		this.load.image('Level52_fri4', basePath+'assets/gradeAssets/5.2/Slide4/fri4.png');
		this.load.image('Level52_sun4', basePath+'assets/gradeAssets/5.2/Slide4/sun4.png');
		this.load.image('Level52_thu4', basePath+'assets/gradeAssets/5.2/Slide4/thu4.png');
		this.load.image('Level52_sat4', basePath+'assets/gradeAssets/5.2/Slide4/sat4.png');
		this.load.image('Level52_sat5', basePath+'assets/gradeAssets/5.2/Slide5/sat5.png');
		this.load.image('Level52_fri5', basePath+'assets/gradeAssets/5.2/Slide5/fri5.png');
		this.load.image('Level52_tue5', basePath+'assets/gradeAssets/5.2/Slide5/tue5.png');
		this.load.image('Level52_thu5', basePath+'assets/gradeAssets/5.2/Slide5/thu5.png');
		this.load.image('Level52_sun5', basePath+'assets/gradeAssets/5.2/Slide5/sun5.png');
		this.load.image('Level52_wed5', basePath+'assets/gradeAssets/5.2/Slide5/wed5.png');
		this.load.image('Level52_mon5', basePath+'assets/gradeAssets/5.2/Slide5/mon5.png');
		this.load.image('Level52_sun6', basePath+'assets/gradeAssets/5.2/Slide6/sun6.png');
		this.load.image('Level52_tue6', basePath+'assets/gradeAssets/5.2/Slide6/tue6.png');
		this.load.image('Level52_thu6', basePath+'assets/gradeAssets/5.2/Slide6/thu6.png');
		this.load.image('Level52_sat6', basePath+'assets/gradeAssets/5.2/Slide6/sat6.png');
		this.load.image('Level52_fri6', basePath+'assets/gradeAssets/5.2/Slide6/fri6.png');
		this.load.image('Level52_wed6', basePath+'assets/gradeAssets/5.2/Slide6/wed6.png');
		this.load.image('Level52_mon6', basePath+'assets/gradeAssets/5.2/Slide6/mon6.png');
		this.load.image('Level52_sun19', basePath+'assets/gradeAssets/5.2/Slide19/img.png');
		this.load.image('Level52_mon19', basePath+'assets/gradeAssets/5.2/Slide19/img.png');
		this.load.image('Level52_tue19', basePath+'assets/gradeAssets/5.2/Slide19/img.png');
		this.load.image('Level52_wed19', basePath+'assets/gradeAssets/5.2/Slide19/img.png');
		this.load.image('Level52_thu19', basePath+'assets/gradeAssets/5.2/Slide19/img.png');
		this.load.image('Level52_fri19', basePath+'assets/gradeAssets/5.2/Slide19/img.png');
		this.load.image('Level52_sat19', basePath+'assets/gradeAssets/5.2/Slide19/img.png');
		this.load.image('Level52_sun20', basePath+'assets/gradeAssets/5.2/Slide20/img.png');
		this.load.image('Level52_mon20', basePath+'assets/gradeAssets/5.2/Slide20/img.png');
		this.load.image('Level52_tue20', basePath+'assets/gradeAssets/5.2/Slide20/img.png');
		this.load.image('Level52_wed20', basePath+'assets/gradeAssets/5.2/Slide20/img.png');
		this.load.image('Level52_thu20', basePath+'assets/gradeAssets/5.2/Slide20/img.png');
		this.load.image('Level52_fri20', basePath+'assets/gradeAssets/5.2/Slide20/img.png');
		this.load.image('Level52_sat20', basePath+'assets/gradeAssets/5.2/Slide20/img.png');
		this.load.image('Level52_sun21', basePath+'assets/gradeAssets/5.2/Slide21/img.png');
		this.load.image('Level52_mon21', basePath+'assets/gradeAssets/5.2/Slide21/img.png');
		this.load.image('Level52_tue21', basePath+'assets/gradeAssets/5.2/Slide21/img.png');
		this.load.image('Level52_wed21', basePath+'assets/gradeAssets/5.2/Slide21/img.png');
		this.load.image('Level52_thu21', basePath+'assets/gradeAssets/5.2/Slide21/img.png');
		this.load.image('Level52_fri21', basePath+'assets/gradeAssets/5.2/Slide21/img.png');
		this.load.image('Level52_sat21', basePath+'assets/gradeAssets/5.2/Slide21/img.png');
		this.load.image('Level52_sun22', basePath+'assets/gradeAssets/5.2/Slide22/img.png');
		this.load.image('Level52_mon22', basePath+'assets/gradeAssets/5.2/Slide22/img.png');
		this.load.image('Level52_tue22', basePath+'assets/gradeAssets/5.2/Slide22/img.png');
		this.load.image('Level52_wed22', basePath+'assets/gradeAssets/5.2/Slide22/img.png');
		this.load.image('Level52_thu22', basePath+'assets/gradeAssets/5.2/Slide22/img.png');
		this.load.image('Level52_fri22', basePath+'assets/gradeAssets/5.2/Slide22/img.png');
		this.load.image('Level52_sat22', basePath+'assets/gradeAssets/5.2/Slide22/img.png');
		this.load.image('Level52_sun23', basePath+'assets/gradeAssets/5.2/Slide23/img.png');
		this.load.image('Level52_mon23', basePath+'assets/gradeAssets/5.2/Slide23/img.png');
		this.load.image('Level52_tue23', basePath+'assets/gradeAssets/5.2/Slide23/img.png');
		this.load.image('Level52_wed23', basePath+'assets/gradeAssets/5.2/Slide23/img.png');
		this.load.image('Level52_thu23', basePath+'assets/gradeAssets/5.2/Slide23/img.png');
		this.load.image('Level52_fri23', basePath+'assets/gradeAssets/5.2/Slide23/img.png');
		this.load.image('Level52_sat23', basePath+'assets/gradeAssets/5.2/Slide23/img.png');
		this.load.image('Level52_sun24', basePath+'assets/gradeAssets/5.2/Slide24/img.png');
		this.load.image('Level52_mon24', basePath+'assets/gradeAssets/5.2/Slide24/img.png');
		this.load.image('Level52_tue24', basePath+'assets/gradeAssets/5.2/Slide24/img.png');
		this.load.image('Level52_wed24', basePath+'assets/gradeAssets/5.2/Slide24/img.png');
		this.load.image('Level52_thu24', basePath+'assets/gradeAssets/5.2/Slide24/img.png');
		this.load.image('Level52_fri24', basePath+'assets/gradeAssets/5.2/Slide24/img.png');
		this.load.image('Level52_sat24', basePath+'assets/gradeAssets/5.2/Slide24/img.png');

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
		this.state.start('grade5_2level1');
	},
};
