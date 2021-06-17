// ==UserScript==
// @name         MMA Tycoon script
// @namespace    http://www.mmatycoon.com/
// @version      0.1
// @description  Make it better!
// @author       Pitva
// @match        http://www.mmatycoon.com/*
// @grant        none
// @require https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

$('a:contains("Spoiler / News")').after('<br><a style="color:#ff0000; font-weight: 700;" href="/spoilerfight.php">Spoiler Fight</a>');

$('#fight').css('font-size','16px');

$('td').each(function() {
    tdWidth = $(this).attr("width");
    tdWidthRounded = parseFloat(tdWidth).toFixed(2);
    bgImage = $(this).css('background-image');
    console.log(bgImage);
    if($(this).css('background-image').toString().indexOf("bar") > -1)  {
        if($(this).css('background-image').toString().indexOf(".jpg") > -1)  {
        $(this).css("position","relative");
        $(this).append('<span style="position: absolute; left: 6px; font-weight: 600;"></span>');
        $(this).find('span').html(tdWidthRounded + '%');
        };
    };
});
