import "./styles/WhatIDo.css";

const capabilities = [
  {
    index: "01",
    category: "GENERATIVE AI & LLMs",
    subtitle: "Building Intelligent AI Experiences",
    description:
      "Developing LLM-powered applications using Gemini APIs, LangChain, and Retrieval-Augmented Generation (RAG). Focused on contextual information retrieval, prompt engineering, and integrating AI capabilities into practical applications.",
    skills: ["LLMs", "Prompt Engineering", "RAG", "LangChain", "Gemini API"],
  },
  {
    index: "02",
    category: "AGENTIC AI",
    subtitle: "Exploring Intelligent AI Workflows",
    description:
      "Exploring agentic AI systems, tool calling, workflow orchestration, and multi-step reasoning to understand how AI agents can plan tasks, interact with tools, and execute complex workflows.",
    skills: [
      "AI Agents",
      "Tool Calling",
      "Workflow Orchestration",
      "LLM Workflows",
    ],
    learning: true,
  },
  {
    index: "03",
    category: "FULL-STACK ENGINEERING",
    subtitle: "Engineering End-to-End Applications",
    description:
      "Developing responsive web applications and interactive interfaces with React and modern JavaScript, supported by backend services, REST APIs, authentication, and database integration.",
    skills: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "MongoDB",
    ],
  },
  {
    index: "04",
    category: "DATA STRUCTURES & ALGORITHMS",
    subtitle: "Structured Thinking. Efficient Solutions.",
    description:
      "Applying algorithmic thinking and problem-solving techniques to develop efficient solutions. Solved 200+ LeetCode problems across arrays, strings, recursion, trees, and dynamic programming.",
    skills: [
      "Java",
      "Data Structures",
      "Algorithms",
      "Dynamic Programming",
      "Problem Solving",
    ],
  },
];

const WhatIDo = () => (
  <section className="whatIDO" aria-labelledby="whatido-heading">
    <div className="what-intro">
      <p className="what-eyebrow">CAPABILITIES</p>
      <h2 className="what-title" id="whatido-heading">
        WHAT I <span>DO</span>
        <br />
       
      </h2>
      <p className="what-statement">
        Engineering intelligent applications through AI, thoughtful
        architecture, and modern software development.
      </p>
    </div>

    <div className="what-box-in what-capabilities">
      {capabilities.map((capability) => (
        <article className="what-card" key={capability.index}>
          <div className="what-card-top">
            <span className="what-index">{capability.index}</span>
            {capability.learning && (
              <span className="what-learning">EVOLVING SPECIALIZATION</span>
            )}
          </div>
          <h3 className="what-category">{capability.category}</h3>
          <h4 className="what-subtitle">{capability.subtitle}</h4>
          <p className="what-description">{capability.description}</p>
          <ul className="what-skills" aria-label="Skills">
            {capability.skills.map((skill) => (
              <li className="what-tag" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default WhatIDo;
