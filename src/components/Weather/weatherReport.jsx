const Report = (props) => {
    return (
        <section className="flex-grow basis-10 bg-[#ef233c] p-5 rounded-md flex justify-start md:justify-center items-center mt-5 md:mt-0">
            <div>
                <h1 className="text-xl font-medium">Weather: <span className="font-bold">{props.weather}</span></h1>
                <p className="font-medium mt-1">Temperature: <span className="font-bold">{props.temp}</span></p>
                <p className="font-medium mt-1">Description: <span className="font-bold">{props.desc}</span></p>
            </div>
        </section>
    );
}

export default Report;
