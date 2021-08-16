import { Elemen } from './../elemento.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';

import { HomeService } from '../home.service';
import { NgForm } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  elemento: Elemen[] = [];
  elementoNovo = {} as Elemen;
  elementos: Elemen[] = []
  outroEletento: Elemen = this.elemento[0]
  private $subs: Subscription[] = [];

  listaTributos: any;


  listar() {
    this.elementoService.list().subscribe((data) => {
      this.listaTributos = data;
    })
  }


  consultaElemento(): void {
    this.elementoService.getElemento().subscribe(
      (elementoSalvo) => {

      
          this.elemento = elementoSalvo
          console.log(this.elemento)

          for ( let i = 0; i < this.elemento.length; i++){
            this.outroEletento = elementoSalvo[i]
            console.log(this.outroEletento)
          }
         

      },
      (err) => {
        console.error(err);
      }
    );

  }

  getElementos() {
    this.elementoService.getElementos().subscribe((elementos: Elemen[]) => {
      this.elementos = elementos;
    });
  } 


  
  deleteCar(elementoNovo: Elemen) {
    console.log(elementoNovo)
    this.elementoService.deleteCar(elementoNovo).subscribe(
      () => {
       this.getElementos();
       window.location.reload();
       
      
   
    });
  }

  // defini se um carro será criado ou atualizado
  saveCar(form: NgForm) {
    if (this.elementoNovo.id !== undefined) {
      this.elementoService.updateCar(this.elementoNovo).subscribe(() => {
        this.cleanForm(form);
        
      });
    } else {
      this.elementoService.saveCar(this.elementoNovo).subscribe(() => {
        this.cleanForm(form);
      });
    }
    window.location.reload();
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getElementos();
    form.resetForm();
    this.elementoNovo = {} as Elemen;
  }

  




  constructor(public dialog: MatDialog, private elementoService: HomeService) { }

  ngOnInit(): void {
    this.consultaElemento();
    this.load();

    


  }

  load() {
    //Session storage salva os dados como string
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
    sessionStorage.refresh = false;
  }







  openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element === null ? {
        position: null,
        name: '',
        weight: null,
        symbol: ''


      } : {
        position: element.position,
        name: element.position,
        weight: element.weight,
        symbol: element.symbol
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result !== undefined) {
    //     if (this.dataSource.map(p => p.position).includes(result.position)) {
    //       this.dataSource[result.position - 1] = result
    //       this.table.renderRows();

    //     } else {
    //       this.dataSource.push(result)
    //       this.table.renderRows();

    //     }


    //   }
    // });

  }

  // deleteElement(possition: number): void {
  //   this.dataSource = this.dataSource.filter(p => p.position !== possition)

  // }
  editElement(element: PeriodicElement): void {
    this.openDialog(element)


  }


}
