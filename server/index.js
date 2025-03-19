const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// API endpoint to fetch GA data
app.get('/api/analytics', async (req, res) => {
    // Fetch data from Google Analytics API (pseudo-code)
    const analyticsData = await fetchAnalyticsData();
    res.json(analyticsData);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });

// Mock function to fetch GA data
async function fetchAnalyticsData() {
    return {
        visitors: 1000,
        bounceRate: '30%',
        topPages: ['/', '/services', '/blog']
    };
}