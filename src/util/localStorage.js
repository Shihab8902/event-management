const getItemFromLS = () => {
    const localItem = localStorage.getItem("bookings");
    return localItem ? JSON.parse(localItem) : [];
}


const setItemToLS = selectedEvent => {
    const localItems = getItemFromLS();
    localItems.push(selectedEvent);
    localStorage.setItem("bookings", JSON.stringify(localItems));
}


export { getItemFromLS, setItemToLS }