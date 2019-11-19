describe("candyStore",function(){
    let sweet;
    beforeEach(function(){
        sweet=new CandyStore();
    });
    describe("when the remove candy from stock",function(){
        it("reduce or add the number of candy",function(){
            sweet.remove(20,'Gummy bears');
            expect(sweet.stock('Gummy bears')).toEqual(580);
            sweet.add(600,'Reeses Pieces');
            expect(sweet.stock('Reeses Pieces')).toEqual(604);
            sweet.remove(100,'Gummy bears');
            expect(sweet.stock('Reeses Pieces')).toEqual(604);
        });
    });
    
});