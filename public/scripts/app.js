/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

$(document).ready(function(){
  function createTweetElement(tweet) {
    let $article = $('<article>').addClass('tweet');
    let $header = $('<header>');
    let $img = $('<img>').attr('src', tweet.user.avatars.small);
    let $h1 = $('<h1>').text(tweet.user.name);
    let $h2 = $('<h2>').text(tweet.user.handle);
    let $h3 = $('<h3>').text(tweet.content.text);
    let $footer = $('<footer>').text(tweet.created_at);
    $header.append($img);
    $header.append($h1);
    $header.append($h2);
    $article.append($header);
    $article.append($h3);
    $article.append($footer);

    console.log($h1);
    console.log($article);

    return $article;
  }
  var $tweet = createTweetElement(tweetData);
});
    //$('#tweets-container').append($tweet);
