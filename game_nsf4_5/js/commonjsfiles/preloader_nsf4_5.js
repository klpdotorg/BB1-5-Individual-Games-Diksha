Game.preloader_nsf4_5=function(game){
	this.preloadBar=null;
};

Game.preloader_nsf4_5.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (nsf4.5)
		this.load.image('F2_5backg',basePath+'assets/gradeAssets/nsf2.5/backg.png');
		this.load.image('nsf4_5_t1',basePath+'assets/gradeAssets/nsf4.5/number/1.png');
		this.load.image('nsf4_5_t2',basePath+'assets/gradeAssets/nsf4.5/number/2.png');
		this.load.image('nsf4_5_t3',basePath+'assets/gradeAssets/nsf4.5/number/3.png');
		this.load.image('nsf4_5_t4',basePath+'assets/gradeAssets/nsf4.5/number/4.png');
		this.load.image('nsf4_5_t5',basePath+'assets/gradeAssets/nsf4.5/number/5.png');
		this.load.image('nsf4_5_t6',basePath+'assets/gradeAssets/nsf4.5/number/6.png');
		this.load.image('nsf4_5_t7',basePath+'assets/gradeAssets/nsf4.5/number/7.png');
		this.load.image('nsf4_5_t8',basePath+'assets/gradeAssets/nsf4.5/number/8.png');
		this.load.image('nsf4_5_t9',basePath+'assets/gradeAssets/nsf4.5/number/9.png');
		this.load.image('nsf4_5_t10',basePath+'assets/gradeAssets/nsf4.5/number/10.png');
		this.load.image('nsf4_5_t11',basePath+'assets/gradeAssets/nsf4.5/number/11.png');
		this.load.image('nsf4_5_t12',basePath+'assets/gradeAssets/nsf4.5/number/12.png');
		this.load.image('nsf4_5_big3',basePath+'assets/gradeAssets/nsf4.5/num/w10004.png');
		this.load.image('nsf4_5_big4',basePath+'assets/gradeAssets/nsf4.5/num/w10005.png');
		this.load.image('nsf4_5_big22',basePath+'assets/gradeAssets/nsf4.5/num/r10001.png');
		this.load.image('nsf4_5_big23',basePath+'assets/gradeAssets/nsf4.5/num/r10002.png');
		this.load.image('nsf4_5_big1',basePath+'assets/gradeAssets/nsf4.5/num/q10007.png');
		this.load.image('nsf4_5_big2',basePath+'assets/gradeAssets/nsf4.5/num/q10008.png');
		this.load.image('nsf4_5_big5',basePath+'assets/gradeAssets/nsf4.5/num/q10003.png');
		this.load.image('nsf4_5_big6',basePath+'assets/gradeAssets/nsf4.5/num/q10004.png');
		this.load.image('nsf4_5_big7',basePath+'assets/gradeAssets/nsf4.5/num/e10008.png');
		this.load.image('nsf4_5_big8',basePath+'assets/gradeAssets/nsf4.5/num/e10007.png');
		this.load.image('nsf4_5_big9',basePath+'assets/gradeAssets/nsf4.5/num/e10004.png');
		this.load.image('nsf4_5_big10',basePath+'assets/gradeAssets/nsf4.5/num/e10005.png');
		this.load.image('nsf4_5_big11',basePath+'assets/gradeAssets/nsf4.5/num/e10001.png');
		this.load.image('nsf4_5_big12',basePath+'assets/gradeAssets/nsf4.5/num/e10002.png');
		this.load.image('nsf4_5_big13',basePath+'assets/gradeAssets/nsf4.5/num/7.png');
		this.load.image('nsf4_5_big14',basePath+'assets/gradeAssets/nsf4.5/num/5.png');
		this.load.image('nsf4_5_big15',basePath+'assets/gradeAssets/nsf4.5/num/9.png');
		this.load.image('nsf4_5_big16',basePath+'assets/gradeAssets/nsf4.5/num/4.png');
		this.load.image('nsf4_5_big17',basePath+'assets/gradeAssets/nsf4.5/num/11.png');
		this.load.image('nsf4_5_big18',basePath+'assets/gradeAssets/nsf4.5/num/12.png');
		this.load.image('nsf4_5_big19',basePath+'assets/gradeAssets/nsf4.5/num/8.png');
		this.load.image('nsf4_5_big20',basePath+'assets/gradeAssets/nsf4.5/num/1.png');
		this.load.image('nsf4_5_big21',basePath+'assets/gradeAssets/nsf4.5/num/3.png');
		this.load.atlas('nsf4_5_line1',basePath+'assets/gradeAssets/nsf4.5/w1.png',basePath+'assets/gradeAssets/nsf4.5/line/w1.json');
		this.load.atlas('nsf4_5_line2',basePath+'assets/gradeAssets/nsf4.5/w2.png',basePath+'assets/gradeAssets/nsf4.5/line/w2.json');
		this.load.atlas('nsf4_5_line3',basePath+'assets/gradeAssets/nsf4.5/w3.png',basePath+'assets/gradeAssets/nsf4.5/line/w3.json');
		this.load.atlas('nsf4_5_line4',basePath+'assets/gradeAssets/nsf4.5/w4.png',basePath+'assets/gradeAssets/nsf4.5/line/w4.json');
		this.load.atlas('nsf4_5_line5',basePath+'assets/gradeAssets/nsf4.5/w5.png',basePath+'assets/gradeAssets/nsf4.5/line/w5.json');
		this.load.atlas('nsf4_5_line6',basePath+'assets/gradeAssets/nsf4.5/w6.png',basePath+'assets/gradeAssets/nsf4.5/line/w6.json');
		this.load.atlas('nsf4_5_line7',basePath+'assets/gradeAssets/nsf4.5/w7.png',basePath+'assets/gradeAssets/nsf4.5/line/w7.json');
		this.load.atlas('nsf4_5_line8',basePath+'assets/gradeAssets/nsf4.5/w8.png',basePath+'assets/gradeAssets/nsf4.5/line/w8.json');
		this.load.atlas('nsf4_5_line9',basePath+'assets/gradeAssets/nsf4.5/w9.png',basePath+'assets/gradeAssets/nsf4.5/line/w9.json');
		this.load.atlas('nsf4_5_line10',basePath+'assets/gradeAssets/nsf4.5/w10.png',basePath+'assets/gradeAssets/nsf4.5/line/w10.json');
		this.load.atlas('nsf4_5_line11',basePath+'assets/gradeAssets/nsf4.5/w11.png',basePath+'assets/gradeAssets/nsf4.5/line/w11.json');
		this.load.atlas('nsf4_5_line12',basePath+'assets/gradeAssets/nsf4.5/w12.png',basePath+'assets/gradeAssets/nsf4.5/line/w12.json');
		this.load.atlas('nsf4_5_line13',basePath+'assets/gradeAssets/nsf4.5/w13.png',basePath+'assets/gradeAssets/nsf4.5/line/w13.json');
		this.load.atlas('nsf4_5_line14',basePath+'assets/gradeAssets/nsf4.5/w14.png',basePath+'assets/gradeAssets/nsf4.5/line/w14.json');
		this.load.atlas('nsf4_5_opt',basePath+'assets/gradeAssets/nsf4.5/B2.png',basePath+'assets/gradeAssets/nsf4.5/line/B2.json');

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
		this.state.start('nsf4_5level1');
	},
};
