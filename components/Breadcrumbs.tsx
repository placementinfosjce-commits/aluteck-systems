import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-textgrey">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-gold transition-colors text-lightgrey"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-textgrey/60 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="text-gold font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-gold transition-colors truncate max-w-[150px] sm:max-w-none text-lightgrey"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
