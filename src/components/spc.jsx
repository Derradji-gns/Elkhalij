import Card from "./card";
import spc1 from '/public/ghraphics/spc1.avif'
import spc2 from '/public/ghraphics/cyber.jpg'
import spc3 from '/public/ghraphics/spc3.jpg'
import spc4 from '/public/ghraphics/spc4.jpg'

function Spc() {
    return(
        <div className="w-full h-auto mt-20 bg-gray-200">
            <h1 className="text-center text-green-700 font-bold text-4xl"> Our Specializations</h1>
            <div className="grid grid-col gap-7 md:grid-cols-2 mt-20">
             <Card title={"Web Developement"} des={"Do you want to be a web developer ? , be able to build websites, plateforms and enter to Web business"} img={spc1}/>
             <Card title={"Cyber Securety"} des={"Cybersecurity is the protection of systems, networks, and data from digital attacks. It helps prevent unauthorized access, data breaches, and cyber threats. With growing online risks, strong cybersecurity ensures privacy, safety."} img={spc2}/>  
             <Card title={"Telecommunications"} des={"Telecom, short for telecommunications, refers to the exchange of information over long distances using electronic systems. It includes services like phone calls, internet, radio, and television."} img={spc3}/>
             <Card title={"Operating System"} des={"An Operating System (OS) is the software that manages computer hardware and allows other programs to run. It handles tasks like memory management, file storage, and user interfaces."} img={spc4}/>      
            </div>
            

        </div>

    );
}

export default Spc;