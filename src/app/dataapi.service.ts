import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  //ประกาศตัวแปรแบบอาเรย์เพื่อรับค่าข้อมูล
  data_datailMen: any=[]; //ใช้งานคู่กับหน้าแสดงรายละเอียด

  constructor(
    public http:HttpClient
  ) { }

  //ฟังก์ชันการเพิ่มที่ส่งไปยัง API
  addMember(data:any){
    console.log("ค่ามาจากแอพ" , data);
    return this.http.post('http://127.0.0.1/api/insert.php',data);
  }


//สร้างขึ้นมาเพื่อดึงข้อมูลมาจาก api
  listMember(){
  return this.http.get('http://127.0.0.1/api/listmember.php');
}

//ฟังชั่นapiแก้ไขข้อมูล
editMember(dataEdit:any) {
  return this.http.put('http://127.0.0.1/api/update.php',dataEdit);
}

//สร้างสำหรับการลบข้อมูล
delMember(id:any){
  return this.http.delete('http://127.0.0.1/api/delete.php?id='+id);
}


}
