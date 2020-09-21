import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../data/data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  userForm: FormGroup;
  modalHeader: string;
  vendorCreate = {
    vendorName: '',
    address: '',
    category: '',
    id: 0,
    createDate: new Date()
  };
  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<AddVendorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService, private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    if (this.data.id > 0) {
      this.modalHeader = "Edit Venor"
      this.editUser(this.data)
    } else {
      this.modalHeader = "Create Venor"
      this.vendorCreate.id = JSON.parse(localStorage.getItem("vendorData")).length + 1;
    }
    throw new Error("Method not implemented.");
  }

  /**
  * Creates update user form
*/
  createForm() {
    this.userForm = this.fb.group({
      vendorName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      category: [[], Validators.required],
    });
  }

  /**
    * Auto populate field with User data.
    *
    * @param userData Contains User Data.
 */
  public editUser(userData) {
    debugger
    this.vendorCreate.id = userData.id;
    this.userForm.get('vendorName').setValue(userData.vendorName);
    this.userForm.get('address').setValue(userData.address);
    this.userForm.get('category').setValue(userData.category);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    debugger
    if (this.userForm.valid) {
      this.vendorCreate.vendorName = this.userForm.get('vendorName').value,
        this.vendorCreate.address = this.userForm.get('address').value,
        this.vendorCreate.category = this.userForm.get('category').value



      this.event.emit({ data: this.vendorCreate });
      this.dialogRef.close();
    }
  }

  categories = this.dataService.getCategories();
}