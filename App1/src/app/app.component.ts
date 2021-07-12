import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // <!--1 One Way Data Binding-->
  /* userName='';
   setUserName(text: string){
     this.userName=text;
     console.log(this.userName);
   }*/


// <!--2 Two Way Data Binding-->
//  userName='';

  loginForm = new FormGroup({
    email: new FormControl(
      '',[
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.required
      ]
    ),
    password: new FormControl(
      '',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]
    )
  });

  login() {
    // console.log(this.loginForm)
    console.log(this.loginForm.get('email'))
    console.log(this.loginForm.get('password'))
  }
}
