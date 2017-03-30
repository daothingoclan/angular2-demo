import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "form-button",
    template: '<button class="btn {{class}}" (click)="this.onClick.emit()">{{label}}</button>'
})
export class FormButton {
    @Input() class: string;
    @Input() label: string;
    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
}