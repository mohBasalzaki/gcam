$('.hero').owlCarousel({
    loop:true,
    rtl:true,
    nav:true,
    bots:true,
    // autoplay:true,
    // autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.services').owlCarousel({
    loop:false,
    rtl:true,
    margin:20,
    nav:false,
    bots:true,
    responsive:{
        0:{
            items:1.3
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.news').owlCarousel({
    loop:false,
    rtl:true,
    margin:20,
    nav:true,
    bots:true,
    responsive:{
        0:{
            items:1.3
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.clear').owlCarousel({
    loop:false,
    rtl:true,
    margin:20,
    nav:false,
    bots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})