    $(document).ready(function() {
        $(".heading").text("Tic-Tac-Toe");
        setTimeout(function() { $(".heading").css("text-decoration", "line-through") }, 800);
        $(".heading").fadeOut(3300, function() {
            $(this).text("Win Over Ex")
        }).fadeIn();
        setTimeout(function() { $(".heading").css("text-decoration", "none") }, 3000);
        setTimeout(function() { $(".heading").css("text-decoration", "underline") }, 4000);
        setTimeout(function() {
            $(".content").css("display", "contents");
        }, 5000);
    });

    $(document).ready(function() {
        $(".grid-item-1").click(function() {
            let val = $(".grid-item-1").val();
            if (val == "")
                $(".grid-item-1").text("O");
        });
    });
    $(document).ready(function() {
        $(".grid-item-2").click(function() {
            let val = $(".grid-item-2").val();
            if (val == "")
                $(".grid-item-2").text("O");
        });
    });
    $(document).ready(function() {
        $(".grid-item-3").click(function() {
            let val = $(".grid-item-3").val();
            if (val == "")
                $(".grid-item-3").text("O");
        });
    });
    $(document).ready(function() {
        $(".grid-item-4").click(function() {
            let val = $(".grid-item-4").val();
            if (val == "")
                $(".grid-item-4").text("O");
        });
    });
    $(document).ready(function() {
        $(".grid-item-5").click(function() {
            let val = $(".grid-item-5").val();
            if (val == "")
                $(".grid-item-5").text("O");
        });
    });
    $(document).ready(function() {
        $(".grid-item-6").click(function() {
            let val = $(".grid-item-6").val();
            if (val == "")
                $(".grid-item-6").text("O");
        });
    });
    $(document).ready(function() {
        $(".grid-item-7").click(function() {
            let val = $(".grid-item-7").val();
            if (val == "")
                $(".grid-item-7").text("O");
        });
    });
    $(document).ready(function() {
        $(".grid-item-8").click(function() {
            let val = $(".grid-item-8").val();
            if (val == "")
                $(".grid-item-8").text("O");
        });
    });
    $(document).ready(function() {
        $(".grid-item-9").click(function() {
            let val = $(".grid-item-9").val();
            if (val == "")
                $(".grid-item-9").text("O");
        });
    });