import Button from "../components/Button";
import { heart } from "../assets/icons";

const ViewProductSection = ({
    name,
    imgURL,
    price
}) => {
  return (
    <section>
        <div className="flex justify-between items-center max-2xl:flex-col gap-10 w-full max-container">
            <img 
                src={imgURL}
                alt="shoes" 
                className="w-[50%] max-xl:w-[50%]"
            />
            <div className="flex flex-col w-[30%] items-center gap-4 max-xl:w-[50%]">
                <h3 className="text-2xl">{name}</h3>
                <h2 className="text-3xl font-bold text-coral-red font-montserrat">{price}</h2>
                <p className="font-montserrat text-slate-gray text-justify info-text text-1xl max-sm:text-xs">There's a reason why MJ's fifth sneaker remains a fan favorite. Its fierce details on the zig-zag midsole, iconic lace locks, and mesh-inspired shoe cage are instantly recognizable, providing a striking style that you can rock any day of the week.</p>
                <Button
                    label="Order Now"
                    backgroundColor="bg-coral-red"
                    backgroundColorHover="bg-coral-red-hover"
                    textColor="text-white"
                    fullWidth
                />
                <Button
                    label="Favorite"
                    backgroundColor="bg-white"
                    textColor="text-slate-gray"
                    borderColor="border-slate-gray"
                    borderColorHover="border-black"
                    fullWidth
                />
            </div>
        </div>
    </section>
  )
}

export default ViewProductSection