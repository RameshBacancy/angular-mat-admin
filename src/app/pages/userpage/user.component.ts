import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    public companyNameListDropdown = 'Select Company name';
    public cityList = [];
    public companyNameList = [
        { name: 'Bacancy', value: "Bacancy" },
        { name: 'Google', value: "Google" },
        { name: 'Apple', value: "Apple" },
    ];

    public cityArray = [
        { name: 'Ahmedabad', value: 'ahmedabad' },
        { name: 'Surat', value: 'surat' },
        { name: 'Gandhinagar', value: 'gandhinagar' },
    ];

    public userDetailsFG: FormGroup = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{5,}$/)]),
        email: new FormControl('', [Validators.required]),
        firstName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]{1,}$/)]),
        lastName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]{1,}$/)]),
        address: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{5,}$/)]),
        companyName: new FormControl('', [Validators.required]),
        gender: new FormControl('male'),
        aboutMe: new FormControl('', [Validators.required]),
    });

    constructor() { }

    ngOnInit(): void { }

    radioSelected(e) {
        this.userDetailsFG.controls.gender.setValue(e.target.value);
    }

    checkboxSelected(e, value) {
        if (e.target.checked) {
            this.cityList.push(value);
        } else {
            this.cityList.forEach((element, index) => {
                if (value === element) {
                    this.cityList.splice(index, 1);
                }
            });
        }
    }

    userDetailsSubmit() {
        if (this.userDetailsFG.valid) {
            const data = {
                ...this.userDetailsFG.value,
                cityList: this.cityList,
                companyName: this.companyNameListDropdown
            }
            console.log('inside user details submit', data)
        }
    }

    optionCall(company) {
        this.userDetailsFG.controls.companyName.setValue(company.value);
        this.companyNameListDropdown = company.name;
    }
}
