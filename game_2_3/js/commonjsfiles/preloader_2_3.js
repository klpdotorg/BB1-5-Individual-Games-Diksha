Game.preloader_2_3=function(game){
	this.preloadBar=null;
};

Game.preloader_2_3.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (2.3)
		this.load.image('Level23_bg1', basePath+'assets/gradeAssets/2.3/bg1.png');
		this.load.image('Level23_bg3', basePath+'assets/gradeAssets/2.3/bg3.png');
		this.load.atlas('Level23_jugg', basePath+'assets/gradeAssets/2.3/jugg.png', basePath+'assets/gradeAssets/2.3/jugg.json');
		this.load.atlas('Level23_boot', basePath+'assets/gradeAssets/2.3/boot.png', basePath+'assets/gradeAssets/2.3/boot.json');
		this.load.atlas('Level23_housenew', basePath+'assets/gradeAssets/2.3/housenew.png', basePath+'assets/gradeAssets/2.3/housenew.json');
		this.load.atlas('Level23_numberbtn1', basePath+'assets/gradeAssets/2.3/numberbtn1.png', basePath+'assets/gradeAssets/2.3/numberbtn1.json');
		this.load.atlas('Level23_numberbtn2', basePath+'assets/gradeAssets/2.3/numberbtn2.png', basePath+'assets/gradeAssets/2.3/numberbtn2.json');
		this.load.atlas('Level23_numberbtn3', basePath+'assets/gradeAssets/2.3/numberbtn3.png', basePath+'assets/gradeAssets/2.3/numberbtn3.json');
		this.load.atlas('Level23_numberbtn4', basePath+'assets/gradeAssets/2.3/numberbtn4.png', basePath+'assets/gradeAssets/2.3/numberbtn4.json');
		this.load.atlas('Level23_numberbtn5', basePath+'assets/gradeAssets/2.3/numberbtn5.png', basePath+'assets/gradeAssets/2.3/numberbtn5.json');
		this.load.atlas('Level23_numberbtn6', basePath+'assets/gradeAssets/2.3/numberbtn6.png', basePath+'assets/gradeAssets/2.3/numberbtn6.json');
		this.load.atlas('Level23_numberbtn7', basePath+'assets/gradeAssets/2.3/numberbtn7.png', basePath+'assets/gradeAssets/2.3/numberbtn7.json');
		this.load.atlas('Level23_numberbtn8', basePath+'assets/gradeAssets/2.3/numberbtn8.png', basePath+'assets/gradeAssets/2.3/numberbtn8.json');
		this.load.atlas('Level23_numberbtn9', basePath+'assets/gradeAssets/2.3/numberbtn9.png', basePath+'assets/gradeAssets/2.3/numberbtn9.json');
		this.load.atlas('calNum', basePath+'assets/gradeAssets/2.3/calNum.png', basePath+'assets/gradeAssets/2.3/calNum.json');
		this.load.atlas('Level23_tree1', basePath+'assets/gradeAssets/2.3/tree1.png', basePath+'assets/gradeAssets/2.3/tree1.json');
		this.load.image('Level23_leaf1', basePath+'assets/gradeAssets/2.3/leaf1.png');
		this.load.image('Level23_line1', basePath+'assets/gradeAssets/2.3/line1.png');
		this.load.atlas('Level23_leaf', basePath+'assets/gradeAssets/2.3/leaf.png', basePath+'assets/gradeAssets/2.3/leaf.json');
		this.load.atlas('Level23_pencil', basePath+'assets/gradeAssets/2.3/pencil.png', basePath+'assets/gradeAssets/2.3/pencil.json');
		this.load.image('Level23_cutter1', basePath+'assets/gradeAssets/2.3/cutter1.png');
		this.load.atlas('Level23_cutters', basePath+'assets/gradeAssets/2.3/cutters.png', basePath+'assets/gradeAssets/2.3/cutters.json');
		this.load.atlas('Level23_crocodile', basePath+'assets/gradeAssets/2.3/crocodile.png', basePath+'assets/gradeAssets/2.3/crocodile.json');
		this.load.atlas('Level23_crocs', basePath+'assets/gradeAssets/2.3/crocs.png', basePath+'assets/gradeAssets/2.3/crocs.json');
		this.load.image('Level23_line2', basePath+'assets/gradeAssets/2.3/line2.png');
		this.load.image('Level23_crocodile1', basePath+'assets/gradeAssets/2.3/crocodile1.png');
		this.load.atlas('Level23_snake', basePath+'assets/gradeAssets/2.3/Snake.png', basePath+'assets/gradeAssets/2.3/Snake.json');
		this.load.atlas('Level23_buggs', basePath+'assets/gradeAssets/2.3/Buggs.png', basePath+'assets/gradeAssets/2.3/Buggs.json');
		this.load.image('Level23_bug1', basePath+'assets/gradeAssets/2.3/bug1.png');
		this.load.atlas('Level23_Window', basePath+'assets/gradeAssets/2.3/Window.png', basePath+'assets/gradeAssets/2.3/window.json');
		this.load.atlas('Level23_palms', basePath+'assets/gradeAssets/2.3/palms.png', basePath+'assets/gradeAssets/2.3/palms.json');
		this.load.image('Level23_palm1', basePath+'assets/gradeAssets/2.3/palm1.png');
		this.load.atlas('Level23_petrol', basePath+'assets/gradeAssets/2.3/petrol.png', basePath+'assets/gradeAssets/2.3/petrol.json');
		this.load.atlas('Level23_petrol111', basePath+'assets/gradeAssets/2.3/petrol111.png', basePath+'assets/gradeAssets/2.3/petrol111.json');
		this.load.atlas('Level23_petrolbooth', basePath+'assets/gradeAssets/2.3/petrolbooth.png', basePath+'assets/gradeAssets/2.3/petrolbooth.json');
		this.load.atlas('Level23_tablebox', basePath+'assets/gradeAssets/2.3/tablebox.png', basePath+'assets/gradeAssets/2.3/tablebox.json');
		this.load.atlas('Level23_Can', basePath+'assets/gradeAssets/2.3/Can.png', basePath+'assets/gradeAssets/2.3/Can.json');
		this.load.image('Level23_Line8', basePath+'assets/gradeAssets/2.3/Line8.png');
		this.load.atlas('Level23_Shoes', basePath+'assets/gradeAssets/2.3/Shoes.png', basePath+'assets/gradeAssets/2.3/Shoes.json');
		this.load.atlas('Level23_palm22', basePath+'assets/gradeAssets/2.3/palm22.png', basePath+'assets/gradeAssets/2.3/palm22.json');
		this.load.image('Level23_Line9', basePath+'assets/gradeAssets/2.3/Line9.png');
		this.load.image('Level23_palm2', basePath+'assets/gradeAssets/2.3/palm2.png');
		this.load.atlas('Level23_soffa', basePath+'assets/gradeAssets/2.3/Soffa.png', basePath+'assets/gradeAssets/2.3/Soffa.json');
		this.load.image('Level23_Line10', basePath+'assets/gradeAssets/2.3/Line10.png');
		this.load.atlas('Level23_Longtable', basePath+'assets/gradeAssets/2.3/Longtable.png', basePath+'assets/gradeAssets/2.3/Longtable.json');
		this.load.image('Level23_Line11', basePath+'assets/gradeAssets/2.3/Line11.png');
		this.load.atlas('Level23_Suitcase', basePath+'assets/gradeAssets/2.3/Suitcase.png', basePath+'assets/gradeAssets/2.3/Suitcase.json');
		this.load.image('Level23_Line12', basePath+'assets/gradeAssets/2.3/Line12.png');
		this.load.atlas('Level23_Car', basePath+'assets/gradeAssets/2.3/Car.png', basePath+'assets/gradeAssets/2.3/Car.json');
		this.load.atlas('Level23_hand', basePath+'assets/gradeAssets/2.3/hand.png', basePath+'assets/gradeAssets/2.3/hand.json');
		this.load.image('Level23_Line13', basePath+'assets/gradeAssets/2.3/Line13.png');
		this.load.image('Level23_hand1', basePath+'assets/gradeAssets/2.3/hand1.png');
		this.load.atlas('Level23_gate', basePath+'assets/gradeAssets/2.3/gate.png', basePath+'assets/gradeAssets/2.3/gate.json');
		this.load.image('Level23_Line14', basePath+'assets/gradeAssets/2.3/Line14.png');
		this.load.atlas('Level23_Table', basePath+'assets/gradeAssets/2.3/Table.png', basePath+'assets/gradeAssets/2.3/Table.json');
		this.load.image('Level23_Line15', basePath+'assets/gradeAssets/2.3/Line15.png');
		this.load.atlas('Level23_rope', basePath+'assets/gradeAssets/2.3/rope.png', basePath+'assets/gradeAssets/2.3/rope.json');
		this.load.image('Level23_Line16', basePath+'assets/gradeAssets/2.3/Line16.png');
		this.load.atlas('Level23_Chair', basePath+'assets/gradeAssets/2.3/Chair.png', basePath+'assets/gradeAssets/2.3/Chair.json');
		this.load.atlas('Level23_hand11', basePath+'assets/gradeAssets/2.3/hand11.png', basePath+'assets/gradeAssets/2.3/hand11.json');
		this.load.image('Level23_Line17', basePath+'assets/gradeAssets/2.3/Line17.png');
		this.load.image('Level23_hand111', basePath+'assets/gradeAssets/2.3/hand111.png');
		this.load.atlas('Level23_door', basePath+'assets/gradeAssets/2.3/door.png', basePath+'assets/gradeAssets/2.3/door.json');
		this.load.image('Level23_Line18', basePath+'assets/gradeAssets/2.3/Line18.png');
		this.load.atlas('Level23_flower', basePath+'assets/gradeAssets/2.3/flower.png', basePath+'assets/gradeAssets/2.3/flower.json');
		this.load.image('Level23_Line19', basePath+'assets/gradeAssets/2.3/Line19.png');
		this.load.atlas('Level23_flower1', basePath+'assets/gradeAssets/2.3/flower1.png', basePath+'assets/gradeAssets/2.3/flower1.json');
		this.load.image('Level23_Line20', basePath+'assets/gradeAssets/2.3/Line20.png');
		this.load.atlas('Level23_ladder', basePath+'assets/gradeAssets/2.3/ladder.png', basePath+'assets/gradeAssets/2.3/ladder.json');
		this.load.atlas('Level23_feets', basePath+'assets/gradeAssets/2.3/feets.png', basePath+'assets/gradeAssets/2.3/feets.json');
		this.load.atlas('Level23_feets101', basePath+'assets/gradeAssets/2.3/feets101.png', basePath+'assets/gradeAssets/2.3/feets101.json');
		this.load.image('Level23_Line21', basePath+'assets/gradeAssets/2.3/Line21.png');
		this.load.image('Level23_feet1', basePath+'assets/gradeAssets/2.3/feet1.png');
		this.load.image('Level23_feet2', basePath+'assets/gradeAssets/2.3/feet2.png');
		this.load.atlas('Level23_House', basePath+'assets/gradeAssets/2.3/House.png', basePath+'assets/gradeAssets/2.3/House.json');
		this.load.image('Level23_Line22', basePath+'assets/gradeAssets/2.3/Line22.png');
		this.load.atlas('Level23_gate2', basePath+'assets/gradeAssets/2.3/gate2.png', basePath+'assets/gradeAssets/2.3/gate2.json');
		this.load.image('Level23_Line23', basePath+'assets/gradeAssets/2.3/Line23.png');
		this.load.atlas('Level23_treee', basePath+'assets/gradeAssets/2.3/treee.png', basePath+'assets/gradeAssets/2.3/treee.json');
		this.load.image('Level23_Line24', basePath+'assets/gradeAssets/2.3/Line24.png');
		this.load.atlas('Level23_ladder2', basePath+'assets/gradeAssets/2.3/ladder2.png', basePath+'assets/gradeAssets/2.3/ladder2.json');
		this.load.atlas('Level23_ropes11', basePath+'assets/gradeAssets/2.3/ropes11.png', basePath+'assets/gradeAssets/2.3/ropes11.json');
		this.load.image('Level23_Line28', basePath+'assets/gradeAssets/2.3/Line28.png');
		this.load.image('Level23_rope11', basePath+'assets/gradeAssets/2.3/rope11.png');
		this.load.atlas('Level23_door111', basePath+'assets/gradeAssets/2.3/door111.png', basePath+'assets/gradeAssets/2.3/door111.json');
		this.load.image('Level23_Line27', basePath+'assets/gradeAssets/2.3/Line27.png');
		this.load.image('Level23_Line26', basePath+'assets/gradeAssets/2.3/Line26.png');
		this.load.atlas('Level23_flower111', basePath+'assets/gradeAssets/2.3/flower111.png', basePath+'assets/gradeAssets/2.3/flower111.json');
		this.load.image('Level23_Line25', basePath+'assets/gradeAssets/2.3/Line25.png');
		this.load.atlas('Level23_car111', basePath+'assets/gradeAssets/2.3/car111.png', basePath+'assets/gradeAssets/2.3/car111.json');
		this.load.atlas('Level23_ropes111', basePath+'assets/gradeAssets/2.3/ropes111.png', basePath+'assets/gradeAssets/2.3/ropes111.json');
		this.load.image('Level23_Line32', basePath+'assets/gradeAssets/2.3/Line32.png');
		this.load.image('Level23_rope111', basePath+'assets/gradeAssets/2.3/rope111.png');
		this.load.atlas('Level23_gate21', basePath+'assets/gradeAssets/2.3/gate21.png', basePath+'assets/gradeAssets/2.3/gate21.json');
		this.load.image('Level23_Line31', basePath+'assets/gradeAssets/2.3/Line31.png');
		this.load.atlas('Level23_longtable111', basePath+'assets/gradeAssets/2.3/longtable111.png', basePath+'assets/gradeAssets/2.3/longtable111.json');
		this.load.image('Level23_Line30', basePath+'assets/gradeAssets/2.3/Line30.png');
		this.load.atlas('Level23_shoes111', basePath+'assets/gradeAssets/2.3/shoes111.png', basePath+'assets/gradeAssets/2.3/shoes111.json');
		this.load.image('Level23_Line29', basePath+'assets/gradeAssets/2.3/Line29.png');

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
		this.load.image('bottomBar', basePath+'assets/commonAssets/bottomBar.png');



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
		this.state.start('grade2_3level1');
	},
};
