import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
      <div>
        {/* Top-Header */}
        <div className="top-header">
        <header className="header">
           <div className="mail-sec"><i className="fa-regular fa-envelope"></i>mhhasanul@gmail.com</div>
           <div className="nav-contact"><i className="fa-solid fa-phone-volume"></i>(12345)67890</div>
           <div>
            <select className="select-opt">
              <option className="nav-opt">English</option>
              <option className="nav-opt">Spanish</option>
              <option className="nav-opt">British</option>
            </select>
           </div>
           <div>
            <select className="select-opt">
              <option className="nav-opt">USD</option>
              <option className="nav-opt">PKR</option>
              <option className="nav-opt">SR</option>
            </select>
           </div>
           <div className="child-">Login<i className="fa-regular fa-user"></i></div>
           <div className="wishlist-opt">Wishlist<i className="fa-regular fa-heart"></i></div>
           <i className="fa-solid fa-cart-shopping cart"></i>
        </header>
        </div>
    
    {/* nav-bar */}
        <div className="nav-bar">
        <h1 className="nav-h1">Hekto</h1>
        <ul className="nav-list">
          <Link href={"/home"}>
          <li className="home">Home</li>
          </Link>
          <Link href={"/pages"}>
          <li>Pages</li>
          </Link>
          <Link href={"/products"}>
          <li>Products</li>
          </Link>
          <Link href={"/blogs"}>
          <li>Blogs</li>
          </Link>
          <Link href={"/shop"}>
          <li>Shop</li>
          </Link>
          <Link href={"/contact"}>
          <li>Contact</li>
          </Link>
        </ul>
        <input placeholder="" className="nav-input" />
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
 </div>
    )
}