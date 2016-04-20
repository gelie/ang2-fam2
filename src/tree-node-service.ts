import {Injectable} from 'angular2/core';
import {Store} from './redux/store';
@Injectable()
export class TreeNodeService {
  constructor(private _store: Store) {
  }
  loadTreeNodes(root) {
    if (root.uri) {
      this._store.dispatchAction({ url: root.uri, name: 'LOAD_NODES' });
    }
  }
}