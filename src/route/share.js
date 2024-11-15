import React, { useState } from 'react';
import './TrackingPage.scss';

const TrackingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

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
      text: 'The issue is under investigation. We will update you shortly.',
    },
    {
      author: 'Jane Smith',
      time: '2024-11-13 03:00 PM',
      text: 'The issue has been raised and is being prioritized.',
    },
  ];

  const openModal = () => setIsModalOpen(true); // Open modal
  const closeModal = () => setIsModalOpen(false); // Close modal

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

        {/* More Details Button */}
        <button className="more-details-btn" onClick={openModal}>
          More Details
        </button>
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

      {/* Modal for More Details */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>More Ticket Details</h2>
            <div className="modal-details">
              <div><strong>Ticket ID:</strong> {ticketId}</div>
              <div><strong>Status:</strong> {status}</div>
              <div><strong>Assigned To:</strong> {assignedTo}</div>
              <div><strong>System:</strong> {system}</div>
              <div><strong>Raised By:</strong> {raisedBy}</div>
              <div><strong>Raised On:</strong> {raisedOn}</div>
              <div><strong>Age:</strong> {age}</div>
            </div>
            <button className="close-modal-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingPage;


/* Global Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

/* Main container for the page */
.tracking-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Ticket info section */
.ticket-info {
  .ticket-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .ticket-id {
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }

    .ticket-status {
      font-size: 16px;
      color: #555;

      .status-open {
        color: #ffcc00;
        font-weight: bold;
      }

      .status-closed {
        color: #28a745;
        font-weight: bold;
      }

      .status-in-progress {
        color: #ffc107;
        font-weight: bold;
      }
    }
  }

  .details {
    .detail {
      font-size: 14px;
      margin-bottom: 8px;
      color: #555;

      strong {
        color: #333;
      }
    }
  }

  /* More Details Button */
  .more-details-btn {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #218838;
    }
  }
}

/* Comments Section */
.comments-section {
  margin-top: 40px;

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 16px;
  }

  .comment {
    background-color: #f9f9f9;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .comment-header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #666;

      .comment-author {
        font-weight: bold;
      }

      .comment-time {
        font-style: italic;
      }
    }

    .comment-text {
      font-size: 14px;
      color: #333;
      margin-top: 8px;
    }
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  h2 {
    margin-top: 0;
    font-size: 24px;
    color: #333;
  }

  .modal-details {
    margin-top: 20px;
    div {
      margin-bottom: 10px;
      font-size: 16px;
      color: #333;

      strong {
        color: #000;
      }
    }
  }

  .close-modal-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
}
