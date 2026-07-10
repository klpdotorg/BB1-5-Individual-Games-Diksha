Game.preloader_nsd4_5=function(game){
	this.preloadBar=null;
};

Game.preloader_nsd4_5.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (nsd4.5)
		this.load.image('NSD4_5_BG',basePath+'assets/gradeAssets/nsd4.5/bg1.png');
		this.load.atlas("NSD4_5_TickMark",basePath+"assets/gradeAssets/nsd4.5/tick.png",basePath+"assets/gradeAssets/nsd4.5/tick.json");
		this.load.atlas("NSD4_5_Eraser",basePath+"assets/gradeAssets/nsd4.5/erase.png",basePath+"assets/gradeAssets/nsd4.5/erase.json");
		this.load.atlas('NSD4_5_numberpad',basePath+'assets/gradeAssets/nsd4.5/numberpad.png',basePath+'assets/gradeAssets/nsd4.5/numberpad.json');
		this.load.atlas("NSD4_5_AnsBox",basePath+"assets/gradeAssets/nsd4.5/AnsBox.png",basePath+"assets/gradeAssets/nsd4.5/AnsBox.json");
		this.load.image('NSD4_5_Bottombar',basePath+'assets/gradeAssets/nsd4.5/bottombar.png');
		this.load.atlas('NSD4_5_Txtbox',basePath+'assets/gradeAssets/nsd4.5/txtbox.png',basePath+'assets/gradeAssets/nsd4.5/txtbox.json');
		this.load.image('NSD4_5_OneReNote',basePath+'assets/gradeAssets/nsd4.5/OneReNote.png');
		this.load.image('NSD4_5_TenRsNote',basePath+'assets/gradeAssets/nsd4.5/TenRsNote.png');
		this.load.image('NSD4_5_OneReCoin',basePath+'assets/gradeAssets/nsd4.5/OneReCoin.png');
		this.load.image('NSD4_5_TenRsCoin',basePath+'assets/gradeAssets/nsd4.5/TenRsCoin.png');
		this.load.image('NSD4_5_Dot',basePath+'assets/gradeAssets/nsd4.5/point.png');
		this.load.image('NSD4_5_Table',basePath+'assets/gradeAssets/nsd4.5/table.png');

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



		this.load.video('demo7_1_1', basePath+'assets/demoVideos/nsd4_5.mp4');
		this.load.image('skipDemoVideos', basePath+'assets/commonAssets/skipArrow.png');

		// Assets required by commonNavBar (commonFiles.js)
		this.load.image('navBar',       basePath+'assets/commonAssets/Nv bar.png');
		this.load.image('backBtn',      basePath+'assets/landingScreen/backBtn.png');
		this.load.image('speakerBtn',   basePath+'assets/commonAssets/speakerBtn.png');
		this.load.image('timerBg',      basePath+'assets/commonAssets/timerBg.png');
		this.load.image('scoreBg',      basePath+'assets/commonAssets/scoreBg.png');
		this.load.atlas('hintIcon',     basePath+'assets/commonAssets/hint.png',          basePath+'assets/commonAssets/hint.json');
		this.load.image('hintwand',     basePath+'assets/commonAssets/hintwand.png');
		this.load.atlas('hint1',        basePath+'assets/commonAssets/1.png',             basePath+'assets/commonAssets/1.json');
		this.load.atlas('hint2',        basePath+'assets/commonAssets/2.png',             basePath+'assets/commonAssets/2.json');
		this.load.atlas('hint3',        basePath+'assets/commonAssets/3.png',             basePath+'assets/commonAssets/3.json');
		this.load.image('popupbg',      basePath+'assets/commonAssets/popupbg.png');
		this.load.image('popupbgEmpty', basePath+'assets/commonAssets/popupbg1.png');
		this.load.image('closebtn',     basePath+'assets/commonAssets/close.png');
		this.load.atlas('popuphint',    basePath+'assets/commonAssets/popuphint.png',     basePath+'assets/commonAssets/popuphint.json');
		this.load.atlas('deductBg',     basePath+'assets/commonAssets/minusBg.png',       basePath+'assets/commonAssets/minusBg.json');
		this.load.atlas('endscreendeductBg', basePath+'assets/commonAssets/whiteminusBg.png', basePath+'assets/commonAssets/whiteminusBg.json');
		this.load.atlas('hintscreennew', basePath+'assets/commonAssets/hintscreen.png',   basePath+'assets/commonAssets/hintscreen.json');
		this.load.image('mcIconVolume',       basePath+'assets/commonAssets/volume.png');
		this.load.image('mcIconTime',         basePath+'assets/commonAssets/time.png');
		this.load.image('mcIconLength',       basePath+'assets/commonAssets/length.png');
		this.load.image('mcIconWeight',       basePath+'assets/commonAssets/weight.png');
		this.load.image('mcIconNumber',       basePath+'assets/commonAssets/number.png');
		this.load.image('mcIconSequence',     basePath+'assets/commonAssets/sequence.png');
		this.load.image('mcIconComparison',   basePath+'assets/commonAssets/comparison.png');
		this.load.image('mcIconFraction',     basePath+'assets/commonAssets/fraction.png');
		this.load.image('mcIconPlacevalue',   basePath+'assets/commonAssets/placevalue.png');
		this.load.image('mcIconAddition',     basePath+'assets/commonAssets/addition.png');
		this.load.image('mcIconSubtraction',  basePath+'assets/commonAssets/subtraction.png');
		this.load.image('mcIconDivision',     basePath+'assets/commonAssets/division.png');
		this.load.image('mcIconMultiplication', basePath+'assets/commonAssets/multiplication.png');

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
		function startGame(){ _self.state.start('nsd4_5level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo7_1_1')) {
			var vid = _self.add.video('demo7_1_1');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.play(false);
			vid.changeSource(window.baseUrl+"assets/demoVideos/nsd4_5.mp4");
			vid.play(false);
			_this.playDemoVideos('nsd4_5');
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
		var audioUrl = _this.getDemoVoiceUrl(target);
		if(!audioUrl)
		{
			return;
		}
		_this.playQuestionSound = new Audio(audioUrl);
		_this.playQuestionSound.preload = 'auto';
		_this.playQuestionSound.volume = 1;
		_this.playQuestionSound.play();
	},

	getDemoVoiceUrl:function(target){
		if(target != 'nsd4_5')
		{
			return null;
		}
		var selectedLanguage = window.languageSelected || "Tamil";
		var supportedLanguages = {
			English: true,
			Hindi: true,
			Kannada: true,
			Gujarati: true,
			Marathi: true,
			Telugu: true,
			Tamil: true,
			Urdu: true,
			Odiya: true
		};
		if(!supportedLanguages[selectedLanguage])
		{
			selectedLanguage = "English";
		}
		return window.baseUrl+"questionSounds/nsd4.5/"+selectedLanguage+"/nsd4.5.mp3";
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
			if(_this.src && _this.playQuestionSound.contains && _this.playQuestionSound.contains(_this.src))
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
