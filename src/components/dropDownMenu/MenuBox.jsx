<<<<<<< HEAD
<<<<<<< HEAD
import { Navigate } from "react-router-dom";
import { Register } from "../Auth/Register";
=======
>>>>>>> 6c5f633 (created ui for wishlist and PostYourHouse)
=======
>>>>>>> 6c5f6338c51f5288588f36486051109d32326f0d
import { SignIn } from "../Auth/Signin";
import { Register } from "../Auth/Register";
import PostYourHouse from "../PostYourHouse";
import Wishlist from "../wishlist";
import "./dropdown.css";
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const MenuBox = ({ isOpen, toggleLogin, handleClick, toggleRegister }) => {
  const Usertoken = localStorage.getItem("token");
  const navigate = useNavigate();

  
  return (
    <>
      <dialog id="my_modal_4" className="modal ">
=======
=======
>>>>>>> 6c5f6338c51f5288588f36486051109d32326f0d

const MenuBox = ({ isOpen, handleClick }) => {
  return (
    <>
      <dialog id="my_modal_4" className="modal">
<<<<<<< HEAD
>>>>>>> 6c5f633 (created ui for wishlist and PostYourHouse)
=======
>>>>>>> 6c5f6338c51f5288588f36486051109d32326f0d
        <SignIn />
      </dialog>
      <dialog id="register_modal" className="modal">
        <Register />
      </dialog>
<<<<<<< HEAD
<<<<<<< HEAD
      <dialog id="my_modal_5" className="modal">
        <UnderConstruction />
      </dialog>

      {Usertoken ? (
       <div
       className="pages mr-[135px] sm:mr-32  md:mr-6 md:mt-5"
       style={{ display: isOpen ? "flex" : "none" }}
     >
       <ul>
         {/* <li>
           <button
             onClick={() => {
               document.getElementById("register_modal").showModal();

               handleClick();
             }}
           >
             Sign up
           </button>
         </li> */}
         <li>
           <button
             className="login"
             onClick={() => {
               document.getElementById("my_modal_4").showModal();
               localStorage.removeItem('token');
              navigate("/");
              toast("Logged Out!!");
             }}
           >
             Log Out
           </button>
         </li>
         <div className=" border-[1px] w-[100%] "></div>
         <li>
         <button className="postHouse" onClick={() => {
             document.getElementById("my_modal_5").showModal();
             handleClick();
           }}>
           Post your house
         </button>
       </li>
         <li>
         <button onClick={() => {
             document.getElementById("my_modal_5").showModal();
             handleClick();
           }}>Wishlists</button>
       </li>
         <li>
           <button
             onClick={() => {
               document.getElementById("my_modal_5").showModal();
               handleClick();
             }}
           >
             Help
           </button>
         </li>
       </ul>
     </div>
      ) : (
        <div
          className="pages mr-[135px] sm:mr-32  md:mr-6 md:mt-5"
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <ul>
            <li>
              <button
                onClick={() => {
                  document.getElementById("register_modal").showModal();

                  handleClick();
                }}
              >
                Sign up
              </button>
            </li>
            <li>
              <button
                className="login"
                onClick={() => {
                  document.getElementById("my_modal_4").showModal();
                  handleClick();
                }}
              >
                Log in
              </button>
            </li>
            <div className=" border-[1px] w-[100%] "></div>
            {/* <li>
            <button className="postHouse" onClick={() => {
                document.getElementById("my_modal_5").showModal();
=======
=======
>>>>>>> 6c5f6338c51f5288588f36486051109d32326f0d
      <dialog id="post_your_house_modal" className="modal">
        <PostYourHouse />
      </dialog>
      <dialog id="wishlist_modal" className="modal">
        <Wishlist />
      </dialog>

      <div className="pages" style={{ display: isOpen ? "flex" : "none" }}>
        <ul>
          <li>
            <button
              onClick={() => {
                document.getElementById("register_modal").showModal();
                handleClick();
              }}
            >
              Sign up
            </button>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                document.getElementById("my_modal_4").showModal();
                handleClick();
              }}
            >
              Log in
            </button>
          </li>
          <li>
            <button
              className="postHouse"
              onClick={() => {
                document.getElementById("post_your_house_modal").showModal();
<<<<<<< HEAD
>>>>>>> 6c5f633 (created ui for wishlist and PostYourHouse)
=======
>>>>>>> 6c5f6338c51f5288588f36486051109d32326f0d
                handleClick();
              }}
            >
              Post your house
            </button>
<<<<<<< HEAD
<<<<<<< HEAD
          </li> */}
            {/* <li>
            <button onClick={() => {
                document.getElementById("my_modal_5").showModal();
                handleClick();
              }}>Wishlists</button>
          </li> */}
            <li>
              <button
                onClick={() => {
                  document.getElementById("my_modal_5").showModal();
                  handleClick();
                }}
              >
                Help
              </button>
            </li>
          </ul>
        </div>
      )}
=======
          </li>
          <li>
            <button
              onClick={() => {
                document.getElementById("wishlist_modal").showModal();
                handleClick();
              }}
            >
              Wishlists
            </button>
          </li>
          <li>
=======
          </li>
          <li>
            <button
              onClick={() => {
                document.getElementById("wishlist_modal").showModal();
                handleClick();
              }}
            >
              Wishlists
            </button>
          </li>
          <li>
>>>>>>> 6c5f6338c51f5288588f36486051109d32326f0d
            <button onClick={handleClick}>Help</button>
          </li>
        </ul>
      </div>
>>>>>>> 6c5f633 (created ui for wishlist and PostYourHouse)
    </>
  );
};

export default MenuBox;
