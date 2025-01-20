import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Popup.css";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // Enables real-time validation
  });

  // Disable background scroll when the popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Monitor the banner section visibility
  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("banner");
      const rect = banner.getBoundingClientRect();
      setIsBannerVisible(rect.bottom > 0); // If banner is in viewport
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    setIsOpen(false); // Close the popup after submission
  };

  return (
    <div>
      {/* Popup */}
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <h2>Design Your System</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>What's your Pincode?</label>
                <input
                  type="text"
                  {...register("pincode", {
                    required: "Pincode is required",
                    pattern: {
                      value: /^\d{6}$/,
                      message: "Enter a valid 6-digit pincode",
                    },
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
                    validate: (value) =>
                      !isNaN(value) || "Enter a valid numeric amount",
                  })}
                  placeholder="Enter average monthly bill"
                />
                {errors.monthlyBill && (
                  <span className="error">{errors.monthlyBill.message}</span>
                )}
              </div>
              <div className="form-group">
                <label>Roof Area (sqft)</label>
                <input
                  type="text"
                  {...register("roofArea", {
                    required: "Roof area is required",
                    validate: (value) =>
                      !isNaN(value) || "Enter a valid numeric value",
                  })}
                  placeholder="Enter roof area in sqft"
                />
                {errors.roofArea && (
                  <span className="error">{errors.roofArea.message}</span>
                )}
              </div>
              <div className="form-group">
                <label>Type</label>
                <select
                  {...register("type", {
                    required: "Type is required",
                  })}
                >
                  <option value="">Select type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Society">Society</option>
                </select>
                {errors.type && <span className="error">{errors.type.message}</span>}
              </div>
              <button type="submit" className="submit-btn">
                Design
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Sticky Button */}
      {!isBannerVisible && (
        <div className="sticky-wrapper">
        <button className="cta-btn" onClick={() => setIsOpen(true)}>
          Design Your System
        </button>
        </div>
      )}
    </div>
  );
};

export default Popup;
