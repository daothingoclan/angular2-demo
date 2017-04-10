import { Observable } from "rxjs/observable";
export interface IConnector {
    get(url: string): Observable<any>;
}