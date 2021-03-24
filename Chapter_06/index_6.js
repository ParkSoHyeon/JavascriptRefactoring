const {defaultOwner, setDefaultOwner} = require("./defaultOwner");

spaceship.owner = defaultOwner();

setDefaultOwner({firstName: '레베카', lastName: '파슨스'});

