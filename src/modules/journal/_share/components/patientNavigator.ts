import { Component, EventEmitter, Output, Input } from "@angular/core";
import { IPatientService } from "../../../journal/_share/services/iPatientService";

@Component({
    selector: "patient-navigator",
    templateUrl: 'src/modules/journal/_share/components/patientNavigator.html'
})

export class PatientNavigator {
    @Input() isDisabled: any = false;
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
            (patients: Array<any>) => {
                self.patients = patients;
                let firstIndex = 0;
                if (patients.length !== 0) {
                    this.updateAndEmitCurrentPatient(firstIndex);
                }
                return self.patients;
            });
    }

    public onNextPatientClicked() {
        if (!this.currentPatientId) return;
        this.index = (this.index === this.patients.length - 1) ? 0 : ++this.index;
        this.updateAndEmitCurrentPatient(this.index);
    }

    public onPrevPatientClicked() {
        if (!this.currentPatientId) return;
        this.index = (this.index === 0) ? this.patients.length - 1 : --this.index;
        this.updateAndEmitCurrentPatient(this.index);
    }

    private updateIndex() {
        for (let i = 0; i <= this.patients.length - 1; i++) {
            if (this.patients[i].id === parseInt(this.currentPatientId)) {
                this.index = i;
            }
        }
    }

    private updateAndEmitCurrentPatient(index: any) {
        this.currentPatientId = this.patients[index].id;
        this.onChange.emit(this.currentPatientId);
    }
}
