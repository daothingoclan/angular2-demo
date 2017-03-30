import { Observable } from "rxjs";
export interface IUserService {
    getUsers(): Observable<any>;
    getUser(userId: any): Observable<any>;
}