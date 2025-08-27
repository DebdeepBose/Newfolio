import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

export const MacView = ({ bgImg }) => {
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
    <StyledWrapper bgImg={bgImg}>
      <div className="laptop">
        <div
          className={`screen ${inView ? "open" : ""} h-[300px] w-full max-w-[520px] aspect-[518/318] 
          mx-auto
          p-[9px] pb-[23px] md:after:w-[509px] after:h-[20px]
          relative flex items-center justify-center bg-[#111] bg-cover bg-center rounded-[20px] transition-transform duration-[1200ms] ease-out`}
          ref={screenRef}
        >
          <div className="header" />
        </div>
        <div
          className="keyboard bg-[radial-gradient(circle_at_center,_#e2e3e4_85%,_#a9abac_100%)]
          border border-solid border-[#a0a3a7]
          rounded-t-[2px] rounded-b-[12px]
          border-t-[1px] border-r-[2px] border-b-0 border-l-[2px]
          shadow-[inset_0_-2px_8px_0_#6c7074] 
          h-[14px] mt-[-10px] relative w-[580px] md:w-[630px] z-[9] rounded-[20px]"
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .laptop {
    transform: scale(0.8);
    @media (max-width: 768px) {
      transform: scale(0.6); // Scale down for mobile
    }
  }

  .screen {
    box-shadow: inset 0 0 0 2px #c8cacb, inset 0 0 0 10px #000;
    background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : "none")};
    transform-style: preserve-3d;
    transform: perspective(1900px) rotateX(-88.5deg);
    transform-origin: 50% 100%;
    background-size: calc(100% - 10px) calc(100%);
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: 768px) {
      width: 115vw;
      padding: 5px;
      border-radius: 10px;
    }
  }

  .screen.open {
    transform: perspective(1000px) rotateX(0deg);
  }

  .screen::before {
    content: "";
    width: 418px;
    height: 12px;
    position: absolute;
    background: linear-gradient(#979899, transparent);
    top: -3px;
    transform: rotateX(90deg);
    border-radius: 5px 5px;
    @media (max-width: 768px) {
      width: 70vw;
    }
  }

  .screen::after {
    background: linear-gradient(to bottom, #272727, #0d0d0d);
    border-radius: 0 0 20px 20px;
    bottom: 2px;
    content: "";
    left: 2px;
    position: absolute;
    @media (max-width: 768px) {
      border-radius: 0 0 10px 10px;
    }
  }

  .keyboard {
    @media (max-width: 768px) {
      width: 140vw;
      height: 14px;
    }
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
    @media (max-width: 768px) {
      width: 20vw;
      margin-left: -10vw;
    }
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
    @media (max-width: 768px) {
      box-shadow: -20vw 0 #272727, 20vw 0 #272727;
      width: 10vw;
    }
  }
`;