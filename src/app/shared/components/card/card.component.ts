import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() namePlaceholder: string | undefined;
  @Input() emailPlaceholder: string | undefined;
  @Input() buttonText: string | undefined;
  @Input() cardSize: string | undefined; 
  @Output() proceed = new EventEmitter<void>();

  public minDate: string;
  isRegistering = false;
  public isPasswordStep = false;
  isConfirmingPassword = false;

  constructor() {
    const date = new Date();
    const year = date.getFullYear() - 44;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    this.minDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }

  

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    birthdate: new FormControl('', [Validators.required, this.ageValidator]),
  });

  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const date = new Date(control.value);
    const age = new Date().getFullYear() - date.getFullYear();
    return age < 44 ? { 'ageInvalid': true } : null;
  }

  proceedToPassword() {
    this.isRegistering = false;
    this.isPasswordStep = true;
  }

  onSubmit() {
    console.warn(this.form.value);
  }

  toggleRegistering() {
    this.isRegistering = !this.isRegistering;
  }

  proceedToPasswordConfirmation() {
    console.log('Form validity:', this.form.valid);
    if (this.form.valid) {
      this.isConfirmingPassword = true;
    }
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.proceed.emit();
    }
  }
}