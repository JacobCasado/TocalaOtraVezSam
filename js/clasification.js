function Clasification() {
  this.recordDiv = document.getElementById('record');
  this.table = document.createElement("table");
  this.tblBody = document.createElement("tbody");
  this.records = [];
}

Clasification.prototype.render = function() {
  for (var i = 0; i < this.records.length ; i++) {
    this.row = document.createElement("tr");

    this.nameCell = document.createElement("td");
    this.nameText = document.createTextNode( this.records[i].name );
    this.nameCell.appendChild(this.nameText);
    this.row.appendChild(this.nameCell);

    this.pointCell = document.createElement("td");
    this.pointText = document.createTextNode( this.records[i].point );
    this.pointCell.appendChild(this.pointText);
    this.row.appendChild(this.pointCell);

    this.tblBody.appendChild(this.row);
  }

  this.table.appendChild(this.tblBody);

  this.recordDiv.appendChild(this.table);

  this.table.setAttribute("border", "2");
}

Clasification.prototype.saveRecord = function(name, points) {
  this.records.push({
    name: name,
    point: points
  });
}