import React from 'react';
import Logo from '../../Assets/logo.png';
import {FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div class="footer p-10 bg-main text-color">
                <div className='w-6/12 lg:w-3/12'>
                    <span class="footer-title text-white text-semibold">
                        <img src={Logo} alt="logo" className='w-full' />
                    </span> 
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Fermentum sed ultricies volutpat rhoncus faucibus sit.
                    </p>
                    <ul class="menu menu-horizontal p-0">
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a><FaFacebookSquare/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a><FaInstagram/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a><FaLinkedin/></a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a><FaTwitter/></a></li>
                    </ul>
                </div> 
                <div className='w-6/12 lg:w-3/12'>
                    <span class="footer-title text-white text-semibold">Company</span> 
                    <a class="link link-hover">About Us</a> 
                    <a class="link link-hover">Careers</a> 
                    <a class="link link-hover">Blog</a> 
                    <a class="link link-hover">Contact Us</a>
                </div> 
                <div className='w-6/12 lg:w-3/12'>
                    <span class="footer-title text-white text-semibold">Influencer</span> 
                    <a class="link link-hover">Join as Influencer</a> 
                    <a class="link link-hover">HypeSocial</a> 
                </div>
                <div className='w-6/12 lg:w-3/12'>
                    <span class="footer-title text-white text-semibold">Advertiser</span> 
                    <a class="link link-hover">Join as Advertiser</a> 
                    <a class="link link-hover">Hypelink</a> 
                </div>
                </div> 
                <div class="footer px-10 py-4 bg-main text-color">
                <div class="items-center grid-flow-col">
                    <p> &copy; Hypescout 2022. All rights reserved</p>
                </div> 
                <div class="md:place-self-center md:justify-self-end">
                    <ul class="menu menu-horizontal p-0">
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Terms & Conditions</a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Privacy</a></li>
                        <li className='text-md text-color hover:text-gray-200 hover:bg-slate-800 hover:font-semibold'><a>Sitemap</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;