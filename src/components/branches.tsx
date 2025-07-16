import Value from "./value"

export default function Branches() {
    return ( 
        <div className="values">
            <Value
                image={'/assets/locations/desktop/toronto_flatline.svg'}
                title={'canada'}
                buttonText={'see location'}
            />
             <Value
                image={'/assets/locations/desktop/sydney__flatline.svg'}
                title={'australia'}
                buttonText={'see location'}
            />
             <Value
                image={'/assets/locations/desktop/london_flatline.svg'}
                title={'united kingdom'}
                buttonText={'see location'}
            />
        </div>
    )
}