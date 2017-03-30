import { Observable } from "rxjs";
export interface IConnector {
    get(url: string): Observable<any>;
}