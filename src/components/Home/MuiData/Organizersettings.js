// MuiData/dataSlider.js


export const Organizersettings = {
    
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow:8,
    slidesToScroll: 1,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  