import React from "react";

import { bio } from "../../data/bio";

const Bio: React.FC = () => {
  return (
    <section id="bio" className="bio-container">
      <h2 className="bio-header">BIO</h2>
      <div className="bio-content">
        <div className="time-line">

          <div className="text-boxes">
            {bio.companies.map((i) => {
              const fullClassname = `box ${i.size || ""}`;
              return (
                <div className={fullClassname}>
                  <div className="dot"></div>
                  <span className="period">{i.initialPeriod}</span>
                  <a
                    href={i.link}
                    target="_blank"
                    rel="noreferrer"
                    className="company-name"
                  >
                    {i.companyName}
                  </a>
                  <span className="description">{i.description}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bio-description">
          {bio.bioDescription.map((i) => (
            <p>{i}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
