import {pool} from '../../db.js'
/* ESte metodo va a ser para el login*/
export  const getDoctors = async(req,res)=> {
   const { doc_id_company , doc_password } = req.body
   console.log(req.body);
  /*  const doc_id_company = '123';
   const doc_password = '12ujsa'; */
   const [get_obj_doc] = await pool.query('SELECT * FROM doctors WHERE doc_id_company = ? AND doc_password = ?', [doc_id_company,doc_password]);
    console.log(get_obj_doc);
   if (get_obj_doc == false){
    res.status(401).send('Nombre de usuario o contraseñas incorrectos');

   }else{
    res.status(200).send('Inicio de sesion exitoso')
   }
};
/* Este metodo sirve para añadir un nuevo medico*/

export const postDoctors = async (req, res) => {
    /* COMENZAMOS A INSERTAR DOCTORES EN LA BASE DE DATOS */
    /*CUalquier tipo de consulta en la base de datos es una consulta asincrona  */
    /* SI QUIERO INCERTAR POR GRUPOS HAGO EL SET */


   //pool.query('INSERT INTO doctors  (doc_id, doc_name, doc_last_name, doc_password, doc_id_company, doc_birthdate) VALUES')
   console.log(req.body);//objeto que me permite ver los valores que recibo
   const { doc_id, doc_name, doc_last_name, doc_password, doc_id_company, doc_birthday} = req.body;
   const [post_object_doc ] = await pool.query('INSERT INTO doctors  (doc_id, doc_name, doc_last_name, doc_password, doc_id_company, doc_birthday) VALUES (?,?,?,?,?,?)',[doc_id, doc_name, doc_last_name, doc_password, doc_id_company, doc_birthday])
    //id:object_id esto es para recibir el id de mi objeto
   res.send({id:post_object_doc.inserId,post_object_doc});
};

export const putDoctors  = (req, res) => res.send('Actualizando doctores');

export const delDoctors  =  (req, res) => res.send('Borrando doctores');

