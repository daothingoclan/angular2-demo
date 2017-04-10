import { Observable } from "rxjs/observable";
export interface IUserService {
    getUsers(): Observable<any>;
    getUser(userId: any): Observable<any>;
}