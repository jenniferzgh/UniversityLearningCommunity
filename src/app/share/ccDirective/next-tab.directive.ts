import { Directive, HostListener, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Directive({
  selector: '[next-tab]'
})
export class NextTabDirective {

  self:any;
  nextControl:any;

  @HostListener("keydown.enter", ["$event"])
  onEnter(event: KeyboardEvent) {
    if (this.nextControl) {
      if (this.nextControl.focus) {
        this.nextControl.focus();
        this.nextControl.select();
        event.preventDefault();
        return false;
      }
    }
  }

  constructor(private control: ElementRef) {
    this.self=control.nativeElement;
  }

  @ViewChildren(NextTabDirective) inputs: QueryList<NextTabDirective>;

  initTab(){
    const controls=this.inputs.toArray();
    for (let i=0;i<controls.length-1;i++){
      controls[i].nextControl=controls[i+1].self;
    }
  }

}


