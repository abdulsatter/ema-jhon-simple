import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // eslint-disable-next-line
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
         const saveCart = getDatabaseCart();
        const orderDetails = {...loggedInUser, products: saveCart, shipment: data, orderTime: new Date()}

        fetch('http://localhost:5000/addOrder',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                processOrder();
                alert('Your Order successfully')
            }
        })

    };

    console.log(watch("example")); // watch input value by passing the name of it

    return (

        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>

            {/* <input defaultValue="test" {...register("example")} /> */}

            <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder='enter your name' />
            {errors.name && <span className='error'>name is required</span>}

            <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder='enter your email' />
            {errors.email && <span className='error'>email is required</span>}

            <input {...register("address", { required: true })} placeholder='enter your address' />
            {errors.address && <span className='error'>address is required</span>}

            <input {...register("phone", { required: true })} placeholder='enter your phone number' />
            {errors.phone && <span className='error'>phone number is required</span>}

            <input type="submit" />
        </form>
    );
};

export default Shipment;