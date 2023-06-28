import React from 'react'
import Selectbtn from '../Components/Selectbtn';
import Search from '../Components/Search';
import Item from '../Components/Item';
import Main from '../Components/Main';
import { useEffect , useState}  from 'react';
import { doc,   orderBy ,  getDoc} from "firebase/firestore";
import {db} from '../firebase'
import { collection, query, where, getDocs ,   limit} from "firebase/firestore";
import {FaFilter} from 'react-icons/fa'


export default function Home() {

  const [listing , setListings] = useState(null);
  const [main , setMain] = useState(null);
   const [searchTerm, setSearchTerm] = useState('');
   const [location, setLocation] = useState('');
const [industry, setIndustry] = useState('');
const [selectedStipendRange, setSelectedStipendRange] = useState('');
const [selectedModeOfWork  , setSelectedModeOfWork] = useState('');
const [selectedDuration , setDuration] = useState('');
  // const [search, setSearch] = useState([]);



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
      // setSearchResults(listing);
    
      
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
          console.log(main.timestamp?.toDate());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('API_URL');
  //     const data = await response.json();
  //     // setData(data);
  //     setFilteredData(data);
  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //   }
  // };



  const handleSearch = (event,field) => {
    const value = event.target.value;
    if (field === 'title') {
      setSearchTerm(value);
    } else if (field === 'location') {
      setLocation(value);
    } else if (field === 'industry') {
      setIndustry(value);
    }
  };


  // function for checking stipend range 
  const stipendRangeCheck = (stipend, selectedStipendRange) => {
    const [min, max] = selectedStipendRange.split('-');
    const stipendValue = parseInt(stipend.replace(/,/g, '')); // remove commas from stipend value
  
    if (min === 'Unpaid') {
      return stipendValue === 0;
    }
  
    return stipendValue >= parseInt(min) && stipendValue <= parseInt(max);
  };
  

  return (
<main className='bg-slate-50'>

<div class="flex">
  <div class="h-screen top-0 sticky p-4 w-1/3 overflow-y-auto justify-center bg-slate-100 z-40 scrollbar-hide mx-1">
    {/* <!-- Note: add overflow-y-scroll if sidebar content is longer than page --> */}
    <div className='top-0 sticky bg-white shadow-xl py-2 z-30 rounded-lg'>
   <Selectbtn/>
  </div>

  {listing &&
  listing
    .filter((item) => {
      const title = item.data.title || '';
      const itemLocation = item.data.location || '';
      const itemIndustry = item.data.domain || '';
      const stipend = item.data.stipend || '';
      const modeOfWork = item.data.mode || '';
      const duration = item.data.duration || '';
    
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (location === '' || itemLocation.toLowerCase().includes(location.toLowerCase())) &&
        (industry === '' || itemIndustry.toLowerCase().includes(industry.toLowerCase())) &&
        (selectedStipendRange === '' || stipendRangeCheck(stipend, selectedStipendRange)) &&
        (selectedModeOfWork === '' || modeOfWork === selectedModeOfWork) && 
        (selectedDuration === '' || duration === selectedDuration)
      );
    })
    .map((list) => (
      <Item
        key={list.id}
        id={list.id}
        listing={list.data}
        onClick={() => onClick(list.id)}
      />
    ))}





  </div>
  
  <div class="flex-grow h-screen overflow-y-scroll p-4 bg-slate-100 scrollbar-hide mx-1">

  <div className='top-0 sticky  bg-white shadow-xl py-2 rounded-lg z-50'>

  <div className='mx-2 flex flex-row justify-between'>
      <div className="form-control ">
  <div className="input-group">
    <input type="text" placeholder="Search by Job title" className="input input-bordered  hover:shadow-lg"  value={searchTerm}
    onChange={(event) => handleSearch(event, 'title')} />
  </div>
</div>

<div className="form-control ">
  <div className="input-group">
    <input type="text" placeholder="Search by Location" className="input input-bordered  hover:shadow-lg"  value={location}
  onChange={(event) => handleSearch(event, 'location')}/>
  </div>
</div>

<div className="form-control ">
  <div className="input-group">
    <input type="text" placeholder="Search by Industry" className="input input-bordered  hover:shadow-lg"  value={industry}
   onChange={(event) => handleSearch(event, 'industry')}/>
  </div>
</div>


<div>


{/* Additional Filter */}
<button className="btn hover:shadow-lg" onClick={()=>window.my_modal_3.showModal()}><FaFilter className='text-purple-600'/></button>
<dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box flex flex-row justify-around">

    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

<div className="flex flex-col">

<label className="label">
<span className="label-text">Stipend( in ₹ )</span>
</label>
<select
 value={selectedStipendRange}
 onChange={(e) => setSelectedStipendRange(e.target.value)}
 className="select select-bordered focus:outline-0 hover:shadow-lg">
<option value="">All</option>
<option   value="Unpaid">Unpaid</option>
<option  value="0-10K">0-10K</option>
<option  value="10-30K">10-30K</option>
<option  value="30-50K">30-50K</option>
<option  value="50-70K">50-70K</option>
</select>
</div>

<div className='flex flex-col'>
  <label className="label">
  <span className="label-text">Mode of Work</span>
  </label>
  <select
  value={selectedModeOfWork}
  onChange={(e) => setSelectedModeOfWork(e.target.value)}
  className="select select-bordered focus:outline-0 hover:shadow-lg">
  <option value="">All</option>
  <option value="OnSite">OnSite</option>
  <option value="Hybrid">Hybrid</option>
  <option value="Remote">Remote</option>
  </select>
</div>


<div className='flex flex-col'>
  <label className="label">
  <span className="label-text">Duration(in Months)</span>
  </label>
  <select
  value={selectedDuration}
  onChange={(e) => setDuration(e.target.value)}
  className="select select-bordered focus:outline-0 hover:shadow-lg">
  <option value="">All</option>
  <option value="1-3">1-3</option>
  <option value="3-6">3-6</option>
  <option value="6+">6+</option>
  </select>
</div>
    
</form>

</dialog>



</div>


</div>
</div>

{main && (
      <Main description={main.description} skills={main.skills} name={main.name} title={main.title} duration={main.duration} domain={main.domain} stipend={main.stipend} mode={main.mode} location={main.location}/>
)}
  </div>


</div>

 </main>

  )
}
