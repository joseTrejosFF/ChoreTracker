import express, { Request, Response } from 'express';
// const Chore = require('../models/Chore');
import Chore from '../models/Chore';


const router = express.Router();

// @route     GET api/chores
// @desc      Get all chores
router.get('/', async (req:Request, res:Response) => {
  const chores = await Chore.find({});
  res.json(chores);
});

// @route     GET api/chores
// @desc      Get a Chore
router.get('/:choreName', async (req, res) => {
  try {
    const chore = await Chore.findOne({ choreName: req.params.choreName });

    if (!chore) {
      res.status(404).json({ msg: `${req.params.choreName} not found on DB` });
    } else {
      res.json(chore);
    }
  } catch (err) {
    console.error(err.message);
  }
});

// @route     POST api/chores
// @desc      Register new chore
router.post('/', express.json(), async (req, res) => {
  try {
    const { choreName } = req.body;
    const chore = new Chore({ choreName });

    await chore.save();

    res.send(chore);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('-- Server Error');
  }
});

// @route     PUT api/chores
// @desc      Add new duration
router.put('/:id', express.json(), async (req, res) => {
  try {
    const { started, ended, duration } = req.body;
    const newDuration = {
      durations: [
        {
          started,
          ended,
          duration,
        },
      ],
    };

    const chore = await Chore.findByIdAndUpdate(
      req.params.id,
      { $push: newDuration },
      {
        new: true,
        useFindAndModify: false,
      }
    ).select('durations');
    res.json(chore);
  } catch (err) {
    console.error(err.message);
  }
});

// @route     PUT api/chores
// @desc      Update Chore name
router.put('/rename/:id', express.json(), async (req, res) => {
  try {
    const chore = await Chore.findById(req.params.id);
    if (chore) {
      chore.choreName = req.body.choreName;
      await chore.save();
      res.json(chore);
    } else {
      res.json({
        msg: `Chore ID: ${req.params.id} wasn't found`
        
      })
    }
  } catch (err) {
    console.error(err.message);
  }
});

// @route     PUT api/chores
// @desc      toggle Pin Chore
router.put('/pin/:id', express.json(), async (req, res) => {
  try {
    const chore = await Chore.findById(req.params.id);
    if (chore) {
      chore.isPinned = !chore.isPinned;
      await chore.save();
      res.json(chore);
    } else {
      res.json({
        msg: `Chore ID: ${req.params.id} wasn't found`
      })
    }
  } catch (err) {
    console.error(err.message);
  }
});

// @route     DELETE api/chores
// @desc      Delete a Chore
router.delete('/:id', async (req, res) => {
  try {
    await Chore.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Chore deleted' });
  } catch (err) {
    console.error(err.message);
  }
});

// TODO: get/delete a single duration

module.exports = router;
