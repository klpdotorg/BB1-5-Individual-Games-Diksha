Game.preloader_unity_1_7=function(game){
	this.preloadBar=null;
};

Game.preloader_unity_1_7.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (unity/1.7)
		this.load.image('Game17_background',basePath+'assets/gradeAssets/unity/1.7/bg.png');
		this.load.image('Game17_TopBar', basePath+'assets/gradeAssets/unity/1.7/Topbar.png');
		this.load.image('Game17_dottedBox', basePath+'assets/gradeAssets/unity/1.7/dottedBox.png');
		this.load.atlas('Game17_tick',basePath+'assets/gradeAssets/unity/1.7/tick.png' ,basePath+'assets/gradeAssets/unity/1.7/tick.json');
		this.load.image('Game17_celeb', basePath+'assets/gradeAssets/unity/1.7/c.png');
		this.load.atlas('Game17_backbtn',basePath+'assets/gradeAssets/unity/1.7/backbtn.png' ,basePath+'assets/gradeAssets/unity/1.7/backbtn.json');
		this.load.atlas('Game17_speaker',basePath+'assets/gradeAssets/unity/1.7/speaker.png' ,basePath+'assets/gradeAssets/unity/1.7/speaker.json');
		this.load.atlas('Game17_starAnim',basePath+'assets/gradeAssets/unity/1.7/starAnim.png',basePath+'assets/gradeAssets/unity/1.7/starAnim.json');
		this.load.atlas('Game17_btn',basePath+'assets/gradeAssets/unity/1.7/btn.png',basePath+'assets/gradeAssets/unity/1.7/btn.json');
		this.load.image('Game17_tittleBar', basePath+'assets/gradeAssets/unity/1.7/tittleBar.png');
		this.load.atlas('Game17_replay', basePath+'assets/gradeAssets/unity/1.7/reply.png', basePath+'assets/gradeAssets/unity/1.7/reply.json');
		this.load.image('Game17_zero', basePath+'assets/gradeAssets/unity/1.7/0.png');
		this.load.image('Game17_one', basePath+'assets/gradeAssets/unity/1.7/1.png');
		this.load.image('Game17_two', basePath+'assets/gradeAssets/unity/1.7/2.png');
		this.load.image('Game17_three', basePath+'assets/gradeAssets/unity/1.7/3.png');
		this.load.image('Game17_four', basePath+'assets/gradeAssets/unity/1.7/4.png');
		this.load.image('Game17_five', basePath+'assets/gradeAssets/unity/1.7/5.png');
		this.load.image('Game17_six', basePath+'assets/gradeAssets/unity/1.7/6.png');
		this.load.image('Game17_seven', basePath+'assets/gradeAssets/unity/1.7/7.png');
		this.load.image('Game17_eight', basePath+'assets/gradeAssets/unity/1.7/8.png');
		this.load.image('Game17_nine', basePath+'assets/gradeAssets/unity/1.7/9.png');
		this.load.image('Game17_bg', basePath+'assets/gradeAssets/unity/1.7/bg17.png');
		this.load.atlas('Game17_fish', basePath+'assets/gradeAssets/unity/1.7/fish.png', basePath+'assets/gradeAssets/unity/1.7/fish.json');
		this.load.atlas('Game17_fishbubble', basePath+'assets/gradeAssets/unity/1.7/fishbubble.png', basePath+'assets/gradeAssets/unity/1.7/fishbubble.json');
		this.load.image('Game17_bluebg',basePath+'assets/gradeAssets/unity/1.7/bluebg.png');
		this.load.image('Game17_maskbg',basePath+'assets/gradeAssets/unity/1.7/maskbg.png');
		this.load.image('Game17_Arrow_Btn', basePath+'assets/gradeAssets/unity/1.7/Arrow_Btn.png');
		this.load.image('Game17_timer', basePath+'assets/gradeAssets/unity/1.7/timer.png');

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
		this.state.start('unity1_7level1');
	},
};
