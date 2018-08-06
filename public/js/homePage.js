$(document).ready(function () {

    var easyBtnRandomizer = $(".easybtn");
    var mediumBtnRandomizer = $(".mediumbtn");
    var hardBtnRandomizer = $(".hardbtn");

    easyBtnRandomizer.on("click", function (event) {
        event.preventDefault();
        var difficulty = "easy";

        getAdventureList(difficulty);

    });

    mediumBtnRandomizer.on("click", function (event) {
        event.preventDefault();
        var difficulty = "medium";

        getAdventureList(difficulty);
    });

    hardBtnRandomizer.on("click", function (event) {
        event.preventDefault();
        var difficulty = "hard";

        getAdventureList(difficulty);
    });

    function getAdventureList(difficulty) {
        if (difficulty === "easy") {
            $.get("/api/adventures", function (data) {
                var listofIds = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].difficulty === "easy") {
                        listofIds.push(data[i].id);
                    }
                }
                console.log(listofIds);
            });
        } else if (difficulty === "medium") {
            $.get("/api/adventures", function (data) {
                var listofIds = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].difficulty === "medium") {
                        listofIds.push(data[i].id);
                    }
                }
                console.log(listofIds);
            });
        } else if (difficulty === "hard") {
            $.get("/api/adventures", function (data) {
                var listofIds = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].difficulty === "hard") {
                        listofIds.push(data[i].id);
                    }
                }
                console.log(listofIds);
            });
        }
    }

});
