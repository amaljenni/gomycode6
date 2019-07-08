var getText=document.getElementById("tex");
//var getText=$("#tex");
//console.log(getText);



function changestyle(){
    if (getText.style.fontWeight=="bold")
        { getText.style.fontWeight="normal";}
    else   
    {
        getText.style.fontWeight="bold";
    }
    
}
function changestyle2(){
    if (getText.style.fontStyle=="italic")
    { getText.style.fontStyle="normal";}
    else{
        getText.style.fontStyle="italic";
    }
    
}
function changestyle3(){
    if (getText.style.textDecoration=="underline")
    { getText.style.textDecoration="none";}
    else{
        getText.style.textDecoration="underline";
    }
    
}
function changestyle4(){

   var x= document.getElementById("sizef").value;
    
    getText.style.fontSize=x;
}

function changestyle5(){
    
    var x= document.getElementById("sizea").value;

    getText.style.fontFamily=x;

}
$("button").hide();

$(".cont").mouseenter(function(){
    $(this).animate({opacity: '0.5'});
    

});

$(".cont").mouseleave(function(){
    $(this).animate({opacity: '1'});
    


});
$(".bo1").mouseenter(function(){
    $('#1').show();
   

});
$(".bo2").mouseenter(function(){
    $('#2').show();
   

});
$(".bo3").mouseenter(function(){
    $('#3').show();
   

});
$(".bo4").mouseenter(function(){
    $('#4').show();
   

});
$(".bo5").mouseenter(function(){
    $('#5').show();
   

});
$(".bo6").mouseenter(function(){
    $('#6').show();
   

});
$(".bo7").mouseenter(function(){
    $('#7').show();
   

});
$(".bo8").mouseenter(function(){
    $('#8').show();
   

});
$(".bo9").mouseenter(function(){
    $('#9').show();
   

});
$(".bo1").mouseleave(function(){
    $('#1').hide();
   

});
$(".bo2").mouseleave(function(){
    $('#2').hide();
   

});
$(".bo3").mouseleave(function(){
    $('#3').hide();
   

});
$(".bo4").mouseleave(function(){
    $('#4').hide();
   

});
$(".bo5").mouseleave(function(){
    $('#5').hide();
   

});
$(".bo6").mouseleave(function(){
    $('#6').hide();
   

});
$(".bo7").mouseleave(function(){
    $('#7').hide();
   

});
$(".bo8").mouseleave(function(){
    $('#8').hide();
   

});
$(".bo9").mouseleave(function(){
    $('#9').hide();
   

});
$(".cont").click(function(){
    
    $("button").show();

});
$("#1").click(function(e){
    $('.mess').animate({opacity: '0.5'});
   

});
$(document).on('click','.1',function(e){
    $('.mymodal').css('display','block');
});
$(document).on('click','#close',function(e){
    $('.mymodal').css('display','none');
    });

 
    


