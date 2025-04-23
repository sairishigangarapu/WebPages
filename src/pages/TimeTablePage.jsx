<<<<<<< HEAD
function TimeTablePage({ isCollapsed }) {
    return (
      <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
        <h1>Time Table</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>Day</th>
              <th style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>9-11 AM</th>
              <th style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>11-1 PM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>Monday</td>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>CS101</td>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>Math101</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>Tuesday</td>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>Physics101</td>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>CS102</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
=======
function TimeTablePage({ isCollapsed }) {
    return (
      <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
        <h1>Time Table</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>Day</th>
              <th style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>9-11 AM</th>
              <th style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>11-1 PM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>Monday</td>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>CS101</td>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>Math101</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>Tuesday</td>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>Physics101</td>
              <td style={{ border: '1px solid var(--pes-light)', padding: '8px' }}>CS102</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
>>>>>>> 367b8aa8cbcd10ffef47a59aa28b3793e6b47461
  export default TimeTablePage;