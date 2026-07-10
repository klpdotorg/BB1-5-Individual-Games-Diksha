Game.preloader_pv2_5=function(game){
	this.preloadBar=null;
};

Game.preloader_pv2_5.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (pv2.5)
		this.load.atlas('nspvg2_5backbtn',basePath+'assets/commonAssets/backbtn.png' ,basePath+'assets/gradeAssets/pv2.4/backbtn.json');
		this.load.atlas('nspvg2_5CommonSpeakerBtn',basePath+'assets/commonAssets/speaker.png' ,basePath+'assets/gradeAssets/pv2.4/speaker.json');
		this.load.atlas('nspvg2_5starAnim',basePath+'assets/commonAssets/starAnim.png',basePath+'assets/gradeAssets/pv2.4/starAnim.json');
		this.load.image('nspvg2_5tittleBar',basePath+'assets/commonAssets/tittleBar.png');
		this.load.image('nspvg2_5navBar',basePath+'assets/commonAssets/navBar.png');
		this.load.image('nspvg2_5timebg',basePath+'assets/commonAssets/timebg.png');
		this.load.image('nspvg2_5background', basePath+'assets/gradeAssets/pv2.4/BG.png');
		this.load.atlas('nspvg2_5_erase',basePath+'assets/gradeAssets/pv2.4/erase.png' ,basePath+'assets/gradeAssets/pv2.4/erase.json');
		this.load.atlas('nspvg2_5_rightmark',basePath+'assets/gradeAssets/pv2.4/rightmark.png' ,basePath+'assets/gradeAssets/pv2.4/rightmark.json');
		this.load.image('nspvg2_5_numBG',basePath+'assets/gradeAssets/pv2.4/b2.png');
		this.load.atlas('nspvg2_5_numberpad', basePath+'assets/gradeAssets/pv2.4/calNum.png',basePath+'assets/gradeAssets/pv2.4/calNum.json');
		this.load.atlas('nspvg2_5lockerdoor',basePath+'assets/gradeAssets/pv1.4/d2.png' ,basePath+'assets/gradeAssets/pv1.4/d2.json');
		this.load.image('nspvg2_5locker', basePath+'assets/gradeAssets/pv2.4/locker.png');
		this.load.image('nspvg2_5wheelhands', basePath+'assets/gradeAssets/pv2.4/wheelhands.png');
		this.load.atlas('nspvg2_5white', basePath+'assets/gradeAssets/pv2.4/box1.png',basePath+'assets/gradeAssets/pv2.4/box1.json');
		this.load.atlas('nspvg2_5red', basePath+'assets/gradeAssets/pv2.4/box2.png',basePath+'assets/gradeAssets/pv2.4/box2.json');
		this.load.atlas('nspvg2_5green',basePath+'assets/gradeAssets/pv2.4/box3.png',basePath+'assets/gradeAssets/pv2.4/box3.json');
		this.load.atlas('nspvg2_5blue', basePath+'assets/gradeAssets/pv2.4/box4.png',basePath+'assets/gradeAssets/pv2.4/box4.json');
		this.load.atlas('nspvg2_5yellow', basePath+'assets/gradeAssets/pv2.4/box5.png',basePath+'assets/gradeAssets/pv2.4/box5.json');
		this.load.atlas('nspvg2_5whitebox1', basePath+'assets/gradeAssets/pv2.4/whitebox1.png',basePath+'assets/gradeAssets/pv2.4/whitebox1.json');
		this.load.atlas('nspvg2_5whitebox2', basePath+'assets/gradeAssets/pv2.4/whitebox2.png',basePath+'assets/gradeAssets/pv2.4/whitebox2.json');
		this.load.atlas('nspvg2_5wrongwheel', basePath+'assets/gradeAssets/pv2.4/wrongwheel.png',basePath+'assets/gradeAssets/pv2.4/wrongwheel.json');

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
		this.load.atlas('CommonBackBtn', basePath+'assets/commonAssets/backbtn.png', basePath+'assets/commonAssets/backbtn.json');
		this.load.atlas('CommonSpeakerBtn', basePath+'assets/commonAssets/speaker.png', basePath+'assets/commonAssets/speaker.json');
		this.load.atlas('eraser', basePath+'assets/gradeAssets/4.3A/commonAssets/eraser.png', basePath+'assets/gradeAssets/4.3A/eraser.json');

		this.load.video('demo7_1_1', basePath+'assets/demoVideos/pv2.5.mp4');
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
		_this.pendingDemoVoiceHandler = null;
		if(typeof window.languageSelected === "undefined" || !window.languageSelected){
			window.languageSelected = "Tamil";
		}
		function startGame(){ _self.state.start('pv2_5level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo7_1_1')) {
			var vid = _self.add.video('demo7_1_1');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.play(false);
			vid.changeSource(window.baseUrl+"assets/demoVideos/pv2.5.mp4");
			vid.play(false);
			_this.playDemoVideos('pv2_4');
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
		_this.playQuestionSound = document.createElement('audio');
		_this.src = document.createElement('source');
		var selectedLanguage = window.languageSelected || "English";
		switch(target)
		{
			case 'pv2_4': if(selectedLanguage == "English")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/English/NSPVG2.4E.mp3");
						}
						else if(selectedLanguage == "Hindi")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Hindi/NSPVG2.4H.mp3");
						}
						else if(selectedLanguage == "Kannada")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Kannada/NSPVG2.4K.mp3");
						}
						else if(selectedLanguage == "Gujarati")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Gujarati/NSPVG2.4G.mp3");
						}
						else if(selectedLanguage == "Marathi")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Marathi/NSPVG2.4.mp3");
						}
						else if(selectedLanguage == "Telugu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Telugu/NSPVG2.4.mp3");
						}
						else if(selectedLanguage == "Tamil")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Tamil/NSPVG2.4.mp3");
						}
						else if(selectedLanguage == "Urdu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Urdu/NSPVG2.4.mp3");
						}
						else if(selectedLanguage == "Odiya")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Odiya/NSPVG2.4.mp3");
						}
						else
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/English/NSPVG2.4E.mp3");
						}
						break;
		}
		if(_this.src.getAttribute("src"))
		{
			_this.playQuestionSound.appendChild(_this.src);
			_this.startDemoVoice();
		}
	},

	startDemoVoice:function(){
		if(!_this.playQuestionSound){ return; }

		var playPromise = _this.playQuestionSound.play();
		if(playPromise && playPromise.catch)
		{
			playPromise.catch(function(){
				if(_this.pendingDemoVoiceHandler){ return; }

				_this.pendingDemoVoiceHandler = function(){
					if(_this.playQuestionSound)
					{
						_this.playQuestionSound.play();
					}
					document.removeEventListener('click', _this.pendingDemoVoiceHandler);
					document.removeEventListener('touchstart', _this.pendingDemoVoiceHandler);
					_this.pendingDemoVoiceHandler = null;
				};

				document.addEventListener('click', _this.pendingDemoVoiceHandler);
				document.addEventListener('touchstart', _this.pendingDemoVoiceHandler);
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
		if(_this.pendingDemoVoiceHandler)
		{
			document.removeEventListener('click', _this.pendingDemoVoiceHandler);
			document.removeEventListener('touchstart', _this.pendingDemoVoiceHandler);
			_this.pendingDemoVoiceHandler = null;
		}
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
