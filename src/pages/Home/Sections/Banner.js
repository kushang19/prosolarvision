import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  // Load stored form data on component mount
  useEffect(() => {
    const savedData = sessionStorage.getItem("designSystemFormData");
    if (savedData) {
      reset(JSON.parse(savedData)); // Pre-fill form with saved data
    }
  }, [reset]);

  // Monitor the banner section visibility
  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("banner");
      const rect = banner.getBoundingClientRect();
      setIsBannerVisible(rect.bottom > 0); // Check if banner is in viewport
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle form submission and calculations
  const onSubmit = (data) => {
    const costPerUnit = 10; // Default cost per unit
    const monthlyBill = parseFloat(data.monthlyBill);
    const electricityProvider = "";

    // Perform calculations
    const monthlyConsumption = monthlyBill / costPerUnit;
    const yearlyConsumption = monthlyConsumption * 12;
    const unitPerDay = yearlyConsumption / 365;
    const systemInKW = unitPerDay / 4;
    const areaRequired = systemInKW * 100;

    // Log calculated values (for debugging, optional)
    console.log("Monthly Consumption Units:", monthlyConsumption);
    console.log("Yearly Consumption:", yearlyConsumption);
    console.log("Unit Per Day:", unitPerDay);
    console.log("System in kW:", systemInKW);
    console.log("Area Required:", areaRequired);

    // Store form data and calculated values in sessionStorage
    const storedData = {
      ...data,
      monthlyConsumption,
      yearlyConsumption,
      unitPerDay,
      systemInKW,
      areaRequired,
      costPerUnit,
      electricityProvider,
    };
    sessionStorage.setItem("designSystemFormData", JSON.stringify(storedData));

    // alert("Form submitted and calculations saved successfully!");
    setIsFormVisible(false); // Hide the form
    navigate("/estimator"); // Navigate to /estimator page
  };

  return (
    <div id="banner" className="banner" style={{ height: "100vh" }}>
      <h1>A Commitment To Innovation & Sustainability</h1>
      <p>
        “Powering Tomorrow, Today: Illuminating Your Path with Solar Energy” <br />
        <strong>Join the Solar Revolution with Solar Solutions!</strong>
      </p>

      {isFormVisible ? (
        <div className="form-container banner-form">
          <h2>Design Your System</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>What's your Pincode?</label>
              <input
                type="text"
                {...register("pincode", {
                  required: "Pincode is required",
                  pattern: { value: /^\d{6}$/, message: "Enter a valid 6-digit pincode" },
                })}
                placeholder="Enter your pincode"
              />
              {errors.pincode && <span className="error">{errors.pincode.message}</span>}
            </div>

            <div className="form-group">
              <label>Average Monthly Bill (₹)</label>
              <input
                type="text"
                {...register("monthlyBill", {
                  required: "Monthly bill is required",
                  validate: (value) => !isNaN(value) || "Enter a valid numeric amount",
                })}
                placeholder="Enter average monthly bill"
              />
              {errors.monthlyBill && <span className="error">{errors.monthlyBill.message}</span>}
            </div>

            <div className="form-group">
              <label>Roof Area (sqft)</label>
              <input
                type="text"
                {...register("roofArea", {
                  required: "Roof area is required",
                  validate: (value) => !isNaN(value) || "Enter a valid numeric value",
                })}
                placeholder="Enter roof area in sqft"
              />
              {errors.roofArea && <span className="error">{errors.roofArea.message}</span>}
            </div>

            <div className="form-group">
              <label>Type</label>
              <select
                {...register("type", { required: "Type is required" })}
              >
                <option value="">Select type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Society">Society</option>
              </select>
              {errors.type && <span className="error">{errors.type.message}</span>}
            </div>

            <button type="submit" className="submit-btn">Design</button>
            <button type="button" className="close-btn" onClick={() => setIsFormVisible(false)}>x</button>
          </form>
        </div>
      ) : (
        <button className="cta-btn" onClick={() => setIsFormVisible(true)}>Design Your System</button>
      )}

      {!isBannerVisible && (
        <div className="sticky-wrapper d-flex">
          <span style={{paddingLeft: "150px"}}>Go Green with Prosolar Vision</span>
          <button className="cta-btn" onClick={() => setIsFormVisible(true)}>Design Your System</button>
        </div>
      )}
    </div>
  );
};

export default Banner;
