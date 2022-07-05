const prefix = process.env.API_PATH;

export const servicesPath = `${prefix}/services`;
export const newsPath = `${prefix}/news`;
export const eventsPath = `${prefix}/news`;
export const newsByIdPath = (id: string | number) => `${prefix}/news/${id}`;
export const eventByIdPath = (id: string | number) => `${prefix}/events/${id}`;
export const lastExhibitionPath = `${prefix}/last-exhibition`;
export const aboutItemsPath = `${prefix}/about-items`;
export const exhibitionsPath = `${prefix}/exhibitions`;