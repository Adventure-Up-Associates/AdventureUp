$(document).ready(function () {
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.email);
    });

    var easyBtnRandomizer = $(".easybtn");
    var mediumBtnRandomizer = $(".mediumbtn");
    var hardBtnRandomizer = $(".hardbtn");
    var adventureContent = $(".randomized-content");
    var newHtml;

    easyBtnRandomizer.on("click", function (event) {
        event.preventDefault();
        var difficulty = "easy";

        getAdventureContent(difficulty, function (newHtml) {
            console.log(newHtml);
            adventureContent.html(newHtml);
        });

    });
    mediumBtnRandomizer.on("click", function (event) {
        event.preventDefault();
        var difficulty = "medium";

        getAdventureContent(difficulty, function (newHtml) {
            console.log(newHtml);
            adventureContent.html(newHtml);
        });
    });

    hardBtnRandomizer.on("click", function (event) {
        event.preventDefault();
        var difficulty = "hard";

        getAdventureContent(difficulty, function (newHtml) {
            console.log(newHtml);
            adventureContent.html(newHtml);
        });
    });

    function getAdventureContent(difficulty, cb) {
        getAdventureId(difficulty, function (id) {
            $.get("/api/adventures/" + id, function (randomAdventure) {
                console.log(randomAdventure);
                adventureContent.empty();

                var aTag = $("<a>").attr("href", "/adventureDetails/" + randomAdventure.id).html("<h2>" + randomAdventure.title + "</h2>");
                // newHtml = $("<h2>");
                // newHtml.attr("data-adventureId", randomAdventure.id);
                // var temp = "<p> ID: " + randomAdventure.id + "</p>";
                // var temp = "<p>" + randomAdventure.title + "</p>";
                // newHtml.append(temp);
                // cb(newHtml);
                cb(aTag);
            });
        });
    }

    function getAdventureId(difficulty, cb) {
        getAdventureList(difficulty, function (array) {
            var randomIndex = Math.floor((Math.random() * array.length));
            var randomId = array[randomIndex];
            cb(randomId);
        });
    }

    function getAdventureList(difficulty, cb) {
        if (difficulty === "easy") {
            $.get("/api/adventures", function (data) {
                var listofIds = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].difficulty === "easy") {
                        listofIds.push(data[i].id);
                    }
                }
                console.log(listofIds);
                cb(listofIds);
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
                cb(listofIds);
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
                cb(listofIds);
            });
        }
    }

});