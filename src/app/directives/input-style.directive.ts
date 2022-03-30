import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[inputStyle]'
})
export class InputStyleDirective implements OnInit{

  constructor(private el: ElementRef, private r: Renderer2) { }
 
  ngOnInit(){
      this.r.addClass(this.el.nativeElement,'mailPassword')
  }
}
