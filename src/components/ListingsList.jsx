import Listing from '@/components/Listings';

import { useEffect, useState } from 'react';

export default function ListingsList({ search, typeOfUnit, bedrooms, bathrooms }) {
    const [units, setUnits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const res = fetch('/api/units', { cache: 'no-store' })
        .then(res => res.json())
        .then(({ units }) => {
          setUnits(units);
          setLoading(false);
        });
    }, [])

    if (loading) return <p>Loading...</p>
    
    let filteredUnits = [];
    units.forEach(unit => {
      // Type of Unit
      if (typeOfUnit === "sale") {
        if (unit.type === "rent") return;
      }

      if (typeOfUnit === "rent") {
        if (unit.type === "sale") return;
      }

      // Bedrooms
      if (bedrooms === 1) {
        if (unit.beds < 1) return;
      }

      if (bedrooms === 2) {
        if (unit.beds < 2) return;
      }

      if (bedrooms === 3) {
        if (unit.beds < 3) return;
      }

      // Bathrooms
      if (bathrooms === 1) {
        if (unit.baths < 1) return;
      }

      if (bathrooms === 2) {
        if (unit.baths < 2) return;
      }

      if (bathrooms === 3) {
        if (unit.baths < 3) return;
      }

      // Search
      if (!unit.address.includes(search)) return;

      filteredUnits.push(unit);
    });

    if (!units) return <p>No units to display.</p>

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 gap-8">

            {filteredUnits.map((unit, index) => (
              <Listing key={index} unit={unit} />
            ))}

          </div>
    )
}