$(document).ready(function () {
  $("#tweet").on('keyup', function () {
    const tweetMax = 140;
    let typedInput = $('#tweet')[0].value;
    let charRemaining = tweetMax - typedInput.length;
    if (charRemaining > 0){
      $(this).parent().find(".counter").text(charRemaining);
    } else {
      $(this).parents().find(".counter").text(charRemaining)
      .css("color", "red");
    }
  });
});
