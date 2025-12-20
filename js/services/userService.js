/**Всі HTTP запити до API*/
import { API_CONFIG } from "../config/constants.js";

export const userService = {
    // Отримати всіх користувачів
    async getAll() {
        const response = await fetch(API_CONFIG.BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch users");
        return await response.json();
    },

    // Створити користувача
    async create(userData) {
        const response = await fetch(API_CONFIG.BASE_URL, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) throw new Error("Failed to create user");
        return await response.json();
    },

    // Оновити користувача
    async update(userId, userData) {
        const response = await fetch(`${API_CONFIG.BASE_URL}/${userId}`, {
            method: "PUT",
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) throw new Error("Failed to update user");
        return await response.json();
    },

    // Видаленяя користувача
    async delete(userId) {
        const response = await fetch(`${API_CONFIG.BASE_URL}/${userId}`, {
            method: "DELETE"
        });
        if (!response) throw new Error("Faled to delete user");
        return await response.json();
    }
};