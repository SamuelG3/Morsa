import style from "styled-components";

export const UserEditForm = style.div`
.formField {
    
}

#UserBtnSend {
    width: 100%;
}

label {
    font-weight: bold;
    margin-bottom:5px;
}

#userPicture {
    width: 90px;
    border: 5px solid var(--mid-blue);
    border-radius: 3rem;
    margin-right: 30px;
}

.formInput {
    height: 35px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid var(--mid-blue);
    background: var(--light-blue);
}

.ChangePassword {
    color: var(--main-color);
    font-weight: bold;
    cursor: pointer;
}

.ChangePassword:hover {
    color: var(--secondary-color);
}

.formInput:hover{
    border: 2px solid var(--secondary-color);
}

.formInput:disabled:hover  {
    border: 1px solid var(--mid-blue);
    cursor: not-allowed;
}
`;
