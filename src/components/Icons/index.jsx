import PropTypes from "prop-types";

import ShieldCheckIcon from "./IconsSvg/ShieldCheck.svg";
import TruckIcon from "./IconsSvg/Truck.svg";
import CreditCard from "./IconsSvg/CreditCard.svg";
import Group35 from "./IconsSvg/Group35.svg";
import MagnifyingGlass from "./IconsSvg/MagnifyingGlass.svg";
import Group from "./IconsSvg/Group.svg";

import Heart from "./IconsSvg/Heart.svg";
import UserCircle from "./IconsSvg/UserCircle.svg";
import ShoppingCart from "./IconsSvg/ShoppingCart.svg";
import CrownSimple from "./IconsSvg/CrownSimple.svg";

import CuidadosDeSaude from "./IconsSvg/cuidadosDeSaude.svg";
import Supermercados from "./IconsSvg/supermercados.svg";

import Whiskey from "./IconsSvg/whiskey.svg";

import Ferramentas from "./IconsSvg/ferramentas.svg";

import Estera from "./IconsSvg/estera.svg";

import Moda from "./IconsSvg/moda.svg";

import MonitorarTabletSmartphone from "./IconsSvg/monitorarTabletSmartphone.svg";

import SmartphoneImage from "./IconsSvg/smartphoneImage.svg";

export const Icons = ({ svg }) => {
  return (
    <div>
      {svg === "shieldCheck" && (
        <img src={ShieldCheckIcon} alt="Shield Check" />
      )}

      {svg === "truck" && <img src={TruckIcon} alt="Truck" />}

      {svg === "creditCard" && <img src={CreditCard} alt="CreditCard" />}

      {svg === "group35" && <img src={Group35} alt="Group35" />}

      {svg === "magnifyingGlass" && (
        <img src={MagnifyingGlass} alt="MagnifyingGlass" />
      )}

      {svg === "group" && <img src={Group} alt="Group" />}

      {svg === "heart" && <img src={Heart} alt="Heart" />}

      {svg === "userCircle" && <img src={UserCircle} alt="UserCircle" />}

      {svg === "shoppingCart" && <img src={ShoppingCart} alt="ShoppingCart" />}

      {svg === "crownSimple" && <img src={CrownSimple} alt="CrownSimple" />}

      {svg === "cuidadosDeSaude" && (
        <img src={CuidadosDeSaude} alt="CuidadosDeSaude" />
      )}

      {svg === "supermercados" && (
        <img src={Supermercados} alt="Supermercados" />
      )}

      {svg === "whiskey" && <img src={Whiskey} alt="Whiskey" />}

      {svg === "ferramentas" && <img src={Ferramentas} alt="Ferramentas" />}

      {svg === "estera" && <img src={Estera} alt="Estera" />}

      {svg === "moda" && <img src={Moda} alt="Moda" />}

      {svg === "monitorarTabletSmartphone" && (
        <img src={MonitorarTabletSmartphone} alt="MonitorarTabletSmartphone" />
      )}

      {svg === "smartphoneImage" && (
        <img src={SmartphoneImage} alt="SmartphoneImage" />
      )}
    </div>
  );
};

Icons.propTypes = {
  svg: PropTypes.oneOf([
    "shieldCheck",
    "truck, creditCard, group35, magnifyingGlass",
    "group",
    "heart",
    "userCircle",
    "shoppingCart",
    "crownSimple",
    "cuidadosDeSaude",
    "supermercados",
    "whiskey",
    "ferramentas",
    "estera",
    "moda",
    "monitorarTabletSmartphone",
    "smartphoneImage",
  ]).isRequired,
};
