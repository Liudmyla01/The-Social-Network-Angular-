import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsersService } from 'src/app/services/usersServiece.service';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PopularComponent implements OnInit {
users$ :any


  constructor(private usersGuest:UsersService) {
  
  }
  
  ngOnInit(){
    this.users$ = this.usersGuest.guestUsers$

  }
}
