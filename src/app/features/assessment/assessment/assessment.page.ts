import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/app/services/assessment/assessment.service';
import { Router } from '@angular/router';

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

  constructor(
    private asessmentService: AssessmentService,
    private router: Router 
  ) { }

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
      // Navigate to loading-screen component
      this.router.navigateByUrl('/loading-test');
    } else {
      this.sectionIndex++;
    }
  }

  onInputChange(fieldName: string, value: any) {
    this.formData[fieldName] = value;
  }

  submitForm() {
    console.log('Form submitted!');
    
    // Store form data locally before navigation
    const submittedData = {...this.formData};
    
    // Process in background after navigating to loading screen
    setTimeout(() => {
      this.asessmentService.submitAssessment(submittedData)
        .subscribe(
          (response) => {
            console.log('Prediction results:', response);
            // Navigate to results page after processing
            // this.router.navigateByUrl('/results');
          },
          (error) => {
            console.error('Error getting prediction:', error);
            // Handle error - navigate to error page or back to form
            // this.router.navigateByUrl('/error');
          }
        );
    }, 100);
  }
}
