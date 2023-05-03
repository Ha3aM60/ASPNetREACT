import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  addUser: User = {
    id: 0,
    login: '',
    password: '',
    email: ''
  };
  constructor(private usersservise: UsersService, private route: Router) { }
  addUserReg() {
    this.usersservise.RegisterUser(this.addUser)
      .subscribe({
        next: (user) => {
          this.route.navigate(['/home']);
        }
      });
  }
}
