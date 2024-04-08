import { Register } from "../Sign in-out/Register";
import { SignIn } from "../Sign in-out/Signin";
import "./dropdown.css";
const MenuBox = ({ isOpen, toggleLogin, handleClick, toggleRegister }) => {
  return (
    <>
      <dialog id="my_modal_4" className="modal">

          <SignIn />
  
      </dialog>
      <dialog id="register_modal" className="modal">

          <Register />
  
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
              log in
            </button>
          </li>
          <div className="hr"></div>
          <li>
            <button className="postHouse" onClick={handleClick}>
              post your house
            </button>
          </li>
          <li>
            <button onClick={handleClick}>wishlists</button>
          </li>
          <li>
            <button onClick={handleClick}>help</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBox;
