import React, { useEffect, useState } from "react";
import roof from "../../assets/images/roof.png";
import solorEnergy from "../../assets/images/solar-energy.png";
import "./Estimator.css";

const Estimator = () => {
  const [formData, setFormData] = useState({
    pincode: "",
    monthlyBill: "",
    roofArea: "",
    type: "",
    electricityProvider: "",
    costPerUnit: 10,
  });

  const [calculatedData, setCalculatedData] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null); // Store location data
  const [pincodeError, setPincodeError] = useState(""); // Store pincode validation error

  const electricityProviders = [
    { name: "Adani Electricity", costPerUnit: 10 },
    { name: "Tata Power", costPerUnit: 9 },
    { name: "Torrent Power Ltd.", costPerUnit: 11 },
    { name: "Other", costPerUnit: 12 },
  ];

  const connectionTypes = ["Commercial", "Residential", "Society"];

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      alert("Please enter a valid monthly bill.");
      return;
    }

    const monthlyConsumption = monthlyBill / costPerUnit;
    const yearlyConsumption = monthlyConsumption * 12;
    const unitPerDay = yearlyConsumption / 365;
    const systemInKW = unitPerDay / 4;
    const areaRequired = systemInKW * 100;

    const calculatedData = {
      monthlyConsumption,
      yearlyConsumption,
      unitPerDay,
      systemInKW,
      areaRequired,
    };

    sessionStorage.setItem(
      "designSystemFormData",
      JSON.stringify({ ...formData, ...calculatedData })
    );

    setCalculatedData({
      systemInKW,
      areaRequired,
      solarUnits: yearlyConsumption / 12,
      monthlySavings: monthlyBill,
    });
  };

  const fetchLocationByPincode = async (pincode) => {
    if (!/^\d{6}$/.test(pincode)) {
      setPincodeError("Invalid pincode! Please enter a 6-digit number.");
      setLocationInfo(null);
      return;
    }

    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await response.json();

      if (data[0].Status === "Success") {
        const locationDetails = data[0].PostOffice[0];
        setLocationInfo({
          district: locationDetails.District,
          state: locationDetails.State,
          country: "India",
          area: locationDetails.Name,
        });
        setPincodeError(""); // Clear error if valid
      } else {
        setLocationInfo(null);
        setPincodeError("Pincode not found! Please check the entered pincode.");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      setLocationInfo(null);
      setPincodeError("Error fetching location. Please try again later.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAndStore();
    fetchLocationByPincode(formData.pincode); // Fetch location when form is submitted
  };

  // Load data from sessionStorage on mount
  useEffect(() => {
    const storedData = JSON.parse(
      sessionStorage.getItem("designSystemFormData")
    );
    if (storedData) {
      setFormData((prev) => ({ ...prev, ...storedData }));
      setCalculatedData({
        systemInKW: storedData.systemInKW,
        areaRequired: storedData.areaRequired,
        solarUnits: storedData.yearlyConsumption / 12,
        monthlySavings: storedData.monthlyBill, // Replace with savings formula if needed
      });
      fetchLocationByPincode(storedData.pincode); // Fetch location when form is submitted
    }
  }, []);

  return (
    <div className="estimator-container">
      <div className="estimator-top">
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
          <label htmlFor="monthlyBill">
            Average Monthly Electricity Bill (Rs)
          </label>
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
      <div className="estimator-bottom">
      {(calculatedData && locationInfo) ?  (
        <div className="result-container">
          <h3>{calculatedData.systemInKW.toFixed(1)} kilowatt (kW)</h3>
          <p><strong>Location: </strong><span>{locationInfo?.state}</span>, <span>{locationInfo?.district}</span>, <span>{locationInfo?.area}</span></p>
          <div className="result-grid">
            {/* <div className="result-item">
              <span>₹{calculatedData.monthlySavings}</span>
              <p>Monthly Savings</p>
            </div> */}
            <div className="result-item">
              <div className="image-wrap-icon">
              <img src={roof} width={40} height={40}/>
              </div>
              <span>{calculatedData.areaRequired.toFixed(0)} sqft</span>
              <p>Roof area required</p>
            </div>
            <div className="result-item">
            <div className="image-wrap-icon">
              <img src={solorEnergy} width={40} height={40}/>
              </div>
              <span>{calculatedData.solarUnits.toFixed(0)} kWh</span>
              <p>Solar units per month</p>
            </div>
          </div>
          <p>
            <strong>Sizing criteria:</strong> Congrats! A{" "}
            {calculatedData.systemInKW.toFixed(1)} kW system will completely
            offset your electricity consumption.
          </p>
        </div>
      ) : <p>loading...</p>}
      </div>
    </div>
  );
};

export default Estimator;
