// src/components/WeatherForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  city: z.string().nonempty('City name is required'),
});

const WeatherForm = ({ onSubmit }) => {
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const submitHandler = (data) => {
    onSubmit(data.city);
  };

  return (

    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="city">Villes</label>
        <input id="city" {...register('city')} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
    </form>
  );
};

export default WeatherForm;
