import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Header from '../home/Header';
import Footer from '../home/Footer';
import Container from "react-bootstrap/Container";
import "./CoursesSection.scss";

import courseImg1 from "../../assets/coursesPic1.jpg";
import courseImg2 from "../../assets/coursesPic2.jpg";
import courseImg3 from "../../assets/coursesPic3.jpg";
import courseImg4 from "../../assets/coursesPic4.jpg";
import courseImg5 from "../../assets/coursesPic5.jpg";
import courseImg6 from "../../assets/coursesPic6.jpg";
import courseImg7 from "../../assets/coursesPic7.jpg";
import courseImg8 from "../../assets/coursesPic8.jpg";

const TABS = [
  { key: "ug", label: "UG Courses" },
  { key: "pg", label: "PG Courses" },
  { key: "phd", label: "Phd Courses" }
];

const ALL_COURSES = {
  ug: [
    {
      title: "Business Management & Commerce",
      desc: "Get insight into the world of Business and Commerce from the top universities.",
      img: courseImg1
    },
    {
      title: "Information Technology",
      desc: "Get insight into the world of Business and Commerce from the top universities.",
      img: courseImg2
    },
    {
      title: "Agricultural & Environmental Studies",
      desc: "Get insight into the world of Business and Commerce from the top universities.",
      img: courseImg3
    },
    {
      title: "Artificial Intelligence",
      desc: "Get insight into the world of Business and Commerce from the top universities.",
      img: courseImg4
    },
    {
      title: "Sports and Event Management",
      desc: "Get insight into the world of Business and Commerce from the top universities.",
      img: courseImg5
    },
    {
      title: "Criminology and Law",
      desc: "Get insight into the world of Business and Commerce from the top universities.",
      img: courseImg6
    },
    {
      title: "Food & Hospitality",
      desc: "Get insight into the world of Business and Commerce from the top universities.",
      img: courseImg7
    },
    {
      title: "Media and psychology",
      desc: "Get insight into the world of Business and Commerce from the top universities.",
      img: courseImg8
    }
  ],
  pg: [
    // Add your PG courses here, use the same card structure
    {
      title: "PG - Business Analytics",
      desc: "Master analytics and business intelligence with top PG programs.",
      img: courseImg2
    }
    // ...more PG courses
  ],
  phd: [
    // Add your Phd courses here
    {
      title: "Phd - Cognitive Science",
      desc: "Deep research opportunities in cognitive science and AI.",
      img: courseImg4
    }
    // ...more Phd courses
  ]
};

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("ug");
  const [search, setSearch] = useState("");

  const courses = useMemo(() => {
    const filtered = ALL_COURSES[activeTab].filter(
      c => c.title.toLowerCase().includes(search.toLowerCase())
    );
    return filtered;
  }, [activeTab, search]);

  return (
        <>
    <Header />
    <div className="bg-vectorNine"></div>
         <div className="bg-vectorTen"></div>
    <Container>
    <div className="courses-page-root">
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
          {courses.map((course, idx) => (
            <motion.div
              key={course.title}
              className="course-card"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.44, delay: idx * 0.07, type: "spring", bounce: 0.21 }}
            >
              <div className="course-img">
                <img src={course.img} alt={course.title} />
              </div>
              <div className="course-info">
                <div className="course-title">{course.title}</div>
                <div className="course-desc">{course.desc}</div>
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
        {courses.length === 0 && (
          <div className="no-courses">No courses found.</div>
        )}
      </div>
    </div>
    </Container>
      <Footer />
    </>
  );
}