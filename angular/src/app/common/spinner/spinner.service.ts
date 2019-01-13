import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {

    
    /**
     * Sagt aus ob der Spinner aktiv ist.
     */
    public shouldSpin: boolean = false;

    /**
     * Spinnt während des laden des Observables
     */
    spinObservable(o: Observable<any>) {
        this.spinPromise(o.toPromise());
    }

    /**
     * Spinnt während des laden des Promises
     */
    spinPromise(p: Promise<any>) {
        
        this.shouldSpin = true;
        p.then(() => {this.shouldSpin = false;})
        p.catch(() => {this.shouldSpin = false;})

    }

}