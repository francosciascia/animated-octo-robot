import React from 'react';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container testimonial-grid">
        <div className="testimonial-photo" role="img" aria-label="Mustafa Kamal"></div>
        <div className="testimonial-copy raised fit">
          <p>
            "We're very happy that the challenge went well, and we're grateful that we have a partner 
            in Charity Challenge whom we could trust to take the best possible care of our supporters."
          </p>
          <div className="author">Mustafa Kamal</div>
          <div className="author-role">CEO, Taqfia</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
