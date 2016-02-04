$(document).ready(function() {
  $(".thumbnail").click(function() {
    var thumb_filename = $(this).attr("src");
    var cover_filename = thumb_filename.replace("thumb", "");
    var book_filename = "book" + cover_filename.replace(".jpeg", "") + ".txt"

    $("#cover").attr("src", cover_filename);

    $.get('/getBookContents', { filename: book_filename }, function(response) {
      $("#book_contents").text(response);
    });
  });

  $("#like").click(function() {
    var cover_filename = $("#cover").attr("src");
    if(cover_filename !== undefined) {
      $.post('/like', { filename: cover_filename }, function(response) {

      });
    }
  });
});