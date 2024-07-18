import { useForm } from 'vee-validate';
import * as yup from 'yup';

const taskValidationSchema = yup.object({
    Code: yup.string().required(),
    Name: yup.string().required(),
    Priority: yup.string().required(),
    Date: yup.date().required(),
});

export const useTaskForm = () => {
    return useForm({
        validationSchema: taskValidationSchema,
    });
};

export const useValidationTaskSubmit = () => {
    return useForm().handleSubmit
};
