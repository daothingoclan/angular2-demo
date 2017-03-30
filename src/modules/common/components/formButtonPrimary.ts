import { Component } from "@angular/core";
import { FormButton } from "./formButton";
@Component({
    selector: "form-button-primary",
    template: "<form-button [class]=\"'btn-primary'\" label=\"{{label}}\" (click)=\"this.onClick.emit()\" ></form-button>"
})
export class FormButtonPrimary extends FormButton { }