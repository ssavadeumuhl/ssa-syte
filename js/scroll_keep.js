$("img").click(function(){
       var scrollPos= $(document).scrollTop();
    localStorage.setItem('key',scrollPos);
});
$(document).ready(function(){
    var pos = localStorage.getItem('key');
    $('html,body').animate({ scrollTop: pos }, 'slow');
    localStorage.clear();
});
