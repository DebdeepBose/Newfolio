import styled from "styled-components";

export const TealNebula = ({ label, name, type = "text", height, multiline }) => {
  return (
    <StyledWrapper height={height}>
      <div className="input-container">
        {multiline ? (
          <textarea
            required
            name={name}
            className="styled_input_bar"
            style={height ? { height } : {}}
            placeholder=" "
          />
        ) : (
          <input
            required
            type={type}
            name={name}
            className="styled_input_bar"
            style={height ? { height } : {}}
            placeholder=" "
          />
        )}
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-container {
    position: relative;
    width: 100%;
  }

  .styled_input_bar {
    width: 100%;
    padding: 1em;
    font-size: 1em;
    border: 0.1em solid #2a2a3a;
    border-radius: 0.75em;
    background-color: transparent;
    color: white;
    outline: none;
    transition: all 0.3s ease;
    box-sizing: border-box;
    resize: none;
  }

  .styled_input_bar::placeholder {
    color: transparent;
  }

  .styled_input_bar:focus {
    border-color: #2dd4bf;
    box-shadow: 0 5px 8px rgba(45, 212, 191, 0.3),
      0 10px 20px rgba(45, 212, 191, 0.2),
      0 15px 40px rgba(45, 212, 191, 0.15),
      0 20px 60px rgba(45, 212, 191, 0.1);
  }

  .input-label {
    position: absolute;
    left: 1em;
    font-size: 1em;
    color: #6a6a8a;
    pointer-events: none;
    transition: all 0.3s ease;
    background-color: #00000f;
    padding: 0 0.4em;
  }

  /* Default position for inputs (centered) */
  input + .input-label {
    top: 50%;
    transform: translateY(-50%);
  }

  /* Default position for textarea (stick to top-left) */
  textarea + .input-label {
    top: 0.8em;
    transform: none;
  }

  /* Float-up effect when focused or filled */
  .styled_input_bar:focus + .input-label,
  .styled_input_bar:not(:placeholder-shown) + .input-label {
    top: -0.6em;
    left: 0.8em;
    font-size: 0.8em;
    color: #5eead4;
    transform: none;
  }

  .styled_input_bar:not(:focus):not(:placeholder-shown) + .input-label {
    color: #6a6a8a;
  }
`;

