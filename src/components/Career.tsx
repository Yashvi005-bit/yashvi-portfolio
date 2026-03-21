import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My experience <span></span>
          <br /> 
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contributor</h4>
                <h5>AOSSIE & FOSSASIA</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed to AOSSIE by implementing responsive navigation and 
  hover glow interactions using React and Material UI. Contributed to 
  FOSSASIA by fixing outdated copyright information on 
  summit.fossasia.org.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GSSoC Participant</h4>
                <h5>GirlScript Summer of Code</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Selected as a participant in GirlScript Summer of Code 2025. 
  Explored open-source workflows, collaboration practices and version 
  control while contributing to real-world projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Participant</h4>
                <h5>Smart India Hackathon</h5>
              </div>
              <h3>2024 & 2025</h3>
            </div>
            <p>
              Participated in Smart India Hackathon 2024 and was selected in 
  the Internal Round of SIH 2025. Collaborated on team-based problem 
  solving under time constraints tackling real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
