import React from "react";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router";
import Button from "../components/Button";
import useTitle from "../hooks/useTitle";

function PageNotFound({ title = "" }) {
  useTitle(title);
  return (
    <div className="App dark:bg-slate-800">
      <main>
        <section className="flex flex-col justify-center px-2">
          <div className="flex flex-col items-center my-4">
            <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
              404, Oops!
            </p>
            <div className="max-w-lg">
              <img
                className="rounded"
                src={PageNotFoundImage}
                alt="404 Page not found"
              />
            </div>
          </div>
          <div className="justify-center flex my-4">
            <Link to="/">
              <Button>Back To Sinima</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PageNotFound;
