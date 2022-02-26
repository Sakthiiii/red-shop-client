import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class UpdateShipping extends Component {
    constructor() {
        super()
        this.state = {
            user_id: '',
            address: '',
            city: '',
            postal_code: '',
            country: '',
            phone: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }    

    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })

        const email = localStorage.getItem("email");
        this.setState({ user_id: email });
    }

    onSubmit(e) {
        e.preventDefault()

        const updatedUser = {
            address: this.state.address,
            city: this.state.city,
            postal_code: this.state.postal_code,
            country: this.state.country,
            phone: this.state.phone
        }
     //   console.log(updatedUser);

        axios.put('shippings/update-shipping/' + this.state.user_id, updatedUser)
            .then((res) => {
                console.log(res.data)
                console.log('Shipping Address successfully updated')
            }).catch((error) => {
                console.log(error)
            })

      //  this.props.history.push(`/checkoutSteps`)
    }

    render() {
        return (
            <div className="container" style={{borderTopLeftRadius:"100px",borderBottomRightRadius:"100px",backgroundColor:"lightgray"}} >
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal" style={{marginLeft:"100px",fontWeight:"700"}}> Update Shipping Address</h1>
                            <div className="form-group">
                                <label htmlFor="name" style={{fontWeight:"600"}}>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    style={{borderTopLeftRadius:"30px",borderBottomRightRadius:"30px"}}
                                    placeholder="Enter your Address"
                                    value={this.state.address}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name" style={{fontWeight:"600"}}>City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    style={{borderTopLeftRadius:"30px",borderBottomRightRadius:"30px"}}
                                    placeholder="Enter your City"
                                    value={this.state.city}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name" style={{fontWeight:"600"}}>Postal Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="postal_code"
                                    style={{borderTopLeftRadius:"30px",borderBottomRightRadius:"30px"}}
                                    placeholder="Enter Postal Code"
                                    value={this.state.postal_code}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name" style={{fontWeight:"600"}}>Country</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="country"
                                    style={{borderTopLeftRadius:"30px",borderBottomRightRadius:"30px"}}
                                    placeholder="Enter your Country"
                                    value={this.state.country}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="number" style={{fontWeight:"600"}}>Phone</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="phone"
                                    style={{borderTopLeftRadius:"30px",borderBottomRightRadius:"30px"}}
                                    placeholder="Enter your Mobile Number"
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <Link to="/CheckoutSteps"><button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block"
                                style={{borderTopLeftRadius:"100px",borderBottomRightRadius:"100px"}}
                            >
                                Save
                            </button></Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateShipping;
