import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("error") public error: ElementRef;
  public hide: boolean = true;
  public formGroup: FormGroup;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  public onSubmit() {
    let email: string = this.formGroup.get("email")?.value;
    let password: string = this.formGroup.get("password")?.value;

    this.usersService.getUsers(email, password).subscribe({
      next: (users: UserInterface[]) => {        
        if(users.length === 0) {
          this.error.nativeElement.innerText = "* Ops, user or password invalid!";
        } else {
          // Com um backend, deveria retornar um token correto. Para ilustração usaremos o id do usuário
          localStorage.setItem("user_token", `${users[0].id}`);
          this.router.navigate(["/"]);
        }
      },
      error: (error) => {
        this.error.nativeElement.innerText = "* Ops, there was an error logging in";
      }
    });
  }
}
