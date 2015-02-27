/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function showpics(){

    var pic= $("#box").val();
    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=49c116ba02e477c69e5903a4a18e0b17&tags=cat&tag_mode=OR&format=json',
      function(data){ $("#images").hide().html(data).fadeIn('fast');

    $.each(data.items, function(i,item) {
      $("<img/>").attr("src", item.media.m).appendTo("#images");
    });
  })
};
