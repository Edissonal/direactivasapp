import { Directive, ElementRef, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';




@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit,OnChanges{

  private _color: string = 'red';
  private _mensaje: string = 'este campo es requerido';

  htmlElement: ElementRef<HTMLElement>
  @Input() set color (valor: string){
  
    this._color = valor;
    this.setcolor();

  }
  //@Input() mensaje: string ="Este campo es requerido";

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  
  @Input() set valido(valor: boolean) {
 
    if (valor == true) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden')
    }
  }


 


  constructor(private el:ElementRef<HTMLElement> ) {
    console.log('constructor directive');
    this.htmlElement = el;

   }

  ngOnChanges(changes: SimpleChanges): void {
     
     /*if (changes.mensaje) {
      const mensaje = changes.mensaje.currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
     }
     if (changes.color) {
       const color = changes.color.currentValue;
      this.htmlElement.nativeElement.style.color = color;
     }
     console.log(changes);*/
   
   }

  ngOnInit() {
    console.log('ngoninit en la directiva');
    this.setcolor();
    this.setMensaje();
    this.setcolor();
}
 
  setcolor() {
    this.htmlElement.nativeElement.style.color = this._color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

 setMensaje() {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setEstilo() {
    
  }
}
