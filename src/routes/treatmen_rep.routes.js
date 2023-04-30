import {Router} from 'express'
import {getTreatmentRep, postTreatmentRep, putTreatmentRep, delTreatmentRep} from './controllers/treatment_rep.controller.js'
const router = Router();

router.get('/treatment_rep',getTreatmentRep);

router.post('/treatment_rep',postTreatmentRep);

router.put('/treatment_rep',putTreatmentRep);

router.delete('/treatment_rep',delTreatmentRep);



export default router