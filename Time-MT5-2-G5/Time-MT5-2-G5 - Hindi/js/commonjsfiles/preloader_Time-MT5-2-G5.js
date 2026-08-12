Game["preloader_Time-MT5-2-G5"] = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game["preloader_Time-MT5-2-G5"].prototype = {
        preload: function () { 
                var atlasJson = window["Time-MT5-2-G5_JSON"] || {};
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

                this.load.atlasJSONArray('bulb', 'assets/commonAssets/bulb.png', 'assets/commonAssets/bulb.json');
                this.load.atlas('backbtn', 'assets/commonAssets/backbtn.png', null, atlasJson.backbtnJson);
                this.load.atlasJSONArray('newBackBtn', 'assets/commonAssets/newBackBtn.png', 'assets/commonAssets/newBackBtn.json');
                this.load.atlasJSONArray('CommonSpeakerBtn', 'assets/commonAssets/speaker.png', 'assets/commonAssets/speaker.json');
                this.load.atlasJSONArray('starAnim', 'assets/commonAssets/starAnim.png', 'assets/commonAssets/starAnim.json');
                this.load.atlasJSONArray('starAnim1','assets/commonAssets/starAnim1.png','assets/commonAssets/starAnim1.json');
                this.load.atlas('reply', 'assets/commonAssets/reply.png', null, atlasJson.replyJson);
                this.load.atlasJSONArray('CommonHomeBtn', 'assets/commonAssets/homeBtn.png', 'assets/commonAssets/homeBtn.json');
                this.load.atlasJSONArray('CommonNextBtn', 'assets/commonAssets/nextBtn.png', 'assets/commonAssets/nextBtn.json');
                
                
                this.load.image('Bg', 'assets/gradeAssets/Time-MT5-2-G5/Bg.png');
                this.load.image('C1', 'assets/gradeAssets/Time-MT5-2-G5/C1.png');
                this.load.image('C2', 'assets/gradeAssets/Time-MT5-2-G5/C2.png');
                this.load.image('C3', 'assets/gradeAssets/Time-MT5-2-G5/C3.png');
                this.load.image('C4', 'assets/gradeAssets/Time-MT5-2-G5/C4.png');
                this.load.image('C5', 'assets/gradeAssets/Time-MT5-2-G5/C5.png');
                this.load.image('C6', 'assets/gradeAssets/Time-MT5-2-G5/C6.png');
                this.load.image('C7', 'assets/gradeAssets/Time-MT5-2-G5/C7.png');
                this.load.image('C8', 'assets/gradeAssets/Time-MT5-2-G5/C8.png');
                this.load.image('C9', 'assets/gradeAssets/Time-MT5-2-G5/C9.png');
                this.load.image('C10', 'assets/gradeAssets/Time-MT5-2-G5/C10.png');
                this.load.image('C11', 'assets/gradeAssets/Time-MT5-2-G5/C11.png');
                this.load.image('C12', 'assets/gradeAssets/Time-MT5-2-G5/C12.png');
                this.load.image('C13', 'assets/gradeAssets/Time-MT5-2-G5/C13.png');
                this.load.image('C14', 'assets/gradeAssets/Time-MT5-2-G5/C14.png');
                this.load.image('C15', 'assets/gradeAssets/Time-MT5-2-G5/C15.png');     
                this.load.image('C16', 'assets/gradeAssets/Time-MT5-2-G5/C16.png');
                this.load.image('C17', 'assets/gradeAssets/Time-MT5-2-G5/C17.png');
                this.load.image('C18', 'assets/gradeAssets/Time-MT5-2-G5/C18.png');
                this.load.image('C19', 'assets/gradeAssets/Time-MT5-2-G5/C19.png');
                this.load.image('C20', 'assets/gradeAssets/Time-MT5-2-G5/C20.png');
                this.load.image('C21', 'assets/gradeAssets/Time-MT5-2-G5/C21.png');
                this.load.image('C22', 'assets/gradeAssets/Time-MT5-2-G5/C22.png');
                this.load.image('C23', 'assets/gradeAssets/Time-MT5-2-G5/C23.png');
                this.load.image('glow', 'assets/gradeAssets/Time-MT5-2-G5/glow.png');


                //Q3-Q4
                this.load.image('Background', 'assets/gradeAssets/Time-MT5-2-G5/Bg.png');
                this.load.image('AnalogClock', 'assets/gradeAssets/Time-MT5-2-G5/Analog json.png');
                this.load.atlasJSONArray('ClockPink', 'assets/gradeAssets/Time-MT5-2-G5/Clock_pink.png', 'assets/gradeAssets/Time-MT5-2-G5/Clock_pink.json');
                this.load.image('DigitalClock', 'assets/gradeAssets/Time-MT5-2-G5/Digital clock.png');
                this.load.image('AnswerClock', 'assets/gradeAssets/Time-MT5-2-G5/answer.png');
                this.load.atlasJSONArray('AnalogClock1', 'assets/gradeAssets/Time-MT5-2-G5/Analog clock 1.png', 'assets/gradeAssets/Time-MT5-2-G5/Analog clock 1.json');
                this.load.atlasJSONArray('DigitalClock1', 'assets/gradeAssets/Time-MT5-2-G5/Digital clock 1.png', 'assets/gradeAssets/Time-MT5-2-G5/Digital clock 1.json');
                this.load.atlasJSONArray('DigitalClock2', 'assets/gradeAssets/Time-MT5-2-G5/Digital clock 2.png', 'assets/gradeAssets/Time-MT5-2-G5/Digital clock 2.json');
                this.load.atlasJSONArray('DigitalClock3', 'assets/gradeAssets/Time-MT5-2-G5/Digital clock 3.png', 'assets/gradeAssets/Time-MT5-2-G5/Digital clock 3.json');
                this.load.atlasJSONArray('PinkHeadedAnalogClock', 'assets/gradeAssets/Time-MT5-2-G5/Pink headed analog clock.png', 'assets/gradeAssets/Time-MT5-2-G5/Pink headed analog clock.json');
                this.load.atlasJSONArray('RightAnswerAnim', 'assets/gradeAssets/Time-MT5-2-G5/Right Answer.png', 'assets/gradeAssets/Time-MT5-2-G5/Right Answer.json');
                this.load.atlasJSONArray('WrongAnswerAnim', 'assets/gradeAssets/Time-MT5-2-G5/Wrong Answer.png', 'assets/gradeAssets/Time-MT5-2-G5/Wrong Answer.json');
                this.load.atlasJSONArray('AnalogClockAnim', 'assets/gradeAssets/Time-MT5-2-G5/Analog json.png', 'assets/gradeAssets/Time-MT5-2-G5/Analog json.json');
                this.load.atlasJSONArray('DigitalClockAnim', 'assets/gradeAssets/Time-MT5-2-G5/Digital json.png', 'assets/gradeAssets/Time-MT5-2-G5/Digital json.json');
                this.load.image('RedCircle', 'assets/gradeAssets/Time-MT5-2-G5/Red Circle.png');
                this.load.image('Box', 'assets/gradeAssets/Time-MT5-2-G5/Box.png');
                this.load.spritesheet('AMBadge', 'assets/gradeAssets/Time-MT5-2-G5/am.png', 233, 126, 2);
                this.load.spritesheet('PMBadge', 'assets/gradeAssets/Time-MT5-2-G5/pm.png', 232, 126, 2);
                this.load.atlas('DigitalNum', 'assets/gradeAssets/Time-MT5-2-G5/Digital sprite.png', null, atlasJson.DigittalSprite);
                this.load.atlas('HourHand', 'assets/gradeAssets/Time-MT5-2-G5/Hour hand.png', null, atlasJson.HourHand);
                this.load.atlas('MinuteHand', 'assets/gradeAssets/Time-MT5-2-G5/Minute hand.png', null, atlasJson.MinuteHand);
                this.load.atlas('RightClick', 'assets/gradeAssets/Time-MT5-2-G5/RightClick.png', null, atlasJson.rightClick);

                // Q5 AND Q6
                // this.load.image('clock1', 'assets/gradeAssets/Time-MT5-2-G5/Clock 1.png');
                this.load.atlas('clock1', 'assets/gradeAssets/Time-MT5-2-G5/Pink headed analog clock.png',null,atlasJson.pinkHeadedClock);

                this.load.image('clock2', 'assets/gradeAssets/Time-MT5-2-G5/Clock 2.png');
                this.load.atlas('clock2sprite', 'assets/gradeAssets/Time-MT5-2-G5/Analog clock 2.png', null, atlasJson.analogClock);
                this.load.image('Location', 'assets/gradeAssets/Time-MT5-2-G5/Location.png');
                this.load.image('LightBlueBox', 'assets/gradeAssets/Time-MT5-2-G5/Light blue box.png');
                this.load.image('BlackBox', 'assets/gradeAssets/Time-MT5-2-G5/Black box.png');
                this.load.image('OrangeClockCircle', 'assets/gradeAssets/Time-MT5-2-G5/Orange clock circle.png');
                this.load.image('PinkClockCircle', 'assets/gradeAssets/Time-MT5-2-G5/Pink clock circle.png');
                this.load.atlasJSONArray('HourTime', 'assets/gradeAssets/Time-MT5-2-G5/Hour time.png', 'assets/gradeAssets/Time-MT5-2-G5/Hour time.json');
                this.load.atlasJSONArray('MinuteTime', 'assets/gradeAssets/Time-MT5-2-G5/Minute time.png', 'assets/gradeAssets/Time-MT5-2-G5/Minute time.json');

                this.load.image('AfghanistanFlag', 'assets/gradeAssets/Time-MT5-2-G5/Afghanistan flag.png');
                this.load.image('BangladeshFlag', 'assets/gradeAssets/Time-MT5-2-G5/Bangladesh flag.png');
                this.load.image('BhutanFlag', 'assets/gradeAssets/Time-MT5-2-G5/Bhutan flag.png');
                this.load.image('IndiaFlag', 'assets/gradeAssets/Time-MT5-2-G5/India flag.png');
                this.load.image('MaldivesFlag', 'assets/gradeAssets/Time-MT5-2-G5/Maldives flag.png');
                this.load.image('MyanmarFlag', 'assets/gradeAssets/Time-MT5-2-G5/Myanmar flag.png');
                this.load.image('NepalFlag', 'assets/gradeAssets/Time-MT5-2-G5/Nepal flag.png');
                this.load.image('PakistanFlag', 'assets/gradeAssets/Time-MT5-2-G5/Pakistan flag.png');
                this.load.image('SriLankaFlag', 'assets/gradeAssets/Time-MT5-2-G5/Sri Lanka flag.png');
                this.load.image('ThailandFlag', 'assets/gradeAssets/Time-MT5-2-G5/Thailand flag.png');

        // Grade atlases loaded with inline JSON from loadJson file
                this.load.atlasJSONArray('Map1', 'assets/gradeAssets/Time-MT5-2-G5/Map 1.png', 'assets/gradeAssets/Time-MT5-2-G5/Map 1.json');
                this.load.atlasJSONArray('Map2', 'assets/gradeAssets/Time-MT5-2-G5/Map 2.png', 'assets/gradeAssets/Time-MT5-2-G5/Map 2.json');
                this.load.atlasJSONArray('Map3', 'assets/gradeAssets/Time-MT5-2-G5/Map 3.png', 'assets/gradeAssets/Time-MT5-2-G5/Map 3.json');
                this.load.atlasJSONArray('Map4', 'assets/gradeAssets/Time-MT5-2-G5/Map 4.png', 'assets/gradeAssets/Time-MT5-2-G5/Map 4.json');
                this.load.atlasJSONArray('Map5', 'assets/gradeAssets/Time-MT5-2-G5/Map 5.png', 'assets/gradeAssets/Time-MT5-2-G5/Map 5.json');
                this.load.atlasJSONArray('Map6', 'assets/gradeAssets/Time-MT5-2-G5/Map 6.png', 'assets/gradeAssets/Time-MT5-2-G5/Map 6.json');
                this.load.atlasJSONArray('Map7', 'assets/gradeAssets/Time-MT5-2-G5/Map 7.png', 'assets/gradeAssets/Time-MT5-2-G5/Map 7.json');
                this.load.atlasJSONArray('Map8', 'assets/gradeAssets/Time-MT5-2-G5/Map 8.png', 'assets/gradeAssets/Time-MT5-2-G5/Map 8.json');
                this.load.atlasJSONArray('Map9', 'assets/gradeAssets/Time-MT5-2-G5/Map 9.png', 'assets/gradeAssets/Time-MT5-2-G5/Map 9.json');
                this.load.atlasJSONArray('AM', 'assets/gradeAssets/Time-MT5-2-G5/am.png', 'assets/gradeAssets/Time-MT5-2-G5/am.json');
                this.load.atlasJSONArray('PM', 'assets/gradeAssets/Time-MT5-2-G5/pm.png','assets/gradeAssets/Time-MT5-2-G5/pm.json' );
        
                this.load.audio('clocktick', 'sounds/clocktick.mp3');
                this.load.audio('clung', 'sounds/clung.mp3');
                this.load.audio('dragSound', 'sounds/Drag_Snap.mp3');
                this.load.audio('chime', 'sounds/chime.mp3');
                this.load.audio('framechangeSound', 'sounds/Frame_change_sound.mp3');
                this.load.audio('birdChirm', 'sounds/bird_chirm.mp3');



        },

        create: function () {

                this.state.start('Time-MT5-2-G5level1');
        },
}
