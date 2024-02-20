import CustomButton from "../CustomButton/CustomButton";

const MenuItem = () => {
  return (
    <div className="flex gap-3 flex-col w-72">
      <div className="flex gap-3 my-3">
        <p>icon</p>
        <h2 className="font-semibold">Home</h2>
      </div>
      <div className="flex gap-3 my-3">
        <p>icon</p>
        <h2 className="font-semibold">Notification</h2>
      </div>
      <div className="flex gap-3 my-3">
        <p>icon</p>
        <h2 className="font-semibold">Explore</h2>
      </div>
      <div className="flex gap-3 my-3">
        <p>icon</p>
        <h2 className="font-semibold">Message</h2>
      </div>
      <div className="flex gap-3 my-3">
        <p>icon</p>
        <h2 className="font-semibold">Bookmark</h2>
      </div>
      <div className="flex gap-3 my-3">
        <p>icon</p>
        <h2 className="font-semibold">List</h2>
      </div>
      <CustomButton />
    </div>
  );
};

export default MenuItem;
