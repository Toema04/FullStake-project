import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"

const Hotel = () => {

  const [slideNumber,SetSlideNumber] = useState(0)
  const [open,SetOpen] = useState(false)

  const photos = [
    {
      src: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_country_house/6ffa05069b50124c993f00c998f1dfc66999c93f.jpg"
    },
    {
      src: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_tented_camp/adf0677a5fd80032dc577fad07ad528312dfcadf.jpg"
    },
    {
      src: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_boats/5b974434f444153092a0249af70b3678c2e22e7c.jpg"
    },
    {
      src: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_motels/9673cd1b55cbc1e1cdaeae09d87d16aa9d84d5f7.jpg"
    },
    {
      src: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_ryokans/e4f002b9907a13a55b4e10b85fdd5d8ea436eb2d.jpg"
    },
    {
      src: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
    },
  ];

  const handelOpen = (i) => {
    SetSlideNumber(i)
    SetOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    slideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>SetOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">
            Reserve or book now!
          </button>
          <h1 className="hotelTitle">Grand hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton st 125 new York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500 frm center
          </span>
          <span className="hotelPriceHightlight">
            Book a stay over $144 at this property and get a free Airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handelOpen(i)} src={photo.src} alt="" className="hotelImg" />
            </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, officia beatae. Pariatur magni odit ipsa praesentium minima consequatur perferendis
                doloribus? Eos soluta nemo molestiae exercitationem architecto praesentium fugit blanditiis consectetur
                a labore officia, illo beatae esse adipisci ex, doloribus sint perspiciatis necessitatibus quidem nisi,
                corrupti similique dolorum. Doloremque ipsam molestiae praesentium exercitationem,
                nisi cupiditate distinctio sequi, dignissimos quia, necessitatibus tenetur!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Prefect for a 9-night stay!</h1>
              <span>located in the real heart of krakow, this property has an
                excellent location score in 9.8!
              </span>
              <h1>
                <b>$954</b> (9 nights)
              </h1>
              <button>Reserve or book now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel