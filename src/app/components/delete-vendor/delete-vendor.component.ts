import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-vendor',
  templateUrl: './delete-vendor.component.html',
  styleUrls: ['./delete-vendor.component.css']
})
export class DeleteVendorComponent implements OnInit {

  public event: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<DeleteVendorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, ) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.event.emit({ data: this.data.id });
    this.dialogRef.close();
  }
  close(): void {
    this.dialogRef.close();
  }
}
