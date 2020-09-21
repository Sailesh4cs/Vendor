import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { AddVendorComponent } from '../../components/add-vendor/add-vendor.component';
import { DeleteVendorComponent } from '../delete-vendor/delete-vendor.component';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vendor-listing',
  templateUrl: './vendor-listing.component.html',
  styleUrls: ['./vendor-listing.component.css']
})
export class VendorListingComponent {
  animal: string;
  name: string;
  searchedKeyword: string;
  dataSource: MatTableDataSource<[]>;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService, private router: Router, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(JSON.parse(localStorage.getItem('vendorData')));
  }

  displayedColumns = ['createDate', 'vendorName', 'category', 'address', 'edit', 'delete'];

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator)
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddVendorComponent, {
      width: '600px',
      data: 'Add Post',
      scrollStrategy: new NoopScrollStrategy()
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      debugger
      this.dataService.addVendor(result.data);
      this.dataSource = new MatTableDataSource(JSON.parse(localStorage.getItem('vendorData')));
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(element): void {
    debugger;
    localStorage.setItem("deletedItem", element)
    let dialogRef = this.dialog.open(DeleteVendorComponent, {
      width: '300px',
      data: element,
      scrollStrategy: new NoopScrollStrategy()
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.deleteVendor(result.data);
      this.dataSource = new MatTableDataSource(JSON.parse(localStorage.getItem('vendorData')));
      this.dataSource.paginator = this.paginator;
    });
  }

  edit(element): void {
    debugger;
    let dialogRef = this.dialog.open(AddVendorComponent, {
      width: '600px',
      data: element,
      scrollStrategy: new NoopScrollStrategy()
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      debugger
      this.dataService.updateVendor(result.data);
      this.dataSource = JSON.parse(localStorage.getItem('vendorData'));
    });
  }

  // search(event): void {
  //   debugger
  //   var getData = JSON.parse(localStorage.getItem("vendorData")).filter(item => item.vendorName.toLowerCase().indexOf(event) > -1);
  //   this.dataSource = getData;
  // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}



