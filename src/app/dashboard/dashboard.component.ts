import { Component, OnInit } from '@angular/core';
import { ChartDataSets,ChartOptions,ChartType } from 'chart.js';
import { Label,Color} from 'ng2-charts';
import {reportes, reporte} from './bd';
import { toASCII } from 'punycode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sdate =  new Date("01/01/2020");
  fdate = new Date("01/31/2020");

  totalOrdenes: number = 0;

  reportes: reporte[] = reportes;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Coomeva','Coosalud','Mutual Ser','Caprecom','Nueva Eps'];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Cantidad de clientes' }
  ];

  public ingresosData: ChartDataSets[] = [
    { data: [100, 53, 80, 81, 56, 55, 40], label: 'Ingresos en millones' }
  ];

  public ingresosColors: Color[] = [
    { 
      backgroundColor: 'rgba(63,191,63,1)',
      hoverBackgroundColor: 'rgba(63,191,63,1)',
      hoverBorderColor: 'rgba(63,191,63,1)',
      borderColor: 'rgba(63,191,63,1)'
    }
  ];

  public ingresosALabels: Label[] = ['2015','2016','2017','2018','2019'];

  public ingresosAData: ChartDataSets[] = [
    { data: [100, 53, 80, 81, 56, 55, 40], label: 'Coomeva' },
    { data: [100, 53, 80, 81, 56, 55, 40], label: 'Coosalud' },
    { data: [100, 53, 80, 81, 56, 55, 40], label: 'Mutual Ser' },
    { data: [100, 53, 80, 81, 56, 55, 40], label: 'Caprecom' },
    { data: [100, 53, 80, 81, 56, 55, 40], label: 'Nueva Eps' }
  ];

  public examenesLabels: Label[] = ['Urianalisis','Coprologico','Examen de sangres','Prueba de embarazo','Inmunologia','VDRL','Hematologia'];

  public examenesData: ChartDataSets[] = [
    { data: [100, 53, 80, 81, 56, 55, 40, 22], label: 'Coomeva' },
    { data: [100, 53, 80, 81, 56, 55, 40, 22], label: 'Coosalud' },
    { data: [100, 53, 80, 81, 56, 55, 40, 22], label: 'Mutual Ser' },
    { data: [100, 53, 80, 81, 56, 55, 40, 22], label: 'Caprecom' },
    { data: [100, 53, 80, 81, 56, 55, 40, 22], label: 'Nueva Eps' }
  ];

  public ingresosMLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Noviembre','Diciembre'];

  public ingresosMData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40], label: 'Coomeva' },
    { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40], label: 'Coosalud' },
    { data: [180, 480, 770, 90, 1000, 270, 400, 65, 59, 80, 81, 56, 55, 40], label: 'Mutual Ser'},
    { data: [180, 480, 770, 90, 1000, 270, 400, 65, 59, 80, 81, 56, 55, 40], label: 'Caprecom'},
    { data: [180, 480, 770, 90, 1000, 270, 400, 65, 59, 80, 81, 56, 55, 40], label: 'Nueva Eps'}
  ];

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40], label: 'Coomeva' },
    { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40], label: 'Coosalud' },
    { data: [180, 480, 770, 90, 1000, 270, 400, 65, 59, 80, 81, 56, 55, 40], label: 'Mutual Ser'},
    { data: [180, 480, 770, 90, 1000, 270, 400, 65, 59, 80, 81, 56, 55, 40], label: 'Caprecom'},
    { data: [180, 480, 770, 90, 1000, 270, 400, 65, 59, 80, 81, 56, 55, 40], label: 'Nueva Eps'}
  ];

  public actividadesData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40], label: 'Coomeva' },
    { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40], label: 'Coosalud' },
    { data: [180, 480, 770, 90, 1000, 270, 400, 65, 59, 80, 81, 56, 55, 40], label: 'Mutual Ser'},
    { data: [180, 480, 770, 90, 1000, 270, 400, 65, 59, 80, 81, 56, 55, 40], label: 'Caprecom'},
    { data: [180, 480, 770, 90, 1000, 270, 400, 65, 59, 80, 81, 56, 55, 40], label: 'Nueva Eps'}
  ];

  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Noviembre','Diciembre'];
  public lineChartOptions: ChartOptions = {
    responsive: true
  };

  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor() { }

  ngOnInit() {
    this.totalO();
    this.randomize();
  }

  totalO(){
    for(let reporte of reportes){
      this.totalOrdenes += reporte.ordenes;
    }
  }

  public randomize(): void {
    
    const data = 
    [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
    this.barChartData[0].data = data;

    const dataI = 
    [
      Math.round(Math.random() * 1000),
      Math.round(Math.random() * 1000),
      Math.round(Math.random() * 1000),
      Math.round(Math.random() * 1000),
      Math.round(Math.random() * 1000)
    ];
    this.ingresosData[0].data = dataI;

    for(let i=0;i<this.reportes.length;i++){
      this.reportes[i].ordenes = Math.round(Math.random() * 100);
    }

    this.totalO();

    for(let i=0;i<this.examenesData.length;i++){
      const data =[
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
        ];
      
        this.examenesData[i].data = data;
    }

    for(let i=0;i<this.ingresosMData.length;i++){
      const data =[
        Math.round(Math.random() * 1000),
        Math.round(Math.random() * 1000),
        Math.round(Math.random() * 1000),
        Math.round(Math.random() * 1000),
        Math.round(Math.random() * 1000),
        Math.round(Math.random() * 1000),
        Math.round(Math.random() * 1000),
        Math.round(Math.random() * 1000),
        Math.round(Math.random() * 1000),
        Math.round(Math.random() * 1000)
        ];
        this.ingresosMData[i].data = data;
    }

    for(let i=0;i<this.ingresosAData.length;i++){
      const data =[
        Math.round(Math.random() * 10000),
        Math.round(Math.random() * 10000),
        Math.round(Math.random() * 10000),
        Math.round(Math.random() * 10000),
        Math.round(Math.random() * 10000),
        ];
        this.ingresosAData[i].data = data;
    }

    for(let i=0;i<this.actividadesData.length;i++){
      const data =[
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
        ];
        this.actividadesData[i].data = data;
    }

    for(let i=0;i<this.lineChartData.length;i++){
      const data =[
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
        ];
        this.lineChartData[i].data = data;
    }

  }

}
