class Cinema {

    // properties
    rows;
    seats;

    //methods
    Cinema(rows, seats) {
        this.rows = rows;
        this.seats = seats
    }

    showSeatStatus(row, seats, vacancy) {
        return ((row*seats)-vacancy);
    }

    reserveSeat(row, seats) {

    }

}

const myCinema = new Cinema(5,10);
console.log("Current busy seats: ")
myCinema.showSeatStatus(myCinema.seats,myCinema.rows,10);

export {Cinema};