$(function () {
  var friends = ['Ricky', 'Mike', 'Ronnie', 'Bobby', 'Ralph'];
  var locations = [
    'car',
    'copy room',
    'garage',
    'picnic basket',
    'river',
    'girls locker room',
    'oven',
    'toaster',
    'shoe box',
    'genie bottle',
  ];
  var weapons = [
    'sword',
    'axe',
    'machete',
    'wand',
    'dagger',
    'truth',
    'orb',
    'justice',
    'bomb',
    'bow',
    'crossbow',
    'gun',
    'whip',
    'hate',
    'funky socks',
    'steel toe boot',
    'happiness',
    'bat',
    'dart',
    'knife',
  ];

  for (var i = 1; i <= 100; i++) {
    // Due to closure, the $h3 variable has to be wrapped in $($h3) when referenced in the appendTo and click handlers
    var $h3 = $(`<h3>Accusation ${i} </h3>`);
    $($h3).appendTo('body');
    $($h3).click(outerFunction(i));
  }

  function outerFunction(i) {
    // Modulus will allow us to use the i that is being hoisted and incremented from the for loop to limit the return to one of the valid array index values ie: when the i = 84 then friends[84 % 5] = 4 which has a value of 'Ralph'
    var friend = friends[i % 5];
    var location = locations[i % 10];
    var weapon = weapons[i % 20];

    function innerFunction() {
      alert(`Accusation ${i}: I accuse ${friend}, with the ${weapon} in ${location} !`);
    }

    return innerFunction;

  }
});
