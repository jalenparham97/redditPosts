"use strict";

$(document).ready(() => {
  

  $("body").on("click", ".search__button", () => {
    $(".post_list").empty();
    for (let i = 1; i <= 12; i++) {
      $.get(`https://www.reddit.com/r/${$("input").val()}/.json`).then((data) => {
        console.log(data.data.children[i]);
        $(".post_list").append(`
          <li class="post">
            <p>${data.data.children[i].data.title}</p>
            <a href="http://www.reddit.com${data.data.children[i].data.permalink}"><img src="${data.data.children[i].data.thumbnail}"></a>
          </li>
        `);  
      });
    }
    $("input").val("");
  });
});
//  <p>${data.data.children[i].data.author}</p>