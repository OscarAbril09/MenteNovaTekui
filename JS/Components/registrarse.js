class MAinRegistro extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render(){
        this.innerHTML=/*html*/`
        <div class="container-fluid row padre">
        <h1 class="col-6 h-25 w-100 d-flex justify-content-center mt-5 ">REGISTRO</h1>
        <div class="row h-50 p-0 d-flex justify-content-center">
            <input class="inputs form-control col-12 mt-4 w-50" type="number" placeholder="Codigo empresa:" required>
            <div class="w-100"></div>
            <input class="inputs form-control col-12 mt-4 w-50" type="text" placeholder="Nombre:" required>
            <div class="w-100"></div>
            <input class="inputs form-control col-12 mt-4 w-50" type="text" placeholder="Apellido:" required>
            <div class="w-100"></div>
            <input class="inputs form-control col-12 mt-4 w-50" type="number" placeholder="Ingresar CC:" required>
            <div class="w-100"></div>
            <input class="inputs form-control col-12 mt-4 w-50" type="text" placeholder="Ingresar contraseña:" required>
            <div class="w-100"></div>
            <input class="inputs form-control col-12 mt-4 w-50" type="text" placeholder="Confirmar contraseña:" required>
            <div class="w-100"></div>
            <input class="submit mt-4" href="" type="submit" value="Enviar">
        </div>
    </div>
        `
    }
}


customElements.define("main-registro",MAinRegistro);