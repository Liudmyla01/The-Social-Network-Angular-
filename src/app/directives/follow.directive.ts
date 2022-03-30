import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFollow]'
})
export class FollowDirective implements OnInit{
 
  constructor(private el:ElementRef, private r:Renderer2){ 
  }
  ngOnInit(){
    
    this.r.setStyle(this.el.nativeElement,'background-color','white');
    this.r.setStyle(this.el.nativeElement,'border','2px solid #3366ff');
    this.r.setStyle(this.el.nativeElement,'border-radius','4px' );
    this.r.setStyle(this.el.nativeElement,'color','#3366FF' );
   
  }

}
