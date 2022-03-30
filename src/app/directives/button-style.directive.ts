import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[buttonStyle]'
})
export class ButtonStyleDirective implements OnInit{

  constructor(private el: ElementRef, private render:Renderer2) { 
    
   
   }

    ngOnInit() {
      this.render.addClass(this.el.nativeElement, 'learn-more');
      
      
    }

}
