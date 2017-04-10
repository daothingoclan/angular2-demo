import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "form-input",
    templateUrl: "dist/modules/common/components/formInput.html"
})

export class FormInput {
    @Input() label: string;
    @Input() value: string;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
    public onChanged() {
        this.valueChange.emit(this.value);
    }
}