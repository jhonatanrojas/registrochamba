<?php      ?>



<!-- #END# Page Loader -->
<!-- Overlay For Sidebars -->
<div class="overlay"></div>
<!-- #END# Overlay For Sidebars -->

<section class="content">
    <div class="container-fluid">



        <div class="row clearfix">
            <div class="col-xs-4">
                <div class="card">
                    <div class="card-header">
                        <div class="row clearfix">
                            <div class="card-title">Oferta de empleo</div>


                        </div>
                    </div>


                    <div class="card-body">

                        <div class=" text-center card-title">PERFIL ACADEMICO</div>


                        <form>
                         

                            <div class="row">

                                
                                <div class="col-md-4 ">
                                    <div class="form-group">
                                        <label class="form-label">Nivel de Estudios</label>

                                        <select class="form-control" id="id_instruccion" name="id_instruccion">
                                            <option value="">Seleccione una opción</option>
                                            <!-- <option selected value='1'>Educación Básica Primaria</option>  -->
                                            <option <?php if (isset($acausuario->id_instruccion) and $acausuario->id_instruccion == '1') {
                                                        echo 'selected';
                                                    } ?> value='1'>Educación Básica Primaria</option>
                                            <option <?php if (isset($acausuario->id_instruccion) and $acausuario->id_instruccion == '2') {
                                                        echo 'selected';
                                                    } ?> value='2'>Educación Básica Secundaria</option>
                                            <option <?php if (isset($acausuario->id_instruccion) and $acausuario->id_instruccion == '3') {
                                                        echo 'selected';
                                                    } ?> value='3'>Bachillerato / Educación Media</option>
                                            <option <?php if (isset($acausuario->id_instruccion) and $acausuario->id_instruccion == '4') {
                                                        echo 'selected';
                                                    } ?> value='4'>Educación Técnico/Profesional</option>
                                            <option <?php if (isset($acausuario->id_instruccion) and $acausuario->id_instruccion == '5') {
                                                        echo 'selected';
                                                    } ?> value='5'>Universidad</option>
                                            <option <?php if (isset($acausuario->id_instruccion) and $acausuario->id_instruccion == '1') {
                                                        echo 'selected';
                                                    } ?> value='6'>Postgrado</option>
                                        </select>

                                    </div>
                                </div>

                         
                                <div class="col-md-4">
                                    <label class="form-label"> Profesión Oficio</label>
                                    <div class="form-group">
                               

                                    
                                            <select required class="form-control show-tick" id="id_profesion" name="id_profesion">
                                                <option value="">Seleccione una Profesión u Oficio</option>

                                               
                                         
                                             <?php if(isset($profesion_oficio)): ?>
                                                <?php foreach ($profesion_oficio as $key => $profesion):?>
                                                   
                                                    <?php  if($registroviejo->id_profesion_oficio == $profesion->id_profesion):?>
                                                    
                                                     
                                                     
                                                        <?php    echo "<option selected value='".$profesion->id_profesion."'>".$profesion->desc_profesion."</option>";     
                                                   else:
                                                        echo "<option value='".$profesion->id_profesion."'>".$profesion->desc_profesion."</option>";
                                                    endif;
                                               endforeach;
                                            endif;
                                        ?>
                                            </select>   
                                 
                                    </div>
                                    
                                </div>

                              

                                
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="form-label">Área de Formación</label>

                                <select class="form-control" id="id_area_form" name="id_area_form">
                                    <option value="">Seleccione una opción</option>
                                    <?php
                                    foreach ($areaform as $key => $value) {
                                        if ($value->id_area_form == $acausuario->id_area_form) {
                                            echo "<option selected value='" . $value->id_area_form . "'>$value->nombre</option>";
                                        } else {
                                            echo "<option value='" . $value->id_area_form . "'>$value->nombre</option>";
                                        }
                                    }
                                    ?>
                                </select>

                            </div>
                        </div>
                            </div>

                            <div class=" row mt-5 ">
                                <div class="text-center card-title">DATOS DEL EMPLEO</div>
                                <div class=" col-md-4">

                                    <div class="form-group">
                                        <label class="form-label">Tiempo de experiencias</label>
                                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                                <i class="fe fe-watch" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 border-start-0 ms-0 form-control" type="text" id="nombres" maxlength="30" name="nombres" value="" placeholder="" required autofocus>

                                        </div>

                                    </div>



                                </div>
                                <!--col-->

                                <div class="col-md-4">

                                    <div class="form-group">
                                        <label class="form-label">Cargo</label>
                                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                                <i class="mdi mdi-account" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 border-start-0 ms-0 form-control" type="text" id="apellidos" maxlength="30" name="apellidos" value="" placeholder="" required autofocus>

                                        </div>

                                    </div>



                                </div>

                                <!--col-->


                                <div class="col-md-4 ">
                                    <div class="form-group">
                                        <label class="form-label">Sexo</label>

                                        <select class="form-control" id="id_instruccion" name="id_instruccion">
                                            <option value="">Seleccione una opción</option>
                                            <option value="">Indiferente</option>
                                            <option value="">Masculino</option>
                                            <option value="">Femenino</option>
                                        </select>

                                    </div>
                                </div>

                      

                         

                                <div class="col-md-4">

                                    <div class="form-group">
                                        <label class="form-label">Característica del empleo</label>
                                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                                <i class="mdi mdi-global" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 border-start-0 ms-0 form-control" type="text" id="nombres" maxlength="30" name="nombres" value="" placeholder="Característica del empleo" required autofocus>

                                        </div>

                                    </div>



                                </div>
                            
                                <!--col-->

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-label">Edad</label>
                                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                                <i class="fe fe-calendar" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 border-start-0 ms-0 form-control" type="text" id="edad" maxlength="2" name="edad" value="" placeholder="edad" required autofocus>

                                        </div>

                                    </div>
                                </div>
                                <!--col-->
                                <div class="col-md-4">

                                    <div class="form-group">
                                        <label class="form-label">Cantidad de oferta</label>
                                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                                <i class="mdi mdi-account" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 border-start-0 ms-0 form-control" type="text" id="nombres" maxlength="30" name="nombres" value="" placeholder="Cantidad" required autofocus>

                                        </div>

                                    </div>



                                </div>

                                <!--col-->


                            </div>
                            <!--row-->


                    </div>




           

                    <div class="row  justify-content-center  mt-2 mb-2">
                        <div class="col-md-8 ">
                            <button class="btn btn-primary btn-block" id="boton" type="botton">Guardar</button>
                        </div>

                    </div>

                    </form>
                </div>


            </div>
        </div>
    </div>
    </div>
    </div>








</section>
<script type="text/javascript">
    var base_url = "<?php echo base_url(); ?>";
</script>