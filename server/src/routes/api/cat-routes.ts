import express from 'express';
import { Request, Response } from 'express';


const router = express.Router();

router.get('/random-cat-image', async(_req: Request, res: Response) => {
    try {
        const response = await fetch('http://cataas.com/cat?json=true');
        const data = await response.json();
        const imageUrl = `http://cataas.com/${data.url}`
        
        res.send(imageUrl);

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});


export {router as catRouter};