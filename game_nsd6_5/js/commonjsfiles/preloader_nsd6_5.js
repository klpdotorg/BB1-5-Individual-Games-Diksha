Game.preloader_nsd6_5=function(game){
	this.preloadBar=null;
};

Game.preloader_nsd6_5.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (nsd6.5)
		this.load.atlas('nsd5_5_rightmark',basePath+'assets/gradeAssets/nsd5.5/rightmark.png' ,basePath+'assets/gradeAssets/nsd5.5/rightmark.json');
		this.load.atlas('nsd6_5_10_note',basePath+'assets/gradeAssets/nsd6.5/note10.png' ,basePath+'assets/gradeAssets/nsd6.5/note10.json');
		this.load.atlas('nsd6_5_1_note',basePath+'assets/gradeAssets/nsd6.5/note1.png' ,basePath+'assets/gradeAssets/nsd6.5/note1.json');
		this.load.atlas('nsd6_5_10_coin',basePath+'assets/gradeAssets/nsd6.5/coin10.png' ,basePath+'assets/gradeAssets/nsd6.5/coin10.json');
		this.load.atlas('nsd6_5_1_coin',basePath+'assets/gradeAssets/nsd6.5/coin1.png' ,basePath+'assets/gradeAssets/nsd6.5/coin1.json');
		this.load.atlas('nsd6_5_box2',basePath+'assets/gradeAssets/nsd6.5/3.png' ,basePath+'assets/gradeAssets/nsd6.5/3.json');
		this.load.image('nsd6_5_currency',basePath+'assets/gradeAssets/nsd6.5/1.png');
		this.load.image('nsd6_5_box1',basePath+'assets/gradeAssets/nsd6.5/2.png');
		this.load.image('nsd6_5_note_10',basePath+'assets/gradeAssets/nsd6.5/51.png');
		this.load.image('nsd6_5_note_1',basePath+'assets/gradeAssets/nsd6.5/52.png');
		this.load.image('nsd6_5_coin_10',basePath+'assets/gradeAssets/nsd6.5/53.png');
		this.load.image('nsd6_5_coin_1',basePath+'assets/gradeAssets/nsd6.5/54.png');
		this.load.image('nsd6_5_note_10frame',basePath+'assets/gradeAssets/nsd6.5/4.png');
		this.load.image('nsd6_5_note_1frame',basePath+'assets/gradeAssets/nsd6.5/5.png');
		this.load.image('nsd6_5_coin_10frame',basePath+'assets/gradeAssets/nsd6.5/6.png');
		this.load.image('nsd6_5_coin_1frame',basePath+'assets/gradeAssets/nsd6.5/7.png');
		this.load.image('nsd6_5_dot',basePath+'assets/gradeAssets/nsd6.5/9.png');
		this.load.image('nsd6_5_chart',basePath+'assets/gradeAssets/nsd6.5/10.png');
		this.load.image('nsd6_5_div',basePath+'assets/gradeAssets/nsd6.5/div.png');

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
		this.load.image('nsd1_5_bg', basePath+'assets/gradeAssets/nsd1.5/bg2.png');

		this.load.video('demo7_1_1', basePath+'assets/demoVideos/nsd6_5.mp4');
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
		function startGame(){ _self.state.start('nsd6_5level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo7_1_1')) {
			var vid = _self.add.video('demo7_1_1');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.changeSource(window.baseUrl+"assets/demoVideos/nsd6_5.mp4");
			vid.play(false);
			vid.mute = true;
			if(window.languageSelected == "Tamil")
				vid.playbackRate = 1.7;
			else
				vid.playbackRate = 2;
			_this.playDemoVideos('nsd6_5a');
			_this.time.events.add(500, function(){
				_this.skipDemos = _this.add.sprite(840, 485, 'skipDemoVideos');
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
			_this.time.events.add(17000, function(){
				_this.stopDemoVoice();
				vid.playbackRate = 1.2;
				_this.playDemoVideos('nsd6_5b');
			}, _this);
		} else {
			startGame();
		}
	},

	playDemoVideos:function(target){
		_this.playQuestionSound = document.createElement('audio');
		_this.src = document.createElement('source');
		var language = window.languageSelected || "Tamil";
		var demoAudioPath = null;
		switch(target)
		{
			case 'nsd6_5a': if(language == "English")
							{
								demoAudioPath = "questionSounds/nsd6.5/English/nsd6.5a.mp3";
							}
							else if(language == "Hindi")
							{
								demoAudioPath = "questionSounds/nsd6.5/Hindi/nsd6.5a.mp3";
							}
							else if(language == "Kannada")
							{
								demoAudioPath = "questionSounds/nsd6.5/Kannada/nsd6.5a.mp3";
							}
							else if(language == "Gujarati")
							{
								demoAudioPath = "questionSounds/nsd6.5/Gujarati/nsd6.5a.mp3";
							}
							else if(language == "Marathi")
							{
								demoAudioPath = "questionSounds/nsd6.5/Marathi/nsd6.5a.mp3";
							}
							else if(language == "Telugu")
							{
								demoAudioPath = "questionSounds/nsd6.5/Telugu/nsd6.5a.mp3";
							}
							else if(language == "Tamil")
							{
								demoAudioPath = "questionSounds/nsd6.5/Tamil/nsd6.5a.mp3";
							}
							else if(language == "Urdu")
							{
								demoAudioPath = "questionSounds/nsd6.5/Urdu/nsd6.5a.mp3";
							}
							else if(language == "Odiya")
							{
								demoAudioPath = "questionSounds/nsd6.5/Odiya/nsd6.5a.mp3";
							}
							break;
			case 'nsd6_5b': if(language == "English")
							{
								demoAudioPath = "questionSounds/nsd6.5/English/nsd6.5b.mp3";
							}
							else if(language == "Hindi")
							{
								demoAudioPath = "questionSounds/nsd6.5/Hindi/nsd6.5b.mp3";
							}
							else if(language == "Kannada")
							{
								demoAudioPath = "questionSounds/nsd6.5/Kannada/nsd6.5b.mp3";
							}
							else if(language == "Gujarati")
							{
								demoAudioPath = "questionSounds/nsd6.5/Gujarati/nsd6.5b.mp3";
							}
							else if(language == "Marathi")
							{
								demoAudioPath = "questionSounds/nsd6.5/Marathi/nsd6.5b.mp3";
							}
							else if(language == "Telugu")
							{
								demoAudioPath = "questionSounds/nsd6.5/Telugu/nsd6.5b.mp3";
							}
							else if(language == "Tamil")
							{
								demoAudioPath = "questionSounds/nsd6.5/Tamil/nsd6.5b.mp3";
							}
							else if(language == "Urdu")
							{
								demoAudioPath = "questionSounds/nsd6.5/Urdu/nsd6.5b.mp3";
							}
							else if(language == "Odiya")
							{
								demoAudioPath = "questionSounds/nsd6.5/Odiya/nsd6.5b.mp3";
							}
							break;
		}
		if(!demoAudioPath)
		{
			demoAudioPath = "questionSounds/nsd6.5/Tamil/" + target.replace("nsd6_5", "nsd6.5") + ".mp3";
		}
		_this.src.setAttribute("src", (window.baseUrl || "") + demoAudioPath);
		_this.src.setAttribute("type", "audio/mpeg");
		_this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.load();
		_this.playQuestionSound.play();
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
			_this.playQuestionSound = null;
			_this.src = null;
		}
	}
};
