Game.preloader_7_1=function(game){
	this.preloadBar=null;
};

Game.preloader_7_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (7.1)
		this.load.image('Level71_bg', basePath+'assets/gradeAssets/7.1/bg.png');
		this.load.image('Level71_backg', basePath+'assets/gradeAssets/7.1/backg.png');
		this.load.atlas('Level71_clock1', basePath+'assets/gradeAssets/7.1/clock1.png', basePath+'assets/gradeAssets/7.1/clock1.json');
		this.load.atlas('Level71_clock2', basePath+'assets/gradeAssets/7.1/clock2.png', basePath+'assets/gradeAssets/7.1/clock2.json');
		this.load.image('Level71_langBg', basePath+'assets/gradeAssets/7.1/langbg.png');
		this.load.atlas('Level71_CommonBackBtn', basePath+'assets/gradeAssets/7.1/backbtn.png', basePath+'assets/gradeAssets/7.1/backbtn.json');
		this.load.atlas('Level71_CommonSpeakerBtn', basePath+'assets/gradeAssets/7.1/speaker.png', basePath+'assets/gradeAssets/7.1/speaker.json');
		this.load.image('Level71_headingLine', basePath+'assets/gradeAssets/7.1/headingLine.png');
		this.load.atlas('Level71_starAnim', basePath+'assets/gradeAssets/7.1/starAnim.png', basePath+'assets/gradeAssets/7.1/starAnim.json');
		this.load.atlas('Level71_btn', basePath+'assets/gradeAssets/7.1/btn.png', basePath+'assets/gradeAssets/7.1/btn.json');
		this.load.image('Level71_tittleBar', basePath+'assets/gradeAssets/7.1/tittleBar.png');
		this.load.atlas('Level71_replay', basePath+'assets/gradeAssets/7.1/reply.png', basePath+'assets/gradeAssets/7.1/reply.json');
		this.load.atlas('Level71_numbers', basePath+'assets/gradeAssets/7.1/numbers.png', basePath+'assets/gradeAssets/7.1/numbers.json');
		this.load.atlas('Level71_n1', basePath+'assets/gradeAssets/7.1/one.png', basePath+'assets/gradeAssets/7.1/one.json');
		this.load.atlas('Level71_n2', basePath+'assets/gradeAssets/7.1/two.png', basePath+'assets/gradeAssets/7.1/two.json');
		this.load.atlas('Level71_n3', basePath+'assets/gradeAssets/7.1/three.png', basePath+'assets/gradeAssets/7.1/three.json');
		this.load.atlas('Level71_n4', basePath+'assets/gradeAssets/7.1/four.png', basePath+'assets/gradeAssets/7.1/four.json');
		this.load.atlas('Level71_n5', basePath+'assets/gradeAssets/7.1/five.png', basePath+'assets/gradeAssets/7.1/five.json');
		this.load.atlas('Level71_n6', basePath+'assets/gradeAssets/7.1/six.png', basePath+'assets/gradeAssets/7.1/six.json');
		this.load.atlas('Level71_n7', basePath+'assets/gradeAssets/7.1/seven.png', basePath+'assets/gradeAssets/7.1/seven.json');
		this.load.atlas('Level71_n8', basePath+'assets/gradeAssets/7.1/eight.png', basePath+'assets/gradeAssets/7.1/eight.json');
		this.load.atlas('Level71_n9', basePath+'assets/gradeAssets/7.1/nine.png', basePath+'assets/gradeAssets/7.1/nine.json');
		this.load.atlas('Level71_n10', basePath+'assets/gradeAssets/7.1/ten.png', basePath+'assets/gradeAssets/7.1/ten.json');
		this.load.atlas('Level71_n11', basePath+'assets/gradeAssets/7.1/eleven.png', basePath+'assets/gradeAssets/7.1/eleven.json');
		this.load.atlas('Level71_n12', basePath+'assets/gradeAssets/7.1/twelve.png', basePath+'assets/gradeAssets/7.1/twelve.json');
		this.load.atlas('Level71_rightmark', basePath+'assets/gradeAssets/7.1/rightmark.png', basePath+'assets/gradeAssets/7.1/rightmark.json');
		this.load.atlas('Level71_rightdir1', basePath+'assets/gradeAssets/7.1/rightdir1.png', basePath+'assets/gradeAssets/7.1/rightdir1.json');
		this.load.atlas('Level71_topdir', basePath+'assets/gradeAssets/7.1/topdir.png', basePath+'assets/gradeAssets/7.1/topdir.json');

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
		this.state.start('grade7_1level1');
	},
};
