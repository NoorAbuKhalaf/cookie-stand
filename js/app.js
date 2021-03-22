'use strict';
//project for salamon-cookies - 5 stores
//1. Stores the min/max hourly customers, and the average cookies per customer, in object properties

let openingHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

// to find customer amount:
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(getRandomIntInclusive(10,30));

// shop #1-seattle
const seatlle={
  location:'seatlle',
  minCustmor:23,
  maxCustmor:65,
  avgSales:6.3,
  numOfCustPerHour: [],
  cookiesPerHour: [],
  totalSalesPerDay: 0,
  getCustmorNumber: function() {
    for (let i = 0; i< openingHours.length; i++)
    {
      let finalResultOfCust = getRandomIntInclusive(this.minCustmor,this.maxCustmor);
      this.numOfCustPerHour.push(finalResultOfCust);
      // console.log(this.numOfCustPerHour);
    }
  },
  cookiesAmount: function(){
    for (let i=0; i<openingHours.length; i++){
      const perHour = Math.ceil(this.numOfCustPerHour[i]*this.avgSales);
      this.cookiesPerHour.push(perHour);
      this.totalSalesPerDay = perHour + this.totalSalesPerDay;
      // console.log(this.cookiesPerHour);
      // console.log(this.totalSalesPerDay);
    }
  },

  render: function(){
    const container = document.getElementById('select');
    const artEl= document.createElement('article');
    container.appendChild(artEl);
    const pEl = document.createElement('p');
    artEl.appendChild(pEl);
    pEl.textContent = this.location;
    const ulEl = document.createElement('ul');
    artEl.appendChild(ulEl);
    for ( let i=0; i<openingHours.length; i++){
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${openingHours[i]} : ${this.cookiesPerHour[i]} cookies`;
    }
    const p2El = document.createElement('p');
    artEl.appendChild(p2El);
    p2El.textContent = `Total: ${this.totalSalesPerDay}`;
  }
};

seatlle.getCustmorNumber();
seatlle.cookiesAmount();
seatlle.render();

// shop #2-tokyo
const tokyo={
  location:'Tokyo',
  minCustmor:3,
  maxCustmor:24,
  avgSales:1.2,
  numOfCustPerHour: [],
  cookiesPerHour: [],
  totalSalesPerDay: 0,
  getCustmorNumber: function() {
    for (let i = 0; i< openingHours.length; i++)
    {
      let finalResultOfCust = getRandomIntInclusive(this.minCustmor,this.maxCustmor);
      this.numOfCustPerHour.push(finalResultOfCust);
    }
  },
  cookiesAmount: function(){
    for (let i=0; i<openingHours.length; i++){
      const perHour = Math.ceil(this.numOfCustPerHour[i]*this.avgSales);
      this.cookiesPerHour.push(perHour);
      this.totalSalesPerDay = perHour + this.totalSalesPerDay;
    }
  },

  render: function(){
    const container = document.getElementById('select');
    const artEl= document.createElement('article');
    container.appendChild(artEl);
    const pEl = document.createElement('p');
    artEl.appendChild(pEl);
    pEl.textContent = this.location;
    const ulEl = document.createElement('ul');
    artEl.appendChild(ulEl);
    for ( let i=0; i<openingHours.length; i++){
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${openingHours[i]} : ${this.cookiesPerHour[i]} cookies`;
    }
    const p2El = document.createElement('p');
    artEl.appendChild(p2El);
    p2El.textContent = `Total: ${this.totalSalesPerDay}`;
  }
};

tokyo.getCustmorNumber();
tokyo.cookiesAmount();
tokyo.render();


