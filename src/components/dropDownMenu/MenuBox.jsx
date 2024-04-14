import { Register } from "../Auth/Register";
import { SignIn } from "../Auth/Signin";
import { UnderConstruction } from "../wishlist";
import "./dropdown.css";
const MenuBox = ({ isOpen, toggleLogin, handleClick, toggleRegister }) => {
  return (
    <>
      <dialog id="my_modal_4" className="modal ">

          <SignIn  />
  
      </dialog>
      <dialog id="register_modal" className="modal">

          <Register />
  
      </dialog>
      <dialog id="my_modal_5" className="modal">

          <UnderConstruction />
  
      </dialog>

      <div className="pages mr-[135px] sm:mr-32  md:mr-6 md:mt-5" style={{ display: isOpen ? "flex" : "none" }}>
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
                handleClick();
              }}>
              Post your house
            </button>
          </li> */}
          {/* <li>
            <button onClick={() => {
                document.getElementById("my_modal_5").showModal();
                handleClick();
              }}>Wishlists</button>
          </li> */}
          <li>
            <button onClick={() => {
                document.getElementById("my_modal_5").showModal();
                handleClick();
              }}>Help</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBox;
