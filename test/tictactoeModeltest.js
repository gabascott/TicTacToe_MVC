const {test} = QUnit;
let tomb = [];
let kiertekel = new Kiertekel(tomb);


QUnit.module('TicTacToe getVizszintes ellenőrzések', function() {
    test('getVizszintes létezik-e?', function(assert) {
      assert.ok(kiertekel.getVizszintes, "getVizszintes létezik!");
    });
    test('getVizszintes függvény-e?', function(assert) {
        assert.ok(typeof kiertekel.getVizszintes === "function", "getVizszintes egy függvény!");
    });
    test('Üres tictactoe', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getVizszintes(), "---@---@---@");
    });
    test('Első sor X', function(assert) {
        let tomb = [
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getVizszintes(), "XXX@---@---@");
    });
    test('Első sor O', function(assert) {
        let tomb = [
            {ertek: "O"},
            {ertek: "O"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getVizszintes(), "OOO@---@---@");
    });
    test('Második sor X', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getVizszintes(), "---@XXX@---@");
    });
    test('Második sor O', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "O"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getVizszintes(), "---@OOO@---@");
    });
    test('Harmadik sor X', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getVizszintes(), "---@---@XXX@");
    });
    test('Harmadik sor O', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "O"},
            {ertek: "O"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getVizszintes(), "---@---@OOO@");
    });
    test('2 sorban egymást kiegészítve nyerhet-e?', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getVizszintes(), "--X@XX-@---@", "nem");
    });
});

QUnit.module('TicTacToe getAtlo ellenőrzések', function() {
    test('getAtlo létezik-e?', function(assert) {
        assert.ok(kiertekel.getAtlo, "getAtlo létezik!");
    });
    test('getAtlo függvény-e?', function(assert) {
        assert.ok(typeof kiertekel.getAtlo === "function", "getAtlo egy függvény!");
    });
    test('Balról jobbra átló X', function(assert) {
        let tomb = [
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getAtlo(), "XXX@-X-");
    });
    test('Balról jobbra átló O', function(assert) {
        let tomb = [
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getAtlo(), "OOO@-O-");
    });
    test('Jobbról balra átló X', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getAtlo(), "-X-@XXX");
    });
    test('Jobbról balra átló O', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getAtlo(), "-O-@OOO");
    });
});

QUnit.module('TicTacToe getFuggoleges ellenőrzések', function() {
    test('getFuggoleges létezik-e?', function(assert) {
        assert.ok(kiertekel.getFuggoleges, "getFuggoleges létezik!");
    });
    test('getFuggoleges függvény-e?', function(assert) {
        assert.ok(typeof kiertekel.getFuggoleges === "function", "getFuggoleges egy függvény!");
    });
    test('Első oszlop X', function(assert) {
        let tomb = [
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getFuggoleges(), "XXX@---@---@");
    });
    test('Első oszlop O', function(assert) {
        let tomb = [
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getFuggoleges(), "OOO@---@---@");
    });
    test('Második oszlop X', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getFuggoleges(), "---@XXX@---@");
    });
    test('Második oszlop O', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getFuggoleges(), "---@OOO@---@");
    });
    test('Harmadik oszlop X', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getFuggoleges(), "---@---@XXX@");
    });
    test('Harmadik oszlop O', function(assert) {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "O"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getFuggoleges(), "---@---@OOO@");
    });
});

QUnit.module('TicTacToe getEllenorzes ellenőrzések', function() {
    test('getEllenorzes létezik-e?', function(assert) {
        assert.ok(kiertekel.getEllenorzes, "getEllenorzes létezik!");
    });
    test('getEllenorzes függvény-e?', function(assert) {
        assert.ok(typeof kiertekel.getEllenorzes === "function", "getEllenorzes egy függvény!");
    });
    test('Első sor X', function(assert) {
        let tomb = [
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let kiertekel = new Kiertekel(tomb);
        assert.equal(kiertekel.getEllenorzes(), "X");
    });
});