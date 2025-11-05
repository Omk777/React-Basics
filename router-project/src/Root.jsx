
import React from 'react'
import {Outlet,NavLink,Form,useLoaderData,useNavigation} from "react-router-dom"

export const Root = () => {

    const contacts =useLoaderData();
    const navigation=useNavigation();

  return (
    <div>
        <h1>React Router Demo</h1>
        <nav>
            <NavLink to='/' end>Home</NavLink> | {''}
            <NavLink to="about">About</NavLink>

        </nav>

        <Form method='get'>
            <input type="text"  name='q' placeholder='Search ..'/>
            <button>Search</button>
        </Form>

        <Form>
            <input name='name' placeholder='New Contact' />
            <button type='submit'>Add </button>
        </Form>
        <hr />

        <div className={navigation.state ==="loading" ? "loading":""}>
            <Outlet/>
        </div>

        <ul>
            {contacts.map((c)=>(
                <li key={c.id}>
                    <NavLink to={`contacts/${c.id}`}>{c.name}</NavLink>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Root
