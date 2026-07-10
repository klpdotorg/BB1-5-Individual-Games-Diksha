Game.preloader_2_4B=function(game){
	this.preloadBar=null;
};

Game.preloader_2_4B.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (2.4B)
		this.load.image('Level24A_bg1',basePath+'assets/gradeAssets/2.4A/commonAssets/bg1.png');
		this.load.image('Level24B_bg1',basePath+'assets/gradeAssets/2.4A/commonAssets/bg1.png');
		this.load.image('Level24A_cloud',basePath+'assets/gradeAssets/2.4A/commonAssets/cloud.png');
		this.load.image('Level24A_bg3',basePath+'assets/gradeAssets/2.4A/commonAssets/bg3.png');
		this.load.atlas('Level24A_numbg',basePath+'assets/gradeAssets/2.4A/commonAssets/numbg.png' ,basePath+'assets/gradeAssets/2.4A/numbg.json');
		this.load.atlas('Level24A_rightBtn',basePath+'assets/gradeAssets/2.4A/commonAssets/rightBtn.png' ,basePath+'assets/gradeAssets/2.4A/rightBtn.json');
		this.load.atlas('Level24A_wrongBtn',basePath+'assets/gradeAssets/2.4A/commonAssets/wrongBtn.png' ,basePath+'assets/gradeAssets/2.4A/wrongBtn.json');
		this.load.atlas('Level24A_tape15cm',basePath+'assets/gradeAssets/2.4A/commonAssets/tape15cm.png' ,basePath+'assets/gradeAssets/2.4A/tape15cm.json');
		this.load.atlas('Level24A_tape30cm',basePath+'assets/gradeAssets/2.4A/commonAssets/tape30cm.png' ,basePath+'assets/gradeAssets/2.4A/tape30cm.json');
		this.load.atlas('Level24A_tape100cm',basePath+'assets/gradeAssets/2.4A/commonAssets/tape100cm.png' ,basePath+'assets/gradeAssets/2.4A/tape100cm.json');
		this.load.atlas('Level24A_scaleMarker',basePath+'assets/gradeAssets/2.4A/commonAssets/scaleMarker.png' ,basePath+'assets/gradeAssets/2.4A/scaleMarker.json');
		this.load.image('Level24A_scaleMarkerNew',basePath+'assets/gradeAssets/2.4A/commonAssets/scaleMarkerNew.png');
		this.load.image('Level24A_txtbox',basePath+'assets/gradeAssets/2.4A/commonAssets/box.png');
		this.load.image('Level24A_tape1',basePath+'assets/gradeAssets/2.4A/commonAssets/tape1.png');
		this.load.image('Level24A_tape2',basePath+'assets/gradeAssets/2.4A/commonAssets/tape2.png');
		this.load.image('Level24A_tape3',basePath+'assets/gradeAssets/2.4A/commonAssets/tape3.png');
		this.load.image('Level24A_scale',basePath+'assets/gradeAssets/2.4A/commonAssets/scale.png');
		this.load.image('Level24A_scaleNew',basePath+'assets/gradeAssets/2.4A/commonAssets/scaleNew.png');
		this.load.image('Level24A_tapeTint',basePath+'assets/gradeAssets/2.4A/commonAssets/tapeTint.png');
		this.load.atlas('Level24A_shoe',basePath+'assets/gradeAssets/2.4A/gameAssets/shoe.png' ,basePath+'assets/gradeAssets/2.4A/shoe.json');
		this.load.atlas('Level24A_shoe2',basePath+'assets/gradeAssets/2.4A/gameAssets/shoe2.png' ,basePath+'assets/gradeAssets/2.4A/shoe2.json');
		this.load.atlas('Level24A_fish',basePath+'assets/gradeAssets/2.4A/gameAssets/fish.png' ,basePath+'assets/gradeAssets/2.4A/fish.json');
		this.load.atlas('Level24A_clip',basePath+'assets/gradeAssets/2.4A/gameAssets/clip.png' ,basePath+'assets/gradeAssets/2.4A/clip.json');
		this.load.atlas('Level24A_pencil',basePath+'assets/gradeAssets/2.4A/gameAssets/pencil.png' ,basePath+'assets/gradeAssets/2.4A/pencil.json');
		this.load.atlas('Level24A_screwDriver',basePath+'assets/gradeAssets/2.4A/gameAssets/screwDriver.png' ,basePath+'assets/gradeAssets/2.4A/screwDriver.json');
		this.load.atlas('Level24A_key',basePath+'assets/gradeAssets/2.4A/gameAssets/key.png' ,basePath+'assets/gradeAssets/2.4A/key.json');
		this.load.atlas('Level24A_watch',basePath+'assets/gradeAssets/2.4A/gameAssets/watch.png' ,basePath+'assets/gradeAssets/2.4A/watch.json');
		this.load.atlas('Level24A_pen',basePath+'assets/gradeAssets/2.4A/gameAssets/pen.png' ,basePath+'assets/gradeAssets/2.4A/pen.json');
		this.load.atlas('Level24A_scale1',basePath+'assets/gradeAssets/2.4A/gameAssets/scale1.png' ,basePath+'assets/gradeAssets/2.4A/scale1.json');
		this.load.atlas('Level24A_scale2',basePath+'assets/gradeAssets/2.4A/gameAssets/scale2.png' ,basePath+'assets/gradeAssets/2.4A/scale2.json');
		this.load.atlas('Level24A_bat',basePath+'assets/gradeAssets/2.4A/gameAssets/bat.png' ,basePath+'assets/gradeAssets/2.4A/bat.json');
		this.load.atlas('Level24A_cup',basePath+'assets/gradeAssets/2.4A/gameAssets/cup.png' ,basePath+'assets/gradeAssets/2.4A/cup.json');
		this.load.atlas('Level24A_jug',basePath+'assets/gradeAssets/2.4A/gameAssets/jug.png' ,basePath+'assets/gradeAssets/2.4A/jug.json');
		this.load.atlas('Level24A_chair',basePath+'assets/gradeAssets/2.4A/gameAssets/chair.png' ,basePath+'assets/gradeAssets/2.4A/chair.json');
		this.load.atlas('Level24A_mug',basePath+'assets/gradeAssets/2.4A/gameAssets/mug.png' ,basePath+'assets/gradeAssets/2.4A/mug.json');
		this.load.atlas('Level24A_table',basePath+'assets/gradeAssets/2.4A/gameAssets/table.png' ,basePath+'assets/gradeAssets/2.4A/table.json');
		this.load.atlas('Level24A_pot',basePath+'assets/gradeAssets/2.4A/gameAssets/pot.png' ,basePath+'assets/gradeAssets/2.4A/pot.json');
		this.load.atlas('Level24A_level2Scale1',basePath+'assets/gradeAssets/2.4A/gameAssets/level2Scale1.png' ,basePath+'assets/gradeAssets/2.4A/level2Scale1.json');
		this.load.atlas('Level24A_level2Scale2',basePath+'assets/gradeAssets/2.4A/gameAssets/level2Scale2.png' ,basePath+'assets/gradeAssets/2.4A/level2Scale2.json');
		this.load.atlas('Level24A_level2Scale3',basePath+'assets/gradeAssets/2.4A/gameAssets/level2Scale3.png' ,basePath+'assets/gradeAssets/2.4A/level2Scale3.json');
		this.load.atlas('Level24A_tree',basePath+'assets/gradeAssets/2.4A/gameAssets/tree.png' ,basePath+'assets/gradeAssets/2.4A/tree.json');
		this.load.atlas('Level24A_tape4',basePath+'assets/gradeAssets/2.4A/commonAssets/tape4.png' ,basePath+'assets/gradeAssets/2.4A/tape4.json');
		this.load.atlas('Level24A_car',basePath+'assets/gradeAssets/2.4A/gameAssets/car.png' ,basePath+'assets/gradeAssets/2.4A/car.json');
		this.load.atlas('Level24A_carpet',basePath+'assets/gradeAssets/2.4A/gameAssets/carpet.png' ,basePath+'assets/gradeAssets/2.4A/carpet.json');
		this.load.atlas('Level24B_birds1',basePath+'assets/gradeAssets/2.4A/gameAssets/birds1.png' ,basePath+'assets/gradeAssets/2.4A/birds1.json');
		this.load.atlas('Level24B_animals',basePath+'assets/gradeAssets/2.4A/gameAssets/animals.png' ,basePath+'assets/gradeAssets/2.4A/animals.json');
		this.load.atlas('Level24B_snake',basePath+'assets/gradeAssets/2.4A/gameAssets/snake.png' ,basePath+'assets/gradeAssets/2.4A/snake.json');
		this.load.atlas('Level24B_tables',basePath+'assets/gradeAssets/2.4A/gameAssets/tables.png' ,basePath+'assets/gradeAssets/2.4A/tables.json');
		this.load.atlas('Level24B_buildings',basePath+'assets/gradeAssets/2.4A/gameAssets/buildings.png' ,basePath+'assets/gradeAssets/2.4A/buildings.json');
		this.load.atlas('Level24B_table3',basePath+'assets/gradeAssets/2.4A/gameAssets/table3.png' ,basePath+'assets/gradeAssets/2.4A/table3.json');
		this.load.atlas('Level24B_gate',basePath+'assets/gradeAssets/2.4A/gameAssets/gate.png' ,basePath+'assets/gradeAssets/2.4A/gate.json');
		this.load.atlas('DisplayScale',basePath+'assets/newAssets/DisplayScale.png' ,basePath+'assets/newAssets/DisplayScale.json');

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
		this.load.image('Level24A_txtbox', basePath+'assets/gradeAssets/2.4A/commonAssets/box.png');
		this.load.image('bottomBar', basePath+'assets/commonAssets/bottomBar.png');
		this.load.atlas('game24b_popup2', basePath+'assets/newAssets/K2.png', basePath+'assets/newAssets/K2.json');
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
		this.state.start('grade2_4Blevel1');
	},
};
