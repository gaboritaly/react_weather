import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  ulClass?: string;
  liClass?: string;
}
/**
 * Generic List component 
 *
 * @component
 * @param { T[]} items - Items array
 * @param {(item: T) => ReactNode} renderItem - Item that need be rendered in list item
 * @param {string} ulClass - Custom css class for 'ul', default value is ""
 * @param {string} liClass - Custom css class for 'il', default value is ""
 * @returns {JSX.Element} The rendered List component.
 *
 * @example
 * <List
    items={[item1,item2]}
    renderItem={(city: Item) => city.name}
  />;
 */
const List = <T extends {}>({
  items,
  renderItem,
  ulClass = "",
  liClass = "",
}: ListProps<T>) => {
  return (
    <ul className={ulClass}>
      {items.map((item, i) => (
        <li key={i} className={liClass}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;
