Game.preloader_nsf1_4=function(game){
	this.preloadBar=null;
};

Game.preloader_nsf1_4.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (nsf1.4)
		this.load.image('nsf1_4_bgA',basePath+'assets/gradeAssets/nsf1.4/bg1.png');
		this.load.image('nsf1_4_plate',basePath+'assets/gradeAssets/nsf1.4/A/1.png');
		this.load.image('nsf1_4_plate2',basePath+'assets/gradeAssets/nsf1.4/A/2.png');
		this.load.image('nsf1_4_girl',basePath+'assets/gradeAssets/nsf1.4/A/4.png');
		this.load.image('nsf1_4_cloud',basePath+'assets/gradeAssets/nsf1.4/A/n3.png');
		this.load.image('nsf1_4_largecake',basePath+'assets/gradeAssets/nsf1.4/A/A1.png');
		this.load.image('nsf1_4_largecake2',basePath+'assets/gradeAssets/nsf1.4/A/A2.png');
		this.load.atlas('nsf1_4_largecake3',basePath+'assets/gradeAssets/nsf1.4/A/A3.png',basePath+'assets/gradeAssets/nsf1.4/8/A3.json');
		this.load.atlas('nsf1_4_largecake4',basePath+'assets/gradeAssets/nsf1.4/A/A4.png',basePath+'assets/gradeAssets/nsf1.4/8/A4.json');
		this.load.atlas('nsf1_4_largecake5',basePath+'assets/gradeAssets/nsf1.4/A/A5.png',basePath+'assets/gradeAssets/nsf1.4/8/A5.json');
		this.load.atlas('nsf1_4_largecake6',basePath+'assets/gradeAssets/nsf1.4/A/A6.png',basePath+'assets/gradeAssets/nsf1.4/8/A6.json');
		this.load.atlas('nsf1_4_largecake7',basePath+'assets/gradeAssets/nsf1.4/A/A7.png',basePath+'assets/gradeAssets/nsf1.4/8/A7.json');
		this.load.atlas('nsf1_4_largecake8',basePath+'assets/gradeAssets/nsf1.4/A/A8.png',basePath+'assets/gradeAssets/nsf1.4/8/A8.json');
		this.load.atlas('nsf1_4_largecake9',basePath+'assets/gradeAssets/nsf1.4/A/A9.png',basePath+'assets/gradeAssets/nsf1.4/8/A9.json');
		this.load.atlas('nsf1_4_largecake10',basePath+'assets/gradeAssets/nsf1.4/A/A10.png',basePath+'assets/gradeAssets/nsf1.4/8/A10.json');
		this.load.atlas('nsf1_4_minicake3',basePath+'assets/gradeAssets/nsf1.4/A/8/1.png',basePath+'assets/gradeAssets/nsf1.4/8/8/1.json');
		this.load.atlas('nsf1_4_minicake4',basePath+'assets/gradeAssets/nsf1.4/A/8/2.png',basePath+'assets/gradeAssets/nsf1.4/8/8/2.json');
		this.load.atlas('nsf1_4_minicake5',basePath+'assets/gradeAssets/nsf1.4/A/8/3.png',basePath+'assets/gradeAssets/nsf1.4/8/8/3.json');
		this.load.atlas('nsf1_4_minicake6',basePath+'assets/gradeAssets/nsf1.4/A/8/4.png',basePath+'assets/gradeAssets/nsf1.4/8/8/4.json');
		this.load.atlas('nsf1_4_minicake7',basePath+'assets/gradeAssets/nsf1.4/A/8/5.png',basePath+'assets/gradeAssets/nsf1.4/8/8/5.json');
		this.load.atlas('nsf1_4_minicake8',basePath+'assets/gradeAssets/nsf1.4/A/8/6.png',basePath+'assets/gradeAssets/nsf1.4/8/8/6.json');
		this.load.atlas('nsf1_4_minicake9',basePath+'assets/gradeAssets/nsf1.4/A/8/7.png',basePath+'assets/gradeAssets/nsf1.4/8/8/7.json');
		this.load.atlas('nsf1_4_minicake10',basePath+'assets/gradeAssets/nsf1.4/A/8/8.png',basePath+'assets/gradeAssets/nsf1.4/8/8/8.json');
		this.load.atlas('nsf1_4_largecake1',basePath+'assets/gradeAssets/nsf1.4/2/1.png',basePath+'assets/gradeAssets/nsf1.4/16/1.json');
		this.load.atlas('nsf1_4_largecake12',basePath+'assets/gradeAssets/nsf1.4/2/2.png',basePath+'assets/gradeAssets/nsf1.4/16/2.json');
		this.load.atlas('nsf1_4_largecake13',basePath+'assets/gradeAssets/nsf1.4/2/3.png',basePath+'assets/gradeAssets/nsf1.4/16/3.json');
		this.load.atlas('nsf1_4_largecake14',basePath+'assets/gradeAssets/nsf1.4/2/4.png',basePath+'assets/gradeAssets/nsf1.4/16/4.json');
		this.load.atlas('nsf1_4_largecake15',basePath+'assets/gradeAssets/nsf1.4/2/5.png',basePath+'assets/gradeAssets/nsf1.4/16/5.json');
		this.load.atlas('nsf1_4_largecake16',basePath+'assets/gradeAssets/nsf1.4/2/6.png',basePath+'assets/gradeAssets/nsf1.4/16/6.json');
		this.load.atlas('nsf1_4_largecake17',basePath+'assets/gradeAssets/nsf1.4/2/7.png',basePath+'assets/gradeAssets/nsf1.4/16/7.json');
		this.load.atlas('nsf1_4_largecake18',basePath+'assets/gradeAssets/nsf1.4/2/8.png',basePath+'assets/gradeAssets/nsf1.4/16/8.json');
		this.load.atlas('nsf1_4_largecake19',basePath+'assets/gradeAssets/nsf1.4/2/9.png',basePath+'assets/gradeAssets/nsf1.4/16/9.json');
		this.load.atlas('nsf1_4_largecake110',basePath+'assets/gradeAssets/nsf1.4/2/10.png',basePath+'assets/gradeAssets/nsf1.4/16/10.json');
		this.load.atlas('nsf1_4_largecake111',basePath+'assets/gradeAssets/nsf1.4/2/11.png',basePath+'assets/gradeAssets/nsf1.4/16/11.json');
		this.load.atlas('nsf1_4_largecake112',basePath+'assets/gradeAssets/nsf1.4/2/12.png',basePath+'assets/gradeAssets/nsf1.4/16/12.json');
		this.load.atlas('nsf1_4_largecake113',basePath+'assets/gradeAssets/nsf1.4/2/13.png',basePath+'assets/gradeAssets/nsf1.4/16/13.json');
		this.load.atlas('nsf1_4_largecake114',basePath+'assets/gradeAssets/nsf1.4/2/14.png',basePath+'assets/gradeAssets/nsf1.4/16/14.json');
		this.load.atlas('nsf1_4_largecake115',basePath+'assets/gradeAssets/nsf1.4/2/15.png',basePath+'assets/gradeAssets/nsf1.4/16/15.json');
		this.load.atlas('nsf1_4_largecake116',basePath+'assets/gradeAssets/nsf1.4/2/16.png',basePath+'assets/gradeAssets/nsf1.4/16/16.json');
		this.load.atlas('nsf1_4_minicake1',basePath+'assets/gradeAssets/nsf1.4/2/16/1.png',basePath+'assets/gradeAssets/nsf1.4/16/16/1.json');
		this.load.atlas('nsf1_4_minicake12',basePath+'assets/gradeAssets/nsf1.4/2/16/2.png',basePath+'assets/gradeAssets/nsf1.4/16/16/2.json');
		this.load.atlas('nsf1_4_minicake13',basePath+'assets/gradeAssets/nsf1.4/2/16/3.png',basePath+'assets/gradeAssets/nsf1.4/16/16/3.json');
		this.load.atlas('nsf1_4_minicake14',basePath+'assets/gradeAssets/nsf1.4/2/16/4.png',basePath+'assets/gradeAssets/nsf1.4/16/16/4.json');
		this.load.atlas('nsf1_4_minicake15',basePath+'assets/gradeAssets/nsf1.4/2/16/5.png',basePath+'assets/gradeAssets/nsf1.4/16/16/5.json');
		this.load.atlas('nsf1_4_minicake16',basePath+'assets/gradeAssets/nsf1.4/2/16/6.png',basePath+'assets/gradeAssets/nsf1.4/16/16/6.json');
		this.load.atlas('nsf1_4_minicake17',basePath+'assets/gradeAssets/nsf1.4/2/16/7.png',basePath+'assets/gradeAssets/nsf1.4/16/16/7.json');
		this.load.atlas('nsf1_4_minicake18',basePath+'assets/gradeAssets/nsf1.4/2/16/8.png',basePath+'assets/gradeAssets/nsf1.4/16/16/8.json');
		this.load.atlas('nsf1_4_minicake19',basePath+'assets/gradeAssets/nsf1.4/2/16/9.png',basePath+'assets/gradeAssets/nsf1.4/16/16/9.json');
		this.load.atlas('nsf1_4_minicake110',basePath+'assets/gradeAssets/nsf1.4/2/16/10.png',basePath+'assets/gradeAssets/nsf1.4/16/16/10.json');
		this.load.atlas('nsf1_4_minicake111',basePath+'assets/gradeAssets/nsf1.4/2/16/11.png',basePath+'assets/gradeAssets/nsf1.4/16/16/11.json');
		this.load.atlas('nsf1_4_minicake112',basePath+'assets/gradeAssets/nsf1.4/2/16/12.png',basePath+'assets/gradeAssets/nsf1.4/16/16/12.json');
		this.load.atlas('nsf1_4_minicake113',basePath+'assets/gradeAssets/nsf1.4/2/16/13.png',basePath+'assets/gradeAssets/nsf1.4/16/16/13.json');
		this.load.atlas('nsf1_4_minicake114',basePath+'assets/gradeAssets/nsf1.4/2/16/14.png',basePath+'assets/gradeAssets/nsf1.4/16/16/14.json');
		this.load.atlas('nsf1_4_minicake115',basePath+'assets/gradeAssets/nsf1.4/2/16/15.png',basePath+'assets/gradeAssets/nsf1.4/16/16/15.json');
		this.load.atlas('nsf1_4_minicake116',basePath+'assets/gradeAssets/nsf1.4/2/16/16.png',basePath+'assets/gradeAssets/nsf1.4/16/16/16.json');
		this.load.atlas('nsf1_4_largecake21',basePath+'assets/gradeAssets/nsf1.4/4/1.png',basePath+'assets/gradeAssets/nsf1.4/5/1.json');
		this.load.atlas('nsf1_4_largecake22',basePath+'assets/gradeAssets/nsf1.4/4/2.png',basePath+'assets/gradeAssets/nsf1.4/5/2.json');
		this.load.atlas('nsf1_4_largecake23',basePath+'assets/gradeAssets/nsf1.4/4/3.png',basePath+'assets/gradeAssets/nsf1.4/5/3.json');
		this.load.atlas('nsf1_4_largecake24',basePath+'assets/gradeAssets/nsf1.4/4/4.png',basePath+'assets/gradeAssets/nsf1.4/5/4.json');
		this.load.atlas('nsf1_4_largecake25',basePath+'assets/gradeAssets/nsf1.4/4/5.png',basePath+'assets/gradeAssets/nsf1.4/5/5.json');
		this.load.atlas('nsf1_4_minicake21',basePath+'assets/gradeAssets/nsf1.4/4/5/1.png',basePath+'assets/gradeAssets/nsf1.4/5/5/1.json');
		this.load.atlas('nsf1_4_minicake22',basePath+'assets/gradeAssets/nsf1.4/4/5/2.png',basePath+'assets/gradeAssets/nsf1.4/5/5/2.json');
		this.load.atlas('nsf1_4_minicake23',basePath+'assets/gradeAssets/nsf1.4/4/5/3.png',basePath+'assets/gradeAssets/nsf1.4/5/5/3.json');
		this.load.atlas('nsf1_4_minicake24',basePath+'assets/gradeAssets/nsf1.4/4/5/4.png',basePath+'assets/gradeAssets/nsf1.4/5/5/4.json');
		this.load.atlas('nsf1_4_minicake25',basePath+'assets/gradeAssets/nsf1.4/4/5/5.png',basePath+'assets/gradeAssets/nsf1.4/5/5/5.json');
		this.load.atlas('nsf1_4_largecake41',basePath+'assets/gradeAssets/nsf1.4/1/1.png',basePath+'assets/gradeAssets/nsf1.4/4/1.json');
		this.load.atlas('nsf1_4_largecake42',basePath+'assets/gradeAssets/nsf1.4/1/2.png',basePath+'assets/gradeAssets/nsf1.4/4/2.json');
		this.load.atlas('nsf1_4_largecake43',basePath+'assets/gradeAssets/nsf1.4/1/3.png',basePath+'assets/gradeAssets/nsf1.4/4/3.json');
		this.load.atlas('nsf1_4_largecake44',basePath+'assets/gradeAssets/nsf1.4/1/4.png',basePath+'assets/gradeAssets/nsf1.4/4/4.json');
		this.load.atlas('nsf1_4_minicake41',basePath+'assets/gradeAssets/nsf1.4/1/4/1.png',basePath+'assets/gradeAssets/nsf1.4/4/4/1.json');
		this.load.atlas('nsf1_4_minicake42',basePath+'assets/gradeAssets/nsf1.4/1/4/2.png',basePath+'assets/gradeAssets/nsf1.4/4/4/2.json');
		this.load.atlas('nsf1_4_minicake43',basePath+'assets/gradeAssets/nsf1.4/1/4/3.png',basePath+'assets/gradeAssets/nsf1.4/4/4/3.json');
		this.load.atlas('nsf1_4_minicake44',basePath+'assets/gradeAssets/nsf1.4/1/4/4.png',basePath+'assets/gradeAssets/nsf1.4/4/4/4.json');
		this.load.atlas('nsf1_4_largecake31',basePath+'assets/gradeAssets/nsf1.4/3/1.png',basePath+'assets/gradeAssets/nsf1.4/7/1.json');
		this.load.atlas('nsf1_4_largecake32',basePath+'assets/gradeAssets/nsf1.4/3/2.png',basePath+'assets/gradeAssets/nsf1.4/7/2.json');
		this.load.atlas('nsf1_4_largecake33',basePath+'assets/gradeAssets/nsf1.4/3/3.png',basePath+'assets/gradeAssets/nsf1.4/7/3.json');
		this.load.atlas('nsf1_4_largecake34',basePath+'assets/gradeAssets/nsf1.4/3/4.png',basePath+'assets/gradeAssets/nsf1.4/7/4.json');
		this.load.atlas('nsf1_4_largecake35',basePath+'assets/gradeAssets/nsf1.4/3/5.png',basePath+'assets/gradeAssets/nsf1.4/7/5.json');
		this.load.atlas('nsf1_4_largecake36',basePath+'assets/gradeAssets/nsf1.4/3/6.png',basePath+'assets/gradeAssets/nsf1.4/7/6.json');
		this.load.atlas('nsf1_4_largecake37',basePath+'assets/gradeAssets/nsf1.4/3/7.png',basePath+'assets/gradeAssets/nsf1.4/7/7.json');
		this.load.atlas('nsf1_4_minicake31',basePath+'assets/gradeAssets/nsf1.4/3/7/1.png',basePath+'assets/gradeAssets/nsf1.4/7/7/1.json');
		this.load.atlas('nsf1_4_minicake32',basePath+'assets/gradeAssets/nsf1.4/3/7/2.png',basePath+'assets/gradeAssets/nsf1.4/7/7/2.json');
		this.load.atlas('nsf1_4_minicake33',basePath+'assets/gradeAssets/nsf1.4/3/7/3.png',basePath+'assets/gradeAssets/nsf1.4/7/7/3.json');
		this.load.atlas('nsf1_4_minicake34',basePath+'assets/gradeAssets/nsf1.4/3/7/4.png',basePath+'assets/gradeAssets/nsf1.4/7/7/4.json');
		this.load.atlas('nsf1_4_minicake35',basePath+'assets/gradeAssets/nsf1.4/3/7/5.png',basePath+'assets/gradeAssets/nsf1.4/7/7/5.json');
		this.load.atlas('nsf1_4_minicake36',basePath+'assets/gradeAssets/nsf1.4/3/7/6.png',basePath+'assets/gradeAssets/nsf1.4/7/7/6.json');
		this.load.atlas('nsf1_4_minicake37',basePath+'assets/gradeAssets/nsf1.4/3/7/7.png',basePath+'assets/gradeAssets/nsf1.4/7/7/7.json');
		this.load.atlas('nsf1_4_box',basePath+'assets/gradeAssets/nsf1.4/b1.png',basePath+'assets/gradeAssets/nsf1.4/b1.json');
		this.load.image('nsf1_4_line',basePath+'assets/gradeAssets/nsf1.4/A/6.png');
		this.load.image('nsf1_4_footer',basePath+'assets/gradeAssets/nsf1.4/footer.png');
		this.load.atlas('nsf1_4_calNum',basePath+'assets/gradeAssets/nsf1.4/calNum.png',basePath+'assets/gradeAssets/nsf1.4/calNum.json');
		this.load.atlas('nsf1_4_rightBtn',basePath+'assets/gradeAssets/nsf1.4/1.png' ,basePath+'assets/gradeAssets/nsf1.4/1.json');
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

		this.load.video('demo7_1_1', basePath+'assets/demoVideos/nsf1_4.mp4');
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
		function startGame(){ _self.state.start('nsf1_4level1'); }
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
			vid.changeSource(window.baseUrl+"assets/demoVideos/nsf1_4.mp4");
			vid.playbackRate = 0.7;
			vid.play(false);
			_this.playDemoVideos('nsf1_4', vid);
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
			case 'nsf1_4': if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/English/nsf1.4.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Hindi/nsf1.4.mp3");
						}
						else if(window.languageSelected == "Kannada")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Kannada/nsf1.4.mp3");
						}
						else if(window.languageSelected == "Gujarati")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Gujarati/nsf1.4.mp3");
						}
						else if(window.languageSelected == "Marathi")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Marathi/nsf1.4.mp3");
						}
						else if(window.languageSelected == "Telugu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Telugu/nsf1.4.mp3");
						}
						else if(window.languageSelected == "Tamil")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Tamil/nsf1.4.mp3");
						}
						else if(window.languageSelected == "Urdu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Urdu/nsf1.4.mp3");
						}
						else if(window.languageSelected == "Odiya")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Odiya/nsf1.4.mp3");
						}
						else
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/English/nsf1.4.mp3");
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
