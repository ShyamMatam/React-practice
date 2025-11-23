import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
//apply the progress after 100ms
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
        //   width: `${progress}%`,
          transform : `translateX( ${animatedProgress-100}%)`,
          color: animatedProgress > 4 ? "white" : "black",
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {progress}%
      </div>
    </div>
  );
};

// export default ProgressBar;

//App.jsx
const Pb = () => {
  const bars = [0, 5, 15, 25, 50, 75, 100];

  return (
    <div>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
};

export default Pb;
