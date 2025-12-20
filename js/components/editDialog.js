// Логіка модального вікна редагування 
import { userService } from "../services/userService.js";
import { store } from "../state/store.js";
import { MESSAGES } from "../config/constants.js";

// HTML форми редагування
const createEditFormHTML = (userId) => {
    return `
        <input type="text" name="userId" value="${userId}" hidden/>
        
        <div class="control-field">
            <label for="editNameId" class="form-label">Name</label>
            <input 
                type="text" 
                class="form-control" 
                id="editNameId" 
                name="userName" 
                required 
                minlength="2" 
                maxlength="23"
                placeholder="Enter name"
            >
        </div>

        <div class="control-field">
            <label for="editCityId" class="form-label">City</label>
            <input 
                type="text" 
                class="form-control" 
                id="editCityId" 
                name="userCity" 
                required 
                minlength="2" 
                maxlength="20"
                placeholder="Enter city"
            >
        </div>

        <div class="control-field">
            <label for="editEmailId" class="form-label">Email</label>
            <input 
                type="email" 
                class="form-control form-control--email" 
                id="editEmailId" 
                name="userEmail" 
                required
                placeholder="example@email.com"
            >
        </div>

        <div class="control-field">
            <label for="editImagesUrlId" class="form-label">Avatar</label>
            <select 
                name="userImageUrl" 
                id="editImagesUrlId" 
                class="form-control form-control--images" 
                required
            >
                <option value="">Select avatar</option>
                <option value="https://avatars.mds.yandex.net/i?id=88cc30ba21222ee61db2d32974a5b380259ee41f-3380069-images-thumbs&n=13">
                    🐱 Cat 1
                </option>
                <option value="https://avatars.mds.yandex.net/i?id=6444bd82bce43803b8ad0601c12a80e7-5230955-images-thumbs&n=13">
                    🐱 Cat 2
                </option>
                <option value="https://avatars.mds.yandex.net/i?id=60f5028735fd33706fd8e50bb1d7f636062b21a4-8210619-images-thumbs&n=13">
                    🐱 Cat 3
                </option>
                <option value="https://avatars.mds.yandex.net/i?id=ae0521f7a56e37beaa15c3469ab4c338e350c501-4453150-images-thumbs&n=13">
                    🐶 Dog 1
                </option>
                <option value="https://avatars.mds.yandex.net/i?id=fec854b859968252cfa2ac789041838662475e7e-4667938-images-thumbs&n=13">
                    🐶 Dog 2
                </option>
                <option value="https://avatars.mds.yandex.net/i?id=26253ff7e734e6fd0431b2fbc2b4a1a669ed2685be8a39d1-9148232-images-thumbs&n=13">
                    🐶 Dog 3
                </option>
                <option value="https://avatars.mds.yandex.net/i?id=eaed52ea5bd298c60ff850710e5d05ddd9d26b49-8082760-images-thumbs&n=13">
                    🐺 Wolf 1
                </option>
                <option value="https://avatars.mds.yandex.net/i?id=730e0bcc75f17fff296adf3dcdaae2036067665ec12d546e-12645552-images-thumbs&n=13">
                    🦊 Fox 1
                </option>
            </select>
        </div>

        <button type="submit" class="btn submit-btn">Edit User</button>
    `;
};

// Обробник відправки форми редагування
const handleEditSubmit = async (e, dialog) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);

    try {
        const updatedUser = await userService.update(userData.userId, {
            name: userData.userName,
            city: userData.userCity,
            email: userData.userEmail,
            avatar: userData.userImageUrl
        });

        store.updateUser(updatedUser);
        dialog.close();
        alert(MESSAGES.SUCCESS_EDIT);
    } catch (error) {
        console.error(MESSAGES.ERROR_EDIT, error.message);
        alert(MESSAGES.ERROR_EDIT);
    }
};

// Заповнити діалог
export const populateDialog = (userId, dialog) => {
    dialog.innerHTML = "";

    const editForm = document.createElement("form");
    editForm.classList.add("form");
    editForm.innerHTML = createEditFormHTML(userId);

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.classList.add("close-edit-form-btn");
    closeBtn.textContent = "❌";
    closeBtn.addEventListener("click", () => dialog.close());

    editForm.addEventListener("submit", (e) => handleEditSubmit(e, dialog));

    dialog.append(editForm, closeBtn);
};