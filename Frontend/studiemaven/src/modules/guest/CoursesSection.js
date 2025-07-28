import React, { useState, useMemo, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Header from '../home/Header';
import Footer from '../home/Footer';
import Container from "react-bootstrap/Container";
import { motion, AnimatePresence } from "framer-motion"; // <--- Import Framer Motion
import "./CoursesSection.scss";

import courseImg1 from "../../assets/coursesPic1.jpg";
import courseImg2 from "../../assets/coursesPic2.jpg";
import courseImg3 from "../../assets/coursesPic3.jpg";
import courseImg4 from "../../assets/coursesPic4.jpg";
import courseImg5 from "../../assets/coursesPic5.jpg";
import courseImg6 from "../../assets/coursesPic6.jpg";
import courseImg7 from "../../assets/coursesPic7.jpg";
import courseImg8 from "../../assets/coursesPic8.jpg";

// Tabs to switch course types
const TABS = [
  { key: "ug", label: "UG Courses" },
  { key: "pg", label: "PG Courses" },
  { key: "phd", label: "PhD Courses" },
];

// Tabbed course data
const ALL_COURSES = {
  ug: [
    {
      label: "UG Courses",
      title: "Business Management & Commerce",
      rating: 4.8,
      students: "16.5k Students",
      desc: "Get insight into the world of Business and Commerce",
      image: courseImg1,
    },
    {
      label: "UG Courses",
      title: "Information Technology",
      rating: 4.9,
      students: "15.1k Students",
      desc: "Explore IT from leading institutions.",
      image: courseImg2,
    },
    {
      label: "UG Courses",
      title: "Agricultural & Environmental Studies",
      rating: 4.5,
      students: "13.2k Students",
      desc: "Learn about agriculture and the environment.",
      image: courseImg3,
    },
    {
      label: "UG Courses",
      title: "Artificial Intelligence",
      rating: 4.9,
      students: "14.5k Students",
      desc: "Study cutting-edge AI topics.",
      image: courseImg4,
    },
    {
      label: "UG Courses",
      title: "Sports and Event Management",
      rating: 4.4,
      students: "11.2k Students",
      desc: "Master sports and event management.",
      image: courseImg5,
    },
    {
      label: "UG Courses",
      title: "Criminology and Law",
      rating: 4.8,
      students: "10.9k Students",
      desc: "Dive into criminology and law.",
      image: courseImg6,
    },
    {
      label: "UG Courses",
      title: "Food & Hospitality",
      rating: 4.8,
      students: "12.7k Students",
      desc: "Excel in the food and hospitality industry.",
      image: courseImg7,
    },
    {
      label: "UG Courses",
      title: "Media and Psychology",
      rating: 4.8,
      students: "12.2k Students",
      desc: "Learn media and psychology essentials.",
      image: courseImg8,
    },
  ],
  pg: [
    {
      label: "PG Courses",
      title: "Business Analytics",
      rating: 4.7,
      students: "6.8k Students",
      desc: "Master analytics and business intelligence with top PG programs.",
      image: courseImg2,
    },
    {
      label: "PG Courses",
      title: "AI & Machine Learning",
      rating: 4.7,
      students: "7.3k Students",
      desc: "Advance your career in AI and ML.",
      image: courseImg4,
    },
    {
      label: "PG Courses",
      title: "Hospitality Management",
      rating: 4.6,
      students: "5.2k Students",
      desc: "Postgraduate in global hospitality management.",
      image: courseImg7,
    },
  ],
  phd: [
    {
      label: "PhD Courses",
      title: "Cognitive Science",
      rating: 4.9,
      students: "1.2k Students",
      desc: "Deep research opportunities in cognitive science and AI.",
      image: courseImg4,
    },
    {
      label: "PhD Courses",
      title: "Environmental Studies",
      rating: 4.8,
      students: "1.5k Students",
      desc: "PhD in advanced environmental studies.",
      image: courseImg3,
    },
  ]
};

const triggerScrollUpdate = () => {
  window.dispatchEvent(new Event('pingme-scroll-update'));
};

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState("ug");
  const [search, setSearch] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTimeout(triggerScrollUpdate, 100);
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setTimeout(triggerScrollUpdate, 350);
  }, [activeTab, search]);

  // Filter courses based on tab and search
  const filteredCourses = useMemo(() => {
    return ALL_COURSES[activeTab].filter(
      c => c.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeTab, search]);

  // Framer Motion animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: idx => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: idx * 0.12 + 0.1,
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1],
      }
    })
  };

  return (
    <>
      <Header />
      <div className="bg-vectorNine"></div>
      <div className="bg-vectorTen"></div>
      <div className="courses-page-root"> 
      <Container>
        <div ref={sectionRef}>
          <div className="courses-page-header">
            <div className="courses-tabs">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  className={`courses-tab${activeTab === tab.key ? " active" : ""}`}
                  onClick={() => setActiveTab(tab.key)}
                  type="button"
                >
                  {activeTab === tab.key ? (
                    <span className="tab-active-dot"></span>
                  ) : null}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            <div className="courses-searchbar">
              <IoIosSearch />
              <input
                type="text"
                placeholder="Search your Courses here"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="courses-list">
            <AnimatePresence>
              {filteredCourses.map((c, idx) => (
                <motion.div
                  className="course-card"
                  key={idx}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                >
                  <img className="course-card-img" src={c.image} alt={c.title} />
                  <span className="course-card-label">{c.label}</span>
                  <div className="course-card-title">{c.title}</div>
                  <div className="course-card-meta">
                    <span className="star">★</span>
                    {c.rating}
                    <span className="dot"></span>
                    {c.students}
                  </div>
                  <div className="course-card-desc">{c.desc}</div>
                  <div className="course-card-action">
                    <button className="btn-secondary-cta course-enroll">
                      Enroll Now
                      <span className="secondary-btn-arrow">
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredCourses.length === 0 && (
              <div className="no-courses">No courses found.</div>
            )}
          </div>
        </div>
      </Container>
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;