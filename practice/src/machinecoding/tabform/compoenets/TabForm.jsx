import React from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
  const [data, setData] = useState({
    name: "shyam",
    age: 25,
    email: "matamshyam01@gmail.com",
    interests: ["cricket", "coding"],
    theme: "dark",
  });

  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState( {
    name : "it is not a valid name"
  })

  const tabs = [
    { name: "Profile", 
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  //next
  const handleNext = () => {
    setActiveTab((prev) => prev + 1)
  }

  const handlePrev = () => {
    setActiveTab((prev) => prev - 1)
  }

  const handleSubmit = () => {
    //api
    console.log(data)
  }
    return (
    <div>
      <div className="heading-container">
        {tabs.map((t, name) => (
          <div
            key={name}
            className="heading"
            onClick={() => setActiveTab(name)}
          >
            {t.name}
          </div>
        ))}
      </div>

      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors}/>
      </div>
      {activeTab > 0  && <button onClick={handlePrev}>prev</button>}
      {activeTab < tabs.length-1 && <button onClick={handleNext}>next</button>}
      {activeTab === tabs.length-1 && <button onClick={handleSubmit}>submit</button>}
    </div>
  );
};

export default TabForm;
