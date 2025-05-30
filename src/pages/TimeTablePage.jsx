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
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    );
  }
  
  // Removed merge conflict markers as both sides were identical
  
  export default TimeTablePage;