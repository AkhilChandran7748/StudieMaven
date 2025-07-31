import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { careers } from "./CareersData";
import "./CareerPage.scss";
import Header from '../home/Header';
import Footer from '../home/Footer';
import { Container } from 'react-bootstrap';
import { LocomotiveScrollContext } from '../home/LocomotiveScrollProvider';

const JobDetailPage = () => {
  const { id } = useParams();
  const job = careers.find((j) => String(j.id) === id);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: job?.title || "",
    resume: null,
  });

  // ---- SCROLL FIX BELOW ----
  const locoScrollContext = useContext(LocomotiveScrollContext);
  const locoScroll = locoScrollContext?.locoScroll;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (locoScroll && typeof locoScroll.update === "function") {
      setTimeout(() => locoScroll.update(), 350);
    }
    window.dispatchEvent(new Event('pingme-scroll-update'));
  }, []);
  // ---- END SCROLL FIX ----

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm((f) => ({
      ...f,
      [name]: files ? files[0] : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Application submitted!");
  }

  if (!job) return <div>Job not found</div>;

  return (
    <>
      <Header />
      <div className="bg-vectorThreee"></div>
      <Container>
        <div className="job-detail-container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <div className="job-detail-grid">
            <div className="job-detail-left">
              <h3>{job.title}</h3>
              <div className="career-tags">
                {job.tags.map((tag, i) => (
                  <span className="career-tag" key={i}>
                    {tag.icon} {tag.text}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: "18px" }}>{job.description}</p>
              {job.details && (
                <div style={{ margin: "20px 0" }}>
                  <strong>About this role:</strong>
                  <div>{job.details}</div>
                </div>
              )}
              {job.subTitleoOne && (
                <div style={{ margin: "20px 0 8px 0" }}>
                  <strong>{job.subTitleoOne}</strong>
                  <ul style={{ marginTop: "8px" }}>
                    {Array.isArray(job.responsibilities) &&
                      job.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                  </ul>
                </div>
              )}
              {job.subTitleTwo && (
                <div style={{ margin: "20px 0 8px 0" }}>
                  <strong>{job.subTitleTwo}</strong>
                  <ul style={{ marginTop: "8px" }}>
                    {Array.isArray(job.qualifications) &&
                      job.qualifications.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="job-detail-right">
              <form className="apply-form" onSubmit={handleSubmit}>
                <h4> <b>Apply</b> Now</h4>
                <div className="inputLabels">
                  <label>Name</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputLabels">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputLabels">
                  <label>Position Applying For</label>
                  <input
                    name="position"
                    required
                    value={form.position}
                    readOnly
                  />
                </div>
                <div className="inputLabels">
                  <label>Resume</label>
                  <input
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="submit-btn">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default JobDetailPage;