
import express from 'express';

import doctorsRoutes from './routes/doctors.routes.js'
import patientsRoutes from './routes/patients.routes.js'
import indexRoutes from './routes/index.routes.js'
import treatmentsRoutes from './routes/treatments.routes.js'
import symtompsReport from './routes/symtomps_rep.routes.js'
import treatmentReports from './routes/treatmen_rep.routes.js'
const url = 'http://localhost:3000';

fetch(url)
.then(response =>response.json())
.then(data=>{
    console.log(data)
}).catch(err=> console.log(err))

const app = express();
app.use(express.json())/* PAra poder recibir los datos en formato json */

app.use('/api/',treatmentReports)
app.use('/api/',symtompsReport);
app.use('/api/',treatmentsRoutes);
app.use('/api/',patientsRoutes);
app.use('/api/',indexRoutes);
app.use('/api/',doctorsRoutes);

app.listen(3000);
