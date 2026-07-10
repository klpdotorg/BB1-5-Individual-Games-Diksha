Game.preloader_3_3B2=function(game){
	this.preloadBar=null;
};

Game.preloader_3_3B2.prototype={
	preload:function(){
		var basePath = window.baseUrl || '';

		// Game-specific assets (3.3B2)
		this.load.image('Level33B2_gameBg', basePath+'assets/gradeAssets/3.3B2/gameAssets/gameBg.png');
		this.load.image('Level33B2_weight1', basePath+'assets/gradeAssets/3.3B2/gameAssets/weight1.png');
		this.load.image('Level33B2_weight2', basePath+'assets/gradeAssets/3.3B2/gameAssets/weight2.png');
		this.load.image('Level33B2_weight3', basePath+'assets/gradeAssets/3.3B2/gameAssets/weight3.png');
		this.load.atlas('Level33B2_Can', basePath+'assets/gradeAssets/3.3B2/gameAssets/Can.png', basePath+'assets/gradeAssets/3.3B2/Can.json');
		this.load.atlas('Level33B2_Carrot', basePath+'assets/gradeAssets/3.3B2/gameAssets/Carot.png', basePath+'assets/gradeAssets/3.3B2/Carot.json');
		this.load.atlas('Level33B2_Coin', basePath+'assets/gradeAssets/3.3B2/gameAssets/Coin.png', basePath+'assets/gradeAssets/3.3B2/Coin.json');
		this.load.atlas('Level33B2_Ball', basePath+'assets/gradeAssets/3.3B2/gameAssets/Ball.png', basePath+'assets/gradeAssets/3.3B2/Ball.json');
		this.load.atlas('Level33B2_Book', basePath+'assets/gradeAssets/3.3B2/gameAssets/Book.png', basePath+'assets/gradeAssets/3.3B2/Book.json');
		this.load.atlas('Level33B2_Banana', basePath+'assets/gradeAssets/3.3B2/gameAssets/Banana.png', basePath+'assets/gradeAssets/3.3B2/Banana.json');
		this.load.atlas('Level33B2_Comb', basePath+'assets/gradeAssets/3.3B2/gameAssets/comb.png', basePath+'assets/gradeAssets/3.3B2/comb.json');
		this.load.atlas('Level33B2_Eraser', basePath+'assets/gradeAssets/3.3B2/gameAssets/eraser.png', basePath+'assets/gradeAssets/3.3B2/eraser.json');
		this.load.atlas('Level33B2_Eraser2', basePath+'assets/gradeAssets/3.3B2/gameAssets/eraser2.png', basePath+'assets/gradeAssets/3.3B2/eraser2.json');
		this.load.atlas('Level33B2_Glass', basePath+'assets/gradeAssets/3.3B2/gameAssets/Glass.png', basePath+'assets/gradeAssets/3.3B2/Glass.json');
		this.load.atlas('Level33B2_Glass2', basePath+'assets/gradeAssets/3.3B2/gameAssets/Glass2.png', basePath+'assets/gradeAssets/3.3B2/Glass2.json');
		this.load.atlas('Level33B2_Mug', basePath+'assets/gradeAssets/3.3B2/gameAssets/Mug.png', basePath+'assets/gradeAssets/3.3B2/Mug.json');
		this.load.atlas('Level33B2_muggg', basePath+'assets/gradeAssets/3.3B2/gameAssets/muggg.png', basePath+'assets/gradeAssets/3.3B2/muggg.json');
		this.load.atlas('Level33B2_Key', basePath+'assets/gradeAssets/3.3B2/gameAssets/Key.png', basePath+'assets/gradeAssets/3.3B2/Key.json');
		this.load.atlas('Level33B2_Pappaya', basePath+'assets/gradeAssets/3.3B2/gameAssets/Pappaya.png', basePath+'assets/gradeAssets/3.3B2/Pappaya.json');
		this.load.atlas('Level33B2_pappaya1', basePath+'assets/gradeAssets/3.3B2/gameAssets/pappaya1.png', basePath+'assets/gradeAssets/3.3B2/pappaya1.json');
		this.load.atlas('Level33B2_Pencil', basePath+'assets/gradeAssets/3.3B2/gameAssets/Pencil.png', basePath+'assets/gradeAssets/3.3B2/Pencil.json');
		this.load.atlas('Level33B2_ScrewDriver', basePath+'assets/gradeAssets/3.3B2/gameAssets/ScrewDriver.png', basePath+'assets/gradeAssets/3.3B2/ScrewDriver.json');
		this.load.atlas('Level33B2_Shoe', basePath+'assets/gradeAssets/3.3B2/gameAssets/Shoe.png', basePath+'assets/gradeAssets/3.3B2/Shoe.json');
		this.load.atlas('Level33B2_bottle32', basePath+'assets/gradeAssets/3.3B2/gameAssets/bottle32.png', basePath+'assets/gradeAssets/3.3B2/bottle32.json');
		this.load.atlas('Level33B2_tomato32', basePath+'assets/gradeAssets/3.3B2/gameAssets/tomato32.png', basePath+'assets/gradeAssets/3.3B2/tomato32.json');
		this.load.atlas('Level33B2_carrot32', basePath+'assets/gradeAssets/3.3B2/gameAssets/carrot32.png', basePath+'assets/gradeAssets/3.3B2/carrot32.json');
		this.load.atlas('Level33B2_banana32', basePath+'assets/gradeAssets/3.3B2/gameAssets/banana32.png', basePath+'assets/gradeAssets/3.3B2/banana32.json');
		this.load.atlas('Level33B2_bread', basePath+'assets/gradeAssets/3.3B2/gameAssets/bread.png', basePath+'assets/gradeAssets/3.3B2/bread.json');
		this.load.atlas('Level33B2_ball32', basePath+'assets/gradeAssets/3.3B2/gameAssets/ball32.png', basePath+'assets/gradeAssets/3.3B2/ball32.json');
		this.load.atlas('Level33B2_banana322', basePath+'assets/gradeAssets/3.3B2/gameAssets/banana322.png', basePath+'assets/gradeAssets/3.3B2/banana322.json');
		this.load.atlas('Level33B2_block50', basePath+'assets/gradeAssets/3.3B2/gameAssets/block50.png', basePath+'assets/gradeAssets/3.3B2/block50.json');
		this.load.atlas('Level33B2_bottle322', basePath+'assets/gradeAssets/3.3B2/gameAssets/bottle322.png', basePath+'assets/gradeAssets/3.3B2/bottle322.json');
		this.load.atlas('Level33B2_redbook', basePath+'assets/gradeAssets/3.3B2/gameAssets/redbook.png', basePath+'assets/gradeAssets/3.3B2/redbook.json');
		this.load.image('Level33B2_level2weight1', basePath+'assets/gradeAssets/3.3B2/gameAssets/level2/level2weight1.png');
		this.load.image('Level33B2_level2weight2', basePath+'assets/gradeAssets/3.3B2/gameAssets/level2/level2weight2.png');
		this.load.image('Level33B2_level2Bg', basePath+'assets/gradeAssets/3.3B2/gameAssets/level2/level2Bg.png');
		this.load.image('Level33B2_txtbox', basePath+'assets/gradeAssets/3.3B2/gameAssets/level2/box.png');
		this.load.atlas('Level33B2_numbg', basePath+'assets/gradeAssets/3.3B2/gameAssets/level2/numbg.png', basePath+'assets/gradeAssets/3.3B2/numbg.json');
		this.load.atlas('Level33B2_rightBtn', basePath+'assets/gradeAssets/3.3B2/gameAssets/level2/rightBtn.png', basePath+'assets/gradeAssets/3.3B2/rightBtn.json');
		this.load.atlas('Level33B2_wrongBtn', basePath+'assets/gradeAssets/3.3B2/gameAssets/level2/wrongBtn.png', basePath+'assets/gradeAssets/3.3B2/wrongBtn.json');
		this.load.atlas('Level33B2_Eraser2Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/eraser2Anim.png', basePath+'assets/gradeAssets/3.3B2/eraser2Anim.json');
		this.load.atlas('Level33B2_BananaAnim', basePath+'assets/gradeAssets/3.3B2/gameAssets/BananaAnim.png', basePath+'assets/gradeAssets/3.3B2/BananaAnim.json');
		this.load.atlas('Level33B2_CarrotAnim', basePath+'assets/gradeAssets/3.3B2/gameAssets/CarrotAnim.png', basePath+'assets/gradeAssets/3.3B2/CarrotAnim.json');
		this.load.atlas('Level33B2_CoinAnim', basePath+'assets/gradeAssets/3.3B2/gameAssets/CoinAnim.png', basePath+'assets/gradeAssets/3.3B2/CoinAnim.json');
		this.load.atlas('Level33B2_Glass2Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/GlassAnim.png', basePath+'assets/gradeAssets/3.3B2/GlassAnim.json');
		this.load.atlas('Level33B2_level2weight3', basePath+'assets/gradeAssets/3.3B2/gameAssets/level2/L2.png', basePath+'assets/gradeAssets/3.3B2/L2.json');
		this.load.atlas('Level33B2_level2weight4', basePath+'assets/gradeAssets/3.3B2/gameAssets/level2/R2.png', basePath+'assets/gradeAssets/3.3B2/R2.json');
		this.load.atlas('Level33B2_bottle', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/bottle.png', basePath+'assets/gradeAssets/3.3B2/bottle.json');
		this.load.atlas('Level33B2_w1Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/w1Anim.png', basePath+'assets/gradeAssets/3.3B2/w1Anim.json');
		this.load.image('Level33B2_w1', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/w1.png');
		this.load.image('Level33B2_w2', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/w2.png');
		this.load.atlas('Level33B2_w2Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/w2Anim.png', basePath+'assets/gradeAssets/3.3B2/w2Anim.json');
		this.load.atlas('Level33B2_tomoto', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/tomoto.png', basePath+'assets/gradeAssets/3.3B2/tomoto.json');
		this.load.atlas('Level33B2_spoon', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/spoon.png', basePath+'assets/gradeAssets/3.3B2/spoon.json');
		this.load.atlas('Level33B2_eraser1', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/eraser1.png', basePath+'assets/gradeAssets/3.3B2/eraser1.json');
		this.load.atlas('Level33B2_rope', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/rope.png', basePath+'assets/gradeAssets/3.3B2/rope.json');
		this.load.atlas('Level33B2_leef', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/leef.png', basePath+'assets/gradeAssets/3.3B2/leef.json');
		this.load.atlas('Level33B2_coin1', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/coin1.png', basePath+'assets/gradeAssets/3.3B2/coin1.json');
		this.load.atlas('Level33B2_Comb1', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/Comb1.png', basePath+'assets/gradeAssets/3.3B2/Comb1.json');
		this.load.atlas('Level33B2_w1AnimGlow', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/w1AnimGlow.png', basePath+'assets/gradeAssets/3.3B2/w1AnimGlow.json');
		this.load.atlas('Level33B2_w2AnimGlow', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/w2AnimGlow.png', basePath+'assets/gradeAssets/3.3B2/w2AnimGlow.json');
		this.load.atlas('Level33B2_bottle2', basePath+'assets/gradeAssets/3.3B2/gameAssets/level3/bottle2.png', basePath+'assets/gradeAssets/3.3B2/bottle2.json');
		this.load.image('Level33B2_bg1', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33a/bg1.png');
		this.load.image('Level33B2_level2weight32', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33a/level2weight32.png');
		this.load.image('Level33B2_level2weight42', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33a/level2weight42.png');
		this.load.atlas('Level33B2_targetAnim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33a/targetAnim.png', basePath+'assets/gradeAssets/3.3B2/targetAnim.json');
		this.load.atlas('Level33B2_cylinder33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/cylinder33.png', basePath+'assets/gradeAssets/3.3B2/level33c/cylinder33.json');
		this.load.atlas('Level33B2_50g33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/50g33.png', basePath+'assets/gradeAssets/3.3B2/level33c/50g33.json');
		this.load.atlas('Level33B2_100g33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/100g33.png', basePath+'assets/gradeAssets/3.3B2/level33c/100g33.json');
		this.load.atlas('Level33B2_200g33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/200g33.png', basePath+'assets/gradeAssets/3.3B2/level33c/200g33.json');
		this.load.atlas('Level33B2_500g33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/500g33.png', basePath+'assets/gradeAssets/3.3B2/level33c/500g33.json');
		this.load.atlas('Level33B2_50g33Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/50g33Anim.png', basePath+'assets/gradeAssets/3.3B2/level33c/50g33Anim.json');
		this.load.atlas('Level33B2_100g33Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/100g33Anim.png', basePath+'assets/gradeAssets/3.3B2/level33c/100g33Anim.json');
		this.load.atlas('Level33B2_200g33Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/200g33Anim.png', basePath+'assets/gradeAssets/3.3B2/level33c/200g33Anim.json');
		this.load.atlas('Level33B2_500g33Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/500g33Anim.png', basePath+'assets/gradeAssets/3.3B2/level33c/500g33Anim.json');
		this.load.atlas('Level33B2_1kg33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/1kg33.png', basePath+'assets/gradeAssets/3.3B2/level33c/1kg33.json');
		this.load.atlas('Level33B2_2kg33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/2kg33.png', basePath+'assets/gradeAssets/3.3B2/level33c/2kg33.json');
		this.load.atlas('Level33B2_5kg33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/5kg33.png', basePath+'assets/gradeAssets/3.3B2/level33c/5kg33.json');
		this.load.atlas('Level33B2_10kg33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/10kg33.png', basePath+'assets/gradeAssets/3.3B2/level33c/10kg33.json');
		this.load.atlas('Level33B2_1kg33Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/1kg33Anim.png', basePath+'assets/gradeAssets/3.3B2/level33c/1kg33Anim.json');
		this.load.atlas('Level33B2_2kg33Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/2kg33Anim.png', basePath+'assets/gradeAssets/3.3B2/level33c/2kg33Anim.json');
		this.load.atlas('Level33B2_5kg33Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/5kg33Anim.png', basePath+'assets/gradeAssets/3.3B2/level33c/5kg33Anim.json');
		this.load.atlas('Level33B2_10kg33Anim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/10kg33Anim.png', basePath+'assets/gradeAssets/3.3B2/level33c/10kg33Anim.json');
		this.load.atlas('Level33B2_bag33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/bag33.png', basePath+'assets/gradeAssets/3.3B2/level33c/bag33.json');
		this.load.atlas('Level33B2_coinbag', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/coinbag.png', basePath+'assets/gradeAssets/3.3B2/level33c/coinbag.json');
		this.load.atlas('Level33B2_box33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/box33.png', basePath+'assets/gradeAssets/3.3B2/level33c/box33.json');
		this.load.atlas('Level33B2_fruitbox33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/fruitbox33.png', basePath+'assets/gradeAssets/3.3B2/level33c/fruitbox33.json');
		this.load.atlas('Level33B2_can33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/can33.png', basePath+'assets/gradeAssets/3.3B2/level33c/can33.json');
		this.load.atlas('Level33B2_pot33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/pot33.png', basePath+'assets/gradeAssets/3.3B2/level33c/pot33.json');
		this.load.atlas('Level33B2_mugg33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/mugg33.png', basePath+'assets/gradeAssets/3.3B2/level33c/mugg33.json');
		this.load.atlas('Level33B2_bottles33', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/bottles33.png', basePath+'assets/gradeAssets/3.3B2/level33c/bottles33.json');
		this.load.atlas('Level33B2_box-new', basePath+'assets/gradeAssets/3.3B2/gameAssets/level33c/box-new.png', basePath+'assets/gradeAssets/3.3B2/level33c/box-new.json');
		this.load.image('Level33B2_Newlevel2weight1', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight1.png');
		this.load.image('Level33B2_Newlevel2weight2', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight2.png');
		this.load.image('Level33B2_Newlevel2weight3', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight3.png');
		this.load.image('Level33B2_Newlevel2weight4', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight4.png');
		this.load.atlas('Level33B2_Newbottle', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/bottle.png', basePath+'assets/gradeAssets/3.3B2/level22/bottle.json');
		this.load.atlas('Level33B2_Newjug', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/jug.png', basePath+'assets/gradeAssets/3.3B2/level22/jug.json');
		this.load.atlas('Level33B2_Newpot', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/pot.png', basePath+'assets/gradeAssets/3.3B2/level22/pot.json');
		this.load.atlas('Level33B2_Newcan', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/can.png', basePath+'assets/gradeAssets/3.3B2/level22/can.json');
		this.load.atlas('Level33B2_NewfruitBox', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/fruitBox.png', basePath+'assets/gradeAssets/3.3B2/level22/fruitBox.json');
		this.load.atlas('Level33B2_Newbox1', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/box1.png', basePath+'assets/gradeAssets/3.3B2/level22/box1.json');
		this.load.atlas('Level33B2_Newbag1', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/bag1.png', basePath+'assets/gradeAssets/3.3B2/level22/bag1.json');
		this.load.atlas('Level33B2_Newbag2', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/bag2.png', basePath+'assets/gradeAssets/3.3B2/level22/bag2.json');
		this.load.atlas('Level33B2_Newcylinder', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/cylinder.png', basePath+'assets/gradeAssets/3.3B2/level22/cylinder.json');
		this.load.atlas('Level33B2_New1kg', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/1kg.png', basePath+'assets/gradeAssets/3.3B2/level22/1kg.json');
		this.load.atlas('Level33B2_New2kg', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/2kg.png', basePath+'assets/gradeAssets/3.3B2/level22/2kg.json');
		this.load.atlas('Level33B2_New5kg', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/5kg.png', basePath+'assets/gradeAssets/3.3B2/level22/5kg.json');
		this.load.atlas('Level33B2_New10kg', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/10kg.png', basePath+'assets/gradeAssets/3.3B2/level22/10kg.json');
		this.load.atlas('Level33B2_New1kgAnim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/1kgAnim.png', basePath+'assets/gradeAssets/3.3B2/level22/1kgAnim.json');
		this.load.atlas('Level33B2_New2kgAnim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/2kgAnim.png', basePath+'assets/gradeAssets/3.3B2/level22/2kgAnim.json');
		this.load.atlas('Level33B2_New5kgAnim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/5kgAnim.png', basePath+'assets/gradeAssets/3.3B2/level22/5kgAnim.json');
		this.load.atlas('Level33B2_New10kgAnim', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/10kgAnim.png', basePath+'assets/gradeAssets/3.3B2/level22/10kgAnim.json');
		this.load.image('Level33B2_Newlevel2Bg', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/level2Bg.png');
		this.load.image('Level33B2_Newtxtbox', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/box.png');
		this.load.atlas('Level33B2_Newnumbg', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/numbg.png', basePath+'assets/gradeAssets/3.3B2/level22/numbg.json');
		this.load.atlas('Level33B2_NewrightBtn', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/rightBtn.png', basePath+'assets/gradeAssets/3.3B2/level22/rightBtn.json');
		this.load.atlas('Level33B2_NewwrongBtn', basePath+'assets/gradeAssets/3.3B2/gameAssets/level22/wrongBtn.png', basePath+'assets/gradeAssets/3.3B2/level22/wrongBtn.json');

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
		this.load.atlas('CommonBackBtn', basePath+'assets/commonAssets/backbtn.png', basePath+'assets/commonAssets/backbtn.json');
		this.load.atlas('CommonSpeakerBtn', basePath+'assets/commonAssets/speaker.png', basePath+'assets/commonAssets/speaker.json');
		this.load.atlas('Level43A_numbg', basePath+'assets/gradeAssets/4.3A/commonAssets/numbg.png', basePath+'assets/gradeAssets/4.3A/numbg.json');
		this.load.atlas('Level42A_CommonSpeakerBtn', basePath+'assets/gradeAssets/4.2A/commonAssets/speaker.png', basePath+'assets/gradeAssets/4.2A/speaker.json');
		this.load.atlas('tick', basePath+'assets/gradeAssets/4.3A/commonAssets/tick.png', basePath+'assets/gradeAssets/4.3A/tick.json');
		this.load.atlas('eraser', basePath+'assets/gradeAssets/4.3A/commonAssets/eraser.png', basePath+'assets/gradeAssets/4.3A/eraser.json');



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
		this.state.start('grade3_3B2level1');
	},
};
