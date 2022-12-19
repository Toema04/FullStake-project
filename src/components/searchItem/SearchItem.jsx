import "./searchItem.css"

const SearchItem = () => {
  return (
      <div className='searchItem'>
          <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_farmhouses/9aeedf4b943c722367e5e901681463bf543c5afd.jpg"
              alt="" className="siImg" />
          <div className="siDesc">
              <h1 className="siTitle">Tower Street Apartments</h1>
              <span className="siDistance">500m from center</span>
              <span className="siTaxiOp">Free Airport taxi</span>
              <span className="siSubTitle">
                  Studio Apartment with Air conditioning
              </span>
              <span className="SiFeatures">
                  Entire Studio * 1 bathroom  * 12m 1 full bed
              </span>
              <span className="SiCancelOp">Free Cancellation</span>
              <span className="SiCancelOpSubTitle">
                  you can cancel later, so lock in this greate price today!
              </span>
          </div>
          <div className="siDetails">
              <div className="siRating">
                  <span>Excellent</span>
                  <button>8.9</button>
                  </div>
                  <div className="siDetailsTexts">
                      <span className="siPrice">$123</span>
                      <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheackButton">See availability</button>
                  </div>
          </div>
    </div>
  )
}

export default SearchItem