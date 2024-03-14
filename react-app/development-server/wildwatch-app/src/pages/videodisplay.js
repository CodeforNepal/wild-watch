import { HiOutlineExclamationCircle } from "react-icons/hi";

import React, { useState, useEffect } from "react";

const VideoStream = () => {
  const [outputData, setOutputData] = useState([]);
  const [confidenceThreshold, setConfidenceThreshold] = useState(0.5);
  const [scaleFactor, setScaleFactor] = useState(1.0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("http://localhost:5000/output_data");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Received data:", data);
        setOutputData(data);
      } catch (error) {
        console.error("Error fetching output data:", error);
        setError("Error fetching data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    const interval = setInterval(() => {
      if (!isPaused) {
        fetchData();
      }
    }, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isPaused]);

  const handleParameterChange = (parameter, value) => {
    if (parameter === "confidenceThreshold") {
      setConfidenceThreshold(value);
    } else if (parameter === "scaleFactor") {
      setScaleFactor(value);
    }
  };

  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  return (
    <div className="container mx-auto mb-5" id="upload">
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-3xl lg:text-6xl font-medium lg:font-extrabold">
          <span className="relative text-6xl before:content-['Test'] before:text-accent before:opacity-40 before:-top-1 before:hidden before:lg:block z-0"></span>
          <span className="lg:absolute relative w-[300px] z-10 text-2xl  text-[#333333] text-center ml-[-40px]">
            Model Test
          </span>
        </h2>
        <p className="subtitle lg:mt-14 mt-8 text-center w-[60%] text-[var(--sub-heading)]">
          Welcome to WildWatch! To test the model, set up the environment, start
          the Flask server, and access the video feed endpoint. Observe the
          output displayed, adjust parameters as needed, and experiment with
          different scenarios. Feel free to connect with our members for
          discussions or inquiries. Happy testing!
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-row-2 gap-4 p-8 bg-gray-100 rounded-md shadow-md mx-[10%]">
        {/* Video Feed Section */}
        <div className="bg-white p-4 rounded-md mb-4">
          <h2 className="text-xl font-bold mb-4">Video Feed</h2>
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              {/* Loading Spinner */}
              <div className="loader"></div>
            </div>
          ) : (
            <>
              <img
                src={`http://localhost:5000/video_feed`}
                alt="Video"
                className="w-full h-auto rounded-md shadow-md"
              />
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Confidence Threshold
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={confidenceThreshold}
                  onChange={(e) =>
                    handleParameterChange(
                      "confidenceThreshold",
                      parseFloat(e.target.value)
                    )
                  }
                  className="w-full mt-2 range-input"
                />
                <span className="text-gray-700">
                  {confidenceThreshold.toFixed(2)}
                </span>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Scale Factor
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={scaleFactor}
                  onChange={(e) =>
                    handleParameterChange(
                      "scaleFactor",
                      parseFloat(e.target.value)
                    )
                  }
                  className="w-full mt-2 range-input"
                />
                <span className="text-gray-700">{scaleFactor.toFixed(1)}</span>
              </div>
              <div className="mt-4">
                <button
                  onClick={togglePause}
                  className="bg-[#333333] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                >
                  {isPaused ? "Resume" : "Pause"}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Output Section */}
        <div className="bg-white p-4 rounded-md mb-4">
          <h2 className="text-xl font-bold mb-4">Output</h2>
          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-200 w-1/2 mb-2"></div>
              <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
            </div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul>
              {outputData.map((animal, index) => (
                <li key={index} className="red-background animate-blink">
                  <HiOutlineExclamationCircle className="text-red-500 inline-block align-middle mr-2" />{" "}
                  {animal}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoStream;
