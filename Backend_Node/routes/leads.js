const express = require('express');
const leadsController = require('../controllers/leadsController');

const router = express.Router();

router.get('/',leadsController.GetAllLeads);
router.post('/',leadsController.InsertNewLead);
router.get('/:id',leadsController.GetLead);
router.put('/:id',leadsController.UpdateLead);

module.exports = router;