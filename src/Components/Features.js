import React from 'react';
import { Box, Typography } from '@mui/material';
import Discussion from '../Assets/Discussion.jpg';
import Notes from '../Assets/Notes.png';
import Quiz from '../Assets/Quiz.jpg';
import Job from '../Assets/Job.jpg';
import NewsLetter from '../Assets/NewsLetter.png';
import Notification from '../Assets/Notification.png';
import College from '../Assets/College.png';
import Subscription from '../Assets/Subscription.jpg';



// Define the features and their images
const features = [
  {
    title: 'Discussion Forum',
    description: 'Connect with other students and experts in microbiology and share your questions, doubts, insights and opinions.',
    image: Discussion,
    alt: 'A group of students discussing in a forum'
  },
  {
    title: 'Resource Page/Notes',
    description: 'Access high-quality notes and resources on various topics and concepts in microbiology, curated by our team of experts.',
    image: Notes,
    alt: 'A notebook with microbiology notes and diagrams'
  },
  {
    title: 'Quiz and Practice Papers',
    description: 'Test your knowledge and skills in microbiology with our interactive quizzes and practice papers, designed to help you prepare for exams.',
    image: Quiz,
    alt: 'A student taking a quiz on a laptop'
  },
  {
    title: 'Job Portal',
    description: 'Find and apply for the latest jobs and opportunities in microbiology, from research positions to teaching roles.',
    image: Job,
    alt: 'A job board with microbiology vacancies'
  },
 
  {
    title: 'Newsletter',
    description: 'Subscribe to our newsletter and get the latest updates and news on microbiology, delivered to your inbox every week.',
    image: Subscription,
    alt: 'A newsletter with microbiology headlines'
  },
  {
    title: 'Exam Notification and Updates',
    description: 'Stay informed about the upcoming exams and deadlines in microbiology, and get tips and guidance on how to ace them.',
    image: Notification,
    alt: 'A calendar with exam dates marked'
  },
  {
    title: 'Microbiology News',
    description: 'Keep up with the latest developments and discoveries in microbiology, from breakthroughs in research to innovations in applications.',
    image: NewsLetter,
    alt: 'A newspaper with microbiology articles'
  },
  {
    title: 'College Search',
    description: 'Find the best colleges and universities that offer courses and programs in microbiology, based on your preferences and criteria.',
    image: College,
    alt: 'A map with pins showing colleges that offer microbiology'
  }
];

// Define the component
const FeatureComponents = () => {
  return (
    <Box sx={{ p: 4 }}>
    <Typography variant="body2" align="center" sx={{ fontWeight: 'bold', fontSize: 22, fontFamily: 'Roboto', mb: 2 }}>
      Our mission is to create a community of students passionate about microbiology and provide them with access to quality resources and information.
    </Typography>
    {features.map((feature, index) => (
      <Box
        key={feature.title}
        sx={{
          display: 'flex',
          flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          alignItems: 'center',
          my: 2,
          '@media (max-width: 768px)': {
            flexDirection: 'column'
          }
        }}
      >
        <Box sx={{ flex: '1', pr: 2, textAlign: index % 2 === 0 ? 'right' : 'left' }}>
          <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '2rem', color: 'primary.main' }}>
            {feature.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto', fontSize: '1.5rem' }}>
            {feature.description}
          </Typography>
        </Box>
        <Box sx={{ flex: '1', pl: 2 }}>
          <img src={feature.image} alt={feature.alt} width="50%" />
        </Box>
      </Box>
    ))}
  </Box>
  );
};

export default FeatureComponents;