import { Observable } from "rxjs";
export interface IAptJournalService {
    getAptsByPatient(patientId: any): Observable<Array<any>>;
}