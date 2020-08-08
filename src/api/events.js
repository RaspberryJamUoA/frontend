

export const fetchEvents = () => fetch('/events').then(res => res.json())