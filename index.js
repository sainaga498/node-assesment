// app.js
const express = require('express');
const router = require('./route');
const bodyParser = require('body-parser');
 const mongoose = require('./db'); // Import the connection file
// const User = require('./models/user'); // Import the User model
const os = require('os');
const osUtils = require('os-utils');
const { exec } = require('child_process');
const app = express();
app.use(router);


const port = process.env.PORT || 7007;

 app.use(bodyParser.json());

// Function to restart the server
const restartServer = () => {
  console.log('Restarting server due to high CPU usage...');
  // Use nodemon  to restart the server
  // If using nodemon, you can trigger a restart by exiting the process:
  process.exit(1);

};
// Function to check CPU usage
const checkCpuUsage = () => {
  osUtils.cpuUsage((usage) => {
    const usagePercent = usage * 100;
    console.log(`CPU Usage: ${usagePercent.toFixed(2)}%`);

    if (usagePercent > 70) {
      restartServer();
    }
  });
};

// Set interval to check CPU usage every 10 seconds
setInterval(checkCpuUsage, 10000);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
