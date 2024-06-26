import classNames from 'classnames';

export default function Navbar() {
  const categories = ['Pharmacy', 'Beer', 'Wine', 'Alcohol', 'Tobacco'];
  const selectedCategory = 'Beer';
  return (
    <div className="bg-primary-25 pb-2 pt-3">
      <ul className="flex flex-row gap-1 pb-2 pl-2 pt-3 lg:justify-around">
        {categories.map((category) => (
          <li
            key={category}
            className={classNames('p-2 font-medium', {
              'border-b-4 border-primary-600 pb-2 text-primary-600':
                category === selectedCategory,
            })}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
