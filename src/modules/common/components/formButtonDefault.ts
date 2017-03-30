import { Component } from "@angular/core";
import { FormButton } from "./formButton";
@Component({
    selector: "form-button-default",
    template: "<form-button [class]=\"'btn-default'\" label=\"{{label}}\" (click)=\"this.onClick.emit()\" ></form-button>"
})
export class FormButtonDefault extends FormButton { }