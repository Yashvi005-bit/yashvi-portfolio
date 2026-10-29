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
                <h4>Vellaration Technologies</h4>
                <h5>Full Stack Developer Intern</h5>
              </div>
              <h3>06/2026-08/2026</h3>
            </div>
            <p>
Engineered a responsive corporate website and CRM dashboard using React, Tailwind CSS, and Framer Motion, delivering an intuitive interface for data management. Developed a FastAPI-based authentication module with JWT-based login and session management, strengthening backend security and application reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chamber of Commerce and Industry of India</h4>
                <h5>Full Stack Developer Intern</h5>
              </div>
              <h3>08/2026-10/2026</h3>
            </div>
            <p>
             Contributed to the development and maintenance of full-stack web applications, driving frontend implementation and backend integration. Integrated AI-powered features and conversational chatbots to enhance application functionality and deliver improved user experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GirlScript Summer of Code</h4>
                <h5>Open Source contributor</h5>
              </div>
              <h3>06/2026-08/2026</h3>
            </div>
            <p>
             Contributed to open-source development through GirlScript Summer of Code (GSSoC) 2026, collaborating on codebases and strengthening practical software engineering skills. Gained experience navigating existing code, implementing improvements, and working with Git and GitHub in collaborative development workflows.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Career;
