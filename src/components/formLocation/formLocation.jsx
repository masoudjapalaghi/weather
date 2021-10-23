import React from "react";

const FormLocation = ({ place, setPlace, handleGetWeather }) => {
  return (
    <form
      className="form_place"
      onSubmit={(e) => {
        e.preventDefault();
        handleGetWeather();
      }}
    >
      <div className="input-group">
        <label>
          <input
            type="text"
            placeholder="شهر مورد نظر را وارد کنید."
            onChange={(e) => setPlace(e.target.value)}
            value={place}
          />
        </label>
        <button className="unit" type="button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default FormLocation;
