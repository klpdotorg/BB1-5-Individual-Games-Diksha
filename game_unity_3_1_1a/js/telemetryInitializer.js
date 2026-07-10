var telInitializer = {

	assessmentStart:null,

	gameIdInit:function(questionID)
	{
		//alert(gameName);
		this.assesStartEvent=RI.telemetryService.assessmentStart({"qid":questionID.toString(),"subj":"Math","qlevel":"MEDIUM","data":{"maxscore":1}}) ;


	},


	tele_interactEvent:function(event_type, res_id)
	{
		//alert(event_type+","+res_id);
	    RI.telemetryService.interact({"type":event_type.toString(),"id":res_id.toString(),"extype":null,"eks":{stageId:"deviceready"}});
	},

	tele_saveAssessment:function(question_id, pass_type, resValue)
	{
		//alert(question_id+","+pass_type+","+resValue);
		if(pass_type=="yes")
			RI.telemetryService.assess(this.assesStartEvent,{"pass": true,"score": 1,"res": [resValue],"mmc": [],"qindex": question_id.toString(),"mc": [],"qtitle": "title","qdesc": ""});
		else 
			RI.telemetryService.assess(this.assesStartEvent,{"pass": false,"score": 0,"res": [resValue],"mmc": [],"qindex": question_id.toString(),"mc": [],"qtitle": "title","qdesc": ""});    
	},

	tele_end:function()
	{
		if(window.RI && window.RI.exit)
		{
			try
			{
				window.RI.exit();
				return;
			}
			catch(error) {}
		}

		if(window.RI && window.RI.gotoEndPage)
		{
			try
			{
				window.RI.gotoEndPage();
			}
			catch(error) {}
		}

		window.open("", "_self");
		window.close();
	},





};


