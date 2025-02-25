function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

export default function Listing({ unit }) {
    // Replace Placeholder ID
    return (
        <a href="/listings/unit._id" className="shadow-xl border-[1px] border-neutral-300 rounded-xl bg-neutral-100 cursor-pointer  hover:-translate-y-2 transition">
            <div className="h-52 bg-[url(https://images.unsplash.com/photo-1464146072230-91cabc968266)] bg-cover bg-center rounded-t-xl" />
            <div className="p-2">
                <h3 className='text-xl font-bold'>{unit.type === 'sale' ? formatPrice(unit.price) : `${formatPrice(unit.price)}/month`}</h3>
                <div className="flex gap-2">
                  <p><span className='font-semibold'>{unit.beds}</span> bds</p>
                  <span className='text-neutral-400'>|</span>
                  <p><span className='font-semibold'>{unit.baths}</span> ba</p>
                  <span className='text-neutral-400'>|</span>
                  <p><span className='font-semibold'>{unit.sqft}</span> sqft</p>
                  <span className='text-neutral-400'>|</span>
                  <p>{unit.status}</p>
                </div>
                <p>{unit.address}</p>
            </div>
        </a>
    )
}