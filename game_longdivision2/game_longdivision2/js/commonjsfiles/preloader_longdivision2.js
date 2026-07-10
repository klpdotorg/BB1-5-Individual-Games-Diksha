Game.preloader_longdivision2=function(game){
	this.preloadBar=null;
};

Game.preloader_longdivision2.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (longdivision2)
		this.load.video('demo_dhdcg1_4',basePath+'assets/newGames/longdivision2.mp4');
		this.load.image('dhdcg1_4skipDemoVideos',basePath+'assets/DH1/commonAssets/skipArrow.png');
		this.load.atlas('dhdcg1_4backbtn',basePath+'assets/DH1/commonAssets/backbtn.png' ,basePath+'json/DH1/gradeJson/backbtn.json');
		this.load.atlas('dhdcg1_4CommonSpeakerBtn',basePath+'assets/DH1/commonAssets/speaker.png' ,basePath+'json/DH1/gradeJson/speaker.json');
		this.load.atlas('dhdcg1_4starAnim',basePath+'assets/DH1/commonAssets/starAnim.png',basePath+'json/DH1/gradeJson/starAnim.json');
		this.load.atlas('dhdcg1_4replay',basePath+'assets/DH1/commonAssets/reply.png' ,basePath+'json/DH1/gradeJson/reply.json');
		this.load.atlas('dhdcg1_4btn',basePath+'assets/DH1/commonAssets/btn.png',basePath+'json/DH1/gradeJson/btn.json');
		this.load.image('dhdcg1_4background1',basePath+'assets/DH1/commonAssets/bg1.png');
		this.load.image('dhdcg1_4tittleBar',basePath+'assets/DH1/commonAssets/tittleBar.png');
		this.load.image('dhdcg1_4navBar',basePath+'assets/DH1/commonAssets/navBar.png');
		this.load.image('dhdcg1_4timebg',basePath+'assets/DH1/commonAssets/timebg.png');
		this.load.atlas('dhdcg1_4_erase',basePath+'assets/DH1/commonAssets/erase.png' ,basePath+'json/DH1/gradeJson/erase.json');
		this.load.atlas('dhdcg1_4_rightmark',basePath+'assets/DH1/commonAssets/rightmark.png' ,basePath+'json/DH1/gradeJson/rightmark.json');
		this.load.image('dhdcg1_4_numBG',basePath+'assets/DH1/commonAssets/b2.png');
		this.load.atlas('dhdcg1_4_numberpad',basePath+'assets/DH1/commonAssets/calNum.png',basePath+'json/DH1/gradeJson/calNum.json');
		this.load.atlas('dhdcg1_4_numbers1',basePath+'assets/DH1/commonAssets/numbers1.png',basePath+'json/DH1/gradeJson/numbers1.json');
		this.load.image('dhdcg1_4background',basePath+'assets/DH1/gradeAssets/BG2.png');
		this.load.atlas('dhdcg1_4ball',basePath+'assets/DH1/gradeAssets/ball.png',basePath+'json/DH1/gradeJson/assets/ball.json');
		this.load.atlas('dhdcg1_4smallBall',basePath+'assets/DH1/gradeAssets/smallBall.png',basePath+'json/DH1/gradeJson/assets/smallBall.json');
		this.load.atlas('dhdcg1_4balloon',basePath+'assets/DH1/gradeAssets/balloon.png',basePath+'json/DH1/gradeJson/assets/balloon.json');
		this.load.atlas('dhdcg1_4carrot',basePath+'assets/DH1/gradeAssets/carrot.png',basePath+'json/DH1/gradeJson/assets/carrot.json');
		this.load.atlas('dhdcg1_4cherry',basePath+'assets/DH1/gradeAssets/cherry.png',basePath+'json/DH1/gradeJson/assets/cherry.json');
		this.load.atlas('dhdcg1_4flower',basePath+'assets/DH1/gradeAssets/flower.png',basePath+'json/DH1/gradeJson/assets/flower.json');
		this.load.atlas('dhdcg1_4orange',basePath+'assets/DH1/gradeAssets/orange.png',basePath+'json/DH1/gradeJson/assets/orange.json');
		this.load.atlas('dhdcg1_4papaya',basePath+'assets/DH1/gradeAssets/papaya.png',basePath+'json/DH1/gradeJson/assets/papaya.json');
		this.load.atlas('dhdcg1_4shoe',basePath+'assets/DH1/gradeAssets/shoe.png',basePath+'json/DH1/gradeJson/assets/shoe.json');
		this.load.atlas('dhdcg1_4watermelon',basePath+'assets/DH1/gradeAssets/watermelon.png',basePath+'json/DH1/gradeJson/assets/watermelon.json');
		this.load.atlas('dhdcg1_4circle',basePath+'assets/DH1/gradeAssets/circle.png',basePath+'json/DH1/gradeJson/assets/circle.json');
		this.load.atlas('dhdcg1_4oval',basePath+'assets/DH1/gradeAssets/oval.png',basePath+'json/DH1/gradeJson/assets/oval.json');
		this.load.atlas('dhdcg1_4square',basePath+'assets/DH1/gradeAssets/square.png',basePath+'json/DH1/gradeJson/assets/square.json');
		this.load.atlas('dhdcg1_4triangle',basePath+'assets/DH1/gradeAssets/triangle.png',basePath+'json/DH1/gradeJson/assets/triangle.json');
		this.load.atlas('dhdcg1_4blueGraph',basePath+'assets/DH1/gradeAssets/blueGraph.png',basePath+'json/DH1/gradeJson/assets/blueGraph.json');
		this.load.atlas('dhdcg1_4greenGraph',basePath+'assets/DH1/gradeAssets/greenGraph.png',basePath+'json/DH1/gradeJson/assets/greenGraph.json');
		this.load.atlas('dhdcg1_4redGraph',basePath+'assets/DH1/gradeAssets/redGraph.png',basePath+'json/DH1/gradeJson/assets/redGraph.json');
		this.load.atlas('dhdcg1_4yellowGraph',basePath+'assets/DH1/gradeAssets/yellowGraph.png',basePath+'json/DH1/gradeJson/assets/yellowGraph.json');
		this.load.atlas('dhdcg1_4emptyGraph',basePath+'assets/DH1/gradeAssets/emptyGraph.png',basePath+'json/DH1/gradeJson/assets/emptyGraph.json');
		this.load.atlas('dhdcg1_4plus',basePath+'assets/DH1/gradeAssets/P.png',basePath+'json/DH1/gradeJson/assets/P.json');
		this.load.atlas('dhdcg1_4minus',basePath+'assets/DH1/gradeAssets/M.png',basePath+'json/DH1/gradeJson/assets/M.json');
		this.load.atlas('dhdcg1_4glow',basePath+'assets/DH1/gradeAssets/glow.png',basePath+'json/DH1/gradeJson/assets/glow.json');
		this.load.image('dhdcg1_4emptyBox',basePath+'assets/DH1/gradeAssets/box1.png');
		this.load.image('dhdcg1_4colorBox',basePath+'assets/DH1/gradeAssets/box2.png');
		this.load.image('dhdcg1_4shapeBox',basePath+'assets/DH1/gradeAssets/box3.png');
		this.load.image('dhdcg1_4emptyBoard',basePath+'assets/DH1/gradeAssets/box4.png');
		this.load.image('dhdcg1_4shapeBoard',basePath+'assets/DH1/gradeAssets/box5.png');
		this.load.image('dhdcg1_4colorBoard',basePath+'assets/DH1/gradeAssets/box6.png');
		this.load.atlas('dhdcg1_4numberBox',basePath+'assets/DH1/gradeAssets/b1.png',basePath+'json/DH1/gradeJson/assets/b1.json');

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
		this.load.atlas('eraser', basePath+'assets/gradeAssets/4.3A/commonAssets/eraser.png', basePath+'assets/gradeAssets/4.3A/eraser.json');
		this.load.image('longdivision2', basePath+'assets/newGames/longdivision2.png');
		this.load.image('longdivision3', basePath+'assets/newGames/longdivision3.png');



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
		function startGame(){ _self.state.start('longdivision2'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo_dhdcg1_4')) {
			var vid = _self.add.video('demo_dhdcg1_4');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);

			vid.mute = true;
			vid.play(false);
			vid.onComplete.addOnce(function(){ startGame(); }, _self);
			var skipBtn = _self.add.image(_self.world.width - 20, 20, 'dhdcg1_4skipDemoVideos');
			skipBtn.anchor.setTo(1, 0);
			skipBtn.inputEnabled = true;
			skipBtn.input.useHandCursor = true;
			skipBtn.events.onInputDown.addOnce(function(){ vid.stop(); startGame(); }, _self);
		} else {
			startGame();
		}
	},
};
