
import styled from 'styled-components';

export const ResumeButton = () => {
  return (
    <StyledWrapper>
        <a href="Res_pf.pdf" download="DDB_Res.pdf">
      <button className="button hover:scale-105 active:scale-95 transition-all">
        <svg viewBox="0 0 384 512" className="svgIcon">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </button>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: black;
    border: 2px solid #2dd4bf;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
    rotate: 180deg;
    padding-left:2px;
    padding-right:2px;
  }

  .svgIcon {
    width: 15px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: #2dd4bf;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: #2dd4bf;
    align-items: center;
  }

  .button:hover .svgIcon {
    transition-duration: 0.3s;
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Download Resume";
    color: black;
    font-size: 2px;
    rotate: 180deg;
  }

  .button:hover::before {
    font-size: 14px;
    opacity: 1;
    bottom: unset;
    transition-duration: 0.3s;
  }`;
