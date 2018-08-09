// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
var submitBtn = $("#submit");

// var $exampleList = $("#example-list");


function submitAdventure(title, description, location, difficulty) {
    $.post("/api/addAdventures", {
        title: title,
        description: description,
        location: location,
        difficulty: difficulty
    }).then(function (data) {
        window.location.replace(data);
    });

}

// Add event listeners to the submit
submitBtn.on("click", function (event) {
    event.preventDefault();
    var titleText = $("#title-text");
    var descriptionText = $("#description-text");
    var locationText = $("#location-text");
    var radios = document.getElementsByName("customRadioInline");
    var radioChoice;
    console.log(radios);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioChoice = radios[i].dataset.difficulty;
        }
    }
    var adventureObj = {
        title: titleText.val().trim(),
        description: descriptionText.val().trim(),
        location: locationText.val().trim(),
        difficulty: radioChoice
    };

    if (!adventureObj.title || !adventureObj.description || !adventureObj.location || !adventureObj.difficulty) {
        return;
    }
    submitAdventure(adventureObj.title, adventureObj.description, adventureObj.location, adventureObj.difficulty);
});
