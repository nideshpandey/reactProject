import React, { Component } from 'react'
import Modal from 'react-modal'


class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            need: '',
            description: '',
            modal: false

        }
    }

    // This component below uses the single handleAllChanges to handle all the chnages that occur in the form 

    handleAllChanges = (event) => {
        let changes = event.target.name
        let value = event.target.value

        this.setState({
            [changes]: value
        })

    }

    handleSubmit = (event) => {
        alert(`Success ${this.state.name} ${this.state.description}`)
        //this.modalClose()
        // event.preventDefault()
    }


    modalOpen = (event) => {
        this.setState({
            modal: true
        })
    }

    modalClose(event) {
        this.setState({
            modal: false
        })
    }




    render() {

        return (

            //Here is the the form which is built using the react-modal component

            <div class='form'>

                <h2>Fill the information</h2>
                <button onClick={this.modalOpen}>Post information</button>
                <Modal isOpen={this.state.modal}>

                    <div class='create'>
                        <h2>What do you need to do?</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label>Name</label>
                            <input type='text' name = 'name'placeholder='Enter your full name' value={this.state.name} onChange={this.handleAllChanges} />
                            <label>
                                What needs to be done?
                         </label>
                            <textarea name='need' placeholder='e.g. Help me organize my house' value={this.state.need} onChange={this.handleAllChanges}>

                            </textarea>
                            <label>
                                Specify the descriptions
                         </label>
                            <textarea name='description' placeholder='Be specific to describe your needs...' value={this.state.description} onChange={this.handleAllChanges}>

                            </textarea>
                            <button type='submit'>
                                Submit
               </button>

                        </form>

                    </div>


                </Modal>

            </div>


        )
    }
}

export default Form



