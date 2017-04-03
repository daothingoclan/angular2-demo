import { Component } from "@angular/core";
import {IAptJournalService} from "../_share/services/iaptJournalService";
import aptJournalHelper from "../_share/helpers/aptJournalHelper";
import appConst from "../_share/const/appConstant";

const CONTAINER_ELEMENT = "all_items_container";
@Component({
    templateUrl: "src/modules/journal/aptJournal/aptJournals.html",
    inputs: ['aptJournals']
})

export class AptJournals {
    public patientId: any;
    public aptJournals: Array<any>;
    public dateFormat: string = appConst.formatDate;
    public isDisabled: any = true;
  
    private dict: any;

    public onPatientIdChanged(patientId: any) {
        this.patientId = patientId;
        this.loadAptJournals(patientId);
    }

    public getItemSize(item: any, index: number) {
        return item.size;
    }

    private loadAptJournals(patientId: any) {
        let iaptJournalService: IAptJournalService = window.ioc.resolve("IAptJournalService");
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
            item.html = aptJournalHelper.appJournalToHtml(item);
            allHtmlElements += item.html;
            self.dict[item.id] = item;
        });
        this.calculateItemHeight(allHtmlElements, aptJournals);
        self.aptJournals = aptJournals;
        this.isDisabled = false;
    }

    private calculateItemHeight(allHtmlElements: any, aptJournals: Array<any>) {
        let element = document.getElementById(CONTAINER_ELEMENT);
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
