import { useState, useEffect } from 'react'; // Keep imports from HEAD
import axios from 'axios'; // Keep imports from HEAD

function ProfilePage({ isCollapsed }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Keep state from HEAD
  const [error, setError] = useState(''); // Keep state from HEAD
  const [profileData, setProfileData] = useState({ // Keep state from HEAD
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
  const [editData, setEditData] = useState({...profileData}); // Keep state from HEAD

  // Fetch user profile data
  useEffect(() => { // Keep useEffect from HEAD
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

  const handleChange = (field, value) => { // Keep handleChange from HEAD
    setEditData({
      ...editData,
      [field]: value
    });
  };

  const toggleEdit = async () => { // Keep toggleEdit from HEAD
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

  if (isLoading) { // Keep loading state check from HEAD
    return <div className="loading">Loading profile data...</div>;
  }

  if (error) { // Keep error state check from HEAD
    return <div className="error">{error}</div>;
  }

  // Rest of the component remains the same from HEAD
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
            {/* Assume other DetailItem components are here as in HEAD */}
             <DetailItem label="Branch" value={profileData.branch} isEditing={isEditing} onChange={(value) => handleChange('branch', value)} editValue={editData.branch} />
             <DetailItem label="Email" value={profileData.email} isEditing={isEditing} onChange={(value) => handleChange('email', value)} editValue={editData.email} />
             <DetailItem label="PESU ID" value={profileData.pesuId} isEditing={isEditing} onChange={(value) => handleChange('pesuId', value)} editValue={editData.pesuId} />
             <DetailItem label="Semester" value={profileData.semester} isEditing={isEditing} onChange={(value) => handleChange('semester', value)} editValue={editData.semester} />
             <DetailItem label="Contact No" value={profileData.contactNo} isEditing={isEditing} onChange={(value) => handleChange('contactNo', value)} editValue={editData.contactNo} />
             <DetailItem label="SRN" value={profileData.srn} isEditing={isEditing} onChange={(value) => handleChange('srn', value)} editValue={editData.srn} />
             <DetailItem label="Section" value={profileData.section} isEditing={isEditing} onChange={(value) => handleChange('section', value)} editValue={editData.section} />
             <DetailItem label="Aadhar No" value={profileData.aadharNo} isEditing={isEditing} onChange={(value) => handleChange('aadharNo', value)} editValue={editData.aadharNo} />
             <DetailItem label="Program" value={profileData.program} isEditing={isEditing} onChange={(value) => handleChange('program', value)} editValue={editData.program} />
             <DetailItem label="Aadhar Name" value={profileData.aadharName} isEditing={isEditing} onChange={(value) => handleChange('aadharName', value)} editValue={editData.aadharName} />
          </div>
          <div className="button-container">
            <button onClick={toggleEdit} className="edit-button">
              <i className={`fas ${isEditing ? 'fa-save' : 'fa-edit'}`}></i>
              {isEditing ? ' Save' : ' Edit'}
            </button>
            {isEditing && (
              <button 
                onClick={() => {
                  setEditData({...profileData}); // Reset edit data on cancel
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

      {/* Assume rest of the sections are here as in HEAD */}
       {/* Academic Details Section */}
      <section className="profile-section">
        <h2>Academic Details</h2>
        <div className="section-content">
          <div className="info-grid">
            <InfoItem label="Program" value={profileData.program} />
            <InfoItem label="Branch" value={profileData.branch} />
            <InfoItem label="Semester" value={profileData.semester} />
            <InfoItem label="Section" value={profileData.section} />
            <InfoItem label="SRN" value={profileData.srn} />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="profile-section">
        <h2>Contact Information</h2>
        <div className="section-content">
          <div className="info-grid">
            <InfoItem label="Email" value={profileData.email} />
            <InfoItem label="Contact No" value={profileData.contactNo} />
          </div>
        </div>
      </section>

      {/* Identification Details Section */}
      <section className="profile-section">
        <h2>Identification Details</h2>
        <div className="section-content">
          <div className="info-grid">
            <InfoItem label="PESU ID" value={profileData.pesuId} />
            <InfoItem label="Aadhar No" value={profileData.aadharNo} />
            <InfoItem label="Name as per Aadhar" value={profileData.aadharName} />
          </div>
        </div>
      </section>
    </div>
  );
}

// Component for editable detail items (Keep from HEAD)
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

// Component for non-editable info items (Keep from HEAD)
function InfoItem({ label, value }) {
  return (
    <div className="info-item">
      <span className="label">{label}</span>
      <span className="value">{value || 'Not provided'}</span>
    </div>
  );
}

export default ProfilePage; // Keep export from HEAD