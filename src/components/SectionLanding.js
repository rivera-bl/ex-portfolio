import home1 from '../img/home1.png';
import {Container, Description, Image, Hide} from '../styles.js';

const SectionLanding = () => {
    return (
        <Container>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span></h2>
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any lorem ipsum</p>
                <button>Contact Us</button>
            </Description>
                <Image>
                    <img src={home1} alt="guy-camera"/>
                </Image>
        </Container>
    );
};

export default SectionLanding;
