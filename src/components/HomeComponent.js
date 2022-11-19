import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/BodyHome.css';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';
import img8 from '../assets/images/img8.png';
import img9 from '../assets/images/img9.png';
import img10 from '../assets/images/img10.png';
import img12 from '../assets/images/img12.png';
import img15 from '../assets/images/img15.png';
import rond from '../assets/images/rond.png';
import flech1 from '../assets/logos/icon_flèche_1.png';
import fleche2 from '../assets/logos/icon_flèche_2.png';
import flechDown from '../assets/logos/flèche_down_header.png';
import iconPlayer from '../assets/logos/icon_player.png';

export const HomeComponents = () => {
    return (
        <>
        <div className='appliquebg'>
            <div className="container_a bg_add">
                <p className="container_paragraphe">
                    Au nom de ses parents assassinés, Bruce Wayne mène une guerre éternelle contre les criminels de Gotham City. Il est vengeur. Il est la nuit.
                </p>
                <h2 className="title_batman">Il est Batman.</h2>
                <div className="container_grpButton">
                    <NavLink to="#batcine">VOIR LES HEROS</NavLink>
                    <NavLink to="#nemesis">VOIR LES ADVERSAIRE</NavLink>
                    <div className="container_flecheDown">
                        <img src={flechDown} alt="flèche vers le bas" />
                    </div>
                </div>
            </div>
            <div className='home'>
                <div className="container_a">
                    <div className="box">
                        <div className="box_paragraphe" id="batcine">
                            <h1>BATMAN AU CINÉMA</h1>
                            <p>
                                Le personnage de Batman est un super héros de l’univers de DC Comics. Il NavLink été créé par le dessinateur Bob Kane et le scénariste Bill Finger et apparaît pour la première fois dans le comic book Detective Comics en 1939. Batman se différencie de Superman,
                                alors héros majeur de DC, car il n’a aucun pouvoir. Il sera porté au cinema pour la première fois en 1943 par Lewis Wilson et bénéficiera de nombreux reboot, donnant l’occasion à de multiples acteurs d’interpréter l’homme chauve-souris.
                                Voici les trois derniers :
                            </p>
                        </div>
                        <div className="box_card">
                            <div className="card-item">
                                <div className="item">
                                    <img src={img2} alt="" width="100%" height="auto" />
                                    <div className="item_actor">
                                        <div className="acteur">
                                            <img src={rond} alt="" width="40px" height="auto" />
                                            <h6>Robert Pattinson (2022)</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-item">
                                <div className="item" style={{'width' : '300px'}}>
                                    <img src={img3} alt="" width="100%" height="auto" />
                                    <div className="item_actor">
                                        <div className="acteur">
                                            <div className="acteur">
                                                <img src={rond} alt="" width="40px" height="auto" />

                                                <h6>Christian Bale (2006 2008 2012)</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-item">
                                <div className="item">
                                    <img src={img4} alt="" width="100%" height="auto" />
                                    <div className="item_actor">
                                        <div className="acteur">
                                            <img src={rond} alt="" width="100%" height="auto" />
                                            <h6>Ben Affleck 20016- 2017/2020 2023</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box" id="nemesis">
                        <div className="box_paragraphe">
                            <h1>NÉMÉSIS</h1>
                            <p>
                                Batman souhaite éradiquer la criminalité de Gotham. C’est pourquoi, il affrontera la plupart du temps, des vilains sans capacités surnaturelles mais particulièrement violents ou psychopathes. Avec son introduction dans la Justice League il aura l’occasion
                                de se mesurer à des antagonistes qui défient l’imagination et les lois de la physique. Parmi les derniers ennemis emblématiques que nous avons pu voir au cinéma, on retrouve :
                            </p>
                        </div>
                        <div className="box_card caherOUI">
                            <div className="card-item">
                                <div className="item">
                                    <img src={img5} alt="" width="100%" height="auto" />
                                    <div className="item_actor">
                                        <div className="acteur">
                                            <img src={rond} alt="" width="40px" height="auto" />
                                            <h6>The Riddler Paul Dano(2022)</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-item">
                                <div className="item">
                                    <img src={img6} alt="" width="100%" height="auto" />
                                    <div className="item_actor">
                                        <div className="acteur">
                                            <div className="acteur">
                                                <img src={rond} alt="" width="40px" height="auto" />

                                                <h6>Le Joker Heath Ledger(2008)</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-item">
                                <div className="item">
                                    <img src={img7} alt="" width="100%" height="auto" />
                                    <div className="item_actor">
                                        <div className="acteur">
                                            <img src={rond} alt="" width="100%" height="auto" />
                                            <h6>Darkseid Ray Porter(2022)</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box_paragraphe">
                            <h1>ALLIES</h1>
                            <p>
                                Alfred est le majordome des Wayne. NavLink leur mort il s’occupe de l’éducation du jeune Bruce avant de l’assister dans son rôle du Batman. Ce dernier rencontrera Catwoman dès le premier numéro des aventures de l’homme-chauve souris en 1940. Tantôt ennemie
                                tantôt alliée la jeune femme fatale fera tourner la tête de Batman à maintes reprises. Du côté de la police, Bruce pourra compter sur l’aide infaillible de James Gordon, “Jim , qui désire lui aussi nettoyer sa ville de la criminalité
                                qui y règne.
                            </p>
                        </div>
                        <div className="box_card caherOUI">
                            <div className="card-item">
                                <div className="item">
                                    <img src={img8} alt="" width="100%" height="auto" />
                                    <div className="item_actor">
                                        <div className="acteur">
                                            <img src={rond} alt="" width="40px" height="auto" />
                                            <h6>Alfred Pennyworth Michael Cain(2006 2008 2012)</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-item">
                                <div className="item">
                                    <img src={img9} alt="" width="100%" height="auto" />
                                    <div className="item_actor">
                                        <div className="acteur">
                                            <div className="acteur">
                                                <img src={rond} alt="" width="40px" height="auto" />

                                                <h6>Catwoman Zoé Kravitz(2008)</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-item">
                                <div className="item">
                                    <img src={img10} alt="" width="100%" height="auto" />
                                    <div className="item_actor">
                                        <div className="acteur">
                                            <img src={rond} alt="" width="100%" height="auto" />
                                            <h6>James Gordon(2014 2019)</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-g w-100 px-5'>
                <div className="box">
                    <div className="box_paragraphe">
                        <h1>BATMAN V SUPERMAN</h1>
                        <p>
                            Le monde n’est pas assez grand pour deux super héros. Alors que Superman se battait contre Zod, l’affrontement fait des dégats
                            et détruit partiellement la ville de Métropolis. Bruce Wayne alors présent dans la ville assiste, impuissant, à l’effondrement de la
                            ville qui fait beaucoup de victimes. Wayne est alors persuadé que Superman causera un jour la perte de l'Humanité et qu'il est
                            inévitable de se préparer à l'éliminer. Devenu méfiant il se demande si l'homme de fer, cet extraterrestre de Krypton, qui peut à lui
                            seul détruire le monde d'une simple pichenette, décidera un jour de ne plus défendre la Terre, voire même de causer sa perte.
                        </p>
                        <p>
                            De son côté Superman d’une part cherche à se défendre mais retourne l’offensive contre Batman. Ce dernier n'est plus que
                            l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane et cruel à la suite du meurtre de son ancien partenaire Robin
                            par le Joker, il n'hésite plus à violer son code moral en éliminant et marquant au fer les criminels. Superman souhaite simplement
                            lui rappeler le code moral des “justicier” en usant de la force s’il le faut pour que Batman cesse son comportement abusif.
                        </p>
                    </div>
                </div>
                <div className="Mutli">
                    <h1 className="txt_presentation">MULTIMÉDIA</h1>
                    <div className="cart_faddin">
                        <div className="controle">
                            <img src={flech1} alt="" />
                        </div>
                        <div className="controle">
                            <div className="cart1">
                                <img src={img12} alt="" />
                                <div className="article">
                                    <h1>Action, Adventure</h1>
                                    <h2>Batman Begins</h2>
                                    <h3>IMDB: <span>8.2</span></h3>
                                    <p>
                                        Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profondément traumatisé, il grandit obnubilé par un désir de vengeance. La Ligue des ombres, une secte de guerriers ninja dirigée par Ra's al Ghul, se chargera de son entraînement. De
                                        retour chez lui à Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne se lance alors dans la lutte contre le crime sous le nom de Batman.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="controle">
                            <img src={fleche2} alt="" />
                        </div>
                    </div>
                    <div className="bande_annonce">
                        <img src={img15} alt="" width="100%" height="auto" />
                        <img src={iconPlayer} alt="" width="100%" height="auto" className="iconPlayer" />
                    </div>
                </div>
            </div>
        </div>
        <div className="contact">
                <div className="contact-bloc">
                    <form action="">
                        <h1>PRENONS CONTACT</h1>
                        <label htmlFor="mail" className="label1">ADDRESSE EMAIL</label>
                        <input type="text" id="mail" placeholder="Addresse email" />
                        <h3>NEWSLETTER</h3>
                        <label htmlFor="nws" className="label2">En cochant cette case vous acceptez de recevoir l’actualité concernant les
                            aventures de Batman : <input type="checkbox" id="nws" /></label>
                        <div className="dropdown">
                            <input type="text" className="dropdown-in" disabled placeholder="Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter" />
                            <div className="dropdown-content">
                                <NavLink to="#">Link 1</NavLink>
                                <NavLink to="#">Link 2</NavLink>
                                <NavLink to="#">Link 3</NavLink>
                            </div>
                        </div>
                        <p>Souhaitez vous recevoir des news </p>
                        <div className="btn-groupe">
                            <button className="allLogos">Des films</button><button className="allLogos">Des comics</button><button className="allLogos">De tout</button>
                        </div>
                        <h3>MESSAGE</h3>
                        <textarea name="" id="" placeholder="Laissez un commentaire pour la communauté"></textarea>
                        <div className="bloc-confirmer"><button className="confirmer allLogos">CONFIRMER</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}