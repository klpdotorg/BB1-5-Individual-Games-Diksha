Game.preloader_4_3C=function(game){
	this.preloadBar=null;
};

Game.preloader_4_3C.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (4.3C)
		this.load.image('Level43A_bg1',basePath+'assets/gradeAssets/4.3A/commonAssets/BG.png');
		this.load.image('Level43A_cloud',basePath+'assets/gradeAssets/4.3A/commonAssets/cloud.png');
		this.load.image('Level43A_bg3',basePath+'assets/gradeAssets/4.3A/commonAssets/bg3.png');
		this.load.atlas('tick',basePath+'assets/gradeAssets/4.3A/commonAssets/tick.png' ,basePath+'assets/gradeAssets/4.3A/tick.json');
		this.load.atlas('eraser',basePath+'assets/gradeAssets/4.3A/commonAssets/eraser.png' ,basePath+'assets/gradeAssets/4.3A/eraser.json');
		this.load.atlas('Level43A_numbg',basePath+'assets/gradeAssets/4.3A/commonAssets/numbg.png' ,basePath+'assets/gradeAssets/4.3A/numbg.json');
		this.load.atlas('Level43A_rightBtn',basePath+'assets/gradeAssets/4.3A/commonAssets/rightBtn.png' ,basePath+'assets/gradeAssets/4.3A/rightBtn.json');
		this.load.atlas('Level43A_wrongBtn',basePath+'assets/gradeAssets/4.3A/commonAssets/wrongBtn.png' ,basePath+'assets/gradeAssets/4.3A/wrongBtn.json');
		this.load.atlas('Level43A_tickMark',basePath+'assets/gradeAssets/4.3A/gameAssets/tickMark.png' ,basePath+'assets/gradeAssets/4.3A/tickMark.json');
		this.load.atlas('Level43A_crossMark',basePath+'assets/gradeAssets/4.3A/gameAssets/crossMark.png' ,basePath+'assets/gradeAssets/4.3A/crossMark.json');
		this.load.image('Level43A_arrow',basePath+'assets/gradeAssets/4.3A/commonAssets/Arw.png');
		this.load.atlas('Level43A_incBox',basePath+'assets/gradeAssets/4.3A/gameAssets/box1.png' ,basePath+'assets/gradeAssets/4.3A/box1.json');
		this.load.atlas('Level43A_AnswerBox',basePath+'assets/gradeAssets/4.3A/gameAssets/box2.png' ,basePath+'assets/gradeAssets/4.3A/box2.json');
		this.load.atlas('Level43A_50Q',basePath+'assets/gradeAssets/4.3A/gameAssets/50mlQ.png' ,basePath+'assets/gradeAssets/4.3A/50mlQ.json');
		this.load.atlas('Level43A_100Q',basePath+'assets/gradeAssets/4.3A/gameAssets/100mlQ.png' ,basePath+'assets/gradeAssets/4.3A/100mlQ.json');
		this.load.atlas('Level43A_200Q',basePath+'assets/gradeAssets/4.3A/gameAssets/200mlQ.png' ,basePath+'assets/gradeAssets/4.3A/200mlQ.json');
		this.load.atlas('Level43A_250Q',basePath+'assets/gradeAssets/4.3A/gameAssets/250mlQ.png' ,basePath+'assets/gradeAssets/4.3A/250mlQ.json');
		this.load.atlas('Level43A_500Q',basePath+'assets/gradeAssets/4.3A/gameAssets/500mlQ.png' ,basePath+'assets/gradeAssets/4.3A/500mlQ.json');
		this.load.atlas('Level43A_200A',basePath+'assets/gradeAssets/4.3A/gameAssets/A 200.png' ,basePath+'assets/gradeAssets/4.3A/A 200.json');
		this.load.atlas('Level43A_250A',basePath+'assets/gradeAssets/4.3A/gameAssets/A 250.png' ,basePath+'assets/gradeAssets/4.3A/A 250.json');
		this.load.atlas('Level43A_500A',basePath+'assets/gradeAssets/4.3A/gameAssets/A 500.png' ,basePath+'assets/gradeAssets/4.3A/A 500.json');
		this.load.atlas('Level43A_1000A',basePath+'assets/gradeAssets/4.3A/gameAssets/A 1000.png' ,basePath+'assets/gradeAssets/4.3A/A 1000.json');
		this.load.atlas('Level43A_equation',basePath+'assets/gradeAssets/4.3A/gameAssets/equation.png' ,basePath+'assets/gradeAssets/4.3A/equation.json');
		this.load.atlas('Level43A_bottle',basePath+'assets/gradeAssets/4.3A/gameAssets/bottleB.png' ,basePath+'assets/gradeAssets/4.3A/bottleB.json');
		this.load.atlas('Level43A_bottle2',basePath+'assets/gradeAssets/4.3A/gameAssets/bottle2B.png' ,basePath+'assets/gradeAssets/4.3A/bottle2B.json');
		this.load.atlas('Level43A_bottle3',basePath+'assets/gradeAssets/4.3A/gameAssets/bottle3B.png' ,basePath+'assets/gradeAssets/4.3A/bottle3B.json');
		this.load.atlas('Level43A_cup',basePath+'assets/gradeAssets/4.3A/gameAssets/cupB.png' ,basePath+'assets/gradeAssets/4.3A/cupB.json');
		this.load.atlas('Level43A_glass',basePath+'assets/gradeAssets/4.3A/gameAssets/glassB.png' ,basePath+'assets/gradeAssets/4.3A/glassB.json');
		this.load.atlas('Level43A_jug',basePath+'assets/gradeAssets/4.3A/gameAssets/jugB.png' ,basePath+'assets/gradeAssets/4.3A/jugB.json');
		this.load.atlas('Level43A_jug2',basePath+'assets/gradeAssets/4.3A/gameAssets/jug2B.png' ,basePath+'assets/gradeAssets/4.3A/jug2B.json');
		this.load.image('Level42C_redmark',basePath+'assets/gradeAssets/4.2C/redmark.png');
		this.load.atlas('Level43A_equationB',basePath+'assets/gradeAssets/4.3A/gameAssets/equationB.png' ,basePath+'assets/gradeAssets/4.3A/equationB.json');
		this.load.atlas('Level43A_50QC',basePath+'assets/gradeAssets/4.3A/gameAssets/50mlQC.png' ,basePath+'assets/gradeAssets/4.3A/50mlQC.json');
		this.load.atlas('Level43A_100QC',basePath+'assets/gradeAssets/4.3A/gameAssets/100mlQC.png' ,basePath+'assets/gradeAssets/4.3A/100mlQC.json');
		this.load.atlas('Level43A_200QC',basePath+'assets/gradeAssets/4.3A/gameAssets/200mlQC.png' ,basePath+'assets/gradeAssets/4.3A/200mlQC.json');
		this.load.atlas('Level43A_250QC',basePath+'assets/gradeAssets/4.3A/gameAssets/250mlQC.png' ,basePath+'assets/gradeAssets/4.3A/250mlQC.json');
		this.load.atlas('Level43A_500QC',basePath+'assets/gradeAssets/4.3A/gameAssets/500mlQC.png' ,basePath+'assets/gradeAssets/4.3A/500mlQC.json');
		this.load.atlas('Level43A_1000AC',basePath+'assets/gradeAssets/4.3A/gameAssets/1000ltrC.png' ,basePath+'assets/gradeAssets/4.3A/1000ltrC.json');
		this.load.atlas('Level43A_1000QC',basePath+'assets/gradeAssets/4.3A/gameAssets/1000mlQD.png' ,basePath+'assets/gradeAssets/4.3A/1000mlQD.json');
		this.load.atlas('Level43A_jugC',basePath+'assets/gradeAssets/4.3A/gameAssets/2lJug.png' ,basePath+'assets/gradeAssets/4.3A/2lJug.json');
		this.load.atlas('Level43A_arrowC',basePath+'assets/gradeAssets/4.3A/gameAssets/arrowC.png' ,basePath+'assets/gradeAssets/4.3A/arrowC.json');
		this.load.atlas('Level43A_glow',basePath+'assets/gradeAssets/4.3A/gameAssets/glowC.png' ,basePath+'assets/gradeAssets/4.3A/glowC.json');

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
		this.load.atlas('Level43A_numbg', basePath+'assets/gradeAssets/4.3A/commonAssets/numbg.png', basePath+'assets/gradeAssets/4.3A/numbg.json');
		this.load.image('Level42A_Topbar', basePath+'assets/gradeAssets/4.2A/commonAssets/Topbar.png');
		this.load.image('Level42B_timer', basePath+'assets/gradeAssets/4.2A/commonAssets/timer.png');
		this.load.atlas('Level42A_CommonSpeakerBtn', basePath+'assets/gradeAssets/4.2A/commonAssets/speaker.png', basePath+'assets/gradeAssets/4.2A/speaker.json');
		this.load.atlas('tick', basePath+'assets/gradeAssets/4.3A/commonAssets/tick.png', basePath+'assets/gradeAssets/4.3A/tick.json');
		this.load.atlas('eraser', basePath+'assets/gradeAssets/4.3A/commonAssets/eraser.png', basePath+'assets/gradeAssets/4.3A/eraser.json');
		this.load.image('conversion', basePath+'assets/conversion/conversion.png');



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
		this.state.start('grade4_3Clevel1');
	},
};
