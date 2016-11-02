var nFirstTimeLoad = 0;
var nPlayerIndex = 0;

$(document).ready(function()
{
	checkForFirstTime ();
	
	$("td[id^='td_']").hover (function ()
	{
		var oId = this.id;
		var oText = $("#" + oId).text ();
		
		var oTdClass = (nPlayerIndex == 0)? "player1 player1Txt" : "player2 player2Txt";
		
		if (oText == "")
			$("#" + oId).removeClass ("player1 player2").addClass (oTdClass);
		else
			$("#" + oId).removeClass ("player1 player2");
	});
	
	$("td[id^='td_']").click (function ()
	{
		var oId = this.id;
		var oTdText = (nPlayerIndex == 0)? "X" : "O";
		var oText = $("#" + oId).text ();
		
		if (oText == "")
		{
			$("#" + oId).text (oTdText);
			setGameStats ();
			
			getGameStats ();
		}
	});
});

function checkForFirstTime ()
{
	if (nFirstTimeLoad == 0)
	{
		$("#divInfo").html ("Start the Game - <span class='player1Txt'>Player 1</span>");
		nFirstTimeLoad = 1;
	}
	else
		location.reload();
}

function setGameStats ()
{
	var oPlayerName = (nPlayerIndex == 0)? "Player 2" : "Player 1";
	var oPlayerClass = (nPlayerIndex == 0)? "player2Txt" : "player1Txt";
	$("#divInfo").html ("Continue the Game - <span class='" + oPlayerClass + "'>" + oPlayerName + "</span>");
	
	nFirstTimeLoad = (nFirstTimeLoad == 0)? 1 : 0;
	nPlayerIndex = (nPlayerIndex == 0)? 1 : 0;
}

function getGameStats ()
{
	
}
