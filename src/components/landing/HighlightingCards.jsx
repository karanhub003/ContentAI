import React from "react";

export default function HighlightingCards() {
  return (
    <div className="HighlightingCardsContainer">
      <div className="highlightingCardWrapper">
        <div className="card">
          <div><i class="fa-solid fa-bolt-lightning"></i></div>
          <div className="info">
            <h3>AI-Powered</h3>
            <p>Create high-quality content in seconds.</p>
          </div>
        </div>
        <div className="card">
          <div><i class="fa-regular fa-calendar"></i></div>
          <div className="info">
            <h3>Plan & Schedule</h3>
            <p>Organize and schedule content effortlessly.</p>
          </div>
        </div>
        <div className="card">
          <div><i class="fa-solid fa-chart-simple"></i></div>
          <div className="info">
            <h3>Analyze & Optimize</h3>
            <p>Track performance and improve results.</p>
          </div>
        </div>
        <div className="card">
          <div><i class="fa-solid fa-user-group"></i></div>
          <div className="info">
            <h3>Team Collaboration</h3>
            <p>Work together and scale your content</p>
          </div>
        </div>
      </div>
    </div>
  );
}
