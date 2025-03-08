import express from 'express';
import { Request, Response } from 'express';

//Set up express router.
const router = express.Router();

//Obtain a URL from the CATAAS API of an image of a random cat and send it to the client.
router.get('/random-cat-image', async(_req: Request, res: Response) => {
    try {
        const response = await fetch('http://cataas.com/cat?json=true');
        const data = await response.json();
        const imageUrl = `${data.url}`

        res.send(imageUrl);

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});


export {router as catRouter};