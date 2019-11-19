let CandyStore=function(){
    this.Candy=['Gummy bears','Reeses Pieces', 'Caramels','Skittles','Runts','Gumballs','Jelly beans','Lollipops'];
    this.Inventory=[600,4,600,600,600,600,600,600];
}

CandyStore.prototype.stock=function(candy){
return this.Inventory[this.Candy.indexOf(candy)];
}
CandyStore.prototype.remove=function(n,candy){
    self=this;
    self.Inventory[self.Candy.indexOf(candy)]-=n;
}

CandyStore.prototype.add=function(n,candy){
self=this;
self.Inventory[self.Candy.indexOf(candy)]+=n;
}

