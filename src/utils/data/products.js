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

const min = 20;
const max = 45;

const products = [
  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-01",
    name: "Voltix Pro 10",
    price: Math.floor(Math.random() * (max - min + 1) + min) - 0.01,
    mainImage: c01Front,
    carouselImages: [
      { id: 1, url: c01Front, alt: "Voltix Pro 10 Front view" },
      { id: 2, url: c01Details, alt: "Voltix Pro 10 Ports details" },
    ],
    category: "tech",
    reviews: [
      {
        name: "John Miller",
        starCount: 5,
        date: "Dec 12, 2025",
      },
      {
        name: "Sarah Jenkins",
        starCount: 4,
        date: "Dec 08, 2025",
      },
    ],
  },
  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-02",
    name: "TitanCharge 20K",
    price: Math.floor(Math.random() * (max - min + 1) + min) - 0.01,
    mainImage: c02Front,
    carouselImages: [
      { id: 3, url: c02Front, alt: "TitanCharge 20K Front view" },
      { id: 4, url: c02Details, alt: "TitanCharge 20K Port Details" },
    ],

    category: "tech",
    reviews: [
      {
        name: "Michael R.",
        starCount: 5,
        date: "Nov 30, 2025",
      },
    ],
  },
  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-03",
    name: "NanoSlim Air",
    price: Math.floor(Math.random() * (max - min + 1) + min) - 0.01,
    mainImage: c03Front,
    carouselImages: [
      { id: 5, url: c03Front, alt: "NanoSlim Air Front view" },
      { id: 6, url: c03Flat, alt: "NanoSlim Air Horizontal view" },
    ],
    category: "tech",
    reviews: [
      {
        name: "Emily Watson",
        starCount: 4,
        date: "Dec 22, 2025",
      },
    ],
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-04",
    name: "Apex LED Digital",
    price: Math.floor(Math.random() * (max - min + 1) + min) - 0.01,
    mainImage: c04Flat,
    carouselImages: [
      { id: 7, url: c04Flat, alt: "Apex LED Digital Front view" },
      {
        id: 8,
        url: c04Details,
        alt: "Apex LED Digital Porcentages charge",
      },
    ],
    category: "tech",
    reviews: [
      {
        name: "Kevin Taylor",
        starCount: 5,
        date: "Dec 01, 2025",
      },
    ],
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-05",
    name: "Urban Core 85",
    price: Math.floor(Math.random() * (max - min + 1) + min) - 0.01,
    mainImage: c05Main,
    carouselImages: [
      { id: 9, url: c05Main, alt: "Urban Core 85 Front view" },
      {
        id: 10,
        url: c05Details,
        alt: "Urban Core 85 Back view details",
      },
      {
        id: 11,
        url: c05Urban,
        alt: "Urban lifestyle photo of Urban Core 85 in use",
      },
      { id: 12, url: c05Phone, alt: "Urban Core 85 charging phone" },
      {
        id: 13,
        url: c05Flat,
        alt: "Urban Core 85 details uses in plain",
      },
    ],
    category: "tech",
    reviews: [
      {
        name: "Jessica B.",
        starCount: 5,
        date: "Nov 25, 2025",
      },
    ],
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-06",
    name: "SteadyCharge S1",
    price: Math.floor(Math.random() * (max - min + 1) + min) - 0.01,
    mainImage: c06Base,
    carouselImages: [
      { id: 14, url: c06Base },
      { id: 15, url: c06Custom },
      { id: 16, url: c06Specs },
    ],
    category: "tech",
    reviews: [
      {
        name: "Mark Stevens",
        starCount: 4,
        date: "Nov 15, 2025",
      },
    ],
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-07",
    name: "Matte Shell 8.5",
    price: Math.floor(Math.random() * (max - min + 1) + min) - 0.01,
    mainImage: c07Main,
    carouselImages: [
      { id: 17, url: c07Main },
      { id: 18, url: c07Flat },
    ],
    category: "tech",
    reviews: [
      {
        name: "Ryan G.",
        starCount: 4,
        date: "Oct 20, 2025",
      },
    ],
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-08",
    name: "Crystal PD Ghost",
    price: Math.floor(Math.random() * (max - min + 1) + min) - 0.01,
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
    category: "tech",
    reviews: [
      {
        name: "David K.",
        starCount: 5,
        date: "Dec 15, 2025",
      },
    ],
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-09",
    name: "Armor Block X",
    price: Math.floor(Math.random() * (max - min + 1) + min) - 0.01,
    mainImage: c09Flat,
    carouselImages: [
      { id: 26, url: c09Flat },
      { id: 27, url: c09Iso },
    ],
    category: "tech",
    reviews: [
      {
        name: "Alice Cooper",
        starCount: 5,
        date: "Oct 05, 2025",
      },
    ],
  },
];

export default products;
