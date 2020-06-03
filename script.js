$(function () {
  var friends = ['Ricky', 'Mike', 'Ronnie', 'Bobby', 'Ralph'];
  var locations = [
    'car',
    'copy room',
    'garage',
    'picnic basket',
    'river',
    'closet',
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
    'switch',
    'truth',
    'iron',
    'justice',
    'bomb',
    'baseball',
    'crossbow',
    'gun',
    'whip',
    'hate',
    'funky socks',
    'flip-flops',
    'happiness',
    'bat',
    'pencil',
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
    var friend = friends[i % friends.length];
    var location = locations[i % locations.length];
    var weapon = weapons[i % weapons.length];

    function innerFunction() {
      alert(`Accusation ${i}: I accuse ${friend}, with the ${weapon} in ${location}!`);
    }

    return innerFunction;

  }
});
