import React from 'react';

const Support = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Covid - 19',
      image: 'images/covid.jpg',
      className: 'pink'
    },
    {
      id: 2,
      title: 'Food Bank',
      image: 'images/foodbank.jpeg',
      className: 'beige'
    },
    {
      id: 3,
      title: 'Safe Water',
      image: 'images/safewater.jpg',
      className: 'photo tall'
    }
  ];

  return (
    <section id="campaign" className="support">
      <div className="container support-layout">
        <h2 className="display support-title">
          <span>Support Your</span>
          <span className="break">Community</span>
        </h2>
        <p className="lead">
          The legal definition of a charitable organization varies between countries and charity law affects charitable organizations also vary.
        </p>
        
        {campaigns.map(campaign => (
          <article key={campaign.id} className={`card ${campaign.className.includes('tall') ? 'tall' : ''}`}>
            <div 
              className={`thumb ${campaign.className}`}
              style={{
                backgroundImage: `url('${campaign.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              aria-label={campaign.title}
            ></div>
            <h3>{campaign.title}</h3>
          </article>
        ))}
        
        <a className="see-all" href="#">View All Campaign</a>
        <div className="divider" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Support;
