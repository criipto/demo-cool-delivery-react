export default function Navbar() {
  const categories = ['Pharmacy', 'Beer', 'Wine', 'Alcohol', 'Tobacco'];
  const selectedCategory = 'Beer';
  return (
    <div className="bg-primary-25 pt-3 pb-2">
      <ul className="flex flex-row pt-3 pb-2 gap-1 pl-2 lg:place-content-around">
        {categories.map((category) => (
          <li
            key={category}
            className={`p-2 font-medium ${category === selectedCategory ? 'selected-category' : ''}`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
