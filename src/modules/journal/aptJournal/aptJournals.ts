import { Component } from "@angular/core";
import aptJournalHelper from "../_share/helpers/aptJournalHelper";

@Component({   
    templateUrl: "src/modules/journal/aptJournal/aptJournals.html"
})

export class AptJournals {
    public patientId: string;
    public aptJournals: Array<any>;

    constructor() {
        this.onPatientIdChanged("49");
    }

    public onPatientIdChanged(patientId: string) {
        this.patientId = patientId;
        this.loadAptJournals(patientId);
    }

    private loadAptJournals(patientId: string) {
        let iaptJournalService = window.ioc.resolve("IAptJournalService");
        iaptJournalService.getAptsByPatient(patientId).subscribe(
            (aptJournals: Array<any>) => {
                this.loadAptJournalDone(aptJournals);
                console.table(aptJournals[0].journal);
            }
        );
    }

    private loadAptJournalDone(aptJournals: Array<any>) {
        let self = this;
        aptJournals.forEach(item => {
            item.html = aptJournalHelper.convertDataToHtml(item.journal.data);
        });
        self.aptJournals = aptJournals;
        console.log(self.aptJournals);
    }
}
