import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 @Input() user:any
show = true;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.user);
  
  }
toggle(){
  this.show = !this.show
}
}
