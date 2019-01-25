import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/random"}>Random Dog Image</Link>
        <Link to={"/randomBreed"}>Random Breed Image</Link>
        <Link to={"/favorites"}>Favorite Images</Link>
      </nav>
    </>
  );
};
