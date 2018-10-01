import { Component, OnInit } from '@angular/core';
// import { datamhs } from '../shared/datamhs';
import { Data } from 'src/app/kuis1/shared/data';


@Component({
  selector: 'app-kuis1',
  templateUrl: './kuis1.component.html',
  styleUrls: ['./kuis1.component.css']
})
export class Kuis1Component implements OnInit {
  nim ='';
  nama ='';
  kelas ='';
  daftarMhs:Data[] = [];
  mhs;
  constructor() { }

  ngOnInit() {
  }

  tambahMhs(){
    this.mhs = new Data(this.nim, this.nama, this.kelas); 
    this.daftarMhs.push(this.mhs);
    this.nim ='';
    this.nama ='';
    this.kelas ='';
  }


}