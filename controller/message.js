const bodyParser = require('body-parser');
const schedule = require('node-schedule');
const Message = require('../models/message');
const error = require('console')



const getMessage = async (req, res) => { 
    try {
        const { message, day, time } = req.body;

        // Validate the input
        if (!message || !day || !time) {
            return res.status(400).json({ error: 'Message, day, and time are required' });
        }

        // Combine day and time into a single Date object
        const scheduledDate = new Date(`${day}T${time}:00`);

        // Schedule the message insertion
        schedule.scheduleJob(scheduledDate, async () => {
            const newMessage = new Message({ message, scheduledDate });
            await newMessage.save();
            console.log('Message saved to database:', message);
        });

        // Send success response
        res.status(200).json({ message: 'Message scheduled successfully' });

    } catch (error) {  // Capture error here
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {getMessage}