import React from "react";

// Import

export default function MostPicked(props) {
  return (
    <section className="container">
      <h4 className="mb-3">Most Picked</h4>
      <div className="row">
        <div className="col4">
          <div className="card h-100">Card 1</div>
        </div>
        <div className="col-8">
          <div className="row mb-3">
            <div className="col-6">Card 2</div>
            <div className="col-6">Card 3</div>
          </div>
          <div className="row">
            <div className="col-6">Card 4</div>
            <div className="col-6">Card 5</div>
          </div>
        </div>
      </div>
    </section>
  );
}
