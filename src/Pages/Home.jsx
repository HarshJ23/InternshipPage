import React from 'react'
import Selectbtn from '../Components/Selectbtn';
import Search from '../Components/Search';
import Item from '../Components/Item';
import Main from '../Components/Main';
import { useEffect , useState}  from 'react';
import { doc,   orderBy ,  getDoc} from "firebase/firestore";
import {db} from '../firebase'
import { collection, query, where, getDocs ,   limit} from "firebase/firestore";


export default function Home() {

  const [listing , setListings] = useState(null);
  const [main , setMain] = useState(null);


  useEffect(()=>{
async function fetchListing(){
      const listingRef = collection(db , "listings");
      const q = query(listingRef, orderBy("timestamp" , "desc"));
      const querySnapshot = await getDocs(q);
      let listing =[];
      querySnapshot.forEach((doc)=>{
  
        return listing.push(
          {
            id: doc.id,
            data : doc.data(),
          }
        );
    
      });
      setListings(listing);
  // console.log(listing);
    }
  
    fetchListing();
  
  },[])
  
 


  const onClick = async (m_id) =>{
    console.log(m_id);
   
try {
        const docRef = doc(db, "listings", m_id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setMain(data);
          console.log(main.name , main.title);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
  };




  return (
//     <main className='grid grid-cols-2 gap-4 mx-2'>

// <aside className='my-3  border-red-400 border-2'>
//     <Selectbtn/>
// </aside>

// <div className='border-2 border-red-400 '>
// <Search />

// </div>

//     </main>
<main className='bg-slate-50'>

<div class="flex">
  <div class="h-screen top-0 sticky p-4 w-1/3 overflow-y-auto justify-center bg-slate-100 z-40 scrollbar-hide mx-1">
    {/* <!-- Note: add overflow-y-scroll if sidebar content is longer than page --> */}
    <div className='top-0 sticky bg-white shadow-xl py-2 z-30 rounded-lg'>
   <Selectbtn/>
  </div>

{listing && listing.length>0 && (

<ul>
  {listing.map((list) => (
    <Item
      key={list.id}
      id={list.id}
      listing={list.data}
      onClick={()=>onClick(list.id)}
    />
  ))}
</ul>
)}
  

  </div>
  
  <div class="flex-grow h-screen overflow-y-scroll p-4 bg-slate-100 scrollbar-hide mx-1">

  <div className='top-0 sticky  bg-white shadow-xl py-2 rounded-lg z-50'>
    <Search/>
</div>

{/* Body <br/><br/><br/><br/>
    That <br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/>
    Scrolls <br/><br/><br/><br/><br/><br/><br/> */}
    {main && (
      <Main name={main.name} title={main.title} duration={main.duration} domain={main.domain} stipend={main.stipend} mode={main.mode} location={main.location}/>

    )}
  </div>


</div>

 </main>

  )
}
