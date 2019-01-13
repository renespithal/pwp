import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AuthResource } from '../../resources/auth';
import { IUser } from '../../resources/user';
import { Injectable, Injector, ApplicationRef, PlatformRef } from '@angular/core';

@Injectable()
export class AuthService {

    /**
     * User können zur Laufzeit wechseln z.B. beim
     * Imprtsonaten, deswegen wird es als Suject
     * gespeichert
     */
    protected user : BehaviorSubject<IUser>;

    /**
     * das JWT Token
     */
    protected token : string;

    constructor(protected injector: Injector) {
        this.token = (<any>window).jwt_token;
        this.user = new BehaviorSubject<IUser>(null);
    }

    /**
     * Kann später in den Service Injeziert werden
     * @todo ggf. später noch über Konstruktor
     */
    protected getAuthResource(): AuthResource {
        return this.injector.get(AuthResource);
    }

    /**
     * @param promise 
     */
    protected setUserByPromise(promise: Promise<IUser>) {
        promise.then(user => {
            this.setUser(user);
        });
    }

    /**
     * Gibt das JWT Token zurück
     */
    public getToken() : string {
        return this.token;
    }

    /**
     * Zugriff aufs Subject als Obserable
     */
    public userAsObserable(): Observable<IUser> {
        return this.user.asObservable();
    }

    /**
     * Der momentane angemeldete User
     * Achtung! User können zur Laufzeit wechseln
     */
    public currentUser() : IUser {
        return this.user.value;
    }

    /**
     * Abrufen des aktuellen Users.
     * Wird dann automatisch auch als aktueller Benutzer markiert
     */
    public loadUser(): Promise<IUser> {
        let r = this.getAuthResource().currentUser()
        r.then(u => {
            this.setUser(u);
        });
        return r;
    }

    /**
     * Übernehmen des Benutzers, als aktueller Benutzer.
     * Impersonating 'tags' wird hier übernommen
     * @param user 
     */
    public setUser(user: IUser) {
        // if (this.currentUser() && this.currentUser().impersonating) {
        //     Object.assign(user, {impersonating: true});
        // }
        this.user.next(user);
    }

    /**
     * 
     */
    public logout() {
        window.location.href = '/logout';
    }


}