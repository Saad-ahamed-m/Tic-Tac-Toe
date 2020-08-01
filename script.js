    $(document).ready(function() {
        $(".heading").text("Tic-Tac-Toe");
        setTimeout(function() { $(".heading").css("text-decoration", "line-through") }, 700);
        $(".heading").fadeOut(3500, function() {
            $(this).text("Win Your Ex !")
        }).fadeIn();
        setTimeout(function() { $(".heading").css("text-decoration", "none") }, 3500);
        setTimeout(function() { $(".heading").css("text-decoration", "underline") }, 4500);
        setTimeout(Turn_Ex(), 5000);
        setTimeout(function() {
            $(".content").css("display", "contents");
        }, 5000);
        var win_val = 0;

        function win() {
            $(".heading").css("text-decoration", "none");
            $(".heading").text("You won and Your Ex lost . Be happy !");
            win_val = 1;
        }

        function lose() {
            $(".heading").css("text-decoration", "none");
            $(".heading").text("You lost again with your EX !");
            win_val = 1;
        }

        function tie() {
            $(".heading").css("text-decoration", "none");
            $(".heading").text("Your EX knows you well . Make your moves unpredictable !");
            win_val = 1;
        }

        function validate() {
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
            }
            if (var_1 != "" && var_2 != "" && var_3 != "" && var_4 != "" && var_5 != "" && var_6 != "" && var_7 != "" && var_8 != "" && var_9 != "")
                tie();
        }

        function Turn_Ex() {
            var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            var randomElement = values[Math.floor(Math.random() * values.length)];
            console.log(randomElement);
            if ($('.grid-item-' + randomElement).text() == "O" || $('.grid-item-' + randomElement).text() == "EX")
                Turn_Ex();
            else
                $('.grid-item-' + randomElement).text("EX");
            validate();
        }
        $(".grid-item-1").click(function() {
            let val = $(".grid-item-1").text();
            if (val == "" && win_val == 0) {
                $(".grid-item-1").text("O");
                validate();
                Turn_Ex();
            }
        });
        $(".grid-item-2").click(function() {
            let val = $(".grid-item-2").text();
            if (val == "" && win_val == 0) {
                $(".grid-item-2").text("O");
                validate();
                Turn_Ex();
            }
        });
        $(".grid-item-3").click(function() {
            let val = $(".grid-item-3").text();
            if (val == "" && win_val == 0) {
                $(".grid-item-3").text("O");
                validate();
                Turn_Ex();
            }
        });
        $(".grid-item-4").click(function() {
            let val = $(".grid-item-4").text();
            if (val == "" && win_val == 0) {
                $(".grid-item-4").text("O");
                validate();
                Turn_Ex();
            }
        });
        $(".grid-item-5").click(function() {
            let val = $(".grid-item-5").text();
            if (val == "" && win_val == 0) {
                $(".grid-item-5").text("O");
                validate();
                Turn_Ex();
            }
        });
        $(".grid-item-6").click(function() {
            let val = $(".grid-item-6").text();
            if (val == "" && win_val == 0) {
                $(".grid-item-6").text("O");
                validate();
                Turn_Ex();
            }
        });
        $(".grid-item-7").click(function() {
            let val = $(".grid-item-7").text();
            if (val == "" && win_val == 0) {
                $(".grid-item-7").text("O");
                validate();
                Turn_Ex();
            }
        });
        $(".grid-item-8").click(function() {
            let val = $(".grid-item-8").text();
            if (val == "" && win_val == 0) {
                $(".grid-item-8").text("O");
                validate();
                Turn_Ex();
            }
        });
        $(".grid-item-9").click(function() {
            let val = $(".grid-item-9").text();
            if (val == "" && win_val == 0) {
                $(".grid-item-9").text("O");
                validate();
                Turn_Ex();
            }
        });
    });