import styled from 'styled-components';
import { Container } from '../styles.js';

const SectionFaq = () => {
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Adipisicing a consectetur accusamus voluptates?</p>
                    <p>
                        Ipsum exercitationem rem nisi et expedita Iure quasi 
                        hic in.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer">
                    <p>Adipisicing a consectetur accusamus voluptates?</p>
                    <p>
                        Ipsum exercitationem rem nisi et expedita Iure quasi 
                        hic in.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Payment Methods</h4>
                <div className="answer">
                    <p>Adipisicing a consectetur accusamus voluptates?</p>
                    <p>
                        Ipsum exercitationem rem nisi et expedita Iure quasi 
                        hic in.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer</h4>
                <div className="answer">
                    <p>Adipisicing a consectetur accusamus voluptates?</p>
                    <p>
                        Ipsum exercitationem rem nisi et expedita Iure quasi 
                        hic in.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(Container)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default SectionFaq;
