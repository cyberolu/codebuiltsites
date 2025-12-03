import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from "firebase/firestore";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const feedbackRef = collection(db, "feedback");

  // Real time listener
  useEffect(() => {
    const q = query(feedbackRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const feedback = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setFeedbackList(feedback);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating || !comment.trim() || !name.trim()) {
      return;
    }

    await addDoc(feedbackRef, {
      name,
      rating,
      comment,
      timestamp: serverTimestamp()
    });

    setRating(0);
    setHover(0);
    setName("");
    setComment("");
  };

  return (
    <section className="section feedback-section fade-up">
      <h2 className="section-title">Leave a Review</h2>

      <p className="section-subtitle">
        Share your experience and rate my work.
      </p>

      {/* FORM */}
      <form className="feedback-form" onSubmit={handleSubmit}>

        {/* Name */}
        <input
          className="feedback-input"
          placeholder="Your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        {/* Stars */}
        <div className="star-selector">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= (hover || rating) ? "star active" : "star"}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Comment */}
        <textarea
          className="feedback-textarea"
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button type="submit" className="btn primary feedback-btn">
          Submit Review
        </button>
      </form>

      {/* LIST – styled like testimonial cards */}
      <div className="testimonials-grid feedback-list">
        {feedbackList.map((fb) => (
          <div className="testimonial-card upgraded" key={fb.id}>
            <div className="quote-icon">“</div>

            <p className="testimonial-text">
              {fb.comment}
            </p>

            <div className="testimonial-stars">
              {"★".repeat(fb.rating)}
            </div>

            <div className="testimonial-footer">
              <h3 className="testimonial-name">{fb.name}</h3>
              <p className="testimonial-role">
                {fb.timestamp?.toDate
                  ? fb.timestamp.toDate().toLocaleString()
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;
