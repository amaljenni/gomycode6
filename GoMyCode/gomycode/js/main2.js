/*
 var image = document.getElementsByTagName('img')[0];
 var image_to_show = 0;
 var image_container = ['res/pic1.jpg','res/pic2.jpg','res/pic3.jpg'];


setInterval(
        function(){

        if(image_to_show >= image_container.length -1)      
        {
            image_to_show = 0;  
        }
        else
        {
            image_to_show++;
        }

            image.src = image_container[image_to_show];
            document.getElementById("max").style.height="720px";
            document.getElementById("max").style.width="100%";


        },3000
    );
*/
  $("button").hide();

  $(".cont").mouseenter(
      function(){
        $(this).animate({opacity: '0.5'});
    });

$(".cont").mouseleave(function()
{
    $(this).animate({opacity: '1'})
    ;
});
$(".bo1").mouseenter(function(){
        $('#1').show();
    });
$(".bo1").mouseleave(function(){
            $('#1').hide();
});
$(".bo2").mouseenter(function(){
    $('#2').show();
});
$(".bo2").mouseleave(function(){
        $('#2').hide();
});
$(".bo3").mouseenter(function(){
    $('#3').show();
});
$(".bo3").mouseleave(function(){
        $('#3').hide();
});
$(document).on('click','.1',function(e){
    $('.mymodal').css('display','block');
});
$(document).on('click','#close',function(e){
    $('.mymodal').css('display','none');
    });

  ////////////////////
//   $(window).scroll(function() {
  
//     // selectors
//     var $window = $(window),
//         $body = $('body'),
//         $panel = $('.panel');
    
//     // Change 33% earlier than scroll position so colour is there when you arrive.
//     var scroll = $window.scrollTop() + ($window.height() / 3);
   
//     $panel.each(function () {
//       var $this = $(this);
      
//       // if position is within range of this panel.
//       // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//       // Remember we set the scroll to 33% earlier in scroll var.
//       if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
//         // Remove all classes on body with color-
//         $body.removeClass(function (index, css) {
//           return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//         });
         
//         // Add class of currently active div
//         $body.addClass('color-' + $(this).data('color'));
//       }
//     });    
    
//   }).scroll();
