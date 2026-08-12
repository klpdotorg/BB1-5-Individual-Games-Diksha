Game.preloader_Time_MT5_1_G5 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_Time_MT5_1_G5.prototype = {
        preload: function () { 
                //  this.load.video('nsrp02_1','demoVideos/AL-SUB-G7.mp4');   //* include demo video of game.
                
                // Common Assets
                this.load.image('skipArrow', 'assets/commonAssets/skipArrow.png');
                this.load.image('backg', 'assets/commonAssets/backg.png');
                this.load.image('btn', 'assets/commonAssets/btn.png');
                this.load.image('dotbox', 'assets/commonAssets/dotbox.png');
                this.load.image('numbg', 'assets/commonAssets/numbg.png');
                this.load.image('prgressbar', 'assets/commonAssets/prgressbar.png');
                this.load.image('prgressbarOutLine', 'assets/commonAssets/prgressbarOutLine.png');
                this.load.image('timer', 'assets/commonAssets/timer.png');
                this.load.image('topicOutline', 'assets/commonAssets/topicOutline.png');
                this.load.image('navbar', 'assets/commonAssets/navbar.png');
                this.load.image('timebg', 'assets/commonAssets/timebg.png');
                this.load.image('hand', 'assets/commonAssets/hand.png');

                this.load.atlas('bulb', 'assets/commonAssets/bulb.png', null, Time_MT5_1_G5_JSON.bulbBtnJson);
                this.load.atlas('backbtn', 'assets/commonAssets/backbtn.png', null, Time_MT5_1_G5_JSON.backbtnJson);
                this.load.atlas('newBackBtn', 'assets/commonAssets/newBackBtn.png', 'assets/commonAssets/newBackBtn.json');
                this.load.atlas('CommonSpeakerBtn', 'assets/commonAssets/speaker.png', null, Time_MT5_1_G5_JSON.speakerJson);
                this.load.atlas('starAnim', 'assets/commonAssets/starAnim.png', null, Time_MT5_1_G5_JSON.starAnimJson);
                this.load.atlas('starAnim1','assets/commonAssets/starAnim1.png','assets/commonAssets/starAnim1.json');
                this.load.atlas('reply', 'assets/commonAssets/reply.png', null, Time_MT5_1_G5_JSON.replyJson);
                this.load.atlas('CommonHomeBtn', 'assets/commonAssets/homeBtn.png', null, Time_MT5_1_G5_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', 'assets/commonAssets/nextBtn.png', null, Time_MT5_1_G5_JSON.nextbtnJson);
                this.load.image('glow', 'assets/gradeAssets/Time-MT5-1-G5/glow.png');
                // Grade Assets
                this.load.atlas('allimg','assets/gradeAssets/Time-MT5-1-G5/allimg.png','assets/gradeAssets/Time-MT5-1-G5/allimg.json');
                this.load.atlasJSONHash("thumbsUp","assets/gradeAssets/Time-MT5-1-G5/thumbsUp.png","assets/gradeAssets/Time-MT5-1-G5/thumbsUp.json");
                this.load.atlasJSONHash("thumbsDown","assets/gradeAssets/Time-MT5-1-G5/thumbsDown.png","assets/gradeAssets/Time-MT5-1-G5/thumbsDown.json");
                this.load.atlasJSONHash("AM_Sprite","assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/am.png","assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/am.json");
                this.load.atlasJSONHash("PM_Sprite","assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/pm.png","assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/pm.json");
                this.load.atlasJSONHash("AM_Button","assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/am.png","assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/am.json");
                this.load.atlasJSONHash("PM_Button","assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/pm.png","assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/pm.json");
                this.load.image('Bg', 'assets/gradeAssets/Time-MT5-1-G5/Bg.png');
                this.load.image('C1', 'assets/gradeAssets/Time-MT5-1-G5/C1.png');
                this.load.image('C2', 'assets/gradeAssets/Time-MT5-1-G5/C2.png');
                this.load.image('C3', 'assets/gradeAssets/Time-MT5-1-G5/C3.png');
                this.load.image('C4', 'assets/gradeAssets/Time-MT5-1-G5/C4.png');
                this.load.image('C5', 'assets/gradeAssets/Time-MT5-1-G5/C5.png');
                this.load.image('C6', 'assets/gradeAssets/Time-MT5-1-G5/C6.png');
                this.load.image('C7', 'assets/gradeAssets/Time-MT5-1-G5/C7.png');
                this.load.image('C8', 'assets/gradeAssets/Time-MT5-1-G5/C8.png');
                this.load.image('C9', 'assets/gradeAssets/Time-MT5-1-G5/C9.png');
                this.load.image('C10', 'assets/gradeAssets/Time-MT5-1-G5/C10.png');
                this.load.image('C11', 'assets/gradeAssets/Time-MT5-1-G5/C11.png');
                this.load.image('C12', 'assets/gradeAssets/Time-MT5-1-G5/C12.png');
                this.load.image('C13', 'assets/gradeAssets/Time-MT5-1-G5/C13.png');
                this.load.image('C14', 'assets/gradeAssets/Time-MT5-1-G5/C14.png');
                this.load.image('C15', 'assets/gradeAssets/Time-MT5-1-G5/C15.png');
                this.load.image('C16', 'assets/gradeAssets/Time-MT5-1-G5/C16.png');
                this.load.image('C17', 'assets/gradeAssets/Time-MT5-1-G5/C17.png');
                this.load.image('C18', 'assets/gradeAssets/Time-MT5-1-G5/C18.png');
                this.load.image('C19', 'assets/gradeAssets/Time-MT5-1-G5/C19.png');
                this.load.image('C20', 'assets/gradeAssets/Time-MT5-1-G5/C20.png');
                this.load.image('C21', 'assets/gradeAssets/Time-MT5-1-G5/C21.png');      
                this.load.image('C22', 'assets/gradeAssets/Time-MT5-1-G5/C22.png');                                                                                       
                this.load.image('C5 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C5 Clock.png');
                this.load.image('C6 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C6 Clock.png');
                this.load.image('C7 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C7 Clock.png');
                this.load.image('C8 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C8 Clock.png');
                this.load.image('C9 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C9 Clock.png');
                this.load.image('C10 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C10 Clock.png');
                this.load.image('C11 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C11 Clock.png');
                this.load.image('C12 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C12 Clock.png');
                this.load.image('C13 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C13 Clock.png');
                this.load.image('C19 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C19 Clock.png');
                this.load.image('C20 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C20 Clock.png');
                this.load.image('C21 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C21 Clock.png');
                this.load.image('C22 Clock', 'assets/gradeAssets/Time-MT5-1-G5/C22 Clock.png');

                this.load.image('Background', 'assets/gradeAssets/Time-MT5-1-G5/Baground.png');
                this.load.image('AnalogClock', 'assets/gradeAssets/Time-MT5-1-G5/Analog clock.png');
                this.load.atlas('AnalogClocksprite', 'assets/gradeAssets/Time-MT5-1-G5/Analog clock 1.png', null, Time_MT5_1_G5_JSON.analogClock);

                // this.load.image('DigitalClock', 'assets/gradeAssets/Time-MT5-1-G5/Digital clock.png');
                this.load.atlas('DigitalClock', 'assets/gradeAssets/Time-MT5-1-G5/Digital clock 1.png',null, Time_MT5_1_G5_JSON.digitalClock);
                this.load.atlas('rightans', 'assets/gradeAssets/Time-MT5-1-G5/Right Answer.png',null, Time_MT5_1_G5_JSON.mrRight);
                this.load.atlas('wrongans', 'assets/gradeAssets/Time-MT5-1-G5/Wrong Answer.png',null, Time_MT5_1_G5_JSON.mrWrong);


                this.load.image('RedCircle', 'assets/gradeAssets/Time-MT5-1-G5/Red Circle.png');
                this.load.image('Box', 'assets/gradeAssets/Time-MT5-1-G5/Box.png');
                this.load.image('Box1', 'assets/gradeAssets/Time-MT5-1-G5/Box1.png');
                this.load.atlas('AM', 'assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/am.png', 'assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/am.json');
                this.load.atlas('PM', 'assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/pm.png', 'assets/gradeAssets/Time-MT5-1-G5/Time-MT5-1-G5/pm.json');
                this.load.atlas('DigitalNum', 'assets/gradeAssets/Time-MT5-1-G5/Digital sprite.png', 'assets/gradeAssets/Time-MT5-1-G5/Digital sprite.json');
                this.load.atlas('HourHand','assets/gradeAssets/Time-MT5-1-G5/HourHand.png','assets/gradeAssets/Time-MT5-1-G5/HourHand.json');
                this.load.atlas('MinuteHand','assets/gradeAssets/Time-MT5-1-G5/MinuteHand.png','assets/gradeAssets/Time-MT5-1-G5/MinuteHand.json');
                this.load.atlas('RightClick', 'assets/gradeAssets/Time-MT5-1-G5/RightClick.png', 'assets/gradeAssets/Time-MT5-1-G5/RightClick.json');


                this.load.audio('clocktick', 'sounds/clocktick.mp3');
                this.load.audio('dragSound', 'sounds/Drag_Snap.mp3');
                this.load.audio('chime', 'sounds/chime.mp3');
                this.load.audio('smallReward', 'sounds/Small Reward.mp3');

                //Q5-A6
                // Question 5 - Images
                this.load.image('BgQ5', 'assets/gradeAssets/Time-MT5-1-G5/Baground.png');
                this.load.image('BoxQ5', 'assets/gradeAssets/Time-MT5-1-G5/Box.png');
                this.load.image('Character1Q5', 'assets/gradeAssets/Time-MT5-1-G5/Character 1.png');
                this.load.image('Character2Q5', 'assets/gradeAssets/Time-MT5-1-G5/Character 2.png');
                this.load.image('Character3Q5', 'assets/gradeAssets/Time-MT5-1-G5/Character 3.png');
                this.load.image('Character4Q5', 'assets/gradeAssets/Time-MT5-1-G5/Character 4.png');
                this.load.image('Character5Q5', 'assets/gradeAssets/Time-MT5-1-G5/Character 5.png');
                this.load.image('Character6Q5', 'assets/gradeAssets/Time-MT5-1-G5/Character 6.png');
                this.load.image('GreenBoxQ5', 'assets/gradeAssets/Time-MT5-1-G5/Green box.png');
                this.load.image('GreyBoxQ5', 'assets/gradeAssets/Time-MT5-1-G5/Grey box.png');
                this.load.image('PodiumQ5', 'assets/gradeAssets/Time-MT5-1-G5/Podium.png');
                this.load.image('TrackQ5', 'assets/gradeAssets/Time-MT5-1-G5/Track.png');
                this.load.image('WhiteBoxQ5', 'assets/gradeAssets/Time-MT5-1-G5/Box.png');
                this.load.image('Podium', 'assets/gradeAssets/Time-MT5-1-G5/Podium.png');

                // Question 5 - Sprites
                this.load.atlas('Sprite1Q5', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 1.png', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 1.json');
                this.load.atlas('Sprite2Q5', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 2.png', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 2.json');
                this.load.atlas('Sprite3Q5', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 3.png', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 3.json');
                this.load.atlas('Sprite4Q5', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 4.png', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 4.json');
                this.load.atlas('Sprite5Q5', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 5.png', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 5.json');
                this.load.atlas('Sprite6Q5', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 6.png', 'assets/gradeAssets/Time-MT5-1-G5/Sprite 6.json');

                // Question 6 - Images
                this.load.image('BgQ6', 'assets/gradeAssets/Time-MT5-1-G5/Baground.png');
                this.load.image('BoxWithTrackQ6', 'assets/gradeAssets/Time-MT5-1-G5/Box with track.png');
                this.load.image('TimingBlackBoxQ6', 'assets/gradeAssets/Time-MT5-1-G5/Timing Black box.png');
                this.load.image('TimingGreyBoxQ6', 'assets/gradeAssets/Time-MT5-1-G5/Timing grey box.png');
                this.load.image('Train1Q6', 'assets/gradeAssets/Time-MT5-1-G5/Train 1 Png.png');
                this.load.image('Train2Q6', 'assets/gradeAssets/Time-MT5-1-G5/Train 2 Png.png');
                this.load.image('Train3Q6', 'assets/gradeAssets/Time-MT5-1-G5/Train 3 Png.png');
                this.load.image('Train4Q6', 'assets/gradeAssets/Time-MT5-1-G5/Train 4 Png.png');
                this.load.image('WhiteBoxQ6', 'assets/gradeAssets/Time-MT5-1-G5/White box.png');
                // Question 6 - Sprites
                this.load.atlas('Sprite1Q6', 'assets/gradeAssets/Time-MT5-1-G5/Train 1 sprite.png', 'assets/gradeAssets/Time-MT5-1-G5/Train 1 sprite.json');
                this.load.atlas('Sprite2Q6', 'assets/gradeAssets/Time-MT5-1-G5/Train 2 sprite.png', 'assets/gradeAssets/Time-MT5-1-G5/Train 2 sprite.json');
                this.load.atlas('Sprite3Q6', 'assets/gradeAssets/Time-MT5-1-G5/Train 3 sprite.png', 'assets/gradeAssets/Time-MT5-1-G5/Train 3 sprite.json');
                this.load.atlas('Sprite4Q6', 'assets/gradeAssets/Time-MT5-1-G5/Train 4 sprite.png', 'assets/gradeAssets/Time-MT5-1-G5/Train 4 sprite.json');



        },

        create: function () {

                this.state.start('Time_MT5_1_G5level1');
        },
}
