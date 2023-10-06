import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors'
import dotenv from 'dotenv';

dotenv.config()

//App Config
const app = express();
const port = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://admin:admin@cluster0.wdlrxh2.mongodb.net/?retryWrites=true&w=majority'

//Middleware
// middleware
const corsOptions = {
    origin: "https://dating-app-client.onrender.com" // frontend URI (ReactJS)
}
app.use(express.json())
app.use(Cors(corsOptions))

//DB Config


//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))

app.post("/dating/cards", async (req, res) => {
    try {
        const dbCard = req.body;
        dbCard.forEach(async (element) => {
            await Cards.create({ ...element });
        });
        res.send("Insert successfully created")
    } catch (exception) {
        res.send(exception.message);
    }

});

app.get('/dating/cards', async (req, res) => {
    try {
        const cards = await Cards.find({});
        res.send(cards)
    } catch (exception) {
        res.send(exception.message);
    }
})

//Listener
app.listen(port, async () => {
    await mongoose.connect(connection_url);
    console.log(`Listening on localhost: ${port}`);
});