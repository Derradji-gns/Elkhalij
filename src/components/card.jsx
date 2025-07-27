function Card({title, des, img}) {
    return(
        
<div class="max-w-2xl mx-auto">
    
    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-green-700  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <a href="#">
            <img class="rounded-t-lg" src={img} alt=""/>
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{title}</h5>
            </a>
            <p class="font-normal text-gray-700 mb-3 dark:text-gray-100">{des}</p>
            <a href="#" class="text-green-700 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-white dark:hover:bg-white dark:focus:ring-blue-800">
                Read more
                <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>

    
</div>

    );
}

export default Card;