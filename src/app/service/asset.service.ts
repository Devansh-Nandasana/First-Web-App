import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Asset } from '../table/asset.model';
@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private data: Asset[] = [
    {
      id: '1',
      name: 'Asset1',
      tag: 'as-tg-1',
      description: 'First Tag'
    },
    {
      id: '2',
      name: 'Asset2',
      tag: 'as-tg-2',
      description: 'Second Tag'
    },
    {
      id: '3',
      name: 'Asset3',
      tag: 'as-tg-3',
      description: 'Third Tag'
    },
    {
      id: '4',
      name: 'Asset4',
      tag: 'as-tg-4',
      description: 'Fourth Tag'
    }
  ];
  temp: Asset = {
    id: '5',
    name: 'Asset4',
    tag: 'as-tg-4',
    description: 'Fourth Tag'
  };
  private assetListener: BehaviorSubject<Asset> = new BehaviorSubject<Asset>(
    this.temp
  );
  private assetDeleteListener: BehaviorSubject<Asset> = new BehaviorSubject<
    Asset
  >({} as Asset);
  constructor() {
    this.assetSubscriber().subscribe(asset => {
      this.data.push(asset);
    });
  }
  getAssets() {
    return this.data;
  }
  publishAsset(asset: Asset) {
    this.assetListener.next(asset);
  }

  assetSubscriber() {
    return this.assetListener.asObservable();
  }

  publishAssetDelete(asset: Asset) {
    this.assetDeleteListener.next(asset);
  }

  assetDeleteSubscriber() {
    return this.assetDeleteListener.asObservable();
  }

  removeAsset(removeasset: Asset) {
    this.data = this.data.filter(asset => {
      return asset.id != removeasset.id;
    });
  }

  checkForAvailability(asset: Asset) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id == asset.id) return false;
    }
    return true;
  }
}
