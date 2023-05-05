import React, {useState} from 'react';
import "../bootstrap.min.css"

// passes addBox as prop
function ColorForm({addBox}) {
  const [color, setColor] = useState(""); //hook


  const handleSubmit = (e) => {
    e.preventDefault();  // prevents default reset
    addBox(color); // calls addBox passing in color input value
    setColor(''); // reset the "add box" btn to empty "" after clicking
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='form-label'>Color:</label>
        {/* event handler to update color state */}
        <input className='form-control border border-dark w-50' type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
        <button className="btn btn-dark my-3" type='submit'>Add Box</button>
      </div>
    </form>
  );
}

export default ColorForm;