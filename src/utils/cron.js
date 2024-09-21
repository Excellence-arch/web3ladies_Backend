const cron = require('node-cron');

// Schedule a task to run every minute
cron.schedule('*/10 * * * *', () => {
    
  console.log('Running a task every minute');
});