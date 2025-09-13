import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {Auth} from "../../../../core/services/auth";


@Component({
    selector: 'app-ddd',
    imports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule
    ],
    templateUrl: './login.html',
    styleUrl: './login.scss',
})
export class Login {

    private readonly formBuilder = inject(FormBuilder);
    private readonly authService = inject(Auth)

    public readonly loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });

    public get email() {
        return this.loginForm.get('email')!;
    }

    public get password() {
        return this.loginForm.get('password')!;
    }

    protected onSubmit(): void {
        if (this.loginForm.invalid) {
            return;
        }
        
        this.authService
            .login(this.loginForm.value)
            .subscribe({
                next: result => {
                    console.log(result);
                },
                error: err => {
                    console.error('Login error', err);
                }
            })
    }

}
