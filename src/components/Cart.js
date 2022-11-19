import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es'
import '../style/cart.css';
import {AiOutlineMinusCircle} from "react-icons/ai";
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import {NavLink} from 'react-router-dom';
function Cart() {
    const state = useSelector((state) => state.handleCart)
   const [test, setTest] = useState(false);
   useEffect(() => {
    const testPro = async () => {
        if (state.length > 0) {
            setTest(true);
        }
    }
    testPro();
}, [])   
 
    const ShowProduct = () => {
       return(
            state.map((selectPro) => {
                return (
                       <>
                       <div key={selectPro.id}>
                            <div  className="d-flex justify-content-between align-items-center containairPanier my-4">
                                <div className="product d-flex align-items-center" style={{ "width": "60%" }}>
                                    <img width="30%" src={selectPro.imageUrl} alt="" />
                                    <div className="mx-4">
                                        <h5>{selectPro.Nom_A}</h5>
                                        <span>Numéro de produit {selectPro.Nombre} </span>
                                    </div>
                                </div>
                                <div className="price">
                                    <p className='fw-bold display-6'>{selectPro.Prix}€ </p>

                                </div>
                                <div className="qte bg-secondary text-center">
                                    <AiOutlineMinusCircle size={30}/>
                                    <div className="fs-4">1</div>
                                    <AiOutlinePlusCircle size={30}/>
                                </div>
                                <div className="delete px-4">
                                    <RiDeleteBin5Fill size={40} color="red"/>
                                </div>
                            </div>
                        </div>
                       </> 
                )
            })
            )

    }
   
    const PanierVide = () => {
        return (
            <>
                <div className="container container-largeur containairPanier my-5">
                    <h1 className="text-center">Ton panier est vide</h1>
                    <div className="text-center p-4">
                        <button className="btn btn-primary mx-2 px-3" >Faire des Achats</button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container container-largeur mt-5">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <NavLink to={"../eshop"} className="text-reset">E-shop</NavLink>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">

                                    Panier

                                </li>
                            </ol>

                        </nav>

                    </div>
                </div>
                <div>
                    <div className="recap">
                        <p>Récapitulatif du panier</p>
                    </div>
                    <div>
                        
                        {test ? <ShowProduct /> : <PanierVide/>}
                    </div>
                    <div className="sous-total container-largeur">
                        <h4 className="float-end">
                            <strong>Sous Total : totale</strong>
                        </h4>
                    </div>
                </div>
                <section className="container container-largeur d-flex justify-content-end mx-auto my-5">
                    <button className="btn-reg mx-2 px-3">Continuer mes achats</button>
                    <button className="btn-reg mx-2 px-3">Passer commande</button>
                </section>
            </div>
        </>
    )
}
export default Cart