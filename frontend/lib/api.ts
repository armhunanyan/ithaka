const prefix = process.env.NEXT_PUBLIC_API_PATH;

export const servicesPath = `${prefix}/services`;

export const newsPath = `${prefix}/news`;
export const newsByIdPath = (id: string | number) => `${prefix}/news/${id}`;

export const eventsPath = `${prefix}/news`;
export const eventByIdPath = (id: string | number) => `${prefix}/events/${id}`;

export const aboutItemsPath = `${prefix}/about-items`;
export const exhibitionsPath = `${prefix}/exhibitions`;
export const lastExhibitionPath = `${prefix}/last-exhibition`;

export const categoriesPath = `${prefix}/categories`;
export const categoryByIdPath = (id: string | number) => `${prefix}/categories/${id}`;

export const projectsPath = `${prefix}/projects`;
export const projectByIdPath = (id: string | number) => `${prefix}/projects/${id}`;
export const projectByCategoryPath = (id: string | number) => `${prefix}/projects/category/${id}`;

export const clientsPath = `${prefix}/clients`;