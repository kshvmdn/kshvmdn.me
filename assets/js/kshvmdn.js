'use strict';

const projects = [
  {
    "name": "LatestVid",
    "description": "<span class='highlight light'>Open</span> or <span class='highlight light'>download</span> the latest video for any YouTube account. Downloaded over 350 times in the first week. Available via <a target='_blank' href='http://npmjs.org/package/latestvid'>npm</a>.",
    "url": "http://github.com/kshvmdn/latestvid"
  },
  {
    "name": "NBA Games",
    "description": "View <span class='highlight light'>NBA</span> scores in your command line. Available via <a target='_blank' href='http://npmjs.org/package/nba-games'>npm</a>. ",
    "url": "http://github.com/kshvmdn/nba-games"
  },
  {
    "name": "NextRide API",
    "description": "A real-time <span class='highlight light'>scraper</span> and <span class='highlight light'>API</span> for the Brampton Transit NextRide service.",
    "url": "http://github.com/kshvmdn/next-ride-api"
  },
  {
    "name": "NowPlaying",
    "description": "Control iTunes playback through the command line.",
    "url": "http://github.com/kshvmdn/nowplaying"
  },
  {
    "name": "SeenIt",
    "description": "<span class='highlight light'>Stream</span> video content from <a target='_blank' href='http://reddit.com/r/videos'>/r/videos</a>. Replacement for the now-deprecated <a href='http://www.reddit.tv/' target='_blank'>Reddit.tv</a>.",
    "url": "http://github.com/kshvmdn/seen-it"
  },
  {
    "name": "ShowMeAMovie",
    "description": "<span class='highlight light'>Search</span> and <span class='highlight light'>stream</span> movie torrents using their IMDb token. Received over 600 downloads in the first month. Available via <a target='_blank' href='http://npmjs.org/package/show-me-a-movie'>npm</a>. ",
    "url": "http://github.com/kshvmdn/show-me-a-movie"
  },
  {
    "name": "TIL",
    "description": "View random TILs from <a href='https://reddit.com/r/todayilearned' target='_blank'>/r/todayilearned</a>. Available via <a target='_blank' href='http://npmjs.org/package/todayilearned'>npm</a>.",
    "url": "http://github.com/kshvmdn/til"
  },
  {
    "name": "Tweetbot",
    "description": "Automatically reply to all mentions that contain a specific phrase on <span class='highlight light'>Twitter</span>.",
    "url": "http://github.com/kshvmdn/tweetbot"
  },
  {
    "name": "WikiArticles",
    "description": "An <span class='highlight light'>aggregator</span> for reading and saving random articles from Wikipedia.",
    "url": "https://github.com/kshvmdn/wiki-articles"
  }
];

$(function() {
  let html = new EJS({url: './assets/templates/projects.ejs'}).render(projects);
  $('section.projects')
    .append(html)
    .on('click', '.project .title', function() {
      window.open($(this).parent().attr('data-href'));
    });
});
