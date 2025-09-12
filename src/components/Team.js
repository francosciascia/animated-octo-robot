import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: 'Lily Gomez', role: 'Founder', emoji: '👩🏻', color: 'y' },
    { name: 'Dm Lincoln', role: 'Co-Founder', emoji: '👨🏿', color: 'g' },
    { name: 'Serena Mei', role: 'Manager', emoji: '👩🏻‍🦰', color: 'y' },
    { name: 'Abdel Latif', role: 'Supervisor', emoji: '👨🏻', color: 'g' }
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className={`person ${member.color}`}>
              <div className="member"></div>
              <div className="info">
                <div className="name">{member.name}</div>
                <div className="role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
