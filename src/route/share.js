<div class="ticket">
  <div class="ticket-header">
    <span class="ticket-id">#12345</span>
    <button class="track-button">Track</button>
  </div>
  <div class="ticket-details">
    <div class="detail">
      <strong>Assigned To:</strong> John Doe
    </div>
    <div class="detail">
      <strong>System:</strong> CRM
    </div>
    <div class="detail">
      <strong>Raised On:</strong> 2024-11-15
    </div>
  </div>
</div>


.ticket {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;

  .ticket-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    .ticket-id {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .track-button {
      background: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #0056b3;
      }
    }
  }

  .ticket-details {
    .detail {
      margin-bottom: 8px;
      font-size: 14px;
      color: #555;

      strong {
        color: #333;
      }
    }
  }
}
