import { Observable } from "rxjs/observable";
export interface IPatientService {
    getAllPatients(): Observable<Array<any>>;
}