import React, { useState, useEffect, useContext } from 'react';
import "./FaqPage.scss"; 
import Header from '../home/Header';
import Footer from '../home/Footer';
import { Container } from 'react-bootstrap';
// If you have LocomotiveScrollContext, import it:
import { LocomotiveScrollContext } from '../home/LocomotiveScrollProvider';

const faqData = {
  "Interview": [
    {
      question: "Are interviews required for all applicants?",
      answer: (
        <>
          <ul>
            <li>
              Interviews are typically not mandatory for all applicants. However, candidates currently pursuing a Bachelor’s degree at an Indian university who have not yet completed their studies may be requested to attend an interview.
            </li>
            <li>
              APS maintains the discretion to request interviews from any applicants as deemed necessary.
            </li>
          </ul>
          <p>
            Applicants who are required to attend an interview will receive notification regarding the interview’s location and time via email and/or phone, typically two weeks in advance.
          </p>
        </>
      ),
    },
    {
      question: "Is it possible to reschedule an interview?",
      answer: "Once an interview date has been confirmed and accepted by the candidate, it is not possible to reschedule. Candidates are expected to attend the interview on the assigned date and time.",
    },
    {
      question: "In which language is the interview conducted?",
      answer: "Candidates have the option to conduct the interview in either English or German. It is important for candidates to inform APS India of their preferred language choice during the online registration process for the verification. This ensures that the interview is conducted in the language they are most comfortable with.",
    },
    {
      question: "What is the purpose of the interview?",
      answer: "The primary objective of the interview is to assess whether the candidate possesses fundamental knowledge of the subjects they have studied at their high school or university in India. It is important to note that the interview will be conducted only once for each candidate.",
    },
    {
      question: "Is there a fee for the interview?",
      answer: "The interview is conducted without any additional charge. There is no extra fee associated with the interview process.",
    },
  ],
  "Language Certificates": [
    { question: "Is a language proficiency certificate required for the APS process?", answer: "For the APS verification process, candidates are not required to meet any specific language requirements. While candidates may submit language certificates voluntarily, APS will only verify their formal authenticity. However, during the subsequent visa application process, the visa section may require candidates to submit language proficiency certificates, depending on the requirements of the university to which they have been admitted. For detailed information, it’s advisable to consult the visa leaflet provided by the German missions in India." },
    { question: "Do German or English language certificates obtained in India need verification by APS?", answer: "If an applicant chooses to submit German or English language certificates as part of the APS verification process, APS will conduct a verification of the formal authenticity of these documents. This verification is specific to the formal aspects of the certificates provided by the applicant." },
  ],
  "Timeline & Status check": [
    { question: "How long does the entire verification process take?", 
    answer: "We are committed to process all applications promptly. However, the current processing time is not only influenced by a recent increase in application volume but also heavily depends on the responsiveness of local authorities and institutions to our inquiries. Due to these factors, we are unable to provide a specific estimate for processing times at the moment. We are actively working to expedite each application and greatly appreciate your patience and understanding in this process." },
    { question: "How will I be notified when my verification process is complete?", answer: "You can track the status of your application through the online student portal by logging into ‘My Account’ on the APS India website. Additionally, you will receive an email notification once your verification process has been successfully completed. This ensures that you are promptly informed about the completion of your application process." },
     { question: "How will the APS Certificate be delivered?", answer: "Effective from April 24, 2023, successful candidates will be issued their APS Certificate in a digital PDF format. This digitally signed certificate will be sent to the email address provided on the registration form. The APS certificate is mandatory for applications to all German universities." },
  ],
  "Why StudieMaven": [
    { question: "What is the importance of an APS certificate?", answer: "The APS certificate acts as a bridge between the Indian educational system and the German higher education and visa application process, ensuring that the academic qualifications of Indian students are properly assessed and recognized for studying in Germany." },
    { question: "Why is it beneficial to obtain an APS certification?", answer: "Students who are beneficiaries of German or EU-funded scholarships are exempt from the need for an APS certification, as their scholarship status already involves a thorough vetting process." },
  ]
};

const tabNames = Object.keys(faqData);

function Accordion({ items, onHeightChange }) {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // Call the callback after open/close to notify parent to update Locomotive Scroll
    if (onHeightChange) {
      setTimeout(onHeightChange, 350);
    }
  }, [openIndex, items, onHeightChange]);

  return (
    <div>
      {items.map((item, idx) => (
        <div className="accordionItem" key={idx}>
          <button
            className="accordionBtn"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="icon">
              {openIndex === idx ? (
                // minus
                <svg width="18" height="18" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="2" rx="1" fill="#143874"/></svg>
              ) : (
                // plus
                <svg width="18" height="18" viewBox="0 0 24 24"><rect x="11" y="5" width="2" height="14" rx="1" fill="#143874"/><rect x="5" y="11" width="14" height="2" rx="1" fill="#143874"/></svg>
              )}
            </span>
            <span className="question">{item.question}</span>
          </button>
          {openIndex === idx && (
            <div className="accordionPanel">
              {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const FaqPage = () => {
  const [activeTab, setActiveTab] = useState(tabNames[0]);
  const locoScrollContext = useContext(LocomotiveScrollContext);
  const locoScroll = locoScrollContext?.locoScroll;

  const triggerScrollUpdate = () => {
    if (locoScroll && typeof locoScroll.update === "function") {
      locoScroll.update();
    }
    window.dispatchEvent(new Event('pingme-scroll-update'));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTimeout(triggerScrollUpdate, 350); 
  };

  useEffect(() => {
    setTimeout(triggerScrollUpdate, 350);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-vectorThreee"></div>
      <div className="page">
        <Container>
          <div className="mainHeader">
            <h1>Questions? Look here.</h1>
            <div className="subHeader">
              Can’t find an answer? Call us at <b>+91 8921263070</b> or email <b>admissions@studiemaven.com</b>
            </div>
          </div>
          <div className="contentRow">
            <aside className="sidebar">
              <ul className="tabList">
                {tabNames.map(tab => (
                  <li key={tab}>
                    <button
                      className={`tabBtn${activeTab === tab ? " activeTab" : ""}`}
                      onClick={() => handleTabChange(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>
            <section className="faqSection">
              <Accordion items={faqData[activeTab]} onHeightChange={triggerScrollUpdate} />
            </section>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default FaqPage;