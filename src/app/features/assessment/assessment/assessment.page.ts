import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/app/services/assessment/assessment.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.page.html',
  styleUrls: ['./assessment.page.scss'],
  standalone: false
})
export class AssessmentPage implements OnInit {
  sectionIndex = 0;
  formSections: any[] = []
  formData: { [key: string]: any } = {};

  constructor(private asessmentService: AssessmentService) { }

  ngOnInit() {
    this.formSections = this.asessmentService.getAssessmentSections();
  }

  get formFields() {
    return this.formSections[this.sectionIndex]?.fields || [];
  }

  isLastSection(): boolean {
    return this.sectionIndex === this.formSections.length - 1;
  }

  onClick() {
    if (this.isLastSection()) {
      this.submitForm();
    } else {
      this.sectionIndex++;
    }
  }

  onInputChange(fieldName: string, value: any) {
    this.formData[fieldName] = value;
  }

  submitForm() {
    console.log('Form submitted!');
    console.log(this.formData)
  }
}
