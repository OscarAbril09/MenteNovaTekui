import {Router} from 'express'
import {getTreatment, postTreatment, putTreatment, delTreatment} from './controllers/treatments.controller.js'
const router = Router();

router.get('/treatments',getTreatment);

router.post('/treatments',postTreatment);

router.put('/treatments',putTreatment);

router.delete('/treatments',delTreatment);



export default router