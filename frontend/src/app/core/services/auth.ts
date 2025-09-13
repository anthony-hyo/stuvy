import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {delay, Observable, of, tap} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Auth {

    private router = inject(Router);

    public login(credentials: any): Observable<any> {
        console.log(credentials);

        return of({token: 'fake-jwt-for-dev-purpose'})  // Fake JWT token
            .pipe(
                delay(2000), // Simulate delay
                tap(async () => await this.router.navigate(['/app/dashboard']))
            );
    }
}
