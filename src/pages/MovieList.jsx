import React from "react";

import Card from "../components/Card";

function MovieList() {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          <Card />
        </div>
      </section>
    </main>
  );
}

export default MovieList;
