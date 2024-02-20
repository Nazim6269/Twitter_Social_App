import Reactions from "../Reactions/Reactions";
import User from "../User/User";

const Post = () => {
  return (
    <div className=" px-4 py-3 border border-gray-700 w-11/12">
      <User />
      {/* text container */}
      <div className="my-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          consequatur consequuntur minus earum laboriosam necessitatibus! Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          consequatur consequuntur minus earum laboriosam necessitatibus! Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          consequatur consequuntur minus earum laboriosam necessitatibus!
        </p>
      </div>
      {/* image container */}
      <div class="h-80 w-auto">
        <img
          src="/fashion.PNG"
          alt=""
          class="h-full w-full object-cover rounded-lg"
        />
      </div>
      {/* reaction container */}
      <Reactions />
    </div>
  );
};

export default Post;
