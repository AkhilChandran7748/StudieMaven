import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "swiper/css";
import "swiper/css/navigation";
import "./InstaOne.scss";
import playBtn from "../../assets/instagram.png";
import { FcNext , FcPrevious} from "react-icons/fc";
const reels = [
  {
    url: "https://www.instagram.com/reel/DC9ChVsvXrf/?igsh=eHB5eHE2OHp3a3R6",
    title: "",
    user: "",
    profilePic: ""
  },
   {
    url: "https://www.instagram.com/reel/DMShkUeTsH3/?igsh=MXFzZTZhOGx4djhlNA==",
    title: "",
    user: "",
    profilePic: "" 
  },
   {
    url: "https://www.instagram.com/reel/Cz0tVPaotBJ/?igsh=MWhoemNwaW5qajVkeQ==",
    title: "",
    user: "",
    profilePic: ""
  },
    {
    url: "https://www.instagram.com/reel/DHGSSxmzdNU/?igsh=MWdyOWdrNWNmOWs3cw==",
    title: "",
    user: "",
    profilePic: "" 
  },
    {
    url: "https://www.instagram.com/reel/DHYK3IDtzeY/?igsh=MnppbTk0bDlmenJ5",
    title: "",
    user: "",
    profilePic: "" 
  },
    {
    url: "https://www.instagram.com/reel/DErDHkkuL2k/?igsh=MWp1eHJ3ZGs3NTdpag==",
    title: "",
    user: "",
    profilePic: "" 
  },

];

function getEmbedHtml(url) {
  return `
    <blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="background:#FFF; border-radius:12px; width:100%"></blockquote>
  `;
}

export default function InstagramReelsShowcaseSection() {
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (window.instgrm) window.instgrm.Embeds.process();
    }, 300);
  });

  return (
    <section className="insta-reel-section">
      <Container>
        <div className="insta-reel-header">
          <span className="insta-reel-pill">Instagram</span>
          <span className="insta-reel-title">Catch up with us on <b>Instagram</b> Stories</span>
        </div>
        </Container>
        <Container fluid>
        <Swiper
          spaceBetween={32}
          slidesPerView={4}
          breakpoints={{
            1750: { slidesPerView: 8 },
            1500: { slidesPerView: 7 },
            1400: { slidesPerView:6 },
            1200: { slidesPerView:5 },
            700: { slidesPerView:3 },
            500: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".insta-reel-next",
            prevEl: ".insta-reel-prev"
          }}
          autoplay={{
            delay: 250000,
            disableOnInteraction: false
          }}
          className="insta-reel-swiper"
        >
          {reels.map((reel, idx) => (
            <SwiperSlide key={idx}>
              <div className="insta-reel-card">
                <div className="insta-reel-overlay">
                  <img src={playBtn} className="instaIcon" />
             
                </div>
                <div
                  className="insta-reel-embed"
                  dangerouslySetInnerHTML={{ __html: getEmbedHtml(reel.url) }}
                />
              </div>
            </SwiperSlide>
          ))}
          <button className="insta-reel-arrow insta-reel-prev" aria-label="Previous"><FcPrevious /></button>
          <button className="insta-reel-arrow insta-reel-next" aria-label="Next"><FcNext /></button>
        </Swiper>
      </Container>
    </section>
  );
}