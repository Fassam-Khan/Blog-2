import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { useState, useEffect } from 'react'
import Card2 from '../components/Card2'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';
import { doc } from 'firebase/firestore';
import Hero from '../components/Hero';


const Home = () => {
  const [Items, setItems] = useState([])
  const [Loading, setLoading] = useState(true)


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

  return (
    <div>
      <AdminHeader/>
        <Hero/>
        <div className='columns-1 sm:columns-2 lg:columns-3 gap-4 mt-6 px-4'>

          {Loading? (
            <p>Loading...</p>
          ):(
            Items?.map((e)=>{
             return  <Card2  key={e.title} data={e}/>
    
              })
          )}
         
        </div>
      
    </div>
  )
}

export default Home
