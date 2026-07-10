Game.preloader_pv1_4=function(game){
	this.preloadBar=null;
};

Game.preloader_pv1_4.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (pv1.4)
		this.load.image('pv1_4bgA',basePath+'assets/gradeAssets/pv1.4/bg2.png');
		this.load.atlas('pv1_4EraseButton',basePath+'assets/gradeAssets/pv1.4/EraseButton.png' ,basePath+'assets/gradeAssets/pv1.4/EraseButton.json');
		this.load.atlas('pv1_4RightButton',basePath+'assets/gradeAssets/pv1.4/RightButton.png' ,basePath+'assets/gradeAssets/pv1.4/RightButton.json');
		this.load.atlas('pv1_4CalNum',basePath+'assets/gradeAssets/pv1.4/calNum.png' ,basePath+'assets/gradeAssets/pv1.4/calNum.json');
		this.load.image('pv1_4footer',basePath+'assets/gradeAssets/pv1.4/footer.png');
		this.load.atlas('pv1_4rightmark',basePath+'assets/gradeAssets/pv1.4/rightmark.png',basePath+'assets/gradeAssets/pv1.4/rightmark.json');
		this.load.image('pv1_4locker',basePath+'assets/gradeAssets/pv1.4/locker.png');
		this.load.atlas('pv1_4door',basePath+'assets/gradeAssets/pv1.4/d2.png' ,basePath+'assets/gradeAssets/pv1.4/d2.json');
		this.load.image('pv1_4lock2',basePath+'assets/gradeAssets/pv1.4/lock2.png');
		this.load.atlas('pv1_4lock1',basePath+'assets/gradeAssets/pv1.4/lock1.png',basePath+'assets/gradeAssets/pv1.4/lock1.json');
		this.load.atlas('pv1_4questionBox',basePath+'assets/gradeAssets/pv1.4/box1.png',basePath+'assets/gradeAssets/pv1.4/box1.json');
		this.load.atlas('pv1_4answerBox',basePath+'assets/gradeAssets/pv1.4/box2.png',basePath+'assets/gradeAssets/pv1.4/box2.json');
		this.load.atlas('pv1_4sBox1',basePath+'assets/gradeAssets/pv1.4/bx1.png',basePath+'assets/gradeAssets/pv1.4/bx1.json');
		this.load.atlas('pv1_4sBox2',basePath+'assets/gradeAssets/pv1.4/bx2.png',basePath+'assets/gradeAssets/pv1.4/bx2.json');
		this.load.atlas('pv1_4sBox3',basePath+'assets/gradeAssets/pv1.4/bx3.png',basePath+'assets/gradeAssets/pv1.4/bx3.json');
		this.load.atlas('pv1_4sBox4',basePath+'assets/gradeAssets/pv1.4/bx4.png',basePath+'assets/gradeAssets/pv1.4/bx4.json');
		this.load.atlas('pv1_4sBox5',basePath+'assets/gradeAssets/pv1.4/bx5.png',basePath+'assets/gradeAssets/pv1.4/bx5.json');
		this.load.atlas('pv1_4numbers',basePath+'assets/gradeAssets/pv1.4/number.png',basePath+'assets/gradeAssets/pv1.4/number.json');
		this.load.image('pv1_4numb',basePath+'assets/gradeAssets/pv1.4/numb.png');

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
		this.load.image('box', basePath+'assets/gradeAssets/unity/commonAssets/box.png');

		this.load.video('demo7_1_1', basePath+'assets/demoVideos/pv1.4.mp4');
		this.load.image('skipDemoVideos', basePath+'assets/commonAssets/skipArrow.png');


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
		var _self = this;
		_this = this;
		_this.playQuestionSound = null;
		_this.src = null;
		function startGame(){ _self.state.start('pv1_4level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo7_1_1')) {
			var vid = _self.add.video('demo7_1_1');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.play(false);
			vid.changeSource(window.baseUrl+"assets/demoVideos/pv1.4.mp4");
			vid.play(false);
			vid.playbackRate = 0.7;
			_this.time.events.add(500, function(){
				_this.skipDemos = _this.add.sprite(803, 423, 'skipDemoVideos');
				_this.skipDemos.inputEnabled = true;
				_this.skipDemos.events.onInputDown.add(function(){
					_this.stopDemoVoice();
					vid.stop(false);
					startGame();
				}, _this);
			}, _this);
			vid.onComplete.add(function(){
				_this.stopDemoVoice();
				startGame();
			}, this);
		} else {
			startGame();
		}
	},

	stopDemoVoice:function(){
		if(_this.playQuestionSound)
		{
			if(_this.playQuestionSound.contains(_this.src))
			{
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
	}
};
