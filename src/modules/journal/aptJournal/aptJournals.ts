import {Component} from "@angular/core";
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
        let self = this;
        let iaptJournalService = window.ioc.resolve("IAptJournalService");
        iaptJournalService.getAptsByPatient(patientId).subscribe(
            (aptJournals: Array<any>) => {
                self.aptJournals = aptJournals;
            }
        );
    }
}
