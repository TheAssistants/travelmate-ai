# travelmate-ai

An AI-powered travel planning tool.

## Backend Setup

The backend uses Node.js with Express. Navigate to the `backend` folder and install dependencies:

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file in `backend` with the following variables:

- `OPENAI_API_KEY` – API key for OpenAI (required if enabling GPT itinerary generation).
- `PORT` – Port number for the server (defaults to `3001`).

### Running the Server

Start the server in development mode using nodemon:

```bash
npm run dev
```

Or run it directly:

```bash
npm start
```

The server exposes a POST `/api/itinerary` endpoint that accepts JSON with
`destination`, `dates`, `budget`, and `preferences` and returns a mock itinerary.

