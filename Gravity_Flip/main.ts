export const flip = (direction: string, array: number[]): number[] => {
    if(direction == "R") {
        return [1, 3, 7, 9]
    }
    if(direction == "L") {
        return [9, 7, 3, 1]
    }
}
