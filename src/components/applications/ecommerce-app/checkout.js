import React, { Fragment, useState } from 'react';
import { getCartTotal } from "../../../services/index";
import Breadcrumb from '../../common/breadcrumb';
import { useSelector } from 'react-redux';
import useForm from 'react-hook-form'

const Checkout = (props) => {

    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = data => {

        if (data !== '') {
            alert('You submitted the form and stuff!');
            props.history.push(`${process.env.PUBLIC_URL}/ecommerce/invoice`);
        } else {
            errors.showMessages();
        }
    };

    const cart = useSelector(content => content.data.cart);
    const symbol = useSelector(content => content.data.symbol);
    const [obj, setObj] = useState({});

    const setStateFromInput = (event) => {
        obj[event.target.name] = event.target.value;
        setObj(obj);
    }

    const renderLink = () => {
        props.history.push(`${process.env.PUBLIC_URL}/ecommerce/product`);
    }

    return (
        <Fragment>
            <Breadcrumb title="Check out" parent="Ecommerce" />
            <div className="container-fluid">
                <div className="card checkout">
                    <div className="card-header">
                        <h5>Billing Details</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <label className="field-label">First Name</label>
                                            <input className="form-control" type="text" name="firstName" ref={register({ required: true })} />
                                            <span>{errors.firstName && 'First name is required'}</span>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label className="field-label">Last Name</label>
                                            <input className="form-control" type="text" name="lastName" ref={register({ required: true })} />
                                            <span>{errors.lastName && 'Last name is required'}</span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <label>Phone</label>
                                            <input className="form-control" type="text" name="phone" ref={register({ pattern: /\d+/ })} />
                                            <span>{errors.phone && 'Please enter number for phone.'}</span>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label >Email Address</label>
                                            <input className="form-control" type="text" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                                            <span>{errors.email && 'Please enter proper email address .'}</span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-sm-12">
                                            <label className="field-label">Country</label>
                                            <select className="form-control" name="country" >
                                                <option>India</option>
                                                <option>South Africa</option>
                                                <option>United State</option>
                                                <option>Australia</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-sm-12">
                                            <label className="field-label">Address</label>
                                            <input className="form-control" type="text" name="address" ref={register({ required: true, min: 20, max: 120 })} placeholder="Street address" />
                                            <span>{errors.address && 'Please right your address .'}</span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-sm-12">
                                            <label className="field-label">Town/City</label>
                                            <input className="form-control" type="text" name="city" ref={register({ required: true })} onChange={setStateFromInput} />
                                            <span>{errors.city && 'select one city'}</span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-sm-12">
                                            <label className="field-label">State / County</label>
                                            <input className="form-control" type="text" name="state" ref={register({ required: true })} onChange={setStateFromInput} />
                                            <span>{errors.state && 'select one state'}</span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-sm-12">
                                            <label className="field-label">Postal Code</label>
                                            <input className="form-control" type="text" name="pincode" ref={register({ pattern: /\d+/ })} />
                                            <span>{errors.pincode && 'Required integer'}</span>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" id="gridCheck" type="checkbox" />
                                        <label className="form-check-label" >Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-2 pull-right">Place Order</button>
                                </form>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="checkout-details">
                                    <div className="order-box">
                                        <div className="title-box">
                                            <div className="checkbox-title">
                                                <h4>Product </h4><span>Total</span>
                                            </div>
                                        </div>
                                        <ul className="qty">
                                            {cart.map((item, index) => {
                                                return <li key={index}>{item.name} × {item.qty} <span>{symbol} {item.sum}</span></li>
                                            })
                                            }
                                        </ul>
                                        <ul className="sub-total">
                                            <li>Subtotal <span className="count">{symbol}{getCartTotal(cart)}</span></li>
                                            <li className="shipping-class">Shipping
                                                   <div className="shopping-checkout-option">
                                                    <label className="d-block" >
                                                        <input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked />Option 1
                                                        </label>
                                                    <label className="d-block" >
                                                        <input className="checkbox_animated" id="chk-ani1" type="checkbox" />Option 2
                                                       </label>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="sub-total total">
                                            <li>Total <span className="count">{symbol} {getCartTotal(cart)}</span></li>
                                        </ul>
                                        <div className="animate-chk">
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" >
                                                        <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked data-original-title="" title="" />Check Payments
                                                        </label>
                                                    <label className="d-block" >
                                                        <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" data-original-title="" title="" />Cash On Delivery
                                                        </label>
                                                    <label className="d-block" >
                                                        <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked data-original-title="" title="" />PayPal<img className="img-paypal" src="../assets/images/checkout/paypal.png" alt="" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right m-t-20">
                                    <button className="btn btn-primary cart-btn-transform" onClick={renderLink} >continue shopping</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Checkout;
