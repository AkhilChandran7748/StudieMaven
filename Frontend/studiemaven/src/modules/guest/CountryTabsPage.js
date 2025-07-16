import React, { useState, useRef, useEffect } from "react";
import Header from '../home/Header';
import Footer from '../home/Footer';
import { motion, AnimatePresence } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./CountryTabsPage.scss";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import germanyPic from "../../assets/germany-pic1.jpg";
import canadaPic from "../../assets/canada-pic1.jpg";
import ukPic from "../../assets/uk-pic1.jpg";
import australiaPic from "../../assets/australia-pic1.jpg";
import swedenPic from "../../assets/sweden-pic1.jpg";
import germanFlag from "../../assets/flag-GE.png";
import canadaFlag from "../../assets/flag-Canada.png";
import ukFlag from "../../assets/flag-UK.png";
import australiaFlag from "../../assets/flag-Australia.png";
import swedenFlag from "../../assets/flag-Sweden.png";

// --- Accordion Data for each country ---
const accordionDataByCountry = {
  DE: [
    {
      title: "Why study in Germany?",
      content: "Germany offers world-class education, low tuition fees, and excellent research opportunities."
    },
    {
      title: "Facts about Germany.",
      content: "Germany is Europe’s largest economy and has a rich cultural heritage."
    },
    {
      title: "German Higher Education system.",
      content: "German universities are divided into research universities and universities of applied sciences."
    },
    {
      title: "Admission requirements?",
      content: "Typically, you need recognized qualifications, proof of language proficiency, and other documents."
    }
  ],
  CA: [
    {
      title: "Why study in Canada?",
      content: "Canada offers high-quality education, multicultural environments, and excellent career opportunities."
    },
    {
      title: "Facts about Canada.",
      content: "Canada is the second largest country in the world and is known for its welcoming society."
    },
    {
      title: "Canadian Higher Education system.",
      content: "Canada has universities, colleges, and polytechnics offering a wide range of programs."
    },
    {
      title: "Admission requirements?",
      content: "Requirements include academic transcripts, language proficiency, and sometimes standardized test scores."
    }
  ],
  GB: [
    {
      title: "Why study in UK?",
      content: "The UK offers prestigious universities, rich history, and a diverse, multicultural student community."
    },
    {
      title: "Facts about UK.",
      content: "The UK consists of England, Scotland, Wales, and Northern Ireland, each with unique traditions."
    },
    {
      title: "UK Higher Education system.",
      content: "UK education is renowned for its research and teaching quality, with undergraduate and postgraduate options."
    },
    {
      title: "Admission requirements?",
      content: "Requirements include previous qualifications, English proficiency, and sometimes interviews."
    }
  ],
  AU: [
    {
      title: "Why study in Australia?",
      content: "Australia offers world-recognized degrees, a safe environment, and a vibrant student lifestyle."
    },
    {
      title: "Facts about Australia.",
      content: "Australia is the sixth largest country and is famous for its beautiful landscapes and friendly people."
    },
    {
      title: "Australian Higher Education system.",
      content: "Australian universities are research-focused and offer a wide range of undergraduate and postgraduate programs."
    },
    {
      title: "Admission requirements?",
      content: "Requirements include academic qualifications and English language proficiency."
    }
  ],
  SE: [
    {
      title: "Why study in Sweden?",
      content: "Sweden is known for innovation, sustainability, and offering many English-taught programs."
    },
    {
      title: "Facts about Sweden.",
      content: "Sweden is a leader in technology and environmental sustainability."
    },
    {
      title: "Swedish Higher Education system.",
      content: "Sweden's universities focus on creativity and independent thinking with flexible education models."
    },
    {
      title: "Admission requirements?",
      content: "Swedish universities require academic transcripts, proof of English proficiency, and application documents."
    }
  ]
};

