import { SignIn } from "../Auth/Signin";
import { Register } from "../Auth/Register";
import PostYourHouse from "../PostYourHouse";
import Wishlist from "../wishlist";
import "./dropdown.css";

const MenuBox = ({ isOpen, handleClick }) => {
  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <SignIn />
      </dialog>
      <dialog id="register_modal" className="modal">
        <Register />
      </dialog>
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
                handleClick();
              }}
            >
              Post your house
            </button>
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
            <button onClick={handleClick}>Help</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBox;
