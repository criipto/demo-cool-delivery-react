import classNames from "classnames";


export default function Navbar() {
  const categories = ['Pharmacy', 'Beer', 'Wine', 'Alcohol', 'Tobacco'];
  const selectedCategory = 'Beer';
  return (
    <div className="bg-primary-25 pt-3 pb-2">
      <ul className="flex flex-row pt-3 pb-2 gap-1 pl-2 lg:justify-around">
        {categories.map((category) => (
          <li
            key={category}
            className={classNames('p-2 font-medium', {
              'text-primary-600 border-b-4 border-primary-600 pb-2': category === selectedCategory
            })}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
