

function Editar(id_usuarios_admin){
    var roles = $("#roles").val()
    $.ajax({
        dataType: "json",
        data: {id_usuarios_admin,roles },

        url: base_url + "ajax/Edit_rol",
        type: "post",
        beforeSend: function () {
            //$("#cod_municipio").selectpicker('refresh');
        },
        success: function (respuesta) {

            if (respuesta.resultado == true) {

                var data=respuesta.mensaje[0];
                console.log(data)

                $('#body_card').html("")
           var htmlTags =  `


            <h3 class="card-title text-center">Admin:${data.nombre}</h3>


           <div class="form-row">
           <div class="form-group col-md-6 mb-0">
               <div class="form-group">
               <label for="nombre" class="form-label">Nombre</label>
                   <input type="text" class="form-control"  name="nombre" id="nombre" value="${data.nombre}" >
               </div>
           </div>
           <div class="form-group col-md-6 mb-0">
               <div class="form-group">
               <label for="cedula" class="form-label">Cedula</label>
                   <input type="text" class="form-control" name="cedula" id="cedula" value="${data.cedula}" placeholder="">
               </div>
           </div>
       </div>
       <div class="form-row">
       
       <div class="form-group col-md-6 mb-0">
       <label for="email" class="form-label">Correo</label>
           <input type="email" id="email" name="email" class="form-control" id="inputEmail5" value="${data.email}" placeholder="">
       </div>
   
  
           <div class="form-group col-md-6 mb-0">
               <div class="form-group">
               <label for="contraseña" class="form-label">Contraseña</label>
                   <input type="text" name="contraseña" class="form-control" id="contraseña" placeholder="Contraseña">
               </div>
                    
               <div class="form-group col-6">
               <label class="form-label">Rol <span class="text-red">*</span></label>
               <select required  class="form-control form-select" data-bs-placeholder="Select" tabindex="-1" aria-hidden="true" id="Roles">
                      
               
               <option label="${data.perfil}" value="${data.perfil}" </option>
               <option label="Instancia Nacional" value="Instancia Nacional" </option>
               <option label="Operadores Nacional" value="Operadores Nacional" </option>
               <option label="administrador" value="administrador" </option>
              

                   </select>
           </div>
        </div>

       <input type="hidden" name="id_usuarios_admin" id="id_usuarios_admin" value="${data.id_usuarios_admin}">
       
       <input type="hidden" name="perfil" id="perfil" value="${data.perfil}">

       </div>
       <input type="hidden" name="id_rol" id="id_rol" value="${data.id_rol}">

       </div>

           `;

           $('#body_card').append(htmlTags);

               
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: respuesta.mensaje,
                });
            }
        },
        error: function (xhr, err) {
            console.log(err);
            alert("ocurrio un error intente de nuevo");
        },
    });

}


// Usuario-rol

(function ($) {

    $("#Usuario-rol").submit(function(e) {
        e.preventDefault();
            EditarRoles()
            CierraPopup()

    });
})(jQuery);

function CierraPopup() {
    $("#modalQuill").modal('hide');//ocultamos el modal
    $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
    $('.modal-backdrop').remove();//eliminamos el backdrop del modal
}


function EditarRoles(){

    var nombre =  $("#nombre").val();
    var cedula =  $("#cedula").val();
    var email =  $("#email").val();
    var contraseña  =  $("#contraseña").val()
    var id_usuarios_admin = $("#id_usuarios_admin").val()
    var id_rol = $("#id_rol").val()
    var Roles = $("#Roles").val()


    $.ajax({
        dataType: "json",
        data: {
            nombre,
            cedula,
            email,
            contraseña,
            id_usuarios_admin,
            id_rol,
            Roles

        },

        url: base_url + "ajax/Edit_rol/Editor_Usuarios",
        type: "post",
        beforeSend: function () {
            //$("#cod_municipio").selectpicker('refresh');
        },
        beforeSend: function () {
            //$("#cod_municipio").selectpicker('refresh');
        },
        success: function (respuesta) {
            

            if (respuesta.resultado == true) {
                Swal.fire({
                    icon: "success",
                    title: "Registro Exitoso",
                    text: "Presione OK para continuar",
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        location. reload()
                    }
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: respuesta.mensaje,
                });
            }
        },
        error: function (xhr, err) {
            console.log(err);
            alert("ocurrio un error intente de nuevo");
        },
    });
}


// (function ($) {

//     $("#Roles").click(function(e) {
//         e.preventDefault();
  

//     });
// })(jQuery);







