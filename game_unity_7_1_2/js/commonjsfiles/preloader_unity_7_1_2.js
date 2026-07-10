Game.preloader_unity_7_1_2=function(game){
	this.preloadBar=null;
};

Game.preloader_unity_7_1_2.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (unity/7.1.2)
		this.load.image('Level721_bg1',basePath+'assets/gradeAssets/7.2.1/Bg10008.png');
		this.load.image('Level321_bg1',basePath+'assets/gradeAssets/3.2.1/BG.png');
		this.load.image('Level723_plusSign',basePath+'assets/gradeAssets/7.2.1/plusSign.png');
		this.load.atlas('Level321_starAnim',basePath+'assets/commonAssets/starAnim1.png',basePath+'assets/commonAssets/starAnim1.json');
		this.load.image('Level721_navBar',basePath+'assets/commonAssets/navBar.png');
		this.load.image('Level721_timebg',basePath+'assets/commonAssets/timebg.png');
		this.load.atlas('Level721_starAnim',basePath+'assets/commonAssets/starAnim1.png',basePath+'assets/commonAssets/starAnim1.json');
		this.load.atlas('Level721_CommonSpeakerBtn',basePath+'assets/commonAssets/grade11_speaker.png',basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.image('Level723_navBar',basePath+'assets/commonAssets/navBar.png');
		this.load.image('Level723_timebg',basePath+'assets/commonAssets/timebg.png');
		this.load.atlas('Level723_starAnim',basePath+'assets/commonAssets/starAnim1.png',basePath+'assets/commonAssets/starAnim1.json');
		this.load.atlas('Level723_CommonSpeakerBtn',basePath+'assets/commonAssets/grade11_speaker.png',basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.image('Level722_bg1',basePath+'assets/gradeAssets/7.2.1/Bg10008.png');
		this.load.image('Level723_bg1',basePath+'assets/gradeAssets/7.2.1/Bg10008.png');
		this.load.atlas('Level722_CommonBackBtn',basePath+'assets/commonAssets/newBackBtn.png',basePath+'assets/commonAssets/newBackBtn.json');
		this.load.image('Level722_navBar',basePath+'assets/commonAssets/navBar.png');
		this.load.image('Level722_timebg',basePath+'assets/commonAssets/timebg.png');
		this.load.atlas('Level722_starAnim',basePath+'assets/commonAssets/starAnim1.png',basePath+'assets/commonAssets/starAnim1.json');
		this.load.atlas('Level722_CommonSpeakerBtn',basePath+'assets/commonAssets/grade11_speaker.png',basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.atlas('Level721_coin1Anim',basePath+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 1 anim.json');
		this.load.atlas('Level721_coin10Anim',basePath+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 10 anim.json');
		this.load.atlas('Level721_LeverBlue',basePath+'assets/gradeAssets/7.2.1/LeverBlue.png' ,basePath+'assets/gradeAssets/7.2.1/LeverBlue.json');
		this.load.atlas('Level721_LeverGreen',basePath+'assets/gradeAssets/7.2.1/LeverGreen.png' ,basePath+'assets/gradeAssets/7.2.1/LeverGreen.json');
		this.load.atlas('Level721_LeverYellow',basePath+'assets/gradeAssets/7.2.1/LeverYellow.png' ,basePath+'assets/gradeAssets/7.2.1/LeverYellow.json');
		this.load.atlas('Level721_numberSmall',basePath+'assets/gradeAssets/7.2.1/numberSmall.png' ,basePath+'assets/gradeAssets/7.2.1/numberSmall.json');
		this.load.atlas('Level721_numberVSmall',basePath+'assets/gradeAssets/7.2.1/numberVSmall.png' ,basePath+'assets/gradeAssets/7.2.1/numberVSmall.json');
		this.load.atlas('Level721_numberBox',basePath+'assets/gradeAssets/7.2.1/numberBox.png' ,basePath+'assets/gradeAssets/7.2.1/numberBox.json');
		this.load.atlas('Level721_Coin1',basePath+'assets/gradeAssets/7.2.1/Coin 1.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 1.json');
		this.load.atlas('Level721_Coin10',basePath+'assets/gradeAssets/7.2.1/Coin 10.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 10.json');
		this.load.atlas('Level721_erase',basePath+'assets/gradeAssets/7.2.1/erase.png' ,basePath+'assets/gradeAssets/7.2.1/erase.json');
		this.load.atlas('Level721_rightmark',basePath+'assets/gradeAssets/7.2.1/rightmark.png' ,basePath+'assets/gradeAssets/7.2.1/rightmark.json');
		this.load.atlas('Level721_NumberKey',basePath+'assets/gradeAssets/7.2.1/numbers.png' ,basePath+'assets/gradeAssets/7.2.1/numbers.json');
		this.load.image('Level721_coinMachinePannel',basePath+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
		this.load.image('Level721_pannel1',basePath+'assets/gradeAssets/7.2.1/1.png');
		this.load.image('Level721_numBG',basePath+'assets/gradeAssets/7.2.1/b2.png');
		this.load.image('Level721_plusSign',basePath+'assets/gradeAssets/7.2.1/plusSign.png');
		this.load.atlas('Level721_yellowcoinreverse',basePath+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,basePath+'assets/gradeAssets/7.2.1/yellowcoinreverse.json');
		this.load.image('Level721_coindrag',basePath+'assets/gradeAssets/7.2.1/coindrag.png');
		this.load.atlas('Level721_coininsertbox',basePath+'assets/gradeAssets/7.2.1/coininsertbox.png',basePath+'assets/gradeAssets/7.2.1/coininsertbox.json');
		this.load.image('Level721_bluecoin',basePath+'assets/gradeAssets/7.2.1/bluecoin.png');
		this.load.image('Level721_glow',basePath+'assets/gradeAssets/7.2.1/glow.png');
		this.load.atlas('Level721_OneToHundred',basePath+'assets/gradeAssets/7.2.1/1-100.png' ,basePath+'assets/gradeAssets/7.2.1/1-100.json');
		this.load.atlas('Level722_coin1Anim',basePath+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 1 anim.json');
		this.load.atlas('Level722_coin10Anim',basePath+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 10 anim.json');
		this.load.atlas('Level722_coin100Anim',basePath+'assets/gradeAssets/7.2.1/Coin 100 anim.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 100 anim.json');
		this.load.atlas('Level722_LeverBlue',basePath+'assets/gradeAssets/7.2.1/LeverBlue.png' ,basePath+'assets/gradeAssets/7.2.1/LeverBlue.json');
		this.load.atlas('Level722_LeverGreen',basePath+'assets/gradeAssets/7.2.1/LeverGreen.png' ,basePath+'assets/gradeAssets/7.2.1/LeverGreen.json');
		this.load.atlas('Level722_LeverYellow',basePath+'assets/gradeAssets/7.2.1/LeverYellow.png' ,basePath+'assets/gradeAssets/7.2.1/LeverYellow.json');
		this.load.atlas('Level722_numberSmall',basePath+'assets/gradeAssets/7.2.1/numberSmall.png' ,basePath+'assets/gradeAssets/7.2.1/numberSmall.json');
		this.load.atlas('Level722_numberVSmall',basePath+'assets/gradeAssets/7.2.1/numberVSmall.png' ,basePath+'assets/gradeAssets/7.2.1/numberVSmall.json');
		this.load.atlas('Level722_numberBox',basePath+'assets/gradeAssets/7.2.1/numberBox.png' ,basePath+'assets/gradeAssets/7.2.1/numberBox.json');
		this.load.atlas('Level722_Coin1',basePath+'assets/gradeAssets/7.2.1/Coin 1.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 1.json');
		this.load.atlas('Level722_Coin10',basePath+'assets/gradeAssets/7.2.1/Coin 10.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 10.json');
		this.load.atlas('Level722_Coin100',basePath+'assets/gradeAssets/7.2.1/Coin 100.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 100.json');
		this.load.atlas('Level722_erase',basePath+'assets/gradeAssets/7.2.1/erase.png' ,basePath+'assets/gradeAssets/7.2.1/erase.json');
		this.load.atlas('Level722_rightmark',basePath+'assets/gradeAssets/7.2.1/rightmark.png' ,basePath+'assets/gradeAssets/7.2.1/rightmark.json');
		this.load.atlas('Level722_NumberKey',basePath+'assets/gradeAssets/7.2.1/numbers.png' ,basePath+'assets/gradeAssets/7.2.1/numbers.json');
		this.load.image('Level722_coinMachinePannel',basePath+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
		this.load.image('Level722_pannel1',basePath+'assets/gradeAssets/7.2.1/1.png');
		this.load.image('Level722_numBG',basePath+'assets/gradeAssets/7.2.1/b2.png');
		this.load.image('Level722_plusSign',basePath+'assets/gradeAssets/7.2.1/plusSign.png');
		this.load.atlas('Level722_bluecoinreverse',basePath+'assets/gradeAssets/7.2.1/bluecoinreverse.png' ,basePath+'assets/gradeAssets/7.2.1/bluecoinreverse.json');
		this.load.atlas('Level722_greencoinreverse',basePath+'assets/gradeAssets/7.2.1/greencoinreverse.png' ,basePath+'assets/gradeAssets/7.2.1/greencoinreverse.json');
		this.load.atlas('Level722_yellowcoinreverse',basePath+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,basePath+'assets/gradeAssets/7.2.1/yellowcoinreverse.json');
		this.load.image('Level722_coindrag',basePath+'assets/gradeAssets/7.2.1/coindrag.png');
		this.load.atlas('Level722_coininsertbox',basePath+'assets/gradeAssets/7.2.1/coininsertbox.png',basePath+'assets/gradeAssets/7.2.1/coininsertbox.json');
		this.load.image('Level722_bluecoindrag',basePath+'assets/gradeAssets/7.2.1/bluecoin.png');
		this.load.image('Level722_glow',basePath+'assets/gradeAssets/7.2.1/glow.png');
		this.load.atlas('Level722_OneToHundred',basePath+'assets/gradeAssets/7.2.1/1-100.png' ,basePath+'assets/gradeAssets/7.2.1/1-100.json');
		this.load.atlas('Level723_coin1Anim',basePath+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 1 anim.json');
		this.load.atlas('Level723_coin10Anim',basePath+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 10 anim.json');
		this.load.atlas('Level723_coin100Anim',basePath+'assets/gradeAssets/7.2.1/Coin 100 anim.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 100 anim.json');
		this.load.atlas('Level723_LeverBlue',basePath+'assets/gradeAssets/7.2.1/LeverBlue.png' ,basePath+'assets/gradeAssets/7.2.1/LeverBlue.json');
		this.load.atlas('Level723_LeverGreen',basePath+'assets/gradeAssets/7.2.1/LeverGreen.png' ,basePath+'assets/gradeAssets/7.2.1/LeverGreen.json');
		this.load.atlas('Level723_LeverYellow',basePath+'assets/gradeAssets/7.2.1/LeverYellow.png' ,basePath+'assets/gradeAssets/7.2.1/LeverYellow.json');
		this.load.atlas('Level723_numberSmall',basePath+'assets/gradeAssets/7.2.1/numberSmall.png' ,basePath+'assets/gradeAssets/7.2.1/numberSmall.json');
		this.load.atlas('Level723_numberVSmall',basePath+'assets/gradeAssets/7.2.1/numberVSmall.png' ,basePath+'assets/gradeAssets/7.2.1/numberVSmall.json');
		this.load.atlas('Level723_numberBox',basePath+'assets/gradeAssets/7.2.1/numberBox.png' ,basePath+'assets/gradeAssets/7.2.1/numberBox.json');
		this.load.atlas('Level723_Coin1',basePath+'assets/gradeAssets/7.2.1/Coin 1.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 1.json');
		this.load.atlas('Level723_Coin10',basePath+'assets/gradeAssets/7.2.1/Coin 10.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 10.json');
		this.load.atlas('Level723_Coin100',basePath+'assets/gradeAssets/7.2.1/Coin 100.png' ,basePath+'assets/gradeAssets/7.2.1/Coin 100.json');
		this.load.atlas('Level723_erase',basePath+'assets/gradeAssets/7.2.1/erase.png' ,basePath+'assets/gradeAssets/7.2.1/erase.json');
		this.load.atlas('Level723_rightmark',basePath+'assets/gradeAssets/7.2.1/rightmark.png' ,basePath+'assets/gradeAssets/7.2.1/rightmark.json');
		this.load.atlas('Level723_NumberKey',basePath+'assets/gradeAssets/7.2.1/numbers.png' ,basePath+'assets/gradeAssets/7.2.1/numbers.json');
		this.load.image('Level723_coinMachinePannel',basePath+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
		this.load.image('Level723_pannel1',basePath+'assets/gradeAssets/7.2.1/1.png');
		this.load.image('Level723_numBG',basePath+'assets/gradeAssets/7.2.1/b2.png');
		this.load.atlas('Level723_bluecoinreverse',basePath+'assets/gradeAssets/7.2.1/bluecoinreverse.png' ,basePath+'assets/gradeAssets/7.2.1/bluecoinreverse.json');
		this.load.atlas('Level723_greencoinreverse',basePath+'assets/gradeAssets/7.2.1/greencoinreverse.png' ,basePath+'assets/gradeAssets/7.2.1/greencoinreverse.json');
		this.load.atlas('Level723_yellowcoinreverse',basePath+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,basePath+'assets/gradeAssets/7.2.1/yellowcoinreverse.json');
		this.load.image('Level723_coindrag',basePath+'assets/gradeAssets/7.2.1/coindrag.png');
		this.load.atlas('Level723_coininsertbox',basePath+'assets/gradeAssets/7.2.1/coininsertbox.png',basePath+'assets/gradeAssets/7.2.1/coininsertbox.json');
		this.load.image('Level723_bluecoindrag',basePath+'assets/gradeAssets/7.2.1/bluecoin.png');
		this.load.image('Level723_glow',basePath+'assets/gradeAssets/7.2.1/glow.png');
		this.load.atlas('Level723_OneToHundred',basePath+'assets/gradeAssets/7.2.1/1-100.png' ,basePath+'assets/gradeAssets/7.2.1/1-100.json');
		this.load.image('Level321_topic',basePath+'assets/gradeAssets/3.2.1/topic.png');
		this.load.image('Level321_practice',basePath+'assets/gradeAssets/3.2.1/practice.png');
		this.load.image('Level321_navBar',basePath+'assets/commonAssets/navBar.png');
		this.load.image('Level321_timebg',basePath+'assets/commonAssets/timebg.png');
		this.load.atlas('Level321_CommonSpeakerBtn',basePath+'assets/commonAssets/grade11_speaker.png',basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.atlas('Level321_coin1Anim',basePath+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,basePath+'assets/gradeAssets/3.2.1/Coin 1 anim.json');
		this.load.atlas('Level321_coin10Anim',basePath+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,basePath+'assets/gradeAssets/3.2.1/Coin 10 anim.json');
		this.load.atlas('Level321_coin100Anim',basePath+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,basePath+'assets/gradeAssets/3.2.1/Coin 100 anim.json');
		this.load.atlas('Level321_numberSmall',basePath+'assets/gradeAssets/3.2.1/numberSmall.png' ,basePath+'assets/gradeAssets/3.2.1/numberSmall.json');
		this.load.atlas('Level321_numberVSmall',basePath+'assets/gradeAssets/3.2.1/numberVSmall.png' ,basePath+'assets/gradeAssets/3.2.1/numberVSmall.json');
		this.load.atlas('Level321_numberBig',basePath+'assets/gradeAssets/3.2.1/numberBig.png' ,basePath+'assets/gradeAssets/3.2.1/numberBig.json');
		this.load.atlas('Level321_numberBox',basePath+'assets/gradeAssets/3.2.1/numberBox.png' ,basePath+'assets/gradeAssets/3.2.1/numberBox.json');
		this.load.atlas('Level321_numberBox1',basePath+'assets/gradeAssets/3.2.1/numberBox-old.png' ,basePath+'assets/gradeAssets/3.2.1/numberBox-old.json');
		this.load.atlas('Level321_Coin1',basePath+'assets/gradeAssets/3.2.1/Coin 1.png' ,basePath+'assets/gradeAssets/3.2.1/Coin 1.json');
		this.load.atlas('Level321_Coin10',basePath+'assets/gradeAssets/3.2.1/Coin 10.png' ,basePath+'assets/gradeAssets/3.2.1/Coin 10.json');
		this.load.atlas('Level321_Coin100',basePath+'assets/gradeAssets/3.2.1/Coin 100.png' ,basePath+'assets/gradeAssets/3.2.1/Coin 100.json');
		this.load.atlas('Level321_erase',basePath+'assets/gradeAssets/3.2.1/erase.png' ,basePath+'assets/gradeAssets/3.2.1/erase.json');
		this.load.atlas('Level321_rightmark',basePath+'assets/gradeAssets/3.2.1/rightmark.png' ,basePath+'assets/gradeAssets/3.2.1/rightmark.json');
		this.load.atlas('Level321_NumberKey',basePath+'assets/gradeAssets/3.2.1/numbers.png' ,basePath+'assets/gradeAssets/3.2.1/numbers.json');
		this.load.atlas('Level321_OneToHundred',basePath+'assets/gradeAssets/3.2.1/1-100.png' ,basePath+'assets/gradeAssets/3.2.1/1-100.json');
		this.load.atlas('Level1011_coinDecrease',basePath+'assets/gradeAssets/3.2.1/coinDec.png' ,basePath+'assets/gradeAssets/3.2.1/coinDec.json');
		this.load.atlas('Level1011_coinExchange',basePath+'assets/gradeAssets/3.2.1/exchange.png' ,basePath+'assets/gradeAssets/3.2.1/exchange.json');
		this.load.image('Level1011_BlueCoin',basePath+'assets/gradeAssets/3.2.1/blueSingleCoin.png');
		this.load.image('Level1011_GreenCoin',basePath+'assets/gradeAssets/3.2.1/greenSingleCoin.png');
		this.load.image('Level1011_YellowCoin',basePath+'assets/gradeAssets/3.2.1/yellowSingleCoin.png');
		this.load.image('Level1011_Minus',basePath+'assets/gradeAssets/3.2.1/minus.png');
		this.load.image('Level321_coinMachinePannel',basePath+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
		this.load.image('Level321_pannel',basePath+'assets/gradeAssets/3.2.1/pannel10.png');
		this.load.image('Level321_pannel3_2_1',basePath+'assets/gradeAssets/3.2.1/pannel.png');
		this.load.image('Level321_numBG',basePath+'assets/gradeAssets/3.2.1/b2.png');
		this.load.atlas('Level321_LeverBlue',basePath+'assets/gradeAssets/3.2.1/LeverBlue.png' ,basePath+'assets/gradeAssets/3.2.1/LeverBlue.json');
		this.load.atlas('Level321_LeverGreen',basePath+'assets/gradeAssets/3.2.1/LeverGreen.png' ,basePath+'assets/gradeAssets/3.2.1/LeverGreen.json');
		this.load.atlas('Level321_LeverYellow',basePath+'assets/gradeAssets/3.2.1/LeverYellow.png' ,basePath+'assets/gradeAssets/3.2.1/LeverYellow.json');
		this.load.image('SlotMachinePanel1',basePath+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');
		this.load.image('placeValuePanel',basePath+'assets/gradeAssets/3.2.1/PlaceValuePanel1.png');
		this.load.image('Level322_pannel',basePath+'assets/gradeAssets/3.2.1/pannel322.png');
		this.load.image('Level321_coinMachinePannel17_2',basePath+'assets/gradeAssets/3.2.1/coinMachinePannel17_2.png');
		this.load.atlas('Level321_numberSmall17_2',basePath+'assets/gradeAssets/3.2.1/numberSmall17_2.png' ,basePath+'assets/gradeAssets/3.2.1/numberSmall17_2.json');
		this.load.atlas('Level172_slot',basePath+'assets/gradeAssets/3.2.1/slot.png' ,basePath+'assets/gradeAssets/3.2.1/slot.json');
		this.load.atlas('Level172_ansbox',basePath+'assets/gradeAssets/3.2.1/4.png' ,basePath+'assets/gradeAssets/3.2.1/4.json');
		this.load.image('Level172_div',basePath+'assets/gradeAssets/3.2.1/6.png');
		this.load.image('Level172_tray',basePath+'assets/gradeAssets/3.2.1/tray.png');
		this.load.image('Level321_5',basePath+'assets/gradeAssets/3.2.1/5.png');

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
		this.load.image('Level321_topic', basePath+'assets/gradeAssets/3.2.1/topic.png');
		this.load.image('Level321_practice', basePath+'assets/gradeAssets/3.2.1/practice.png');
		this.load.image('Level321_navBar', basePath+'assets/commonAssets/navBar.png');
		this.load.image('Level321_timebg', basePath+'assets/commonAssets/timebg.png');
		this.load.atlas('Level321_CommonSpeakerBtn', basePath+'assets/commonAssets/grade11_speaker.png', basePath+'assets/commonAssets/grade11_speaker.json');
		this.load.atlas('eraser', basePath+'assets/gradeAssets/4.3A/commonAssets/eraser.png', basePath+'assets/gradeAssets/4.3A/eraser.json');

		this.load.video('demo7_1_1', basePath+'assets/demoVideos/7_1_2.mp4');
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
		function startGame(){ _self.state.start('unity7_1_2level1'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo7_1_1')) {
			var vid = _self.add.video('demo7_1_1');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.play(false);
			vid.changeSource(window.baseUrl+"assets/demoVideos/7_1_2.mp4");
			vid.play(false);
			vid.playbackRate = 1;
			_this.time.events.add(2000, function(){
				if(window.languageSelected == "Telugu" || window.languageSelected == "Tamil" || window.languageSelected == "Urdu")
				{
					_this.playDemoVideos('7_1_2New');
				}
				else
				{
					_this.playDemoVideos('7_1_2a');
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
					_this.time.events.add(14000, function(){
						_this.playDemoVideos('7_1_2b');
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
		_this.playQuestionSound = document.createElement('audio');
		_this.src = document.createElement('source');
		switch(target)
		{
			case '7_1_2a': if(window.languageSelected == "English")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.1.2a.mp3");
				}
				else if(window.languageSelected == "Hindi")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.1.2a.mp3");
				}
				else if(window.languageSelected == "Kannada")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.1.2a.mp3");
				}
					else if(window.languageSelected=="Gujarati")
					{
						_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/7.1.2a.mp3");
					}
					else if(window.languageSelected=="Marathi")
					{
						_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Marathi/7_1_2a.mp3");
					}
					else if(window.languageSelected=="Telugu")
					{
						_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Telugu/7_1_2a.mp3");
					}
					else if(window.languageSelected=="Tamil")
					{
						_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Tamil/7_1_2a.mp3");
					}
					else if(window.languageSelected=="Urdu")
					{
						_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Urdu/7_1_2a.mp3");
					}
				else if(window.languageSelected == "Odiya")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.1.2a.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
				}
				break;
			case '7_1_2b': if(window.languageSelected == "English")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.1.2b.mp3");
				}
				else if(window.languageSelected == "Hindi")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.1.2b.mp3");
				}
				else if(window.languageSelected == "Kannada")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.1.2b.mp3");
				}
					else if(window.languageSelected=="Gujarati")
					{
						_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/7.1.2b.mp3");
					}
					else if(window.languageSelected=="Marathi")
					{
						_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Marathi/7_1_2b.mp3");
					}
					else if(window.languageSelected=="Telugu")
					{
						_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Telugu/7_1_2b.mp3");
					}
					else if(window.languageSelected=="Tamil")
					{
						_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Tamil/7_1_2b.mp3");
					}
					else if(window.languageSelected=="Urdu")
					{
						_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Urdu/7_1_2b.mp3");
					}
				else if(window.languageSelected == "Odiya")
				{
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.1.2b.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
				}
				break;
			case '7_1_2New': if(window.languageSelected=="Marathi")
				{
					_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Marathi/7.1.2.mp3");
				}
				else if(window.languageSelected=="Telugu")
				{
					_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Telugu/7.1.2.mp3");
				}
				else if(window.languageSelected=="Tamil")
				{
					_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Tamil/7.1.2.mp3");
				}
				else if(window.languageSelected=="Urdu")
				{
					_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Urdu/7.1.2.mp3");
				}
				break;
		}
		_this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();
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