const Card = () => {
  return (
    <div className="h-screen w-full bg-zinc-200">
      <div className="w-52  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-zinc-100 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="py-4 px-3 w-full ">
          <h2 className="font-semibold">Amazon Basics</h2>
          <p className="text-xs mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            dolorem animi molestiae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
