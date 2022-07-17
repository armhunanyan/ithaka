import { ICategory } from "../../interfaces/category";

const Category:React.FC<{category: ICategory}> = ({category}) => {
    return (
        <div>
            <div className="aspect-w-16 aspect-h-10 grayscale hover:grayscale-0 transition-all duration-1000 ease-out">
                <img className="object-cover object-center" src={category.image}/>
            </div>
            <div>
                <p className="text-base md:text-lg text-center font-medium mt-20 mb-15">{category.title}</p>
                <div className="w-3/5 h-[1px] bg-black/50 mx-auto"></div>
            </div>
        </div>
    )
}

export default Category;