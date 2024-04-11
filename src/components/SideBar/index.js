import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./sidebar.css";

function Sidebar() {
  const [isActive, setActive] = useState(false);
  const onChangeLink = () => {
    setActive(!isActive);
  };
  return (
    <div className="sidebar">
      <div>
        <h2 className="ai-heading">character.ai</h2>
        <ul>
          <li className="create">
            <NavLink to="/create" className={isActive ? "active" : ""}>
              <button className="plus-btn">
                <div>
                  <FiPlus className="puls-icon" />
                </div>{" "}
                <div>
                  <p className="create">Create</p>
                </div>
              </button>
            </NavLink>
          </li>
          <li className="hower">
            <NavLink
              to="/discovery"
              className={isActive ? "active" : "discover"}
            >
              <div className="flex-row">
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1214683294/vector/binoculars-line-icon-with-editable-stroke-and-pixel-perfect.jpg?s=612x612&w=0&k=20&c=GYGCsooGRXtoSNCVrWCJEg6cDvTN7ehX4nRl19zQplQ="
                    alt="Profile"
                    className="sidebar-imgs"
                  />
                </div>
                <div className="route-name">Discovery</div>
              </div>
            </NavLink>
          </li>
          <h3 className="margin-left">Chats</h3>
          <li className="hower">
            <NavLink
              to="/newcharecter"
              activeClassName="active-link"
              ClassName={isActive ? "active" : ""}
            >
              <div className="flex-row">
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1312257273/photo/compass-sitting-over-metallic-dark-blue-background.jpg?s=612x612&w=0&k=20&c=InwSQjqC5lXpodDC6dfQbGOY7flchbvjNlsmpeFfQqE="
                    alt="Profile"
                    className="sidebar-imgs"
                  />
                </div>
                <div className="route-name">New Character</div>
              </div>
            </NavLink>
          </li>
          <p className="margin-left">Today</p>
          <li className="hower">
            <NavLink
              to="/comingsoon"
              activeClassName="active-link"
              ClassName={isActive ? "active" : ""}
            >
              <div className="flex-row">
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1413928235/vector/portrait-illustration-of-a-korean-idol-with-permed-black-hair-illuminated-by-light-making-a.jpg?s=612x612&w=0&k=20&c=P13NGUPjy0pRJG0BMS1bT9i8at3aBqyTFctJ_uXCdQ4="
                    alt="Profile"
                    className="sidebar-imgs"
                  />
                </div>
                <div className="route-name">Gojo Satoru</div>
              </div>
            </NavLink>
          </li>
          <li className="hower">
            <NavLink to="/comingsoon" activeClassName="active-link">
              <div className="flex-row">
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_640.jpg"
                    alt="Profile"
                    className="sidebar-imgs"
                  />
                </div>
                <div className="route-name">Creative Helper</div>
              </div>
            </NavLink>
          </li>
          <li className="hower">
            <NavLink to="/comingsoon" activeClassName="active-link">
              <div className="flex-row">
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1133647182/photo/friends-resting-beside-camp-campfire-under-night-starry-sky.jpg?s=612x612&w=0&k=20&c=8pkvdXQXChJpYD_JBNXw7AsqQ4axSfi9jrZ-o6JVlqY="
                    alt="Profile"
                    className="sidebar-imgs"
                  />
                </div>
                <div className="route-name">Anirudh Vishwanathan</div>
              </div>
            </NavLink>
          </li>
          <li className="hower">
            <NavLink to="/comingsoon" activeClassName="active-link">
              <div className="flex-row">
                <div>
                  <img
                    src="https://i.pinimg.com/236x/7a/d4/6e/7ad46ee527d668f2442f1dbec5cc1abf.jpg"
                    alt="Profile"
                    className="sidebar-imgs"
                  />
                </div>
                <div className="route-name">Arjuna</div>
              </div>
            </NavLink>
          </li>
          <li className="hower">
            <NavLink to="/hyperglot" activeClassName="active-link">
              <div className="flex-row">
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_640.jpg"
                    alt="Profile"
                    className="sidebar-imgs"
                  />
                </div>
                <div className="route-name">HyperGlot</div>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <hr />
        <div className="margin-left">
          <button className="try-btn">
            Try c.ai<sup>*</sup>
          </button>
          <div className="flex-row">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2017/02/09/11/46/alphabet-2051722_640.png"
                alt="Profile"
                className="sidebar-imgs"
              />
            </div>
            <div className="route-name anil">Anilmatcha</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
