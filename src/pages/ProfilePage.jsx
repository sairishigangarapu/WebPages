import { useState, useEffect } from 'react';
import axios from 'axios';

function ProfilePage({ isCollapsed }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [profileData, setProfileData] = useState({
    name: "",
    branch: "",
    email: "",
    pesuId: "",
    semester: "",
    contactNo: "",
    srn: "",
    section: "",
    aadharNo: "",
    program: "",
    aadharName: ""
  });

  // Create a temporary state for editing
  const [editData, setEditData] = useState({...profileData});

  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Not authenticated');
          setIsLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: {
            'x-auth-token': token
          }
        });

        setProfileData(response.data);
        setEditData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to load profile data');
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (field, value) => {
    setEditData({
      ...editData,
      [field]: value
    });
  };

  const toggleEdit = async () => {
    if (isEditing) {
      // Save changes
      try {
        setIsLoading(true);
        const token = localStorage.getItem('token');
        
        await axios.put('http://localhost:5000/api/users/profile', editData, {
          headers: {
            'x-auth-token': token
          }
        });
        
        setProfileData({...editData});
        setIsLoading(false);
      } catch (error) {
        setError('Failed to update profile');
        setIsLoading(false);
      }
    } else {
      // Start editing with current data
      setEditData({...profileData});
    }
    setIsEditing(!isEditing);
  };

  if (isLoading) {
    return <div className="loading">Loading profile data...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  // Rest of the component remains the same
  return (
    <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
      <h1 className="profile-section">My Profile</h1>

      {/* Personal Details Section */}
      <section className="profile-section">
        <h2>Personal Details</h2>
        <div className="section-content">
          <div className="profile-image-container">
            <img
              src="https://via.placeholder.com/150?text=Profile"
              alt="Profile"
              className="profile-image"
            />
          </div>
          <div className="details-grid">
            <DetailItem 
              label="Name" 
              value={profileData.name} 
              isEditing={isEditing} 
              onChange={(value) => handleChange('name', value)} 
              editValue={editData.name}
            />
            {/* Other DetailItem components remain the same */}
            {/* ... */}
          </div>
          <div className="button-container">
            <button onClick={toggleEdit} className="edit-button">
              <i className={`fas ${isEditing ? 'fa-save' : 'fa-edit'}`}></i>
              {isEditing ? ' Save' : ' Edit'}
            </button>
            {isEditing && (
              <button 
                onClick={() => {
                  setEditData({...profileData});
                  setIsEditing(false);
                }} 
                className="cancel-button"
              >
                <i className="fas fa-times"></i> Cancel
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* ... */}
    </div>
  );
}

// Component for editable detail items
function DetailItem({ label, value, isEditing, onChange, editValue }) {
  return (
    <div className="detail-item">
      <span className="label">{label}</span>
      {isEditing ? (
        <input
          type="text"
          value={editValue || ''}
          onChange={(e) => onChange(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className="value">{value || 'Not provided'}</span>
      )}
    </div>
  );
}

// Component for non-editable info items
function InfoItem({ label, value }) {
  return (
    <div className="info-item">
      <span className="label">{label}</span>
      <span className="value">{value || 'Not provided'}</span>
    </div>
  );
}

export default ProfilePage;