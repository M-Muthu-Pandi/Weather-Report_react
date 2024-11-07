const Input = (props) => {
    return (
        <section className="flex-grow basis-10 bg-[#495296] p-5 rounded-md flex justify-start md:justify-center items-center">
            <div>
                <h1 className="text-3xl inline-block font-bold mb-3 border-b-white border-b-4">Weather Report</h1>
                <p className="font-medium">I can give you a weather report about your city !</p>
                <input value={props.city} onChange={props.handleCity} type="text" className="text-blue-950 font-medium mt-3 border border-black rounded-md p-1 outline-none" placeholder="Enter your city here" />
                <br />
                <button onClick={props.getWeather} className="mt-3 bg-black text-white px-2 py-1.5 rounded-md">Get Report</button>
            </div>
        </section>
    );
}

export default Input;
