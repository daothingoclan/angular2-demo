import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Page } from "./components/page";
import { HorizontalForm } from "./components/horizontalForm";
import { FormInput } from "./components/formInput";
import { FormButton } from "./components/formButton";
import { FormButtonPrimary } from "./components/formButtonPrimary";
import { FormButtonDefault } from "./components/formButtonDefault";

@NgModule({
    imports: [FormsModule],
    declarations: [Page, HorizontalForm, FormInput, FormButtonPrimary, FormButtonDefault, FormButton],
    exports: [
        FormsModule
        , Page
        , HorizontalForm
        , FormInput
        , FormButtonPrimary
        , FormButtonDefault
        , FormButton]
})
export class AppCommonModule { }
