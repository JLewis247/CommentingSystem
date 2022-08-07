import "./style.css";

function render(data) {
  var html =
    "<div class='commentBox'><div class='leftPanelImg'><img src 'https://placeholdit.imgix.net/~text?w=100&h=100' /></div><div class='rightPanel'><span>" +
    data.name +
    "</span><div class='date'>" +
    data.date +
    "</div><p>" +
    data.comment +
    "</p></div><div class='clear'></div></div>";

  $("#container").append(html);
}

$(document).ready(function () {
  var comment = [
    { name: "King Lew", date: "07 Aug,2022", comment: "I am King" },
  ];

  for (var i = 0; i < comment.length; i++) {
    render(comment[i]);
  }

  $("#addComment").click(function () {
    var addObj = {
      name: $("#name").val(),
      date: $("#date").val(),
      comment: $("#commentText").val(),
    };
    comment.push(addObj);
    render(addObj);
    $("#name").val("");
    $("#date").val("");
    $("#commentText").val("");
  });
});
