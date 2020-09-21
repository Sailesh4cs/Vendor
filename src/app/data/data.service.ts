import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  ELEMENT_DATA = [
    { id: 1, vendorName: 'Vendor One', category: 'Category2', createDate: new Date(), address: 'address 1' },
    { id: 2, vendorName: 'Vendor Two', category: 'Category1', createDate: new Date(), address: 'address 2' },
    { id: 3, vendorName: 'Vendor Three', category: 'Category3', createDate: new Date(), address: 'address 3' },
    { id: 4, vendorName: 'Vendor Four', category: 'Category2', createDate: new Date(), address: 'address 4' },
    { id: 5, vendorName: 'Vendor Five', category: 'Category3', createDate: new Date(), address: 'address 5' },
    { id: 6, vendorName: 'Vendor Six', category: 'Category1', createDate: new Date(), address: 'address 6' },
  ];



  categories = [
    { value: 'Category1', viewValue: 'Category1' },
    { value: 'Category2', viewValue: 'Category2' },
    { value: 'Category3', viewValue: 'Category3' }
  ];

  constructor() {
    localStorage.setItem("vendorData", JSON.stringify(this.ELEMENT_DATA));
  }

  getData(): string {
    return localStorage.getItem("vendorData");
  }

  getCategories() {
    return this.categories;
  }

  addVendor(data) {
    debugger

    var getData = JSON.parse(localStorage.getItem("vendorData"));
    getData.push(data);
    localStorage.setItem("vendorData", JSON.stringify(getData));
  }

  updateVendor(data) {
    debugger
    var aa = JSON.parse(localStorage.getItem("vendorData"))[data.id - 1]
    var getData = localStorage.getItem("vendorData").replace(JSON.stringify(aa), JSON.stringify(data))
    // 
    // getData.push(data);
    localStorage.setItem("vendorData", getData);
  }

  deleteVendor(index) {
    // data after deleting
    const data = JSON.parse(localStorage.getItem("vendorData")).filter(x => x.id !== index);
    localStorage.setItem("vendorData", JSON.stringify(data));


  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}