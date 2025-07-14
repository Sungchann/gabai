import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  private assessmentData = [
    {
      title: 'Personal Information',
      fields: [
        { name: 'first_name', label: 'What is your first name?', type: 'text', placeholder: 'Beniz' },
        { name: 'last_name', label: 'What is your last name?', type: 'text', placeholder: 'Wowow' },
        { name: 'age', label: 'How old are you?', type: 'number', placeholder: '21' },
        {
          name: 'gender',
          label: 'What is your gender?',
          type: 'select',
          placeholder: 'Select gender',
          options: ['Male', 'Female', 'Prefer not to say']
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
            'With guardian',
            'Someone else'
          ]
        }
      ]
    },
    {
      title: 'Screen Time Habits',
      fields: [
        {
          name: 'tv_access',
          label: 'Do you have access to a TV?',
          type: 'select',
          placeholder: 'Yes or No',
          options: ['Yes', 'No']
        },
        {
          name: 'own_device',
          label: 'Do you have your own device (phone, tablet, etc)?',
          type: 'select',
          placeholder: 'Yes or No',
          options: ['Yes', 'No']
        },
        {
          name: 'screen_hours',
          label: 'How many hours do you spend on a phone?',
          type: 'number',
          placeholder: '4'
        },
        {
          name: 'screen_before_bed',
          label: 'Do you use screens before bedtime?',
          type: 'select',
          placeholder: 'Yes or No',
          options: ['Yes', 'No']
        }
      ]
    }
  ];

  constructor() { }

  getAssessmentSections() {
    return this.assessmentData;
  }
}
