export const quarterOf = (month: number): number => {
    if(month == 1 || month == 2 || month == 3) {
        return 1
    }
    if(month == 4 || month == 5 || month == 6) {
        return 2
    }
    if(month == 7 || month == 8 || month == 9) {
        return 3
    }
    return 4
};

//better
// export const quarterOf = (month: number): number => Math.ceil(month / 3);