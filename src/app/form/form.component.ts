import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { formatCardNumber, formatExpiryDate } from "./utils";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    cardForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.createForm();
    }
  
    ngOnInit(): void {
      
    }
    createForm() {
      this.cardForm = this.fb.group({
        number: ["", [Validators.required, Validators.pattern("^[0-9]{16}$")]],
        name: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
        month: [
          "",
          [Validators.required, Validators.pattern("^(0[1-9]|1[0-2])$")]
        ],
        year: ["", [Validators.required, this.validYear()]],
        cvv: ["", [Validators.required, Validators.pattern("^[0-9]{3}$")]]
      });
    }
  
    validYear() {
      return (control): { [key: string]: any } | null => {
        let now = new Date().getFullYear();
        let diff = Number(control.value) - now;
        const valid = diff >= 0 && diff <= 3;
        return !valid ? { validYear: { value: control.value } } : null;
      };
    }
  
    get cardNumber() {
      return formatCardNumber(this.cardForm.controls["number"].value);
    }
  
    get cardExpiryMonth() {
      return formatExpiryDate(this.cardForm.controls["month"].value);
    }
  
    get cardExpiryYear() {
      return formatExpiryDate(this.cardForm.controls["year"].value);
    }
  
    get cardHolderName() {
      return this.cardForm.controls["name"].value || "Card Holder Name";
    }
  }
  