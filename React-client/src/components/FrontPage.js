import '../styles/frontpage.css'
import AdvertisementBanner from './AdvertisementBanner'
import ProductCategory from './ProductCategory'

import kavelyImage from '../Kuvat/Sivustokuvat/KengätArtboard2.jpg'
import koripalloImage from '../Kuvat/Sivustokuvat/KengätArtboard3.jpg'
import skeittiImage from '../Kuvat/Sivustokuvat/KengätArtboard4.jpg'

const FrontPage = () => {
    return (
        <div className="container-fluid frontpage-container">
            <div className="row mx-0 d-none d-lg-block">
                <div className="cover p-0 col-lg-12">
                </div>
            </div>
            <div className="row mx-0">
                <AdvertisementBanner />
            </div>
            <div className="row mx-0 my-1 d-flex flex-lg-nowrap">
                <ProductCategory womenLink={"/naistenkavelykengat"} menLink={"/miestenkavelykengat"} image={kavelyImage} categoryName={"Kävelykengät"} />
                <ProductCategory  womenLink={"/naistenkoripallokengat"} menLink={"/miestenkoripallokengat"} image={koripalloImage} categoryName={"Koripallokengät"} />
                <ProductCategory womenLink={"/naistenskeittikengat"} menLink={"/miestenskeittikengat"} image={skeittiImage} categoryName={"Skeittikengät"} />
            </div>
        </div>
    );
}

export default FrontPage;