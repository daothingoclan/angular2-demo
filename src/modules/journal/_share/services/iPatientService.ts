import { Observable } from "rxjs";
export interface IPatientService {
    getAllPatients(): Observable<Array<any>>;
}