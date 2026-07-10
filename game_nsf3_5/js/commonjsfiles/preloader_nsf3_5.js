Game.preloader_nsf3_5=function(game){
	this.preloadBar=null;
};

Game.preloader_nsf3_5.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (nsf3.5)
		this.load.image('F2_5backg',basePath+'assets/gradeAssets/nsf2.5/backg.png');
		this.load.image('nsf3_5_footer',basePath+'assets/gradeAssets/nsf3.5/footer.png');
		this.load.atlas('nsf3_5_tickmark',basePath+'assets/gradeAssets/nsf3.5/rightmark.png' ,basePath+'assets/gradeAssets/nsf3.5/rightmark.json');
		this.load.image('nsf3_5_whitebar',basePath+'assets/gradeAssets/nsf3.5/q1.png');
		this.load.image('nsf3_5_two',basePath+'assets/gradeAssets/nsf3.5/q3.png');
		this.load.image('nsf3_5_two1',basePath+'assets/gradeAssets/nsf3.5/1.png');
		this.load.image('nsf3_5_three',basePath+'assets/gradeAssets/nsf3.5/q4.png');
		this.load.image('nsf3_5_three1',basePath+'assets/gradeAssets/nsf3.5/2.png');
		this.load.image('nsf3_5_three2',basePath+'assets/gradeAssets/nsf3.5/3.png');
		this.load.image('nsf3_5_four',basePath+'assets/gradeAssets/nsf3.5/q5.png');
		this.load.image('nsf3_5_four1',basePath+'assets/gradeAssets/nsf3.5/4.png');
		this.load.image('nsf3_5_four2',basePath+'assets/gradeAssets/nsf3.5/5.png');
		this.load.image('nsf3_5_four3',basePath+'assets/gradeAssets/nsf3.5/6.png');
		this.load.image('nsf3_5_five',basePath+'assets/gradeAssets/nsf3.5/q6.png');
		this.load.image('nsf3_5_five1',basePath+'assets/gradeAssets/nsf3.5/7.png');
		this.load.image('nsf3_5_five2',basePath+'assets/gradeAssets/nsf3.5/8.png');
		this.load.image('nsf3_5_five3',basePath+'assets/gradeAssets/nsf3.5/9.png');
		this.load.image('nsf3_5_five4',basePath+'assets/gradeAssets/nsf3.5/10.png');
		this.load.image('nsf3_5_six',basePath+'assets/gradeAssets/nsf3.5/q7.png');
		this.load.image('nsf3_5_six1',basePath+'assets/gradeAssets/nsf3.5/11.png');
		this.load.image('nsf3_5_six2',basePath+'assets/gradeAssets/nsf3.5/12.png');
		this.load.image('nsf3_5_six3',basePath+'assets/gradeAssets/nsf3.5/13.png');
		this.load.image('nsf3_5_six4',basePath+'assets/gradeAssets/nsf3.5/14.png');
		this.load.image('nsf3_5_six5',basePath+'assets/gradeAssets/nsf3.5/15.png');
		this.load.image('nsf3_5_seven',basePath+'assets/gradeAssets/nsf3.5/q8.png');
		this.load.image('nsf3_5_seven1',basePath+'assets/gradeAssets/nsf3.5/16.png');
		this.load.image('nsf3_5_seven2',basePath+'assets/gradeAssets/nsf3.5/17.png');
		this.load.image('nsf3_5_seven3',basePath+'assets/gradeAssets/nsf3.5/18.png');
		this.load.image('nsf3_5_seven4',basePath+'assets/gradeAssets/nsf3.5/19.png');
		this.load.image('nsf3_5_seven5',basePath+'assets/gradeAssets/nsf3.5/20.png');
		this.load.image('nsf3_5_seven6',basePath+'assets/gradeAssets/nsf3.5/21.png');
		this.load.atlas('nsf3_5_t8',basePath+'assets/gradeAssets/nsf3.5/w8.png' ,basePath+'assets/gradeAssets/nsf3.5/w8.json');
		this.load.atlas('nsf3_5_t9',basePath+'assets/gradeAssets/nsf3.5/w9.png' ,basePath+'assets/gradeAssets/nsf3.5/w9.json');
		this.load.atlas('nsf3_5_t10',basePath+'assets/gradeAssets/nsf3.5/w10.png' ,basePath+'assets/gradeAssets/nsf3.5/w10.json');
		this.load.atlas('nsf3_5_t11',basePath+'assets/gradeAssets/nsf3.5/w11.png' ,basePath+'assets/gradeAssets/nsf3.5/w11.json');
		this.load.atlas('nsf3_5_t12',basePath+'assets/gradeAssets/nsf3.5/w12.png' ,basePath+'assets/gradeAssets/nsf3.5/w12.json');
		this.load.atlas('nsf3_5_t13',basePath+'assets/gradeAssets/nsf3.5/w13.png' ,basePath+'assets/gradeAssets/nsf3.5/w13.json');
		this.load.atlas('nsf3_5_t14',basePath+'assets/gradeAssets/nsf3.5/w14.png' ,basePath+'assets/gradeAssets/nsf3.5/w14.json');
		this.load.image('nsf3_5_glow1',basePath+'assets/gradeAssets/nsf3.5/Assets/1.png');
		this.load.image('nsf3_5_glow2',basePath+'assets/gradeAssets/nsf3.5/Assets/2.png');
		this.load.image('nsf3_5_glow3',basePath+'assets/gradeAssets/nsf3.5/Assets/3.png');
		this.load.image('nsf3_5_glow4',basePath+'assets/gradeAssets/nsf3.5/Assets/4.png');
		this.load.image('nsf3_5_glow5',basePath+'assets/gradeAssets/nsf3.5/Assets/5.png');
		this.load.image('nsf3_5_glow6',basePath+'assets/gradeAssets/nsf3.5/Assets/6.png');
		this.load.image('nsf3_5_glow7',basePath+'assets/gradeAssets/nsf3.5/Assets/7.png');
		this.load.image('nsf3_5_glow8',basePath+'assets/gradeAssets/nsf3.5/Assets/8.png');
		this.load.image('nsf3_5_glow9',basePath+'assets/gradeAssets/nsf3.5/Assets/9.png');
		this.load.image('nsf3_5_glow10',basePath+'assets/gradeAssets/nsf3.5/Assets/10.png');
		this.load.image('nsf3_5_glow11',basePath+'assets/gradeAssets/nsf3.5/Assets/11.png');
		this.load.image('nsf3_5_glow12',basePath+'assets/gradeAssets/nsf3.5/Assets/12.png');
		this.load.image('nsf3_5_glow13',basePath+'assets/gradeAssets/nsf3.5/Assets/13.png');

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
		this.state.start('nsf3_5level1');
	},
};
