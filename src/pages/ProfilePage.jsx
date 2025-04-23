<<<<<<< HEAD
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

=======
import { useState } from 'react';

function ProfilePage({ isCollapsed }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing(!isEditing);

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
            <DetailItem label="Name" value="[Student Name]" isEditing={isEditing} />
            <DetailItem label="Branch" value="[Branch Name]" isEditing={isEditing} />
            <DetailItem label="Email ID" value="[Email]" isEditing={isEditing} />
            <DetailItem label="PESU ID" value="[PESU ID]" isEditing={isEditing} />
            <DetailItem label="Semester" value="[Semester]" isEditing={isEditing} />
            <DetailItem label="Contact No" value="[Contact Number]" isEditing={isEditing} />
            <DetailItem label="SRN" value="[SRN]" isEditing={isEditing} />
            <DetailItem label="Section" value="[Section]" isEditing={isEditing} />
            <DetailItem label="Aadhar No" value="[Aadhar Number]" isEditing={isEditing} />
            <DetailItem label="Program" value="[Program]" isEditing={isEditing} />
            <DetailItem label="Name as in Aadhar" value="[Aadhar Name]" isEditing={isEditing} />
          </div>
          <button onClick={toggleEdit} className="edit-button">
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </section>

      {/* Other Information Section */}
      <section className="profile-section">
        <h2>Other Information</h2>
        <div className="info-grid">
          <InfoItem label="SSLC Marks" value="[SSLC Marks]" />
          <InfoItem label="PUC Marks" value="[PUC Marks]" />
          <InfoItem label="Date of Birth" value="[DOB]" />
          <InfoItem label="Blood Group" value="[Blood Group]" />
        </div>
      </section>

      {/* Qualifying Examination Section */}
      <section className="profile-section">
        <h2>Qualifying Examination</h2>
        <div className="info-grid">
          <InfoItem label="Exam" value="[Exam Name]" />
          <InfoItem label="Rank" value="[Rank]" />
          <InfoItem label="Score" value="[Score]" />
        </div>
      </section>

      {/* Parent Details Section */}
      <section className="profile-section">
        <h2>Parent Details</h2>
        <div className="parent-grid">
          <div className="parent-column">
            <h3>Father</h3>
            <InfoItem label="Father Name" value="[Father Name]" />
            <InfoItem label="Mobile" value="[Father Mobile]" />
            <InfoItem label="Email" value="[Father Email]" />
            <InfoItem label="Occupation" value="[Father Occupation]" />
            <InfoItem label="Qualification" value="[Father Qualification]" />
            <InfoItem label="Designation" value="[Father Designation]" />
            <InfoItem label="Employer" value="[Father Employer]" />
          </div>
          <div className="parent-column">
            <h3>Mother</h3>
            <InfoItem label="Mother Name" value="[Mother Name]" />
            <InfoItem label="Mobile" value="[Mother Mobile]" />
            <InfoItem label="Email" value="[Mother Email]" />
            <InfoItem label="Occupation" value="[Mother Occupation]" />
            <InfoItem label="Qualification" value="[Mother Qualification]" />
            <InfoItem label="Designation" value="[Mother Designation]" />
            <InfoItem label="Employer" value = "[Mother Employer]" />
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="profile-section">
        <h2>Address</h2>
        <div className="address-grid">
          <div className="address-column">
            <h3>Present Address</h3>
            <p>[Present Address]</p>
          </div>
          <div className="address-column">
            <h3>Permanent Address</h3>
            <p>[Permanent Address]</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component for editable detail items
function DetailItem({ label, value, isEditing }) {
  return (
    <div className="detail-item">
      <span className="label">{label}</span>
      {isEditing ? (
        <input
          type="text"
          defaultValue={value}
          onChange={(e) => console.log(`Editing ${label}: ${e.target.value}`)} // Placeholder for edit logic
        />
      ) : (
        <span className="value">{value}</span>
      )}
    </div>
  );
}

// Component for non-editable info items
function InfoItem({ label, value }) {
  return (
    <div className="info-item">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
}

>>>>>>> 367b8aa8cbcd10ffef47a59aa28b3793e6b47461
export default ProfilePage;