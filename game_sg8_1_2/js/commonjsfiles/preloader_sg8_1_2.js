Game.preloader_sg8_1_2=function(game){
	this.preloadBar=null;
};

Game.preloader_sg8_1_2.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg8.1.2)
		this.load.atlas('SG3_1_1rightmark',basePath+'assets/gradeAssets/sg3.1.1/rightmark.png',basePath+'assets/gradeAssets/sg3.1.1/rightmark.json');
		this.load.image("sg8_1_2_A",basePath+"assets/gradeAssets/sg8.1.2/A/A.png");
		this.load.atlas("sg8_1_2_image1",basePath+"assets/gradeAssets/sg8.1.2/A/1.png",basePath+"assets/gradeAssets/sg8.1.2/A/1.json");
		this.load.atlas("sg8_1_2_image2",basePath+"assets/gradeAssets/sg8.1.2/A/2.png",basePath+"assets/gradeAssets/sg8.1.2/A/2.json");
		this.load.atlas("sg8_1_2_image3",basePath+"assets/gradeAssets/sg8.1.2/A/3.png",basePath+"assets/gradeAssets/sg8.1.2/A/3.json");
		this.load.atlas("sg8_1_2_old_image1",basePath+"assets/gradeAssets/sg8.1.2/A/1_old.png",basePath+"assets/gradeAssets/sg8.1.2/A/1_old.json");
		this.load.atlas("sg8_1_2_old_image2",basePath+"assets/gradeAssets/sg8.1.2/A/2_old.png",basePath+"assets/gradeAssets/sg8.1.2/A/2_old.json");
		this.load.atlas("sg8_1_2_old_image3",basePath+"assets/gradeAssets/sg8.1.2/A/3_old.png",basePath+"assets/gradeAssets/sg8.1.2/A/3_old.json");
		this.load.image("sg8_1_2_B",basePath+"assets/gradeAssets/sg8.1.2/B/B.png");
		this.load.atlas("sg8_1_2_image4",basePath+"assets/gradeAssets/sg8.1.2/B/4.png",basePath+"assets/gradeAssets/sg8.1.2/B/4.json");
		this.load.atlas("sg8_1_2_image5",basePath+"assets/gradeAssets/sg8.1.2/B/5.png",basePath+"assets/gradeAssets/sg8.1.2/B/5.json");
		this.load.atlas("sg8_1_2_image6",basePath+"assets/gradeAssets/sg8.1.2/B/6.png",basePath+"assets/gradeAssets/sg8.1.2/B/6.json");
		this.load.atlas("sg8_1_2_old_image4",basePath+"assets/gradeAssets/sg8.1.2/B/4_old.png",basePath+"assets/gradeAssets/sg8.1.2/B/4_old.json");
		this.load.atlas("sg8_1_2_old_image5",basePath+"assets/gradeAssets/sg8.1.2/B/5_old.png",basePath+"assets/gradeAssets/sg8.1.2/B/5_old.json");
		this.load.atlas("sg8_1_2_old_image6",basePath+"assets/gradeAssets/sg8.1.2/B/6_old.png",basePath+"assets/gradeAssets/sg8.1.2/B/6_old.json");
		this.load.image("sg8_1_2_C",basePath+"assets/gradeAssets/sg8.1.2/C/C.png");
		this.load.atlas("sg8_1_2_image7",basePath+"assets/gradeAssets/sg8.1.2/C/7.png",basePath+"assets/gradeAssets/sg8.1.2/C/7.json");
		this.load.atlas("sg8_1_2_image8",basePath+"assets/gradeAssets/sg8.1.2/C/8.png",basePath+"assets/gradeAssets/sg8.1.2/C/8.json");
		this.load.atlas("sg8_1_2_old_image7",basePath+"assets/gradeAssets/sg8.1.2/C/7_old.png",basePath+"assets/gradeAssets/sg8.1.2/C/7_old.json");
		this.load.atlas("sg8_1_2_old_image8",basePath+"assets/gradeAssets/sg8.1.2/C/8_old.png",basePath+"assets/gradeAssets/sg8.1.2/C/8_old.json");
		this.load.image("sg8_1_2_F",basePath+"assets/gradeAssets/sg8.1.2/F/F.png");
		this.load.atlas("sg8_1_2_image17",basePath+"assets/gradeAssets/sg8.1.2/F/17.png",basePath+"assets/gradeAssets/sg8.1.2/F/17.json");
		this.load.atlas("sg8_1_2_image18",basePath+"assets/gradeAssets/sg8.1.2/F/18.png",basePath+"assets/gradeAssets/sg8.1.2/F/18.json");
		this.load.atlas("sg8_1_2_image19",basePath+"assets/gradeAssets/sg8.1.2/F/19.png",basePath+"assets/gradeAssets/sg8.1.2/F/19.json");
		this.load.atlas("sg8_1_2_image20",basePath+"assets/gradeAssets/sg8.1.2/F/20.png",basePath+"assets/gradeAssets/sg8.1.2/F/20.json");
		this.load.atlas("sg8_1_2_old_image17",basePath+"assets/gradeAssets/sg8.1.2/F/17_old.png",basePath+"assets/gradeAssets/sg8.1.2/F/17_old.json");
		this.load.atlas("sg8_1_2_old_image18",basePath+"assets/gradeAssets/sg8.1.2/F/18_old.png",basePath+"assets/gradeAssets/sg8.1.2/F/18_old.json");
		this.load.atlas("sg8_1_2_old_image19",basePath+"assets/gradeAssets/sg8.1.2/F/19_old.png",basePath+"assets/gradeAssets/sg8.1.2/F/19_old.json");
		this.load.atlas("sg8_1_2_old_image20",basePath+"assets/gradeAssets/sg8.1.2/F/20_old.png",basePath+"assets/gradeAssets/sg8.1.2/F/20_old.json");
		this.load.image("sg8_1_2_H",basePath+"assets/gradeAssets/sg8.1.2/H/H.png");
		this.load.atlas("sg8_1_2_image26",basePath+"assets/gradeAssets/sg8.1.2/H/26.png",basePath+"assets/gradeAssets/sg8.1.2/H/26.json");
		this.load.atlas("sg8_1_2_image27",basePath+"assets/gradeAssets/sg8.1.2/H/27.png",basePath+"assets/gradeAssets/sg8.1.2/H/27.json");
		this.load.atlas("sg8_1_2_image28",basePath+"assets/gradeAssets/sg8.1.2/H/28.png",basePath+"assets/gradeAssets/sg8.1.2/H/28.json");
		this.load.atlas("sg8_1_2_image29",basePath+"assets/gradeAssets/sg8.1.2/H/29.png",basePath+"assets/gradeAssets/sg8.1.2/H/29.json");
		this.load.atlas("sg8_1_2_image30",basePath+"assets/gradeAssets/sg8.1.2/H/30.png",basePath+"assets/gradeAssets/sg8.1.2/H/30.json");
		this.load.atlas("sg8_1_2_old_image26",basePath+"assets/gradeAssets/sg8.1.2/H/26_old.png",basePath+"assets/gradeAssets/sg8.1.2/H/26_old.json");
		this.load.atlas("sg8_1_2_old_image27",basePath+"assets/gradeAssets/sg8.1.2/H/27_old.png",basePath+"assets/gradeAssets/sg8.1.2/H/27_old.json");
		this.load.atlas("sg8_1_2_old_image28",basePath+"assets/gradeAssets/sg8.1.2/H/28_old.png",basePath+"assets/gradeAssets/sg8.1.2/H/28_old.json");
		this.load.atlas("sg8_1_2_old_image29",basePath+"assets/gradeAssets/sg8.1.2/H/29_old.png",basePath+"assets/gradeAssets/sg8.1.2/H/29_old.json");
		this.load.atlas("sg8_1_2_old_image30",basePath+"assets/gradeAssets/sg8.1.2/H/30_old.png",basePath+"assets/gradeAssets/sg8.1.2/H/30_old.json");
		this.load.image("sg8_1_2_I",basePath+"assets/gradeAssets/sg8.1.2/I/I.png");
		this.load.atlas("sg8_1_2_image31",basePath+"assets/gradeAssets/sg8.1.2/I/31.png",basePath+"assets/gradeAssets/sg8.1.2/I/31.json");
		this.load.atlas("sg8_1_2_image32",basePath+"assets/gradeAssets/sg8.1.2/I/32.png",basePath+"assets/gradeAssets/sg8.1.2/I/32.json");
		this.load.atlas("sg8_1_2_image33",basePath+"assets/gradeAssets/sg8.1.2/I/33.png",basePath+"assets/gradeAssets/sg8.1.2/I/33.json");
		this.load.atlas("sg8_1_2_image34",basePath+"assets/gradeAssets/sg8.1.2/I/34.png",basePath+"assets/gradeAssets/sg8.1.2/I/34.json");
		this.load.atlas("sg8_1_2_old_image31",basePath+"assets/gradeAssets/sg8.1.2/I/31_old.png",basePath+"assets/gradeAssets/sg8.1.2/I/31_old.json");
		this.load.atlas("sg8_1_2_old_image32",basePath+"assets/gradeAssets/sg8.1.2/I/32_old.png",basePath+"assets/gradeAssets/sg8.1.2/I/32_old.json");
		this.load.atlas("sg8_1_2_old_image33",basePath+"assets/gradeAssets/sg8.1.2/I/33_old.png",basePath+"assets/gradeAssets/sg8.1.2/I/33_old.json");
		this.load.atlas("sg8_1_2_old_image34",basePath+"assets/gradeAssets/sg8.1.2/I/34_old.png",basePath+"assets/gradeAssets/sg8.1.2/I/34_old.json");
		this.load.image("sg8_1_2_L",basePath+"assets/gradeAssets/sg8.1.2/L/L.png");
		this.load.atlas("sg8_1_2_image46",basePath+"assets/gradeAssets/sg8.1.2/L/46.png",basePath+"assets/gradeAssets/sg8.1.2/L/46.json");
		this.load.atlas("sg8_1_2_image47",basePath+"assets/gradeAssets/sg8.1.2/L/47.png",basePath+"assets/gradeAssets/sg8.1.2/L/47.json");
		this.load.atlas("sg8_1_2_image48",basePath+"assets/gradeAssets/sg8.1.2/L/48.png",basePath+"assets/gradeAssets/sg8.1.2/L/48.json");
		this.load.atlas("sg8_1_2_image49",basePath+"assets/gradeAssets/sg8.1.2/L/49.png",basePath+"assets/gradeAssets/sg8.1.2/L/49.json");
		this.load.atlas("sg8_1_2_old_image46",basePath+"assets/gradeAssets/sg8.1.2/L/46_old.png",basePath+"assets/gradeAssets/sg8.1.2/L/46_old.json");
		this.load.atlas("sg8_1_2_old_image47",basePath+"assets/gradeAssets/sg8.1.2/L/47_old.png",basePath+"assets/gradeAssets/sg8.1.2/L/47_old.json");
		this.load.atlas("sg8_1_2_old_image48",basePath+"assets/gradeAssets/sg8.1.2/L/48_old.png",basePath+"assets/gradeAssets/sg8.1.2/L/48_old.json");
		this.load.atlas("sg8_1_2_old_image49",basePath+"assets/gradeAssets/sg8.1.2/L/49_old.png",basePath+"assets/gradeAssets/sg8.1.2/L/49_old.json");
		this.load.image("sg8_1_2_N",basePath+"assets/gradeAssets/sg8.1.2/N/N.png");
		this.load.atlas("sg8_1_2_image52",basePath+"assets/gradeAssets/sg8.1.2/N/52.png",basePath+"assets/gradeAssets/sg8.1.2/N/52.json");
		this.load.atlas("sg8_1_2_image53",basePath+"assets/gradeAssets/sg8.1.2/N/53.png",basePath+"assets/gradeAssets/sg8.1.2/N/53.json");
		this.load.atlas("sg8_1_2_image54",basePath+"assets/gradeAssets/sg8.1.2/N/54.png",basePath+"assets/gradeAssets/sg8.1.2/N/54.json");
		this.load.atlas("sg8_1_2_old_image52",basePath+"assets/gradeAssets/sg8.1.2/N/52_old.png",basePath+"assets/gradeAssets/sg8.1.2/N/52_old.json");
		this.load.atlas("sg8_1_2_old_image53",basePath+"assets/gradeAssets/sg8.1.2/N/53_old.png",basePath+"assets/gradeAssets/sg8.1.2/N/53_old.json");
		this.load.atlas("sg8_1_2_old_image54",basePath+"assets/gradeAssets/sg8.1.2/N/54_old.png",basePath+"assets/gradeAssets/sg8.1.2/N/54_old.json");
		this.load.image("sg8_1_2_X",basePath+"assets/gradeAssets/sg8.1.2/X/X.png");
		this.load.atlas("sg8_1_2_image75",basePath+"assets/gradeAssets/sg8.1.2/X/75.png",basePath+"assets/gradeAssets/sg8.1.2/X/75.json");
		this.load.atlas("sg8_1_2_image76",basePath+"assets/gradeAssets/sg8.1.2/X/76.png",basePath+"assets/gradeAssets/sg8.1.2/X/76.json");
		this.load.atlas("sg8_1_2_image77",basePath+"assets/gradeAssets/sg8.1.2/X/77.png",basePath+"assets/gradeAssets/sg8.1.2/X/77.json");
		this.load.atlas("sg8_1_2_image78",basePath+"assets/gradeAssets/sg8.1.2/X/78.png",basePath+"assets/gradeAssets/sg8.1.2/X/78.json");
		this.load.atlas("sg8_1_2_image79",basePath+"assets/gradeAssets/sg8.1.2/X/79.png",basePath+"assets/gradeAssets/sg8.1.2/X/79.json");
		this.load.atlas("sg8_1_2_image80",basePath+"assets/gradeAssets/sg8.1.2/X/80.png",basePath+"assets/gradeAssets/sg8.1.2/X/80.json");
		this.load.atlas("sg8_1_2_old_image75",basePath+"assets/gradeAssets/sg8.1.2/X/75_old.png",basePath+"assets/gradeAssets/sg8.1.2/X/75_old.json");
		this.load.atlas("sg8_1_2_old_image76",basePath+"assets/gradeAssets/sg8.1.2/X/76_old.png",basePath+"assets/gradeAssets/sg8.1.2/X/76_old.json");
		this.load.atlas("sg8_1_2_old_image77",basePath+"assets/gradeAssets/sg8.1.2/X/77_old.png",basePath+"assets/gradeAssets/sg8.1.2/X/77_old.json");
		this.load.atlas("sg8_1_2_old_image78",basePath+"assets/gradeAssets/sg8.1.2/X/78_old.png",basePath+"assets/gradeAssets/sg8.1.2/X/78_old.json");
		this.load.atlas("sg8_1_2_old_image79",basePath+"assets/gradeAssets/sg8.1.2/X/79_old.png",basePath+"assets/gradeAssets/sg8.1.2/X/79_old.json");
		this.load.atlas("sg8_1_2_old_image80",basePath+"assets/gradeAssets/sg8.1.2/X/80_old.png",basePath+"assets/gradeAssets/sg8.1.2/X/80_old.json");
		this.load.image("sg8_1_2_Y",basePath+"assets/gradeAssets/sg8.1.2/Y/Y.png");
		this.load.atlas("sg8_1_2_image81",basePath+"assets/gradeAssets/sg8.1.2/Y/81.png",basePath+"assets/gradeAssets/sg8.1.2/Y/81.json");
		this.load.atlas("sg8_1_2_image82",basePath+"assets/gradeAssets/sg8.1.2/Y/82.png",basePath+"assets/gradeAssets/sg8.1.2/Y/82.json");
		this.load.atlas("sg8_1_2_image83",basePath+"assets/gradeAssets/sg8.1.2/Y/83.png",basePath+"assets/gradeAssets/sg8.1.2/Y/83.json");
		this.load.atlas("sg8_1_2_image84",basePath+"assets/gradeAssets/sg8.1.2/Y/84.png",basePath+"assets/gradeAssets/sg8.1.2/Y/84.json");
		this.load.atlas("sg8_1_2_image85",basePath+"assets/gradeAssets/sg8.1.2/Y/85.png",basePath+"assets/gradeAssets/sg8.1.2/Y/85.json");
		this.load.atlas("sg8_1_2_image86",basePath+"assets/gradeAssets/sg8.1.2/Y/86.png",basePath+"assets/gradeAssets/sg8.1.2/Y/86.json");
		this.load.atlas("sg8_1_2_image87",basePath+"assets/gradeAssets/sg8.1.2/Y/87.png",basePath+"assets/gradeAssets/sg8.1.2/Y/87.json");
		this.load.atlas("sg8_1_2_image88",basePath+"assets/gradeAssets/sg8.1.2/Y/88.png",basePath+"assets/gradeAssets/sg8.1.2/Y/88.json");
		this.load.atlas("sg8_1_2_old_image81",basePath+"assets/gradeAssets/sg8.1.2/Y/81_old.png",basePath+"assets/gradeAssets/sg8.1.2/Y/81_old.json");
		this.load.atlas("sg8_1_2_old_image82",basePath+"assets/gradeAssets/sg8.1.2/Y/82_old.png",basePath+"assets/gradeAssets/sg8.1.2/Y/82_old.json");
		this.load.atlas("sg8_1_2_old_image83",basePath+"assets/gradeAssets/sg8.1.2/Y/83_old.png",basePath+"assets/gradeAssets/sg8.1.2/Y/83_old.json");
		this.load.atlas("sg8_1_2_old_image84",basePath+"assets/gradeAssets/sg8.1.2/Y/84_old.png",basePath+"assets/gradeAssets/sg8.1.2/Y/84_old.json");
		this.load.atlas("sg8_1_2_old_image85",basePath+"assets/gradeAssets/sg8.1.2/Y/85_old.png",basePath+"assets/gradeAssets/sg8.1.2/Y/85_old.json");
		this.load.atlas("sg8_1_2_old_image86",basePath+"assets/gradeAssets/sg8.1.2/Y/86_old.png",basePath+"assets/gradeAssets/sg8.1.2/Y/86_old.json");
		this.load.atlas("sg8_1_2_old_image87",basePath+"assets/gradeAssets/sg8.1.2/Y/87_old.png",basePath+"assets/gradeAssets/sg8.1.2/Y/87_old.json");
		this.load.atlas("sg8_1_2_old_image88",basePath+"assets/gradeAssets/sg8.1.2/Y/88_old.png",basePath+"assets/gradeAssets/sg8.1.2/Y/88_old.json");
		this.load.atlas("sg8_1_2_TickMark",basePath+"assets/gradeAssets/sg8.1.2/tick.png",basePath+"assets/gradeAssets/sg8.1.2/tick.json");

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
		this.state.start('sg8_1_2level1');
	},
};
