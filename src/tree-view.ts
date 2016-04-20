import {Component, OnInit, OnDestroy, Input} from 'angular2/core';
import {TreeNode} from './tree-node';
import {TreeNodeService} from './tree-node-service';
import {Store} from './redux/store';

@Component({
  selector: 'tree-view',
  templateUrl: '/src/templates/tree-view.html',
  directives: [TreeView],
  providers: [Store, TreeNodeService]
})

export class TreeView {
  @Input() root:TreeNode;
  children:any;
  items = [];
  subscription;
  constructor(private _store:Store, private _treeNodeService:TreeNodeService){
  }
  ngOnInit(){
    this.subscription = this._store.getTreeNodes(this.root.name).subscribe(res => {
      this.items = res;
    });
    this._treeNodeService.loadTreeNodes(this.root);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}