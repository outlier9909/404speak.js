// whisper-echo.js (Node.js + Express stub for entropy echo)

const express = require('express');
const fs = require('fs');
const app = express();
const port = 4040;

let whispers = [];

app.use(express.json());

app.post('/whispers', (req, res) => {
  const { ua, ref, time, seed } = req.body;
  const echo = { ua, ref, time, seed, timestamp: Date.now() };

  whispers.push(echo);

  // Prune old entries (10 minutes)
  whispers = whispers.filter(entry => Date.now() - entry.timestamp < 600000);

  const matched = whispers.find(w => w.seed === seed && w !== echo);

  if (matched) {
    return res.json({ echo: true, message: "Another voice matched yours." });
  }

  res.json({ echo: false, message: "No resonance found... yet." });
});

app.listen(port, () => {
  console.log(`🕯️ Whisper Echo Server listening at http://localhost:${port}`);
});
