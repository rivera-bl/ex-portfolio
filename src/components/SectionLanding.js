import home1 from '../img/home1.png'

const SectionLanding = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span></h2>
                    </div>
                    <div className="hide">
                        <h2>come true</h2>
                    </div>
                </div>
                <p>Contact us for any lorem ipsum</p>
                <button>Contact Us</button>
                <div className="image">
                    <img src={home1} alt="guy-camera"/>
                </div>
            </div>
        </div>
    );
}

export default SectionLanding;
