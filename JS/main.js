
// Menu Function

$(".menuBtn").click(function(){
    $(".menu").animate({ width:'250px'},50)
   $(".home-content").animate({marginLeft :'250px'},300)
})

$(".close").click(function(){
    $(".menu").animate({ width:'0px'},50)
   $(".home-content").animate({marginLeft :'0px'},300)
})

// Scroll Function

$(".menu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},1000);
    
})

// Slider Function

$('#slider .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

// Count Down Function

window.onload = function() {
    countDownToTime("25 october 2023 7:00:00");
  }
  function countDownToTime(countTo) {
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   const days = Math.floor( timeDifference / (24*60*60));
   const hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   const mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   const secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }

//   Text Reamining

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0) {
         $("#chars").text("your available character finished");}
        else{
        $("#chars").text(AmountLeft);
        }
});
