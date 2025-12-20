// Обробка дій з користувачами

import { userService } from "../services/userService.js";
import { store } from "../state/store.js"
import { MESSAGES } from "../config/constants.js";
import { populateDialog } from "../components/editDialog.js"

// Обробник видалення користувача
export const handleDeleteUser = async (userId) => {
    const confirmed = confirm(MESSAGES.CONFIRM_DELETE);
    if (!confirmed) return;

    try {
        await userService.delete(userId);
        store.removeUser(userId);
        alert(MESSAGES.SUCCESS_DELETE);
    } catch (error) {
        console.error(MESSAGES.ERROR_DELETE, error.message);
        alert(MESSAGES.ERROR_DELETE);
    }
};

// Обробник відкриття діалогу редагування
export const handleEditUser = (userId, dialog) => {
    populateDialog(userId, dialog);
    dialog.showModal();
};

// Делегування події для контейнера
export const handleContainerClick = (e, dialog) => {
    // Видалення
    if (e.target.hasAttribute("data-user-remove-btn")) {
        const userId = e.target.dataset.userId;
        handleDeleteUser(userId);
        return;
    }

    // Редагування
    if (e.target.hasAttribute("data-user-edit-btn")) {
        const userId = e.target.dataset.userId;
        handleEditUser(userId, dialog);
    }
};