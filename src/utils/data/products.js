import uniqid from "uniqid";

import c01Front from "../../assets/images/products/carg-01/front.jpg";
import c01Details from "../../assets/images/products/carg-01/details.webp";

import c02Front from "../../assets/images/products/carg-02/front.jpg";
import c02Details from "../../assets/images/products/carg-02/details.png";

import c03Front from "../../assets/images/products/carg-03/front.jpg";
import c03Flat from "../../assets/images/products/carg-03/flat.webp";

import c04Flat from "../../assets/images/products/carg-04/flat.jpg";
import c04Details from "../../assets/images/products/carg-04/phone.webp";

import c05Main from "../../assets/images/products/carg-05/main.jpg";
import c05Details from "../../assets/images/products/carg-05/details.jpg";
import c05Phone from "../../assets/images/products/carg-05/phone.jpg";
import c05Flat from "../../assets/images/products/carg-05/flat.jpg";
import c05Urban from "../../assets/images/products/carg-05/urban.jpg";

import c06Base from "../../assets/images/products/carg-06/base.jpg";
import c06Custom from "../../assets/images/products/carg-06/custom.webp";
import c06Specs from "../../assets/images/products/carg-06/specs.webp";

import c07Main from "../../assets/images/products/carg-07/main.jpg";
import c07Flat from "../../assets/images/products/carg-07/flat.webp";

import c08Front from "../../assets/images/products/shark-transp-01/front.jpg";
import c08Close from "../../assets/images/products/shark-transp-01/close.jpg";
import c08Comercial from "../../assets/images/products/shark-transp-01/comercial.jpg";
import c08Conex from "../../assets/images/products/shark-transp-01/conex.jpg";
import c08ConexLaptop from "../../assets/images/products/shark-transp-01/conex-laptop.jpg";
import c08Variant from "../../assets/images/products/shark-transp-01/variant.jpg";
import c08Vertical from "../../assets/images/products/shark-transp-01/vertical.jpg";

import c09Flat from "../../assets/images/products/shark-transp-02/flat.jpg";
import c09Iso from "../../assets/images/products/shark-transp-02/iso.jpg";

const min = 4.99;
const max = 24.99;

const products = [
  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-01",
    name: "Cargador portatil 01",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    mainImage: c01Front,
    carouselImages: [
      { id: 1, url: c01Front },
      { id: 2, url: c01Details },
    ],
    description: "Cargador Portatil 10000 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },
  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-02",
    name: "Cargador portatil 02",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    mainImage: c02Front,
    carouselImages: [
      { id: 3, url: c02Front },
      { id: 4, url: c02Details },
    ],
    description: "Cargador Portatil 20000 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },
  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-03",
    name: "Cargador portatil 03",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    mainImage: c03Front,
    carouselImages: [
      { id: 5, url: c03Front },
      { id: 6, url: c03Flat },
    ],
    description: "Cargador Portatil 4000 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-04",
    name: "Cargador portatil 04",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    mainImage: c04Flat,
    carouselImages: [
      { id: 7, url: c04Flat },
      { id: 8, url: c04Details },
    ],
    description: "Cargador Portatil 8500 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-05",
    name: "Cargador portatil 05",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    mainImage: c05Main,
    carouselImages: [
      { id: 9, url: c05Main },
      { id: 10, url: c05Details },
      { id: 11, url: c05Urban },
      { id: 12, url: c05Phone },
      { id: 13, url: c05Flat },
    ],
    description: "Cargador Portatil 8500 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-06",
    name: "Cargador portatil 06",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    mainImage: c06Base,
    carouselImages: [
      { id: 14, url: c06Base },
      { id: 15, url: c06Custom },
      { id: 16, url: c06Specs },
    ],
    description: "Cargador Portatil 8500 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-07",
    name: "Cargador portatil 07",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    mainImage: c07Main,
    carouselImages: [
      { id: 17, url: c07Main },
      { id: 18, url: c07Flat },
    ],
    description: "Cargador Portatil 8500 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-08",
    name: "Cargador portatil 08",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    mainImage: c08Front,
    carouselImages: [
      { id: 19, url: c08Front },
      { id: 20, url: c08Close },
      { id: 21, url: c08Comercial },
      { id: 22, url: c08Conex },
      { id: 23, url: c08ConexLaptop },
      { id: 24, url: c08Variant },
      { id: 25, url: c08Vertical },
    ],
    description: "Cargador Portatil 8500 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-09",
    name: "Cargador portatil 09",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    mainImage: c09Flat,
    carouselImages: [
      { id: 26, url: c09Flat },
      { id: 27, url: c09Iso },
    ],
    description: "Cargador Portatil 8500 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },
];

export default products;
