import { Observable } from "rxjs";
export interface IAptJournalService {
    getAptsByPatient(patientId:number): Observable<Array<any>>;
}