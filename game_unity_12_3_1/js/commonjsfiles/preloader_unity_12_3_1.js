Game.preloader_unity_12_3_1=function(game){
	this.preloadBar=null;
};

Game.preloader_unity_12_3_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (unity/12.3.1)
		this.load.image('Unity12_3_1BG_01', basePath+'assets/gradeAssets/12.3.1/BG_01.png');
		this.load.image('Unity12_3_1practice',basePath+'assets/gradeAssets/12.3.1/practice.png');
		this.load.image('Unity12_3_1topic',basePath+'assets/gradeAssets/12.3.1/topic.png');
		this.load.image('Unity12_3_1Egg_box', basePath+'assets/gradeAssets/12.3.1/Egg_box.png');
		this.load.image('Unity12_3_1Number_box', basePath+'assets/gradeAssets/12.3.1/Number_box.png');
		this.load.image('Unity12_3_1Multiplicationsign', basePath+'assets/gradeAssets/12.3.1/multiplicationsign.png');
		this.load.image('Unity12_3_1EqualSymbol', basePath+'assets/gradeAssets/12.3.1/equalSymbol.png');
		this.load.atlas('Unity12_3_1Tick', basePath+'assets/gradeAssets/12.3.1/tick.png', basePath+'assets/gradeAssets/12.3.1/tick.json');
		this.load.atlas('Unity12_3_1Egg', basePath+'assets/gradeAssets/12.3.1/Egg.png', basePath+'assets/gradeAssets/12.3.1/Egg.json');
		this.load.atlas('Unity12_3_1SmallEgg', basePath+'assets/gradeAssets/12.3.1/SmallEgg.png', basePath+'assets/gradeAssets/12.3.1/SmallEgg.json');
		this.load.atlas('Unity12_3_1Eraser', basePath+'assets/gradeAssets/12.3.1/eraser.png', basePath+'assets/gradeAssets/12.3.1/eraser.json');
		this.load.atlas('Unity12_3_1oneGlow', basePath+'assets/gradeAssets/12.3.1/oneGlow.png', basePath+'assets/gradeAssets/12.3.1/oneGlow.json');
		this.load.atlas('Unity12_3_1twoGlow', basePath+'assets/gradeAssets/12.3.1/twoGlow.png', basePath+'assets/gradeAssets/12.3.1/twoGlow.json');
		this.load.atlas('Unity12_3_1threeGlow', basePath+'assets/gradeAssets/12.3.1/threeGlow.png', basePath+'assets/gradeAssets/12.3.1/threeGlow.json');
		this.load.atlas('Unity12_3_1fourGlow', basePath+'assets/gradeAssets/12.3.1/fourGlow.png', basePath+'assets/gradeAssets/12.3.1/fourGlow.json');
		this.load.atlas('Unity12_3_1fiveGlow', basePath+'assets/gradeAssets/12.3.1/fiveGlow.png', basePath+'assets/gradeAssets/12.3.1/fiveGlow.json');
		this.load.atlas('Unity12_3_1bulb', basePath+'assets/gradeAssets/12.3.1/bulb.png', basePath+'assets/gradeAssets/12.3.1/bulb.json');
		this.load.atlas('Unity12_3_1Numbers', basePath+'assets/gradeAssets/12.3.1/Numbers.png', basePath+'assets/gradeAssets/12.3.1/Numbers.json');
		this.load.atlas('Unity12_3_1Txtbox', basePath+'assets/gradeAssets/12.3.1/txtbox.png', basePath+'assets/gradeAssets/12.3.1/txtbox.json');
		this.load.atlas('Unity12_3_1greenNumbers', basePath+'assets/gradeAssets/12.3.1/greenNumbers.png', basePath+'assets/gradeAssets/12.3.1/greenNumbers.json');
		this.load.atlas('Unity12_3_1greenNumbers1', basePath+'assets/gradeAssets/12.3.1/greenNumbers1.png', basePath+'assets/gradeAssets/12.3.1/greenNumbers1.json');
		this.load.image('Unity12_3_2BG_01', basePath+'assets/gradeAssets/12.3.1/BG_01.png');
		this.load.image('Unity12_3_2practice',basePath+'assets/gradeAssets/12.3.1/practice.png');
		this.load.image('Unity12_3_2topic',basePath+'assets/gradeAssets/12.3.1/topic.png');
		this.load.image('Unity12_3_2Egg_box', basePath+'assets/gradeAssets/12.3.1/Egg_box.png');
		this.load.image('Unity12_3_2Number_box', basePath+'assets/gradeAssets/12.3.1/Number_box.png');
		this.load.image('Unity12_3_2Multiplicationsign', basePath+'assets/gradeAssets/12.3.1/multiplicationsign.png');
		this.load.image('Unity12_3_2EqualSymbol', basePath+'assets/gradeAssets/12.3.1/equalSymbol.png');
		this.load.atlas('Unity12_3_2Tick', basePath+'assets/gradeAssets/12.3.1/tick.png', basePath+'assets/gradeAssets/12.3.1/tick.json');
		this.load.atlas('Unity12_3_2Egg', basePath+'assets/gradeAssets/12.3.1/Egg.png', basePath+'assets/gradeAssets/12.3.1/Egg.json');
		this.load.atlas('Unity12_3_2SmallEgg', basePath+'assets/gradeAssets/12.3.1/SmallEgg.png', basePath+'assets/gradeAssets/12.3.1/SmallEgg.json');
		this.load.atlas('Unity12_3_2Eraser', basePath+'assets/gradeAssets/12.3.1/eraser.png', basePath+'assets/gradeAssets/12.3.1/eraser.json');
		this.load.atlas('Unity12_3_2oneGlow', basePath+'assets/gradeAssets/12.3.1/oneGlow.png', basePath+'assets/gradeAssets/12.3.1/oneGlow.json');
		this.load.atlas('Unity12_3_2twoGlow', basePath+'assets/gradeAssets/12.3.1/twoGlow.png', basePath+'assets/gradeAssets/12.3.1/twoGlow.json');
		this.load.atlas('Unity12_3_2threeGlow', basePath+'assets/gradeAssets/12.3.1/threeGlow.png', basePath+'assets/gradeAssets/12.3.1/threeGlow.json');
		this.load.atlas('Unity12_3_2bulbGlow', basePath+'assets/gradeAssets/12.3.1/bulb.png', basePath+'assets/gradeAssets/12.3.1/bulb.json');
		this.load.atlas('Unity12_3_2SixGlow', basePath+'assets/gradeAssets/12.3.1/6.png', basePath+'assets/gradeAssets/12.3.1/6.json');
		this.load.atlas('Unity12_3_2SevenGlow', basePath+'assets/gradeAssets/12.3.1/7.png', basePath+'assets/gradeAssets/12.3.1/7.json');
		this.load.atlas('Unity12_3_2Numbers', basePath+'assets/gradeAssets/12.3.1/Numbers.png', basePath+'assets/gradeAssets/12.3.1/Numbers.json');
		this.load.atlas('Unity12_3_2Txtbox', basePath+'assets/gradeAssets/12.3.1/txtbox.png', basePath+'assets/gradeAssets/12.3.1/txtbox.json');
		this.load.atlas('Unity12_3_2greenNumbers', basePath+'assets/gradeAssets/12.3.1/greenNumbers.png', basePath+'assets/gradeAssets/12.3.1/greenNumbers.json');
		this.load.atlas('Unity12_3_2greenNumbers1', basePath+'assets/gradeAssets/12.3.1/greenNumbers1.png', basePath+'assets/gradeAssets/12.3.1/greenNumbers1.json');
		this.load.atlas('Unity12_3_2glow', basePath+'assets/gradeAssets/12.3.1/glow.png', basePath+'assets/gradeAssets/12.3.1/glow.json');
		this.load.image('Unity12_3_3BG_01', basePath+'assets/gradeAssets/12.3.1/BG_01.png');
		this.load.image('Unity12_3_3practice',basePath+'assets/gradeAssets/12.3.1/practice.png');
		this.load.image('Unity12_3_3topic',basePath+'assets/gradeAssets/12.3.1/topic.png');
		this.load.image('Unity12_3_3Egg_box', basePath+'assets/gradeAssets/12.3.1/Egg_box.png');
		this.load.image('Unity12_3_3Number_box', basePath+'assets/gradeAssets/12.3.1/Number_box.png');
		this.load.image('Unity12_3_3Multiplicationsign', basePath+'assets/gradeAssets/12.3.1/multiplicationsign.png');
		this.load.image('Unity12_3_3EqualSymbol', basePath+'assets/gradeAssets/12.3.1/equalSymbol.png');
		this.load.atlas('Unity12_3_3Tick', basePath+'assets/gradeAssets/12.3.1/tick.png', basePath+'assets/gradeAssets/12.3.1/tick.json');
		this.load.atlas('Unity12_3_3Egg', basePath+'assets/gradeAssets/12.3.1/Egg.png', basePath+'assets/gradeAssets/12.3.1/Egg.json');
		this.load.atlas('Unity12_3_3SmallEgg', basePath+'assets/gradeAssets/12.3.1/SmallEgg.png', basePath+'assets/gradeAssets/12.3.1/SmallEgg.json');
		this.load.atlas('Unity12_3_3Eraser', basePath+'assets/gradeAssets/12.3.1/eraser.png', basePath+'assets/gradeAssets/12.3.1/eraser.json');
		this.load.atlas('Unity12_3_3oneGlow', basePath+'assets/gradeAssets/12.3.1/oneGlow.png', basePath+'assets/gradeAssets/12.3.1/oneGlow.json');
		this.load.atlas('Unity12_3_3twoGlow', basePath+'assets/gradeAssets/12.3.1/twoGlow.png', basePath+'assets/gradeAssets/12.3.1/twoGlow.json');
		this.load.atlas('Unity12_3_3threeGlow', basePath+'assets/gradeAssets/12.3.1/threeGlow.png', basePath+'assets/gradeAssets/12.3.1/threeGlow.json');
		this.load.atlas('Unity12_3_3bulbGlow', basePath+'assets/gradeAssets/12.3.1/bulb.png', basePath+'assets/gradeAssets/12.3.1/bulb.json');
		this.load.atlas('Unity12_3_3eightGlow', basePath+'assets/gradeAssets/12.3.1/8.png', basePath+'assets/gradeAssets/12.3.1/8.json');
		this.load.atlas('Unity12_3_3nineGlow', basePath+'assets/gradeAssets/12.3.1/9.png', basePath+'assets/gradeAssets/12.3.1/9.json');
		this.load.atlas('Unity12_3_3Numbers', basePath+'assets/gradeAssets/12.3.1/Numbers.png', basePath+'assets/gradeAssets/12.3.1/Numbers.json');
		this.load.atlas('Unity12_3_3Txtbox', basePath+'assets/gradeAssets/12.3.1/txtbox.png', basePath+'assets/gradeAssets/12.3.1/txtbox.json');
		this.load.atlas('Unity12_3_3greenNumbers', basePath+'assets/gradeAssets/12.3.1/greenNumbers.png', basePath+'assets/gradeAssets/12.3.1/greenNumbers.json');
		this.load.atlas('Unity12_3_3greenNumbers1', basePath+'assets/gradeAssets/12.3.1/greenNumbers1.png', basePath+'assets/gradeAssets/12.3.1/greenNumbers1.json');

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
		this.load.atlas('unity1_1starAnim', basePath+'assets/commonAssets/starAnim1.png', basePath+'assets/commonAssets/starAnim1.json');
		this.load.atlas('unity1_1CommonSpeakerBtn', basePath+'assets/commonAssets/grade11_speaker.png', basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.image('Unity12_3_1navBar', basePath+'assets/commonAssets/topbar.png');
		this.load.image('Unity12_3_1timebg', basePath+'assets/commonAssets/timebg.png');
		this.load.atlas('Unity12_1Txtbox', basePath+'assets/gradeAssets/12.1/txtbox.png', basePath+'assets/gradeAssets/12.1/txtbox.json');
		this.load.atlas('tick', basePath+'assets/gradeAssets/4.3A/commonAssets/tick.png', basePath+'assets/gradeAssets/4.3A/tick.json');



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
		this.state.start('unity12_3_1level1');
	},
};
