$(document).ready(function(){

  // Focus
  $('#input-search').focus(function(){
    $(this).animate({
      width: '63%'
    },500);
  });

  // Blur
  $('#input-search').blur(function(){
    if ($(this).val() == '') {
      $(this).animate({
        width: '30%'
      },500);
    }
  });

  $('#search-form').submit(function(ev){
    ev.preventDefault();
  });
});

function search() {

  //Empty the search results before searching again.
  $('#results').html('');

  //Get the query in search bar
  q = $('#input-search').val();

  $.get("https://www.googleapis.com/youtube/v3/search",{
    part: 'snippet,id',
    q: q,
    type: 'video',    
    key: 'AIzaSyBpIlH2SCdrlyn_eEWAkJcrdxDScNxUdwY'}, function(data){
      console.log(data);
      $.each(data.items, function(i, item){
        var output = getOutput(item);

        $('#results').append(output);
      });
    });
  }

  function getOutput(item){
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumbnail = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var publishedAt = item.snippet.publishedAt;

    var getoutput = '<div class="row results-row">' +
            '<div class="col-md-4">' +
            '<img src="'+thumbnail+'">' +
            '</div>' +
            '<div class="col-md-8">' +
            '<h3>'+title+'</h3>' +
            '<p class="channel-meta">By<i> '+channelTitle+'</i> on '+publishedAt+'</p>'+
            '<p>'+description+'</p>' +
            '</div>' + 
            '</div>'

    return getoutput;       
  }