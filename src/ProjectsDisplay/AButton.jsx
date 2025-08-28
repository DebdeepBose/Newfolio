import styled from "styled-components";

const AButton = ({ href, icon, frontText, topText }) => {
  return (
    <StyledWrapper>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="button-icon flex justify-center"
      >
        <div className="icon rounded-l-xl border-l-teal-400 border-l-3  bg-black pl-4 py-[5px] flex items-center justify-center">
          {icon}
        </div>
        <div className="cube">
          <span
            className="absolute h-[36px] md:h-[37px] w-[140px] md:w-[150px] flex justify-center items-center 
              text-[0.8em] uppercase font-semibold
              front bg-black text-[#5eead4] border-r-teal-300 border-r-2 rounded-r-xl"
          >
            {frontText}
          </span>
          <span
            className="absolute h-[36px] md:h-[37px] w-[140px] md:w-[150px] flex justify-center items-center 
              text-[0.8em] uppercase font-semibold
              top bg-black text-[#5eead4] border-r-teal-300 border-r-3 rounded-r-xl"
          >
            {topText}
          </span>
        </div>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-icon {
    height: fit-content;
    cursor: pointer;
    overflow: hidden;
    color: teal;
  }

  .icon svg {
    width: 25px;
    height: 25px;
  }

  .cube {
    transition: all 0.4s;
    transform-style: preserve-3d;
    width: 150px;
    height: 13px;
    position: relative;
  }

  .button-icon:hover .cube {
    transform: rotateX(90deg);
  }

  .top {
    transform: rotateX(-90deg) translate3d(0, 13.5px, 2em);
  }

  .front {
    transform: translate3d(0, 0, 1em);
  }
`;

export default AButton;
