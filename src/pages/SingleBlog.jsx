import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';
import AdminHeader from '../components/AdminHeader';

const SingleBlog = (title) => {



    const [Items, setItems] = useState([])
    const [Loading, setLoading] = useState(true)
    const [filterPro, setfilterPro] = useState({})

    const location = useParams()





    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Blogs"));
                const blogs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setItems(blogs)

            } catch (error) {
                console.error("Error fetching documents: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        if (Items) {
            const filterId = Items.find((item) => item.slug == location.slug)
            console.log(filterId);
            setfilterPro(filterId)
        }

    }, [Items])
    return (
        <div>
            <AdminHeader />

            <div className='px-4 mt-4 flex flex-col gap-3' >
                {filterPro?.img_url && (
                    <div className='h-[250px] w-full' >
                        <img src={filterPro?.img_url || ""} alt="" className='h-full' />
                    </div>
                )}

                <div className='flex flex-col gap-2 flex-wrap'>
                    <h2 className='text-2xl font-bold '>{filterPro?.title}</h2>
                    <p className='text-md'>{filterPro?.description}</p>
                </div>

            </div>

        </div>
    )
}

export default SingleBlog
