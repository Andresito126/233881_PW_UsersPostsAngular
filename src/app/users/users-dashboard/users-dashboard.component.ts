import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Iuser } from '../interfaces/iuser';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  ngOnInit(): void {
    this._service.getAll().subscribe(
      response => this.users = response
    )
    }
   
    selectedUser: Iuser = {
      id: 0,
      name: "",
      username: "",
      email: "",
      phone: "",
      website: ""
    }

    displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website']
    users: Iuser[]= []

  //esto por el injectable no se ocupa declarar la instancia lo del new, solo con declararlo
  //guion bajo _ para los servicios inyectables
  constructor(private _service: UserService){

    this._service.getAll().subscribe(
      response => {
        this.users= response
        console.log(this.users)
      }
    )

  }

  addUser(user: Iuser): void{
    //se ocuapa para poder pushear a la tabla los datos que se añadiran 
    this.users.push(user);
    console.log(this.users);
  }
}
