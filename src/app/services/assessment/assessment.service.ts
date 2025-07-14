import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  private assessmentData = [
    {
      title: 'Personal Information',
      fields: [
        { name: 'first_name', 
          label: 'What is your first name?', 
          type: 'text', 
          placeholder: 'Beniz' 
        },
        { name: 'last_name', 
          label: 'What is your last name?', 
          type: 'text', 
          placeholder: 'Wowow' 
        },
        { name: 'age', 
          label: 'How old are you?', 
          type: 'number', 
          placeholder: '10' 
        },
        {
          name: 'gender',
          label: 'What is your gender?',
          type: 'select',
          placeholder: 'Select gender',
          options: ['Male', 'Female']
        }
      ]
    },
    {
      title: 'Family Structure',
      fields: [
        { name: 'siblings', label: 'How many siblings do you have?', type: 'number', placeholder: '2' },
        {
          name: 'living_with',
          label: 'Who do you live with?',
          type: 'select',
          placeholder: 'Select one',
          options: [
            'Both parents',
            'One of my parents',
            'With guardian/Someone else',
          ]
        }
      ]
    },
    {
      title: 'Screen Access at Home',
      fields: [
        {
          name: 'screen_access',
          label: 'How many screens do you have at home?',
          type: 'select',
          placeholder: '1 Screen',
          options: ['1 Screen', '2 or 3 screens', '4 or more screens']
        },
        {
          name: 'own_phone',
          label: 'Do you have your own phone, tablet, or other portable screen?',
          type: 'select',
          placeholder: 'Yes or No',
          options: ['Yes', 'No']
        },
      ]
    },
    {
      title: 'Screen Time Habits',
      fields: [
        {
          name: 'access_level',
          label: 'Do you use screens while eating meals?',
          type: 'select',
          placeholder: 'Yes or No',
          options: ['Yes', 'No']
        },
        {
          name: 'frequency_level',
          label: 'How many hours a day do you use screens?',
          type: 'select',
          placeholder: '1 to 3 hours',
          options: ['Less than 1 hour', '1 to 3 hours', 'More than 3 hours']
        },
        {
          name: 'content_level',
          label: 'Are your shows or games mostly slow with talking/singing, or fast with lots of action?',
          type: 'select',
          placeholder: 'Slow or Fast',
          options: ['Slow', 'Fast']
        },
        {
          name: 'interactivity_level',
          label: 'How often does an adult talk with you about what you watch?',
          type: 'select',
          placeholder: 'Often/Sometimes/Never',
          options: ['Often', 'Sometimes', 'Never']
        },
      ]
    }
  ];

  private apiUrl = 'http://127.0.0.1:8000/api/predict/';

  constructor(private http: HttpClient) { }

  getAssessmentSections() {
    return this.assessmentData;
  }

  getFormData(formData: any){
    console.log("Form from service", formData)
  }

  features: number[] = [];

  processFormData(formData: any): number[] {
    // Reset features array
    this.features = [];
    
    const { 
      gender, 
      living_with, 
      screen_access, 
      age,
      access_level,
      frequency_level,
      content_level,
      interactivity_level
    } = formData;
    
    // Add age as first feature
    this.features.push(parseInt(age));
    
    // Add gender (Male: 0, Female: 1)
    if (gender === 'Male') {
      this.features.push(0);
    } else {
      this.features.push(1);
    }
    
    // Add family structure (living_with)
    if (living_with === 'Both parents') {
      this.features.push(0);
    } else if (living_with === 'One of my parents') {
      this.features.push(1);
    } else {
      this.features.push(2);
    }
    
    // Add screen count (screen_access)
    if (screen_access === '1 Screen') {
      this.features.push(0);
    } else if (screen_access === '2 or 3 screens') {
      this.features.push(1);
    } else {
      this.features.push(2);
    }
    
    // Add access_level (Yes: 1, No: 0)
    this.features.push(access_level === 'Yes' ? 1 : 0);
    
    // Add frequency_level
    if (frequency_level === 'Less than 1 hour') {
      this.features.push(0);
    } else if (frequency_level === '1 to 3 hours') {
      this.features.push(1);
    } else { // More than 3 hours
      this.features.push(2);
    }
    
    // Add content_level (Slow: 0, Fast: 1)
    this.features.push(content_level === 'Slow' ? 0 : 1);
    
    // Add interactivity_level
    if (interactivity_level === 'Often') {
      this.features.push(0);
    } else if (interactivity_level === 'Sometimes') {
      this.features.push(1);
    } else { // Never
      this.features.push(2);
    }
    
    console.log('Generated features array:', this.features);
    return this.features;
  }

  addFeatures(gender: string, parentsStatus: string, screenCount: string): void {
    this.features = [];

    if (gender === 'Male') {
      this.features.push(0);
    } else if (gender === 'Female') {
      this.features.push(1);
    } else {
      throw new Error('Invalid gender value');
    }

    if (parentsStatus === 'Both parents') {
      this.features.push(0);
    } else if (parentsStatus === 'One of my parents') {
      this.features.push(1);
    } else if (parentsStatus === 'With guardian/Someone else') {
      this.features.push(2);
    } else {
      throw new Error('Invalid parents status value');
    }

    if (screenCount === '1 Screen') {
      this.features.push(0);
    } else if (screenCount === '2 or 3 screens') {
      this.features.push(1);
    } else if (screenCount === '4 or more screens') {
      this.features.push(2);
    } else {
      throw new Error('Invalid screen count value');
    }
  }

  submitAssessment(formData: any): Observable<any> {
    const featuresArray = this.processFormData(formData);
    
    // Create a named object instead of an array
    const payload = { 
      features: {
        age: featuresArray[0],
        gender: featuresArray[1],
        family_structure: featuresArray[2],
        screen_access: featuresArray[3],
        access_level: featuresArray[4],
        frequency_level: featuresArray[5],
        content_level: featuresArray[6],
        interactivity_level: featuresArray[7]
      }
    };
    
    console.log('Sending payload to API:', JSON.stringify(payload));
    
    return this.http.post(this.apiUrl, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      tap(response => {
        console.log('API Response:', response);
      }),
      catchError(error => {
        // Log the full error details
        console.error('API Error:', error);
        if (error.error) {
          console.error('Error details:', error.error);
        }
        return of({ error: 'Failed to get prediction' });
      })
    );
  }
}
