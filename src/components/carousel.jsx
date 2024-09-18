import React, { useState } from 'react';
import { items } from '../data/items';
import classNames from 'classnames';

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(3);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-[1200px] max-w-full">
        <ul className="flex h-[420px] gap-2">
          {items.map((item, index) => (
            <li
              key={item.name}
              aria-current={activeItem === index}
              onClick={() => setActiveItem(index)}
              className={classNames(
                "cursor-pointer overflow-hidden hover:w-[12%] rounded-2xl bg-[#c9c6c7] transi transition-all duration-300",
                {
                  "w-[48%] hover:w-[48%]": activeItem === index,
                  "w-[8%]": activeItem !== index,
                  "first:w-[1%] last:w-[1%]": index === 0 || index === items.length - 1
                }
              )}
            >
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
