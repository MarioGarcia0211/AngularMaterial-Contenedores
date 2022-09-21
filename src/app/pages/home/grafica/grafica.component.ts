import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Contenedor } from 'src/app/models/contenedor';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {

  charts: any = [];

  totalDatos = 0;

  //Dia mayor
  contDiaMayor: any;
  contDiaMesMayor: any;
  contDiaYearMayor: any;
  contDMaTotal: any;

  //Dia menor
  contDiaMenor: any;
  contDiaMesMenor: any;
  contDiaYearMenor: any;
  contDMeTotal: any;

  //Mes mayor
  contMesMayor: any;
  contMesYearMayor: any;
  contMesMayorTotal: any;

  //Mes mayor
  contMesMenor: any;
  contMesYearMenor: any;
  contMesMenorTotal: any;

  //años
  cont2017 = 0;
  cont2018 = 0;
  contNull = 0;
  porc2017 = 0;
  porc2018 = 0;
  porcNull = 0;

  //longi
  cont20 = 0;
  cont40 = 0;
  porc20 = 0;
  porc40 = 0;

  //mes 2017
  contOct = 0;
  contNov = 0;
  contDic = 0;
  porcOct = 0;
  porcNov = 0;
  porcDic = 0;

  //mes 2018
  contEne = 0;
  contFeb = 0;
  contMar = 0;
  contAbr = 0;
  contMay = 0;
  contJun = 0;
  contJul = 0;
  contAgo = 0;
  contSep = 0;
  contOctu = 0;

  constructor(private cs: ConexionService) { }

  ngOnInit(): void {
    this.setDatoSimple();
    this.setCharts();
  }

  setDatoSimple(){
    this.cs.getMesMayor().subscribe((res: Contenedor[]) =>{
      console.log(res);
      this.contMesMayor = res.map((res: any) => res.nombreMes);
      this.contMesYearMayor = res.map((res: any) => res.año)
      this.contMesMayorTotal = res.map((res: any) => res.total);
    });

    this.cs.getMesMenor().subscribe((res: Contenedor[]) =>{
      this.contMesMenor = res.map((res: any) => res.nombreMes);
      this.contMesYearMenor = res.map((res: any) => res.año)
      this.contMesMenorTotal = res.map((res: any) => res.total);
    });

    this.cs.getDiaMayor().subscribe((res: Contenedor[]) =>{
      this.contDiaMayor = res.map((res: any) => res.convertidoDia);
      this.contDiaMesMayor = res.map((res: any) => res.nombreMes);
      this.contDiaYearMayor = res.map((res: any) => res.convertidoAño);
      this.contDMaTotal = res.map((res: any) => res.totalDia);

    });

    this.cs.getDiaMenor().subscribe((res: Contenedor[]) =>{
      this.contDiaMenor = res.map((res: any) => res.convertidoDia);
      this.contDiaMesMenor = res.map((res: any) => res.nombreMes);
      this.contDiaYearMenor = res.map((res: any) => res.convertidoAño);
      this.contDMeTotal = res.map((res: any) => res.totalDia);

    });
  }

  setCharts(){
    this.cs.getAño().subscribe((lista: Contenedor[]) => {

      this.totalDatos = lista.length;

      lista.forEach((res: any) => {

        if(res.año == '2017'){
          this.cont2017++;
        }if(res.año == '2018'){
          this.cont2018++;
        }if(res.año == null || res.año == undefined ){
          this.contNull++;
        }

        this.porc2017 = (this.cont2017 * 100)/lista.length;
        this.porc2018 = (this.cont2018 * 100)/lista.length;
        this.porcNull = (this.contNull * 100)/lista.length;

      });

      this.charts = new Chart ('años', {
        type: 'pie',
        data:{
          labels: ['2017', '2018', 'Null'],
          datasets: [{
            label: 'Años',
            data: [this.cont2017, this.cont2018, this.contNull],
            // backgroundColor: ['rgb(19, 76, 174)', 'rgb(200, 3, 131)'],
            // hoverBackgroundColor: ['rgb(54, 121, 180)', 'rgb(204, 46, 149)'],
            // hoverBorderColor: ['rgb(12, 58, 136)', 'rgb(158, 0, 103)'],
            borderWidth: 2
          }]
        }
      })

      //-------------------------------------------------------------------//

      lista.forEach((res: any) => {
        if(res.longi == '20'){
          this.cont20++;
        }if(res.longi == '40'){
          this.cont40++;
        }

        this.porc20 = (this.cont20 * 100)/lista.length;
        this.porc40 = (this.cont40 * 100)/lista.length;

      });

      this.charts = new Chart ('longitud', {
        type: 'pie',
        data:{
          labels: ['20', '40'],
          datasets: [{
            label: 'Longitud',
            data: [this.cont20, this.cont40],
            // backgroundColor: ['rgb(19, 76, 174)', 'rgb(200, 3, 131)'],
            // hoverBackgroundColor: ['rgb(54, 121, 180)', 'rgb(204, 46, 149)'],
            // hoverBorderColor: ['rgb(12, 58, 136)', 'rgb(158, 0, 103)'],
            borderWidth: 2
          }]
        }
      })

      //------------------------------------------------------------------------//

      lista.forEach((res: any) => {
        if(res.mes == '10' && res.año == '2017'){
          this.contOct++;
        }if(res.mes == '11' && res.año == '2017'){
          this.contNov++;
        }if(res.mes == '12' && res.año == '2017'){
          this.contDic++;
        }

        this.porcOct = (this.contOct * 100)/lista.length;
        this.porcNov = (this.contNov * 100)/lista.length;
        this.porcDic = (this.contDic * 100)/lista.length;

      })

      this.charts = new Chart ('mes2017', {
        type: 'pie',
        data:{
          labels: ['Octubre', 'Noviembre', 'Diciembre'],
          datasets: [{
            label: 'Mes 2017',
            data: [this.contOct, this.contNov, this.contDic],
            // backgroundColor: ['rgb(19, 76, 174)', 'rgb(200, 3, 131)'],
            // hoverBackgroundColor: ['rgb(54, 121, 180)', 'rgb(204, 46, 149)'],
            // hoverBorderColor: ['rgb(12, 58, 136)', 'rgb(158, 0, 103)'],
            borderWidth: 2
          }]
        }
      })

      //---------------------------------------------------------------------//

      lista.forEach((res: any) => {
        if(res.mes == '1' && res.año == '2018'){
          this.contEne++;
        }if(res.mes == '2' && res.año == '2018'){
          this.contFeb++;
        }if(res.mes == '3' && res.año == '2018'){
          this.contMar++;
        }if(res.mes == '4' && res.año == '2018'){
          this.contAbr++;
        }if(res.mes == '5' && res.año == '2018'){
          this.contMay++;
        }if(res.mes == '6' && res.año == '2018'){
          this.contJun++;
        }if(res.mes == '7' && res.año == '2018'){
          this.contJul++;
        }if(res.mes == '8' && res.año == '2018'){
          this.contAgo++;
        }if(res.mes == '9' && res.año == '2018'){
          this.contSep++;
        }if(res.mes == '10' && res.año == '2018'){
          this.contOctu++;
        }
      })

      this.charts = new Chart ('mes2018', {
        type: 'pie',
        data:{
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'],
          datasets: [{
            label: 'Mes 2018',
            data: [this.contEne, this.contFeb, this.contMar, this.contAbr, this.contMay, this.contJun, this.contJul, this.contAgo, this.contSep, this.contOctu],
            // backgroundColor: ['rgb(19, 76, 174)', 'rgb(200, 3, 131)'],
            // hoverBackgroundColor: ['rgb(54, 121, 180)', 'rgb(204, 46, 149)'],
            // hoverBorderColor: ['rgb(12, 58, 136)', 'rgb(158, 0, 103)'],
            borderWidth: 2
          }]
        }
      })

      //---------------------------------------------------------------------------------------
      this.charts = new Chart ('chart2017', {
        type: 'line',
        data:{
          labels: ['Octubre', 'Noviembre', 'Diciembre'],
          datasets: [{
            label: 'Total de contenedores',
            data: [this.contOct, this.contNov, this.contDic],
            // backgroundColor: ['rgb(19, 76, 174)', 'rgb(200, 3, 131)'],
            // hoverBackgroundColor: ['rgb(54, 121, 180)', 'rgb(204, 46, 149)'],
            // hoverBorderColor: ['rgb(12, 58, 136)', 'rgb(158, 0, 103)'],
            fill: true,
            tension: 0.1
          }]
        }
      })
      //--------------------------------------------

      this.charts = new Chart ('chart2018', {
        type: 'line',
        data:{
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'],
          datasets: [{
            label: 'Total de contenedores',
            data: [this.contEne, this.contFeb, this.contMar, this.contAbr, this.contMay, this.contJun, this.contJul, this.contAgo, this.contSep, this.contOctu],
            fill: true,
            tension: 0.1
          }],

        }
      });

    });

    this.cs.getDia().subscribe((res: Contenedor[]) =>{

      let fechas = res.map((res: any) => res.fecha);

      let total = res.map((res: any) => res.totalxDia);

      this.charts = new Chart ('totaldia', {
        type: 'bar',
        data:{
          labels: fechas,
          datasets: [{
            label: 'Total de contenedores',
            data: total,
          }],

        }
      })
    })

  }
}
