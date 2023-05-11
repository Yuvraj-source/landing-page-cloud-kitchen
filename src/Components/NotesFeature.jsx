import React, { useState } from "react";
import {  Button, Typography } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NotesSection from '../Assets/NotesSection.png';

const NotesFeature = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm) {
      setNotes([]);
      return;
    }
    try {
      const params = new URLSearchParams({
        action: "query",
        format: "json",
        utf8: 1,
        prop: "extracts",
        titles: searchTerm,
        redirects: 1,
        origin: "*",
      });
      let continueKey = null;
      let pageContent = "";
      do {
        const response = await axios.get(
          `https://en.wikipedia.org/w/api.php?${params}${
            continueKey ? `&continue=${continueKey}` : ""
          }`
        );
        const pages = response.data.query.pages;
        const pageId = Object.keys(pages)[0];
        pageContent += pages[pageId].extract;
        continueKey = response.data.continue?.excontinue;
      } while (continueKey);
      const cleanContent = pageContent.replace(/<\/?[^>]+(>|$)/g, "");
      const maxWords = 300;
      const truncatedContent = cleanContent
        .split(" ")
        .splice(0, maxWords)
        .join(" ");
      setNotes([{ title: searchTerm, content: truncatedContent }]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container spacing={2} alignItems="flex-start">
    <Grid item xs={12}>
    <Typography variant="h5" sx={{ mb: 2 , fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '2rem', color: 'primary.main' }}>
        Master Microbiology with our Curated Notes 
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant="h5" sx={{ mb: 2 , fontFamily: 'Roboto', fontSize: '1.4rem',maxWidth: '700px'}}>
        The Notes Section on our Microverse Microbiology website is a valuable resource for students studying microbiology.
         Our experts have curated detailed notes on various topics related to microbiology, which are constantly updated to ensure they are accurate and up-to-date. 
      </Typography>
      </div>
      <Typography Typography variant="body2" align="centre" sx={{ fontWeight: "bold", flex: 1, textAlign: "centre",fontSize: 22,fontFamily: 'Roboto'}}>
      Notes That Help You Ace Microbiology Exams and Beyond
      </Typography>
     
    </Grid>
    <Grid item xs={12} md={3}>
      <Box display="flex" justifyContent="center">
        <img src={NotesSection} alt="NotesHead" style={{ maxWidth: '110%', marginTop: '20px',  marginRight: '30px', marginLeft: "100px" }} />
      </Box>
    </Grid>
    <Grid item xs={12} md={9}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} lg={9}>
        <input 
  type="text" 
  value={searchTerm} 
  onChange={(event) => setSearchTerm(event.target.value)} 
  placeholder="Type a keyword and press Enter to search" 
  style={{ width: "80%" , marginLeft: "70px" , height:'40px' , marginTop: '100px',fontSize: '25px'}} 
/>

        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={handleSearch} sx={{ width: "50%" ,  marginLeft: "100px"}} >
              Search
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
         <Box width="800px" sx={{ marginLeft: "100px" }}>
            {searchTerm && notes.length > 0 ? (
              notes.map((note) => (
                <Typography key={note.title} variant="body1" component="p">
                  <b>{note.title}</b>
                  <br />
                  {note.content}
                </Typography>
              ))
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
};

export default NotesFeature;
