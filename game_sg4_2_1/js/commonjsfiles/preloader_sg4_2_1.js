Game.preloader_sg4_2_1=function(game){
	this.preloadBar=null;
};

Game.preloader_sg4_2_1.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (sg4.2.1)
		this.load.image("sg4_2_1_commonBg1",basePath+"assets/gradeAssets/sg4.2.1/Bg1.png");
		this.load.image("sg4_2_1_commonBg2",basePath+"assets/gradeAssets/sg4.2.1/Bg2.png");
		this.load.image("sg4_2_1_commonBg3",basePath+"assets/gradeAssets/sg4.2.1/Bg3.png");
		this.load.image("sg4_2_1_Circle",basePath+"assets/gradeAssets/sg4.2.1/Circle.png");
		this.load.atlas("sg4_2_1_Circle_image1",basePath+"assets/gradeAssets/sg4.2.1/Circle image1.png",basePath+"assets/gradeAssets/sg4.2.1/Circle/Circle image1.json");
		this.load.atlas("sg4_2_1_Circle_image2",basePath+"assets/gradeAssets/sg4.2.1/Circle image2.png",basePath+"assets/gradeAssets/sg4.2.1/Circle/Circle image2.json");
		this.load.atlas("sg4_2_1_Circle_image3",basePath+"assets/gradeAssets/sg4.2.1/Circle image3.png",basePath+"assets/gradeAssets/sg4.2.1/Circle/Circle image3.json");
		this.load.atlas("sg4_2_1_Circle_image4",basePath+"assets/gradeAssets/sg4.2.1/Circle image4.png",basePath+"assets/gradeAssets/sg4.2.1/Circle/Circle image4.json");
		this.load.atlas("sg4_2_1_Circle_image1_GlowAnim",basePath+"assets/gradeAssets/sg4.2.1/Circle image1_GlowAnim.png",basePath+"assets/gradeAssets/sg4.2.1/Circle/Circle image1_GlowAnim.json");
		this.load.image("sg4_2_1_Cone",basePath+"assets/gradeAssets/sg4.2.1/Cone.png");
		this.load.atlas("sg4_2_1_Cone_image1",basePath+"assets/gradeAssets/sg4.2.1/Cone image1.png",basePath+"assets/gradeAssets/sg4.2.1/Cone/Cone image1.json");
		this.load.atlas("sg4_2_1_Cone_image2",basePath+"assets/gradeAssets/sg4.2.1/Cone image2.png",basePath+"assets/gradeAssets/sg4.2.1/Cone/Cone image2.json");
		this.load.atlas("sg4_2_1_Cone_image3",basePath+"assets/gradeAssets/sg4.2.1/Cone image3.png",basePath+"assets/gradeAssets/sg4.2.1/Cone/Cone image3.json");
		this.load.atlas("sg4_2_1_Cone_image4",basePath+"assets/gradeAssets/sg4.2.1/Cone image4.png",basePath+"assets/gradeAssets/sg4.2.1/Cone/Cone image4.json");
		this.load.atlas("sg4_2_1_Cone_image4_GlowAnim",basePath+"assets/gradeAssets/sg4.2.1/Cone image4_GlowAnim.png",basePath+"assets/gradeAssets/sg4.2.1/Cone/Cone image4_GlowAnim.json");
		this.load.image("sg4_2_1_cube",basePath+"assets/gradeAssets/sg4.2.1/cube.png");
		this.load.atlas("sg4_2_1_cube_image1",basePath+"assets/gradeAssets/sg4.2.1/cube image1.png",basePath+"assets/gradeAssets/sg4.2.1/Cube/cube image1.json");
		this.load.atlas("sg4_2_1_cube_image2",basePath+"assets/gradeAssets/sg4.2.1/cube image2.png",basePath+"assets/gradeAssets/sg4.2.1/Cube/cube image2.json");
		this.load.atlas("sg4_2_1_cube_image3",basePath+"assets/gradeAssets/sg4.2.1/cube image3.png",basePath+"assets/gradeAssets/sg4.2.1/Cube/cube image3.json");
		this.load.atlas("sg4_2_1_cube_image4",basePath+"assets/gradeAssets/sg4.2.1/cube image4.png",basePath+"assets/gradeAssets/sg4.2.1/Cube/cube image4.json");
		this.load.atlas("sg4_2_1_cube_image5",basePath+"assets/gradeAssets/sg4.2.1/cube image5.png",basePath+"assets/gradeAssets/sg4.2.1/Cube/cube image5.json");
		this.load.atlas("sg4_2_1_cube_image4_GlowAnim",basePath+"assets/gradeAssets/sg4.2.1/cube image4_GlowAnim.png",basePath+"assets/gradeAssets/sg4.2.1/Cube/cube image4_GlowAnim.json");
		this.load.image("sg4_2_1_cuboid",basePath+"assets/gradeAssets/sg4.2.1/cuboid.png");
		this.load.atlas("sg4_2_1_cuboid_image1",basePath+"assets/gradeAssets/sg4.2.1/cuboid image1.png",basePath+"assets/gradeAssets/sg4.2.1/Cuboid/cuboid image1.json");
		this.load.atlas("sg4_2_1_cuboid_image2",basePath+"assets/gradeAssets/sg4.2.1/cuboid image2.png",basePath+"assets/gradeAssets/sg4.2.1/Cuboid/cuboid image2.json");
		this.load.atlas("sg4_2_1_cuboid_image3",basePath+"assets/gradeAssets/sg4.2.1/cuboid image3.png",basePath+"assets/gradeAssets/sg4.2.1/Cuboid/cuboid image3.json");
		this.load.atlas("sg4_2_1_cuboid_image4",basePath+"assets/gradeAssets/sg4.2.1/cuboid image4.png",basePath+"assets/gradeAssets/sg4.2.1/Cuboid/cuboid image4.json");
		this.load.atlas("sg4_2_1_cuboid_image5",basePath+"assets/gradeAssets/sg4.2.1/cuboid image5.png",basePath+"assets/gradeAssets/sg4.2.1/Cuboid/cuboid image5.json");
		this.load.atlas("sg4_2_1_cuboid_image5_GlowAnim",basePath+"assets/gradeAssets/sg4.2.1/cuboid image5_GlowAnim.png",basePath+"assets/gradeAssets/sg4.2.1/Cuboid/cuboid image5_GlowAnim.json");
		this.load.image("sg4_2_1_Cylinder",basePath+"assets/gradeAssets/sg4.2.1/Cylinder.png");
		this.load.atlas("sg4_2_1_Cylinder_image1",basePath+"assets/gradeAssets/sg4.2.1/Cylinder image1.png",basePath+"assets/gradeAssets/sg4.2.1/Cylinder/Cylinder image1.json");
		this.load.atlas("sg4_2_1_Cylinder_image2",basePath+"assets/gradeAssets/sg4.2.1/Cylinder image2.png",basePath+"assets/gradeAssets/sg4.2.1/Cylinder/Cylinder image2.json");
		this.load.atlas("sg4_2_1_Cylinder_image3",basePath+"assets/gradeAssets/sg4.2.1/Cylinder image3.png",basePath+"assets/gradeAssets/sg4.2.1/Cylinder/Cylinder image3.json");
		this.load.atlas("sg4_2_1_Cylinder_image4",basePath+"assets/gradeAssets/sg4.2.1/Cylinder image4.png",basePath+"assets/gradeAssets/sg4.2.1/Cylinder/Cylinder image4.json");
		this.load.atlas("sg4_2_1_Cylinder_image5",basePath+"assets/gradeAssets/sg4.2.1/Cylinder image5.png",basePath+"assets/gradeAssets/sg4.2.1/Cylinder/Cylinder image5.json");
		this.load.atlas("sg4_2_1_Cylinder_image2_GlowAnim",basePath+"assets/gradeAssets/sg4.2.1/Cylinder image2_GlowAnim.png",basePath+"assets/gradeAssets/sg4.2.1/Cylinder/Cylinder image2_GlowAnim.json");
		this.load.atlas("sg4_2_1_Cylinder_image3_GlowAnim",basePath+"assets/gradeAssets/sg4.2.1/Cylinder image3_GlowAnim.png",basePath+"assets/gradeAssets/sg4.2.1/Cylinder/Cylinder image3_GlowAnim.json");
		this.load.atlas("sg4_2_1_Cylinder_image5_GlowAnim",basePath+"assets/gradeAssets/sg4.2.1/Cylinder image5_GlowAnim.png",basePath+"assets/gradeAssets/sg4.2.1/Cylinder/Cylinder image5_GlowAnim.json");
		this.load.image("sg4_2_1_Oval",basePath+"assets/gradeAssets/sg4.2.1/Oval.png");
		this.load.atlas("sg4_2_1_Oval_image1",basePath+"assets/gradeAssets/sg4.2.1/Oval image1.png",basePath+"assets/gradeAssets/sg4.2.1/Oval/Oval image1.json");
		this.load.atlas("sg4_2_1_Oval_image2",basePath+"assets/gradeAssets/sg4.2.1/Oval image2.png",basePath+"assets/gradeAssets/sg4.2.1/Oval/Oval image2.json");
		this.load.atlas("sg4_2_1_Oval_image3",basePath+"assets/gradeAssets/sg4.2.1/Oval image3.png",basePath+"assets/gradeAssets/sg4.2.1/Oval/Oval image3.json");
		this.load.atlas("sg4_2_1_Oval_image4",basePath+"assets/gradeAssets/sg4.2.1/Oval image4.png",basePath+"assets/gradeAssets/sg4.2.1/Oval/Oval image4.json");
		this.load.image("sg4_2_1_rectangle",basePath+"assets/gradeAssets/sg4.2.1/rectangle.png");
		this.load.atlas("sg4_2_1_rectangle_image1",basePath+"assets/gradeAssets/sg4.2.1/rectangle image1.png",basePath+"assets/gradeAssets/sg4.2.1/Rectangle/rectangle image1.json");
		this.load.atlas("sg4_2_1_rectangle_image2",basePath+"assets/gradeAssets/sg4.2.1/rectangle image2.png",basePath+"assets/gradeAssets/sg4.2.1/Rectangle/rectangle image2.json");
		this.load.atlas("sg4_2_1_rectangle_image3",basePath+"assets/gradeAssets/sg4.2.1/rectangle image3.png",basePath+"assets/gradeAssets/sg4.2.1/Rectangle/rectangle image3.json");
		this.load.atlas("sg4_2_1_rectangle_image4",basePath+"assets/gradeAssets/sg4.2.1/rectangle image4.png",basePath+"assets/gradeAssets/sg4.2.1/Rectangle/rectangle image4.json");
		this.load.atlas("sg4_2_1_rectangle_image3_GlowAnim",basePath+"assets/gradeAssets/sg4.2.1/rectangle image3_GlowAnim.png",basePath+"assets/gradeAssets/sg4.2.1/Rectangle/rectangle image3_GlowAnim.json");
		this.load.image("sg4_2_1_Sphere",basePath+"assets/gradeAssets/sg4.2.1/Sphere.png");
		this.load.atlas("sg4_2_1_Sphere_image1",basePath+"assets/gradeAssets/sg4.2.1/Sphere image1.png",basePath+"assets/gradeAssets/sg4.2.1/Sphere/Sphere image1.json");
		this.load.atlas("sg4_2_1_Sphere_image2",basePath+"assets/gradeAssets/sg4.2.1/Sphere image2.png",basePath+"assets/gradeAssets/sg4.2.1/Sphere/Sphere image2.json");
		this.load.atlas("sg4_2_1_Sphere_image3",basePath+"assets/gradeAssets/sg4.2.1/Sphere image3.png",basePath+"assets/gradeAssets/sg4.2.1/Sphere/Sphere image3.json");
		this.load.atlas("sg4_2_1_Sphere_image3_GlowAnim",basePath+"assets/gradeAssets/sg4.2.1/Sphere image3_GlowAnim.png",basePath+"assets/gradeAssets/sg4.2.1/Sphere/Sphere image3_GlowAnim.json");
		this.load.image("sg4_2_1_square",basePath+"assets/gradeAssets/sg4.2.1/square.png");
		this.load.atlas("sg4_2_1_square_image1",basePath+"assets/gradeAssets/sg4.2.1/square image1.png",basePath+"assets/gradeAssets/sg4.2.1/Square/square image1.json");
		this.load.atlas("sg4_2_1_square_image2",basePath+"assets/gradeAssets/sg4.2.1/square image2.png",basePath+"assets/gradeAssets/sg4.2.1/Square/square image2.json");
		this.load.atlas("sg4_2_1_square_image3",basePath+"assets/gradeAssets/sg4.2.1/square image3.png",basePath+"assets/gradeAssets/sg4.2.1/Square/square image3.json");
		this.load.atlas("sg4_2_1_square_image4",basePath+"assets/gradeAssets/sg4.2.1/square image4.png",basePath+"assets/gradeAssets/sg4.2.1/Square/square image4.json");
		this.load.atlas("sg4_2_1_square_image1_GlowAnim",basePath+"assets/gradeAssets/sg4.2.1/square image1_glowAnim.png",basePath+"assets/gradeAssets/sg4.2.1/Square/square image1_glowAnim.json");
		this.load.image("sg4_2_1_triangle",basePath+"assets/gradeAssets/sg4.2.1/triangle.png");
		this.load.atlas("sg4_2_1_triangle_image1",basePath+"assets/gradeAssets/sg4.2.1/triangle image1.png",basePath+"assets/gradeAssets/sg4.2.1/Triangle/triangle image1.json");
		this.load.atlas("sg4_2_1_triangle_image2",basePath+"assets/gradeAssets/sg4.2.1/triangle image2.png",basePath+"assets/gradeAssets/sg4.2.1/Triangle/triangle image2.json");
		this.load.atlas("sg4_2_1_triangle_image3",basePath+"assets/gradeAssets/sg4.2.1/triangle image3.png",basePath+"assets/gradeAssets/sg4.2.1/Triangle/triangle image3.json");
		this.load.atlas("sg4_2_1_triangle_image4",basePath+"assets/gradeAssets/sg4.2.1/triangle image4.png",basePath+"assets/gradeAssets/sg4.2.1/Triangle/triangle image4.json");
		this.load.atlas("sg4_2_1_triangle_image5",basePath+"assets/gradeAssets/sg4.2.1/triangle image5.png",basePath+"assets/gradeAssets/sg4.2.1/Triangle/triangle image5.json");
		this.load.atlas("sg4_2_1_TickMark",basePath+"assets/gradeAssets/sg4.2.1/tick.png",basePath+"assets/gradeAssets/sg4.2.1/tick.json");

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
		this.load.atlas('glow', basePath+'assets/gradeAssets/unity/commonAssets/glow.png', basePath+'assets/gradeAssets/unity/commonJson/glow.json');


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
		this.state.start('sg4_2_1level1');
	},
};
