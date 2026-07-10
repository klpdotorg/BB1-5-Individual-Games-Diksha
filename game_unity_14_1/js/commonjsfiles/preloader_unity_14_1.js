Game.preloader_unity_14_1=function(game){
	this.preloadBar=null;
};

Game.preloader_unity_14_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (unity/14.1)
		this.load.image('Level14_background',basePath+'assets/gradeAssets/14.1/bg.png');
		this.load.image('Level14_sidegrid',basePath+'assets/gradeAssets/14.1/sidegrid.png');
		this.load.image('Level14_greencubeset',basePath+'assets/gradeAssets/14.1/greencubeset.png');
		this.load.image('Level14_gridv',basePath+'assets/gradeAssets/14.1/gridv.png');
		this.load.image('Level14_singlegrid',basePath+'assets/gradeAssets/14.1/singlegrid.png');
		this.load.image('Level14_gridh',basePath+'assets/gradeAssets/14.1/gridh.png');
		this.load.image('Level14_gridarea',basePath+'assets/gradeAssets/14.1/gridarea.png');
		this.load.image('Level14_gridjointh',basePath+'assets/gradeAssets/14.1/gridjointh.png');
		this.load.image('Level14_gridjointv',basePath+'assets/gradeAssets/14.1/gridjointv.png');
		this.load.image('Level14_yellowgrid',basePath+'assets/gradeAssets/14.1/yellowgrid.png');
		this.load.image('Level14_equal',basePath+'assets/gradeAssets/14.1/equal.png');
		this.load.image('Level14_calcibg',basePath+'assets/gradeAssets/14.1/calcibg.png');
		this.load.atlas('Level14_calNum',basePath+'assets/gradeAssets/14.1/calNum.png',basePath+'assets/gradeAssets/14.1/calNum.json');
		this.load.atlas('Level14_tickBtn',basePath+'assets/gradeAssets/14.1/rightBtn.png',basePath+'assets/gradeAssets/14.1/rightBtn.json');
		this.load.atlas('Level14_eraser',basePath+'assets/gradeAssets/14.1/eraser.png',basePath+'assets/gradeAssets/14.1/eraser.json');
		this.load.image('Level14_WhiteBox',basePath+'assets/gradeAssets/14.1/WhiteBox.png');
		this.load.image('Level14_multiplication',basePath+'assets/gradeAssets/14.1/multiplication.png');
		this.load.atlas('Level14_box',basePath+'assets/gradeAssets/14.1/box.png',basePath+'assets/gradeAssets/14.1/box.json');
		this.load.image('Level14_bluegrid',basePath+'assets/gradeAssets/14.1/bluegrid.png');

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

		this.load.video('demo7_1_1', basePath+'assets/demoVideos/14_1.mp4');
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
		if(typeof window.languageSelected === "undefined" || !window.languageSelected){
			window.languageSelected = "Tamil";
		}
		_this.playQuestionSound = null;
		_this.src = null;
		_this.demoMediaUnlocked = false;
		function startGame(){ _self.state.start('unity14_1level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo7_1_1')) {
			var vid = _self.add.video('demo7_1_1');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			var demoVideoPath = basePath + "assets/demoVideos/14_1.mp4";
			vid.changeSource(demoVideoPath);
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
					_this.playDemoVideos('14_1New');
				}
				else
				{
					_this.playDemoVideos('14_1a');
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
					_this.time.events.add(12000, function(){
						_this.playDemoVideos('14_1b');
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
		var basePath = window.baseUrl || '';
		var languageSelected = window.languageSelected || "English";
		window.languageSelected = languageSelected;
		var audioUrl = '';
		switch(target)
		{
			case '14_1a': if(languageSelected == "English")
				{
					audioUrl = basePath+"questionSounds/14.1/English/Game 14.1.mp3";
				}
				else if(languageSelected == "Hindi")
				{
					audioUrl = basePath+"questionSounds/14.1/Hindi/Game 14.1.mp3";
				}
				else if(languageSelected == "Kannada")
				{
					audioUrl = basePath+"questionSounds/14.1/Kannada/Game 14.1.mp3";
				}
				else if(languageSelected == "Gujarati")
				{
					audioUrl = basePath+"questionSounds/Gujarati/14.1/Game14.1.mp3";
				}
				else if(languageSelected == "Marathi")
				{
					audioUrl = basePath+"questionSounds/14.1/Marathi/Game14.1.mp3";
				}
				else if(languageSelected == "Telugu")
				{
					audioUrl = basePath+"questionSounds/14.1/Telugu/Game14.1.mp3";
				}
				else if(languageSelected == "Tamil")
				{
					audioUrl = basePath+"questionSounds/14.1/Tamil/Game14.1.mp3";
				}
				else if(languageSelected == "Urdu")
				{
					audioUrl = basePath+"questionSounds/14.1/Urdu/Game14.1.mp3";
				}
				else if(languageSelected == "Odiya")
				{
					audioUrl = basePath+"questionSounds/14.1/Odiya/14.1.mp3";
				}
				break;
			case '14_1b': if(languageSelected == "English")
				{
					audioUrl = basePath+"questionSounds/14.1/English/Game 14.1.mp3";
				}
				else if(languageSelected == "Hindi")
				{
					audioUrl = basePath+"questionSounds/14.1/Hindi/Game 14.1.mp3";
				}
				else if(languageSelected == "Kannada")
				{
					audioUrl = basePath+"questionSounds/14.1/Kannada/Game 14.1.mp3";
				}
				else if(languageSelected == "Gujarati")
				{
					audioUrl = basePath+"questionSounds/Gujarati/14.1/Game14.1.mp3";
				}
				else if(languageSelected == "Marathi")
				{
					audioUrl = basePath+"questionSounds/14.1/Marathi/Game14.1.mp3";
				}
				else if(languageSelected == "Telugu")
				{
					audioUrl = basePath+"questionSounds/14.1/Telugu/Game14.1.mp3";
				}
				else if(languageSelected == "Tamil")
				{
					audioUrl = basePath+"questionSounds/14.1/Tamil/Game14.1.mp3";
				}
				else if(languageSelected == "Urdu")
				{
					audioUrl = basePath+"questionSounds/14.1/Urdu/Game14.1.mp3";
				}
				else if(languageSelected == "Odiya")
				{
					audioUrl = basePath+"questionSounds/14.1/Odiya/14.1.mp3";
				}
				break;
			case '14_1New': if(languageSelected=="Marathi")
				{
					audioUrl = basePath+"questionSounds/14.1/Marathi/Game14.1.mp3";
				}
				else if(languageSelected=="Telugu")
				{
					audioUrl = basePath+"questionSounds/14.1/Telugu/Game14.1.mp3";
				}
				else if(languageSelected=="Tamil")
				{
					audioUrl = basePath+"questionSounds/14.1/Tamil/Game14.1.mp3";
				}
				else if(languageSelected=="Urdu")
				{
					audioUrl = basePath+"questionSounds/14.1/Urdu/Game14.1.mp3";
				}
				break;
		}

		if(!audioUrl){
			console.warn('Demo audio file not found for', target, window.languageSelected);
			return;
		}

		audioUrl = encodeURI(audioUrl);

		_this.playQuestionSound = new Audio(audioUrl);
		_this.playQuestionSound.preload = 'auto';
		_this.playQuestionSound.load();

		_this.playQuestionSound.addEventListener('error', function(event){
			console.warn('Demo audio load error:', audioUrl, event);
		});
		_this.playQuestionSound.addEventListener('canplaythrough', function(){
			console.log('Demo audio ready:', audioUrl);
		});

		var playPromise = _this.playQuestionSound.play();
		if (playPromise && playPromise.catch) {
			playPromise.catch(function(error){
				console.warn('Demo audio autoplay blocked:', error, audioUrl);
			});
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
