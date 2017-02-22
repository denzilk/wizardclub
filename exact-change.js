/*
Exact Change 

Design a cash register drawer function checkCashRegister() that accepts 
purchase price as the first argument (price), payment as the second 
argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the 
change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

https://www.freecodecamp.com/challenges/exact-change
*/

function denomsInCents(){
  return {
    "ONE HUNDRED": 10000,
    "TWENTY"     : 2000,
    "TEN"        : 1000,
    "FIVE"       : 500,
    "ONE"        : 100,
    "QUARTER"    : 25,
    "DIME"       : 10,
    "NICKEL"     : 5,
    "PENNY"      : 1  
  };
}

function convertToObject(changeInDrawer){
  var changeObject = {};
  changeInDrawer.forEach(function(val){
    if(val[1] > 0){
      changeObject[val[0]] = Math.round(val[1].toFixed(2) * 100);
    }
  });
  return changeObject;
}

function largestDebit(changeNeeded, changeHave, denominationSize){  
  var numerator = changeNeeded > changeHave ? changeHave : changeNeeded;
  var quotient  = parseInt(numerator / denominationSize);
  return quotient * denominationSize;
}

function checkCashRegister(price, cash, cid) {  
  var change = [], decrease;
  
  // convert everything to cents to avoid js number issues
  var changeNeeded = Math.round((cash - price) * 100);  
  var changeHave = convertToObject(cid);  
  var denoms = denomsInCents();
  
  for(var denom in denoms){
    if(changeHave[denom]){
      decrease = largestDebit(changeNeeded, changeHave[denom], denoms[denom]);
      if (decrease > 0){
        changeNeeded -= decrease;
        
        // convert back to cents
        change.push([denom, parseFloat( (decrease / 100).toFixed(2) )]);
        
        // if we're out of money, delete key
        if(changeHave[denom] == decrease){
          delete changeHave[denom];
        }
      }
    }
  }

  if(!Object.keys(changeHave).length){
    change = "Closed";
  }
  
  if(changeNeeded > 0){
    change = "Insufficient Funds";
  }
  
  return change;
}


checkCashRegister(19.50, 20.00, 
    [ ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], 
      ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]
    ]);
