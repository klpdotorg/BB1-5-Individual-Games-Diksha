Game.preloader_4_2A=function(game){
	this.preloadBar=null;
};

Game.preloader_4_2A.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (4.2A)
		this.load.image('Level42A_bgA', basePath+'assets/gradeAssets/4.2A/commonAssets/bgA.png');
		this.load.atlas('Level42A_CommonBackBtn', basePath+'assets/gradeAssets/4.2A/commonAssets/backbtn.png', basePath+'assets/gradeAssets/4.2A/backbtn.json');
		this.load.atlas('Level42A_CommonStarAnim', basePath+'assets/gradeAssets/4.2A/commonAssets/starAnim.png', basePath+'assets/gradeAssets/4.2A/starAnim.json');
		this.load.atlas('Level42A_btn', basePath+'assets/gradeAssets/4.2A/commonAssets/btn.png', basePath+'assets/gradeAssets/4.2A/btn.json');
		this.load.image('Level42A_bg3', basePath+'assets/gradeAssets/4.2A/commonAssets/bg3.png');
		this.load.image('Level42A_tittleBaar', basePath+'assets/gradeAssets/4.2A/commonAssets/tittleBaar.png');
		this.load.atlas('Level42A_replay', basePath+'assets/gradeAssets/4.2A/commonAssets/reply.png', basePath+'assets/gradeAssets/4.2A/reply.json');
		this.load.image('Level42A_footer', basePath+'assets/gradeAssets/4.2A/commonAssets/footer.png');
		this.load.image('Level42A_Topbar', basePath+'assets/gradeAssets/4.2A/commonAssets/Topbar.png');
		this.load.image('Level42A_timer', basePath+'assets/gradeAssets/4.2A/commonAssets/timer.png');
		this.load.image('Level42A_dottedBox', basePath+'assets/gradeAssets/4.2A/commonAssets/dottedBox.png');
		this.load.image('Level42A_c', basePath+'assets/gradeAssets/4.2A/commonAssets/c.png');
		this.load.atlas('Level42A_bottle', basePath+'assets/gradeAssets/4.2A/bottle.png', basePath+'assets/gradeAssets/4.2A/bottle.json');
		this.load.atlas('Level42A_bottleblue', basePath+'assets/gradeAssets/4.2A/bottleblue.png', basePath+'assets/gradeAssets/4.2A/bottleblue.json');
		this.load.atlas('Level42A_bucket', basePath+'assets/gradeAssets/4.2A/bucket.png', basePath+'assets/gradeAssets/4.2A/bucket.json');
		this.load.atlas('Level42A_cup', basePath+'assets/gradeAssets/4.2A/cup.png', basePath+'assets/gradeAssets/4.2A/cup.json');
		this.load.atlas('Level42A_cupreverse', basePath+'assets/gradeAssets/4.2A/cupreverse.png', basePath+'assets/gradeAssets/4.2A/cupreverse.json');
		this.load.atlas('Level42A_glass', basePath+'assets/gradeAssets/4.2A/glass.png', basePath+'assets/gradeAssets/4.2A/glass.json');
		this.load.atlas('Level42A_jug', basePath+'assets/gradeAssets/4.2A/jug.png', basePath+'assets/gradeAssets/4.2A/jug.json');
		this.load.atlas('Level42A_pinkmug', basePath+'assets/gradeAssets/4.2A/pinkmug.png', basePath+'assets/gradeAssets/4.2A/pinkmug.json');
		this.load.atlas('Level42A_soda', basePath+'assets/gradeAssets/4.2A/soda.png', basePath+'assets/gradeAssets/4.2A/soda.json');
		this.load.atlas('Level42A_box', basePath+'assets/gradeAssets/4.2A/box.png', basePath+'assets/gradeAssets/4.2A/box.json');
		this.load.atlas('Level42A_bluebottlec', basePath+'assets/gradeAssets/4.2A/bluebottlec.png', basePath+'assets/gradeAssets/4.2A/bluebottlec.json');
		this.load.atlas('Level42A_bluebucketc', basePath+'assets/gradeAssets/4.2A/bluebucketc.png', basePath+'assets/gradeAssets/4.2A/bluebucketc.json');
		this.load.atlas('Level42A_bottlec', basePath+'assets/gradeAssets/4.2A/bottlec.png', basePath+'assets/gradeAssets/4.2A/bottlec.json');
		this.load.atlas('Level42A_greenmugc', basePath+'assets/gradeAssets/4.2A/greenmugc.png', basePath+'assets/gradeAssets/4.2A/greenmugc.json');
		this.load.atlas('Level42A_pinkbucketc', basePath+'assets/gradeAssets/4.2A/pinkbucketc.png', basePath+'assets/gradeAssets/4.2A/pinkbucketc.json');
		this.load.atlas('Level42A_potsplashc', basePath+'assets/gradeAssets/4.2A/potsplashc.png', basePath+'assets/gradeAssets/4.2A/potsplashc.json');
		this.load.atlas('Level42A_vessel2c', basePath+'assets/gradeAssets/4.2A/vessel2c.png', basePath+'assets/gradeAssets/4.2A/vessel2c.json');
		this.load.atlas('Level42A_yellowctc', basePath+'assets/gradeAssets/4.2A/yellowctc.png', basePath+'assets/gradeAssets/4.2A/yellowctc.json');
		this.load.image('Level42A_common_shadow', basePath+'assets/gradeAssets/4.2A/common_shadow.png');
		this.load.atlas('Level42A_calNum', basePath+'assets/gradeAssets/4.2A/numbers.png', basePath+'assets/gradeAssets/4.2A/numbers.json');
		this.load.atlas('Level42A_tank', basePath+'assets/gradeAssets/4.2A/tank.png', basePath+'assets/gradeAssets/4.2A/tank.json');
		this.load.atlas('Level42A_drum', basePath+'assets/gradeAssets/4.2A/drum.png', basePath+'assets/gradeAssets/4.2A/drum.json');
		this.load.atlas('Level42A_pot2', basePath+'assets/gradeAssets/4.2A/pot.png', basePath+'assets/gradeAssets/4.2A/pot.json');
		this.load.image('Level42A_darkbg1', basePath+'assets/gradeAssets/4.2A/darkbg1.png');
		this.load.image('Level42A_darkbg2', basePath+'assets/gradeAssets/4.2A/darkbg2.png');
		this.load.atlas('Level42A_cooker', basePath+'assets/gradeAssets/4.2A/cooker.png', basePath+'assets/gradeAssets/4.2A/cooker.json');
		this.load.atlas('Level42A_jug2', basePath+'assets/gradeAssets/4.2A/jug2.png', basePath+'assets/gradeAssets/4.2A/jug2.json');
		this.load.atlas('Level42A_can', basePath+'assets/gradeAssets/4.2A/can.png', basePath+'assets/gradeAssets/4.2A/can.json');
		this.load.image('Level42A_spoon', basePath+'assets/gradeAssets/4.2A/spoon.png');
		this.load.atlas('Level42A_rightBtn', basePath+'assets/gradeAssets/4.2A/rightBtn.png', basePath+'assets/gradeAssets/4.2A/rightBtn.json');
		this.load.atlas('Level42A_eraser', basePath+'assets/gradeAssets/4.2A/eraser.png', basePath+'assets/gradeAssets/4.2A/eraser.json');
		this.load.image('Level42A_redmark', basePath+'assets/gradeAssets/4.2A/redmark.png');

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
		this.load.image('Level42A_Topbar', basePath+'assets/gradeAssets/4.2A/commonAssets/Topbar.png');
		this.load.image('Level42A_timer', basePath+'assets/gradeAssets/4.2A/commonAssets/timer.png');
		this.load.atlas('Level42A_CommonSpeakerBtn', basePath+'assets/gradeAssets/4.2A/commonAssets/speaker.png', basePath+'assets/gradeAssets/4.2A/speaker.json');
		this.load.atlas('Level42A_rightBtn', basePath+'assets/gradeAssets/4.2A/rightBtn.png', basePath+'assets/gradeAssets/4.2A/rightBtn.json');
		this.load.atlas('Level42A_eraser', basePath+'assets/gradeAssets/4.2A/eraser.png', basePath+'assets/gradeAssets/4.2A/eraser.json');



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
		this.state.start('grade4_2Alevel1');
	},
};
