import { DataapiService } from './../dataapi.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  member: any = [];//ประกาศค่าตัวแปรอาเรย์ เพื่อมารับค่า

  constructor(
    private http: HttpClient,
    public dataapi: DataapiService,
    private nav: NavController
  ) {
  this.loadDataMem();
  }

  ngOnInit() {
    this.loadDataMem();
  }

  loadDataMem() {
    this.dataapi.listMember().subscribe({
      next: (res: any) => {
        console.log('แสดงข้อมูลได้สำเร็จ');
        this.member = res;

      },
      error:(error: any) => {
        console.log('Error',error)
      }
    });
  }

edit(datamem: any){
 this.dataapi.data_datailMen = datamem
 console.log(datamem);
 this.nav.navigateForward('/edit');
}

delMem(id:any){
  this.dataapi.delMember(id).subscribe({
  next: (res:any) =>{
   console.log("ลบข้อมูลสำเร็จ",res)
  },
error:(error:any) =>{
  console.log('ไม่สามารถลบข้อมูลได้',error)
},
});
this.loadDataMem();
}

}
