'use strict';
//project for salamon-cookies - 5 stores
// locations : seatlle,tokyo,dubai,paris,lima
let openingHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

// to find customer amount:
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Location(location,minCustmor,maxCustmor,avgSales,numOfCustPerHour,cookiesPerHour){
  this.location=location;
  this.minCustmor=minCustmor;
  this.maxCustmor=maxCustmor;
  this.avgSales=avgSales;
  this.numOfCustPerHour=numOfCustPerHour;
  this.cookiesPerHour=cookiesPerHour;
  this.totalSalesPerDay=0;
}

Location.prototype.getCustmorNumber= function() {
  for (let i = 0; i< openingHours.length; i++)
  {
    let finalResultOfCust = getRandomIntInclusive(this.minCustmor,this.maxCustmor);
    this.numOfCustPerHour.push(finalResultOfCust);
  }
};

Location.prototype.cookiesAmount= function(){
  for (let i=0; i<openingHours.length; i++){
    const perHour = Math.ceil(this.numOfCustPerHour[i]*this.avgSales);
    this.cookiesPerHour.push(perHour);
    this.totalSalesPerDay = perHour + this.totalSalesPerDay;
  }
};

// Location.prototype.render= function(){
//   const container = document.getElementById('select');
//   const artEl= document.createElement('article');
//   container.appendChild(artEl);
//   const pEl = document.createElement('p');
//   artEl.appendChild(pEl);
//   pEl.textContent = this.location;
//   const ulEl = document.createElement('ul');
//   artEl.appendChild(ulEl);
//   for ( let i=0; i<openingHours.length; i++){
//     let liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `${openingHours[i]} : ${this.cookiesPerHour[i]} cookies`;
//   }
//   const p2El = document.createElement('p');
//   artEl.appendChild(p2El);
//   p2El.textContent = `Total: ${this.totalSalesPerDay}`;
// };


// creat a table:
// 1. Make the header row
// 2. Make the data rows
// 3. Make the total row

const container = document.getElementById('sTable');
const salesTable = document.createElement('table');
container.appendChild(salesTable);

function makeTableHeader(){
  let headerRow = document.createElement('tr');
  let theElement = document.createElement('th');
  theElement.textContent = 'location';
  salesTable.appendChild(headerRow);
  headerRow.appendChild(theElement);
  for (let i = 0; i < openingHours.length; i++) {
    let theElement = document.createElement('th');
    theElement.textContent = openingHours[i];
    headerRow.appendChild(theElement);
  }
  theElement = document.createElement('th');
  theElement.textContent = 'location total';
  headerRow.appendChild(theElement);
}

Location.prototype.render= function(){
  const dataRow = document.createElement('tr');
  let daEL = document.createElement('td');
  dataRow.appendChild(daEL);
  daEL.textContent=this.location;

  for (let i=0; i<openingHours; i++)
  {
    let daEL=document.createElement('td');
    dataRow.appendChild(daEL);
    daEL.textContent = this.cookiesPerHour[i];
  }

  daEL= document.createElement('td');
  dataRow.appendChild(daEL);
  daEL.textContent=this.cookiesAmount;

};

// function makeTotalRow(){
//   const totalRow=document.createElement('tr');
//   let toEl = document.createElement('th');
//   totalRow.appendChild(toEl);
//   toEl.textContent='total:';

//   for (let i=0; i<openingHours; i++)
//   {
//     let toEl=document.createElement('th');
//     totalRow.appendChild(toEl);
//     toEl.textContent = totalOfDays[i];
//   }

//   toEl=document.createElement('th');
//   totalRow.appendChild(toEl);
//   toEl.textContent = totalOfTotal();
// }

const seattle = new Location('Seattle', 23, 65, 6.3, [], []);
const tokyo = new Location('Tokyo',3,24,1.2,[],[]);
const dubai = new Location('Dubai',11,23,3.7,[],[]);
const paris = new Location('Paris',20,38,2.3,[],[]);
const lima = new Location('Lima',2,16,4.6,[],[]);


//----------------- calling functions:
makeTableHeader();









