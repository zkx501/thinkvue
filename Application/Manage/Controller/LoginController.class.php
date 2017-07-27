<?php
namespace Manage\Controller;
use Think\Controller;
class LoginController extends Controller {
    public function index(){
        $this->display();
    }

    public function test(){
        echo 'login/test';
    }
}