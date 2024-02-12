export const getImageUrl = path => new URL(`ASSETS/${path}`, import.meta.url).href;

