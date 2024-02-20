import MenuItem from "../Components/MenuItem/MenuItem";
import Post from "../Components/Post/Post.jsx";
import Trending from "../Components/Trending/Trending";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <div>
          <MenuItem />
        </div>
        <div>
          <Post />
        </div>
        <div>
          <Trending />
        </div>
      </div>
    </div>
  );
}
