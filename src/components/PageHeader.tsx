import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  name?: string;
  label?: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  // Filter out redundant 'Home' entry if provided in props
  const filteredCrumbs = breadcrumbs.filter(
    (c) => (c.name || c.label || '').toLowerCase() !== 'home'
  );

  return (
    <section className="page-header-banner">
      <div className="container">
        <div className="page-header-content">
          <h1>{title}</h1>
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link to="/">Home</Link>
            {filteredCrumbs.map((crumb, idx) => {
              const text = crumb.name || crumb.label || '';
              return (
                <React.Fragment key={idx}>
                  <span>/</span>
                  {crumb.path ? (
                    <Link to={crumb.path}>{text}</Link>
                  ) : (
                    <span>{text}</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
};
