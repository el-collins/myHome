import { useEffect, useState } from "react";
import { useUser } from "../Provider/UserContext";

import Profile from "./Profile";

const UserProfile = () => {
  // const router = useRouter();
  // const { data: session } = useSession();
  const { currentUser } = useUser();

  const [myProperties, setMyProperties] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch(`/api/users/${session?.user.id}/posts`);
  //     const data = await response.json();

  //     setMyProperties(data);
  //   };

  //   if (session?.user.id) fetchPosts();
  // }, [session?.user.id]);

  // const handleEdit = (post) => {
  //   router.push(`/update-prompt?id=${post._id}`);
  // };

  // const handleDelete = async (post) => {
  //   const hasConfirmed = confirm(
  //     "Are you sure you want to delete this prompt?"
  //   );

  //   if (hasConfirmed) {
  //     try {
  //       await fetch(`/api/prompt/${post._id.toString()}`, {
  //         method: "DELETE",
  //       });
  //       const filteredPosts = myProperties.filter((item) => item._id !== post._id);

  //       setMyProperties(filteredPosts);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      // data={myProperties}
      // handleEdit={handleEdit}
      // handleDelete={handleDelete}
    />
  );
};

export default UserProfile;
