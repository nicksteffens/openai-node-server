/* eslint-disable no-undef */

require('dotenv').config();
const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
const PORT = 6666;

app.use(express.json());

app.post('/auto-tag', async (req, res) => {
  try {
    const { text } = req.body;

    // Update the prompt to ask OpenAI to create tags
    const prompt = `Create tags for the following text: "${text}"\n\nTags:`;

    // Make the API call to OpenAI
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['\n'],
    });
    // Extract the generated text from the OpenAI response
    const generatedText = response.data.choices[0].text.trim();

    // Return the generated text as the response to the client
    res.json({ result: generatedText });
  } catch (error) {
    // Handle any errors that occur during the forwarding process
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
