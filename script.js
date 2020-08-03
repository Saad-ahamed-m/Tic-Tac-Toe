$(document).ready(function() {
    $(".heading").text("Tic-Tac-Toe");
    setTimeout(function() { $(".heading").css("text-decoration", "line-through") }, 700);
    $(".heading").fadeOut(3500, function() {
        $(this).text("Defeat Your Ex !")
    }).fadeIn();
    setTimeout(function() { $(".heading").css("text-decoration", "none") }, 3500);
    setTimeout(function() { $(".heading").css("text-decoration", "underline") }, 4500);
    setTimeout(Turn_Ex(), 5000);
    setTimeout(function() {
        $(".content").css("display", "contents");
    }, 5000);
    var win_val = 0;
    $(".button").click(function() {
        location.reload(true);
    });

    function win() {
        $(".heading").css("text-decoration", "none");
        $(".heading").text("You won and Your Ex lost . Be happy !");
        $(".button").css("visibility", "visible");
        win_val = 1;
    }

    function lose() {
        $(".heading").css("text-decoration", "none");
        $(".heading").text("You lost again with your EX !");
        $(".button").css("visibility", "visible");
        win_val = 1;
    }

    function tie() {
        $(".heading").css("text-decoration", "none");
        $(".heading").text("Your EX knows you well . Make your moves unpredictable !");
        $(".heading").css("font-size", "50px");
        $(".button").css("visibility", "visible");
        win_val = 1;
    }

    function validate(turn) {
        let var_1 = $(".grid-item-1").text();
        let var_2 = $(".grid-item-2").text();
        let var_3 = $(".grid-item-3").text();
        let var_4 = $(".grid-item-4").text();
        let var_5 = $(".grid-item-5").text();
        let var_6 = $(".grid-item-6").text();
        let var_7 = $(".grid-item-7").text();
        let var_8 = $(".grid-item-8").text();
        let var_9 = $(".grid-item-9").text();

        if (var_1 != "" && var_2 != "" && var_3 != "" && var_1 == var_2 && var_2 == var_3) {
            if (var_1 == "EX")
                lose();
            else if (var_1 == "O")
                win();
        } else if (var_4 != "" && var_5 != "" && var_6 != "" && var_4 == var_5 && var_5 == var_6) {
            if (var_4 == "EX")
                lose();
            else if (var_4 == "O")
                win();
        } else if (var_7 != "" && var_8 != "" && var_9 != "" && var_7 == var_8 && var_8 == var_9) {
            if (var_7 == "EX")
                lose();
            else if (var_7 == "O")
                win();
        } else if (var_1 != "" && var_4 != "" && var_7 != "" &&
            var_1 == var_4 && var_4 == var_7) {
            if (var_1 == "EX")
                lose();
            else if (var_1 == "O")
                win();
        } else if (var_2 != "" && var_5 != "" && var_8 != "" &&
            var_2 == var_5 && var_5 == var_8) {
            if (var_2 == "EX")
                lose();
            else if (var_2 == "O")
                win();
        } else if (var_3 != "" && var_6 != "" && var_9 != "" &&
            var_6 == var_3 && var_6 == var_9) {
            if (var_3 == "EX")
                lose();
            else if (var_3 == "O")
                win();
        } else if (var_1 != "" && var_5 != "" && var_9 != "" &&
            var_1 == var_5 && var_5 == var_9) {
            if (var_1 == "EX")
                lose();
            else if (var_1 == "O")
                win();
        } else if (var_3 != "" && var_5 != "" && var_7 != "" &&
            var_3 == var_5 && var_5 == var_7) {
            if (var_3 == "EX")
                lose();
            else if (var_3 == "O")
                win();
        } else if (var_1 != "" && var_2 != "" && var_3 != "" && var_4 != "" && var_5 != "" && var_6 != "" && var_7 != "" && var_8 != "" && var_9 != "")
            tie();
        if (turn == "O")
            return win_val;
    }

    function Turn_Ex() {
        let var_1 = $(".grid-item-1").text();
        let var_2 = $(".grid-item-2").text();
        let var_3 = $(".grid-item-3").text();
        let var_4 = $(".grid-item-4").text();
        let var_5 = $(".grid-item-5").text();
        let var_6 = $(".grid-item-6").text();
        let var_7 = $(".grid-item-7").text();
        let var_8 = $(".grid-item-8").text();
        let var_9 = $(".grid-item-9").text();
        if (((var_1 == "EX" && var_2 == "EX") || (var_2 == "EX" && var_3 == "EX") || (var_1 == "EX" && var_3 == "EX")) && var_1 != "O" && var_2 != "O" && var_3 != "O") {
            $(".grid-item-1").text("EX");
            $(".grid-item-2").text("EX");
            $(".grid-item-3").text("EX");
        } else if (((var_4 == "EX" && var_6 == "EX") || (var_4 == "EX" && var_5 == "EX") || (var_5 == "EX" && var_6 == "EX")) && var_4 != "O" && var_6 != "O" && var_5 != "O") {
            $(".grid-item-4").text("EX");
            $(".grid-item-5").text("EX");
            $(".grid-item-6").text("EX");
        } else if (((var_7 == "EX" && var_8 == "EX") || (var_7 == "EX" && var_9 == "EX") || (var_8 == "EX" && var_9 == "EX")) && var_7 != "O" && var_8 != "O" && var_9 != "O") {
            $(".grid-item-7").text("EX");
            $(".grid-item-8").text("EX");
            $(".grid-item-9").text("EX");
        } else if (((var_1 == "EX" && var_4 == "EX") || (var_1 == "EX" && var_7 == "EX") || (var_4 == "EX" && var_7 == "EX")) && var_1 != "O" && var_4 != "O" && var_7 != "O") {
            $(".grid-item-4").text("EX");
            $(".grid-item-1").text("EX");
            $(".grid-item-7").text("EX");
        } else if (((var_2 == "EX" && var_5 == "EX") || (var_5 == "EX" && var_8 == "EX") || (var_1 == "EX" && var_8 == "EX")) && var_2 != "O" && var_5 != "O" && var_8 != "O") {
            $(".grid-item-2").text("EX");
            $(".grid-item-5").text("EX");
            $(".grid-item-8").text("EX");
        } else if (((var_3 == "EX" && var_6 == "EX") || (var_3 == "EX" && var_9 == "EX") || (var_6 == "EX" && var_9 == "EX")) && var_3 != "O" && var_6 != "O" && var_9 != "O") {
            $(".grid-item-3").text("EX");
            $(".grid-item-9").text("EX");
            $(".grid-item-6").text("EX");
        } else if (((var_1 == "EX" && var_5 == "EX") || (var_1 == "EX" && var_9 == "EX") || (var_5 == "EX" && var_9 == "EX")) && var_1 != "O" && var_5 != "O" && var_9 != "O") {
            $(".grid-item-1").text("EX");
            $(".grid-item-5").text("EX");
            $(".grid-item-9").text("EX");
        } else if (((var_3 == "EX" && var_5 == "EX") || (var_3 == "EX" && var_7 == "EX") || (var_5 == "EX" && var_7 == "EX")) && var_3 != "O" && var_5 != "O" && var_7 != "O") {
            $(".grid-item-3").text("EX");
            $(".grid-item-5").text("EX");
            $(".grid-item-7").text("EX");
        } else {
            var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            var randomElement = values[Math.floor(Math.random() * values.length)];
            if ($('.grid-item-' + randomElement).text() == "O" || $('.grid-item-' + randomElement).text() == "EX")
                Turn_Ex();
            else
                $('.grid-item-' + randomElement).text("EX");
        }
        validate("Ex");
    }
    $(".grid-item-1").click(function() {
        let val = $(".grid-item-1").text();
        if (val == "" && win_val == 0) {
            $(".grid-item-1").text("O");
            if (validate("O") == 0)
                Turn_Ex();
        }
    });
    $(".grid-item-2").click(function() {
        let val = $(".grid-item-2").text();
        if (val == "" && win_val == 0) {
            $(".grid-item-2").text("O");
            if (validate("O") == 0)
                Turn_Ex();
        }
    });
    $(".grid-item-3").click(function() {
        let val = $(".grid-item-3").text();
        if (val == "" && win_val == 0) {
            $(".grid-item-3").text("O");
            if (validate("O") == 0)
                Turn_Ex();
        }
    });
    $(".grid-item-4").click(function() {
        let val = $(".grid-item-4").text();
        if (val == "" && win_val == 0) {
            $(".grid-item-4").text("O");
           if (validate("O") == 0)
                Turn_Ex();
        }
    });
    $(".grid-item-5").click(function() {
        let val = $(".grid-item-5").text();
        if (val == "" && win_val == 0) {
            $(".grid-item-5").text("O");
            if (validate("O") == 0)
                Turn_Ex();
        }
    });
    $(".grid-item-6").click(function() {
        let val = $(".grid-item-6").text();
        if (val == "" && win_val == 0) {
            $(".grid-item-6").text("O");
            if (validate("O") == 0)
                Turn_Ex();
        }
    });
    $(".grid-item-7").click(function() {
        let val = $(".grid-item-7").text();
        if (val == "" && win_val == 0) {
            $(".grid-item-7").text("O");
            if (validate("O") == 0)
                Turn_Ex();
        }
    });
    $(".grid-item-8").click(function() {
        let val = $(".grid-item-8").text();
        if (val == "" && win_val == 0) {
            $(".grid-item-8").text("O");
            if (validate("O") == 0)
                Turn_Ex();
        }
    });
    $(".grid-item-9").click(function() {
        let val = $(".grid-item-9").text();
        if (val == "" && win_val == 0) {
            $(".grid-item-9").text("O");
            if (validate("O") == 0)
                Turn_Ex();
        }
    });
});
