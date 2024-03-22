import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public userNotFound: boolean = false;
  public formGroup: FormGroup;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  public onSubmit() {
    let email: string = this.formGroup.get("email")?.value;
    let password: string = this.formGroup.get("password")?.value;

    this.usersService.getUser(email, password).subscribe({
      next: (user) => {
        if(user.id) {
          console.log(user)
        } else {
          this.userNotFound = true;
        }
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
}
