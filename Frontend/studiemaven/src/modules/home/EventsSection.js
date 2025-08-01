import React, { useState } from "react";
import "./EventsSection.scss";
import eventPicsOne from '../../assets/event-pic1.jpg';
import eventPicsTwo from '../../assets/event-pic2.jpg';
import eventPicsThree from '../../assets/event-pic3.jpg';
import avatarPics1 from '../../assets/people-pic12.jpg';
import { FaArrowRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ModalPortal from "../guest/ModalPortal";
const events = [
  {
    id: 1,
    type: "Study Abroad Webinar",
    date: "June 30, 2025",
    title: "Discover Opportunities Worldwide",
    desc: "Join our webinar to discover study opportunities across the globe, meet experts, and get answers to your questions.",
    images: [eventPicsOne, eventPicsTwo, eventPicsThree],
    link: "#",
    showReadMore: true,
  },
  {
    id: 2,
    type: "Networking Meetup",
    date: "July 12, 2025",
    title: "Connect With Alumni",
    desc: "Meet accomplished alumni, network with peers, and learn from their experiences studying abroad.",
    images: [eventPicsTwo, eventPicsOne],
    link: "#",
    showReadMore: true,
    avatar: avatarPics1
  },
  {
    id: 3,
    type: "Open Day",
    date: "August 3, 2025",
    title: "Campus Exploration",
    desc: "Tour our campus, meet faculty, and explore facilities. A great way to know more about our programs!",
    images: [eventPicsThree],
    link: "#",
    showReadMore: true,
  },
  {
    id: 4,
    type: "Scholarship Info Session",
    date: "August 20, 2025",
    title: "Funding Your Studies",
    desc: "Discover scholarship options and funding opportunities for international students.",
    images: [eventPicsTwo, eventPicsThree],
    link: "#",
    showReadMore: true,
  },
];

// Popup/modal component
function EventPopup({ event, onClose }) {
  return (
   <ModalPortal>
    <AnimatePresence>
      {event && (
        <motion.div
          className="event-popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          onClick={onClose}
        >
          <motion.div
            className="event-popup-modal"
            initial={{ scale: 0.92, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 30, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={e => e.stopPropagation()}
          >
            <div className="event-popup-grid">
              {/* Left: Images/slider */}
              <div className="event-popup-images">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  style={{ width: "100%", height: "100%" }}
                >
                  {(event.images || [event.image]).map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={img} alt={`Event ${event.title}`} className="event-popup-img" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Thumbnails if more than 1 image */}
                {event.images && event.images.length > 1 && (
                  <div className="event-popup-thumbs">
                    {event.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt="Event thumb"
                        className="event-popup-thumb"
                        onClick={() => {
                          document.querySelector('.event-popup-images .swiper').swiper.slideTo(idx);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* Right: Details */}
              <div className="event-popup-details">
                <div className="event-popup-meta">
                  {event.type && <span className="event-popup-type">{event.type}</span>}
                  {event.date && <span className="event-popup-date">• {event.date}</span>}
                </div>
                <h3 className="event-popup-title">{event.title}</h3>
                <p className="event-popup-desc">{event.desc}</p>
               
              </div>
            </div>
            <button className="event-popup-close" onClick={onClose} aria-label="Close event details">&times;</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </ModalPortal>
  );
}

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="events-section">
      <div className="bg-vectorFive"></div>
      <Container>
        <div className="events-section-header">
          <div className="events-section-badge">Our EVENTS</div>
          <h2 className="events-section-title">
            Don’t miss our recent Events
          </h2>
        </div>
        <div className="events-section-list">
          {events.map((event) => (
            <div
              className="event-card custom-hover-effect"
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${event.title}`}
            >
              <div className="event-card-image-wrap">
                <img src={(event.images && event.images[0]) || event.image} alt={event.title} className="event-card-image" />
                {event.register && (
                  <div className="event-card-register-badge">
                    {event.registerText}
                  </div>
                )}
                {event.avatar && (
                  <img src={event.avatar} alt="" className="event-card-avatar" />
                )}
              </div>
              <div className="event-card-content">
                <div className="event-card-content-top">
                  {(event.type || event.date) && (
                    <div className="event-card-meta">
                      {event.type && <span className="event-card-type">{event.type}</span>}
                      {event.date && (
                        <span className="event-card-date">
                          • {event.date}
                        </span>
                      )}
                    </div>
                  )}
                  <h3 className="event-card-title">{event.title}</h3>
                </div>
               
                <div className="event-card-hidden">
                
                  {event.showReadMore && (
                    <a href={event.link} className="event-card-readmore" onClick={e => e.stopPropagation()}>
                      Read More <span> <FaArrowRight /></span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      {/* Popup/modal for event details */}
      <EventPopup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}