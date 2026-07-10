Game.preloader_pv3_4 = function (game) {
	this.preloadBar = null;
};

Game.preloader_pv3_4.prototype = {
	preload: function () {
		var basePath = window.baseUrl || '';

		// Game-specific assets (pv3.4)
		this.load.image('pv3_4bgA', basePath + 'assets/gradeAssets/pv1.4/bg2.png');
		this.load.atlas('pv3_4locker', basePath + 'assets/gradeAssets/pv1.4/d2.png', basePath + 'assets/gradeAssets/pv1.4/d2.json');
		this.load.image('pv3_4numscroll', basePath + 'assets/gradeAssets/pv3.4/Tween.png');
		this.load.image('pv3_4case', basePath + 'assets/gradeAssets/pv3.4/Symbol 3.png');
		this.load.image('pv3_4rotate2', basePath + 'assets/gradeAssets/pv3.4/Symbol 37.png');
		this.load.image('pv3_4hand', basePath + 'assets/gradeAssets/pv3.4/x3.png');
		this.load.atlas('pv3_44X4', basePath + 'assets/gradeAssets/pv3.4/q6.png', basePath + 'assets/gradeAssets/pv3.4/second/q6.json');
		this.load.atlas('pv3_45X5', basePath + 'assets/gradeAssets/pv3.4/q7.png', basePath + 'assets/gradeAssets/pv3.4/second/q7.json');
		this.load.atlas('pv3_4rotate', basePath + 'assets/gradeAssets/pv3.4/d1.png', basePath + 'assets/gradeAssets/pv3.4/second/d1.json');
		this.load.atlas('pv3_4red', basePath + 'assets/gradeAssets/pv3.4/q1.png', basePath + 'assets/gradeAssets/pv3.4/second/q1.json');
		this.load.atlas('pv3_4green', basePath + 'assets/gradeAssets/pv3.4/q5.png', basePath + 'assets/gradeAssets/pv3.4/second/q5.json');
		this.load.atlas('pv3_4blue', basePath + 'assets/gradeAssets/pv3.4/q3.png', basePath + 'assets/gradeAssets/pv3.4/second/q3.json');
		this.load.atlas('pv3_4yellow', basePath + 'assets/gradeAssets/pv3.4/q4.png', basePath + 'assets/gradeAssets/pv3.4/second/q4.json');
		this.load.atlas('pv3_4white', basePath + 'assets/gradeAssets/pv3.4/q2.png', basePath + 'assets/gradeAssets/pv3.4/second/q2.json');
		this.load.atlas('pv3_4right', basePath + 'assets/commonAssets/tickBtn.png', basePath + 'assets/gradeAssets/pv3.4/tickBtn.json');

		// Common UI assets  (all paths inside assets/commonAssets/ — no separate json/ folder)
		this.load.image('prgressbarOutLine', basePath + 'assets/commonAssets/prgressbarOutLine.png');
		this.load.image('preloadBar', basePath + 'assets/commonAssets/prgressbar.png');
		this.load.atlas('newCommonBackBtnForAll', basePath + 'assets/commonAssets/newBackBtn.png', basePath + 'assets/commonAssets/newBackBtn.json');
		this.load.atlas('grade11_speaker', basePath + 'assets/commonAssets/grade11_speaker.png', basePath + 'assets/commonAssets/grade11_speaker.json');
		this.load.image('Level42C_Topbar', basePath + 'assets/commonAssets/Topbar.png');
		this.load.image('Level42C_timer', basePath + 'assets/commonAssets/timer.png');
		this.load.atlas('starAnim1', basePath + 'assets/commonAssets/starAnim1.png', basePath + 'assets/commonAssets/starAnim1.json');
		this.load.image('CommonBackground', basePath + 'assets/commonAssets/commonBg.png');
		this.load.image('commonBg1', basePath + 'assets/commonAssets/commonBg1.png');
		this.load.image('commonBg2', basePath + 'assets/commonAssets/commonBg2.png');

		// Score screen buttons (local)
		this.load.image('CommonHomeBtn', 'assets/homeIconScore.png');
		this.load.image('CommonNextBtn', 'assets/nextIconScore.png');
		this.load.image('CommonReplayBtn', 'assets/replayIconScore.png');
		this.load.image('shareIconScore', 'assets/shareIconScore.png');



		this.load.video('demo7_1_1', basePath + 'assets/demoVideos/pv3.4.mp4');
		this.load.image('skipDemoVideos', basePath + 'assets/commonAssets/skipArrow.png');


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

	create: function () {
		var _self = this;
		_this = this;
		_this.playQuestionSound = null;
		_this.src = null;
		function startGame() { _self.state.start('pv3_4level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo7_1_1')) {
			var vid = _self.add.video('demo7_1_1');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.play(false);
			vid.changeSource(window.baseUrl + "assets/demoVideos/pv3.4.mp4");
			vid.play(false);
			vid.playbackRate = 0.7;
			_this.time.events.add(500, function () {
				_this.skipDemos = _this.add.sprite(803, 423, 'skipDemoVideos');
				_this.skipDemos.inputEnabled = true;
				_this.skipDemos.events.onInputDown.add(function () {
					_this.stopDemoVoice();
					vid.stop(false);
					startGame();
				}, _this);
			}, _this);
			vid.onComplete.add(function () {
				_this.stopDemoVoice();
				startGame();
			}, this);
		} else {
			startGame();
		}
	},

	stopDemoVoice: function () {
		if (_this.playQuestionSound) {
			if (_this.playQuestionSound.contains(_this.src)) {
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if (!_this.playQuestionSound.paused) {
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
	}
};