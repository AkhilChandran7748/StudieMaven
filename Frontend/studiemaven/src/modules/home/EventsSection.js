import React from "react";
import "./EventsSection.scss";
import eventPicsOne from '../../assets/event-pic1.jpg';
import eventPicsTwo from '../../assets/event-pic2.jpg';
import eventPicsThree from '../../assets/event-pic3.jpg';
import avatarPics1 from '../../assets/people-pic12.jpg';
import { FaArrowRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
const events = [
  {
    id: 1,
    type: "Study Abroad Webinar",
    date: "June 30, 2025",
    title: "Discover Opportunities Worldwide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: eventPicsOne,
    link: "#",
    showReadMore: true,
  },
  {
    id: 2,
    type: "",
    date: "",
    title: "Discover Opportunities Worldwide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: eventPicsTwo,
    link: "#",
    showReadMore: true,
    avatar: avatarPics1
  },
  {
    id: 3,
    type: "",
    date: "",
    title: "Discover Opportunities Worldwide",
    desc: "",
    image: eventPicsThree,
    link: "#",
    showReadMore: true,
  },
  {
    id: 4,
    type: "Study Abroad Webinar",
    date: "June 30, 2025",
    title: "Discover Opportunities Worldwide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: eventPicsTwo,
    link: "#",
    showReadMore: true,
  },
];

export default function EventsSection() {
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
          <div className="event-card custom-hover-effect" key={event.id}>
            <div className="event-card-image-wrap">
              <img src={event.image} alt={event.title} className="event-card-image" />
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
              {/* The rest of the content will be hidden initially and slide up on hover */}
              <div className="event-card-hidden">
                {event.desc && <p className="event-card-desc">{event.desc}</p>}
                {event.showReadMore && (
                  <a href={event.link} className="event-card-readmore">
                    Read More <span> <FaArrowRight /></span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
       </Container>
    </div>
  );
}