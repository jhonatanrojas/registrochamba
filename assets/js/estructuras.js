






(function ($) {
	
	"use strict";

	// WIZARD 2
	$("#wizard2").steps({
		headerTag: "h3",
		bodyTag: "section",
		autoFocus: true,
		labels: {
			cancel: "Cancelar",
			current: "current step:",
			pagination: "Pagination",
			finish: "Guardar",
			next: "Siguiente",
			previous: "Anterior",
			loading: "Cargando ...",
		},
		titleTemplate:
			'<span class="number">#index#</span> <span class="title">#title#</span>',
		onStepChanging: function (event, currentIndex, newIndex) {
			if (currentIndex < newIndex) {
				// Step 1 form validation
				if (currentIndex === 0) {
					var nombres = $("#nombres").parsley();
					var apellidos = $("#apellidos").parsley();

					var cedula = $("#cedula").parsley();
					var fecha_nac = $("#datepicker").parsley();
					var id_nivel_academico = $("#id_nivel_academico").parsley();
					var telf_movil = $("#telf_movil").parsley();
					var telf_local = $("#telf_local").parsley();
					var correo1 = $("#correo1").parsley();
					var edad = $("#edad").parsley();
					var id_profesion_oficio = $("#id_profesion_oficio").parsley();

					if (
						nombres.isValid() &&
						apellidos.isValid() &&
						cedula.isValid() &&
						
						id_nivel_academico.isValid() &&
						telf_movil.isValid() &&
						telf_local.isValid() &&
						correo1.isValid() &&
						edad.isValid() &&
						id_profesion_oficio.isValid()
					) {
						return true;
					} else {
						if (!nombres.isValid())
							$("#nombres")
								.removeClass("is-valid")
								.addClass("is-invalid  error-input");
						if (!apellidos.isValid())
							$("#apellidos")
								.removeClass("is-valid")
								.addClass("is-invalid  error-input");
						if (!cedula.isValid())
							$("#cedula")
								.removeClass("is-valid")
								.addClass("is-invalid  error-input");
						if (!id_nivel_academico.isValid())
							$("#id_nivel_academico")
								.removeClass("is-valid")
								.addClass("is-invalid  error-input");
						// if (!fecha_nac.isValid())
						// 	$("#datepicker")
						// 		.removeClass("is-valid")
						// 		.addClass("is-invalid  error-input");
						if (!telf_movil.isValid())
							$("#telf_movil")
								.removeClass("is-valid")
								.addClass("is-invalid  error-input");

						if (!telf_local.isValid())
							$("#telf_local")
								.removeClass("is-valid")
								.addClass("is-invalid  error-input");

						if (!correo1.isValid())
							$("#correo1")
								.removeClass("is-valid")
								.addClass("is-invalid  error-input");
						if (!id_profesion_oficio.isValid())
							$("#id_profesion_oficio")
								.removeClass("is-valid")
								.addClass("is-invalid  error-input");
						if (!edad.isValid())
							$("#id_profesion_oficio")
								.removeClass("is-valid")
								.addClass("is-invalid  error-input");
					}
				}
				// Step 2 form validation
				if (currentIndex === 1) {
					var cod_responsabilidad = $("#cod_responsabilidad").parsley();
					var id_estructura = $("#id_estructura").parsley();
					var talla_pantalon = $("#talla_pantalon").parsley();
					var talla_camisa = $("#talla_camisa").parsley();
					var cod_estado = $("#cod_estado").parsley();
					var cod_municipio = $("#cod_municipio").parsley();
					var cod_parroquia = $("#cod_parroquia").parsley();
					var direccion = $("#direccion").parsley();
					// var latitud = $("#latitud").parsley();
					// var longitud = $("#longitud").parsley();

					if (
						cod_responsabilidad.isValid() &&
						id_estructura.isValid() &&
						talla_pantalon.isValid() &&
						talla_camisa.isValid() &&
						cod_estado.isValid() &&
						cod_municipio.isValid() &&
						cod_parroquia.isValid() &&
						direccion.isValid()
					) {
						return true;
					} else {
						cod_responsabilidad.validate();
						id_estructura.validate();
						talla_pantalon.validate();
						talla_camisa.validate();
						cod_estado.validate();
						cod_municipio.validate();
						cod_parroquia.validate();
						direccion.validate();
						// latitud.validate();
						// longitud.validate();
					}
				}
				// Always allow step back to the previous step even if the current step is not valid.
			} else {
				return true;
			}
		},

		onFinished: function (event, currentIndex) {
			var nombres = $("#nombres").val();
			var apellidos = $("#apellidos").val();
			var telf_movil = $("#telf_movil").val();
			var telf_local = $("#telf_local").val();
			var fecha_nac = $("#datepicker").val();
			var correo1 = $("#correo1").val();
			var edad = $("#edad").val();
			var id_profesion_oficio = $("#id_profesion_oficio").val();
			var cedula = $("#cedula").val();
			var id_nivel_academico = $("#id_nivel_academico").val();
			var cod_estado = $("#cod_estado").val();
			var cod_municipio = $("#cod_municipio").val();
			var cod_parroquia = $("#cod_parroquia").val();
			var direccion = $("#direccion").val();
			var cod_responsabilidad = $("#cod_responsabilidad").val();
			var id_estructura = $("#id_estructura").val();
			var talla_pantalon = $("#talla_pantalon").val();
			var talla_camisa = $("#talla_camisa").val();
			var latitud = $("#latitud").val();
			var longitud = $("#longitud").val();

			$.ajax({
				dataType: "json",
				data: {
					nombres,
					apellidos,
					telf_movil,
					telf_local,
					fecha_nac,
					correo1,
					edad,
					id_profesion_oficio,
					cod_parroquia,
					cedula,
					id_nivel_academico,
					cod_estado,
					cod_municipio,
					cod_parroquia,
					direccion,
					cod_responsabilidad,
					id_estructura,
					talla_pantalon,
					talla_camisa,
					latitud,
					longitud,
				},

				url: base_url + "Cadmin/crearEstructura",
				type: "post",
				beforeSend: function () {
					//$("#cod_municipio").selectpicker('refresh');
				},
				success: function (respuesta) {
					console.log(respuesta);

					if (respuesta.resultado == true) {
						Swal.fire({
							icon: "success",
							title: "Registro Exitoso",
							text: "Presione OK para continuar",
						}).then((result) => {
							/* Read more about isConfirmed, isDenied below */
							if (result.isConfirmed) {
								$(location).attr("href", base_url + "admin/estructuras");
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
		},
	});

	// DROPIFY
	$(".dropify-clear").on("click", function () {
		$(".dropify-render img").remove();
		$(".dropify-preview").css("display", "none");
		$(".dropify-clear").css("display", "none");
	});
})(jQuery);

//Function to show image before upload

function readURL(input) {
	"use strict";

	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$(".dropify-render img").remove();
			var img = $('<img id="dropify-img">'); //Equivalent: $(document.createElement('img'))
			img.attr("src", e.target.result);
			img.appendTo(".dropify-render");
			$(".dropify-preview").css("display", "block");
			$(".dropify-clear").css("display", "block");
		};
		reader.readAsDataURL(input.files[0]);
	}
}

$("#cod_estado").change(function () {
	buscarMunicipios();
});
$("#cod_municipio").change(function () {
	buscarParroquia();
});

function buscarMunicipios() {
	var estado = $("#cod_estado").val();

	if (estado == "") {
		$("#cod_municipio").html(
			'<option value="">Debe seleccionar un Estado por favor</option>'
		);
	} else {
		$.ajax({
			dataType: "json",
			data: { codigoestado: estado },
			url: base_url + "Cchambistas/getMunicipios",
			type: "post",
			beforeSend: function () {
				$("#cod_municipio").html("<option>cargando municipios...</option>");
				//$("#cod_municipio").selectpicker('refresh');
			},
			success: function (respuesta1) {
				$("#cod_municipio").html(respuesta1.htmloption1);
				//$("#cod_municipio").selectpicker('refresh');
			},
			error: function (xhr, err) {
				alert(
					"readyState =" +
						xhr.readyState +
						" estado =" +
						xhr.status +
						"respuesta =" +
						xhr.responseText
				);
				//alert("ocurrio un error intente de nuevo");
			},
		});
	}
}

function buscarParroquia() {
	var municipio = $("#cod_municipio").val();
	var estado = $("#cod_estado").val();

	if (municipio == "") {
		$("#cod_parroquia").html(
			'<option value="">Debe seleccionar un Municipio por favor</option>'
		);
	} else {
		$.ajax({
			dataType: "json",
			data: { codigomunicipio: municipio, codigoestado: estado },
			url: base_url + "Cchambistas/getParroquias",
			type: "post",
			beforeSend: function () {
				$("#cod_parroquia").html("<option>cargando parroquias...</option>");
				//$("#cod_parroquia").selectpicker('refresh');
			},
			success: function (respuesta2) {
				$("#cod_parroquia").html(respuesta2.htmloption2);
				//  $("#cod_parroquia").selectpicker('refresh');
			},
			error: function (xhr, err) {
				alert(
					"readyState =" +
						xhr.readyState +
						" estado =" +
						xhr.status +
						"respuesta =" +
						xhr.responseText
				);
				//alert("ocurrio un error intente de nuevo");
			},
		});
	}
}

$("#correo1").on("keyup", function () {
	"use strict";
	var correo = $("#correo2").val($(this).val());
});

//validar cedula

$("#cedula").on("keyup", function () {
	"use strict";
	var cedula = $("#cedula").val();
	var expresion = /^\d{7,8}$/;

	if (expresion.test(cedula)) {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
	} else {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
		$("#cedula").removeClass("is-valid").addClass("is-invalid");
	}
});

//validar telefono
$("#telf_movil").on("keyup", function () {
	"use strict";
	var telefono = $("#telf_movil").val();
	var expresion = /^\d{7,11}$/;

	if (expresion.test(telefono)) {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
	} else {
		$(this).removeClass("is-invalid error-input").addClass("is-valid");
		$("#telf_movil,datepicker").removeClass("is-valid").addClass("is-invalid");
	}
});
//telf_local
$("#telf_local").on("keyup", function () {
	"use strict";
	var telf_local = $("#telf_local").val();
	var expresion = /^\d{7,13}$/;

	if (expresion.test(telf_local)) {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
	} else {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
		$("#telf_local").removeClass("is-valid").addClass("is-invalid");
	}
});

//nombres

$("#nombres,#apellidos,#id_nivel_academico,#id_profesion_oficio").on(
	"keyup",
	function () {
		"use strict";
		var nombres = $(this).val();

		var expresion = /^[a-zA-Z\s]*$/;

		if (expresion.test(nombres)) {
			$(this)
				.removeClass("is-invalid error-input")
				.addClass("is-valid valid-input");
		} else {
			$(this)
				.removeClass("is-invalid error-input")
				.addClass("is-valid valid-input");
			$("#nombres,#apellidos,#id_nivel_academico")
				.removeClass("is-valid")
				.addClass("is-invalid");
		}
	}
);

// fecha_nac
// $("#datepicker").on("keyup", function () {
// 	"use strict";
// 	var fecha_nac = $(this).val();
// 	var expresion = /^\d{2}\/\d{2}\/\d{4}$/;

// 	if (expresion.test(fecha_nac)) {
// 		$(this)
// 			.removeClass("is-invalid error-input")
// 			.addClass("is-valid valid-input");
// 	} else {
// 		$(this)
// 			.removeClass("is-invalid error-input")
// 			.addClass("is-valid valid-input");
// 		$("#datepicker").removeClass("is-valid").addClass("is-invalid");
// 	}
// });

//Correo
$("#correo1").on("keyup", function () {
	"use strict";
	var email1 = $(this).val();
	var expresion =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (expresion.test(email1)) {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
	} else {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
		$("#correo1").removeClass("is-valid").addClass("is-invalid");
	}
});
//edad
$("#edad").on("keyup", function () {
	"use strict";
	var edad = $(this).val();
	var expresion = /^\d{2}$/;

	if (expresion.test(edad)) {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
	} else {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
		$("#edad").removeClass("is-valid").addClass("is-invalid");
	}
});
// select
$("#id_nivel_academico").on("change", function () {
	"use strict";
	var nivel_academico = $(this).val();
	var expresion = /^\d{1}$/;

	if (expresion.test(nivel_academico)) {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
	} else {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
		$("#id_nivel_academico").removeClass("is-valid").addClass("is-invalid");
	}
});
// select
$("#id_profesion_oficio").on("change", function () {
	"use strict";
	var profesion_oficio = $(this).val();
	var expresion = /^\d{1}$/;

	if (expresion.test(profesion_oficio)) {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
	} else {
		$(this)
			.removeClass("is-invalid error-input")
			.addClass("is-valid valid-input");
		$("#id_profesion_oficio").removeClass("is-valid").addClass("is-invalid");
	}
});

