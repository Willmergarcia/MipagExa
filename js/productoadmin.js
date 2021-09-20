let listProductos = localStorage.getItem('listProductos') != null ? JSON.parse(localStorage.getItem('listProductos')) : [];

mostrarProductos();
document.getElementById('id').value= null;
document.getElementById('nombre').value= null;
document.getElementById('precio').value= null;
document.getElementById('cantidad').value= null;
document.getElementById('file').value = null;

function agregarProducto(){
    let nombre =  document.getElementById('nombre').value;
    let precio =  document.getElementById('precio').value;
    let cantidad =  document.getElementById('cantidad').value;
    let file = document.getElementById('file').value;
    let id = document.getElementById('id').value;

    if(id == "" || id == null ){
        if(nombre == null || nombre == ""){
            alert('El nombre es Requerido');
        }else if (precio == null || precio == ""){
            alert('Precio es Requerido ')
        }else if(cantidad == null || cantidad == ""){
            alert('Cantidad es Requerido ')
        }else if(file == null || file == ""){
            alert('File es Requerido ')
        }else{
            let filex = document.getElementById('file').files[0];
            var reader = new FileReader();
            reader.readAsDataURL(filex);
            reader.onload = function () {
                let newProducto =  { nombre: nombre, precio: precio, cantidad: cantidad, img: reader.result}
                listProductos.push(newProducto);
                localStorage.setItem('listProductos', JSON.stringify(listProductos));
                mostrarProductos();
                document.getElementById('id').value= null;
                document.getElementById('nombre').value= null;
                document.getElementById('precio').value= null;
                document.getElementById('cantidad').value= null;
                document.getElementById('file').value = null;
                alert('Producto Agregado');
            }; 
        }
    }else{
        if(nombre == null || nombre == ""){
            alert('El nombre es Requerido');
        }else if (precio == null || precio == ""){
            alert('Precio es Requerido ')
        }else if(cantidad == null || cantidad == ""){
            alert('Cantidad es Requerido ')
        }else{
           
            if(document.getElementById('file').files[0] == null) {
               
                listProductos[id].nombre = nombre;
                listProductos[id].precio = precio;
                listProductos[id].cantidad = cantidad;
                localStorage.setItem('listProductos', JSON.stringify(listProductos));
                mostrarProductos();
                document.getElementById('id').value= null;
                document.getElementById('nombre').value= null;
                document.getElementById('precio').value= null;
                document.getElementById('cantidad').value= null;
                document.getElementById('file').value = null;
                alert('Producto Actualiazdo');

            }else{
                
                let filex = document.getElementById('file').files[0];
                var reader = new FileReader();
                reader.readAsDataURL(filex);
                reader.onload = function () {
                    listProductos[id].nombre = nombre;
                    listProductos[id].precio = precio;
                    listProductos[id].cantidad = cantidad;
                    listProductos[id].img = reader.result;
                    localStorage.setItem('listProductos', JSON.stringify(listProductos));
                    mostrarProductos();
                    document.getElementById('id').value= null;
                    document.getElementById('nombre').value= null;
                    document.getElementById('precio').value= null;
                    document.getElementById('cantidad').value= null;
                    document.getElementById('file').value = null;
                    alert('Producto Actualizado');
                }; 
                
            
            }

            
        }
    }

    
}

function mostrarProductos(){
    let index = 0;
    document.getElementById("list-productos").innerHTML =  null;
    listProductos.forEach(element => {
        var tr =  `<tr>
            <td>${index+ 1}</td>
            <td>${element.nombre}</td>
            <td>${element.precio}</td>
            <td>${element.cantidad}</td>
            <td> <img height="100" src="${element.img}"></td>
            <td><button class="btn btn-danger" onclick="deletex(${index})">Eliminar</button> <button class="btn btn-info" onclick="actualizar(${index})">Actualizar</button></td>
        </tr>`;
        document.getElementById("list-productos").innerHTML +=  tr;
        index++;
    });
}

function actualizar(index){
    document.getElementById('id').value= index;
    document.getElementById('nombre').value= listProductos[index].nombre;
    document.getElementById('precio').value= listProductos[index].precio;
    document.getElementById('cantidad').value= listProductos[index].cantidad;
    //document.getElementById('file').value = listProductos[index].nombre;
}


function deletex(index){
    listProductos.splice(index, 1);
    localStorage.setItem('listProductos', JSON.stringify(listProductos));
    alert('Producto Eliminado'); 
    mostrarProductos();
}




