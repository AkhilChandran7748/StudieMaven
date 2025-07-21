import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FcNext , FcPrevious} from "react-icons/fc";
import "swiper/css";
import "swiper/css/navigation";
import "./YoutubeShowcaseSection.scss";

const youtubeVideos = [
  {
    videoId: "UzOfI4wI-8s",
    title: "Study in Ireland | Study Abroad Consultancy | Skymark Education"
  },
  {
    videoId: "GCcKdYYdvs8",
    title: "Skymark Education | Study abroad | Study in UK | FRANCE | IRELAND | GERMANY | CANADA |"
  },
  {
    videoId: "emePcXAufgE",
    title: "SKYMARK ABROAD EDU CONCLAVE 2024 | Study Abroad | Study in UK | FRANCE | IRELAND | GERMANY | USA |"
  },
  {
    videoId: "sJp5AiUN1R0",
    title: "Study in Ireland | Study Abroad Consultancy | Skymark Education"
  },
  {
    videoId: "QoX2-lQC_Uw",
    title: "Skymark Education | Study abroad | Study in UK | FRANCE | IRELAND | GERMANY | CANADA |"
  }
];

export default function YoutubeWhyChooseSkymark() {
  return (
    <section className="yt-skymark-section">
     <Container fluid>
       <Row>
        <Col>
        <div className="yt-skymark-header">
          <span className="yt-skymark-pill">YouTube</span>
          <span className="yt-skymark-title">Why Choose <b>Studiemaven?</b></span>
        </div>
        <Swiper
          spaceBetween={32}
          slidesPerView={4}
          breakpoints={{
            1200: { slidesPerView: 4 },
            800: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".yt-skymark-next",
            prevEl: ".yt-skymark-prev"
          }}
          autoplay={{
            delay: 2000, // Change to your custom timing in milliseconds
            disableOnInteraction: false
          }}
          className="yt-skymark-swiper"
        >
          {youtubeVideos.map((video) => (
            <SwiperSlide key={video.videoId}>
              <div className="yt-skymark-card">
                <div className="yt-skymark-iframe-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="yt-skymark-iframe"
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Custom Arrows */}
          <button className="yt-skymark-arrow yt-skymark-prev" aria-label="Previous">
            <FcPrevious />
          </button>
          <button className="yt-skymark-arrow yt-skymark-next" aria-label="Next">
            <FcNext />
          </button>
        </Swiper>
        </Col>
        </Row>
      </Container>
    </section>
  );
}