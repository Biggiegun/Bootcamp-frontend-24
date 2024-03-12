class Cinema {

    // properties
    rows;
    seats;

    //methods
    Cinema() {
    }

    set Seats(seat) {
        this.setSeat = seat;
    }

    get Seats() {
        return `${this.seats}`
    }


    set rows(rows) {
        this.rows = rows;
    }

    get rows() {
        return `${this.rows}`;
    }

    showSeatStatus(row, seats, vacancy) {
        return ((row * seats) - vacancy);
    }

    reserveSeat(rowNumber, seatsNumer, state) {

    }

}

class Seat {

    //Atributes
    rowNumber;
    seatNumber;
    isBusy;
    counter = 0;

    //Methods
    Seat() {
    }

    set counter(counter) {
        this.counter = counter;
    }

    get counter() {
        return `${this.counter}`;
    }

    reserve(rowNumber, seatNumber, isbusy) {

        this.rowNumber = rowNumber;
        this.seatNumber = seatNumber;
        this.isBusy = isbusy;
        this.counter += 1;
        return this.counter;
    }

}
const mySeat = new Seat();

// Set of reserved seats !!
mySeat.reserve(1, 7, false);
mySeat.reserve(1, 6, false);
mySeat.reserve(1, 5, false);
mySeat.reserve(1, 4, false);
mySeat.reserve(1, 3, false);
mySeat.reserve(1, 2, false);
Seat.counter = mySeat.reserve(1, 1, false);
console.log("Number of reserved seats:" + Seat.counter);

////////////////////////////////////////////////////////////////////////////
console.log('<------------------------------------------------------------->');
const myCinema = new Cinema();

console.log("Number of Cinema seats per row: ");
Cinema.seats = 5
console.log(Cinema.seats);

console.log("Number of Cinema rows: ");
Cinema.rows = 10
console.log(Cinema.rows);

console.log('Initial capacity ')
console.log(myCinema.showSeatStatus(Cinema.rows, Cinema.seats, 0));

console.log("Current busy seats: ")
console.log(myCinema.showSeatStatus(Cinema.rows, Cinema.seats, Seat.counter));