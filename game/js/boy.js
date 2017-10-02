function Boy() {
    this.handle;
    this.step = 8;
}

// Inicjalizacja naszego czlowieka
Boy.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    var boyElement = $('<div id="boy" class="init"></div>');
    $('#game').append(boyElement);
    this.handle = boyElement[0];
    this.handle.style.left = '50%';
    this.handle.style.bottom = '0%';};

Boy.prototype.moveleft = function () {
    var acctualPositionX = parseInt(this.handle.style.left.replace('%', ''));
    var newPosition = acctualPositionX - this.step;
    if (newPosition > 20)
        this.handle.style.left = newPosition + '%';
};

Boy.prototype.moveright = function () {
    var acctualPositionX = parseInt(this.handle.style.left.replace('%', ''));
    var newPosition = acctualPositionX + this.step;
    if (newPosition < 80)
    this.handle.style.left = newPosition + '%';
};  
