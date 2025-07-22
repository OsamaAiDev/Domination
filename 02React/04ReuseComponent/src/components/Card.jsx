const Card = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "amazon",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,maiores?",
    },
    {
      img: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "samsung",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,maiores?",
    },
    {
      img: "https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,maiores?",
    },
  ];
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
      {data.map((product, index) => (
        <div
          className="w-62  bg-zinc-300 rounded-md overflow-hidden "
          key={index}
        >
          <div className="w-full bg-zinc-400">
            <img className="w-full object-cover" src={product.img} alt="" />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-bold mt-3">{product.name}</h2>
            <p className="text-xs mt-3">{product.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
