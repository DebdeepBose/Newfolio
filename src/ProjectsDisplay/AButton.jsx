import styled from "styled-components";

const AButton = ({ href, icon, frontText, topText }) => {
  return (
    <StyledWrapper>
      <a href={href} target="_blank" rel="noreferrer" className="button-icon">
        <div className="icon rounded-l-lg border-l-teal-400 border-l-3 bg-black pl-4 py-[5px] flex items-center justify-center">{icon}</div>
        <div className="cube ">
          <span className="side front">{frontText}</span>
          <span className="side top">{topText}</span>
        </div>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-icon {
    display: flex;
    
    height: fit-content;
    cursor: pointer;
    overflow: hidden;
    color : teal;
 
  }

  .icon svg {
    width: 25px;
    height: 25px;
  }

  .cube {
    transition: all 0.4s;
    transform-style: preserve-3d;
    width: 200px;
    height: 13px;
    position: relative;
  }

  .button-icon:hover .cube {
    transform: rotateX(90deg);
  }

  .side {
    position: absolute;
    height: 40px;
    width: 200px;
    display: flex;
    font-size: 0.8em;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: bold;
    border: 2px solid cyan;
  
  }

  .top {
    background: #000;
    color: #5eead4;
    transform: rotateX(-90deg) translate3d(0, 13.5px, 2em);
  }

  .front {
    background: #000;
    color: #5eead4;
    transform: translate3d(0, 0, 1em);
  }
`;

export default AButton;
