import React, { useEffect, useState } from 'react';
import './Estimator.css';

const Estimator = () => {
  const [formData, setFormData] = useState({
    pincode: '',
    monthlyBill: '',
    roofArea: '',
    type: '',
    electricityProvider: '',
    costPerUnit: 10, // Default cost per unit
  });

  const electricityProviders = [
    { name: 'Adani Electricity', costPerUnit: 10 },
    { name: 'Tata Power', costPerUnit: 9 },
    { name: 'Torrent Power Ltd.', costPerUnit: 11 },
    { name: 'Other', costPerUnit: 12 },
  ];

  const connectionTypes = ['Commercial', 'Residential', 'Society'];

  // Load data from sessionStorage on mount
  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem('designSystemFormData'));
    if (storedData) {
      setFormData((prev) => ({
        ...prev,
        ...storedData,
      }));
    }
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update costPerUnit based on electricity provider
  const handleProviderChange = (e) => {
    const selectedProvider = e.target.value;
    const providerData = electricityProviders.find(
      (provider) => provider.name === selectedProvider
    );
    setFormData((prev) => ({
      ...prev,
      electricityProvider: selectedProvider,
      costPerUnit: providerData ? providerData.costPerUnit : 10,
    }));
  };

  // Perform calculations and store in sessionStorage
  const calculateAndStore = () => {
    const { monthlyBill, costPerUnit } = formData;
    if (!monthlyBill || isNaN(monthlyBill)) {
      // alert('Please enter a valid monthly bill.');
      return;
    }

    const monthlyConsumption = monthlyBill / costPerUnit; // Monthly consumption (units)
    const yearlyConsumption = monthlyConsumption * 12; // Yearly consumption (units)
    const unitPerDay = yearlyConsumption / 365; // Daily consumption (units)
    const systemInKW = unitPerDay / 4; // System size in kW
    const areaRequired = systemInKW * 100; // Area required (sq.ft.)

    const calculatedData = {
      monthlyConsumption,
      yearlyConsumption,
      unitPerDay,
      systemInKW,
      areaRequired,
    };

    // Save calculations to sessionStorage
    sessionStorage.setItem(
      'designSystemFormData',
      JSON.stringify({
        ...formData,
        ...calculatedData,
      })
    );

    // alert('Calculations saved successfully!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAndStore();
  };

  return (
    <div className="estimator-container">
      <h2>Let's design your system</h2>
      <form className="estimator-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="monthlyBill">Average Monthly Electricity Bill (Rs)</label>
          <input
            type="text"
            id="monthlyBill"
            name="monthlyBill"
            value={formData.monthlyBill}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="roofArea">Roof Area (sq.ft.)</label>
          <input
            type="text"
            id="roofArea"
            name="roofArea"
            value={formData.roofArea}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="type">Electricity Connection Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="">Select Connection Type</option>
            {connectionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="electricityProvider">Electricity Provider</label>
          <select
            id="electricityProvider"
            name="electricityProvider"
            value={formData.electricityProvider}
            onChange={handleProviderChange}
          >
            <option value="">Select Provider</option>
            {electricityProviders.map((provider) => (
              <option key={provider.name} value={provider.name}>
                {provider.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="design-button">
          DESIGN AND PRICE
        </button>
      </form>
    </div>
  );
};

export default Estimator;
