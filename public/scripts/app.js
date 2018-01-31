
const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  $(document).ready(function(){
    function createTweetElement(tweet) {
      let $article = $('<article>').addClass('tweet-box');
      let $header = $('<header>').addClass('clear-fix');
      let $img = $('<img>').attr('src', tweet.user.avatars.small).addClass('logo');
      let $h1 = $('<h1>').text(tweet.user.name);
      let $h2 = $('<h2>').text(tweet.user.handle);
      let $h3 = $('<h3>').text(tweet.content.text);
      let $footer = $('<footer>').addClass('clear-fix')
      let $h4 = $('<h4>').text(tweet.created_at);
      let $div = $('<div>').addClass('tweet-icons');
      let $flag = $('<i>').addClass('fa fa-flag').attr('aria-hidden', true);
      let $share = $('<i>').addClass('fa fa-retweet').attr('aria-hidden', true);
      let $like = $('<i>').addClass('fa fa-heart').attr('aria-hidden', true);



      $header.append($img);
      $header.append($h1);
      $header.append($h2);
      $article.append($header);
      $article.append($h3);
      $div.append($flag);
      $div.append($share);
      $div.append($like);
      $footer.append($div);
      $footer.append($h4);
      $article.append($footer);

      console.log($article);

      return $article;
    }
    function renderTweets (tweets) {

      const articles_elm = $('.restOfTheTweets')
      tweets.forEach((tweet) => {
        articles_elm.append(createTweetElement(tweet));

      });
    }
      renderTweets(data)
      $("form").submit(function(event){
        const articles_elm = $('.restOfTheTweets')
        event.preventDefault();
        console.log( $( this ).serialize());
      });
      function loadTweets() {
        articles_elm.append(createTweetElement(tweet));
      }

    });
