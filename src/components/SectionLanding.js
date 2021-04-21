import home1 from '../img/home1.png';
import styled from 'styled-components';

const SectionLanding = () => {
    return (
        <About>
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
            </div>
                <div className="image">
                    <img src={home1} alt="guy-camera"/>
                </div>
        </About>
    );
};

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;
`;

export default SectionLanding;
