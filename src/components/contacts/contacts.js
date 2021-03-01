import React from 'react'
import './contacts.scss'


export default function Contacts() {


    return (
        <div className="contacts_container">
            <h2><span>S</span>tart a <span>P</span>roject</h2>

            <form>
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}
