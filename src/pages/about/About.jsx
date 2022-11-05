import { AboutContainer, InfoContainer, StyledImage } from './Abou.style';

import codingSvg from '../../assets/coding.svg';

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          About Software Developer <span>Ummuhan Kavas</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am Ummuhan</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, MongoDB,SQL,
          Python.
        </h4>
        <h2>
          <a href="mailto:ummuhankavas@gmail.com">Send email</a> :
          ummuhankavas@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
