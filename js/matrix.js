"use strict";

var Matrix = function (element, cellSize, rows, cols) {

    this.element=element;
    this.rows=rows || 20;
    this.cols=cols || 20;
    this.cellSize = cellSize || 20;
    this.points = 0;
    this.snake = null;

    this._constructor = function () {
        this.element.css({
            width: this.cols*this.cellSize,
            height: this.rows*this.cellSize
        });

        this.create();

        this.snake = new Snake(this, 300);

        this.setFood();

    };



    this.create = function () {

        for (var y=1;y<=this.rows;y++){
            for (var x=1;x<=this.cols;x++){
                this.element.append(
                    $('<div>').addClass('cell-'+x+'-'+y)
                ).find('[class*="cell"]').css({
                    width: this.cellSize-1,
                    height: this.cellSize-1
                });

            }
        }

    };

    this.getCell = function (position) {
        return this.element.find('.cell-'+position.x+'-'+position.y);
    };

    this.getRandomCell = function () {
        return {
            x: getRandom(1, this.cols),
            y: getRandom(1, this.rows)
        };
    };

    this.setCell = function (position,cls) {
        this.getCell(position).addClass(cls);
    };



    this.clearCell = function (position) {
        this.getCell(position).removeClass('snake');
    };

    this.checkCollision = function (position) {
        var cell = this.getCell(position);

        return !cell.length || cell.hasClass('snake');
    };

    this.setFood = function () {
        var coordinates = this.getRandomCell();
        while((coordinates.x==this.snake.position.x && coordinates.y==this.snake.position.y)||
        (Math.abs(coordinates.x -this.snake.position.x)<5 &&
        Math.abs(coordinates.y -this.snake.position.y)<5)){
            coordinates=this.getRandomCell();
        }
        this.getCell(coordinates).addClass('food');
    };


    this.gameOver = function () {
        alert("YOU DIED!!!");
    };

    this._constructor();
};