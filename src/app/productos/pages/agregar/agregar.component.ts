import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit{



  miformulario: FormGroup = this.fb.group({
    nombre:['',Validators.required]
  });

  texto1: string = 'fernando herrera';
  color: string = 'red';
  constructor(private fb: FormBuilder) {
    
  }
  cambiarnombre() {
    this.texto1 = Math.random().toString();
  }
  
  tieneError(campo: string): boolean {
    return this.miformulario.get(campo)?.invalid || false;
   }
  
 
  ngOnInit(): void {
  }

 
  cambiarcolor() {

    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    this.color = color;
  }
 

}
