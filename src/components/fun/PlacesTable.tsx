'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';

type SubLocation = { name: string; status: string };

type Country = {
  flag: string;
  name: string;
  continent: string;
  date: string;
  status: string;
  expandable?: boolean;
  subLocations?: SubLocation[];
};

const countries: Country[] = [
  { flag: '🇳🇱', name: 'Netherlands', continent: 'Northwestern Europe', date: 'December 2002', status: 'Lived In' },
  { flag: '🇨🇳', name: 'China', continent: 'East Asia', date: 'August 2003', status: 'Lived In' },
  { flag: '🇲🇻', name: 'Maldives', continent: 'South Asia', date: 'December 2005', status: 'Visited' },
  { flag: '🇫🇷', name: 'France', continent: 'Western Europe', date: 'September 2006', status: 'Visited' },
  { flag: '🇲🇨', name: 'Monaco', continent: 'Western Europe', date: 'September 2006', status: 'Visited' },
  { flag: '🇹🇭', name: 'Thailand', continent: 'Southeast Asia', date: 'March 2007', status: 'Visited' },
  { flag: '🇻🇳', name: 'Vietnam', continent: 'Southeast Asia', date: 'June 2008', status: 'Visited' },
  { flag: '🇵🇭', name: 'Philippines', continent: 'Southeast Asia', date: 'March 2008', status: 'Visited' },
  { flag: '🇲🇾', name: 'Malaysia', continent: 'Southeast Asia', date: 'February 2009', status: 'Visited' },
  { flag: '🇬🇷', name: 'Greece', continent: 'Southeast Europe', date: 'January 2010', status: 'Visited' },
  {
    flag: '🇨🇦',
    name: 'Canada',
    continent: 'North America',
    date: 'August 2010',
    status: 'Lived In',
    expandable: true,
    subLocations: [
      { name: 'Alberta', status: 'Visited' },
      { name: 'British Columbia', status: 'Visited' },
      { name: 'New Brunswick', status: 'Visited' },
      { name: 'Northwest Territories', status: 'Visited' },
      { name: 'Nova Scotia', status: 'Visited' },
      { name: 'Ontario', status: 'Lived In' },
      { name: 'Prince Edward Island', status: 'Visited' },
      { name: 'Québec', status: 'Visited' },
    ],
  },
  {
    flag: '🇺🇸',
    name: 'United States',
    continent: 'North America',
    date: 'December 2013',
    status: 'Lived In',
    expandable: true,
    subLocations: [
      { name: 'Arizona', status: 'Visited' },
      { name: 'California', status: 'Lived In' },
      { name: 'Florida', status: 'Visited' },
      { name: 'Illinois', status: 'Visited' },
      { name: 'Massachusetts', status: 'Visited' },
      { name: 'Michigan', status: 'Visited' },
      { name: 'Nevada', status: 'Visited' },
      { name: 'New York', status: 'Visited' },
      { name: 'Utah', status: 'Visited' },
      { name: 'Washington', status: 'Visited' },
      { name: 'Washington, D.C. (Federal District)', status: 'Visited' },
    ],
  },
  { flag: '🇦🇼', name: 'Aruba', continent: 'North/South America', date: 'December 2014', status: 'Visited' },
  { flag: '🇲🇽', name: 'Mexico', continent: 'North America', date: 'December 2016', status: 'Visited' },
  { flag: '🇵🇦', name: 'Panama', continent: 'North America', date: 'December 2017', status: 'Visited' },
  { flag: '🇨🇷', name: 'Costa Rica', continent: 'North America', date: 'March 2018', status: 'Visited' },
  { flag: '🇵🇷', name: 'Puerto Rico', continent: 'North America', date: 'December 2018', status: 'Visited' },
  { flag: '🇨🇺', name: 'Cuba', continent: 'North America', date: 'December 2022', status: 'Visited' },
  { flag: '🇨🇼', name: 'Curaçao', continent: 'North/South America', date: 'December 2023', status: 'Visited' },
  { flag: '🇧🇶', name: 'Bonaire', continent: 'North/South America', date: 'December 2023', status: 'Visited' },
  { flag: '🇸🇽', name: 'Sint Maarten', continent: 'North America', date: 'December 2024', status: 'Visited' },
  { flag: '🇦🇮', name: 'Anguilla', continent: 'North America', date: 'December 2024', status: 'Visited' },
  { flag: '🇦🇹', name: 'Austria', continent: 'Central Europe', date: 'September 2025', status: 'Visited' },
  { flag: '🇨🇿', name: 'Czech Republic', continent: 'Central Europe', date: 'September 2025', status: 'Visited' },
  { flag: '🇰🇷', name: 'South Korea', continent: 'East Asia', date: 'Summer 2026', status: 'Next Up' },
];

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        'micro-label inline-block whitespace-nowrap border px-2 py-1',
        status === 'Lived In' && 'border-ember-500 bg-ember-500 text-white',
        status === 'Visited' && 'border-ember-300 text-ember-700',
        status === 'Next Up' && 'border-bone-line text-ink-muted',
      )}
    >
      {status}
    </span>
  );
}

