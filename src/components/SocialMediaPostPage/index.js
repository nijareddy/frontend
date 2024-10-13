import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css'

function SocialMediaPostPage() {
  const [submissions, setSubmissions] = useState([]);
  const { id } = useParams(); // Extract socialMediaHandle from URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://social-task-backend.onrender.com/submissions/${id}`);
        const data = await response.json();
        const updatedSubmissions = data.map((submission) => ({
          ...submission,
          images: JSON.parse(submission.images)
        }));
        setSubmissions(updatedSubmissions)
        console.log(submissions)
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchData();
  },[id]);

  return (
    <ul>
      {submissions.map((submission) => (
        <li key={submission.id}>
          <strong>Name:</strong> {submission.name}
          <br />
          <strong>Social Media Handle:</strong> {submission.socialMediaHandle}
          <br />
          <strong>Uploaded Images:</strong>
          {submission.images?.length > 0 ? (
            submission.images.map((imageUrl) => (
              <li key={submission.id}>
                <img src={`https://social-task-backend.onrender.com${imageUrl}`}
               alt={imageUrl.split('/').pop()} className='image' />
              </li>
            ))
          ) : (
            <p>No images uploaded.</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaPostPage;