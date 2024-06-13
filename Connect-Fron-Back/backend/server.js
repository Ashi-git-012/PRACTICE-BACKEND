// require('dotenv').config()
import express from 'express'

const app = express();
const port = process.env.PORT || 8000;

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
          "id": 1,
          "title": "Why don't scientists trust atoms?",
          "content": "Because they make up everything!"
        },
        {
          "id": 2,
          "title": "How do you organize a space party?",
          "content": "You planet!"
        },
        {
          "id": 3,
          "title": "Why don't skeletons fight each other?",
          "content": "They don't have the guts."
        },
        {
          "id": 4,
          "title": "What do you call fake spaghetti?",
          "content": "An impasta!"
        },
        {
          "id": 5,
          "title": "Why was the math book sad?",
          "content": "Because it had too many problems."
        },
        {
          "id": 6,
          "title": "What do you call cheese that isn't yours?",
          "content": "Nacho cheese."
        },
        {
          "id": 7,
          "title": "How do you make a tissue dance?",
          "content": "You put a little boogie in it."
        },
        {
          "id": 8,
          "title": "Why don't some couples go to the gym?",
          "content": "Because some relationships don't work out."
        },
        {
          "id": 9,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field."
        },
        {
          "id": 10,
          "title": "What do you call an alligator in a vest?",
          "content": "An investigator."
        }
      ]
    res.send(jokes)
})
app.listen(port, ()=> {
    console.log(`Running on port ${port}`);
})