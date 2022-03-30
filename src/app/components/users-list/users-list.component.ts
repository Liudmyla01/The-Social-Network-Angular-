import { AfterContentInit, Component, Input, OnInit} from '@angular/core';
import { UsersService } from 'src/app/services/usersServiece.service';



@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit{
@Input() usersList$:any

 constructor(private _usersServ:UsersService){
} 

ngOnInit(): void {
}

}

