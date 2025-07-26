import React from "react";
import "./NewsSection.scss";
import newsSectionImg1 from "../../assets/event-bg1.jpg";
import newsSectionImg2 from "../../assets/event-bg2.jpg";
import newsSectionImg3 from "../../assets/event-bg3.jpg";
import newsSectionImg4 from "../../assets/event-bg4.jpg";
import newsSectionImg5 from "../../assets/event-bg5.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Container } from 'react-bootstrap';

const newsGrid = [
  {
    image: newsSectionImg1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    isMain: true,
  },
  {
    image: newsSectionImg2,
  },
  {
    image: newsSectionImg3,
  },
  {
    image: newsSectionImg4,
  },
  {
    image: newsSectionImg5,
  },
  {
    image: newsSectionImg3,
  },
];

const recentNews = [
  {
    date: "20–04–2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum",
    link: "#",
  },
  {
    date: "20–04–2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum",
    link: "#",
  },
  {
    date: "20–04–2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum",
    link: "#",
  },
  {
    date: "20–04–2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <div className="news-section">
    <Container>
      <div className="news-section-badge">News</div>
      <h2 className="news-section-title">Latest news and resources</h2>
      <div className="news-section-content">
        <div className="news-section-grid">
          <div className="news-grid-main">
            <img src={newsGrid[0].image} alt="" />
            <div className="news-grid-main-title">{newsGrid[0].title}</div>
          </div>
          <div className="news-grid-side">
            <img src={newsGrid[1].image} alt="" />
          </div>
          <div className="news-grid-side">
            <img src={newsGrid[2].image} alt="" />
          </div>
          <div className="news-grid-side">
            <img src={newsGrid[3].image} alt="" />
          </div>
          <div className="news-grid-side">
            <img src={newsGrid[4].image} alt="" />
          </div>
         <div className="news-grid-side">
            <button className="btn-secondary-cta">
              Read More
                <span className="secondary-btn-arrow">
                    <FaArrowRight />
                </span>
              </button>
          </div>
        </div>
        <div className="news-section-sidebar">
          <div className="news-sidebar-title">Recent News</div>
          <div className="news-sidebar-list">
            {recentNews.map((item, idx) => (
              <a href={item.link} className="news-sidebar-item" key={idx}>
                <div className="news-sidebar-date">{item.date}</div>
                <div className="news-sidebar-desc">{item.desc}</div>
                <span className="news-sidebar-arrow">
                  <svg width="20" height="20" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
    </Container>
    </div>
  );
};
export default NewsSection;