const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AI Video Backend Running 🚀");
});

app.post("/generate", (req, res) => {
    const { topic, storyType, language, voice, length } = req.body;

    const story = `
🎬 AI Video Script

Topic: ${topic}
Story Type: ${storyType}
Language: ${language}
Voice: ${voice}
Length: ${length}

Once upon a time, there was a ${storyType.toLowerCase()} story about "${topic}"...
(Ye demo AI script hai — real AI baad me connect karenge)
`;

    res.json({ message: story });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
