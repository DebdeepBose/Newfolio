import React from "react";
import styled, { keyframes } from "styled-components";
import { FaPaperPlane, FaCheck } from "react-icons/fa";

export const TealSendButton = ({ status }) => {
  return (
    <StyledWrapper>
      <button
        type="submit" // ✅ submits the form
        className={`button ${status} brightness-150 border-2 border-[#5eead4]`}
        disabled={status === "sending" || status === "sent"}
      >
        <span className="icon">
          {status === "sent" ? <FaCheck /> : <FaPaperPlane />}
        </span>
        <span className={`button-text ${status === "sending" ? "loading" : ""}`}>
          {status === "idle" && "Send Msg"}
          {status === "sending" && "Sending"}
          {status === "sent" && "Sent"}
        </span>
      </button>
    </StyledWrapper>
  );
};

const ellipsis = keyframes`
  to {
    width: 20px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    background: black;
    padding: 14px 10px;
    border-radius: 32px;
    color: #5eead4;
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 180px;
    outline: none;
    cursor: pointer;
    position: relative;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .button:hover:enabled {
    transform: scale(1.05);
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.95;
  }

  .icon {
    margin-right: 10px;
    font-size: 1.1rem;
    transition: transform 0.4s ease, opacity 0.3s ease;
  }

  .button-text {
    transition: transform 0.3s ease;
  }

  .button-text.loading:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ${ellipsis} steps(4, end) 900ms infinite;
    content: "\\2026";
    width: 0px;
  }

  .button.sent .icon {
    color: #5eead4;
    transform: scale(1.2);
  }
`;
