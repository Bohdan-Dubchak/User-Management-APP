/**API URL, селектори, текс повідомлень*/

// AIP конфігурація 
export const API_CONFIG = {
    BASE_URL: "https://693c9d53b762a4f15c40ebcc.mockapi.io/user"
};

// Селектори DOM елементів
export const SELECTORS = {
    createForm: "[data-create-user-form]",
    userComtainer: "[data-user-container]",
    editDialog: "[data-edit-user-form-dialog]",
    romoveBtn: "data-user-remove-btn",
    editBtn: "data-user-edit-btn"
};

// Повідомлення 
export const MESSAGES = {
    SUCCESS_CREATE: "НОВИЙ КОРИСТУВАЧ УСПІШНО СТВОРЕНИЙ",
    SUCCESS_EDIT: "КОРИСТУВАЧ УСПІШНО РЕДАГОВАНИЙ",
    SUCCESS_DELETE: "КОРИСТУВАЧ УСПІШНО ВИДАЛЕНИЙ",
    CONFIRM_DELETE: "Ви дійсно хочете видалити цього користувача?",
    ERROR_CREATE: "ПОМИЛКА при стверенні користувача",
    ERROR_EDIT: "ПОМИЛКА при редагуванні користувача",
    ERROR_DELETE: "ПОМИЛКА при видаленні користувача",
    ERROR_FETCH: "ПОМИЛКА при завантаженні користувача"
};

// Валідація
export const VALIDATION = {
    NAME_MIN: 2,
    NAME_MAX: 23,
    CITY_MIN: 2,
    CITY_MAX: 20,
};

