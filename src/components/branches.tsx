import Value from "./value"

export default function Branches() {
    return ( 
        <div className="values">
            <Value
                image={'/assets/locations/desktop/toronto_flatline.svg'}
                title={'canada'}
                description={''}
                buttonText={'see location'}
            />
             <Value
                image={'/assets/locations/desktop/sydney__flatline.svg'}
                title={'australia'}
                description={''}
                buttonText={'see location'}
            />
             <Value
                image={'/assets/locations/desktop/london_flatline.svg'}
                title={'united kingdom'}
                description={''}
                buttonText={'see location'}
            />
        </div>
    )
}