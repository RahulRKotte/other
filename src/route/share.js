.tracking-page {
  height: 85vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f4f7fc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .ticket-info {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    .ticket-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      .ticket-id {
        font-size: 22px;
        font-weight: bold;
        color: #333;
      }

      .ticket-status {
        font-size: 16px;
        color: #555;
        .status-open {
          color: #f0ad4e;
          font-weight: bold;
        }

        .status-in-progress {
          color: #5bc0de;
          font-weight: bold;
        }

        .status-resolved {
          color: #5cb85c;
          font-weight: bold;
        }
      }
    }

    .details {
      font-size: 16px;
      color: #555;

      .detail {
        margin-bottom: 10px;
        strong {
          color: #333;
        }
      }
    }
  }

  .comments-section {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    flex: 1;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;

    h3 {
      margin-bottom: 15px;
      font-size: 20px;
      font-weight: bold;
      color: #333;
    }

    .comment {
      margin-bottom: 20px;
      padding: 15px;
      background: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

      .comment-header {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #777;

        .comment-author {
          font-weight: bold;
        }

        .comment-time {
          color: #aaa;
        }
      }

      .comment-text {
        margin-top: 10px;
        font-size: 16px;
        color: #333;
      }
    }
  }
}
