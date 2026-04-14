const Scroll = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden text-[18px]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll text-red-900">
        <li>
          <p>food</p>
        </li>
        <li>
          <p>movies</p>
        </li>
        <li>
          <p>music</p>
        </li>
        <li>
          <p>events</p>
        </li>
        <li>
          <p>fashion</p>
        </li>
      </ul>
    </div>
  );
};

export default Scroll;
