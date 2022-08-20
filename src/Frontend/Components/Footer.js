import React, { useContext } from 'react';
import Logo from '../../Assets/logo.png';
import LogoDark from '../../Assets/logo-dark.png';
import {FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { userContext } from '../../App';

const Footer = () => {
    const {theme, setTheme} = useContext(userContext);
    return (
        <footer className='mt-2 lg:mt-6'>
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center p-10 bg-main text-color gap-2">
                <div className='flex flex-col'>
                    <img src={ theme ==="dark"? Logo : LogoDark} alt="logo" className='w-40 pb-4 mt-0 pt-0' />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Fermentum sed ultricies volutpat rhoncus faucibus sit.
                    </p>
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-md text-gray-500 hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a href="#"><FaFacebookSquare/></a></li>
                        <li className='text-md text-gray-500 hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a href="#"><FaInstagram/></a></li>
                        <li className='text-md text-gray-500 hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a href="#"><FaLinkedin/></a></li>
                        <li className='text-md text-gray-500 hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a href="#"><FaTwitter/></a></li>
                    </ul>
                </div> 
                <div className='flex flex-col'>
                    <h2 className="text-xl py-2 mb-2 text-white font-semibold">Company</h2> 
                    <a href="#" className="link link-hover">About Us</a> 
                    <a href="#" className="link link-hover">Careers</a> 
                    <a href="#" className="link link-hover">Blog</a> 
                    <a href="#" className="link link-hover">Contact Us</a>
                </div> 
                <div className='flex flex-col'>
                    <h2 className="text-xl py-2 mb-2 text-white font-semibold">Influencer</h2> 
                    <a href="#" className="link link-hover">Join as Influencer</a> 
                    <a href="#" className="link link-hover">HypeSocial</a> 
                </div>
                <div className='flex flex-col'>
                    <h2 className="text-xl py-2 mb-2 text-white font-semibold">Advertiser</h2> 
                    <a href="#" className="link link-hover">Join as Advertiser</a> 
                    <a href="#" className="link link-hover">Hypelink</a> 
                </div>
            </div> 
            <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center px-10 py-4 bg-main text-color">
                <div className="items-center grid-flow-col">
                    <p> &copy; Hypescout 2022. All rights reserved</p>
                </div> 
                <div className="md:place-self-center md:justify-self-end">
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a href="#">Terms & Conditions</a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a href="#">Privacy</a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a href="#">Sitemap</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;