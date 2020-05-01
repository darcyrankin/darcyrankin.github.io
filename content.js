$(document).ready(function() {

    // Check for hash value in URL
    var hash = window.location.hash.substr(1);
    var href = $('a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#content').load(toLoad)
        }
    });

    $('a').click(function(){

    var toLoad = $(this).attr('href')+'#content';
    $('#content').fadeOut('5000',loadContent);
    $('#load').remove();
    $('#wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('5000');
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    function loadContent() {
      $('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
      $('#content').show('normal',hideLoader());
    }
    function hideLoader() {
      $('#load').fadeOut('normal');
    }
    return false;

    });
});
