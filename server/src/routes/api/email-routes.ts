import sgMail from '@sendgrid/mail';
import express from 'express';
import { Request, Response } from 'express';

import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

router.post('/send-email', async(req: Request, res: Response) => {
    const { to, subject, text, html } = req.body;

    if(!to || !subject || !text || !html){
        return res.status(400).json({error: 'Missing required fields'});
    }

    const msg = {
        to,
        from: process.env.SENDGRID_VERIFIED_SENDER as string,
        subject,
        text,
        html,
    };

    try{
        await sgMail.send(msg); 
        console.log(res);
        return res.status(200).json({message:`Email sent.`})
    } catch (err) {
        console.error(err);
        return res.status(500).json({error: 'Email failed.'})
    }
});

export {router as emailRouter};