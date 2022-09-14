import { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';

import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import './Testimonials.css';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const handleLeftArrow = () => {
    selected === 0
      ? setSelected(tLength - 1)
      : setSelected((prevState) => prevState - 1)
  }

  const handleRightArrow = () => {
    selected === tLength - 1
      ? setSelected(0)
      : setSelected((prevState) => prevState + 1)
  }

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What they say</span>
        <span>About us</span>
        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span style={{ color: 'var(--orange)' }}>
            {testimonialsData[selected].name}
          </span>
          {' '} - {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
          <img
            onClick={handleLeftArrow}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={handleRightArrow}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
