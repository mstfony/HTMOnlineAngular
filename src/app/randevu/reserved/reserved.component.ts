import { AlertifyService } from './../../services/alertify.service';
import { Randevu } from './../../models/randevu';
import { RandevuService } from './../../services/randevu.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css'],
  providers:[RandevuService]
})
export class ReservedComponent implements OnInit {

  constructor(private randevuService:RandevuService,private alertService:AlertifyService) { }
  
  randevuList: Randevu[] = [];
  filter = '';
  mesaj!:String;
  
  ngOnInit() {
    this.getAppointmentList();
  }

  getAppointmentList(){
    this.randevuService.getAppointmentsById().subscribe(data=>{
      this.randevuList=data;
     
    })
  }

  deleteAppointment(siraNo:number){
    Swal.fire({
      title: 'Randevunuz silinecek, emin misiniz?',
      showDenyButton:true,
      confirmButtonText: 'Evet',
      denyButtonText: 'İptal',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.randevuService.deleteAppointment(siraNo).subscribe(data=>{
          
          this.alertService.success("Randevunuz Silindi")
          setTimeout(function(){
            window.location.reload();
          },500)
          
        })
      } else if (result.isDenied) {
        Swal.fire('İptal Edildi', '', 'info')
      }
    })
  }

}
