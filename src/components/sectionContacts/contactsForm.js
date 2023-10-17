import React from 'react'
import "../../style/main.sass"
import Input from "./input"

class ContactsForm extends React.Component {
    render(){
        return (
            <form action="#">
                <div class="input-box">
                    <Input type="text" placeholder="Полное имя" />
                    <Input type="email" placeholder="Почта" />
                </div>
                <div class="input-box">
                    <Input type="number" placeholder="Номер телефона" />
                    <Input type="text" placeholder="Дополнительная почта" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Ваше сообщение"></textarea>
                <Input type="sumbit" value="Отправить" className="btn" />
            </form>
        )
    }
    

}

export default ContactsForm 