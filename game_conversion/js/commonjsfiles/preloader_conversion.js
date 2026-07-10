Game.preloader_conversion=function(game){
	this.preloadBar=null;
};

Game.preloader_conversion.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (conversion)
		this.load.atlas('sg7_1_2backbtn',basePath+'assets/conversion/commonAssets/backbtn.png' ,basePath+'assets/gradeAssets/NOLDG1_4_5/backbtn.json');
		this.load.atlas('sg7_1_2CommonSpeakerBtn',basePath+'assets/conversion/commonAssets/speaker.png' ,basePath+'assets/gradeAssets/NOLDG1_4_5/speaker.json');
		this.load.atlas('sg7_1_2starAnim',basePath+'assets/conversion/commonAssets/starAnim.png',basePath+'assets/gradeAssets/NOLDG1_4_5/starAnim.json');
		this.load.atlas('sg7_1_2replay',basePath+'assets/conversion/commonAssets/reply.png' ,basePath+'assets/gradeAssets/NOLDG1_4_5/reply.json');
		this.load.atlas('sg7_1_2btn',basePath+'assets/conversion/commonAssets/btn.png',basePath+'assets/gradeAssets/NOLDG1_4_5/btn.json');
		this.load.atlas('numpadNum',basePath+'assets/conversion/commonAssets/numpadNum.png',basePath+'assets/gradeAssets/NOLDG1_4_5/numpadNum.json');
		this.load.atlas('rightmark',basePath+'assets/conversion/commonAssets/rightmark.png',basePath+'assets/gradeAssets/NOLDG1_4_5/rightmark.json');
		this.load.atlas('erase',basePath+'assets/conversion/commonAssets/erase.png',basePath+'assets/gradeAssets/NOLDG1_4_5/erase.json');
		this.load.atlas('numberVSmall',basePath+'assets/conversion/commonAssets/numberVSmall.png',basePath+'assets/gradeAssets/NOLDG1_4_5/numberVSmall.json');
		this.load.image('numbg',basePath+'assets/conversion/commonAssets/numbg.png');
		this.load.image('hand_sp',basePath+'assets/conversion/commonAssets/hand.png');
		this.load.image('sg7_1_2background1',basePath+'assets/conversion/commonAssets/bg1.png');
		this.load.image('sg7_1_2tittleBar',basePath+'assets/conversion/commonAssets/tittleBar.png');
		this.load.image('navBar_sp',basePath+'assets/conversion/commonAssets/navBar.png');
		this.load.image('timebg_sp',basePath+'assets/conversion/commonAssets/timebg.png');
		this.load.image('skipDemoVideos',basePath+'assets/conversion/commonAssets/skipArrow.png');
		this.load.image('commonBg', basePath+'assets/conversion/commonAssets/commonBG.png');
		this.load.image('1rsNote_sp', basePath+'assets/conversion/gradeAssets/startScene/1rsNote.png');
		this.load.image('2rsNote_sp', basePath+'assets/conversion/gradeAssets/startScene/2rsNote.png');
		this.load.image('5rsNote_sp', basePath+'assets/conversion/gradeAssets/startScene/5rsNote.png');
		this.load.image('10rsNote_sp', basePath+'assets/conversion/gradeAssets/startScene/10rsNote.png');
		this.load.image('20rsNote_sp', basePath+'assets/conversion/gradeAssets/startScene/20rsNote.png');
		this.load.image('50rsNote_sp', basePath+'assets/conversion/gradeAssets/startScene/50rsNote.png');
		this.load.image('100rsNote_sp', basePath+'assets/conversion/gradeAssets/startScene/100rsNote.png');
		this.load.image('200rsNote_sp', basePath+'assets/conversion/gradeAssets/startScene/200rsNote.png');
		this.load.image('closeWallet_sp', basePath+'assets/conversion/gradeAssets/startScene/closeWallet.png');
		this.load.image('handOverMoney_sp', basePath+'assets/conversion/gradeAssets/startScene/handOverMoney.png');
		this.load.image('handOverRecipt_sp', basePath+'assets/conversion/gradeAssets/startScene/handOverRecipt.png');
		this.load.image('handToShow_sp', basePath+'assets/conversion/gradeAssets/startScene/handToShow.png');
		this.load.image('receiptBtn_sp', basePath+'assets/conversion/gradeAssets/startScene/receiptBtn.png');
		this.load.image('receiptForBeg_sp', basePath+'assets/conversion/gradeAssets/startScene/receiptForBeg.png');
		this.load.image('walletBG_sp', basePath+'assets/conversion/gradeAssets/startScene/walletBG.png');
		this.load.image('wallet_sp', basePath+'assets/conversion/gradeAssets/startScene/wallet.png');
		this.load.image('walletBtn_sp', basePath+'assets/conversion/gradeAssets/startScene/walletBtn.png');
		this.load.image('receiptToClick_sp', basePath+'assets/conversion/gradeAssets/startScene/receiptToClick.png');
		this.load.image('billMachine_sp', basePath+'assets/conversion/gradeAssets/startScene/billMachine.png');
		this.load.image('inputBox_sp',basePath+'assets/conversion/gradeAssets/startScene/inputBox.png');
		this.load.image('shopKeeper_sp',basePath+'assets/conversion/gradeAssets/startScene/shopKeeper.png');
		this.load.image('billValueBox_sp',basePath+'assets/conversion/gradeAssets/startScene/billValueBox.png');
		this.load.atlas('1rupee_sp',basePath+'assets/conversion/gradeAssets/startScene/1rupee.png',basePath+'assets/gradeAssets/startScene/1rupee.json');
		this.load.atlas('2rupee_sp',basePath+'assets/conversion/gradeAssets/startScene/2rupee.png',basePath+'assets/gradeAssets/startScene/2rupee.json');
		this.load.atlas('5rupee_sp',basePath+'assets/conversion/gradeAssets/startScene/5rupee.png',basePath+'assets/gradeAssets/startScene/5rupee.json');
		this.load.atlas('10rupee_sp',basePath+'assets/conversion/gradeAssets/startScene/10rupee.png',basePath+'assets/gradeAssets/startScene/10rupee.json');
		this.load.atlas('20rupee_sp',basePath+'assets/conversion/gradeAssets/startScene/20rupee.png',basePath+'assets/gradeAssets/startScene/20rupee.json');
		this.load.atlas('50rupee_sp',basePath+'assets/conversion/gradeAssets/startScene/50rupee.png',basePath+'assets/gradeAssets/startScene/50rupee.json');
		this.load.atlas('100rupee_sp',basePath+'assets/conversion/gradeAssets/startScene/100rupee.png',basePath+'assets/gradeAssets/startScene/100rupee.json');
		this.load.atlas('200rupee_sp',basePath+'assets/conversion/gradeAssets/startScene/200rupee.png',basePath+'assets/gradeAssets/startScene/200rupee.json');
		this.load.atlas('nextArrow_sp',basePath+'assets/conversion/gradeAssets/startScene/nextArrow.png',basePath+'assets/gradeAssets/startScene/nextArrow.json');
		this.load.atlas('blueBox_sp',basePath+'assets/conversion/gradeAssets/startScene/blueBox.png',basePath+'assets/gradeAssets/startScene/blueBox.json');
		this.load.atlas('walletAnim_sp',basePath+'assets/conversion/gradeAssets/startScene/walletAnim.png',basePath+'assets/gradeAssets/startScene/walletAnim.json');
		this.load.atlas('autoAnim_sp',basePath+'assets/conversion/gradeAssets/startScene/autoAnim.png',basePath+'assets/gradeAssets/startScene/autoAnim.json');
		this.load.image('0Bmarket1_sp', basePath+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket1.png');
		this.load.image('0Bmarket2_sp', basePath+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket2.png');
		this.load.image('0Bmarket3_sp', basePath+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket3.png');
		this.load.image('0Bmarket4_sp', basePath+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket4.png');
		this.load.image('0Bmarket5_sp', basePath+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket5.png');
		this.load.image('0Bmarket6_sp', basePath+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket6.png');
		this.load.image('0Astreet1_sp', basePath+'assets/conversion/gradeAssets/0AstreetImages/0Astreet1.png');
		this.load.image('0Astreet2_sp', basePath+'assets/conversion/gradeAssets/0AstreetImages/0Astreet2.png');
		this.load.image('0Astreet3_sp', basePath+'assets/conversion/gradeAssets/0AstreetImages/0Astreet3.png');
		this.load.image('0Astreet4_sp', basePath+'assets/conversion/gradeAssets/0AstreetImages/0Astreet4.png');
		this.load.image('0Astreet5_sp', basePath+'assets/conversion/gradeAssets/0AstreetImages/0Astreet5.png');
		this.load.image('CmarketClsUp1_sp', basePath+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp1.png');
		this.load.image('CmarketClsUp2_sp', basePath+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp2.png');
		this.load.image('CmarketClsUp3_sp', basePath+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp3.png');
		this.load.image('CmarketClsUp4_sp', basePath+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp4.png');
		this.load.image('CmarketClsUp5_sp', basePath+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp5.png');
		this.load.image('CmarketClsUp6_sp', basePath+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp6.png');
		this.load.image('CmarketClsUp7_sp', basePath+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp7.png');
		this.load.image('CmarketClsUp8_sp', basePath+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp8.png');
		this.load.image('CmarketClsUp9_sp', basePath+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp9.png');
		this.load.image('CmarketClsUp10_sp', basePath+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp10.png');
		this.load.image('apple_sp', basePath+'assets/conversion/gradeAssets/groceryList/Apple.png');
		this.load.image('banana_sp', basePath+'assets/conversion/gradeAssets/groceryList/Banana.png');
		this.load.image('brinjal_sp', basePath+'assets/conversion/gradeAssets/groceryList/Brinjal.png');
		this.load.image('carrot_sp', basePath+'assets/conversion/gradeAssets/groceryList/Carrot.png');
		this.load.image('chilly_sp', basePath+'assets/conversion/gradeAssets/groceryList/Chilli.png');
		this.load.image('laddu_sp', basePath+'assets/conversion/gradeAssets/groceryList/laddu.png');
		this.load.image('iceCreamTub_sp', basePath+'assets/conversion/gradeAssets/groceryList/Icecream.png');
		this.load.image('jalebi_sp', basePath+'assets/conversion/gradeAssets/groceryList/Jalebi.png');
		this.load.image('lampOil_sp', basePath+'assets/conversion/gradeAssets/groceryList/LampOil.png');
		this.load.image('milkPacket_sp', basePath+'assets/conversion/gradeAssets/groceryList/Milk.png');
		this.load.image('burfi_sp', basePath+'assets/conversion/gradeAssets/groceryList/Mitai.png');
		this.load.image('peanuts_sp', basePath+'assets/conversion/gradeAssets/groceryList/Peanuts.png');
		this.load.image('pineapple_sp', basePath+'assets/conversion/gradeAssets/groceryList/Pinaepple.png');
		this.load.image('pumpkin_sp', basePath+'assets/conversion/gradeAssets/groceryList/pumpkin.png');
		this.load.image('rice_sp', basePath+'assets/conversion/gradeAssets/groceryList/Rice.png');
		this.load.image('flour_sp', basePath+'assets/conversion/gradeAssets/groceryList/Flour.png');
		this.load.image('candy_sp', basePath+'assets/conversion/gradeAssets/groceryList/Toffee.png');
		this.load.image('tomato_sp', basePath+'assets/conversion/gradeAssets/groceryList/Tomato.png');
		this.load.image('sunflowerOil_sp', basePath+'assets/conversion/gradeAssets/groceryList/VegetableOil.png');
		this.load.image('watermelon_sp', basePath+'assets/conversion/gradeAssets/groceryList/WaterMelon.png');
		this.load.image('clearLine_sp', basePath+'assets/conversion/gradeAssets/itemList/clearLine.png');
		this.load.atlas('autoImg_sp',basePath+'assets/conversion/gradeAssets/itemList/autoImg.png',basePath+'assets/gradeAssets/itemList/autoImg.json');
		this.load.atlas('bananaImg_sp',basePath+'assets/conversion/gradeAssets/itemList/bananaImg.png',basePath+'assets/gradeAssets/itemList/bananaImg.json');
		this.load.atlas('candyImg_sp',basePath+'assets/conversion/gradeAssets/itemList/candyImg.png',basePath+'assets/gradeAssets/itemList/candyImg.json');
		this.load.atlas('carrotImg_sp',basePath+'assets/conversion/gradeAssets/itemList/carrotImg.png',basePath+'assets/gradeAssets/itemList/carrotImg.json');
		this.load.atlas('lampOilImg_sp',basePath+'assets/conversion/gradeAssets/itemList/oilImg.png',basePath+'assets/gradeAssets/itemList/oilImg.json');
		this.load.atlas('jalebiImg_sp',basePath+'assets/conversion/gradeAssets/itemList/jalebiImg.png',basePath+'assets/gradeAssets/itemList/jalebiImg.json');
		this.load.atlas('appleImg_sp',basePath+'assets/conversion/gradeAssets/itemList/appleImg.png',basePath+'assets/gradeAssets/itemList/appleImg.json');
		this.load.atlas('brinjalImg_sp',basePath+'assets/conversion/gradeAssets/itemList/brinjalImg.png',basePath+'assets/gradeAssets/itemList/brinjalImg.json');
		this.load.atlas('burfiImg_sp',basePath+'assets/conversion/gradeAssets/itemList/burfyImg.png',basePath+'assets/gradeAssets/itemList/burfyImg.json');
		this.load.atlas('chillyImg_sp',basePath+'assets/conversion/gradeAssets/itemList/chilliImg.png',basePath+'assets/gradeAssets/itemList/chilliImg.json');
		this.load.atlas('riceImg_sp',basePath+'assets/conversion/gradeAssets/itemList/flourImg.png',basePath+'assets/gradeAssets/itemList/flourImg.json');
		this.load.atlas('iceCreamTubImg_sp',basePath+'assets/conversion/gradeAssets/itemList/iceCreamImg.png',basePath+'assets/gradeAssets/itemList/iceCreamImg.json');
		this.load.atlas('ladduImg_sp',basePath+'assets/conversion/gradeAssets/itemList/ladduImg.png',basePath+'assets/gradeAssets/itemList/ladduImg.json');
		this.load.atlas('milkPacketImg_sp',basePath+'assets/conversion/gradeAssets/itemList/milkImg.png',basePath+'assets/gradeAssets/itemList/milkImg.json');
		this.load.atlas('oil1Img_sp',basePath+'assets/conversion/gradeAssets/itemList/oil1Img.png',basePath+'assets/gradeAssets/itemList/oil1Img.json');
		this.load.atlas('sunfloweroilImg_sp',basePath+'assets/conversion/gradeAssets/itemList/oil2Img.png',basePath+'assets/gradeAssets/itemList/oil2Img.json');
		this.load.atlas('sunflowerOilImg_sp',basePath+'assets/conversion/gradeAssets/itemList/oil2Img.png',basePath+'assets/gradeAssets/itemList/oil2Img.json');
		this.load.atlas('peanutsImg_sp',basePath+'assets/conversion/gradeAssets/itemList/peanutImg.png',basePath+'assets/gradeAssets/itemList/peanutImg.json');
		this.load.atlas('pineappleImg_sp',basePath+'assets/conversion/gradeAssets/itemList/pineAppleImg.png',basePath+'assets/gradeAssets/itemList/pineAppleImg.json');
		this.load.atlas('pumpkinImg_sp',basePath+'assets/conversion/gradeAssets/itemList/pumpkinImg.png',basePath+'assets/gradeAssets/itemList/pumpkinImg.json');
		this.load.atlas('flourImg_sp',basePath+'assets/conversion/gradeAssets/itemList/riceImg.png',basePath+'assets/gradeAssets/itemList/riceImg.json');
		this.load.atlas('tomatoImg_sp',basePath+'assets/conversion/gradeAssets/itemList/tomatoImg.png',basePath+'assets/gradeAssets/itemList/tomatoImg.json');
		this.load.atlas('watermelonImg_sp',basePath+'assets/conversion/gradeAssets/itemList/waterMelonImg.png',basePath+'assets/gradeAssets/itemList/waterMelonImg.json');
		this.load.image('0BmarketBlur1_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur1.png');
		this.load.image('0BmarketBlur2_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur2.png');
		this.load.image('0BmarketBlur3_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur3.png');
		this.load.image('0BmarketBlur4_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur4.png');
		this.load.image('0BmarketBlur5_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur5.png');
		this.load.image('0BmarketBlur6_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur6.png');
		this.load.image('0CmarketClsUpBlur1_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur1.png');
		this.load.image('0CmarketClsUpBlur2_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur2.png');
		this.load.image('0CmarketClsUpBlur3_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur3.png');
		this.load.image('0CmarketClsUpBlur4_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur4.png');
		this.load.image('0CmarketClsUpBlur5_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur5.png');
		this.load.image('0CmarketClsUpBlur6_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur6.png');
		this.load.image('0CmarketClsUpBlur7_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur7.png');
		this.load.image('0CmarketClsUpBlur8_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur8.png');
		this.load.image('0CmarketClsUpBlur9_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur9.png');
		this.load.image('0CmarketClsUpBlur10_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur10.png');
		this.load.image('0AstreetBlur1_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0AstreetBlur1.png');
		this.load.image('0AstreetBlur2_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0AstreetBlur2.png');
		this.load.image('0AstreetBlur3_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0AstreetBlur3.png');
		this.load.image('0AstreetBlur4_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0AstreetBlur4.png');
		this.load.image('0AstreetBlur5_sp', basePath+'assets/conversion/gradeAssets/BlurImages/0AstreetBlur5.png');
		this.load.image('mmBg_sp', basePath+'assets/conversion/gradeAssets/moneyMachine/mmBg.png');
		this.load.image('minusSymbol_sp', basePath+'assets/conversion/gradeAssets/moneyMachine/minusSymbol.png');
		this.load.image('moneyMachine_sp', basePath+'assets/conversion/gradeAssets/moneyMachine/moneyMachine.png');
		this.load.atlas('mm1rs_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/mm1rs.png',basePath+'assets/gradeAssets/moneyMachine/mm1rs.json');
		this.load.atlas('mm2rs_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/mm2rs.png',basePath+'assets/gradeAssets/moneyMachine/mm2rs.json');
		this.load.atlas('mm5rs_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/mm5rs.png',basePath+'assets/gradeAssets/moneyMachine/mm5rs.json');
		this.load.atlas('mm10rs_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/mm10rs.png',basePath+'assets/gradeAssets/moneyMachine/mm10rs.json');
		this.load.atlas('mm20rs_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/mm20rs.png',basePath+'assets/gradeAssets/moneyMachine/mm20rs.json');
		this.load.atlas('mm50rs_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/mm50rs.png',basePath+'assets/gradeAssets/moneyMachine/mm50rs.json');
		this.load.atlas('mm100rs_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/mm100rs.png',basePath+'assets/gradeAssets/moneyMachine/mm100rs.json');
		this.load.atlas('mm200rs_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/mm200rs.png',basePath+'assets/gradeAssets/moneyMachine/mm200rs.json');
		this.load.atlas('mmCount_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/mmCount.png',basePath+'assets/gradeAssets/moneyMachine/mmCount.json');
		this.load.atlas('mmPull_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/mmPull.png',basePath+'assets/gradeAssets/moneyMachine/mmPull.json');
		this.load.atlas('resetBtn_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/resetBtn.png',basePath+'assets/gradeAssets/moneyMachine/resetBtn.json');
		this.load.atlas('dropNoteSpot_sp',basePath+'assets/conversion/gradeAssets/moneyMachine/dropNoteSpot.png',basePath+'assets/gradeAssets/moneyMachine/dropNoteSpot.json');
		this.load.image('autoMeter_sp', basePath+'assets/conversion/gradeAssets/endScene/autoMeter.png');
		this.load.image('celebBg_sp', basePath+'assets/conversion/gradeAssets/endScene/celebBg.png');
		this.load.atlas('celebAnim1_sp',basePath+'assets/conversion/gradeAssets/endScene/celebAnim1.png',basePath+'assets/gradeAssets/endScene/celebAnim1.json');
		this.load.atlas('celebAnim2_sp',basePath+'assets/conversion/gradeAssets/endScene/celebAnim2.png',basePath+'assets/gradeAssets/endScene/celebAnim2.json');
		this.load.atlas('celebAnim3_sp',basePath+'assets/conversion/gradeAssets/endScene/celebAnim3.png',basePath+'assets/gradeAssets/endScene/celebAnim3.json');
		this.load.atlas('celebAnim4_sp',basePath+'assets/conversion/gradeAssets/endScene/celebAnim4.png',basePath+'assets/gradeAssets/endScene/celebAnim4.json');
		this.load.atlas('celebAnim5_sp',basePath+'assets/conversion/gradeAssets/endScene/celebAnim5.png',basePath+'assets/gradeAssets/endScene/celebAnim5.json');
		this.load.atlas('celebAnim6_sp',basePath+'assets/conversion/gradeAssets/endScene/celebAnim6.png',basePath+'assets/gradeAssets/endScene/celebAnim6.json');

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
		this.load.image('conversion', basePath+'assets/conversion/conversion.png');
		this.load.atlas('CommonSpeakerBtn', basePath+'assets/commonAssets/speaker.png', basePath+'assets/commonAssets/speaker.json');
		this.load.atlas('eraser', basePath+'assets/gradeAssets/4.3A/commonAssets/eraser.png', basePath+'assets/gradeAssets/4.3A/eraser.json');

		this.load.video('demo_conversion', basePath+'assets/conversion/demoVideos/DHDCG1_4.mp4');
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
		function startGame(){ _self.state.start('conversion'); }
		if (_self.cache.checkKey(Phaser.Cache.VIDEO, 'demo_conversion')) {
			var vid = _self.add.video('demo_conversion');
			vid.addToWorld(
				_self.world.centerX, _self.world.centerY, 0.5, 0.5,
				_self.world.width / (vid.width || 960),
				_self.world.height / (vid.height || 540)
			);
			vid.play(false);
			vid.changeSource(window.baseUrl+"assets/conversion/demoVideos/DHDCG1_4.mp4");
			vid.play(false);
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
