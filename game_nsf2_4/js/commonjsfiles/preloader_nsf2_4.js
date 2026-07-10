Game.preloader_nsf2_4=function(game){
	this.preloadBar=null;
};

Game.preloader_nsf2_4.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (nsf2.4)
		this.load.image('nsf1_4_bgA',basePath+'assets/gradeAssets/nsf1.4/bg1.png');
		this.load.atlas('nsf2_4_erase',basePath+'assets/gradeAssets/nsf2.4/erase.png' ,basePath+'assets/gradeAssets/nsf2.4/erase.json');
		this.load.atlas('nsf2_4_rightmark',basePath+'assets/gradeAssets/nsf2.4/rightmark.png' ,basePath+'assets/gradeAssets/nsf2.4/rightmark.json');
		this.load.image('nsf2_4_numBG',basePath+'assets/gradeAssets/nsf2.4/b2.png');
		this.load.atlas('nsf2_4_hand',basePath+'assets/gradeAssets/nsf2.4/hand.png',basePath+'assets/gradeAssets/nsf2.4/hand.json');
		this.load.atlas('nsf2_4tick', basePath+'assets/gradeAssets/nsf2.4/clickbtn.png',basePath+'assets/gradeAssets/nsf2.4/clickbtn.json');
		this.load.atlas('nsf2_4box', basePath+'assets/gradeAssets/nsf2.4/box 1.png',basePath+'assets/gradeAssets/nsf2.4/box 1.json');
		this.load.atlas('nsf2_4numberpad', basePath+'assets/gradeAssets/nsf2.4/numbers.png',basePath+'assets/gradeAssets/nsf2.4/numbers.json');
		this.load.image('nsf2_4girl', basePath+'assets/gradeAssets/nsf2.4/girl.png');
		this.load.image('nsf2_4cloud', basePath+'assets/gradeAssets/nsf2.4/cloud.png');
		this.load.image('nsf2_4plate', basePath+'assets/gradeAssets/nsf2.4/plate.png');
		this.load.image('nsf2_4fraction', basePath+'assets/gradeAssets/nsf2.4/fraction.png');
		this.load.image('nsf2_4cake', basePath+'assets/gradeAssets/nsf2.4/B1.png');
		this.load.image('nsf2_4slice1', basePath+'assets/gradeAssets/nsf2.4/B3.png');
		this.load.image('nsf2_4slice2', basePath+'assets/gradeAssets/nsf2.4/B4.png');
		this.load.image('nsf2_4slice3', basePath+'assets/gradeAssets/nsf2.4/B5.png');
		this.load.image('nsf2_4slice4', basePath+'assets/gradeAssets/nsf2.4/B6.png');
		this.load.image('nsf2_4slice5', basePath+'assets/gradeAssets/nsf2.4/B7.png');
		this.load.image('nsf2_4slice6', basePath+'assets/gradeAssets/nsf2.4/B8.png');
		this.load.image('nsf2_4slice7', basePath+'assets/gradeAssets/nsf2.4/B9.png');
		this.load.image('nsf2_4slice8', basePath+'assets/gradeAssets/nsf2.4/B10.png');
		this.load.image('nsf2_4largeslice1', basePath+'assets/gradeAssets/nsf2.4/1.png');
		this.load.image('nsf2_4largeslice2', basePath+'assets/gradeAssets/nsf2.4/2.png');
		this.load.image('nsf2_4largeslice3', basePath+'assets/gradeAssets/nsf2.4/3.png');
		this.load.image('nsf2_4largeslice4', basePath+'assets/gradeAssets/nsf2.4/4.png');
		this.load.image('nsf2_4largeslice5', basePath+'assets/gradeAssets/nsf2.4/5.png');
		this.load.image('nsf2_4largeslice6', basePath+'assets/gradeAssets/nsf2.4/6.png');
		this.load.image('nsf2_4largeslice7', basePath+'assets/gradeAssets/nsf2.4/7.png');
		this.load.image('nsf2_4largeslice8', basePath+'assets/gradeAssets/nsf2.4/8.png');
		this.load.image('nsf2_4largeslice9', basePath+'assets/gradeAssets/nsf2.4/9.png');
		this.load.image('nsf2_4largeslice10', basePath+'assets/gradeAssets/nsf2.4/10.png');
		this.load.image('nsf2_4largeslice11', basePath+'assets/gradeAssets/nsf2.4/11.png');
		this.load.image('nsf2_4largeslice12', basePath+'assets/gradeAssets/nsf2.4/12.png');
		this.load.image('nsf2_4largeslice13', basePath+'assets/gradeAssets/nsf2.4/13.png');
		this.load.image('nsf2_4largeslice14', basePath+'assets/gradeAssets/nsf2.4/14.png');
		this.load.image('nsf2_4largeslice15', basePath+'assets/gradeAssets/nsf2.4/15.png');
		this.load.image('nsf2_4largeslice16', basePath+'assets/gradeAssets/nsf2.4/16.png');
		this.load.atlas('nsf2_4smallslice1', basePath+'assets/gradeAssets/nsf2.4/q1.png',basePath+'assets/gradeAssets/nsf2.4/q1.json');
		this.load.atlas('nsf2_4smallslice2', basePath+'assets/gradeAssets/nsf2.4/q2.png',basePath+'assets/gradeAssets/nsf2.4/q2.json');
		this.load.atlas('nsf2_4smallslice3', basePath+'assets/gradeAssets/nsf2.4/q3.png',basePath+'assets/gradeAssets/nsf2.4/q3.json');
		this.load.atlas('nsf2_4smallslice4', basePath+'assets/gradeAssets/nsf2.4/q4.png',basePath+'assets/gradeAssets/nsf2.4/q4.json');
		this.load.atlas('nsf2_4smallslice5', basePath+'assets/gradeAssets/nsf2.4/q5.png',basePath+'assets/gradeAssets/nsf2.4/q5.json');
		this.load.atlas('nsf2_4smallslice6', basePath+'assets/gradeAssets/nsf2.4/q6.png',basePath+'assets/gradeAssets/nsf2.4/q6.json');
		this.load.atlas('nsf2_4smallslice7', basePath+'assets/gradeAssets/nsf2.4/q7.png',basePath+'assets/gradeAssets/nsf2.4/q7.json');
		this.load.atlas('nsf2_4smallslice8', basePath+'assets/gradeAssets/nsf2.4/q8.png',basePath+'assets/gradeAssets/nsf2.4/q8.json');
		this.load.atlas('nsf2_4smallslice9', basePath+'assets/gradeAssets/nsf2.4/q9.png',basePath+'assets/gradeAssets/nsf2.4/q9.json');
		this.load.atlas('nsf2_4smallslice10', basePath+'assets/gradeAssets/nsf2.4/q10.png',basePath+'assets/gradeAssets/nsf2.4/q10.json');
		this.load.atlas('nsf2_4smallslice11', basePath+'assets/gradeAssets/nsf2.4/q11.png',basePath+'assets/gradeAssets/nsf2.4/q11.json');
		this.load.atlas('nsf2_4smallslice12', basePath+'assets/gradeAssets/nsf2.4/q12.png',basePath+'assets/gradeAssets/nsf2.4/q12.json');
		this.load.atlas('nsf2_4smallslice13', basePath+'assets/gradeAssets/nsf2.4/q13.png',basePath+'assets/gradeAssets/nsf2.4/q13.json');
		this.load.atlas('nsf2_4smallslice14', basePath+'assets/gradeAssets/nsf2.4/q14.png',basePath+'assets/gradeAssets/nsf2.4/q14.json');
		this.load.atlas('nsf2_4smallslice15', basePath+'assets/gradeAssets/nsf2.4/q15.png',basePath+'assets/gradeAssets/nsf2.4/q15.json');
		this.load.atlas('nsf2_4smallslice16', basePath+'assets/gradeAssets/nsf2.4/q16.png',basePath+'assets/gradeAssets/nsf2.4/q16.json');
		this.load.atlas('nsf1_4_eraser',basePath+'assets/gradeAssets/nsf1.4/2.png' ,basePath+'assets/gradeAssets/nsf1.4/2.json');

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
		this.load.atlas('CommonBackBtn', basePath+'assets/commonAssets/backbtn.png', basePath+'assets/commonAssets/backbtn.json');
		this.load.atlas('CommonSpeakerBtn', basePath+'assets/commonAssets/speaker.png', basePath+'assets/commonAssets/speaker.json');
		this.load.atlas('eraser', basePath+'assets/gradeAssets/4.3A/commonAssets/eraser.png', basePath+'assets/gradeAssets/4.3A/eraser.json');
		this.load.image('nsf2_4_numBG', basePath+'assets/gradeAssets/nsf2.4/b2.png');

		this.load.video('demo7_1_1', basePath+'assets/demoVideos/nsf2_4.mp4');
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
		_this.pendingAutoplayVideo = null;
		_this.pendingAutoplayHandler = null;
		if(typeof window.languageSelected === "undefined" || !window.languageSelected){
			window.languageSelected = "Tamil";
		}
		function startGame(){ _self.state.start('nsf2_4level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo7_1_1')) {
			var vid = _self.add.video('demo7_1_1');
			if (vid.video) {
				vid.video.muted = false;
				vid.video.volume = 1;
				vid.video.playsInline = true;
				vid.video.setAttribute('playsinline', 'playsinline');
			}
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.playbackRate = 0.7;
			vid.play(false);
			_this.playDemoVideos('nsf2_4', vid);

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
			case 'nsf2_4': if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/English/nsf2.4E.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Hindi/nsf2.4H.mp3");
						}
						else if(window.languageSelected == "Kannada")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Kannada/nsf2.4K.mp3");
						}
						else if(window.languageSelected == "Gujarati")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Gujarati/nsf2.4G.mp3");
						}
						else if(window.languageSelected == "Marathi")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Marathi/nsf2.4.mp3");
						}
						else if(window.languageSelected == "Telugu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Telugu/nsf2.4.mp3");
						}
						else if(window.languageSelected == "Tamil")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Tamil/nsf2.4.mp3");
						}
						else if(window.languageSelected == "Urdu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Urdu/nsf2.4.mp3");
						}
						else if(window.languageSelected == "Odiya")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Odiya/nsf2.4.mp3");
						}
						else
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/English/nsf2.4E.mp3");
						}
						break;
		}
		_this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.load();
		_this.playQuestionSound.volume = 1;
		_this.playQuestionSound.muted = false;
		_this.playMediaWithUnlock(_this.playQuestionSound, video);
	},

	playMediaWithUnlock:function(mediaElem, video){
		if(!mediaElem || typeof mediaElem.play !== 'function')
		{
			return;
		}

		var playPromise = mediaElem.play();

		if(playPromise && typeof playPromise.catch === 'function')
		{
			playPromise.catch(function(){
				if(video && video.video)
				{
					video.video.pause();
					video.video.currentTime = 0;
				}
				mediaElem.currentTime = 0;
				_this.pendingAutoplayAudio = mediaElem;
				_this.pendingAutoplayVideo = video || null;

				if(_this.pendingAutoplayHandler)
				{
					document.removeEventListener('pointerdown', _this.pendingAutoplayHandler, true);
					document.removeEventListener('click', _this.pendingAutoplayHandler, true);
					document.removeEventListener('keydown', _this.pendingAutoplayHandler, true);
				}

				_this.pendingAutoplayHandler = function(){
					document.removeEventListener('pointerdown', _this.pendingAutoplayHandler, true);
					document.removeEventListener('click', _this.pendingAutoplayHandler, true);
					document.removeEventListener('keydown', _this.pendingAutoplayHandler, true);

					if(_this.pendingAutoplayVideo)
					{
						_this.pendingAutoplayVideo.play(false);
						_this.pendingAutoplayVideo = null;
					}
					if(_this.pendingAutoplayAudio)
					{
						_this.pendingAutoplayAudio.currentTime = 0;
						var unlockPromise = _this.pendingAutoplayAudio.play();
						if(unlockPromise && typeof unlockPromise.catch === 'function')
						{
							unlockPromise.catch(function(){});
						}
						_this.pendingAutoplayAudio = null;
					}
					_this.pendingAutoplayHandler = null;
				};

				document.addEventListener('pointerdown', _this.pendingAutoplayHandler, true);
				document.addEventListener('click', _this.pendingAutoplayHandler, true);
				document.addEventListener('keydown', _this.pendingAutoplayHandler, true);
			});
		}
	},

	clearPendingMediaUnlock:function(){
		if(_this.pendingAutoplayHandler)
		{
			document.removeEventListener('pointerdown', _this.pendingAutoplayHandler, true);
			document.removeEventListener('click', _this.pendingAutoplayHandler, true);
			document.removeEventListener('keydown', _this.pendingAutoplayHandler, true);
			_this.pendingAutoplayHandler = null;
			_this.pendingAutoplayAudio = null;
			_this.pendingAutoplayVideo = null;
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
		_this.clearPendingMediaUnlock();
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
