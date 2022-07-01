<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Roles extends CI_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->load->model('Roles_model');
  
        $this->load->model('Usuarios_admin_model');
        $this->load->model('Menu_model');
        $this->load->library('form_validation'); 
    }


    public function index()
    {
        
        $breadcrumb =(object) [
            "menu" => "Empresas",
            "menu_seleccion" => "Inicio"
                 ];
    
     
       $roles =  $this->Roles_model->obtener_roles('admin');
  
 
        $output = [
            "menu_lateral" => "admin",
            "breadcrumb"      =>   $breadcrumb,
            "title"             => "Inicio",
            "vista_principal"   => "admin/roles",
            "roles" =>$roles,
        
            "librerias_js" => [],
             "ficheros_js" => [recurso("roles_js")],
            "ficheros_css" => [],


        ];
        $this->load->view("main", $output);
    }

    public function guardar_menu_rol(){

        $permitidos =  oberner_roles('admin'); 
        $tiene_acceso=in_array($this->session->userdata('id_rol'),$permitidos,false);

        if ( !$tiene_acceso) {
        echo  json_encode(["resultado" => false, "mensaje" => "acceso no autorizado"]);
        exit();
        }

        $this->form_validation->set_rules('id_rol', 'id_rol', 'trim|required|strip_tags');  
     //   $this->form_validation->set_rules('array_menu', 'array_menu', 'trim|required');  
        $this->form_validation->set_error_delimiters('*', '');
        $this->form_validation->set_message('required', 'El campo %s es requerido');
        if (!$this->form_validation->run()) {
        $mensaje_error = validation_errors();
        echo  json_encode(["resultado" =>false,"mensaje"=> $mensaje_error]);
        exit;
        }



        //Menu_model
        $array_menu = $_POST['array_menu'];
        $id_rol = $_POST['id_rol'];
        $resultado =false;
        foreach($array_menu as $sub_menu){
            $activo = 0;
           if($sub_menu['activo']=='true'){
            $activo = 1;
            }


            $rol_menu_existe =   $this->Menu_model->comprobar_rol_submenu($id_rol,$sub_menu['id_submenu']);
        if( $rol_menu_existe){
          $resultado =  $this->Menu_model->actualizar_rol_submenu($id_rol,$sub_menu['id_submenu'],
            [
                'activo' =>$activo
            ]);

       
        }else{

            $resultado =    $this->Menu_model->regitrar_rol_submenu([
                'id_rol' =>$id_rol,
                'id_submenu' =>$sub_menu['id_submenu'],
                'activo' =>$activo
            ]


            );

        }
          

        
 
        }
      


        if ($resultado ) {

            echo  json_encode(["resultado" => true, "mensaje" =>  'Registro exitoso']);
        } else {
            echo  json_encode(["resultado" => false, "mensaje" => 'No se completo el registro']);
        }
    }


    public function guardar_rol(){

        $permitidos =  oberner_roles('admin'); 
        $tiene_acceso=in_array($this->session->userdata('id_rol'),$permitidos,false);

        if ( !$tiene_acceso) {
        echo  json_encode(["resultado" => false, "mensaje" => "acceso no autorizado"]);
        exit();
        }

        $this->form_validation->set_rules('nombre_rol', 'nombre_rol', 'trim|required|strip_tags');  
     //   $this->form_validation->set_rules('array_menu', 'array_menu', 'trim|required');  
        $this->form_validation->set_error_delimiters('*', '');
        $this->form_validation->set_message('required', 'El campo %s es requerido');
        if (!$this->form_validation->run()) {
        $mensaje_error = validation_errors();
        echo  json_encode(["resultado" =>false,"mensaje"=> $mensaje_error]);
        exit;
        }



        $nombre_rol = $_POST['nombre_rol'];
  
       
      
        $resultado=$this->Roles_model->post_regitrar([
            'nombre' => $nombre_rol,
            'perfil' =>'admin'
        ]);
      


        if ($resultado ) {

            echo  json_encode(["resultado" => true, "mensaje" =>  'Registro exitoso']);
        } else {
            echo  json_encode(["resultado" => false, "mensaje" => 'No se completo el registro']);
        }
    }


}