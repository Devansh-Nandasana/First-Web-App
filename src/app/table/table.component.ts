import { Component } from '@angular/core';
import { AssetService } from '../service/asset.service';
import { Asset } from './asset.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  data: Asset[] = [];
  filterData: Asset[] = [];
  searchInput: string = '';
  constructor(private assetService: AssetService) {
    this.data = assetService.getAssets();
    assetService.assetSubscriber().subscribe(asset => {
      this.data = assetService.getAssets();
      this.onSearchInputChange(this.searchInput);
    });
  }

  onSearchInputChange(value: string): void {
    if (!value) {
      this.filterData = this.data;
      return;
    }
    this.filterData = this.data.filter(asset => {
      return asset.id == value;
    });
  }
  onClick(index: number) {
    this.assetService.publishAssetDelete(this.filterData[index]);
    this.data = this.data.filter(asset => {
      return asset.id != this.filterData[index].id;
    });
    this.assetService.removeAsset(this.filterData[index]);
    this.onSearchInputChange(this.searchInput);
  }
}
