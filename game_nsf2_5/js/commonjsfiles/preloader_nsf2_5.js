Game.preloader_nsf2_5=function(game){
	this.preloadBar=null;
};

Game.preloader_nsf2_5.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (nsf2.5)
		this.load.image('F2_5backg',basePath+'assets/gradeAssets/nsf2.5/backg.png');
		this.load.image('F2_5plate', basePath+'assets/gradeAssets/nsf2.5/plate.png');
		this.load.image('F2_5greenplate', basePath+'assets/gradeAssets/nsf2.5/greenplate.png');
		this.load.image('F2_5orangeplate', basePath+'assets/gradeAssets/nsf2.5/orangeplate.png');
		this.load.image('F2_5A3', basePath+'assets/gradeAssets/nsf2.5/A3.png');
		this.load.image('F2_5A4', basePath+'assets/gradeAssets/nsf2.5/A4.png');
		this.load.image('F2_5A5', basePath+'assets/gradeAssets/nsf2.5/A5.png');
		this.load.image('F2_5A6', basePath+'assets/gradeAssets/nsf2.5/A6.png');
		this.load.image('F2_5A7', basePath+'assets/gradeAssets/nsf2.5/A7.png');
		this.load.image('F2_5A8', basePath+'assets/gradeAssets/nsf2.5/A8.png');
		this.load.image('F2_5A9', basePath+'assets/gradeAssets/nsf2.5/A9.png');
		this.load.image('F2_5A10', basePath+'assets/gradeAssets/nsf2.5/A10.png');
		this.load.image('F2_5B3', basePath+'assets/gradeAssets/nsf2.5/B3.png');
		this.load.image('F2_5B4', basePath+'assets/gradeAssets/nsf2.5/B4.png');
		this.load.image('F2_5B5', basePath+'assets/gradeAssets/nsf2.5/B5.png');
		this.load.image('F2_5B6', basePath+'assets/gradeAssets/nsf2.5/B6.png');
		this.load.image('F2_5B7', basePath+'assets/gradeAssets/nsf2.5/B7.png');
		this.load.image('F2_5B8', basePath+'assets/gradeAssets/nsf2.5/B8.png');
		this.load.image('F2_5B9', basePath+'assets/gradeAssets/nsf2.5/B9.png');
		this.load.image('F2_5B10', basePath+'assets/gradeAssets/nsf2.5/B10.png');
		this.load.image('F2_5C3', basePath+'assets/gradeAssets/nsf2.5/C3.png');
		this.load.image('F2_5C4', basePath+'assets/gradeAssets/nsf2.5/C4.png');
		this.load.image('F2_5C5', basePath+'assets/gradeAssets/nsf2.5/C5.png');
		this.load.image('F2_5C6', basePath+'assets/gradeAssets/nsf2.5/C6.png');
		this.load.image('F2_5C7', basePath+'assets/gradeAssets/nsf2.5/C7.png');
		this.load.image('F2_5C8', basePath+'assets/gradeAssets/nsf2.5/C8.png');
		this.load.image('F2_5C9', basePath+'assets/gradeAssets/nsf2.5/C9.png');
		this.load.image('F2_5C10', basePath+'assets/gradeAssets/nsf2.5/C10.png');
		this.load.image('F2_5bottombar', basePath+'assets/gradeAssets/nsf2.5/bottombar.png');
		this.load.image('F2_5line', basePath+'assets/gradeAssets/nsf2.5/line.png');
		this.load.atlas('F2_5box1',basePath+'assets/gradeAssets/nsf2.5/box1.png',basePath+'assets/gradeAssets/nsf2.5/box1.json');
		this.load.atlas('F2_5cloud1',basePath+'assets/gradeAssets/nsf2.5/cloud1.png',basePath+'assets/gradeAssets/nsf2.5/cloud1.json');
		this.load.atlas('F2_5cloud2',basePath+'assets/gradeAssets/nsf2.5/cloud2.png',basePath+'assets/gradeAssets/nsf2.5/cloud2.json');
		this.load.atlas('F2_5erase',basePath+'assets/gradeAssets/nsf2.5/erase.png',basePath+'assets/gradeAssets/nsf2.5/erase.json');
		this.load.atlas('F2_5rightmark',basePath+'assets/gradeAssets/nsf2.5/rightmark.png',basePath+'assets/gradeAssets/nsf2.5/rightmark.json');
		this.load.atlas('F2_5numberpad',basePath+'assets/gradeAssets/nsf2.5/numberpad.png',basePath+'assets/gradeAssets/nsf2.5/numberpad.json');
		this.load.atlas('F2_5numbers',basePath+'assets/gradeAssets/nsf2.5/numbers.png',basePath+'assets/gradeAssets/nsf2.5/numbers.json');
		this.load.atlas('F2_5numbers1',basePath+'assets/gradeAssets/nsf2.5/numbers1.png',basePath+'assets/gradeAssets/nsf2.5/numbers1.json');
		this.load.atlas('F2_5numbers2',basePath+'assets/gradeAssets/nsf2.5/numbers2.png',basePath+'assets/gradeAssets/nsf2.5/numbers2.json');
		this.load.atlas('F2_5compare',basePath+'assets/gradeAssets/nsf2.5/compare.png',basePath+'assets/gradeAssets/nsf2.5/compare.json');

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



		this.load.video('demo_nsf2_5', basePath+'assets/demoVideos/nsf2_5.mp4');
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
		_this.pendingAutoplayAudio = null;
		_this.pendingAutoplayHandler = null;
		if(typeof window.languageSelected === "undefined" || !window.languageSelected){
			window.languageSelected = "Tamil";
		}
		function startGame(){ _self.state.start('nsf2_5level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo_nsf2_5')) {
			var vid = _self.add.video('demo_nsf2_5');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.play(false);
			vid.changeSource(window.baseUrl+"assets/demoVideos/nsf2_5.mp4");
			vid.play(false);
			_this.playDemoVideos('nsf2_5', vid);
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

	playDemoVideos:function(target, video){
		_this.playQuestionSound = document.createElement('audio');
		_this.playQuestionSound.preload = 'auto';
		_this.src = document.createElement('source');
		switch(target)
		{
			case 'nsf2_5': if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/English/nsf2.5E.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Hindi/nsf2.5H.mp3");
						}
						else if(window.languageSelected == "Kannada")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Kannada/nsf2.5K.mp3");
						}
						else if(window.languageSelected == "Gujarati")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Gujarati/nsf2.5G.mp3");
						}
						else if(window.languageSelected == "Marathi")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Marathi/nsf2.5.mp3");
						}
						else if(window.languageSelected == "Telugu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Telugu/nsf2.5.mp3");
						}
						else if(window.languageSelected == "Tamil")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Tamil/nsf2.5.mp3");
						}
						else if(window.languageSelected == "Urdu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Urdu/nsf2.5.mp3");
						}
						else if(window.languageSelected == "Odiya")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Odiya/nsf2.5O.mp3");
						}
						break;
		}
		_this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.load();
		_this.playAudioWithUnlock(_this.playQuestionSound, video);
	},

	playAudioWithUnlock:function(audio, video){
		var playPromise = audio.play();
		if(playPromise && typeof playPromise.catch === 'function')
		{
			playPromise.catch(function(){
				if(video && video.video)
				{
					video.video.pause();
					video.video.currentTime = 0;
				}
				audio.currentTime = 0;
				_this.pendingAutoplayAudio = audio;
				_this.pendingAutoplayVideo = video || null;
				if(_this.pendingAutoplayHandler)
				{
					return;
				}
				_this.pendingAutoplayHandler = function(){
					if(_this.pendingAutoplayVideo)
					{
						_this.pendingAutoplayVideo.play(false);
						_this.pendingAutoplayVideo = null;
					}
					if(_this.pendingAutoplayAudio)
					{
						var unlockPromise = _this.pendingAutoplayAudio.play();
						if(unlockPromise && typeof unlockPromise.catch === 'function')
						{
							unlockPromise.catch(function(){});
						}
						_this.pendingAutoplayAudio = null;
					}
					document.removeEventListener('click', _this.pendingAutoplayHandler);
					document.removeEventListener('touchstart', _this.pendingAutoplayHandler);
					document.removeEventListener('keydown', _this.pendingAutoplayHandler);
					_this.pendingAutoplayHandler = null;
				};
				document.addEventListener('click', _this.pendingAutoplayHandler);
				document.addEventListener('touchstart', _this.pendingAutoplayHandler);
				document.addEventListener('keydown', _this.pendingAutoplayHandler);
			});
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
			if(_this.pendingAutoplayHandler)
			{
				document.removeEventListener('click', _this.pendingAutoplayHandler);
				document.removeEventListener('touchstart', _this.pendingAutoplayHandler);
				document.removeEventListener('keydown', _this.pendingAutoplayHandler);
				_this.pendingAutoplayHandler = null;
			}
			_this.pendingAutoplayAudio = null;
			_this.pendingAutoplayVideo = null;
			_this.playQuestionSound = null;
			_this.src = null;
		}
	}
};
