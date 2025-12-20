/**Ініціалізація додатку, підключення всіх модулів */

import { SELECTORS, MESSAGES } from './config/constants.js';
import { userService } from './services/userService.js';
import { store } from './state/store.js';
import { renderUsers } from './components/userCard.js';
import { handleCreateUser } from './handlers/formHandlers.js';
import { handleContainerClick } from './handlers/userHandlers.js';


// DOM елементи
const createUserForm = document.querySelector(SELECTORS.createForm);
const usersContainer = document.querySelector(SELECTORS.usersContainer);
const editDialog = document.querySelector(SELECTORS.editDialog);

// Ініціалізація додатку
const initApp = async () => {
    try {
        // Завантажити користувачів
        const users = await userService.getAll();
        store.setUsers(users);

        // Підписатися на зміни стану
        store.subscribe((users) => {
            renderUsers(users, usersContainer);
        });

        // Відобразити користувачів
        renderUsers(users, usersContainer);

        // Додати слухачів подій
        createUserForm.addEventListener("submit", (e) =>
            handleCreateUser(e, createUserForm)
        );

        usersContainer.addEventListener("click", (e) =>
            handleContainerClick(e, editDialog)
        );

        console.log("✅ Додаток успішно ініціалізовано!");
    } catch (error) {
        console.error(MESSAGES.ERROR_FETCH, error.message);
        alert(MESSAGES.ERROR_FETCH);
    }
};

initApp();