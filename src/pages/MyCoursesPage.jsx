function MyCoursesPage({ isCollapsed }) {
    const courses = ['CS101: Intro to Programming', 'Math101: Calculus', 'Physics101: Mechanics'];
  
    return (
      <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
        <h1>My Courses</h1>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default MyCoursesPage;