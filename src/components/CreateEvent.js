import { Dropdown } from "antd";
import DropdownButton from "antd/es/dropdown/dropdown-button";
import React, { useState } from "react";
import { GiCoffeeCup, GiHotMeal } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { FaBabyCarriage } from "react-icons/fa";
import { MdPark } from "react-icons/md";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const CreateEvent = () => {
 const [dropdown, setDropdown] = useState(false);
  return (
    <div className="CreatePgcontainer">
      <div className="CreatePgtitle">
        <h1>Create Event</h1>
      </div>
      <div>
        <label> Event Title :</label>
        <div>
          <input placeholder="Enter your event title"></input>
        </div>
      </div>

      <div>
        <button onClick={() => setDropdown((prev) => !prev)}>
          Event Categories
         
        </button>
        {dropdown && <div className="list">
            <li> <GiHotMeal/>  Resturant </li>
            <li><GiCoffeeCup />  Coffe </li>
            <li><MdPark/>  Park </li>
            <li><BiCameraMovie />  Cinema </li>
            <li><FaBabyCarriage/>  Soft Play</li>
        </div>}
        


      </div>
    </div>
  );
};

export default CreateEvent;