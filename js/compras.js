let dataUnparse =  localStorage.getItem('listProductos');
let data =[];
if(dataUnparse != null ){
    data = JSON.parse(dataUnparse);
}


document.getElementById('opc-productos').value = null;
document.getElementById('cantidad').value = null;

let dataUnparse2 =  localStorage.getItem('listCompras');
let compras =[];
if(dataUnparse2 != null){
    compras = JSON.parse(dataUnparse2);
}

function cargarProductos(){
    let index = 0 ;
    console.log(data)
        data.forEach(element => {
            let tr = `<option value="${index}">${element.nombre}</option>`

            document.getElementById("opc-productos").innerHTML +=  tr;
        });
}


function comprar(){
    let producto  = document.getElementById('opc-productos').value;
    let cantidad = document.getElementById('cantidad').value;


    var productotxt = document.getElementById("opc-productos");
    var selected = productotxt.options[productotxt.selectedIndex].text;
    let date = new Date();
    var newcompra= {producto : selected, fecha: date,cantidad: cantidad}
    compras.push(newcompra)

    data[producto].cantidad = (parseInt(data[producto].cantidad)  + parseInt(cantidad))

    localStorage.setItem('listProductos',JSON.stringify(data))
    
    localStorage.setItem('listCompras', JSON.stringify(compras));
    cargarCompras();
}

function cargarCompras(){
    document.getElementById("list-compras").innerHTML  = null;
    let index = 0;
    compras.forEach(element => {
        let tr = ` <tr>
        <td>${index+1}</td>
        <td>${element.producto}</td>
        <td>${element.cantidad}</td>
        <td>${element.fecha}</td>
      </tr>`;

      document.getElementById("list-compras").innerHTML +=  tr;
      index++;
    });
}
cargarProductos();
cargarCompras()