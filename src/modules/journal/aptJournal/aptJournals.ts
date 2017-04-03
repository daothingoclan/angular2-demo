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
    private dict: any;

    public onPatientIdChanged(patientId: any) {
        this.patientId = patientId;
        this.loadAptJournals(patientId);
    }

    public getItemSize(item: any, index: number) {
        return item.size;
    }

    private loadAptJournals(patientId: string) {
        let iaptJournalService = window.ioc.resolve("IAptJournalService");
        iaptJournalService.getAptsByPatient(patientId).subscribe(
            (aptJournals: Array<any>) => {
                this.loadAptJournalDone(aptJournals);
            }
        );
    }

    private loadAptJournalDone(aptJournals: Array<any>) {
        let self = this;
        let allHtmlElements: any = "";
        self.dict = new Object();
        aptJournals.forEach(item => {
            item.html = aptJournalHelper.convertDataToHtml(item);
            allHtmlElements += item.html;
            self.dict[item.id] = item;
        });
        this.calculateItemHeight(allHtmlElements, aptJournals);
        self.aptJournals = aptJournals;
    }

    private calculateItemHeight(allHtmlElements: any, aptJournals: Array<any>) {
        let element = document.getElementById('all_items_container');
        element.innerHTML = allHtmlElements;
        let height = 0;

        let children = element.childNodes;
        for (var i = 0; i < children.length; i++) {
            let child = children[i];
            let id = child.getAttribute('id');
            let childHeight = child.offsetHeight;
            height += childHeight;
            this.dict[id].size = childHeight;
        }
    }
}
