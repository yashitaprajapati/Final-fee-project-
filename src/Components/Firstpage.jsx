import React from "react";

const First =()=>{
    return(
        <>
        <nav id="up">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars" />
          </label>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#menu">MENU</a>
            </li>
            <li>
              <a href="#a">ABOUT</a>
            </li>
            <li>
              <a href="#o">OFFERS</a>
            </li>
            <li>
              <a href="#c">CONTACT</a>
            </li>
          </ul>
        </nav>
      </>
      
    )
}
export default First