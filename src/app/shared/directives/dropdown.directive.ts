import { Directive, HostListener, OnInit, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  // @Input() defaultAct: string = 'close';
  // @Input() openDropdown: string = 'open';
  @HostBinding('class.open') class= false; //hostBinding is the thing that will be binded to the element and its value will fixed by hostListener
  ngOnInit() {
  }

  constructor() { }
  @HostListener('click') toggleOpen() {
    this.class= !this.class;    
  }
}
