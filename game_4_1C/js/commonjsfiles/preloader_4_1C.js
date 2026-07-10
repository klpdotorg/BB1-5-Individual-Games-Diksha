Game.preloader_4_1C=function(game){
	this.preloadBar=null;
};

Game.preloader_4_1C.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (4.1C)
		this.load.image('Level41A_bg1',basePath+'assets/gradeAssets/4.1A/commonAssets/bg1.png');
		this.load.image('Level41A_cloud',basePath+'assets/gradeAssets/4.1A/commonAssets/cloud.png');
		this.load.image('Level41A_bg3',basePath+'assets/gradeAssets/4.1A/commonAssets/bg3.png');
		this.load.atlas('Level41A_gameBox',basePath+'assets/gradeAssets/4.1A/gameAssets/gameBox.png' ,basePath+'assets/gradeAssets/4.1A/gameBox.json');
		this.load.atlas('Level41A_allimg',basePath+'assets/gradeAssets/4.1A/gameAssets/allimg.png' ,basePath+'assets/gradeAssets/4.1A/allimg.json');
		this.load.atlas('Level41A_tickMark',basePath+'assets/gradeAssets/4.1A/gameAssets/tickMark.png' ,basePath+'assets/gradeAssets/4.1A/tickMark.json');
		this.load.image('Level41A_croc',basePath+'assets/gradeAssets/4.1A/gameAssets/croc.png');
		this.load.image('Level41A_croc2',basePath+'assets/gradeAssets/4.1A/gameAssets/croc2.png');
		this.load.image('Level41A_glow',basePath+'assets/gradeAssets/4.1A/gameAssets/glow.png');
		this.load.image('Level41A_cup1',basePath+'assets/gradeAssets/4.1A/gameAssets/1.png');
		this.load.image('Level41A_cup2',basePath+'assets/gradeAssets/4.1A/gameAssets/2.png');
		this.load.image('Level41A_cup3',basePath+'assets/gradeAssets/4.1A/gameAssets/3.png');
		this.load.image('Level41A_cup4',basePath+'assets/gradeAssets/4.1A/gameAssets/4.png');
		this.load.image('Level41A_bucket1',basePath+'assets/gradeAssets/4.1A/gameAssets/5.png');
		this.load.image('Level41A_bucket2',basePath+'assets/gradeAssets/4.1A/gameAssets/6.png');
		this.load.image('Level41A_bucket3',basePath+'assets/gradeAssets/4.1A/gameAssets/7.png');
		this.load.image('Level41A_bucket4',basePath+'assets/gradeAssets/4.1A/gameAssets/8.png');
		this.load.image('Level41A_jug1',basePath+'assets/gradeAssets/4.1A/gameAssets/9.png');
		this.load.image('Level41A_jug2',basePath+'assets/gradeAssets/4.1A/gameAssets/10.png');
		this.load.image('Level41A_jug3',basePath+'assets/gradeAssets/4.1A/gameAssets/11.png');
		this.load.image('Level41A_jug4',basePath+'assets/gradeAssets/4.1A/gameAssets/12.png');
		this.load.image('Level41A_flask1',basePath+'assets/gradeAssets/4.1A/gameAssets/13.png');
		this.load.image('Level41A_flask2',basePath+'assets/gradeAssets/4.1A/gameAssets/14.png');
		this.load.image('Level41A_flask3',basePath+'assets/gradeAssets/4.1A/gameAssets/15.png');
		this.load.image('Level41A_flask4',basePath+'assets/gradeAssets/4.1A/gameAssets/16.png');
		this.load.image('Level41A_bottle1',basePath+'assets/gradeAssets/4.1A/gameAssets/17.png');
		this.load.image('Level41A_bottle2',basePath+'assets/gradeAssets/4.1A/gameAssets/18.png');
		this.load.image('Level41A_bottle3',basePath+'assets/gradeAssets/4.1A/gameAssets/19.png');
		this.load.image('Level41A_bottle4',basePath+'assets/gradeAssets/4.1A/gameAssets/20.png');
		this.load.image('Level41A_milk1',basePath+'assets/gradeAssets/4.1A/gameAssets/21.png');
		this.load.image('Level41A_milk2',basePath+'assets/gradeAssets/4.1A/gameAssets/22.png');
		this.load.image('Level41A_milk3',basePath+'assets/gradeAssets/4.1A/gameAssets/23.png');
		this.load.image('Level41A_milk4',basePath+'assets/gradeAssets/4.1A/gameAssets/24.png');
		this.load.image('Level41A_shadow1',basePath+'assets/gradeAssets/4.1A/gameAssets/shadow1.png');
		this.load.image('Level41A_shadow2',basePath+'assets/gradeAssets/4.1A/gameAssets/shadow2.png');
		this.load.image('Level41A_shadow3',basePath+'assets/gradeAssets/4.1A/gameAssets/shadow3.png');
		this.load.image('Level41A_shadow4',basePath+'assets/gradeAssets/4.1A/gameAssets/shadow4.png');
		this.load.image('Level41A_shadow5',basePath+'assets/gradeAssets/4.1A/gameAssets/shadow5.png');
		this.load.image('Level41A_shadow6',basePath+'assets/gradeAssets/4.1A/gameAssets/shadow6.png');
		this.load.atlas('Level41A_gameBox3',basePath+'assets/gradeAssets/4.1A/gameAssets/gameBox3.png' ,basePath+'assets/gradeAssets/4.1A/gameBox3.json');
		this.load.atlas('Level41A_allimages',basePath+'assets/gradeAssets/4.1A/gameAssets/allimages.png' ,basePath+'assets/gradeAssets/4.1A/allimages.json');
		this.load.image('Level41A_bluebottle1',basePath+'assets/gradeAssets/4.1A/gameAssets/bluebottle1.png');
		this.load.image('Level41A_bluebottle2',basePath+'assets/gradeAssets/4.1A/gameAssets/bluebottle2.png');
		this.load.image('Level41A_glassfull1',basePath+'assets/gradeAssets/4.1A/gameAssets/glassfull1.png');
		this.load.image('Level41A_glassfull2',basePath+'assets/gradeAssets/4.1A/gameAssets/glassfull2.png');
		this.load.image('Level41A_glassfull3',basePath+'assets/gradeAssets/4.1A/gameAssets/glassfull3.png');
		this.load.image('Level41A_glassfull4',basePath+'assets/gradeAssets/4.1A/gameAssets/glassfull4.png');
		this.load.image('Level41A_greendrum1',basePath+'assets/gradeAssets/4.1A/gameAssets/greendrum1.png');
		this.load.image('Level41A_greendrum2',basePath+'assets/gradeAssets/4.1A/gameAssets/greendrum2.png');
		this.load.image('Level41A_greendrum3',basePath+'assets/gradeAssets/4.1A/gameAssets/greendrum3.png');
		this.load.image('Level41A_greenmug1',basePath+'assets/gradeAssets/4.1A/gameAssets/greenmug1.png');
		this.load.image('Level41A_greenmug2',basePath+'assets/gradeAssets/4.1A/gameAssets/greenmug2.png');
		this.load.image('Level41A_greencup1',basePath+'assets/gradeAssets/4.1A/gameAssets/greencup1.png');
		this.load.image('Level41A_greencup2',basePath+'assets/gradeAssets/4.1A/gameAssets/greencup2.png');
		this.load.image('Level41A_greenpot1',basePath+'assets/gradeAssets/4.1A/gameAssets/greenpot1.png');
		this.load.image('Level41A_greenpot2',basePath+'assets/gradeAssets/4.1A/gameAssets/greenpot2.png');
		this.load.image('Level41A_greenpot3',basePath+'assets/gradeAssets/4.1A/gameAssets/greenpot3.png');
		this.load.image('Level41A_greenpot4',basePath+'assets/gradeAssets/4.1A/gameAssets/greenpot4.png');
		this.load.image('Level41A_orangebucket1',basePath+'assets/gradeAssets/4.1A/gameAssets/orangebucket1.png');
		this.load.image('Level41A_orangebucket2',basePath+'assets/gradeAssets/4.1A/gameAssets/orangebucket2.png');
		this.load.image('Level41A_orangecan1',basePath+'assets/gradeAssets/4.1A/gameAssets/orangecan1.png');
		this.load.image('Level41A_orangecan2',basePath+'assets/gradeAssets/4.1A/gameAssets/orangecan2.png');
		this.load.image('Level41A_orangecan3',basePath+'assets/gradeAssets/4.1A/gameAssets/orangecan3.png');
		this.load.image('Level41A_orangejug1',basePath+'assets/gradeAssets/4.1A/gameAssets/orangejug1.png');
		this.load.image('Level41A_orangejug2',basePath+'assets/gradeAssets/4.1A/gameAssets/orangejug2.png');
		this.load.image('Level41A_pinkbucket1',basePath+'assets/gradeAssets/4.1A/gameAssets/pinkbucket1.png');
		this.load.image('Level41A_pinkbucket2',basePath+'assets/gradeAssets/4.1A/gameAssets/pinkbucket2.png');
		this.load.image('Level41A_pinkbucket3',basePath+'assets/gradeAssets/4.1A/gameAssets/pinkbucket3.png');
		this.load.image('Level41A_pinkmug1',basePath+'assets/gradeAssets/4.1A/gameAssets/pinkmug1.png');
		this.load.image('Level41A_pinkmug2',basePath+'assets/gradeAssets/4.1A/gameAssets/pinkmug2.png');
		this.load.image('Level41A_redjug1',basePath+'assets/gradeAssets/4.1A/gameAssets/redjug1.png');
		this.load.image('Level41A_redjug2',basePath+'assets/gradeAssets/4.1A/gameAssets/redjug2.png');
		this.load.image('Level41A_redjug3',basePath+'assets/gradeAssets/4.1A/gameAssets/redjug3.png');
		this.load.image('Level41A_redjug4',basePath+'assets/gradeAssets/4.1A/gameAssets/redjug4.png');
		this.load.image('Level41A_syntex1',basePath+'assets/gradeAssets/4.1A/gameAssets/syntex1.png');
		this.load.image('Level41A_syntex2',basePath+'assets/gradeAssets/4.1A/gameAssets/syntex2.png');
		this.load.image('Level41A_whitemug1',basePath+'assets/gradeAssets/4.1A/gameAssets/whitemug1.png');
		this.load.image('Level41A_whitesoda1',basePath+'assets/gradeAssets/4.1A/gameAssets/whitesoda1.png');
		this.load.image('Level41A_whitesoda2',basePath+'assets/gradeAssets/4.1A/gameAssets/whitesoda2.png');
		this.load.image('Level41A_yellowct1',basePath+'assets/gradeAssets/4.1A/gameAssets/yellowct1.png');
		this.load.image('Level41A_bottleone',basePath+'assets/gradeAssets/4.1A/gameAssets/bottleone.png');
		this.load.image('Level41A_bluebottle1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/bluebottle1_shadow.png');
		this.load.image('Level41A_glassfull1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/glassfull1_shadow.png');
		this.load.image('Level41A_glassfull2_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/glassfull2_shadow.png');
		this.load.image('Level41A_greendrum1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/greendrum1_shadow.png');
		this.load.image('Level41A_greendrum2_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/greendrum2_shadow.png');
		this.load.image('Level41A_greenmug1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/greenmug1_shadow.png');
		this.load.image('Level41A_greenpot1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/greenpot1_shadow.png');
		this.load.image('Level41A_orangebucket1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/orangebucket1_shadow.png');
		this.load.image('Level41A_orangebucket2_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/orangebucket2_shadow.png');
		this.load.image('Level41A_orangecan1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/orangecan1_shadow.png');
		this.load.image('Level41A_orangecan2_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/orangecan2_shadow.png');
		this.load.image('Level41A_orangejug1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/orangejug1_shadow.png');
		this.load.image('Level41A_orangejug2_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/orangejug2_shadow.png');
		this.load.image('Level41A_pinkbucket1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/pinkbucket1_shadow.png');
		this.load.image('Level41A_pinkbucket2_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/pinkbucket2_shadow.png');
		this.load.image('Level41A_pinkmug1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/pinkmug1_shadow.png');
		this.load.image('Level41A_redjug1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/redjug1_shadow.png');
		this.load.image('Level41A_syntex1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/syntex1_shadow.png');
		this.load.image('Level41A_syntex2_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/syntex2_shadow.png');
		this.load.image('Level41A_whitemug1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/whitemug1_shadow.png');
		this.load.image('Level41A_whitesoda1_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/whitesoda1_shadow.png');
		this.load.image('Level41A_bg4_1',basePath+'assets/gradeAssets/4.1A/gameAssets/akshbg41.png');
		this.load.atlas('Level41A_bottlefull',basePath+'assets/gradeAssets/4.1A/gameAssets/bottlefull.png' ,basePath+'assets/gradeAssets/4.1A/bottlefull.json');
		this.load.atlas('Level41A_bottlehalf',basePath+'assets/gradeAssets/4.1A/gameAssets/bottlehalf.png' ,basePath+'assets/gradeAssets/4.1A/bottlehalf.json');
		this.load.atlas('Level41A_bottlequarter',basePath+'assets/gradeAssets/4.1A/gameAssets/bottlequarter.png' ,basePath+'assets/gradeAssets/4.1A/bottlequarter.json');
		this.load.atlas('Level41A_bucketfull',basePath+'assets/gradeAssets/4.1A/gameAssets/bucketfull.png' ,basePath+'assets/gradeAssets/4.1A/bucketfull.json');
		this.load.atlas('Level41A_buckethalf',basePath+'assets/gradeAssets/4.1A/gameAssets/buckethalf.png' ,basePath+'assets/gradeAssets/4.1A/buckethalf.json');
		this.load.atlas('Level41A_bucketquarter',basePath+'assets/gradeAssets/4.1A/gameAssets/bucketquarter.png' ,basePath+'assets/gradeAssets/4.1A/bucketquarter.json');
		this.load.atlas('Level41A_glassfull',basePath+'assets/gradeAssets/4.1A/gameAssets/glassfull.png' ,basePath+'assets/gradeAssets/4.1A/glassfull.json');
		this.load.atlas('Level41A_glasshalf',basePath+'assets/gradeAssets/4.1A/gameAssets/glasshalf.png' ,basePath+'assets/gradeAssets/4.1A/glasshalf.json');
		this.load.atlas('Level41A_glassquarter',basePath+'assets/gradeAssets/4.1A/gameAssets/glassquarter.png' ,basePath+'assets/gradeAssets/4.1A/glassquarter.json');
		this.load.atlas('Level41A_jugfull',basePath+'assets/gradeAssets/4.1A/gameAssets/jugfull.png' ,basePath+'assets/gradeAssets/4.1A/jugfull.json');
		this.load.atlas('Level41A_jughalf',basePath+'assets/gradeAssets/4.1A/gameAssets/jughalf.png' ,basePath+'assets/gradeAssets/4.1A/jughalf.json');
		this.load.atlas('Level41A_jugquarter',basePath+'assets/gradeAssets/4.1A/gameAssets/jugquarter.png' ,basePath+'assets/gradeAssets/4.1A/jugquarter.json');
		this.load.atlas('Level41A_mugfull',basePath+'assets/gradeAssets/4.1A/gameAssets/mugfull.png' ,basePath+'assets/gradeAssets/4.1A/mugfull.json');
		this.load.atlas('Level41A_mughalf',basePath+'assets/gradeAssets/4.1A/gameAssets/mughalf.png' ,basePath+'assets/gradeAssets/4.1A/mughalf.json');
		this.load.atlas('Level41A_mugquarter',basePath+'assets/gradeAssets/4.1A/gameAssets/mugquarter.png' ,basePath+'assets/gradeAssets/4.1A/mugquarter.json');
		this.load.atlas('Level41A_sodafull',basePath+'assets/gradeAssets/4.1A/gameAssets/sodafull.png' ,basePath+'assets/gradeAssets/4.1A/sodafull.json');
		this.load.atlas('Level41A_sodahalf',basePath+'assets/gradeAssets/4.1A/gameAssets/sodahalf.png' ,basePath+'assets/gradeAssets/4.1A/sodahalf.json');
		this.load.atlas('Level41A_sodaquarter',basePath+'assets/gradeAssets/4.1A/gameAssets/sodaquarter.png' ,basePath+'assets/gradeAssets/4.1A/sodaquarter.json');
		this.load.image('Level41A_bottle_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/bottle_shadow.png');
		this.load.image('Level41A_bucket_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/bucket_shadow.png');
		this.load.image('Level41A_glass_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/glass_shadow.png');
		this.load.image('Level41A_jug_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/jug_shadow.png');
		this.load.image('Level41A_mug_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/mug_shadow.png');
		this.load.image('Level41A_soda_shadow',basePath+'assets/gradeAssets/4.1A/gameAssets/soda_shadow.png');

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
		this.load.image('Level42A_Topbar', basePath+'assets/gradeAssets/4.2A/commonAssets/Topbar.png');
		this.load.image('Level42B_timer', basePath+'assets/gradeAssets/4.2A/commonAssets/timer.png');
		this.load.atlas('Level42A_CommonSpeakerBtn', basePath+'assets/gradeAssets/4.2A/commonAssets/speaker.png', basePath+'assets/gradeAssets/4.2A/speaker.json');
		this.load.atlas('Level41A_tickMark', basePath+'assets/gradeAssets/4.1A/gameAssets/tickMark.png', basePath+'assets/gradeAssets/4.1A/tickMark.json');



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
		this.state.start('grade4_1Clevel1');
	},
};
