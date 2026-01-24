import { Request, Response } from 'express';
import Thumbnail from '../models/Thumbnail.js';


//Controller to get All user Thumbnails
export const getUsersThumbnails = async (req: Request, res: Response) => {
    try {
        const {userId} = req.session;

        const thumbnails = await Thumbnail.find({userId}).sort({createdAt: -1});
        res.json({thumbnails});

    } catch (error: any) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

//Controller to get Single Thumbnail of a user
export const getThumbnailbyId = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {userId} = req.session;

        const thumbnail = await Thumbnail.findOne({userId, _id: id});
        res.json({thumbnail});
        
    } catch (error: any) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}