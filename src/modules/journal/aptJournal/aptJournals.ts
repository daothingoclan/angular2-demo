import { Component } from "@angular/core";
import aptJournalHelper from "../_share/helpers/aptJournalHelper";
import appConst from "../_share/const/apiBaseUrl";

@Component({
    templateUrl: "src/modules/journal/aptJournal/aptJournals.html",
    inputs: ['aptJournals']
})

export class AptJournals {
    public patientId: string;
    public aptJournals: Array<any>;
    public dateFormat: string = appConst.formatDate;
    public isDisabled: any = true;
  
    public onPatientIdChanged(patientId: any) {
        this.patientId = patientId;
        this.loadAptJournals(patientId);
    }

    private loadAptJournals(patientId: string) {
        this.isDisabled = true;
        let iaptJournalService = window.ioc.resolve("IAptJournalService");
        iaptJournalService.getAptsByPatient(patientId).subscribe(
            (aptJournals: Array<any>) => {
                this.loadAptJournalDone(aptJournals);
            }
        );
    }

    private loadAptJournalDone(aptJournals: Array<any>) {
        let self = this;
        aptJournals.forEach(item => {
            item.html = aptJournalHelper.convertDataToHtml(item.journal.data);
        });
        self.aptJournals = aptJournals;
        this.isDisabled = false;
    }

    public getSize(item: any, index: number) {
        let size = 300;
        //var element = document.elem('all_items_container');
        // element.innerHTML = item.html;
        // size = element.clientHeight;
        return size;
    }
}
