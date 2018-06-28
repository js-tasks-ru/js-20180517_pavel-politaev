let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function() {

    let current = this.from;
    let last = this.to;
    const WEEKEND_DAYS = [0,6]

    return {
        next() {

            if (current <= last) {

                current.setDate(current.getDate() + 1)

                let numberOfWeek = current.getDay()
                let formattedDay = ('0' + current.getDate()).slice(-2);

                if(WEEKEND_DAYS.indexOf(numberOfWeek) !== -1){
                    formattedDay = `[${formattedDay}]`
                }

                return {
                    done: false,
                    value: formattedDay
                }
            } else {
                return {
                    done: true
                }
            }
        }

    }
};