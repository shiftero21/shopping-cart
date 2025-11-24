import uniqid from "uniqid";

import carg01 from "../../assets/images/cargador-portatil-01.jpg";
import carg02 from "../../assets/images/cargador-portatil-02.jpg";
import carg03 from "../../assets/images/cargador-portatil-03.jpg";
import carg04 from "../../assets/images/cargador-portatil-04.jpg";

const min = 4.99;
const max = 24.99;

const products = [
  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-01",
    name: "Cargador portatil 01",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    src: carg01,
    description: "Cargador Portatil 10000 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },
  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-02",
    name: "Cargador portatil 02",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    src: carg02,
    description: "Cargador Portatil 20000 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },
  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-03",
    name: "Cargador portatil 03",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    src: carg03,
    description: "Cargador Portatil 4000 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },

  {
    id: uniqid("prod-"),
    slug: "cargador-portatil-04",
    name: "Cargador portatil 04",
    price: Number((Math.random() * (max - min) + min).toFixed(2)),
    src: carg04,
    description: "Cargador Portatil 8500 Mah Con Cable Mixio Mp-10",
    category: "tech",
  },
];

export default products;
