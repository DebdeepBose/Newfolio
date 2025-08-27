import styled from "styled-components";
import { MacView } from "./MacView";
import AButton from "./AButton";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";



const ProjectCard = ({ title, description, viewLink, codeLink, passBg }) => {
  return (
    <CardWrapper className="flex flex-col md:flex-row gap-[0.1rem] md:gap-[0.5rem]">
      <div className="left flex-1 min-w-[300px] flex items-center justify-center">
        <MacView bgImg={passBg} />
      </div>

      <div className="right flex-1 min-w-[300px] p-4 flex flex-col gap-4 items-center mb-6">
        <div className="title px-4 py-2 font-medium text-2xl md:text-4xl text-center text-teal-400">
          {title}
        </div>

        <div className="desc py-4 px-16 md:px-8 flex-grow max-w-lg text-center font-medium bg-gradient-to-r from-teal-300 via-teal-100 to-teal-50 bg-clip-text text-transparent">
          {description}
        </div>

        <div className="buttons flex justify-center gap-6 flex-wrap">
          <AButton
            href={codeLink}
            icon={<FaGithub color="#fff" />}
            frontText="get source code"
            topText="on github"
          />
          <AButton
            href={viewLink}
            icon={<SiVercel color="#fff" />}
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
  padding: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;



export default ProjectCard;