// shop #3-dubai
const dubai={
  location:'Dubai',
  minCustmor:11,
  maxCustmor:38,
  avgSales:3.7,
  numOfCustPerHour: [],
  cookiesPerHour: [],
  totalSalesPerDay: 0,
  getCustmorNumber: function() {
    for (let i = 0; i< openingHours.length; i++)
    {
      let finalResultOfCust = getRandomIntInclusive(this.minCustmor,this.maxCustmor);
      this.numOfCustPerHour.push(finalResultOfCust);
    }
  },
  cookiesAmount: function(){
    for (let i=0; i<openingHours.length; i++){
      const perHour = Math.ceil(this.numOfCustPerHour[i]*this.avgSales);
      this.cookiesPerHour.push(perHour);
      this.totalSalesPerDay = perHour + this.totalSalesPerDay;
    }
  },

  render: function(){
    const container = document.getElementById('select');
    const artEl= document.createElement('article');
    container.appendChild(artEl);
    const pEl = document.createElement('p');
    artEl.appendChild(pEl);
    pEl.textContent = this.location;
    const ulEl = document.createElement('ul');
    artEl.appendChild(ulEl);
    for ( let i=0; i<openingHours.length; i++){
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${openingHours[i]} : ${this.cookiesPerHour[i]} cookies`;
    }
    const p2El = document.createElement('p');
    artEl.appendChild(p2El);
    p2El.textContent = `Total: ${this.totalSalesPerDay}`;
  }
};

dubai.getCustmorNumber();
dubai.cookiesAmount();
dubai.render();

// shop #4-paris
const paris={
  location:'؛Paris',
  minCustmor:20,
  maxCustmor:38,
  avgSales:2.3,
  numOfCustPerHour: [],
  cookiesPerHour: [],
  totalSalesPerDay: 0,
  getCustmorNumber: function() {
    for (let i = 0; i< openingHours.length; i++)
    {
      let finalResultOfCust = getRandomIntInclusive(this.minCustmor,this.maxCustmor);
      this.numOfCustPerHour.push(finalResultOfCust);
    }
  },
  cookiesAmount: function(){
    for (let i=0; i<openingHours.length; i++){
      const perHour = Math.ceil(this.numOfCustPerHour[i]*this.avgSales);
      this.cookiesPerHour.push(perHour);
      this.totalSalesPerDay = perHour + this.totalSalesPerDay;
    }
  },

  render: function(){
    const container = document.getElementById('select');
    const artEl= document.createElement('article');
    container.appendChild(artEl);
    const pEl = document.createElement('p');
    artEl.appendChild(pEl);
    pEl.textContent = this.location;
    const ulEl = document.createElement('ul');
    artEl.appendChild(ulEl);
    for ( let i=0; i<openingHours.length; i++){
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${openingHours[i]} : ${this.cookiesPerHour[i]} cookies`;
    }
    const p2El = document.createElement('p');
    artEl.appendChild(p2El);
    p2El.textContent = `Total: ${this.totalSalesPerDay}`;
  }
};

paris.getCustmorNumber();
paris.cookiesAmount();
paris.render();

// shop #5-lima
const lima={
  location:'lima',
  minCustmor:2,
  maxCustmor:16,
  avgSales:4.6,
  numOfCustPerHour: [],
  cookiesPerHour: [],
  totalSalesPerDay: 0,
  getCustmorNumber: function() {
    for (let i = 0; i< openingHours.length; i++)
    {
      let finalResultOfCust = getRandomIntInclusive(this.minCustmor,this.maxCustmor);
      this.numOfCustPerHour.push(finalResultOfCust);
    }
  },
  cookiesAmount: function(){
    for (let i=0; i<openingHours.length; i++){
      const perHour = Math.ceil(this.numOfCustPerHour[i]*this.avgSales);
      this.cookiesPerHour.push(perHour);
      this.totalSalesPerDay = perHour + this.totalSalesPerDay;
    }
  },

  render: function(){
    const container = document.getElementById('select');
    const artEl= document.createElement('article');
    container.appendChild(artEl);
    const pEl = document.createElement('p');
    artEl.appendChild(pEl);
    pEl.textContent = this.location;
    const ulEl = document.createElement('ul');
    artEl.appendChild(ulEl);
    for ( let i=0; i<openingHours.length; i++){
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${openingHours[i]} : ${this.cookiesPerHour[i]} cookies`;
    }
    const p2El = document.createElement('p');
    artEl.appendChild(p2El);
    p2El.textContent = `Total: ${this.totalSalesPerDay}`;
  }
};

lima.getCustmorNumber();
lima.cookiesAmount();
lima.render();



