function AnnouncementsPage({ isCollapsed }) {
    const announcements = [
      { image: 'https://via.placeholder.com/100?text=Event', title: 'Annual Tech Fest 2025', subheading: 'March 15-17, PES University Campus' },
      { image: 'https://via.placeholder.com/100?text=Seminar', title: 'AI Workshop', subheading: 'March 20, 10 AM - 2 PM' },
      { image: 'https://via.placeholder.com/100?text=Sports', title: 'Inter-College Sports Meet', subheading: 'April 1-3, Sports Complex' },
    ];
  
    return (
      <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
        <h1>Announcements</h1>
        <section className="announcements">
          <div className="announcements-container">
            {announcements.map((announcement, index) => (
              <div className="announcement-card" key={index}>
                <img src={announcement.image} alt={announcement.title} className="announcement-image" />
                <div className="announcement-text">
                  <h3>{announcement.title}</h3>
                  <p>{announcement.subheading}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  // Removed merge conflict markers as both sides were identical
  
  export default AnnouncementsPage;