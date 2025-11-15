const Profile = ({data, setData, errors}) => {
    const {name, email, age} = data;

//    const handleChange = (e) => {
//     setData((prevState) =>({ ...prevState, [e.target.name] : e.target.value}))
//    }

 const handleChange = (e, item) => {
    setData((prevState) =>({ ...prevState, [item] : e.target.value}))
   }


  return (
    <div>
    
    <div>
        <label>Name :</label>
        {/* <input type="text" name ={name} onChange={handleChange}/> */}
        <input type="text" value ={name} onChange={(e) => handleChange(e, "name")}/>
        {errors.name && <span className="error">{errors.name}</span>}
    </div>

     <div>
        <label>Email :</label>
        <input type="email" value={email} onChange={(e) => handleChange(e, "email")}/>
    </div>

     <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => handleChange(e, "age")}/>
    </div>
    </div>
  )
}

export default Profile
