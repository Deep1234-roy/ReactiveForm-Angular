import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  errorMsg='';
  errorClass='';
  closeResult = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  empForm = new FormGroup({
    code: new FormControl({value:'',disabled:true}),
    name: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
    email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    phone: new FormControl(),
    designation: new FormControl(),
  })
  saveEmployee(){
    if(this.empForm.valid){

    }else{
      this.errorMsg="Please Enter Valid Data!!";
      this.errorClass="errorMsg";
    }
    console.log(this.empForm.value);
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
   
  get name(){
    return this.empForm.get("name");
  }

  get email(){
    return this.empForm.get("email");
  }

}
