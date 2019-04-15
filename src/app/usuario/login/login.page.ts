import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  private email:string;
  private pws:string;


  constructor(
    private afAuth:AngularFireAuth
  ) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.login();
  }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pws)
    .then(
      user=>{
        console.log(user);
    })
  }

}
