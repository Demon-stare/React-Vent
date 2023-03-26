import * as React from 'react';
import { createClient } from '@supabase/supabase-js'
import './App.css';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Posts from './Posts'
import ResponsiveAppBar from './ResponsiveAppBar.tsx'


export default function Feed() {

  const supabase = createClient('https://fjyhzorwyiggzjglhxbp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeWh6b3J3eWlnZ3pqZ2xoeGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMTc3MTIsImV4cCI6MTk5NDc5MzcxMn0.YpkAHXhwZrbDWROw4PiuFTe6ePKydhOTPaTJ2h9OIZk')
  const [postsdata, Setposts] = useState([])


  useEffect(() => {
    fetchposts()
  }, [])


  async function fetchposts() {

    console.log('entered-getposts');


    try {
      let { data: POSTS, error } = await supabase
        .from('POSTS')
        .select('*, profiles!inner (full_name)')
         console.log("data from : query", POSTS);
         Setposts(POSTS)



    } catch (e) {
      console.log('Something theda' + e);


    }

  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    console.log("Logged Out")
  }

  return (
    <div>
      <ResponsiveAppBar/>
      <Container id="Feed_Container">
        <Posts Props={postsdata}></Posts>
      </Container>
    </div>
  );

};



