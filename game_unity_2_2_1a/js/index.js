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
		game.state.add('preloader_unity_2_2_1a',Game.preloader_unity_2_2_1a);

		// Game states
		game.state.add('unity2_2_1alevel1', Game.unity2_2_1alevel1);
		game.state.add('unity2_2_1aScore', Game.unity2_2_1aScore);

		// Common states
		game.state.add('score',Game.Score);
		game.state.add('Backbutton',Game.Backbutton);

		game.state.start('boot');
	}
};
app.initialize();
