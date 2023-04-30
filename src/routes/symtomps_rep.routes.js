import {Router} from 'express'
import {getSymptoms, postSymptoms, putSymptoms ,delSymptoms} from './controllers/symptomps_rep.controller.js'
const router = Router();

router.get('/symptons_rep',getSymptoms);

router.post('/symptons_rep',postSymptoms);

router.put('/symptons_rep',putSymptoms);

router.delete('/symptons_rep',delSymptoms);



export default router