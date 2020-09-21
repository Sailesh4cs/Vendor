import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddVendorModule } from "./add-vendor.module";
import { AddVendorComponent } from './add-vendor.component'


@NgModule({
    imports: [CommonModule, AddVendorModule],
    declarations: [AddVendorComponent]
})
export class PostsModule { }