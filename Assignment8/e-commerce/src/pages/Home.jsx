import React, { useContext } from "react";
import Layout from "../components/Layout";
import myContext from "../context/data/myContext";
import HeroSection from "../components/HeroSection";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import Track from "../components/Track";
import Testimonial from "../components/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/cartSlice";

const Home = () => {
    return (
        <div>
            <Layout>
                <HeroSection />
                <Filter />
                <ProductCard />
                <Track />
                <Testimonial />
            </Layout>
        </div>
    );
};

export default Home;
