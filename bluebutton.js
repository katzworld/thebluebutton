// ==UserScript==
// @name         PageVFX oneButton()
// @namespace    http://tampermonkey.net/
// @version      3210
// @description  just that 1 blue button to keep tapping
// @author       KaTZWorlD on twitter or in the Discord katworld#1337
// @match        https://play.tmwstw.io/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// ==/UserScript==

(function(){
   'use strict';
jQuery(document).ready(function() {
    jQuery('*:contains("SIGN"):not(:has(*))').css('background-color', 'blue').click(function() {
        jQuery("#sign_but").fadeToggle(2500).css('background-color', 'black');
    });
});

    jQuery('#resource_sound').prop('muted', true) ///shhhhhhhh during cliams router usage now
const whoRU = '0x4034adD1a1A750AA19142218A177D509b7A5448F'; //pageVFX.eth
const apiUrl = 'https://api.tmwstw.io';
let whoArr = []
let xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200){
   whoArr = this.responseText.split('&');
jQuery('#plot_start_title').remove()  //clean up the scren
let rPlot = whoArr[Math.floor(Math.random() * whoArr.length)] //give me 1 rand plot from the list of plots you own already
let newHeader = '<h3 class="tit_3" id="plot_start_title" style="display: block;">whose house !! </h3> <button class="all_plots_buttons" id="all_plots_buttons">PAGEVFX!</button>'
jQuery('.player_plots_container').after(newHeader) //insert that
jQuery('.all_plots_buttons:contains("PAGEVFX!")').attr('name',rPlot).css('background-color', 'blue').click(function (){$(this).hide();jQuery('#plot_start_title').remove()})//.onclick hide this blue button
jQuery('#player_plots_container').remove()//cleaned up 1 box only
jQuery('#id_but').css('background-color', 'blue') //all BLUE !
 }
 };
xhttp.open("GET", apiUrl + '/plot_ids_per_address=' + whoRU, true); // api call to get the plots
xhttp.send(); //send IT !
})();

    // Your code here...?
