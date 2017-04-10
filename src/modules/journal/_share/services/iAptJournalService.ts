import { Observable } from "rxjs/observable";
export interface IAptJournalService {
    getJournalsByPatient(patientId: any): Observable<Array<any>>;
}