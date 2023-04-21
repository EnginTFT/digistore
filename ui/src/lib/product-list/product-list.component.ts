import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductListTableRow } from '../models/product-list-table-row.model';
import { Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { Product } from '../models/product';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'digistore-ui-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class UiProductListComponent implements OnInit {
  @Input()
  currentProduct!: Product | null;

  @Input()
  detailsDialogStatus = false;

  @Input()
  productsTableData!: Observable<ProductListTableRow[]>;

  @Output()
  selectedRows = new EventEmitter<ProductListTableRow[]>();

  @Output()
  editProduct = new EventEmitter<string>();

  @Output()
  viewProduct = new EventEmitter<string>();

  tableData!: MatTableDataSource<ProductListTableRow>;

  displayedColumns: string[] = [
    'image',
    'product',
    'manufacturer',
    'category',
    'price',
    'sale',
    'actions',
  ];

  selection = new SelectionModel<ProductListTableRow>(true, []);

  initialSelection = [];
  allowMultiSelect = true;
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.productsTableData.subscribe((productsTableData) => {
      this.tableData = new MatTableDataSource<ProductListTableRow>(
        productsTableData
      );
    });
  }

  applyFilter(event: any) {
    let filterValue = event.target.value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tableData.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableData.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.tableData.data.forEach((row) => this.selection.select(row));
    this.selectedRows.emit(this.selection.selected);
  }

  selectRow() {
    this.selectedRows.emit(this.selection.selected);
  }
  editClick(id: string) {
    this.editProduct.emit(id);
  }
  viewClick(id: string) {
    this.viewProduct.emit(id);
  }
}
