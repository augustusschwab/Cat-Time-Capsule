import express from 'express';
import type { Request, Response } from 'express';
import { TimeCapsule, User } from '../../models/index.js';

const router = express.Router();

//GET - Get all the Time Capsules.
router.get('/', async (_req: Request, res: Response) => {
    try{
        const timeCapsules = await TimeCapsule.findAll({
            include: [
                {
                    model: User,
                    as: 'assignedUser',
                    attributes: ['name', 'email', 'openDate', 'message', 'catUrl'],
                },
            ],
        });
        res.json(timeCapsules)
    } catch(err: any) {
        res.status(500).json({message: err.message});
    }
});

//GET - Get Time Capsule by id.
router.get('/:id', async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const timeCapsule = await TimeCapsule.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'assignedUser',
                    attributes: ['name', 'email', 'openDate', 'message', 'catUrl'],
                },
            ],
        });
        if (timeCapsule) {
            res.json(timeCapsule);
        } else {
            res.status(404).json({
                message: 'Time Capsule not found.'
            });
        }
    } catch(err: any) {
        res.status(500).json({
            message: err.message
        });
    }
});

//POST /api/time-capsule/ - Create new Time Capsule
router.post('/', async (req: Request, res: Response) => {
    const { name, email, openDate, message, catUrl, assignedUserId } = req.body;
    console.log(req.user);
    try{
        const newTimeCapsule = await TimeCapsule.create({
            name, email, openDate, message, catUrl, assignedUserId
        });
        res.status(201).json(newTimeCapsule);
    } catch(err: any) {
        res.status(400).json({message: err.message})
    }
});

//PUT - update Time Capsule by id.

//DELETE -

export { router as timeCapsuleRouter };