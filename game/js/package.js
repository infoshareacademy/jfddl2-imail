function Package() {
    this.handle;
}

Package.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    // @TODO: Losowanie obiektu
    var packages = ['package', 'package1', 'package2', 'package3'];
    var colors = ['blue', 'red', 'yellow', 'white'];
    // Losujemy liczbe z zakresu kluczy w tablicy packages
    var randomPackage = Math.floor(Math.random() * packages.length);
    var randomColor = Math.floor(Math.random() * colors.length);

    var className = packages[randomPackage] + ' ' + colors[randomColor];

    this.handle = $('<div class="' + className + '"></div>');
    $('#game').append(this.handle);

    var self = this;

    setTimeout(function () {
        if (randomPackage === 0 || randomPackage === 3) {
            self.moveLeft();
        } else {
            self.moveRight();
        }
    }, 50);

    var speed = 0;
    if (randomPackage === 0) {
        speed = 8000;
    } if (randomPackage === 1) {
        speed = 6000;
    } if (randomPackage === 2) {
        speed = 5000;
    } if (randomPackage === 3) {
        speed = 3500;
    }

    setTimeout(function () {
        self.moveDown();
    }, speed);

    setTimeout(function () {
        self.remove();
    }, speed + 50 + 1000)

    this.intervalId = setInterval(function () {
        self.checkCollision();
    }, 100);
};


Package.prototype.moveLeft = function () {
    this.handle.addClass('moveLeft');
};

Package.prototype.moveRight = function () {
    this.handle.addClass('moveRight');
};

Package.prototype.moveDown = function () {
    this.handle.addClass('moveDown');
};

Package.prototype.remove = function () {
    this.handle.remove();
    clearInterval(this.intervalId);
};

Package.prototype.checkCollision = function () {
    var bottomPositionOfPackage = parseInt(
        this.handle.css('bottom').replace('px', '')
    );
    var leftPositionOfPackage = parseInt(
        this.handle.css('left').replace('px', '')
    );
    
    var leftPositionOfBoy = $('#boy')[0].getBoundingClientRect().left;

    var rightPositionOfBoy = 50 + leftPositionOfBoy;

    console.log(bottomPositionOfPackage, leftPositionOfPackage, leftPositionOfBoy, rightPositionOfBoy,
        bottomPositionOfPackage <= 120, leftPositionOfPackage >= leftPositionOfBoy, leftPositionOfPackage <= rightPositionOfBoy
    );

    if (bottomPositionOfPackage <= 120
        &&
        leftPositionOfPackage >= leftPositionOfBoy
        &&
        leftPositionOfPackage <= rightPositionOfBoy) {
        console.log('Same positnio')
    }
};