import React from "react";
import "./WhatsappPopupModal.scss";
import mobileMockups from "../../assets/mockupOne.png";
import { FaWhatsapp } from "react-icons/fa";


const WhatsappPopupModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="whatsapp-modal-overlay">
      <div className="whatsapp-modal-content">
        <button className="whatsapp-modal-close" onClick={onClose}>×</button>
        <div className="whatsapp-modal-body">
          <img
            src={mobileMockups}
            alt="WhatsApp Support"
            className="whatsapp-modal-img"
          />
          <div className="whatsapp-modal-text">
            <div className="whatsapp-modal-title">Find us on whatsapp</div>
            <div className="whatsapp-modal-support">
              <span className="highlight">24x7</span> Support
            </div>
            <button
              className="btn-secondary-cta">Chat Now
              <span className="secondary-btn-arrow">
                 <FaWhatsapp />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappPopupModal;