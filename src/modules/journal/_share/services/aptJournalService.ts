import { Observable } from "rxjs";
import { IConnector } from "../../../common/connector/iconnector";
import { IAptJournalService } from "./iAptJournalService";
import appConst from "../const/apiBaseUrl";

export class AptJournalService implements IAptJournalService {
    public getAptsByPatient(patientId: any): Observable<Array<any>> {
        let iconnector: IConnector = window.ioc.resolve("IConnector");
        let url = String.format("{0}/api/appointment/{1}", appConst.apiBaseUrl, patientId);
        return iconnector.get(url);
    }
}