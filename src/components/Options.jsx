const States = [
    {
        State : 'Alabama'
    },
    {
        State : 'Alaska'
    },
    {
        State : 'Arizona'
    },
    {
        State : 'Arkansas'
    },
    {
        State : 'California'
    },
    {
        State : 'Colorado'
    },
    {
        State : 'Connecticut'
    },
    {
        State : 'Delaware'
    },
    {
        State : 'Florida'
    },
    {
        State : 'Georgia'
    },
    {
        State : ' Hawaii'
    },
    {
        State : 'Idaho'
    },
    {
        State : 'Illinois'
    },
    {
        State : 'Indiana'
    },
    {
        State : 'Iowa'
    },
    {
        State : 'Kansas'
    },
    {
        State : 'Kentucky'
    },
    {
        State : 'Louisiana'
    },
    {
        State : 'Maine'
    },
    {
        State : 'Maryland'
    },
    {
        State : 'Massachusetts'
    },
    {
        State : 'Michigan'
    },
    {
        State : 'Minnesota'
    },
    {
        State : 'Mississippi'
    },
    {
        State : 'Missouri'
    },
    {
        State : 'Montana'
    },
    {
        State : 'Nebraska'
    },
    {
        State : 'Nevada'
    },
    {
        State : 'New Hampshire'
    },
    {
        State : 'New Jersey'
    },
    {
        State : 'New Mexico'
    },
    {
        State : 'New York'
    },
    {
        State : 'North Carolina'
    },
    {
        State : 'North Dekota'
    },
    {
        State : 'Ohio'
    },
    {
        State : 'Oklahoma'
    },
    {
        State : 'Oregon'
    },
    {
        State : 'Pennsylvania'
    },
    {
        State : 'Rhode Island'
    },
    {
        State : 'South Carolina'
    },
    {
        State : 'South Dekota'
    },
    {
        State : 'Tennessee'
    },
    {
        State : 'Texas'
    },
    {
        State : 'Utah'
    },
    {
        State : 'Vermont'
    },
    {
        State : 'Virginia'
    },
    {
        State : 'Washington'
    },
    {
        State : 'West Virginia'
    },
    {
        State : 'Wisconsin'
    },
    {
        State : 'Wyoming'
    },
]


export default function Options() {

    return(
        <select className='py-2 h-5 overflow-y-auto w-[8rem] md:w-[10rem] my-4'>
            {States.map((state, index) => {
                return <option key={index}>{state.State}</option>
            })}
        </select>
    )
}