import express from 'express';
import type { Request, Response } from 'express';
import { TimeCapsule } from '../../models/index.js';

const router = express.Router();

//GET /api/time-capsule/ - Get all the Time Capsules.
router.get('/', async (_req: Request, res: Response) => {
    try{
        const timeCapsules = await TimeCapsule.findAll();
        res.json(timeCapsules)
    } catch(err: any) {
        res.status(500).json({message: err.message});
    }
});

//GET /api/time-capsule/:id - Get Time Capsule by id.
router.get('/:id', async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const timeCapsule = await TimeCapsule.findByPk(id);
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

//PUT /api/time-capsule/:id - update Time Capsule by id.
router.put('/:id', async(req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, openDate, message, catUrl, assignedUserId } = req.body;
    try {
        const timeCapsule = await TimeCapsule.findByPk(id);
        if (timeCapsule) {
            timeCapsule.name = name;
            timeCapsule.email = email;
            timeCapsule.openDate = openDate;
            timeCapsule.message = message;
            timeCapsule.catUrl = catUrl;
            timeCapsule.assignedUserId = assignedUserId
            await timeCapsule.save();
            res.json(timeCapsule);
        } else {
            res.status(404).json({
            message: 'Time Capsule not found'
            });
        }
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        });
    }
});

//DELETE /api/time-capsule/:id - delete Time Capsule by id.
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
      const timeCapsule = await TimeCapsule.findByPk(id);
      if (timeCapsule) {
        await timeCapsule.destroy();
        res.json({ message: 'Time Capsule deleted' });
      } else {
        res.status(404).json({
          message: 'Time Capsule not found'
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  });

export { router as timeCapsuleRouter };