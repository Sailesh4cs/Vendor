import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    template: `
 <h1 mat-dialog-title>Hello</h1>
 <div mat-dialog-content>
 <h3><p>InValid Credential</p></h3>
 </div>
 <div mat-dialog-actions>
 <button mat-button (click)="close()">Close</button>
 </div>
`
})
export class LogoutDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<LogoutDialogComponent>) { }

    close(): void {
        this.dialogRef.close();
    }
}