import {Router} from 'express'
import {getPatient, postPatients,loginPatient ,putPatients, delPatients} from './controllers/patients.controller.js'
const router = Router();

router.get('/patients',getPatient);

router.get('/patients/login',loginPatient);

router.post('/patients',postPatients);

router.put('/patients',putPatients);

router.delete('/patients',delPatients);



export default router