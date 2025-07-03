const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


let faqMemory = [];
app.post(`/api/test`,async(req,res)=>{
    res.json({result:"hello"});
});
app.post('/api/search', async (req, res) => {
    const userQuestion = req.body.query.toLowerCase();
    try {
        let faq = faqMemory.find(f => f.question === userQuestion);
        if (faq) {
            faq.timestamp = Date.now();
            return res.json({ result: faq.answer });
        }

        const fastapiRes = await axios.post("API LINK",{userQuestion});

        const generatedAnswer = fastapiRes.data.response;

        if (faqMemory.length >= 4) {
            faqMemory.sort((a, b) => a.timestamp - b.timestamp);
            faqMemory.shift(); 
        }

        faqMemory.push({ question: userQuestion, answer: generatedAnswer, timestamp: Date.now() });
        res.json({ result: generatedAnswer });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error generating content' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});