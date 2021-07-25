const dateConverter = date => {
    const convertedDate = new Date(Number(date));
    const month = convertedDate.getMonth() + 1;
    const day = convertedDate.getDate();
    const year = convertedDate.getFullYear();

    return `${month}/${day}/${year}`;
}

export default dateConverter;