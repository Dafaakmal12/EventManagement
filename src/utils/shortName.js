//create function to short long name
export const shortName = (dateTime) => {
    const dateOnly = dateTime.split(' ')[0];
    return dateOnly;
}
