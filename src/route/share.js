import React from 'react';
import './TrackingPage.scss';

const TrackingPage = () => {
  const ticketId = '12345';
  const status = 'Open';
  const assignedTo = 'John Doe';
  const system = 'CRM';
  const raisedBy = 'Jane Smith';
  const raisedOn = '2024-11-12';
  const age = '3 days';

  const comments = [
    {
      author: 'John Doe',
      time: '2024-11-14 10:30 AM',
      text: 'The issue is under investigation. We will update you shortly.'
    },
    {
      author: 'Jane Smith',
      time: '2024-11-13 03:00 PM',
      text: 'The issue has been raised and is being prioritized.'
    }
  ];

  return (
    <div className="tracking-page">
      <div className="ticket-info">
        <div className="ticket-header">
          <h2 className="ticket-id">Ticket #{ticketId}</h2>
          <p className="ticket-status">
            Status: <span className={`status-${status.toLowerCase()}`}>{status}</span>
          </p>
        </div>
        <div className="details">
          <div className="detail">
            <strong>Assigned To:</strong> {assignedTo}
          </div>
          <div className="detail">
            <strong>System:</strong> {system}
          </div>
          <div className="detail">
            <strong>Raised By:</strong> {raisedBy}
          </div>
          <div className="detail">
            <strong>Raised On:</strong> {raisedOn}
          </div>
          <div className="detail">
            <strong>Age of Ticket:</strong> {age}
          </div>
        </div>
      </div>

      <div className="comments-section">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="comment-header">
              <span className="comment-author">{comment.author}</span>
              <span className="comment-time">{comment.time}</span>
            </div>
            <p className="comment-text">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingPage;
