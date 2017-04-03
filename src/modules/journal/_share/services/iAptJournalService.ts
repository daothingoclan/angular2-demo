import { Observable } from "rxjs";
export interface IAptJournalService {
    getJournalsByPatient(patientId: any): Observable<Array<any>>;
}