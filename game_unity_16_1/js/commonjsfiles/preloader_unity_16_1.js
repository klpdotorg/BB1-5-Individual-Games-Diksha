Game.preloader_unity_16_1=function(game){
	this.preloadBar=null;
};

Game.preloader_unity_16_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (unity/16.1)
		this.load.image('Unity12_3_3BG_01', basePath+'assets/gradeAssets/12.3.1/BG_01.png');
		this.load.image('grade161_bg1',basePath+'assets/gradeAssets/16.1/gameAssets/bg1.png');
		this.load.image('grade161_TopBar',basePath+'assets/commonAssets/topbar.png');
		this.load.image('grade161_timebg',basePath+'assets/commonAssets/timebg.png');
		this.load.image('grade162_bg1',basePath+'assets/gradeAssets/16.1/gameAssets/bg1.png');
		this.load.image('grade162_TopBar',basePath+'assets/commonAssets/topbar.png');
		this.load.image('grade162_timebg',basePath+'assets/commonAssets/timebg.png');
		this.load.image('grade163_bg1',basePath+'assets/gradeAssets/16.1/gameAssets/bg1.png');
		this.load.image('grade163_TopBar',basePath+'assets/commonAssets/topbar.png');
		this.load.image('grade163_timebg',basePath+'assets/commonAssets/timebg.png');
		this.load.image('grade161_numBG',basePath+'assets/gradeAssets/16.1/gameAssets/b2.png');
		this.load.image('grade161_divide', basePath+'assets/gradeAssets/16.1/gameAssets/divide.png');
		this.load.image('grade161_equalSymbol', basePath+'assets/gradeAssets/16.1/gameAssets/equalSymbol.png');
		this.load.atlas('grade16_1_Rabitidle',basePath+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.png' ,basePath+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.json');
		this.load.atlas('grade161_numberbox1',basePath+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,basePath+'assets/gradeAssets/16.1/txtbox.json');
		this.load.atlas('grade16_1_RabitAnim',basePath+'assets/gradeAssets/16.1/gameAssets/RabitAnim.png' ,basePath+'assets/gradeAssets/16.1/RabitAnim.json');
		this.load.atlas('grade161_greenNumbers',basePath+'assets/gradeAssets/16.1/gameAssets/greenNumbers.png' ,basePath+'assets/gradeAssets/16.1/greenNumbers.json');
		this.load.atlas('grade16_1_carrot',basePath+'assets/gradeAssets/16.1/gameAssets/carrot.png' ,basePath+'assets/gradeAssets/16.1/carrot.json');
		this.load.atlas('grade161_txtbox',basePath+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,basePath+'assets/gradeAssets/16.1/txtbox.json');
		this.load.atlas('grade161_tick',basePath+'assets/gradeAssets/16.1/gameAssets/tick.png' ,basePath+'assets/gradeAssets/16.1/tick.json');
		this.load.atlas('grade161_eraser',basePath+'assets/gradeAssets/16.1/gameAssets/eraser.png' ,basePath+'assets/gradeAssets/16.1/eraser.json');
		this.load.atlas('grade16_1_thinkingCloud',basePath+'assets/gradeAssets/16.1/gameAssets/cloud.png',basePath+'assets/gradeAssets/16.1/cloud.json');
		this.load.image('grade16_1_Box', basePath+'assets/gradeAssets/16.1/gameAssets/no box.png');
		this.load.atlas('grade161_box1',basePath+'assets/gradeAssets/16.1/gameAssets/ans box1.png',basePath+'assets/gradeAssets/16.1/gameAssets/ans box1.json');
		this.load.image('Level162_numBG',basePath+'assets/gradeAssets/16.1/gameAssets/b2.png');
		this.load.image('grade162_divide', basePath+'assets/gradeAssets/16.1/gameAssets/divide.png');
		this.load.atlas('grade162_1_Rabitidle',basePath+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.png' ,basePath+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.json');
		this.load.atlas('grade162_numberbox1',basePath+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,basePath+'assets/gradeAssets/16.1/txtbox.json');
		this.load.atlas('grade162_1_RabitAnim',basePath+'assets/gradeAssets/16.1/gameAssets/RabitAnim.png' ,basePath+'assets/gradeAssets/16.1/RabitAnim.json');
		this.load.atlas('grade162_greenNumbers',basePath+'assets/gradeAssets/16.1/gameAssets/greenNumbers.png' ,basePath+'assets/gradeAssets/16.1/greenNumbers.json');
		this.load.atlas('grade162_1_carrot',basePath+'assets/gradeAssets/16.1/gameAssets/carrot.png' ,basePath+'assets/gradeAssets/16.1/carrot.json');
		this.load.atlas('grade162_tick',basePath+'assets/gradeAssets/16.1/gameAssets/tick.png' ,basePath+'assets/gradeAssets/16.1/tick.json');
		this.load.atlas('grade162_eraser',basePath+'assets/gradeAssets/16.1/gameAssets/eraser.png' ,basePath+'assets/gradeAssets/16.1/eraser.json');
		this.load.atlas('grade162_1_thinkingCloud',basePath+'assets/gradeAssets/16.1/gameAssets/cloud.png',basePath+'assets/gradeAssets/16.1/cloud.json');
		this.load.image('grade162_1_Box', basePath+'assets/gradeAssets/16.1/gameAssets/no box.png');
		this.load.atlas('grade62_box1',basePath+'assets/gradeAssets/16.1/gameAssets/ans box1.png',basePath+'assets/gradeAssets/16.1/gameAssets/ans box1.json')
		this.load.atlas('grade62_box2',basePath+'assets/gradeAssets/16.1/gameAssets/ans box2.png',basePath+'assets/gradeAssets/16.1/gameAssets/ans box2.json')
		this.load.image('Level163_numBG',basePath+'assets/gradeAssets/16.1/gameAssets/b2.png');
		this.load.image('crate163', basePath+'assets/gradeAssets/16.1/gameAssets/101.png');
		this.load.atlas('box163',basePath+'assets/gradeAssets/16.1/gameAssets/box1.png' ,basePath+'assets/gradeAssets/16.1/box1.json');
		this.load.atlas('divide163',basePath+'assets/gradeAssets/16.1/gameAssets/0.0.png' ,basePath+'assets/gradeAssets/16.1/0.0.json');
		this.load.atlas('eggGroup163',basePath+'assets/gradeAssets/16.1/gameAssets/eg 1 to 10.png' ,basePath+'assets/gradeAssets/16.1/eg 1 to 10.json');
		this.load.atlas('eggGroup1163',basePath+'assets/gradeAssets/16.1/gameAssets/1 to 10 eg.png' ,basePath+'assets/gradeAssets/16.1/1 to 10 eg.json');
		this.load.atlas('grade163_box1',basePath+'assets/gradeAssets/16.1/gameAssets/text box.png' ,basePath+'assets/gradeAssets/16.1/text box.json');
		this.load.atlas('grade163_numberbox1',basePath+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,basePath+'assets/gradeAssets/16.1/txtbox.json');
		this.load.atlas('basket163',basePath+'assets/gradeAssets/16.1/gameAssets/1234.png' ,basePath+'assets/gradeAssets/16.1/1234.json');
		this.load.atlas('grade163_tick',basePath+'assets/gradeAssets/16.1/gameAssets/tick.png' ,basePath+'assets/gradeAssets/16.1/tick.json');
		this.load.atlas('grade163_eraser',basePath+'assets/gradeAssets/16.1/gameAssets/eraser.png' ,basePath+'assets/gradeAssets/16.1/eraser.json');
		this.load.image('grade163_1_Box', basePath+'assets/gradeAssets/16.1/gameAssets/no box.png');
		this.load.atlas('grade163_greenNumbers',basePath+'assets/gradeAssets/16.1/gameAssets/0 to 10.png' ,basePath+'assets/gradeAssets/16.1/0 to 10.json');

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
		this.load.atlas('Level42A_CommonSpeakerBtn', basePath+'assets/gradeAssets/4.2A/commonAssets/speaker.png', basePath+'assets/gradeAssets/4.2A/speaker.json');
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
		this.state.start('unity16_1level1');
	},
};
