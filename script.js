
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });









document.addEventListener("scroll",function () {

    let heading = document.querySelector("#header");

    heading.classList.toggle('scrolling',window.scrollY>0);
    
})


