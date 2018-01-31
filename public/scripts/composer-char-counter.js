$(document).ready(function () {
  $("#tweet").on('keyup', function () {
    const tweetMax = 140;
    let typedInput = $('#tweet')[0].value;
    let charRemaining = tweetMax - typedInput.length;

    if (charRemaining > 0){
      $(this).siblings(".counter").html(charRemaining);
    } else {
      $(this).siblings(".counter").html(charRemaining)
      .css("color", "red");
    }
  });
});
