import { Component, OnInit } from '@angular/core';
import {BtcdataService} from '../btcdata.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  btc:Object;
  constructor(private data:BtcdataService) { }

  ngOnInit() {
    /*
    Get data from service
    */
    
    /*Uncomment if using the real API */
    /* 
      this.data.getLatest().subscribe(data => {
          this.btc = data;
          console.log(this.btc);
        }
       );
     */        
    
    /*Static Data for testing*/
    this.btc = this.data.getLatest();
    console.log(this.btc);

  }
  
  /*function to convert largeNumbers to Billion,million Notation*/
  numberToWords (largeNumber) {

    // Nine Zeroes for Billions
    return Math.abs(Number(largeNumber)) >= 1.0e+9

    ? this.roundToN(Math.abs(Number(largeNumber)) / 1.0e+9 ,2) + " B"
    // Six Zeroes for Millions 
    : Math.abs(Number(largeNumber)) >= 1.0e+6

    ? this.roundToN(Math.abs(Number(largeNumber)) / 1.0e+6 ,2) + " M"
    // Three Zeroes for Thousands
    : Math.abs(Number(largeNumber)) >= 1.0e+3

    ? this.roundToN(Math.abs(Number(largeNumber)) / 1.0e+3 ,2) + " K"

    : Math.abs(Number(largeNumber));

  }
  roundToN (num,n){
    const temp = Math.pow(10,n);
    return Math.round(num * temp)/temp;
  }

}
