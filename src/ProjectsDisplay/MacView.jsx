import React, { useRef, useEffect, useState } from "react";
import Ss from "../assets/Ss.png";
import styled from "styled-components";

export const MacView = () => {
  const screenRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (screenRef.current) {
      observer.observe(screenRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StyledWrapper>
      <div className="laptop">
        <div className={`screen ${inView ? "open" : ""}`} ref={screenRef}>
          <div className="header" />
        </div>
        <div className="keyboard" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .laptop {
    transform: scale(0.8);
  }

  .screen {
    border-radius: 20px;
    box-shadow: inset 0 0 0 2px #c8cacb, inset 0 0 0 10px #000;
    height: 318px;
    width: 518px;
    margin: 0 auto;
    padding: 9px 9px 23px 9px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Ss});
    background-size: cover;
    background-position: center;
    transform-style: preserve-3d;
    transform: perspective(1900px) rotateX(-88.5deg);
    transform-origin: 50% 100%;
    transition: transform 1.2s ease-out;
    background-color: #111; /* fallback */
  }

  .screen.open {
    transform: perspective(1000px) rotateX(0deg);
  }

  .screen::before {
    content: "";
    width: 518px;
    height: 12px;
    position: absolute;
    background: linear-gradient(#979899, transparent);
    top: -3px;
    transform: rotateX(90deg);
    border-radius: 5px 5px;
  }

  .text {
    font-family: "Segoe UI", Roboto, sans-serif;
    color: #fff;
    text-align: center;
    text-shadow: 0 0 5px #000;
    padding: 1rem;
  }

  .screen::after {
    background: linear-gradient(to bottom, #272727, #0d0d0d);
    border-radius: 0 0 20px 20px;
    bottom: 2px;
    content: "";
    height: 24px;
    left: 2px;
    position: absolute;
    width: 514px;
  }

  .keyboard {
    background: radial-gradient(circle at center, #e2e3e4 85%, #a9abac 100%);
    border: solid #a0a3a7;
    border-radius: 2px 2px 12px 12px;
    border-width: 1px 2px 0 2px;
    box-shadow: inset 0 -2px 8px 0 #6c7074;
    height: 14px;
    margin-top: -10px;
    position: relative;
    width: 620px;
    z-index: 9;
  }

  .keyboard::after {
    background: #e2e3e4;
    border-radius: 0 0 10px 10px;
    box-shadow: inset 0 0 4px 2px #babdbf;
    content: "";
    height: 10px;
    left: 50%;
    margin-left: -60px;
    position: absolute;
    top: 0;
    width: 120px;
  }

  .keyboard::before {
    background: transparent;
    border-radius: 0 0 3px 3px;
    bottom: -2px;
    box-shadow: -270px 0 #272727, 250px 0 #272727;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -10px;
    position: absolute;
    width: 40px;
  }
`;


