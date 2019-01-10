import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <div className="landing">
        <div className="landing__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Explore</span>
            <span className="heading-primary--sub">
              the magical world of books
            </span>
          </h1>

          <Link to={`/app`} className="btn btn--white btn--animated">
            Your Adventure Awaits
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
