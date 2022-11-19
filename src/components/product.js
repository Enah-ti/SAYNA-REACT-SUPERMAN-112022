import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {addCart} from '../components/redux/action';
import { NavLink } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

import '../style/product.css';
export const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(addCart(product)); 
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:4200/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct()
    }, []);

    const Loading = () => {
        return (
            <>
            <div style={{"width" : "70%"}} className="m-auto">
                <div className="row mt-5">
                    <div className="col-6">
                        <Skeleton width={300} height={200} />
                    </div>
                    <div className="col-6">
                        <div className='col'>
                            <Skeleton width={100} />
                        </div>
                        <div className='col'>
                            <Skeleton width={200} />
                        </div>
                        <div className='col'>
                            <Skeleton width={300} height={200} />
                        </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        const state = useSelector((state) => state.handleCart)
        return (
            <div>
                <section>
                    <div className="container pt-5 conteneur-single">
                        <div className="row">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row bd-highlight">
                                    <div style={{ "width": "100px" }} className="text-decoration-underline"><NavLink to={"../../Eshop"}>E shop </NavLink></div>
                                    <div className="bd-highlight"><NavLink to={"#"} className="text-reset text-underline-none">Panier</NavLink></div>
                                </div>
                                <section className="container">
                                    <div className="float-end text-white">
                                     <NavLink className="text-reset" to={"../../cart"}><AiOutlineShoppingCart size={30} color="#fff" /><span className='text-white text-just'>({state.length})</span></NavLink>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section >
                <br /><br />
                <section className="product conteneur-single">
                    <div className="row">
                        <div className="col-md-6">
                            <img width="85%" src={product.imageUrl} alt={product.Nom_A} />
                        </div>
                        <div className="col-md-6">
                            <div className="star pb-3">
                                <AiFillStar size={30} color="orange" />
                                <AiFillStar size={30} color="orange" />
                                <AiFillStar size={30} color="orange" />
                                <AiFillStar size={30} color="orange" />
                                <AiFillStar size={30} color="orange" />
                                <span className="px-3 gray">6 commentaires</span>
                            </div>
                            <h1>{product.Nom_A}</h1>
                            <div className="white-color"></div>
                            <div className="row my-4">
                                <div className="d-flex justify-content-between">
                                    <h3 className='fw-bold'>€{product.Prix}</h3>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="px-4">EnStock</div>
                                        <select className="form-select rounded" aria-label="Default select example">
                                            <option selected>Taille M</option>
                                            <option value="1">Taille L</option>
                                            <option value="2">Taille XL</option>
                                            <option value="3">Taille S</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="d-flex align-items-center pb-5">
                                    <button className="btn btn-success" onClick={()=> addProduct(product)}>Ajouter au panier</button>
                                    <div className="mx-3 border">
                                        <BsHeart size={25} />
                                    </div>
                                </div>
                            </div>
                            <div className="white-color"></div>
                            <div className="description mt-4">
                                {product.Description}
                            </div>
                        </div>
                    </div>
                </section >
                <br />
                <div className="my-4 conteneur-single">
                    <div className="white-color"></div>
                </div>

                <section>
                    <div className="conteneur-single">
                        <div className="caracteristiques">a
                            <h4>Caractéristiques</h4>
                            <p>Matériaux:</p>
                            <p>Couleur:</p>
                            <p>Poids:</p>
                            <p>Capacité:</p>
                        </div>
                        <div className="my-4">
                            <div className="white-color"></div>
                        </div>

                        <div className="caracteristiques">
                            <h4>Livraison</h4>
                            <p>Livraison à domicile</p>
                            <p>Retrait en point relais</p>
                            <p>Délai de livraison 2-4 jours</p>
                        </div>
                        <div className="my-4">
                            <div className="white-color"></div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}