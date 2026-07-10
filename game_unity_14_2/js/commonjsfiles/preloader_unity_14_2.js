Game.preloader_unity_14_2=function(game){
	this.preloadBar=null;
};

Game.preloader_unity_14_2.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (unity/14.2)
		this.load.image('Level14_background',basePath+'assets/gradeAssets/14.2/bg.png');
		this.load.image('Level14_sidegrid',basePath+'assets/gradeAssets/14.2/sidegrid.png');
		this.load.image('Level14_greencubeset',basePath+'assets/gradeAssets/14.2/greencubeset.png');
		this.load.image('Level14_gridv',basePath+'assets/gradeAssets/14.2/gridv.png');
		this.load.image('Level14_singlegrid',basePath+'assets/gradeAssets/14.2/singlegrid.png');
		this.load.image('Level14_gridh',basePath+'assets/gradeAssets/14.2/gridh.png');
		this.load.image('Level14_gridarea',basePath+'assets/gradeAssets/14.2/gridarea.png');
		this.load.image('Level14_gridjointh',basePath+'assets/gradeAssets/14.2/gridjointh.png');
		this.load.image('Level14_gridjointv',basePath+'assets/gradeAssets/14.2/gridjointv.png');
		this.load.image('Level14_yellowgrid',basePath+'assets/gradeAssets/14.2/yellowgrid.png');
		this.load.image('Level14_equal',basePath+'assets/gradeAssets/14.2/equal.png');
		this.load.image('Level14_calcibg',basePath+'assets/gradeAssets/14.2/calcibg.png');
		this.load.atlas('Level14_calNum',basePath+'assets/gradeAssets/14.2/calNum.png',basePath+'assets/gradeAssets/14.2/calNum.json');
		this.load.atlas('Level14_tickBtn',basePath+'assets/gradeAssets/14.2/rightBtn.png',basePath+'assets/gradeAssets/14.2/rightBtn.json');
		this.load.atlas('Level14_eraser',basePath+'assets/gradeAssets/14.2/eraser.png',basePath+'assets/gradeAssets/14.2/eraser.json');
		this.load.image('Level14_WhiteBox',basePath+'assets/gradeAssets/14.2/WhiteBox.png');
		this.load.image('Level14_multiplication',basePath+'assets/gradeAssets/14.2/multiplication.png');
		this.load.atlas('Level14_box',basePath+'assets/gradeAssets/14.2/box.png',basePath+'assets/gradeAssets/14.2/box.json');
		this.load.image('Level14_gridhorange',basePath+'assets/gradeAssets/14.2/gridhorange.png');
		this.load.image('Level14_gridvorange',basePath+'assets/gradeAssets/14.2/gridvorange.png');
		this.load.image('Level14_gridorange',basePath+'assets/gradeAssets/14.2/gridorange.png');

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
		this.load.image('Level42B_timer', basePath+'assets/gradeAssets/4.2A/commonAssets/timer.png');

		this.load.video('demo_unity_14_2', basePath+'assets/demoVideos/14_2.mp4');
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
		var basePath = window.baseUrl || '';
		window.baseUrl = basePath;
		if(typeof window.languageSelected === "undefined" || !window.languageSelected){
			window.languageSelected = "Tamil";
		}
		_this.playQuestionSound = null;
		_this.src = null;
		function startGame(){ _self.state.start('unity14_2level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo_unity_14_2')) {
			var vid = _self.add.video('demo_unity_14_2');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.changeSource(basePath+"assets/demoVideos/14_2.mp4");
			if (vid.video) {
				vid.video.muted = true;
			}
			vid.play(false);
			if (vid.video && vid.video.play) {
				var vidPlayPromise = vid.video.play();
				if (vidPlayPromise && vidPlayPromise.catch) {
					vidPlayPromise.catch(function(error){
						console.warn('Demo video autoplay blocked:', error);
					});
				}
			}
			var resumeDemoMedia = function() {
				var mediaStarted = false;
				if (vid && vid.video) {
					vid.video.muted = false;
					var p = vid.video.play();
					mediaStarted = true;
					if (p && p.catch) {
						p.catch(function(err){ console.warn('Demo video resume blocked:', err); });
					}
				}
				if (_this.playQuestionSound && _this.playQuestionSound.play) {
					var p2 = _this.playQuestionSound.play();
					mediaStarted = true;
					if (p2 && p2.catch) {
						p2.catch(function(err){ console.warn('Demo audio resume blocked:', err); });
					}
				}
				if (mediaStarted) {
					document.body.removeEventListener('click', resumeDemoMedia);
					document.body.removeEventListener('touchstart', resumeDemoMedia);
				}
			};
			document.body.addEventListener('click', resumeDemoMedia);
			document.body.addEventListener('touchstart', resumeDemoMedia);
			vid.playbackRate = 1;
			_this.time.events.add(2000, function(){
				if(window.languageSelected == "Telugu" || window.languageSelected == "Tamil" || window.languageSelected == "Urdu")
				{
					_this.playDemoVideos('14_2New');
				}
				else
				{
					_this.playDemoVideos('14_2a');
				}
				_this.skipDemos = _this.add.sprite(803, 423, 'skipDemoVideos');
				_this.skipDemos.inputEnabled = true;
				_this.skipDemos.events.onInputDown.add(function(){
					_this.stopDemoVoice();
					vid.stop(false);
					startGame();
				}, _this);
				if(!(window.languageSelected == "Telugu" || window.languageSelected == "Tamil" || window.languageSelected == "Urdu"))
				{
					_this.time.events.add(13000, function(){
						_this.playDemoVideos('14_2b');
					}, _this);
					_this.time.events.add(26000, function(){
						_this.playDemoVideos('14_2c');
					}, _this);
				}
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
		window.baseUrl = window.baseUrl || '';
		var languageSelected = window.languageSelected || "Tamil";
		window.languageSelected = languageSelected;
		_this.playQuestionSound = document.createElement('audio');
		_this.src = document.createElement('source');
		switch(target)
		{
			case '14_2a': if(languageSelected == "English")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 14.2a.mp3");
				}
				else if(languageSelected == "Hindi")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 14.2a.mp3");
				}
				else if(languageSelected == "Kannada")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 14.2a.mp3");
				}
				else if(languageSelected == "Gujarati")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/14.2a.mp3");
				}
				else if(languageSelected == "Marathi")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Marathi/14_2a.mp3");
				}
				else if(languageSelected == "Telugu")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Telugu/14_2a.mp3");
				}
				else if(languageSelected == "Tamil")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Tamil/14_2a.mp3");
				}
				else if(languageSelected == "Urdu")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Urdu/14_2a.mp3");
				}
				else if(languageSelected == "Odiya")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/14.2a.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
				}
				break;
			case '14_2b': if(languageSelected == "English")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 14.2b.mp3");
				}
				else if(languageSelected == "Hindi")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 14.2b.mp3");
				}
				else if(languageSelected == "Kannada")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 14.2b.mp3");
				}
				else if(languageSelected == "Gujarati")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/14.2b.mp3");
				}
				else if(languageSelected == "Marathi")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Marathi/14_2b.mp3");
				}
				else if(languageSelected == "Telugu")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Telugu/14_2b.mp3");
				}
				else if(languageSelected == "Tamil")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Tamil/14_2b.mp3");
				}
				else if(languageSelected == "Urdu")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Urdu/14_2b.mp3");
				}
				else if(languageSelected == "Odiya")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/14.2b.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
				}
				break;
			case '14_2c': if(languageSelected == "English")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 14.2c.mp3");
				}
				else if(languageSelected == "Hindi")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 14.2c.mp3");
				}
				else if(languageSelected == "Kannada")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 14.2c.mp3");
				}
				else if(languageSelected == "Gujarati")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/14.2c.mp3");
				}
				else if(languageSelected == "Marathi")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Marathi/14_2c.mp3");
				}
				else if(languageSelected == "Telugu")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Telugu/14_2c.mp3");
				}
				else if(languageSelected == "Tamil")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Tamil/14_2c.mp3");
				}
				else if(languageSelected == "Urdu")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Urdu/14_2c.mp3");
				}
				else if(languageSelected == "Odiya")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/14.2c.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
				}
				break;
			case '14_2New': if(languageSelected=="Marathi")
				{
					_this.src.setAttribute("src", window.baseUrl+"questionSounds/14.2/Marathi/game14.2.mp3");
				}
				else if(languageSelected=="Telugu")
				{
					_this.src.setAttribute("src", window.baseUrl+"questionSounds/14.2/Telugu/game14.2.mp3");
				}
				else if(languageSelected=="Tamil")
				{
					_this.src.setAttribute("src", window.baseUrl+"questionSounds/14.2/Tamil/game14.2.mp3");
				}
				else if(languageSelected=="Urdu")
				{
					_this.src.setAttribute("src", window.baseUrl+"questionSounds/14.2/Urdu/game14.2.mp3");
				}
				break;
		}
		if(!_this.src.getAttribute("src")){
			console.warn('Demo audio file not found for', target, languageSelected);
			return;
		}
		_this.playQuestionSound.addEventListener('error', function(event){
			console.warn('Demo audio load error:', _this.src.getAttribute("src"), event);
		});
		_this.playQuestionSound.appendChild(_this.src);
		var playPromise = _this.playQuestionSound.play();
		if (playPromise && playPromise.catch) {
			playPromise.catch(function(error){
				console.warn('Demo audio autoplay blocked:', error, _this.src.getAttribute("src"));
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
			_this.playQuestionSound = null;
			_this.src = null;
		}
	}
};
