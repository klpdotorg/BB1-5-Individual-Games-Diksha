Game.preloader_sg12_1_3=function(game){
	this.preloadBar=null;
};

Game.preloader_sg12_1_3.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg12.1.3)
		this.load.image('1_1_1_White_box',basePath+'assets/gradeAssets/sg12.1.3/Bg/White_box.png');
		this.load.atlas('Shape1',basePath+'assets/gradeAssets/sg12.1.3/Shape1/Shape1.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape1/Shape1.json');
		this.load.atlas('Shape2',basePath+'assets/gradeAssets/sg12.1.3/Shape2/Shape2.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape2/Shape2.json');
		this.load.atlas('Shape3',basePath+'assets/gradeAssets/sg12.1.3/Shape3/Shape3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape3/Shape3.json');
		this.load.atlas('Shape4',basePath+'assets/gradeAssets/sg12.1.3/Shape4/Shape4.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape4/Shape4.json');
		this.load.atlas('Shape5',basePath+'assets/gradeAssets/sg12.1.3/Shape5/Shape5.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape5/Shape5.json');
		this.load.atlas('Shape6',basePath+'assets/gradeAssets/sg12.1.3/Shape6/Shape6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape6/Shape6.json');
		this.load.atlas('Shape7',basePath+'assets/gradeAssets/sg12.1.3/Shape7/Shape7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape7/Shape7.json');
		this.load.atlas('Shape8',basePath+'assets/gradeAssets/sg12.1.3/Shape8/Shape8.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape8/Shape8.json');
		this.load.atlas('Shape9',basePath+'assets/gradeAssets/sg12.1.3/Shape9/Shape9.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape9/Shape9.json');
		this.load.atlas('Shape10',basePath+'assets/gradeAssets/sg12.1.3/Shape10/Shape10.png',basePath+'assets/gradeAssets/sg12.1.3/Shape10/Shape10.json');
		this.load.atlas('Shape11',basePath+'assets/gradeAssets/sg12.1.3/Shape11/Shape11.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape11/Shape11.json');
		this.load.atlas('Shape12',basePath+'assets/gradeAssets/sg12.1.3/Shape12/Shape12.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape12/Shape12.json');
		this.load.atlas('Shape1new',basePath+'assets/gradeAssets/sg12.1.3/Shape1/Shape1new.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape1/Shape1new.json');
		this.load.atlas('Shape2new',basePath+'assets/gradeAssets/sg12.1.3/Shape2/Shape2new.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape2/Shape2new.json');
		this.load.atlas('Shape3new',basePath+'assets/gradeAssets/sg12.1.3/Shape3/Shape3new.png',basePath+'assets/gradeAssets/sg12.1.3/Shape3/Shape3new.json');
		this.load.atlas('Shape4new',basePath+'assets/gradeAssets/sg12.1.3/Shape4/Shape4new.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape4/Shape4new.json');
		this.load.atlas('Shape5new',basePath+'assets/gradeAssets/sg12.1.3/Shape5/Shape5new.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape5/Shape5new.json');
		this.load.atlas('Shape6new',basePath+'assets/gradeAssets/sg12.1.3/Shape6/Shape6new.png',basePath+'assets/gradeAssets/sg12.1.3/Shape6/Shape6new.json');
		this.load.atlas('Shape7new',basePath+'assets/gradeAssets/sg12.1.3/Shape7/Shape7new.png',basePath+'assets/gradeAssets/sg12.1.3/Shape7/Shape7new.json');
		this.load.atlas('Shape1_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option1.json');
		this.load.atlas('Shape1_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option2.json');
		this.load.atlas('Shape1_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option3.json');
		this.load.atlas('Shape1_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option4.json');
		this.load.atlas('Shape1_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option5.json');
		this.load.atlas('Shape1_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option6.json');
		this.load.atlas('Shape1_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape1/option7.json');
		this.load.atlas('Shape2_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape2/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape2/option1.json');
		this.load.atlas('Shape2_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape2/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape2/option2.json');
		this.load.atlas('Shape2_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape2/option3.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape2/option3.json');
		this.load.atlas('Shape2_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape2/option4.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape2/option4.json');
		this.load.atlas('Shape2_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape2/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape2/option5.json');
		this.load.atlas('Shape2_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape2/option6.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape2/option6.json');
		this.load.atlas('Shape2_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape2/option7.png' ,basePath+'assets/gradeAssets/sg12.1.3/Shape2/option7.json');
		this.load.atlas('Shape3_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option1.json');
		this.load.atlas('Shape3_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option2.json');
		this.load.atlas('Shape3_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option3.json');
		this.load.atlas('Shape3_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option4.json');
		this.load.atlas('Shape3_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option5.json');
		this.load.atlas('Shape3_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option6.json');
		this.load.atlas('Shape3_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape3/option7.json');
		this.load.atlas('Shape4_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option1.json');
		this.load.atlas('Shape4_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option2.json');
		this.load.atlas('Shape4_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option3.json');
		this.load.atlas('Shape4_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option4.json');
		this.load.atlas('Shape4_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option5.json');
		this.load.atlas('Shape4_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option6.json');
		this.load.atlas('Shape4_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape4/option7.json');
		this.load.atlas('Shape5_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option1.json');
		this.load.atlas('Shape5_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option2.json');
		this.load.atlas('Shape5_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option3.json');
		this.load.atlas('Shape5_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option4.json');
		this.load.atlas('Shape5_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option5.json');
		this.load.atlas('Shape5_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option6.json');
		this.load.atlas('Shape5_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape5/option7.json');
		this.load.atlas('Shape6_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option1.json');
		this.load.atlas('Shape6_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option2.json');
		this.load.atlas('Shape6_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option3.json');
		this.load.atlas('Shape6_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option4.json');
		this.load.atlas('Shape6_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option5.json');
		this.load.atlas('Shape6_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option6.json');
		this.load.atlas('Shape6_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape6/option7.json');
		this.load.atlas('Shape7_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option1.json');
		this.load.atlas('Shape7_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option2.json');
		this.load.atlas('Shape7_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option3.json');
		this.load.atlas('Shape7_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option4.json');
		this.load.atlas('Shape7_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option5.json');
		this.load.atlas('Shape7_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option6.json');
		this.load.atlas('Shape7_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape7/option7.json');
		this.load.atlas('Shape8_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option1.json');
		this.load.atlas('Shape8_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option2.json');
		this.load.atlas('Shape8_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option3.json');
		this.load.atlas('Shape8_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option4.json');
		this.load.atlas('Shape8_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option5.json');
		this.load.atlas('Shape8_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option6.json');
		this.load.atlas('Shape8_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape8/option7.json');
		this.load.atlas('Shape9_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option1.json');
		this.load.atlas('Shape9_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option2.json');
		this.load.atlas('Shape9_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option3.json');
		this.load.atlas('Shape9_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option4.json');
		this.load.atlas('Shape9_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option5.json');
		this.load.atlas('Shape9_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option6.json');
		this.load.atlas('Shape9_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape9/option7.json');
		this.load.atlas('Shape10_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option1.json');
		this.load.atlas('Shape10_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option2.json');
		this.load.atlas('Shape10_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option3.json');
		this.load.atlas('Shape10_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option4.json');
		this.load.atlas('Shape10_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option5.json');
		this.load.atlas('Shape10_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option6.json');
		this.load.atlas('Shape10_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape10/option7.json');
		this.load.atlas('Shape11_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option1.json');
		this.load.atlas('Shape11_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option2.json');
		this.load.atlas('Shape11_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option3.json');
		this.load.atlas('Shape11_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option4.json');
		this.load.atlas('Shape11_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option5.json');
		this.load.atlas('Shape11_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option6.json');
		this.load.atlas('Shape11_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape11/option7.json');
		this.load.atlas('Shape12_option1',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option1.png',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option1.json');
		this.load.atlas('Shape12_option2',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option2.png',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option2.json');
		this.load.atlas('Shape12_option3',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option3.png',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option3.json');
		this.load.atlas('Shape12_option4',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option4.png',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option4.json');
		this.load.atlas('Shape12_option5',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option5.png',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option5.json');
		this.load.atlas('Shape12_option6',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option6.png',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option6.json');
		this.load.atlas('Shape12_option7',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option7.png',basePath+'assets/gradeAssets/sg12.1.3/Shape12/option7.json');

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
		this.state.start('sg12_1_3level1');
	},
};
