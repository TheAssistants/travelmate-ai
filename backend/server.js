import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// POST /api/itinerary
// Expected input JSON: { destination, dates, budget, preferences }
app.post('/api/itinerary', (req, res) => {
  const { destination, dates, budget, preferences } = req.body;

  // TODO: Validate input as needed

  // Here you would call OpenAI GPT or any other service to generate
  // an itinerary based on the provided parameters.
  // Example: const itinerary = await openai.generateItinerary(...);

  // For now, return a mock itinerary.
  const itinerary = {
    destination,
    dates,
    budget,
    preferences,
    days: [
      { day: 1, activities: ['Visit local museum', 'Lunch at cafe'] },
      { day: 2, activities: ['City tour', 'Dinner cruise'] }
    ]
  };

  res.json(itinerary);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
