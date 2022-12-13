import { useRef } from 'react';

function App() {
  const formCar = useRef(null);
  const yearInput = useRef(null);
  const brandInput = useRef(null);
  const modelInput = useRef(null);
  const odometerInput = useRef(null);
  const vinInput = useRef(null);
  const priceInput = useRef(null);
  const mpgInput = useRef(null);
  const cylindersInput = useRef(null);
  const transmissionInput = useRef(null);
  const topSpeedInput = useRef(null);
  const tireSizeInput = useRef(null);
  const accelerationInput = useRef(null);
  const colorInput = useRef(null);

  const uploadCar = (e) => {
    e.preventDefault();

    const car = {
      year: yearInput.current.value,
      brand: brandInput.current.value,
      model: modelInput.current.value,
      odometer: odometerInput.current.value,
      vin: vinInput.current.value,
      price: priceInput.current.value,
      mpg: mpgInput.current.value,
      cylinders: cylindersInput.current.value,
      transmission: transmissionInput.current.value,
      topSpeed: topSpeedInput.current.value,
      tireSize: tireSizeInput.current.value,
      acceleration: accelerationInput.current.value,
      color: colorInput.current.value,
    };

    formCar.current.reset();
  };

  return (
    <div className='app'>
      <form ref={formCar}>
        <div>
          <label htmlFor=''>Year</label>
          <input type='text' ref={yearInput} />
        </div>
        <div>
          <label htmlFor=''>Brand</label>
          <input type='text' ref={brandInput} />
        </div>
        <div>
          <label htmlFor=''>Model</label>
          <input type='text' ref={modelInput} />
        </div>
        <div>
          <label htmlFor=''>Odometer</label>
          <input type='text' ref={odometerInput} />
        </div>
        <div>
          <label htmlFor=''>VIN</label>
          <input type='text' ref={vinInput} />
        </div>
        <div>
          <label htmlFor=''>Price</label>
          <input type='text' ref={priceInput} />
        </div>
        <div>
          <label htmlFor=''>MPG</label>
          <input type='text' ref={mpgInput} />
        </div>
        <div>
          <label htmlFor=''>Cylinders</label>
          <input type='text' ref={cylindersInput} />
        </div>
        <div>
          <label htmlFor=''>Transmission</label>
          <input type='text' ref={transmissionInput} />
        </div>
        <div>
          <label htmlFor=''>Top Speed</label>
          <input type='text' ref={topSpeedInput} />
        </div>
        <div>
          <label htmlFor=''>Tire Size</label>
          <input type='text' ref={tireSizeInput} />
        </div>
        <div>
          <label htmlFor=''>Acceleration</label>
          <input type='text' ref={accelerationInput} />
        </div>
        <div>
          <label htmlFor=''>Color</label>
          <input type='text' ref={colorInput} />
        </div>

        <button onClick={uploadCar}>Upload car</button>
      </form>
    </div>
  );
}

export default App;
