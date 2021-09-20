function cargarProductos(){
    let dataUnparse =  localStorage.getItem('listProductos');
    if(dataUnparse != null ){
        let data = JSON.parse(dataUnparse);
        let index = 0;
        document.getElementById("list-productos").innerHTML = null;
        data.forEach(element => {
            let tr = `<div class="mb-4 col-md-3 col-sm-12">
                <div class='card'>
                    <div>
                        <h4 class="normal-text">${element.nombre}</h4>
                    </div>
                    <div class="card-body">
                        <center><img src="${element.img}" class="card-img-top img_cls" alt="${element.nombre}"></center>
                        <h3 class="card-title pricing-card-title precio">Q.<span class="">${element.precio}</span></h3>
                        <p>Cantidad: ${element.cantidad}</p>
                        <button  class="btn btn-info btn-block" type="button" onclick="vender(${index})">Comprar</button>
                    </div>
                </div>
            </div>`

        

            document.getElementById("list-productos").innerHTML +=  tr;
            index++;
        });
    }
}



function vender(id){
    var r = confirm("DESEA VENDER ESTE ARTICULO ");
    if (r == true) {
        let data =  JSON.parse(localStorage.getItem('listProductos'));
        data[id].cantidad =  (parseInt(data[id].cantidad)  - 1);
        
        localStorage.setItem('listProductos', JSON.stringify(data));

        cargarProductos();
    } else {
       
    } 
}

cargarProductos();



