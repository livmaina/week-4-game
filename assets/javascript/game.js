$(document).ready(function() {

    var rubyVal, purpleVal, pinkVal, yellowVal;
    var wins= 0
    var losses= 0
    var randomComputerNumber;
    var userScore;


    function initializeVariables (){
        randomComputerNumber= 19 + Math.floor(Math.random() * 101);
        rubyVal= 1 + Math.floor(Math.random() * 12);
        purpleVal= 1 + Math.floor(Math.random() * 12);
        pinkVal= 1 + Math.floor(Math.random() * 12);
        yellowVal= 1 + Math.floor(Math.random() * 12);
        userScore=0;

        $("#randomNumber").html(randomComputerNumber);
        $("#wins").html("Wins: " + wins );
        $("#losses").html("Losses "+ losses);
        $("#playerScore").html(userScore);
    }

    function WinOrLoss() {
		// if player loses
		if (userTallyScore > randomComputerNumber) {
			losses++;
			console.log("user lost");
			initializeVariables();
		}

		// if player wins
		if (userTallyScore == randomComputerNumber) {
			wins++;
			console.log("user won");
			initializeVariables();
		}
    }
    
    initializeVariables();

    $(".crystal").on("click", function (){

        if (pressed == "ruby"){
            userScore += rubyVal;
        }
        else if (pressed=="purple"){
            userScore += purpleVal;
        }
        else if (pressed="pink"){
            userScore += pinkVal;
        }
        else if (pressed="yellow"){
            userScore += yellowVal;
        }

        WinOrLoss();
    });


});