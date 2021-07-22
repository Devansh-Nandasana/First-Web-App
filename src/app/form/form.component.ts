import { Component } from '@angular/core';
import { AssetService } from '../service/asset.service';
import { Asset } from '../table/asset.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inputId = '';
  inputName = '';
  inputTag = '';
  inputDescription = '';
  newAsset: Asset = {} as Asset;
  constructor(private assetService: AssetService) {
    this.assetService.assetDeleteSubscriber().subscribe(asset => {
      this.inputId = asset.id;
      this.inputName = asset.name;
      this.inputTag = asset.tag;
      this.inputDescription = asset.description;
    });
  }
  onSubmit() {
    this.newAsset = {} as Asset;
    this.newAsset.id = this.inputId;
    this.newAsset.name = this.inputName;
    this.newAsset.tag = this.inputTag;
    this.newAsset.description = this.inputDescription;
    if (this.assetService.checkForAvailability(this.newAsset)) {
      this.assetService.publishAsset(this.newAsset);
      this.resetForm();
    } else {
      alert('Id already taken! Try something else');
    }
  }
  resetForm() {
    this.inputId = '';
    this.inputName = '';
    this.inputTag = '';
    this.inputDescription = '';
  }
}
