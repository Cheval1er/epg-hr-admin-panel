import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SkillVacancy } from 'src/app/pages/model/vacancy-skill-model';
import { VacancyService } from 'src/app/services/vacancy.service';

import { NewSkillFormComponent } from '../new-skill-form.component';


@Component({
  selector: 'vex-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent implements OnInit {

  [x: string]: any;
  vacancySkillForm;
  dataSource!: MatTableDataSource<any>;

  dataSourceSkill: SkillVacancy[]



  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    private dialogRef: MatDialogRef<NewSkillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,) { }

  ngOnInit(): void {
    this.vacancySkillForm = this.formBuilder.group({
      // id: this.editData.id,
      // SkillName: [''],

      id: this.editData.id,
      objectId: this.editData.objectId,
      otherSkill: [''],
      vacancyId: this.editData.vacancyId,
      skillId: [''],
      skillName: [''],





    })
    if (this.editData) {
      this.vacancySkillForm.controls['id'].setValue(this.editData.id);
      this.vacancySkillForm.controls['objectId'].setValue(this.editData.objectId);
      this.vacancySkillForm.controls['vacancyId'].setValue(this.editData.vacancyId)
      this.vacancySkillForm.controls['otherSkill'].setValue(this.editData.otherSkill);
      this.vacancySkillForm.controls['skillName'].setValue(this.editData.SkillName);
      this.vacancySkillForm.controls['skillId'].setValue(this.editData.SkillId)

    }
  }


  skillList: any[] = [
    {
      "id": 22,
      "name": "ადაპტაციის უნარი",
      "key": "key.skill.adaptation",
      "sortOrder": 0
    },
    {
      "id": 251,
      "name": "ავტომობილების მართვა: NIVA. FORD tranziti. УАЗ",
      "key": "key.skill. drive",
      "sortOrder": 2
    },
    {
      "id": 243,
      "name": "ავტომობილის მართვის კატეგორია (B, C, D)",
      "key": "key.skill",
      "sortOrder": 1
    },
    {
      "id": 274,
      "name": "ავტომობილის მართვის მოწმობა",
      "key": "key.skill car",
      "sortOrder": 2
    },
    {
      "id": 236,
      "name": "არგონის აპარატით შედუღების სამუშაოების ჩატარების ცოდნა",
      "key": "key.skill.argon",
      "sortOrder": 2
    },
    {
      "id": 254,
      "name": "არგონის აპარატით შედუღების სამუშაოების ჩატარების ცოდნა",
      "key": "key.skill. argon",
      "sortOrder": 2
    },
    {
      "id": 18,
      "name": "არგუმენტირების უნარი",
      "key": "key.skill.arguments",
      "sortOrder": 0
    },
    {
      "id": 19,
      "name": "გადაწყვეტილების მიღების უნარი",
      "key": "key.skill.desision",
      "sortOrder": 0
    },
    {
      "id": 28,
      "name": "გაყიდვების უნარი",
      "key": "key.skill.sales",
      "sortOrder": 0
    },
    {
      "id": 13,
      "name": "გუნდის შეკვრის უნარი",
      "key": "key.skill.groupBind",
      "sortOrder": 0
    },
    {
      "id": 12,
      "name": "გუნდურად მუშაობის უნარი",
      "key": "key.skill.group",
      "sortOrder": 0
    },
    {
      "id": 257,
      "name": "დაგეგმვისა და ორგანიზების უნარი",
      "key": "key.skill.planning",
      "sortOrder": 2
    },
    {
      "id": 17,
      "name": "დამარწმუნებელი კომუნიკაცია",
      "key": "key.skill.convincing\r\n",
      "sortOrder": 0
    },
    {
      "id": 25,
      "name": "დამოუკიდებლად მუშაობის უნარი",
      "key": "key.skill.dependency",
      "sortOrder": 26
    },
    {
      "id": 10,
      "name": "დეტალებზე ფოკუსირება",
      "key": "key.skill.detailFocus",
      "sortOrder": 0
    },
    {
      "id": 16,
      "name": "დროის მართვა",
      "key": "key.skill.derectTime",
      "sortOrder": 0
    },
    {
      "id": 240,
      "name": "ვერბალური უნდარ ჩვევები",
      "key": "key.skill.verbal",
      "sortOrder": 1
    },
    {
      "id": 26,
      "name": "ინიციატიურობა",
      "key": "key.skill.initial",
      "sortOrder": 0
    },
    {
      "id": 271,
      "name": "კვარტლებისა და ლიტერების იდენტიფიცირება",
      "key": "key.skill კვარტლებისა",
      "sortOrder": 2
    },
    {
      "id": 3,
      "name": "კომუნიკაბელურობა",
      "key": "key.skill.comunication",
      "sortOrder": 0
    },
    {
      "id": 8,
      "name": "კონფლიქტების მართვის უნარი",
      "key": "key.skill.conflict",
      "sortOrder": 0
    },
    {
      "id": 23,
      "name": "კრიტიკული აზროვნება",
      "key": "key.skill.critical",
      "sortOrder": 0
    },
    {
      "id": 20,
      "name": "ლიდერობა",
      "key": "key.skill.lider",
      "sortOrder": 0
    },
    {
      "id": 27,
      "name": "ლოგიკური აზროვნება",
      "key": "key.skill.logic",
      "sortOrder": 0
    },
    {
      "id": 15,
      "name": "მართვის უნარი",
      "key": "key.skill.director",
      "sortOrder": 0
    },
    {
      "id": 248,
      "name": "მაღალი მოტივაცია ",
      "key": "key.skill.motivation",
      "sortOrder": 2
    },
    {
      "id": 11,
      "name": "მოლაპარაკების წარმოება",
      "key": "key.skill.negotiations",
      "sortOrder": 0
    },
    {
      "id": 278,
      "name": "ნახშირწყალბადებით დაბინძურების აღმოფხვრის მეთოდებისა და ამ მიმართულებით გარემოსდაცვითი საკანონმდებლო ბაზის ცოდნა",
      "key": "key.skill.ნახშირწყალბადები",
      "sortOrder": 2
    },
    {
      "id": 265,
      "name": "ნებისმიერ ERP პროგრამაში მუშაობის გამოცდილება",
      "key": "key.skill ERP",
      "sortOrder": 1
    },
    {
      "id": 29,
      "name": "პასუხისმგებლობის გრძნობა",
      "key": "key.skill.responsibility\r\n",
      "sortOrder": 0
    },
    {
      "id": 7,
      "name": "პრეზენტაციის უნარი",
      "key": "key.skill.presentation",
      "sortOrder": 0
    },
    {
      "id": 9,
      "name": "პრობლემების მოგვარების უნარი",
      "key": "key.skill.problem",
      "sortOrder": 0
    },
    {
      "id": 24,
      "name": "პუნქტუალურობა",
      "key": "key.skill.punctuality",
      "sortOrder": 0
    },
    {
      "id": 275,
      "name": "რეჟიმების, მ.შ. დენების ანგარიშის პროგრამებთან მუშაობის გამოცდილება და ცოდნა",
      "key": "key.skill, რეჟიმები ",
      "sortOrder": 1
    },
    {
      "id": 250,
      "name": "სავალდებულოა В  და D კატეგორია",
      "key": "key.skill. B D category ",
      "sortOrder": 2
    },
    {
      "id": 259,
      "name": "სარელეო დაცვის დანაყენების ანგარიშის გარკვეული გამოცდილება (ძალოვანი ტრ.ები, ან 110/35/6-10 კვ გ/ხ-ები)",
      "key": "key.skill. დანაყენების ანგარიში",
      "sortOrder": 2
    },
    {
      "id": 276,
      "name": "სარელეო დაცვის პროექტების  დამუშავება და შეფასება",
      "key": "key.skill. project",
      "sortOrder": 1
    },
    {
      "id": 260,
      "name": "სასურველია რეჟიმების, მ.შ დენების ანგარიშის პროგრამებთან მუშაობის გარკვეული გამოცდილება და ცოდნა",
      "key": "key.skill. ანგარიში",
      "sortOrder": 1
    },
    {
      "id": 261,
      "name": "სასურველია სარელეო დაცვის პროექტების დამუშავების და შეფასების ცოდნა",
      "key": "key.skill.project",
      "sortOrder": 2
    },
    {
      "id": 14,
      "name": "საქმიანობის ორგანიზება და დაგეგმვა",
      "key": "key.skill.organisation",
      "sortOrder": 0
    },
    {
      "id": 30,
      "name": "სისხარტე",
      "key": "key.skill.aglity",
      "sortOrder": 0
    },
    {
      "id": 272,
      "name": "სპეციალური დანიშნულებით ტყითსარგებლობასთან დაკავშირებული საქართველოს კანონმდებლობით გათვალისწინებული ნორმატიული აქტების ცოდნა",
      "key": "key.skill სპეციალური",
      "sortOrder": 2
    },
    {
      "id": 6,
      "name": "სტატისტიკური ანალიზი",
      "key": "key.skill.statical",
      "sortOrder": 0
    },
    {
      "id": 21,
      "name": "სტრესული სიტუაციების გამკლავების  უნარი",
      "key": "key.skill.stress",
      "sortOrder": 0
    },
    {
      "id": 270,
      "name": "ტყის თემატური რუკების კითხვის უნარი",
      "key": "key.skill ტყის თემატური ",
      "sortOrder": 2
    },
    {
      "id": 279,
      "name": "უპირატესობა მიენიჭება ნახშირწყალბადებით დაბინძურების აღმოფხვრის პროექტებში  მონაწილე პრედენდენტებს",
      "key": "key.skill.დაბინძურება",
      "sortOrder": 1
    },
    {
      "id": 280,
      "name": "უპირატესობა მიენიჭება სამუშაო გამოცდილებას დოკუმენტების წარმოების, მართვისა და ლოჯისტიკის საკითხებში",
      "key": "key.skill.გამოცდილება",
      "sortOrder": 2
    },
    {
      "id": 231,
      "name": "უსაფრთხოების  მე-IV–ე საკვალიფიკაციო ჯგუფი",
      "key": "key.skill.group",
      "sortOrder": 1
    },
    {
      "id": 258,
      "name": "უსაფრთხოების  მე-V–ე საკვალიფიკაციო ჯგუფი",
      "key": "key.skill. V",
      "sortOrder": 2
    },
    {
      "id": 246,
      "name": "უსაფრთხოების III საკვალიფიკაციო ჯგუფი",
      "key": "key.skill III group",
      "sortOrder": 1
    },
    {
      "id": 253,
      "name": "უსაფრთხოების ტექნიკისა და სახანძრო უსაფრთხოების წესების ცოდნა",
      "key": "key.skill",
      "sortOrder": 2
    },
    {
      "id": 5,
      "name": "ფინანსური ანალიზი",
      "key": "key.skill.finantial",
      "sortOrder": 0
    },
    {
      "id": 273,
      "name": "შემჭიდროვებულ ვადებში მუშაობის უნარი",
      "key": "key.skill შემჭიდროვებულ",
      "sortOrder": 1
    },
    {
      "id": 4,
      "name": "წერითი კომუნიკაცია",
      "key": "key.skill.writtenComunication",
      "sortOrder": 0
    },
    {
      "id": 256,
      "name": "წერისა და ანგარიშგების უნარი",
      "key": "key.skill.write",
      "sortOrder": 1
    }
  ]

  saveFormData() {
    console.log(this.vacancySkillForm.value);
    this.vacancyService.updateSkill(this.editData.objectId, this.editData.vacancyId, this.vacancySkillForm.value).subscribe((result) => {
      console.log(result)
    })
    this.dialogRef.close();




  }
  closeForm() {
    this.dialogRef.close()
  }


}
