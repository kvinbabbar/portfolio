import { Component, OnInit } from '@angular/core';
import { SendMailService } from '../services/send-mail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: CONTACT = {
    nameField: '',
    emailField: '',
    subjectField: '',
    messageField: ''
  }
  isSubmited: boolean = false;
  constructor(private mailService: SendMailService) { }

  ngOnInit() {
  }

  onSubmit(contactForm: NgForm) {
    this.isSubmited = true;
    this.mailService.sendMail(this.contact).subscribe(data => {
      contactForm.form.reset();
      this.isSubmited = false;
      console.log(data);
    },
    err => console.error(err))
  }
}

export class CONTACT {
    nameField: string;
    emailField: string;
    subjectField: string;
    messageField: string;
}