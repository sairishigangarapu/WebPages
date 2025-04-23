import { useState } from 'react';

function Content() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder image URLs (replace with actual URLs if available)
  const images = [
    'https://via.placeholder.com/600x400?text=Slide+1',
    'https://via.placeholder.com/600x400?text=Slide+2',
    'https://via.placeholder.com/600x400?text=Slide+3',
  ];

  // Sample announcements data
  const announcements = [
    {
      image: 'https://via.placeholder.com/100?text=Event',
      title: 'Annual Tech Fest 2025',
      subheading: 'March 15-17, PES University Campus',
    },
    {
      image: 'https://via.placeholder.com/100?text=Seminar',
      title: 'AI Workshop',
      subheading: 'March 20, 10 AM - 2 PM',
    },
    {
      image: 'https://via.placeholder.com/100?text=Sports',
      title: 'Inter-College Sports Meet',
      subheading: 'April 1-3, Sports Complex',
    },
    {
      image: 'https://via.placeholder.com/100?text=Exam',
      title: 'Mid-Term Exams Schedule',
      subheading: 'April 10-15, All Departments',
    },
    {
      image: 'https://via.placeholder.com/100?text=Club',
      title: 'Photography Club Meetup',
      subheading: 'March 25, 4 PM, Room 305',
    },
    {
      image: 'https://via.placeholder.com/100?text=Cultural',
      title: 'Cultural Night',
      subheading: 'March 30, 6 PM, Auditorium',
    },
  ];

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
      <h1>Content Area</h1>
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>
          &#8249;
        </button>
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="carousel-image"
        />
        <button className="carousel-btn next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      {/* Announcements Section */}
      <section className="announcements">
        <h2>Announcements</h2>
        <div className="announcements-container">
          {announcements.map((announcement, index) => (
            <div className="announcement-card" key={index}>
              <img
                src={announcement.image}
                alt={announcement.title}
                className="announcement-image"
              />
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

export default Content;
