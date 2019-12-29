import { Component } from '@angular/core';

interface degTitleList {
  degTitle?;
  details?;
}
/** @title Select with 2-way value binding */
@Component({
  selector: 'select-value-binding-example',
  templateUrl: 'select-value-binding-example.html',
  styleUrls: ['select-value-binding-example.css'],
})
export class SelectValueBindingExample {
  education_level;
  exam_title;
  deg_detail;
  gender;
  degreeTitleList = [];
  degreeDetailList = [];



  educationInfo = {
    aa: 'Secondary',
    bb: 'SSC',
    cc: 'Male'
  }

  genderList = ['Male', 'Female']

  educationList: any = [
    {
      'educationLevelName': 'PSC/5 pass',
      degreeTitleList: [ 
      { 'degTitle': 'PSC', 'details': ['a','b','c']},
      {'degTitle': '5 pass', 'details': ['d','e','f']},
      { 'degTitle': 'Other', 'details': ['g','h','i']}
      ]
    },
    {
      'educationLevelName': 'JSC/JDC/8 pass',
      degreeTitleList: [
      { 'degTitle': 'JSC', 'details': ['a','b','c']},
      {'degTitle': '8 pass', 'details': ['d','e','f']},
      { 'degTitle': 'Other', 'details': ['g','h','i']}
      ]
    },
    {
      'educationLevelName': 'Secondary',
      degreeTitleList: [
      { 'degTitle': 'SSC', 'details': ['a','b','c']},
      {'degTitle': '10 pass', 'details': ['d','e','f']},
      { 'degTitle': 'Other', 'details': ['g','h','i']}
      ]
    }
  ];


  editInfo(educationInfo) {
    this.education_level = educationInfo.aa;
    this.exam_title = educationInfo.bb;
    this.gender = educationInfo.cc;
    this.educationLevelChangeAction(this.education_level);
  }

  educationLevelChangeAction(education) {
    this.exam_title="";
    let dropDownData = this.educationList.find((data: any) => data.educationLevelName === education);
    if (dropDownData) {
      this.degreeTitleList = dropDownData.degreeTitleList;
      if(this.degreeTitleList){
        this.exam_title=this.degreeTitleList[0].degTitle;
      }
      this.degreeLevelChangeAction(this.exam_title);
    } else {
      this.degreeDetailList = [];
      this.degreeTitleList = [];
    }

  }
  degreeLevelChangeAction(degree) {
    this.deg_detail="";
    let dropDownData = this.degreeTitleList.find((data: any) => data.degTitle === degree);
    if (dropDownData) {
      this.degreeDetailList = dropDownData.details;
      if(this.degreeDetailList){
        this.deg_detail=this.degreeDetailList[0];
      }
      
    } else {
      this.degreeDetailList = [];
    }

  }


}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */