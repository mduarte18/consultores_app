import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface HistroyGlobal {
  created_at: string;
  description: string;
  movement_type: string;
  name: string;
  type_user: string;
}

@Component({
  selector: 'app-hisotory-list',
  templateUrl: './hisotory-list.component.html',
  styleUrls: ['./hisotory-list.component.css']
})

export class HisotoryListComponent implements OnInit {

  data: any;
  count: number;

  displayedColumns: string[] = ['movement_type','type_user', 'name', 'description', 'created_at'];
  dataSource = new MatTableDataSource<HistroyGlobal>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

 constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
    this.loader.show();
    this.globalService.getGlobalHistory({}).subscribe(
      result => {
        console.log(result);
        this.data = result;
        this.dataSource.data = result;
        this.loader.hide();
      },
      error => {
        console.log(error)
        this.loader.hide();
      }
    )
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


