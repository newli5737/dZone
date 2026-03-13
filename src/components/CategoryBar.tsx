import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string | null;
}

export default function CategoryBar({ categories, activeSlug }: { categories: Category[]; activeSlug?: string }) {
  return (
    <div className="category-bar">
      <div className="category-bar-inner">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/danh-muc/${cat.slug}`}
            className={`category-item ${activeSlug === cat.slug ? 'active' : ''}`}
          >
            <span className="category-item-icon">{cat.icon}</span>
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
