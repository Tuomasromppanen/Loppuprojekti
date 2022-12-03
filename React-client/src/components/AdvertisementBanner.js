import '../styles/advertisementBanner.css'
import advertisementImage from '../Kuvat/Sivustokuvat/MallikuvaArtboard3.jpg'

const AdvertisementBanner = () => {
    return (
        <>
            <div id="adTexts" className="col-lg-6 m-0 p-0 d-flex justify-content-center align-items-center d-none d-lg-flex">
                <div>
                    <h1>Collect jäsen nyt</h1>
                    <h2>Kaikki tarjoukengät</h2>
                    <h3>-10%</h3>
                    <button>Lue lisää</button>
                </div>
            </div>
            <div className="col-lg-6 m-0 p-0 d-none d-lg-block">
                <img id="adImage" src={advertisementImage} alt=""></img>
            </div>
        </>
      );
}
 
export default AdvertisementBanner;