import React, {useState} from 'react';
import ColorForm from './components/ColorForm';
import "./bootstrap.min.css"

// state for box arr w/ hook
function BoxGenerator() {
  const [boxes, setBoxes] = useState([]);

  // addBox func adds new color to box arr + update box arr w new color
  const addBox = (color) => {
    setBoxes([...boxes, color]);
  }

  // boxes object
  const boxStyle = {
    display: 'inline-block',
    width: '5rem',
    height: '5rem',
    margin: '1rem'
  };

  return (
    <div className='container'>
      <div className="p-5 my-5 bg-secondary">
        <h1 className='mb-5'>Box Generator</h1>
        {/* render component "ColorForm" w/ addBox func (prop) */}
        <ColorForm addBox={addBox}/>
        <div className='d-flex flex-wrap'>
          {/* map box arr to make render box */}
          {boxes.map((boxColor, index) => (
            <div key={index} style={{...boxStyle, backgroundColor: boxColor}}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoxGenerator;
