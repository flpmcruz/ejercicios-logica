function wrapping(gifts) {
    var result = [];
    function asteriscos(number) {
        var x = "";
        for (var i = 0; i <= number; i++) {
            x += "*";
        }
        return "".concat(x, "\n");
    }
    gifts.map(function (gift, i) {
        var count = i + 4;
        result.push("".concat(asteriscos(count), "*").concat(gift, "*\n").concat(asteriscos(count)));
    });
    return result;
}
var regalos = ["cat", "game", "socks"];
var envueltos = wrapping(regalos);
console.log(envueltos);
