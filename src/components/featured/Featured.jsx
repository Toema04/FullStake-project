import "./featured.css"

const Featured = () => {
    return (
    <div className="featured">
            <div className="featuredItem">
                <img src="https://t-cf.bstatic.com/static/img/deals/index_banner_getaway2020/312c784f761fc4f1e315742e93b9fa10d96ea67d.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
        </div>
            <div className="featuredItem">
                <img src="https://t-cf.bstatic.com/xdata/images/city/max500/654659.webp?k=9c4ac59d35869485631346dc1ee16d28e82ec5f79654bf56b4b4eaeef3388299&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>532 properties</h2>
                </div>
        </div>
            <div className="featuredItem">
                <img src="https://t-cf.bstatic.com/xdata/images/city/max500/619932.webp?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>533 properties</h2>
                </div>
        </div>
    </div>
    )
}

export default Featured