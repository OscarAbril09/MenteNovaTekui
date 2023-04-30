import  {createPool} from 'mysql2/promise';
//me permite conectarme a mi db 
/* createPool espera un obejto de conexion, le paso los parametros
 */
export const pool = createPool({
    host: 'localhost',
    user: 'campus',
    password: 'campus2023',
    port: 3306,
    database: 'mentenova'



})