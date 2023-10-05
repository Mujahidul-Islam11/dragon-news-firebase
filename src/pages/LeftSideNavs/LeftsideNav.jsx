import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftsideNav = () => {
    const [categories, setCatogery] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatogery(data))
    },[])
    return (
        <div className="border rounded-lg">
            <h3 className="text-2xl text-center font-semibold mb-4">All Categories</h3>
            <div className="mb-6">
                {
                    categories.map(category => <Link key={category.id} to={`/category/${category.id}`} className="block ml-10 mb-4 hover:bg-gray-200 p-2">{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftsideNav;