import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";


@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    errorMsg: string;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private loginService: LoginService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', [Validators.required, Validators.minLength(5)]],
            password: ['', [Validators.required, Validators.minLength(5)]]
        });        
    }

    get userName() {
        return this.loginForm.get('userName');
    }

    get password() {
        return this.loginForm.get('password');
    }

    submit() {
        this.loginService.authenticate(this.loginForm.value).subscribe((res: any) => {
            if (res) {
                localStorage.setItem('userName', this.userName.value);                
                if (res.role === 'admin') {                    
                    this.router.navigateByUrl('admin/dashboard');
                    localStorage.setItem('role', 'admin');

                } else {
                    this.router.navigateByUrl('user/dashboard');
                    localStorage.setItem('role', 'user');
                }
                
            } else {
                localStorage.clear();
                this.errorMsg = "Invalid User Id or Password";
            }
        });
        
    }
}