function SubLocationList({ title, items }: { title: string; items: SubLocation[] }) {
  return (
    <div>
      <p className="micro-label text-ink-muted">{title}</p>
      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 md:grid-cols-4">
        {items.map((item, index) => (
          <div key={item.name} className="flex items-baseline gap-2">
            <span className="micro-label min-w-[1.25rem] text-ink-muted">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-sm text-ink-soft">
              {item.name}
              {item.status === 'Lived In' && (
                <span className="micro-label ml-2 text-ember-600">Lived In</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const PlacesTable = () => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleExpanded = (countryName: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(countryName)) {
      newExpanded.delete(countryName);
    } else {
      newExpanded.add(countryName);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <div>
      <BlurFade inView>
        <div className="flex items-end justify-between">
          <div>
            <p className="micro-label text-ember-600">Travel Logs</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-5xl">
              My Travel Journey
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
              A chronological record of my global adventures and experiences across continents.
            </p>
          </div>
          <p className="micro-label hidden text-ink-muted sm:block">
            ({String(countries.length).padStart(2, '0')})
          </p>
        </div>
      </BlurFade>

      <BlurFade inView delay={0.1}>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-ink/20">
                <th className="micro-label py-3 pr-4 font-medium text-ink-muted">
                  Country/Territory
                </th>
                <th className="micro-label hidden py-3 pr-4 font-medium text-ink-muted md:table-cell">
                  Continent
                </th>
                <th className="micro-label py-3 pr-4 font-medium text-ink-muted">Date</th>
                <th className="micro-label py-3 font-medium text-ink-muted">Status</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country) => {
                const isExpanded = expandedRows.has(country.name);
                return (
                  <React.Fragment key={country.name}>
                    <tr
                      className={cn(
                        'border-b border-bone-line transition-colors hover:bg-bone-subtle/70',
                        country.expandable && 'cursor-pointer',
                      )}
                      onClick={country.expandable ? () => toggleExpanded(country.name) : undefined}
                    >
                      <td className="py-3.5 pr-4 align-middle">
                        <span className="inline-flex items-center gap-2.5 font-serif text-base font-medium">
                          <span className="text-lg" aria-hidden>
                            {country.flag}
                          </span>
                          {country.name}
                          {country.expandable &&
                            (isExpanded ? (
                              <ChevronDown className="h-4 w-4 text-ink-muted" aria-hidden />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-ink-muted" aria-hidden />
                            ))}
                        </span>
                      </td>
                      <td className="hidden py-3.5 pr-4 align-middle text-sm text-ink-soft md:table-cell">
                        {country.continent}
                      </td>
                      <td className="py-3.5 pr-4 align-middle text-sm text-ink-soft">
                        {country.date}
                      </td>
                      <td className="py-3.5 align-middle">
                        <StatusBadge status={country.status} />
                      </td>
                    </tr>

                    {country.expandable && isExpanded && country.subLocations && (
                      <tr className="border-b border-bone-line">
                        <td colSpan={4} className="p-0">
                          <div className="border-l-2 border-ember-500 bg-bone-subtle/60 px-5 py-5">
                            <SubLocationList
                              title={
                                country.name === 'Canada'
                                  ? 'Canadian Provinces & Territories'
                                  : 'US States Visited'
                              }
                              items={country.subLocations}
                            />
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </BlurFade>
    </div>
  );
};
