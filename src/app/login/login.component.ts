import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup = this.fp.group({
    account: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  hide: boolean = true;
  constructor(
    private authService: AuthServiceService, 
    private fp: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginProces(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result => {
        if(result.success){
          console.log(result);
          this.router.navigate(['/home']);
        } else {
          alert(result.message);
        }
      });
    }
  }

}
