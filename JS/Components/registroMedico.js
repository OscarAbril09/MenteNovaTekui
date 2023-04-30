class RegistroMedico extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML=/*html*/`
        <form action="api/doctors" method="POST">
        <div class="container-fluid row padre">
          <h1 class="col-6 h-25 w-100 d-flex justify-content-center mt-5 ">REGISTRO</h1>
          <div class="row h-50 p-0 d-flex justify-content-center">
            <input name="doc_id_company" class="inputs form-control col-12 mt-4 w-50" type="number" placeholder="Codigo empresa:" required>
            <div class="w-100"></div>
            <input name="doc_name" class="inputs form-control col-12 mt-4 w-50" type="text" placeholder="Nombre:" required>
            <div class="w-100"></div>
            <input name="doc_last_name" class="inputs form-control col-12 mt-4 w-50" type="text" placeholder="Apellido:" required>
            <div class="w-100"></div>
            <input name="doc_birthday" class="inputs form-control col-12 mt-4 w-50" type="date" required>
            <div class="w-100"></div>
            <input name="doc_password" class="inputs form-control col-12 mt-4 w-50" type="text" placeholder="Ingresar contraseña:" required>
            <div class="w-100"></div>
            <input name="confirm_password" class="inputs form-control col-12 mt-4 w-50" type="text" placeholder="Confirmar contraseña:" required>
            <div class="w-100"></div>
            <input class="submit mt-4" href="" type="submit" value="Enviar">
          </div>
        </div>
      </form>

<script type="module">
  import { fetchDoctorData } from './index.js'

  const form = document.querySelector('form')
  form.addEventListener('submit', event => {
    event.preventDefault()
    const doctorId = form.elements['doc_id_company'].value
    fetchDoctorData(doctorId)
      .then(data => {
        // procesar la respuesta de la API aquí
      })
      .catch(error => {
        // manejar el error aquí
      })
  })
</script> 
    `
    }
}

customElements.define("main-registro-medico",RegistroMedico)