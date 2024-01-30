import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksA = links.map((item) => {
                                       return <a key={item} href= {"#"+item}>{item}</a>
                                      })

  return <nav>{
    /* display an <a> tag for each link here */
    linksA
  }</nav>;
}

export default NavBar;
