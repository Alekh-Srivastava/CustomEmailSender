import React, { useState } from 'react';

const CSVUploader = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Handle file change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a CSV file to upload.');
      return;
    }

    setUploading(true);

    // Create FormData to send with the POST request
    const formData = new FormData();
    formData.append('file', file);

    // Use fetch API for the form submission
    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (response.ok) {
        alert('File uploaded successfully');
        onUploadSuccess();
      } else {
        alert('Failed to upload the file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg px-6 py-8 bg-slate-800 rounded-lg shadow-2xl animate__animated animate__fadeInUp">
      <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">Upload CSV File</h2>

      {/* Form for File Upload */}
      <form
        onSubmit={handleFormSubmit}
        encType="multipart/form-data"
        className="w-full flex flex-col items-center"
      >
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={handleFileChange}
          required
          className="w-full p-2 mb-4 bg-slate-900 text-slate-200 border border-teal-500 rounded-lg focus:outline-none focus:border-teal-400 transition duration-300"
        />

        {/* Upload Button */}
        <button
          type="submit"
          disabled={uploading}
          className={`w-full py-3 bg-teal-500 text-slate-900 font-semibold rounded-lg hover:bg-teal-600 hover:text-slate-100 transition-colors duration-300 ease-in-out transform hover:scale-105 ${
            uploading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default CSVUploader;
