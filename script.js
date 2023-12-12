class Table {
  constructor({columns, data, cellPading, tableHeadBgColor}) {
    this.columns = columns;
    this.data = data;
    this.cellPadding = cellPading;
    this.tableHeadBgColor = tableHeadBgColor;
    this.parentElement = document.getElementById("wrapper");
    this.tableWrapper = document.createElement("table");
    this.tableWrapper.style.borderCollapse = 'collapse';
  }
  render() {
    const tableHeadRow = document.createElement("tr");
    this.columns.forEach(column => {
      const tableHead = document.createElement("th");
      tableHead.style.border = '1px solid black';
      tableHead.style.backgroundColor = this.tableHeadBgColor;
      tableHead.style.padding = this.cellPadding;
      tableHead.innerHTML = column;
      tableHeadRow.append(tableHead);
    });
    this.tableWrapper.append(tableHeadRow);


    this.data.forEach(item => {
      const tableRow = document.createElement("tr");
      const itemValues = Object.values(item);
      itemValues.forEach(item => {
        const tableData = document.createElement("td");
        tableData.style.border = '1px solid black';
        tableData.style.padding = this.cellPadding;
        tableData.innerHTML = item;
        tableRow.append(tableData);
      });
      this.tableWrapper.append(tableRow);
    });

    this.parentElement.append(this.tableWrapper);
  }
};

const table = new Table({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    { name: 'Pedro', email: 'pedro@email.com', phoneNumber: '123' },
    { name: 'Enrique', email: 'enrique@email.com', phoneNumber: '231' },
    { name: 'Machado', email: 'machado@email.com', phoneNumber: '312' },
    { name: 'Alejandro', email: 'alejandro@email.com', phoneNumber: '000' },
  ],
  cellPading: '5px 10px',
  tableHeadBgColor: 'magenta'
});