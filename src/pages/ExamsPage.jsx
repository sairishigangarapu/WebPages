import React from 'react';

function ExamsPage({ isCollapsed }) {
  // Sample data (you can replace this with dynamic data from an API or state management)
  const examDetails = {
    roomNumber: 'A-203',
    computerId: 'PC-045',
    hallTicket: 'HT-2023-12345',
  };

  return (
    <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="profile-section">
        <h2>Exam Details</h2>
        <div className="section-content">
          <div className="details-grid">
            <div className="detail-item">
              <span className="label">Room Number:</span>
              <input type="text" value={examDetails.roomNumber} readOnly />
            </div>
            <div className="detail-item">
              <span className="label">Computer ID:</span>
              <input type="text" value={examDetails.computerId} readOnly />
            </div>
            <div className="detail-item">
              <span className="label">Hall Ticket:</span>
              <input type="text" value={examDetails.hallTicket} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamsPage;