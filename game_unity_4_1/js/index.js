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
		game.state.add('preloader_unity_4_1',Game.preloader_unity_4_1);

		// Game states
		game.state.add('unity4_1_1level1', Game.unity4_1_1level1);
		game.state.add('unity4_1_1Score', Game.unity4_1_1Score);

		// Common states
		game.state.add('score',Game.Score);
		game.state.add('Backbutton',Game.Backbutton);

		game.state.start('boot');
	}
};
app.initialize();
