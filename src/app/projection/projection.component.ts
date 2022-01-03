import { Component } from '@angular/core';

export interface User {
    email: string,
    password: string
  }
@Component({
  selector: 'projection',
  template: `
    <div>
      <auth-form 
        (submitted)="createUser($event)">
        <h3>Create account</h3>
       
        <button type="submit">
          Join us
        </button>
      </auth-form>
      <!--  -->
     
  
      <auth-form 
        (submitted)="loginUser($event)">
        <h3>Login</h3>
        <auth-remember
          (checked)="rememberUser($event)">
        </auth-remember>
        <button type="submit">
          Login
        </button>
      </auth-form>
    </div>
  `
})
export class ProjectionComponent {

  rememberMe: boolean = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }

}