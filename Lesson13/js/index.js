$('#list-product .products').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $( "#list-product .slick-prev").html("<");
  $( "#list-product .slick-next").html(">");
  // $("#list-produc .container" ).on( "load", function() {
  //     console.log("11");
  //     $( "#list-product .slick-prev").html("<");
  //     $( "#list-product .slick-next").html(">");
  // } );