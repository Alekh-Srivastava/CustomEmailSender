import React, { useState } from 'react';
import axios from 'axios';

const EmailSender = ({ parsedData }) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle sending emails
  const handleSendEmails = async () => {
    if (!message.trim()) {
      alert('Please enter a message before sending emails.');
      return;
    }

    setLoading(true);
    try {
      // Sending email request with axios
      alert(`Sending emails to ${parsedData.length} recipients with your message`);
      await axios.post('http://localhost:3000/api/send-emails', { message });
     
    } catch (error) {
      console.error('Failed to send emails:', error);
      alert('Failed to send emails');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg px-6 py-8 bg-slate-800 rounded-lg shadow-2xl animate__animated animate__fadeInUp">
      <h2 className="text-center text-2xl font-bold text-teal-400 mb-4">Send Emails</h2>

      {/* Textarea for message input */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter Key prompts here..."
        className="w-full h-32 p-4 mb-4 text-slate-200 bg-slate-900 border border-teal-500 rounded-lg focus:outline-none focus:border-teal-400 transition duration-300"
      />

      {/* Send Emails Button */}
      <button
        onClick={handleSendEmails}
        className={`w-full py-3 bg-teal-500 text-slate-900 font-semibold rounded-lg hover:bg-teal-600 hover:text-slate-100 transition-colors duration-300 ease-in-out transform hover:scale-105 ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? 'Sending Emails...' : 'Send Emails'}
      </button>
    </div>
  );
};

export default EmailSender;
