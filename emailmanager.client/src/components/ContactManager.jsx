/* eslint-disable no-undef */
import { useState } from 'react';
import axios from 'axios';

const ContactManager = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [scheduledTime, setScheduledTime] = useState('');

    const apiBase = process.env.REACT_APP_API_BASE_URL;

    const sendEmail = async () => {
        try {
            const response = await axios.post(`${apiBase}/send-email`, { name, email });
            alert(response.data.message);
        } catch (error) {
            alert('Error sending email');
        }
    };

    const scheduleEmail = async () => {
        try {
            const response = await axios.post(`${apiBase}/schedule-email`, { name, email, scheduledTime });
            alert(response.data.message);
        } catch (error) {
            alert('Error scheduling email');
        }
    };

    return (
        <div>
            <h1>Contact Manager</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="datetime-local"
                placeholder="Scheduled Time"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
            />
            <button onClick={sendEmail}>Send Email Now</button>
            <button onClick={scheduleEmail}>Schedule Email</button>
        </div>
    );
};

export default ContactManager;
