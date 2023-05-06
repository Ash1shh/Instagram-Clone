import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { firestore } from "../../firebase/firebase";
import Explore from "./Explore";

type ExploreFeedProps = {};

const ExploreFeed: React.FC<ExploreFeedProps> = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPost = () => {
    try {
      setLoading(false);

      const fetchQuery = onSnapshot(
        query(collection(firestore, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      );

      fetchQuery;

      setTimeout(() => {
        setLoading(true);
      }, 1000);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [firestore]);

  return (
    <div className="h-screen col-span-5 mx-72 my-7">
      <div className="grid grid-cols-3 gap-1">
        {posts.map((post) => (
          <Explore
            id={post.id}
            img={post.data().image}
            userId={post.data().userId}
            username={post.data().username}
            userImage={post.data().profileImage}
            caption={post.data().caption}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreFeed;
