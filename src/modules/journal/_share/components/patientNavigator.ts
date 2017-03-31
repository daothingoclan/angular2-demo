import { Component, EventEmitter, Output } from "@angular/core";
import { IPatientService } from "../../../journal/_share/services/iPatientService";

@Component({
    selector: "patient-navigator",
    templateUrl: 'src/modules/journal/_share/components/patientNavigator.html'
})

export class PatientNavigator {
    @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
    public onChanged() {
        this.updateIndex();
        this.onChange.emit(this.currentPatientId);
    }

    private patients: Array<any> = [];
    private currentPatientId: any;
    private index = 0;

    constructor() {
        let self = this;
        let patientService: IPatientService = window.ioc.resolve("IPatientService");

        patientService.getAllPatients().subscribe(
            (patients: Array<any>) => { return self.patients = patients; });
        // self.patients = [
        //     {
        //         "Id": 1,
        //         "name": "Lan"
        //     },
        //     {
        //         "Id": 2,
        //         "name": "Lan2"
        //     },
        //     {
        //         "Id": 3,
        //         "name": "Lan3"
        //     },
        // ]
        let firstIndex = 0;
        if (self.patients.length !== 0) {
            this.updateAndEmitCurrentPatient(firstIndex);
        }
    }

    public nextPatient() {
        if (!this.currentPatientId) return;
        this.index = (this.index === this.patients.length - 1) ? 0 : ++this.index;
        this.updateAndEmitCurrentPatient(this.index);
    }

    public prePaitent() {
        if (!this.currentPatientId) return;
        this.index = (this.index === 0) ? this.patients.length - 1 : --this.index;
        this.updateAndEmitCurrentPatient(this.index);
    }

    private updateIndex() {
        for (let i = 0; i <= this.patients.length - 1; i++) {
            if (this.patients[i].Id === parseInt(this.currentPatientId)) {
                this.index = i;
            }
        }
    }

    private updateAndEmitCurrentPatient(index: any) {
        this.currentPatientId = this.patients[index].Id;
        this.onChange.emit(this.currentPatientId);
    }
}
