class MainIndex extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML=/*html*/`
        <main class="d-flex">
        <aside class="d-flex justify-content-center align-items-center col-12 col-md-4 col-lg-4 ">
            <div class="row">
                <div class="col-12" >
                    <form action="" class="d-flex flex-column align-items-center">
                        <img class="rounded-circle" src="../img/logo.jpg" style="width: 250px; height: 250px; margin-bottom: 100px;" alt="">
                        <label for="" class="display-5  text-white p-3">ID Usuario</label>
                        <input type="text"  class="form-control rounded-pill m-4 p-2">
                        <a href="../Paciente/sintomas.html" class="btn btn-danger rounded w-50" 
                        role="button" aria-disabled="false">Enviar</a>
                    </form>
                </div>
            </div>
        </aside>
        <section class="d-flex justify-content-center flex-column align-items-center row">
            <div class="row d-flex justify-content-center">
                <div class="col-10 d-flex justify-content-center">
                    <h1 class="font-weight-bold mb-4 display-2 text-white "><strong>Mente Nova</strong> </h1>
                </div>
                <div class="col-10 cont-info d-flex align-items-center flex-column justify-content-center">
                    <div class="row d-flex justify-content-center m-5 align-items-center">
                        <div class="col-md-12 col-lg-5 d-flex justify-content-center align-items-center">
                            <img class="img1" width="70%"  src="../img/noti_0d80cadbea636247ca0de846bea8a64f8cf0f6e3.png" alt="">
                        </div>
                        <div class="col-md-12 col-lg-5 d-flex justify-content-center align-items-center">
                            <img class="img1" width="70%" src="../img/sinnova.png" alt="">
                        </div>
                        <div class="col-md-12 col-lg-5 d-flex justify-content-center align-items-center">
                            <img class="img1" width="70%" src="../img/LOGO-FCV.png" alt="">
                        </div>
                        
                    </div>
                    <div class="row d-flex justify-content-center m-3">
                        <div class="col-10">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus, architecto sapiente ut, maxime enim facilis cum vero quo harum eos, impedit similique odit exercitationem soluta possimus inventore consequuntur laboriosam?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
        `
    }
}

customElements.define("main-index",MainIndex);