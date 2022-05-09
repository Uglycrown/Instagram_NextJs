import { onSnapshot, collection, orderBy, query, Timestamp } from 'firebase/firestore';
import { useEffect, useState} from 'react'
import { db } from '../firebase';
import Poset from './Poset'



function Posets() {
    const [posts, setPosts] = useState([]);
    useEffect(() => 
       onSnapshot(
           query(collection(db,'posts'), orderBy('timestamp', 'desc')), snapshot=>{
            setPosts(snapshot.docs);
        }
        ),
     
     [db]);
    
    console.log(posts);
    return (
        <div>

        {posts.map((post)=>(
            <Poset 
            key={post.id} 
            id={post.id} 
            username={post.data().username}
            userImg={post.data().profileImg} 
            img={post.data().image}
            caption={post.data().caption}
            />

        ))}

    </div>
  )
}

export default Posets

