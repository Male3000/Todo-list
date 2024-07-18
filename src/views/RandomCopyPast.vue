<template>
    <form @submit="onSubmit">
      <InputText  label="firstName" />
      <InputText label="lastName" />
      <InputText label="email" type="email" />
      <InputText label="password" type="password" />
      <InputText label="passwordConfirm" type="password" />
  
      <button>Submit</button>
    </form>
  </template>
  
  <script setup>
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
//   import InputText from '../components/CopyPastInputText.vue'  
  import InputText from "../composables/_InputTextC.vue"

  const { handleSubmit } = useForm({
    validationSchema: yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      passwordConfirm: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref('password')]),
    }),
  });
  
  const onSubmit = handleSubmit(values => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  });
  </script>
  