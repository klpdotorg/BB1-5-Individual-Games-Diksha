Game.preloader_nsf3_4=function(game){
	this.preloadBar=null;
};

Game.preloader_nsf3_4.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (nsf3.4)
		this.load.image('nsf1_4_bgA',basePath+'assets/gradeAssets/nsf1.4/bg1.png');
		this.load.image('3_4bg2', basePath+'assets/gradeAssets/nsf3.4/Bg.png');
		this.load.image('3_4bg', basePath+'assets/gradeAssets/nsf3.4/b2.png');
		this.load.image('3_4hand', basePath+'assets/gradeAssets/nsf3.4/hand.png');
		this.load.atlas('3_4num1', basePath+'assets/gradeAssets/nsf3.4/num1.png', basePath+'assets/gradeAssets/nsf3.4/num1.json');
		this.load.atlas('3_4num2', basePath+'assets/gradeAssets/nsf3.4/num2.png', basePath+'assets/gradeAssets/nsf3.4/num2.json');
		this.load.atlas('3_4num3', basePath+'assets/gradeAssets/nsf3.4/num3.png', basePath+'assets/gradeAssets/nsf3.4/num3.json');
		this.load.atlas('3_4num4', basePath+'assets/gradeAssets/nsf3.4/num4.png', basePath+'assets/gradeAssets/nsf3.4/num4.json');
		this.load.atlas('3_4num5', basePath+'assets/gradeAssets/nsf3.4/num5.png', basePath+'assets/gradeAssets/nsf3.4/num5.json');
		this.load.atlas('3_4num6', basePath+'assets/gradeAssets/nsf3.4/num6.png', basePath+'assets/gradeAssets/nsf3.4/num6.json');
		this.load.atlas('3_4num7', basePath+'assets/gradeAssets/nsf3.4/num7.png', basePath+'assets/gradeAssets/nsf3.4/num7.json');
		this.load.atlas('3_4num8', basePath+'assets/gradeAssets/nsf3.4/num8.png', basePath+'assets/gradeAssets/nsf3.4/num8.json');
		this.load.atlas('3_4num9', basePath+'assets/gradeAssets/nsf3.4/num9.png', basePath+'assets/gradeAssets/nsf3.4/num9.json');
		this.load.atlas('3_4num10', basePath+'assets/gradeAssets/nsf3.4/num10.png', basePath+'assets/gradeAssets/nsf3.4/num10.json');
		this.load.image('3_4square', basePath+'assets/gradeAssets/nsf3.4/square box.png');
		this.load.atlas('3_4box', basePath+'assets/gradeAssets/nsf3.4/box.png', basePath+'assets/gradeAssets/nsf3.4/box.json');
		this.load.atlas('3_4box1', basePath+'assets/gradeAssets/nsf3.4/box1.png', basePath+'assets/gradeAssets/nsf3.4/box1.json');
		this.load.atlas('3_4numberpad', basePath+'assets/gradeAssets/nsf3.4/numberpad.png', basePath+'assets/gradeAssets/nsf3.4/numberpad.json');
		this.load.atlas('3_4eraser', basePath+'assets/gradeAssets/nsf3.4/erase.png', basePath+'assets/gradeAssets/nsf3.4/erase.json');
		this.load.atlas('3_4tick', basePath+'assets/gradeAssets/nsf3.4/tickMark.png', basePath+'assets/gradeAssets/nsf3.4/tickMark.json');
		this.load.atlas('3_4n1', basePath+'assets/gradeAssets/nsf3.4/n1.png', basePath+'assets/gradeAssets/nsf3.4/n1.json');
		this.load.atlas('3_4n2', basePath+'assets/gradeAssets/nsf3.4/n2.png', basePath+'assets/gradeAssets/nsf3.4/n2.json');
		this.load.atlas('3_4n3', basePath+'assets/gradeAssets/nsf3.4/n3.png', basePath+'assets/gradeAssets/nsf3.4/n3.json');
		this.load.atlas('3_4n4', basePath+'assets/gradeAssets/nsf3.4/n4.png', basePath+'assets/gradeAssets/nsf3.4/n4.json');
		this.load.atlas('3_4n5', basePath+'assets/gradeAssets/nsf3.4/n5.png', basePath+'assets/gradeAssets/nsf3.4/n5.json');
		this.load.atlas('3_4n6', basePath+'assets/gradeAssets/nsf3.4/n6.png', basePath+'assets/gradeAssets/nsf3.4/n6.json');
		this.load.atlas('3_4n7', basePath+'assets/gradeAssets/nsf3.4/n7.png', basePath+'assets/gradeAssets/nsf3.4/n7.json');
		this.load.atlas('3_4n8', basePath+'assets/gradeAssets/nsf3.4/n8.png', basePath+'assets/gradeAssets/nsf3.4/n8.json');
		this.load.atlas('3_4n9', basePath+'assets/gradeAssets/nsf3.4/n9.png', basePath+'assets/gradeAssets/nsf3.4/n9.json');
		this.load.atlas('3_4n10', basePath+'assets/gradeAssets/nsf3.4/n10.png', basePath+'assets/gradeAssets/nsf3.4/n10.json');
		this.load.atlas('3_4n11', basePath+'assets/gradeAssets/nsf3.4/n11.png', basePath+'assets/gradeAssets/nsf3.4/n11.json');
		this.load.atlas('3_4n12', basePath+'assets/gradeAssets/nsf3.4/n12.png', basePath+'assets/gradeAssets/nsf3.4/n12.json');
		this.load.atlas('3_4n13', basePath+'assets/gradeAssets/nsf3.4/n13.png', basePath+'assets/gradeAssets/nsf3.4/n13.json');
		this.load.atlas('3_4n14', basePath+'assets/gradeAssets/nsf3.4/n14.png', basePath+'assets/gradeAssets/nsf3.4/n14.json');
		this.load.atlas('3_4n15', basePath+'assets/gradeAssets/nsf3.4/n15.png', basePath+'assets/gradeAssets/nsf3.4/n15.json');

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



		this.load.video('demo7_1_1', basePath+'assets/demoVideos/nsf3_4.mp4');
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
		if(typeof window.languageSelected === "undefined" || !window.languageSelected){
			window.languageSelected = "Tamil";
		}
		_this.playQuestionSound = null;
		_this.src = null;
		_this.pendingAutoplayAudio = null;
		_this.pendingAutoplayHandler = null;
		function startGame(){ _self.state.start('nsf3_4level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo7_1_1')) {
			var vid = _self.add.video('demo7_1_1');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.play(false);
			vid.changeSource(window.baseUrl+"assets/demoVideos/nsf3_4.mp4");
			vid.play(false);
			_this.playDemoVideos('nsf3_4');
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

	playDemoVideos:function(target){
		var audioSrc = "";
		switch(target)
		{
			case 'nsf3_4': if(window.languageSelected == "English")
						{
							audioSrc = window.baseUrl+"questionSounds/nsf3.4/English/3.4E.mp3";
						}
						else if(window.languageSelected == "Hindi")
						{
							audioSrc = window.baseUrl+"questionSounds/nsf3.4/Hindi/3.4H.mp3";
						}
						else if(window.languageSelected == "Kannada")
						{
							audioSrc = window.baseUrl+"questionSounds/nsf3.4/Kannada/3.4K.mp3";
						}
						else if(window.languageSelected == "Gujarati")
						{
							audioSrc = window.baseUrl+"questionSounds/nsf3.4/Gujarati/3.4G.mp3";
						}
						else if(window.languageSelected == "Marathi")
						{
							audioSrc = window.baseUrl+"questionSounds/nsf3.4/Marathi/nsf3.4.mp3";
						}
						else if(window.languageSelected == "Telugu")
						{
							audioSrc = window.baseUrl+"questionSounds/nsf3.4/Telugu/nsf3.4.mp3";
						}
						else if(window.languageSelected == "Tamil")
						{
							audioSrc = window.baseUrl+"questionSounds/nsf3.4/Tamil/nsf3.4.mp3";
						}
						else if(window.languageSelected == "Urdu")
						{
							audioSrc = window.baseUrl+"questionSounds/nsf3.4/Urdu/nsf3.4.mp3";
						}
						else if(window.languageSelected == "Odiya")
						{
							audioSrc = window.baseUrl+"questionSounds/nsf3.4/Odiya/3.4O.mp3";
						}
						else
						{
							audioSrc = window.baseUrl+"questionSounds/nsf3.4/English/3.4E.mp3";
						}
						break;
		}
		_this.playVoiceFile(audioSrc);
	},

	playVoiceFile:function(audioSrc){
		if(!audioSrc) return;

		_this.clearPendingAutoplay();
		_this.playQuestionSound = document.createElement('audio');
		_this.playQuestionSound.preload = 'auto';
		_this.playQuestionSound.src = audioSrc;
		_this.playQuestionSound.load();

		var playPromise = _this.playQuestionSound.play();
		if(playPromise && playPromise.catch)
		{
			playPromise.catch(function(){
				_this.pendingAutoplayAudio = _this.playQuestionSound;
				_this.pendingAutoplayHandler = function(){
					_this.clearPendingAutoplay();
					if(_this.playQuestionSound)
					{
						_this.playQuestionSound.currentTime = 0;
						var retryPromise = _this.playQuestionSound.play();
						if(retryPromise && retryPromise.catch) retryPromise.catch(function(){});
					}
				};
				document.addEventListener('pointerdown', _this.pendingAutoplayHandler, false);
				document.addEventListener('mousedown', _this.pendingAutoplayHandler, false);
				document.addEventListener('touchstart', _this.pendingAutoplayHandler, false);
				document.addEventListener('keydown', _this.pendingAutoplayHandler, false);
			});
		}
	},

	clearPendingAutoplay:function(){
		if(_this.pendingAutoplayHandler)
		{
			document.removeEventListener('pointerdown', _this.pendingAutoplayHandler);
			document.removeEventListener('mousedown', _this.pendingAutoplayHandler);
			document.removeEventListener('touchstart', _this.pendingAutoplayHandler);
			document.removeEventListener('keydown', _this.pendingAutoplayHandler);
			_this.pendingAutoplayHandler = null;
			_this.pendingAutoplayAudio = null;
		}
	},

	amplifyMedia:function(mediaElem, multiplier) {
		var context = new (window.AudioContext || window.webkitAudioContext),
			result = {
				context: context,
				source: context.createMediaElementSource(mediaElem),
				gain: context.createGain(),
				media: mediaElem,
				amplify: function(multiplier) { result.gain.gain.value = multiplier; },
				getAmpLevel: function() { return result.gain.gain.value; }
			};
		result.source.connect(result.gain);
		result.gain.connect(context.destination);
		result.amplify(multiplier);
		return result;
	},

	stopDemoVoice:function(){
		_this.clearPendingAutoplay();
		if(_this.playQuestionSound)
		{
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound.removeAttribute('src');
			_this.playQuestionSound.load();
			_this.playQuestionSound = null;
			_this.src = null;
		}
	}
};
