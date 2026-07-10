Game.preloader_2_1A=function(game){
	this.preloadBar=null;
};

Game.preloader_2_1A.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (2.1A)
		this.load.image('Level21_bg1', basePath+'assets/gradeAssets/2.1A/bg1.png');
		this.load.image('Level21_bg3', basePath+'assets/gradeAssets/2.1A/bg3.png');
		this.load.image('Level21_sh', basePath+'assets/gradeAssets/2.1A/sh.png');
		this.load.image('Level21_cloud', basePath+'assets/gradeAssets/2.1A/cloud.png');
		this.load.image('Level21_cloud2', basePath+'assets/gradeAssets/2.1A/c2.png');
		this.load.image('Level21_cloud3', basePath+'assets/gradeAssets/2.1A/cloud3.png');
		this.load.image('Level21_cloud4', basePath+'assets/gradeAssets/2.1A/cloud4.png');
		this.load.image('Level21_cloud5', basePath+'assets/gradeAssets/2.1A/cloud5.png');
		this.load.atlas('Level21_giraffe', basePath+'assets/gradeAssets/2.1A/giraffe.png', basePath+'assets/gradeAssets/2.1A/giraffe.json');
		this.load.atlas('Level21_elephant', basePath+'assets/gradeAssets/2.1A/elephant.png', basePath+'assets/gradeAssets/2.1A/elephant.json');
		this.load.image('Level21_tree1', basePath+'assets/gradeAssets/2.1A/tree1.png');
		this.load.atlas('Level21_bird1', basePath+'assets/gradeAssets/2.1A/bird1.png', basePath+'assets/gradeAssets/2.1A/bird1.json');
		this.load.atlas('Level21_dog1', basePath+'assets/gradeAssets/2.1A/dog1.png', basePath+'assets/gradeAssets/2.1A/dog1.json');
		this.load.atlas('Level21_cat', basePath+'assets/gradeAssets/2.1A/cat.png', basePath+'assets/gradeAssets/2.1A/cat.json');
		this.load.image('Level21_house1', basePath+'assets/gradeAssets/2.1A/house1.png');
		this.load.atlas('Level21_bluemug', basePath+'assets/gradeAssets/2.1A/bluemug.png', basePath+'assets/gradeAssets/2.1A/bluemug.json');
		this.load.atlas('Level21_pinkpot', basePath+'assets/gradeAssets/2.1A/pinkpot.png', basePath+'assets/gradeAssets/2.1A/pinkpot.json');
		this.load.image('Level21_chair1', basePath+'assets/gradeAssets/2.1A/chair1.png');
		this.load.image('Level21_ladder1', basePath+'assets/gradeAssets/2.1A/ladder1.png');
		this.load.image('Level21_sofa1', basePath+'assets/gradeAssets/2.1A/sofa1.png');
		this.load.atlas('Level21_clock1', basePath+'assets/gradeAssets/2.1A/clock1.png', basePath+'assets/gradeAssets/2.1A/clock1.json');
		this.load.atlas('Level21_book1', basePath+'assets/gradeAssets/2.1A/book1.png', basePath+'assets/gradeAssets/2.1A/book1.json');
		this.load.atlas('Level21_elephant1', basePath+'assets/gradeAssets/2.1A/elephant1.png', basePath+'assets/gradeAssets/2.1A/elephant1.json');
		this.load.atlas('Level21_bee1', basePath+'assets/gradeAssets/2.1A/bee1.png', basePath+'assets/gradeAssets/2.1A/bee1.json');
		this.load.atlas('Level21_papaya1', basePath+'assets/gradeAssets/2.1A/papaya1.png', basePath+'assets/gradeAssets/2.1A/papaya1.json');
		this.load.atlas('Level21_banana1', basePath+'assets/gradeAssets/2.1A/banana1.png', basePath+'assets/gradeAssets/2.1A/banana1.json');
		this.load.atlas('Level21_key1', basePath+'assets/gradeAssets/2.1A/key1.png', basePath+'assets/gradeAssets/2.1A/key1.json');
		this.load.atlas('Level21_key2', basePath+'assets/gradeAssets/2.1A/key2.png', basePath+'assets/gradeAssets/2.1A/key2.json');
		this.load.atlas('Level21_dog2', basePath+'assets/gradeAssets/2.1A/dog2.png', basePath+'assets/gradeAssets/2.1A/dog2.json');
		this.load.atlas('Level21_cat2', basePath+'assets/gradeAssets/2.1A/cat2.png', basePath+'assets/gradeAssets/2.1A/cat2.json');
		this.load.atlas('Level21_dog3', basePath+'assets/gradeAssets/2.1A/dog3.png', basePath+'assets/gradeAssets/2.1A/dog3.json');
		this.load.atlas('Level21_snake1', basePath+'assets/gradeAssets/2.1A/snake1.png', basePath+'assets/gradeAssets/2.1A/snake1.json');
		this.load.image('Level21_sofa2', basePath+'assets/gradeAssets/2.1A/sofa2.png');
		this.load.image('Level21_table1', basePath+'assets/gradeAssets/2.1A/table1.png');
		this.load.atlas('Level21_cat3', basePath+'assets/gradeAssets/2.1A/cat3.png', basePath+'assets/gradeAssets/2.1A/cat3.json');
		this.load.atlas('Level21_book2', basePath+'assets/gradeAssets/2.1A/book2.png', basePath+'assets/gradeAssets/2.1A/book2.json');
		this.load.image('Level21_sofa3', basePath+'assets/gradeAssets/2.1A/sofa3.png');
		this.load.atlas('Level21_scooter1', basePath+'assets/gradeAssets/2.1A/scooter1.png', basePath+'assets/gradeAssets/2.1A/scooter1.json');
		this.load.atlas('Level21_car1', basePath+'assets/gradeAssets/2.1A/car1.png', basePath+'assets/gradeAssets/2.1A/car1.json');
		this.load.image('Level21_house2', basePath+'assets/gradeAssets/2.1A/house2.png');
		this.load.atlas('Level21_cat4', basePath+'assets/gradeAssets/2.1A/cat4.png', basePath+'assets/gradeAssets/2.1A/cat4.json');
		this.load.image('Level21_tree2', basePath+'assets/gradeAssets/2.1A/tree2.png');
		this.load.atlas('Level21_croc1', basePath+'assets/gradeAssets/2.1A/croc1.png', basePath+'assets/gradeAssets/2.1A/croc1.json');
		this.load.atlas('Level21_bird2', basePath+'assets/gradeAssets/2.1A/bird2.png', basePath+'assets/gradeAssets/2.1A/bird2.json');
		this.load.atlas('Level21_fish1', basePath+'assets/gradeAssets/2.1A/fish1.png', basePath+'assets/gradeAssets/2.1A/fish1.json');
		this.load.atlas('Level21_cat5', basePath+'assets/gradeAssets/2.1A/cat5.png', basePath+'assets/gradeAssets/2.1A/cat5.json');
		this.load.image('Level21_house3', basePath+'assets/gradeAssets/2.1A/house3.png');
		this.load.atlas('Level21_sofa4', basePath+'assets/gradeAssets/2.1A/sofa4.png', basePath+'assets/gradeAssets/2.1A/sofa4.json');
		this.load.atlas('Level21_scooter2', basePath+'assets/gradeAssets/2.1A/scooter2.png', basePath+'assets/gradeAssets/2.1A/scooter2.json');
		this.load.image('Level21_basket1', basePath+'assets/gradeAssets/2.1A/basket1.png');
		this.load.atlas('Level21_papaya2', basePath+'assets/gradeAssets/2.1A/papaya2.png', basePath+'assets/gradeAssets/2.1A/papaya2.json');
		this.load.image('Level21_flower1', basePath+'assets/gradeAssets/2.1A/flower1.png');
		this.load.atlas('Level21_pot2', basePath+'assets/gradeAssets/2.1A/pot2.png', basePath+'assets/gradeAssets/2.1A/pot2.json');
		this.load.atlas('Level21_bee2', basePath+'assets/gradeAssets/2.1A/bee2.png', basePath+'assets/gradeAssets/2.1A/bee2.json');
		this.load.image('Level21_books', basePath+'assets/gradeAssets/2.1A/books.png');
		this.load.atlas('Level21_book3', basePath+'assets/gradeAssets/2.1A/book3.png', basePath+'assets/gradeAssets/2.1A/book3.json');
		this.load.image('Level21_step1', basePath+'assets/gradeAssets/2.1A/step1.png');
		this.load.atlas('Level21_mug1', basePath+'assets/gradeAssets/2.1A/mug1.png', basePath+'assets/gradeAssets/2.1A/mug1.json');
		this.load.atlas('Level21_mug2', basePath+'assets/gradeAssets/2.1A/mug2.png', basePath+'assets/gradeAssets/2.1A/mug2.json');
		this.load.image('Level21_table2', basePath+'assets/gradeAssets/2.1A/table2.png');
		this.load.atlas('Level21_clock2', basePath+'assets/gradeAssets/2.1A/clock2.png', basePath+'assets/gradeAssets/2.1A/clock2.json');
		this.load.atlas('Level21_book4', basePath+'assets/gradeAssets/2.1A/book4.png', basePath+'assets/gradeAssets/2.1A/book4.json');
		this.load.atlas('Level21_cat44', basePath+'assets/gradeAssets/2.1A/cat44.png', basePath+'assets/gradeAssets/2.1A/cat44.json');
		this.load.image('Level21_tree3', basePath+'assets/gradeAssets/2.1A/tree3.png');
		this.load.image('Level21_z1', basePath+'assets/gradeAssets/2.1A/z1.png');
		this.load.image('Level21_house4', basePath+'assets/gradeAssets/2.1A/house4.png');
		this.load.atlas('Level21_mug3', basePath+'assets/gradeAssets/2.1A/mug3.png', basePath+'assets/gradeAssets/2.1A/mug3.json');
		this.load.atlas('Level21_mug6', basePath+'assets/gradeAssets/2.1A/mug6.png', basePath+'assets/gradeAssets/2.1A/mug6.json');
		this.load.image('Level21_cloud7', basePath+'assets/gradeAssets/2.1A/cloud7.png');
		this.load.image('Level21_cloud8', basePath+'assets/gradeAssets/2.1A/cloud8.png');
		this.load.image('Level21_scooter5', basePath+'assets/gradeAssets/2.1A/scooter5.png');
		this.load.atlas('Level21_bird3', basePath+'assets/gradeAssets/2.1A/bird3.png', basePath+'assets/gradeAssets/2.1A/bird3.json');
		this.load.image('Level21_sofa5', basePath+'assets/gradeAssets/2.1A/sofa5.png');
		this.load.atlas('Level21_painting', basePath+'assets/gradeAssets/2.1A/painting.png', basePath+'assets/gradeAssets/2.1A/painting.json');
		this.load.image('Level21_stand', basePath+'assets/gradeAssets/2.1A/stand.png');
		this.load.atlas('Level21_drum', basePath+'assets/gradeAssets/2.1A/drum.png', basePath+'assets/gradeAssets/2.1A/drum.json');
		this.load.atlas('Level21_pot4', basePath+'assets/gradeAssets/2.1A/pot4.png', basePath+'assets/gradeAssets/2.1A/pot4.json');
		this.load.image('Level21_rope', basePath+'assets/gradeAssets/2.1A/rope.png');
		this.load.atlas('Level21_kite', basePath+'assets/gradeAssets/2.1A/kite.png', basePath+'assets/gradeAssets/2.1A/kite.json');
		this.load.atlas('Level21_trees', basePath+'assets/gradeAssets/2.1A/trees.png', basePath+'assets/gradeAssets/2.1A/trees.json');
		this.load.atlas('Level21_catss', basePath+'assets/gradeAssets/2.1A/catss.png', basePath+'assets/gradeAssets/2.1A/catss.json');
		this.load.atlas('Level21_treee', basePath+'assets/gradeAssets/2.1A/treee.png', basePath+'assets/gradeAssets/2.1A/treee.json');
		this.load.atlas('Level21_treee1', basePath+'assets/gradeAssets/2.1A/treee1.png', basePath+'assets/gradeAssets/2.1A/treee1.json');
		this.load.atlas('Level21_btn', basePath+'assets/gradeAssets/2.1A/btn.png', basePath+'assets/gradeAssets/2.1A/btn.json');

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
		this.state.start('grade2_1Alevel1');
	},
};
