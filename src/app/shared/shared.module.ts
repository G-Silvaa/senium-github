import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./material.module";
import {FormsModule} from "@angular/forms";
import {DomainTypesModule} from "./domain-types/domain-types.module";
import {ComponentsModule} from "./components/components.module";
import {LayoutsModule} from "./layouts/layouts.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        DomainTypesModule,
        ComponentsModule,
        LayoutsModule
    ],
    exports: [
        MaterialModule,
        FormsModule,
        DomainTypesModule,
        ComponentsModule,
        LayoutsModule
    ]
})
export class SharedModule {
}
