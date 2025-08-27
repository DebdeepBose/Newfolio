import styled from "styled-components";
import { MacView } from "./MacView";
import AButton from "./AButton";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const ProjectCard = ({ title, description, viewLink, codeLink }) => {
  return (
    <CardWrapper>
      <div className="left flex-1 min-w-[300px] border-2 border-teal-500 flex items-center justify-center">
        <MacView />
      </div>
      <div className="right flex-1 items-center min-w-[300px] border-2 border-teal-500 p-4 flex flex-col gap-4">
        <div className="title border-2 border-teal-500 px-4 py-2 font-medium text-xl text-center text-teal-400">
          {title}
        </div>
        <div className="desc border-2 border-teal-500 p-4 flex-grow max-w-lg text-center ">
          {description}
        </div>
        <div className="buttons flex justify-center gap-4">
          <AButton
            href={codeLink}
            icon={<FaGithub color="#fff" />}
            frontText="get source code"
            topText="on github"
          />
          <AButton
            href={viewLink}
            icon={<SiVercel color="fff" />}
            frontText="live demo"
            topText="on vercel"
          />
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  border: 2px solid teal;
  padding: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  .buttons a {
    border: 2px solid teal;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    font-weight: medium;
    color: black;
    transition: background 0.2s;
  }

`;

export default ProjectCard;
