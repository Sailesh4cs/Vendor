import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddVendorComponent } from './add-vendor.component'


const routes: Routes = [
    { path: "", component: AddVendorComponent },

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class AddVendorModule { }