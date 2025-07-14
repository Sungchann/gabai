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
    this.asessmentService.submitAssessment(this.formData)
      .subscribe(
        (response) => {
          console.log('Prediction results:', response);
          // Handle the response (e.g., navigate to results page with data)
        },
        (error) => {
          console.error('Error getting prediction:', error);
          // Handle error (show error message, etc.)
        }
      );
  }
}
