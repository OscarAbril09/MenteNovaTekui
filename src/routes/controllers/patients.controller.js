import { pool }  from '../../db.js';


export const getPatient = async(req,res)=> {
   
    const [get_obj_pat ] = await pool.query('SELECT pat_name, pat_phone FROM patients')
   
    if(get_obj_pat == false){

        res.status(404).send('No hay pacientes registrados');

    }else{
        get_obj_pat.forEach((pat_phone,pat_name)=>{
            console.log(pat_name, pat_phone)
            

        })
          res.status(200).send('exito');
    }



};

export const loginPatient = async(req, res) =>{

        const { pat_password } = req.body;
        console.log(req.body);

        const [log_obj_pat] = await pool.query('SELECT * FROM patients WHERE pat_password = ?',[pat_password]);

        console.log(log_obj_pat)

        if(log_obj_pat == false){
            res.status(401).send('Paciente inexistente');

        }else{
            res.status(200).send('Inicio de sesion exitoso');
        }



}
export const postPatients = async(req,res)=> {
   console.log(req.body);

    const { pat_id, pat_name, pat_last_name, pat_birthday , pat_phone, pat_password} = req.body;
    const [post_obj_pat] = await pool.query('INSERT INTO patients (pat_id, pat_name, pat_last_name, pat_birthday, pat_phone, pat_password) VALUES(?, ?, ?, ?, ?, ?)',[pat_id, pat_name, pat_last_name, pat_birthday, pat_phone, pat_password])
    console.log(post_obj_pat);
        res.send({post_obj_pat});


};

export const putPatients= (req,res)=> res.send('actualizando patients');

export const delPatients= (req,res)=> res.send('borrando patients');
