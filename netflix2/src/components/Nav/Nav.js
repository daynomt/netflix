import React, { useEffect, useState } from "react";
import "./nav.css";
function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="netflixlogo"
        src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
        alt=""
      />
      <img
        className="avatarLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </div>
  );
}

export default Nav;
