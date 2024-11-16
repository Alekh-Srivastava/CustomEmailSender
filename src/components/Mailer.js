import axios from 'axios';

export const sendEmails = async (parsedData) => {
  try {
    for (const entry of parsedData) {
      const email = entry.email; // Assuming the CSV has an 'email' column
      const name = entry.name || 'User';

      if (!email) continue;

      const mailData = {
        email,
        subject: 'Automated Email from CSV Data',
        message: `Hello ${name}, this is an automated email.`,
      };

      // Send email via your backend API
      await axios.post('http://localhost:3000/send-email', mailData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      console.log(`Email sent to ${email}`);
    }

    alert('All emails sent successfully!');
  } catch (error) {
    console.error('Failed to send emails:', error);
    alert('Failed to send some emails');
  }
};
