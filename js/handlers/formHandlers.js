// Обробка форм

import { userService } from "../services/userService.js";
import { store } from "../state/store.js";
import { MESSAGES } from "../config/constants.js";

// Обробник створення користувача
export const handleCreateUser = async (e, form) => {
    e.preventDefault();
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData);

    try {
        const newUser = await userService.create({
            name: userData.userName,
            city: userData.userCity,
            email: userData.userEmail,
            avatar: userData.userImageUrl
        });

        store.addUser(newUser);
        form.reset();
        alert(MESSAGES.SUCCESS_CREATE);
    } catch (error) {
        console.error(MESSAGES.ERROR_CREATE, error.message);
        alert(MESSAGES.ERROR_CREATE);
    }
};