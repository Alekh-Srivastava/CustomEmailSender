// HomePage.jsx
import React, { useState } from 'react';
import CSVUploader from '../components/Csvuploader';
import EmailSender from '../components/emailsender';

const HomePage = () => {
  const [parsedData, setParsedData] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to handle upload success and fetch parsed data
  const handleUploadSuccess = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/get-parsed-data', {
        credentials: 'include',
      });
      const data = await response.json();
      setParsedData(data);
      setUploadSuccess(true);
      alert('Data fetched successfully!');
    } catch (error) {
      console.error('Error fetching parsed data:', error);
      alert('Failed to fetch parsed data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center py-10">
      {/* Header with animation */}
      <h1 className="text-4xl font-extrabold text-center mb-8 animate__animated animate__bounceInDown text-teal-500">
        AI Email Automation App
      </h1>

      {/* CSV Uploader Section */}
      <div className="w-full max-w-lg mb-8 px-6 py-8 bg-slate-800 rounded-lg shadow-2xl animate__animated animate__fadeIn">
        <h2 className="text-center text-2xl font-bold text-teal-400 mb-4">Upload Your CSV File</h2>
        <CSVUploader onUploadSuccess={handleUploadSuccess} />
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex items-center justify-center mb-6 animate__animated animate__fadeIn">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-500"></div>
          <p className="ml-4 text-teal-400 font-semibold">Loading parsed data...</p>
        </div>
      )}

      {/* Display parsed data count and EmailSender component */}
      {uploadSuccess && parsedData.length > 0 ? (
        <div className="w-full max-w-lg px-6 py-8 bg-slate-800 rounded-lg shadow-2xl animate__animated animate__fadeInUp">
          <h2 className="text-center text-2xl font-bold text-teal-400 mb-4">Email Sending Section</h2>
          <p className="text-center text-lg text-teal-200 mb-4">
            Number of entries: <span className="font-bold">{parsedData.length}</span>
          </p>
          <EmailSender parsedData={parsedData} />
        </div>
      ) : (
        !loading && (
          <p className="text-center text-slate-400 mt-4">
            Please upload a CSV file to proceed.
          </p>
        )
      )}

      {/* Footer */}
      <footer className="mt-12 text-center text-slate-400 text-sm">
        <p>Powered by <span className="text-teal-500 font-semibold">AI EmailSender</span></p>
      </footer>
    </div>
  );
};

export default HomePage;
