import { Router } from 'express'
import { getDoctors, postDoctors, putDoctors, delDoctors } from './controllers/doctors.controller.js'

const router = Router();

router.get('/doctors', getDoctors);

router.post('/doctors', postDoctors);

router.put('/doctors', putDoctors);

router.delete('/doctors',delDoctors);



export default router