// --- Accordion Component ---
const CustomAccordion = ({ items }) => {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div style={{
      marginTop: "32px",
      marginBottom: "32px",
    }}>
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "16px",
            borderRadius: "18px",
            boxShadow: "0 8px 12px rgba(0,0,0,0.15)",
            background: "#fff",
            overflow: "hidden"
          }}
        >
          <button
            style={{
              width: "100%",
              background: "none",
              border: "none",
              outline: "none",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "600",
              fontSize: "18px",
              cursor: "pointer"
            }}
            onClick={() => handleToggle(idx)}
          >
            {item.title}
            <span style={{
              fontSize: "22px",
              transition: "transform 0.2s",
              transform: openIdx === idx ? "rotate(90deg)" : "rotate(0deg)"
            }}><FaArrowRight /></span>
          </button>
          {openIdx === idx && (
            <div style={{
              padding: "20px",
              borderTop: "1px solid #f1f1f1",
              background: "#f9fcff",
              fontSize: "16px"
            }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const countries = [
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    image: germanyPic,
    tabsIcon: germanFlag,
    description: (
      <>
        <b>Germany</b> comes in the mind of every student when they think about pursuing their higher education in a foreign country. It has several reasons and benefits that attract international students to Germany for various courses in the reputed German universities. The quality of education and international standards are a great gift for students in Germany. When considering the quality of life, Germany keeps its head in the top list of countries.
        <br /><br />
        <b>Find your ideal university and best course for your dream career</b><br />
        It can be confusing which country to choose for your studies abroad. You will need to learn a lot about each of the possible countries and the educational systems before making a decision. That’s why PingmeStudyAbroad, the leading Europe study visa consultants, has set up a useful guide about the top study abroad destinations.
      </>
    ),
    button: {
      text: "Get Free Consultation",
      link: "#",
    }
  },
  {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    image: canadaPic,
    tabsIcon: canadaFlag,
    description: (
      <>
        <b>Canada</b> offers an affordable, quality education and a safe, welcoming environment. Students enjoy multicultural cities and outstanding natural beauty.
        <br /><br />
        <b>Discover your academic journey in Canada</b><br />
        Let us help you choose the right program and institution for your ambitions.
      </>
    ),
    button: {
      text: "Get Free Consultation",
      link: "#",
    }
  },
  {
    code: "GB",
    name: "UK",
    flag: "🇬🇧",
    image: ukPic,
    tabsIcon: ukFlag,
    description: (
      <>
        <b>United Kingdom</b> is home to world-class universities and a multicultural experience. Students benefit from high academic standards, diverse courses, and rich heritage.
        <br /><br />
        <b>Shape your future in the UK</b><br />
        Explore a variety of study options and vibrant student life. Find the best universities and guidance for your career in the UK.
      </>
    ),
    button: {
      text: "Get Free Consultation",
      link: "#",
    }
  },
  {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    image: australiaPic,
    tabsIcon: australiaFlag,
    description: (
      <>
        <b>Australia</b> is a top destination for international students, offering high-quality education, diverse courses, and a vibrant lifestyle.
        <br /><br />
        <b>Begin your studies in Australia</b><br />
        Explore top universities, programs, and get expert consultation for your study plans.
      </>
    ),
    button: {
      text: "Get Free Consultation",
      link: "#",
    }
  },
  {
    code: "SE",
    name: "Sweden",
    flag: "🇸🇪",
    image: swedenPic,
    tabsIcon: swedenFlag,
    description: (
      <>
        <b>Sweden</b> is known for its innovative education system and high standard of living. Study in English-taught programs and join a progressive society.
        <br /><br />
        <b>Begin your studies in Sweden</b><br />
        Explore scholarships and top universities with our expert help.
      </>
    ),
    button: {
      text: "Get Free Consultation",
      link: "#",
    }
  }
];

const tabVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 14, scale: 0.97, transition: { duration: 0.23, ease: [0.22, 1, 0.36, 1] } }
};

const CountryTabsPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const tabListRef = useRef(null);
  const tabRefs = useRef([]);

  const prevIdx = (activeIdx - 1 + countries.length) % countries.length;
  const nextIdx = (activeIdx + 1) % countries.length;

  useEffect(() => {
    const tabList = tabListRef.current;
    const activeTab = tabRefs.current[activeIdx];
    if (tabList && activeTab) {
      const tabListRect = tabList.getBoundingClientRect();
      const activeTabRect = activeTab.getBoundingClientRect();
      // Calculate offset needed to center active tab
      const scrollLeft = 
        activeTab.offsetLeft - tabList.offsetLeft
        - tabList.clientWidth / 2
        + activeTab.clientWidth / 2;
      tabList.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeIdx]);

  // Get accordion content for active country
  const activeCountryCode = countries[activeIdx].code;
  const accordionItems = accordionDataByCountry[activeCountryCode] || [];

  return (
    <>
    <Header />
    <div className="wrapperBg">
        <div className="bg-map"></div>
         <div className="bg-vectorThreee"></div>
          <div className="bg-vectorTwoo"></div>
         <div className="bg-vectorFourr"></div>
      <Container>
        <div className="country-tabs-page">
          <div className="country-tabs-bar">
            <button className="tab-arrow arrowLeft" onClick={() => setActiveIdx(prevIdx)}>
              <IoIosArrowBack />
            </button>
            <div
              className="country-tabs-list scrollable-tabs"
              ref={tabListRef}
              style={{
                overflowX: "auto",
                scrollBehavior: "smooth",
                whiteSpace: "nowrap",
              }}
            >
              {countries.map((c, idx) => (
                <button
                  key={c.code + idx}
                  className={`country-tab-btn${idx === activeIdx ? " active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={c.name}
                  ref={el => tabRefs.current[idx] = el}
                >
                  <img src={c.tabsIcon} alt={c.name + " flag"} className="country-tab-flag" />
                  {idx === activeIdx && <span className="country-tab-label">{c.name}</span>}
                </button>
              ))}
            </div>
            <button className="tab-arrow arrowRight" onClick={() => setActiveIdx(nextIdx)}>
              <IoIosArrowForward />
            </button>
          </div>
          <div className="country-tabs-content-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={countries[activeIdx].code}
                className="country-tab-content"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="country-main-card">
                  <Row>
                    <Col xs={12} md={10} className="mx-auto">
                      <div className="country-main-img-wrap">
                        <img src={countries[activeIdx].image} alt={countries[activeIdx].name} className="country-main-img" />
                        <div className="country-main-img-overlay">
                          <div className="country-main-img-title">
                            Study in <br /> <span>{countries[activeIdx].name.toUpperCase()}</span>
                          </div>
                          <a href={countries[activeIdx].button.link} className="country-main-btn btn-secondary-cta">
                            {countries[activeIdx].button.text}
                            <span className="secondary-btn-arrow">
                              <FaArrowRight />
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="country-main-desc">
                        {countries[activeIdx].description}
                      </div>
                      {/* Dynamically render accordion for each country */}
                      <CustomAccordion items={accordionItems} />
                    </Col>
                  </Row>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
     <Footer />
    </>
  );
};

export default CountryTabsPage;