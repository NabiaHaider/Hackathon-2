import Image from "next/image";
import Hero from "./components/hero";
import Heroone from "./components/Heroone";
 import TopPicks from "./components/TopPicks";
 import NewArrivals from "./components/NewArrivals";
 import Belog from "./components/Belog";
import Instagram from "./components/Instagram";
 import Footer from "./components/Footer";
 import AsgaardSofa from "./shop/asgaardsofa/page";
 import CartPage from "./shop/asgaardsofa/cartside/page";
 import AccountPage from "./account/page";
 import CheckOut from "./checkout/page";
 import Cart from "./cart/page";
 import Belogpage from "./belog/page";

export default function Home() {
  return (
   <div>
    <Hero />
    <Heroone />
    <TopPicks />
    <NewArrivals />
   <Belog />
    <Instagram />
    <Footer />
    <AsgaardSofa />
    <CartPage />
    <AccountPage />
    <CheckOut />
    <Cart />
    <Belogpage />
   </div>
  );
}
