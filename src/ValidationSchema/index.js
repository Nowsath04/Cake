import * as yup from 'yup';

// Helper function to check if a date is 18+ years ago
const isEighteenPlus = (date) => {
    const today = new Date();
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    return date <= eighteenYearsAgo;
};

export const basicSchema = yup.object().shape({
    name: yup.string().min(3, "Minimum 3 letters").required("This field is required"),
    email: yup.string().email("Please enter a valid email address").required("This field is required"),
    phoneno: yup
        .string()
        .matches(/^\d+$/, "Must be a valid number")
        .min(5, "Minimum 5 digits")
        .max(10, "Maximum 10 digits")
        .required("This field is required"),
    dateofbirth: yup.date().required("This field is required").test('is-18+', 'You must be at least 18 years old', value => {
        if (!value) return false;
        return isEighteenPlus(value);
    })
});
