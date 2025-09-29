import { request } from "./request";

export const getBanners = () =>
    request("/banners", "GET");

export const getReferences = () =>
    request("/references", "GET");

export const getCatalogues = () =>
    request("/catalogs", "GET");

export const getActivities = () =>
    request("/brand-activity-areas", "GET");

export const getCommunications = () =>
    request("/communications", "GET");

export const getData = () =>
    request("/data", "GET");

export const getProjects = () =>
    request("/project-management", "GET");

export const getProjectFields = () =>
    request("/field-of-activities", "GET");

export const getBrands = () =>
    request("/brands", 'GET');

export const getActivityAreasByBrand = (brandId) =>
    request(`/brand-activity-areas/by-brand/${brandId}`, 'GET');

export const getBrandsByActivityArea = (activityAreaId) =>
    request(`/brand-activity-areas/${activityAreaId}/brands`, 'GET');

export const getProductsByBrandActivityArea = (brandActivityAreaId) =>
    request(`/products/by-brand-activity-area/${brandActivityAreaId}`, 'GET');

export const getProductsByBrandId = (brandId) =>
    request(`/products/by-brand/${brandId}`, 'GET');

export const getProductDetail = (productId) =>
    request(`/products/${productId}`, "GET");