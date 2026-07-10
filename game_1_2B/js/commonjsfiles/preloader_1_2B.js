Game.preloader_1_2B=function(game){
	this.preloadBar=null;
};

Game.preloader_1_2B.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (1.2B)
		this.load.image('unity1.2Bbackg', basePath+'assets/gradeAssets/1.2A/bg.png');
		this.load.atlas('unity1.2BstarAnim', basePath+'assets/commonAssets/starAnim1.png', basePath+'assets/commonAssets/starAnim1.json');
		this.load.image('unity1.2Btopbar', basePath+'assets/commonAssets/topbar.png');
		this.load.image('unity1.2Btimerbg', basePath+'assets/commonAssets/timebg.png');
		this.load.atlas('unity1.2Bspeaker', basePath+'assets/commonAssets/grade11_speaker.png', basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.atlas('unity1.2Bflagmain11', basePath+'assets/gradeAssets/1.2B/m1.png', basePath+'assets/gradeAssets/1.2B/m1.json');
		this.load.image('unity1.2BAns1', basePath+'assets/gradeAssets/1.2B/o1.png');
		this.load.image('unity1.2BAns2', basePath+'assets/gradeAssets/1.2B/o2.png');
		this.load.image('unity1.2BAns3', basePath+'assets/gradeAssets/1.2B/o3.png');
		this.load.atlas('unity1.2Bflagmain12', basePath+'assets/gradeAssets/1.2B/m2.png', basePath+'assets/gradeAssets/1.2B/m2.json');
		this.load.image('unity1.2BAns11', basePath+'assets/gradeAssets/1.2B/o4.png');
		this.load.image('unity1.2BAns12', basePath+'assets/gradeAssets/1.2B/o5.png');
		this.load.image('unity1.2BAns13', basePath+'assets/gradeAssets/1.2B/o6.png');
		this.load.atlas('unity1.2Bflagmain13', basePath+'assets/gradeAssets/1.2B/m3.png', basePath+'assets/gradeAssets/1.2B/m3.json');
		this.load.image('unity1.2BAns21', basePath+'assets/gradeAssets/1.2B/o7.png');
		this.load.image('unity1.2BAns22', basePath+'assets/gradeAssets/1.2B/o8.png');
		this.load.image('unity1.2BAns23', basePath+'assets/gradeAssets/1.2B/o9.png');
		this.load.atlas('unity1.2Bflagmain14', basePath+'assets/gradeAssets/1.2B/m4.png', basePath+'assets/gradeAssets/1.2B/m4.json');
		this.load.image('unity1.2BAns31', basePath+'assets/gradeAssets/1.2B/o10.png');
		this.load.image('unity1.2BAns32', basePath+'assets/gradeAssets/1.2B/o11.png');
		this.load.image('unity1.2BAns33', basePath+'assets/gradeAssets/1.2B/o12.png');
		this.load.atlas('unity1.2Bflagmain15', basePath+'assets/gradeAssets/1.2B/m5.png', basePath+'assets/gradeAssets/1.2B/m5.json');
		this.load.image('unity1.2BAns41', basePath+'assets/gradeAssets/1.2B/o13.png');
		this.load.image('unity1.2BAns42', basePath+'assets/gradeAssets/1.2B/o14.png');
		this.load.image('unity1.2BAns43', basePath+'assets/gradeAssets/1.2B/o15.png');
		this.load.atlas('unity1.2Bflagmain16', basePath+'assets/gradeAssets/1.2B/m6.png', basePath+'assets/gradeAssets/1.2B/m6.json');
		this.load.image('unity1.2BAns51', basePath+'assets/gradeAssets/1.2B/o16.png');
		this.load.image('unity1.2BAns52', basePath+'assets/gradeAssets/1.2B/o17.png');
		this.load.image('unity1.2BAns53', basePath+'assets/gradeAssets/1.2B/o18.png');
		this.load.atlas('unity1.2Bflagmain17', basePath+'assets/gradeAssets/1.2B/m7.png', basePath+'assets/gradeAssets/1.2B/m7.json');
		this.load.image('unity1.2BAns61', basePath+'assets/gradeAssets/1.2B/o19.png');
		this.load.image('unity1.2BAns62', basePath+'assets/gradeAssets/1.2B/o20.png');
		this.load.image('unity1.2BAns63', basePath+'assets/gradeAssets/1.2B/o21.png');
		this.load.atlas('unity1.2Bflagmain18', basePath+'assets/gradeAssets/1.2B/m8.png', basePath+'assets/gradeAssets/1.2B/m8.json');
		this.load.image('unity1.2BAns71', basePath+'assets/gradeAssets/1.2B/o22.png');
		this.load.image('unity1.2BAns72', basePath+'assets/gradeAssets/1.2B/o23.png');
		this.load.image('unity1.2BAns73', basePath+'assets/gradeAssets/1.2B/o24.png');
		this.load.atlas('unity1.2Bflagmain19', basePath+'assets/gradeAssets/1.2B/m9.png', basePath+'assets/gradeAssets/1.2B/m9.json');
		this.load.image('unity1.2BAns81', basePath+'assets/gradeAssets/1.2B/o25.png');
		this.load.image('unity1.2BAns82', basePath+'assets/gradeAssets/1.2B/o26.png');
		this.load.image('unity1.2BAns83', basePath+'assets/gradeAssets/1.2B/o27.png');
		this.load.atlas('unity1.2Bflagmain20', basePath+'assets/gradeAssets/1.2B/m10.png', basePath+'assets/gradeAssets/1.2B/m10.json');
		this.load.image('unity1.2BAns91', basePath+'assets/gradeAssets/1.2B/o28.png');
		this.load.image('unity1.2BAns92', basePath+'assets/gradeAssets/1.2B/o29.png');
		this.load.image('unity1.2BAns93', basePath+'assets/gradeAssets/1.2B/o30.png');
		this.load.atlas('unity1.2Bflagmain21', basePath+'assets/gradeAssets/1.2B/m11.png', basePath+'assets/gradeAssets/1.2B/m11.json');
		this.load.image('unity1.2BAns101', basePath+'assets/gradeAssets/1.2B/o31.png');
		this.load.image('unity1.2BAns102', basePath+'assets/gradeAssets/1.2B/o32.png');
		this.load.image('unity1.2BAns103', basePath+'assets/gradeAssets/1.2B/o33.png');

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
		this.state.start('grade1_2Blevel1');
	},
};
