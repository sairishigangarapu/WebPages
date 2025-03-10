function ProjectsPage({ isCollapsed }) {
    const projects = [
      { title: 'AI Chatbot', description: 'Built with React and xAI' },
      { title: 'Portfolio Website', description: 'Personal project using HTML/CSS' },
    ];
  
    return (
      <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProjectsPage;