import { Injectable } from '@angular/core';

export interface FamilyMember {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  screenHours: string;
  numActivity: string;
  emoji: string;
  familyKey: string;

}

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private members: FamilyMember[] = [
    {
      id: 1,
      firstName: 'Alliyana',
      lastName: 'Beniz',
      age: 12,
      screenHours: '3 hrs',
      numActivity: '2 activities',
      emoji: '👦',
      familyKey: 'QUJ123'
    },
    {
      id: 2,
      firstName: 'Donna',
      lastName: 'Beniz',
      age: 10,
      screenHours: '1.5 hrs',
      numActivity: '3 activities',
      emoji: '👧',
      familyKey: 'QUJ123'
    },
    {
      id: 3,
      firstName: 'Miko',
      lastName: 'Reyes',
      age: 14,
      screenHours: '2 hrs',
      numActivity: '1 activity',
      emoji: '👦',
      familyKey: 'REY456'
    },
    {
      id: 4,
      firstName: 'Johanne',
      lastName: 'Beniz',
      age: 10,
      screenHours: '1.5 hrs',
      numActivity: '3 activities',
      emoji: '👧',
      familyKey: 'QUJ123'
    },
  ]


  constructor() { }

  getMembersByFamilyKey(familyKey: string): FamilyMember[] {
    return this.members.filter(member => member.familyKey === familyKey);
  }

  joinFamily(newMember: Omit<FamilyMember, 'id'>): void {
    const newId = this.members.length + 1;
    this.members.push({ id: newId, ...newMember });
  }

  getAllFamilyKeys(): string[] {
    return [...new Set(this.members.map(member => member.familyKey))];
  }

  getFamilies(): { key: string; members: FamilyMember[] }[] {
    const keys = this.getAllFamilyKeys();
    return keys.map(key => ({
      key,
      members: this.getMembersByFamilyKey(key)
    }));
  }
}
