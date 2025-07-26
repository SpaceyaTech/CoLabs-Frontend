import React from "react";

interface InfoBoxProps {
  title: string; // Define the title prop
  width?: string; // Optional width prop for customization
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, width = "16rem" }) => {
  return (
    <div
      className="bg-gray-800 text-white rounded-lg shadow-md p-6 h-40 flex flex-col justify-between hover:scale-105 transform transition-transform"
      style={{
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        margin: "20px",
        width, // Apply dynamic width
        height: '150px'
      }}
    >
      {/* Title */}
      <div
        className="text-lg font-bold text-center"
        style={{ textAlign: "center", margin: "10px" }}
      >
        {title}
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between text-sm">
          <span>Metric 1:</span>
          <span className="font-medium text-green-400">123</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Metric 2:</span>
          <span className="font-medium text-red-400">45%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Metric 3:</span>
          <span className="font-medium text-yellow-400">12</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
