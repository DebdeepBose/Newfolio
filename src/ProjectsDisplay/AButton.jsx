import styled from "styled-components";

const AButton = ({ href, icon, frontText, topText }) => {
  return (
    <StyledWrapper>
      <a href={href} target="_blank" rel="noreferrer" className="button-icon flex justify-center">
        <div className="icon rounded-l-lg border-l-teal-400 border-l-3 border-b-teal-400 border-b-2  bg-black pl-4 py-[5px] flex items-center justify-center">
          {icon}
        </div>
        <div className="cube">
          <span
            className="absolute h-[37px] w-[140px] md:w-[150px] flex justify-center items-center 
                 text-[0.8em] uppercase tracking-[0.5px] font-bold
               front bg-black text-[#5eead4] pb-1 border-b-teal-400 border-b-[2.5px] md:border-b-2"
          >
            {frontText}
          </span>
          <span
            className="absolute h-[34px] w-[140px] md:w-[150px] flex justify-center items-center 
                 text-[0.8em] uppercase tracking-[0.5px] font-bold 
                top bg-black text-[#5eead4]  pb-1 border-b-teal-400 border-b-[2.5px] "
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
