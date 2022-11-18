export const renderDate = (date) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    };

    const formatDate = new Date(date);
    return formatDate.toLocaleString('en-US', options);
};
