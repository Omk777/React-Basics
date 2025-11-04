import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";


const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  lname:Yup.string()
        .required('Lname is required ')
        .min(4,'Lname should be atleast 4 chars'),

  password:Yup.string()
          .required('Paasword is required ')
          .min('should be minimum 8 chars')
});

const Form = () => {
  // ✅ Setup form
  const {
    register,
    handleSubmit,
    formState: { errors,touchedFields,dirtyFields },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode:'onchange'
  });

 
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(`Welcome ${data.name} ${data.lname}`);
  };

  

  return (

    
    <form onSubmit={handleSubmit(onSubmit)}>
        
      <div className="form-group">
        <label>Name</label>
        <input type="text" {...register("name")} />
         {errors.name && (touchedFields.name || dirtyFields.name) && (
          <p className="error">{errors.name.message}</p>
        
        )}

        <label >Last name</label>
        <input type="text" {...register('lname')} />
        {
            errors.lname && (touchedFields.lname || dirtyFields.lname) &&(
                <p className='error'>{errors.lname.message}</p>
            )
        }

        <input type="text" {...register('password')} />
        {
          errors.password&&(touchedFields.password || dirtyFields.password) &&(
            <p className='error'>{errors.password.message}</p>
          )
        }
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
