import { AlertifyService } from './../services/alertify.service';
import { AccountService } from './../services/account.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  modelUser: User = new User();
  keyIsHidden: boolean = true;
  smsSended!: string;

  constructor(private accountService: AccountService,private alertService:AlertifyService) {}

  ngOnInit() {}
  getSmsKey(user: User) {
    this.accountService.getKey(this.modelUser.identity).subscribe({
      next: (data:any) => {
        this.keyIsHidden = false;
        this.smsSended=data['phoneNumber']+" numaralı telefona sms gönderildi!";
      },
      error: (error) => {
        this.keyIsHidden = true;
        this.alertService.error("TC Kimlik No Hatalı/Identity not valid")
      },
    });
  }
  login(user: User) {
    this.accountService.login(user);
  }
}
