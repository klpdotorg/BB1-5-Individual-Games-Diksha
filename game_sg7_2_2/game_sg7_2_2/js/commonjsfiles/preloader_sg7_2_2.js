Game.preloader_sg7_2_2 = function (game) {
	this.preloadBar = null;
};

Game.preloader_sg7_2_2.prototype = {
	preload: function () {
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg7.2.2)
		this.load.atlas('SG3_1_1rightmark', basePath + 'assets/gradeAssets/sg3.1.1/rightmark.png', basePath + 'assets/gradeAssets/sg3.1.1/rightmark.json');
		this.load.atlas('sg7_2_2_circle', basePath + 'assets/gradeAssets/sg7.2.2/B/1.png', basePath + 'assets/gradeAssets/sg7.2.2/B/1.json');
		this.load.atlas('sg7_2_2_circle2', basePath + 'assets/gradeAssets/sg7.2.2/B/2.png', basePath + 'assets/gradeAssets/sg7.2.2/B/2.json');
		this.load.atlas('sg7_2_2_circle3', basePath + 'assets/gradeAssets/sg7.2.2/B/3.png', basePath + 'assets/gradeAssets/sg7.2.2/B/3.json');
		this.load.atlas('sg7_2_2_circle4', basePath + 'assets/gradeAssets/sg7.2.2/B/4.png', basePath + 'assets/gradeAssets/sg7.2.2/B/4.json');
		this.load.atlas('sg7_2_2_circle5', basePath + 'assets/gradeAssets/sg7.2.2/B/5.png', basePath + 'assets/gradeAssets/sg7.2.2/B/5.json');
		this.load.atlas('sg7_2_2_circle1', basePath + 'assets/gradeAssets/sg7.2.2/C/1.png', basePath + 'assets/gradeAssets/sg7.2.2/C/1.json');
		this.load.atlas('sg7_2_2_circle12', basePath + 'assets/gradeAssets/sg7.2.2/C/2.png', basePath + 'assets/gradeAssets/sg7.2.2/C/2.json');
		this.load.atlas('sg7_2_2_circle13', basePath + 'assets/gradeAssets/sg7.2.2/C/3.png', basePath + 'assets/gradeAssets/sg7.2.2/C/3.json');
		this.load.atlas('sg7_2_2_circle14', basePath + 'assets/gradeAssets/sg7.2.2/C/4.png', basePath + 'assets/gradeAssets/sg7.2.2/C/4.json');
		this.load.atlas('sg7_2_2_circle15', basePath + 'assets/gradeAssets/sg7.2.2/C/5.png', basePath + 'assets/gradeAssets/sg7.2.2/C/5.json');
		this.load.atlas('sg7_2_2_cone', basePath + 'assets/gradeAssets/sg7.2.2/D/1.png', basePath + 'assets/gradeAssets/sg7.2.2/D/1.json');
		this.load.atlas('sg7_2_2_cone2', basePath + 'assets/gradeAssets/sg7.2.2/D/2.png', basePath + 'assets/gradeAssets/sg7.2.2/D/2.json');
		this.load.atlas('sg7_2_2_cone3', basePath + 'assets/gradeAssets/sg7.2.2/D/3.png', basePath + 'assets/gradeAssets/sg7.2.2/D/3.json');
		this.load.atlas('sg7_2_2_cone4', basePath + 'assets/gradeAssets/sg7.2.2/D/4.png', basePath + 'assets/gradeAssets/sg7.2.2/D/4.json');
		this.load.atlas('sg7_2_2_cone1', basePath + 'assets/gradeAssets/sg7.2.2/E/1.png', basePath + 'assets/gradeAssets/sg7.2.2/E/1.json');
		this.load.atlas('sg7_2_2_cone12', basePath + 'assets/gradeAssets/sg7.2.2/E/2.png', basePath + 'assets/gradeAssets/sg7.2.2/E/2.json');
		this.load.atlas('sg7_2_2_cone13', basePath + 'assets/gradeAssets/sg7.2.2/E/3.png', basePath + 'assets/gradeAssets/sg7.2.2/E/3.json');
		this.load.atlas('sg7_2_2_cone14', basePath + 'assets/gradeAssets/sg7.2.2/E/4.png', basePath + 'assets/gradeAssets/sg7.2.2/E/4.json');
		this.load.atlas('sg7_2_2_cube', basePath + 'assets/gradeAssets/sg7.2.2/G/1.png', basePath + 'assets/gradeAssets/sg7.2.2/G/1.json');
		this.load.atlas('sg7_2_2_cube2', basePath + 'assets/gradeAssets/sg7.2.2/G/2.png', basePath + 'assets/gradeAssets/sg7.2.2/G/2.json');
		this.load.atlas('sg7_2_2_cube3', basePath + 'assets/gradeAssets/sg7.2.2/G/3.png', basePath + 'assets/gradeAssets/sg7.2.2/G/3.json');
		this.load.atlas('sg7_2_2_cube4', basePath + 'assets/gradeAssets/sg7.2.2/G/4.png', basePath + 'assets/gradeAssets/sg7.2.2/G/4.json');
		this.load.atlas('sg7_2_2_cube5', basePath + 'assets/gradeAssets/sg7.2.2/G/5.png', basePath + 'assets/gradeAssets/sg7.2.2/G/5.json');
		this.load.atlas('sg7_2_2_cube6', basePath + 'assets/gradeAssets/sg7.2.2/G/6.png', basePath + 'assets/gradeAssets/sg7.2.2/G/6.json');
		this.load.atlas('sg7_2_2_cube7', basePath + 'assets/gradeAssets/sg7.2.2/G/7.png', basePath + 'assets/gradeAssets/sg7.2.2/G/7.json');
		this.load.atlas('sg7_2_2_cube8', basePath + 'assets/gradeAssets/sg7.2.2/G/8.png', basePath + 'assets/gradeAssets/sg7.2.2/G/8.json');
		this.load.atlas('sg7_2_2_cube9', basePath + 'assets/gradeAssets/sg7.2.2/G/9.png', basePath + 'assets/gradeAssets/sg7.2.2/G/9.json');
		this.load.atlas('sg7_2_2_cube10', basePath + 'assets/gradeAssets/sg7.2.2/G/10.png', basePath + 'assets/gradeAssets/sg7.2.2/G/10.json');
		this.load.atlas('sg7_2_2_cube11', basePath + 'assets/gradeAssets/sg7.2.2/G/11.png', basePath + 'assets/gradeAssets/sg7.2.2/G/11.json');
		this.load.atlas('sg7_2_2_cube12', basePath + 'assets/gradeAssets/sg7.2.2/G/12.png', basePath + 'assets/gradeAssets/sg7.2.2/G/12.json');
		this.load.atlas('sg7_2_2_cube13', basePath + 'assets/gradeAssets/sg7.2.2/G/13.png', basePath + 'assets/gradeAssets/sg7.2.2/G/13.json');
		this.load.atlas('sg7_2_2_cube1', basePath + 'assets/gradeAssets/sg7.2.2/H/1.png', basePath + 'assets/gradeAssets/sg7.2.2/H/1.json');
		this.load.atlas('sg7_2_2_cubes12', basePath + 'assets/gradeAssets/sg7.2.2/H/2.png', basePath + 'assets/gradeAssets/sg7.2.2/H/2.json');
		this.load.atlas('sg7_2_2_cubes13', basePath + 'assets/gradeAssets/sg7.2.2/H/3.png', basePath + 'assets/gradeAssets/sg7.2.2/H/3.json');
		this.load.atlas('sg7_2_2_cube14', basePath + 'assets/gradeAssets/sg7.2.2/H/4.png', basePath + 'assets/gradeAssets/sg7.2.2/H/4.json');
		this.load.atlas('sg7_2_2_cube15', basePath + 'assets/gradeAssets/sg7.2.2/H/5.png', basePath + 'assets/gradeAssets/sg7.2.2/H/5.json');
		this.load.atlas('sg7_2_2_cube16', basePath + 'assets/gradeAssets/sg7.2.2/H/6.png', basePath + 'assets/gradeAssets/sg7.2.2/H/6.json');
		this.load.atlas('sg7_2_2_cube17', basePath + 'assets/gradeAssets/sg7.2.2/H/7.png', basePath + 'assets/gradeAssets/sg7.2.2/H/7.json');
		this.load.atlas('sg7_2_2_cube18', basePath + 'assets/gradeAssets/sg7.2.2/H/8.png', basePath + 'assets/gradeAssets/sg7.2.2/H/8.json');
		this.load.atlas('sg7_2_2_cube19', basePath + 'assets/gradeAssets/sg7.2.2/H/9.png', basePath + 'assets/gradeAssets/sg7.2.2/H/9.json');
		this.load.atlas('sg7_2_2_cube110', basePath + 'assets/gradeAssets/sg7.2.2/H/10.png', basePath + 'assets/gradeAssets/sg7.2.2/H/10.json');
		this.load.atlas('sg7_2_2_cube111', basePath + 'assets/gradeAssets/sg7.2.2/H/11.png', basePath + 'assets/gradeAssets/sg7.2.2/H/11.json');
		this.load.atlas('sg7_2_2_cube112', basePath + 'assets/gradeAssets/sg7.2.2/H/12.png', basePath + 'assets/gradeAssets/sg7.2.2/H/12.json');
		this.load.atlas('sg7_2_2_cube210', basePath + 'assets/gradeAssets/sg7.2.2/I/10.png', basePath + 'assets/gradeAssets/sg7.2.2/I/10.json');
		this.load.atlas('sg7_2_2_cube211', basePath + 'assets/gradeAssets/sg7.2.2/I/11.png', basePath + 'assets/gradeAssets/sg7.2.2/I/11.json');
		this.load.atlas('sg7_2_2_cube212', basePath + 'assets/gradeAssets/sg7.2.2/I/12.png', basePath + 'assets/gradeAssets/sg7.2.2/I/12.json');
		this.load.atlas('sg7_2_2_cubes2', basePath + 'assets/gradeAssets/sg7.2.2/I/1.png', basePath + 'assets/gradeAssets/sg7.2.2/I/1.json');
		this.load.atlas('sg7_2_2_cube22', basePath + 'assets/gradeAssets/sg7.2.2/I/2.png', basePath + 'assets/gradeAssets/sg7.2.2/I/2.json');
		this.load.atlas('sg7_2_2_cube23', basePath + 'assets/gradeAssets/sg7.2.2/I/3.png', basePath + 'assets/gradeAssets/sg7.2.2/I/3.json');
		this.load.atlas('sg7_2_2_cube24', basePath + 'assets/gradeAssets/sg7.2.2/I/4.png', basePath + 'assets/gradeAssets/sg7.2.2/I/4.json');
		this.load.atlas('sg7_2_2_cube25', basePath + 'assets/gradeAssets/sg7.2.2/I/5.png', basePath + 'assets/gradeAssets/sg7.2.2/I/5.json');
		this.load.atlas('sg7_2_2_cube26', basePath + 'assets/gradeAssets/sg7.2.2/I/6.png', basePath + 'assets/gradeAssets/sg7.2.2/I/6.json');
		this.load.atlas('sg7_2_2_cube27', basePath + 'assets/gradeAssets/sg7.2.2/I/7.png', basePath + 'assets/gradeAssets/sg7.2.2/I/7.json');
		this.load.atlas('sg7_2_2_cube28', basePath + 'assets/gradeAssets/sg7.2.2/I/8.png', basePath + 'assets/gradeAssets/sg7.2.2/I/8.json');
		this.load.atlas('sg7_2_2_cube29', basePath + 'assets/gradeAssets/sg7.2.2/I/9.png', basePath + 'assets/gradeAssets/sg7.2.2/I/9.json');
		this.load.atlas('sg7_2_2_cube310', basePath + 'assets/gradeAssets/sg7.2.2/J/10.png', basePath + 'assets/gradeAssets/sg7.2.2/J/10.json');
		this.load.atlas('sg7_2_2_cube311', basePath + 'assets/gradeAssets/sg7.2.2/J/11.png', basePath + 'assets/gradeAssets/sg7.2.2/J/11.json');
		this.load.atlas('sg7_2_2_cube312', basePath + 'assets/gradeAssets/sg7.2.2/J/12.png', basePath + 'assets/gradeAssets/sg7.2.2/J/12.json');
		this.load.atlas('sg7_2_2_cubes3', basePath + 'assets/gradeAssets/sg7.2.2/J/1.png', basePath + 'assets/gradeAssets/sg7.2.2/J/1.json');
		this.load.atlas('sg7_2_2_cube32', basePath + 'assets/gradeAssets/sg7.2.2/J/2.png', basePath + 'assets/gradeAssets/sg7.2.2/J/2.json');
		this.load.atlas('sg7_2_2_cube33', basePath + 'assets/gradeAssets/sg7.2.2/J/3.png', basePath + 'assets/gradeAssets/sg7.2.2/J/3.json');
		this.load.atlas('sg7_2_2_cube34', basePath + 'assets/gradeAssets/sg7.2.2/J/4.png', basePath + 'assets/gradeAssets/sg7.2.2/J/4.json');
		this.load.atlas('sg7_2_2_cube35', basePath + 'assets/gradeAssets/sg7.2.2/J/5.png', basePath + 'assets/gradeAssets/sg7.2.2/J/5.json');
		this.load.atlas('sg7_2_2_cube36', basePath + 'assets/gradeAssets/sg7.2.2/J/6.png', basePath + 'assets/gradeAssets/sg7.2.2/J/6.json');
		this.load.atlas('sg7_2_2_cube37', basePath + 'assets/gradeAssets/sg7.2.2/J/7.png', basePath + 'assets/gradeAssets/sg7.2.2/J/7.json');
		this.load.atlas('sg7_2_2_cube38', basePath + 'assets/gradeAssets/sg7.2.2/J/8.png', basePath + 'assets/gradeAssets/sg7.2.2/J/8.json');
		this.load.atlas('sg7_2_2_cube39', basePath + 'assets/gradeAssets/sg7.2.2/J/9.png', basePath + 'assets/gradeAssets/sg7.2.2/J/9.json');
		this.load.atlas('sg7_2_2_cube410', basePath + 'assets/gradeAssets/sg7.2.2/A/10.png', basePath + 'assets/gradeAssets/sg7.2.2/A/10.json');
		this.load.atlas('sg7_2_2_cube411', basePath + 'assets/gradeAssets/sg7.2.2/A/11.png', basePath + 'assets/gradeAssets/sg7.2.2/A/11.json');
		this.load.atlas('sg7_2_2_cube412', basePath + 'assets/gradeAssets/sg7.2.2/A/12.png', basePath + 'assets/gradeAssets/sg7.2.2/A/12.json');
		this.load.atlas('sg7_2_2_cubes4', basePath + 'assets/gradeAssets/sg7.2.2/A/1.png', basePath + 'assets/gradeAssets/sg7.2.2/A/1.json');
		this.load.atlas('sg7_2_2_cube42', basePath + 'assets/gradeAssets/sg7.2.2/A/2.png', basePath + 'assets/gradeAssets/sg7.2.2/A/2.json');
		this.load.atlas('sg7_2_2_cube43', basePath + 'assets/gradeAssets/sg7.2.2/A/3.png', basePath + 'assets/gradeAssets/sg7.2.2/A/3.json');
		this.load.atlas('sg7_2_2_cube44', basePath + 'assets/gradeAssets/sg7.2.2/A/4.png', basePath + 'assets/gradeAssets/sg7.2.2/A/4.json');
		this.load.atlas('sg7_2_2_cube45', basePath + 'assets/gradeAssets/sg7.2.2/A/5.png', basePath + 'assets/gradeAssets/sg7.2.2/A/5.json');
		this.load.atlas('sg7_2_2_cube46', basePath + 'assets/gradeAssets/sg7.2.2/A/6.png', basePath + 'assets/gradeAssets/sg7.2.2/A/6.json');
		this.load.atlas('sg7_2_2_cube47', basePath + 'assets/gradeAssets/sg7.2.2/A/7.png', basePath + 'assets/gradeAssets/sg7.2.2/A/7.json');
		this.load.atlas('sg7_2_2_cube48', basePath + 'assets/gradeAssets/sg7.2.2/A/8.png', basePath + 'assets/gradeAssets/sg7.2.2/A/8.json');
		this.load.atlas('sg7_2_2_cube49', basePath + 'assets/gradeAssets/sg7.2.2/A/9.png', basePath + 'assets/gradeAssets/sg7.2.2/A/9.json');
		this.load.image('sg7_2_2_cubelight', basePath + 'assets/gradeAssets/sg7.2.2/Symbol 7.png');
		this.load.image('sg7_2_2_cubelight2', basePath + 'assets/gradeAssets/sg7.2.2/Symbol 12.png');
		this.load.image('sg7_2_2_conelight', basePath + 'assets/gradeAssets/sg7.2.2/Symbol 14.png');
		this.load.image('sg7_2_2_conelight2', basePath + 'assets/gradeAssets/sg7.2.2/Symbol 15.png');
		this.load.image('sg7_2_2_rectlight', basePath + 'assets/gradeAssets/sg7.2.2/Symbol 17.png');
		this.load.image('sg7_2_2_rectlight2', basePath + 'assets/gradeAssets/sg7.2.2/Symbol 18.png');
		this.load.image('sg7_2_2_rectlight3', basePath + 'assets/gradeAssets/sg7.2.2/Symbol 19.png');
		this.load.image('sg7_2_2_rectlight4', basePath + 'assets/gradeAssets/sg7.2.2/Symbol 20.png');
		this.load.image('sg7_2_2_rectlight5', basePath + 'assets/gradeAssets/sg7.2.2/Symbol 21.png');
		this.load.image('sg7_2_2_conelight3', basePath + 'assets/gradeAssets/sg7.2.2/Symbol 16.png');
		this.load.atlas('sg7_2_2_c2', basePath + 'assets/gradeAssets/sg7.2.2/F/1.png', basePath + 'assets/gradeAssets/sg7.2.2/F/1.json');
		this.load.atlas('sg7_2_2_c3', basePath + 'assets/gradeAssets/sg7.2.2/F/2.png', basePath + 'assets/gradeAssets/sg7.2.2/F/2.json');
		this.load.atlas('sg7_2_2_c4', basePath + 'assets/gradeAssets/sg7.2.2/F/3.png', basePath + 'assets/gradeAssets/sg7.2.2/F/3.json');
		this.load.atlas('sg7_2_2_c5', basePath + 'assets/gradeAssets/sg7.2.2/F/4.png', basePath + 'assets/gradeAssets/sg7.2.2/F/4.json');

		// Common UI assets  (all paths inside assets/commonAssets/ — no separate json/ folder)
		this.load.image('prgressbarOutLine', basePath + 'assets/commonAssets/prgressbarOutLine.png');
		this.load.image('preloadBar', basePath + 'assets/commonAssets/prgressbar.png');
		this.load.atlas('newCommonBackBtnForAll', basePath + 'assets/commonAssets/newBackBtn.png', basePath + 'assets/commonAssets/newBackBtn.json');
		this.load.atlas('grade11_speaker', basePath + 'assets/commonAssets/grade11_speaker.png', basePath + 'assets/commonAssets/grade11_speaker.json');
		this.load.image('Level42C_Topbar', basePath + 'assets/commonAssets/Topbar.png');
		this.load.image('Level42C_timer', basePath + 'assets/commonAssets/timer.png');
		this.load.atlas('starAnim1', basePath + 'assets/commonAssets/starAnim1.png', basePath + 'assets/commonAssets/starAnim1.json');
		this.load.image('CommonBackground', basePath + 'assets/commonAssets/commonBg.png');
		this.load.image('commonBg1', basePath + 'assets/commonAssets/commonBg1.png');
		this.load.image('commonBg2', basePath + 'assets/commonAssets/commonBg2.png');

		// Score screen buttons (local)
		this.load.image('CommonHomeBtn', 'assets/homeIconScore.png');
		this.load.image('CommonNextBtn', 'assets/nextIconScore.png');
		this.load.image('CommonReplayBtn', 'assets/replayIconScore.png');
		this.load.image('shareIconScore', 'assets/shareIconScore.png');





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

	create: function () {
		this.state.start('sg7_2_2level1');
	},
};
