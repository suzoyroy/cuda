$(document).ready(function(){

    // waypoint sticky menu

    $(".js--services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");


        }else{

            $("nav").removeClass("sticky");
        }
        
    });

    // mixitup (protfolio section)
    var mixer = mixitup('.container');

    // smooth scroll for ie/edge/safari
    $("a").on('click', function(event){

        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
            });
        }

    })

    // nav menu active click item with jquery
    $(document).on('click', '.navactive .activeitem', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

})



function opennav(){
    document.getElementById("myNav").style.width ="100%";
}

function closenav(){
    document.getElementById("myNav").style.width ="0%";
}