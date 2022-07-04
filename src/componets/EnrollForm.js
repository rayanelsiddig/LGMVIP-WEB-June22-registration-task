import React, { useState } from "react";

export default function EnrollForm({ addNewStudent }) {
  const [stdInfo, setStdInfo] = useState({
    stdName: "",
    stdEmail: "",
    stdWebsite: "",
    image: "",
    gender: "",
    HTML: "",
    CSS: "",
    JAVASCRIPT: ""
  });
  const changeInput = (e) => {

    setStdInfo({ ...stdInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewStudent({
      id: Math.floor(Math.random() * 1000),
      stdInfo: stdInfo,
    });
    setStdInfo({
      stdName: "",
      stdEmail: "",
      stdWebsite: "",
      image: "",
      gender:"",
      HTML:"",
      CSS:"",
      JAVASCRIPT:""
    });
  }
  const handleReset=(e)=>{
    e.preventDefault();
    setStdInfo({
      stdName: "",
      stdEmail: "",
      stdWebsite: "",
      image: "",
      gender:"",
      HTML:"",
      CSS:"",
      JAVASCRIPT:""
    });
  }
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label className="mb-3"> Name</label>
            <input
              type="text"
              onChange={changeInput}
              name="stdName"
              className="form-control w-75 mb-3"
              value={stdInfo.stdName}
            />
          </div>
          <div className="form-group">
            <label className="mb-3"> Email</label>

            <input
              type="email"
              onChange={changeInput}
              name="stdEmail"
              className="form-control w-75 mb-3"
              value={stdInfo.stdEmail}
            />
          </div>

          <div className="form-group">
            <label className="mb-3"> Website</label>

            <input
              type="url"
              onChange={changeInput}
              name="stdWebsite"
              className="form-control w-75 mb-3"
              value={stdInfo.stdWebsite}
            />
          </div>
          <div className="form-group">
            <label className="mb-3"> Image Link</label>

            <input
              type="url"
              onChange={changeInput}
              name="image"
              className="form-control w-75 mb-3"
              value={stdInfo.image}
            />
          </div>

          <div className="form-group">
            <label className="mb-3">Gender:</label>
            <label className="m-3">
              <input
                type="radio"
                onChange={changeInput}
                name="gender"
                className="m-1"
                value="Male"
                checked={stdInfo.gender === 'Male'}
              />
              Male
            </label>
            <label className="m-3">
          
              <input
                type="radio"
                onChange={changeInput}
                name="gender"
                className="m-1"
                value="Female"
                checked={stdInfo.gender === 'Female'}
              />
              Female
            </label>
          </div>

          <div className="form-group">
            <label className="mb-3">Skills:</label>
            <label className="m-3">
              <input
                type="checkbox"
                onChange={changeInput}
                class="form-check-input m-1"
                name="HTML"
                value="HTML"
                checked={stdInfo.HTML === 'HTML'}
              />
              HTML
            </label>
            <label className="m-3">
              <input
                type="checkbox"
                onChange={changeInput}
                class="form-check-input m-1"
                name="CSS"
                value="CSS"
                checked={stdInfo.CSS === 'CSS'}

              />
              CSS
            </label>

            {/* <div class="form-check"> */}

            <label className="m-3">
              <input
                type="checkbox"
                onChange={changeInput}
                class="form-check-input m-1"
                name="JAVASCRIPT"
                value="JAVASCRIPT"
                checked={stdInfo.JAVASCRIPT === 'JAVASCRIPT'}
              />
              JAVASCRIPT
            </label>
            {/* </div> */}
          </div>

          <button
            className="btn btn-success "
            onClick={handleSubmit}
            type="submit"
          >
            Enroll
          </button>
          <button
            className="btn btn-danger m-5"
            onClick={handleReset}
        
          >
           Reset
          </button>
        </form>
      </div>
    </div>
  );
}
