import React from 'react';
import './Servicecard.css'; // Create a separate CSS file for styling if needed

const ServiceCard = ({ title, description }) => {
    return (
        <div className="service-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;