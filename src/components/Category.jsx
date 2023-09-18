"use client";

import Link from "next/link";
import Label from "./Label";

const CategoryLabel = ({ categories, nomargin = false }) => {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link href={`/category/${category.slug.current}`} key={index}>
            <Label nomargin={nomargin} color={category.color}>
              {category.title}
            </Label>
          </Link>
        ))}
    </div>
  );
};

export default CategoryLabel;
