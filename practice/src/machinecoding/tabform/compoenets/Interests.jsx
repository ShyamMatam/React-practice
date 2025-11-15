const Interests = ({ data, setData }) => {
  const { interests } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="cricket"
            checked={interests.includes("cricket")}
            onChange={handleChange}
          />
          cricket
        </label>
      </div>

       <div>
        <label>
          <input
            type="checkbox"
            name="js"
            checked={interests.includes("js")}
            onChange={handleChange}
          />
          cricket
        </label>
      </div>
    </div>
  );
};

export default Interests;
