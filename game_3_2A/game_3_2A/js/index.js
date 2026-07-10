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
		game.state.add('preloader_3_2A',Game.preloader_3_2A);

		// Game states
		game.state.add('grade3_2Alevel1', Game.grade3_2Alevel1);
		game.state.add('grade3_2AScore', Game.grade3_2AScore);

		// Common states
		game.state.add('score',Game.Score);
		game.state.add('Backbutton',Game.Backbutton);

		game.state.start('boot');
	}
};
app.initialize();
