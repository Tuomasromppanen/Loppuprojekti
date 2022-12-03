import '../styles/brands.css'

const Brands = () => {
    return (
        <div id ="brand">

                <div className="col-12">
                    <img src={require('../Kuvat/Sivustokuvat/brand.jpg')} alt="" />
                </div>

            <div className="col-12">
                <p>30 päivän palautusoikeus</p>
                <p>Ilmainen toimitus ja palautus</p>
            </div>

            <div className="col-12">
                <h1>Brandisivu</h1>
            </div>

            <div className="container-fluid brandContainer">
                <div className="mx-5 row brandRow1 wrap">
                    <div className="col-lg-4 col-md-4 d-flex justify-content-center"><img className='logos' src={require('../Kuvat/Logot/Adidas_logo_white.png')}></img></div>
                    <div className="col-lg-4 col-md-4 d-flex justify-content-center"><img className='logos' src={require('../Kuvat/Logot/nike_PNG4.png')}></img></div>
                    <div className="col-lg-4 col-md-4 d-flex justify-content-center"><img className='logos' src={require('../Kuvat/Logot/Converse_logo.png')}></img></div>
                </div>

                <div className="mx-5 row brandRow2">
                    <div className="col-lg-4 col-md-4 d-flex justify-content-center"><img className='logos' src={require('../Kuvat/Logot/Vans_logo.png')}></img></div>
                    <div className="col-lg-4 col-md-4 d-flex justify-content-center"><img className='logos' src={require('../Kuvat/Logot/Reebok_logo.png')}></img></div>
                    <div className="col-lg-4 col-md-4 d-flex justify-content-center"><img className='logos' src={require('../Kuvat/Logot/Jordan_logo.png')}></img></div>
                </div>

                <div className="mx-5 row brandRow3">
                    <div className="col-lg-4 d-flex justify-content-center"><img className='logos' src={require('../Kuvat/Logot/Yeezy_Logo.png')}></img></div>
                </div>
            </div>
        </div>
    );
}

export default Brands;