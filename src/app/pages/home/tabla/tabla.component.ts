import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contenedor } from 'src/app/models/contenedor';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {


  dataSource!: MatTableDataSource<Contenedor>;
  displayedColumns: string[] = ['id', 'cnt', 'longi', 'fecha'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cs: ConexionService) { }

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos(){
    this.cs.getPacientes().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
      error:(err)=>{
        alert("Error al mostrar los contenedores");
      },
    });


  }

}
