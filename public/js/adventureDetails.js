$(document).ready(function () {

    // getAdventureId(difficulty, function (id) {
    //     $.get("/api/adventures/" + , function (randomAdventure) {
    //         console.log(randomAdventure);
    //         adventureContent.empty();
    //         newHtml = $("<h2>");
    //         newHtml.attr("data-adventureId", randomAdventure.id);
    //         var temp = "<p> ID: " + randomAdventure.id + "</p>";
    //         temp += "<p> Name: " + randomAdventure.title + "</p>";
    //         newHtml.append(temp);
    //         a href="/easy/"+randomAdventure.id "
    //         cb(newHtml);
    //     });
    // });

});


// var API = {
//     saveExample: function (example) {
//         return $.ajax({
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             type: "POST",
//             url: "api/examples",
//             data: JSON.stringify(example)
//         });
//     },
//     getExamples: function () {
//         return $.ajax({
//             url: "api/examples",
//             type: "GET"
//         });
//     },
//     deleteExample: function (id) {
//         return $.ajax({
//             url: "api/examples/" + id,
//             type: "DELETE"
//         });
//     }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//     API.getExamples().then(function (data) {
//         var $examples = data.map(function (example) {
//             var $a = $("<a>")
//                 .text(example.text)
//                 .attr("href", "/example/" + example.id);

//             var $li = $("<li>")
//                 .attr({
//                     class: "list-group-item",
//                     "data-id": example.id
//                 })
//                 .append($a);

//             var $button = $("<button>")
//                 .addClass("btn btn-danger float-right delete")
//                 .text("ｘ");

//             $li.append($button);

//             return $li;
//         });

//         $exampleList.empty();
//         $exampleList.append($examples);
//     });
// };