import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/random"}>Random Dog Image</Link>
        {/*I had "/random/:id" but this obvs gave me an error. Not sure what this link is supposed to link to as per instructions...*/}
        <Link to={"/random"}>Multiple Random Dog Images </Link>
        <Link to={"/randomBreed"}>Random Breed Image</Link>
      </nav>
    </>
  );
};
