var _this;

var app={
	initialize:function(){
		if(window.cordova){
			document.addEventListener('deviceready',this.onDeviceReady.bind(this),false);
			return;
		}
		this.receivedEvent();
	},
	onDeviceReady:function(){ this.receivedEvent(); },
	receivedEvent:function(id){
		var game=new Phaser.Game(960,540,Phaser.CANVAS,'');

		game.state.add('boot',Game.boot);
		game.state.add('preloader_sg7_2_2',Game.preloader_sg7_2_2);

		// Game states
		game.state.add('sg7_2_2level1', Game.sg7_2_2level1);
		game.state.add('sg7_2_2Score', Game.sg7_2_2Score);

		// Common states
		game.state.add('score',Game.Score);
		game.state.add('Backbutton',Game.Backbutton);

		game.state.start('boot');
	}
};
app.initialize();
