export const checkValidate = (email, password) => {
    const isEmailValidate = /^[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!isEmailValidate) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;
};
