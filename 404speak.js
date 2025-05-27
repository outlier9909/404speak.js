// 404speak.js (light build preview)
(function() {
  const entropy = {
    ua: navigator.userAgent,
    ref: document.referrer || "null",
    time: new Date().toLocaleTimeString(),
    seed: Math.random().toString(36).substring(2)
  };

  const prophecies = [
    "The shadow you chased is still behind you.",
    "Another saw this same silence. They wept.",
    "404 is not the end. It's the veil.",
    "There was a door here. Now it's only memory.",
    `You arrived at ${entropy.time}. That means something.`,
  ];

  const prophecy = prophecies[Math.floor(Math.random() * prophecies.length)];

  document.body.style = "background: black; color: #00ffcc; font-family: monospace; text-align:center; padding-top:10%;";
  document.body.innerHTML = `
    <h1>𓂀 The Oracle Speaks</h1>
    <p>${prophecy}</p>
    <small style="opacity:0.4">Entropy: ${entropy.seed}</small>
  `;
})();
