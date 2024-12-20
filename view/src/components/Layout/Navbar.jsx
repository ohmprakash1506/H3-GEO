import React, { useState} from 'react'

const Navbar = ({ onInputChange }) => {
    const [inputs, setInputs] = useState({
        latitude: '',
        longitude: '',
        resolution: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedInputs = { ...inputs, [name]: value };
        setInputs(updatedInputs);
        onInputChange(updatedInputs); // Pass the updated values to the parent
      };
    return (
        <nav className="bg-gray-700 text-white py-4 px-6">
            <form className="flex items-center space-x-4">
                {/*lat input*/}
                <div>
                    <label htmlFor="latitude" className="block text-sm">Latitude</label>
                    <input
                        type="number"
                        id="latitude"
                        name="latitude"
                        value={inputs.latitude}
                        onChange={handleChange}
                        placeholder="Enter latitude"
                        className="w-32 px-2 py-1 rounded text-gray-900"
                    />
                </div>

                {/* lng Input */}
                <div>
                    <label htmlFor="longitude" className="block text-sm">Longitude:</label>
                    <input
                        type="number"
                        id="longitude"
                        name="longitude"
                        value={inputs.longitude}
                        onChange={handleChange}
                        placeholder="Enter longitude"
                        className="w-32 px-2 py-1 rounded text-gray-900"
                    />
                </div>

                {/* Resolution Input */}
                <div>
                    <label htmlFor="resolution" className="block text-sm">Resolution:</label>
                    <input
                        type="number"
                        id="resolution"
                        name="resolution"
                        value={inputs.resolution}
                        onChange={handleChange}
                        placeholder="Enter resolution"
                        className="w-32 px-2 py-1 rounded text-gray-900"
                    />
                </div>
            </form>
        </nav>
    )
}

export default Navbar