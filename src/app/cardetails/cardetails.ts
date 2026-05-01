import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardetails',
  imports: [],
  templateUrl: './cardetails.html',
  styleUrl: './cardetails.css',
})
export class Cardetails {
cars: any;
  id:number =0;
  constructor(private apiservice: Apiservice,private cdr : ChangeDetectorRef,private route : ActivatedRoute) { }
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.apiservice.getproductsbyid(this.id).subscribe((data : any) => {
      this.cars = data;
      this.cars = this.cars.find((c: any) => c.id == this.id);
      
      console.log(this.cars);
      this.cdr.detectChanges();
    });
  }

}
