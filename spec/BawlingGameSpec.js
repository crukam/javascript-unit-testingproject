describe("Bowling game", function(){var game;

beforeEach(function(){
    game = new BowlingGame();
})

//test
function rollMany (n, pins) {
    for (var i = 0; i < n; i++) {
        game.roll(pins)
    }
}
it("should properly calculate a gutter game", function() {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
});
//test strike
it("should properly calculate a strike",function(){
  rollMany(1,10);
   expect(game.score()).toEqual(0);
});
});