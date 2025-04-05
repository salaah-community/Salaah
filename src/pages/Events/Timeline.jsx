import React from "react";
import "./Timeline.css";
import "boxicons/css/boxicons.min.css";

const Timeline = () => {
  const Podcast = [

    {
      Date: "26-01-2024",
      Name: "Kumudini Tyagi",
      About: "The first woman officer on warships shared her naval experiences, leadership lessons, and the challenges she faced in a male-dominated field.",
      Outcome: "Her inspiring journey encouraged young minds to explore defense careers, break barriers with confidence, and develop leadership qualities for tackling real-world challenges.",
    },

    {
      Date: "26-04-2022",
      Name: "Mr. Shwet",
      About: "An Indian Army officer shared his experiences, highlighting courage, discipline, and national duty.",
      Outcome: "Listeners gained insights into patriotism and soldier sacrifices, inspiring them to contribute to society, take responsibility, and support national defense initiatives.",
    },
    {
      Date: "21-04-2022",
      Name: "Ms. Kashika Sisodia",
      About: "She spoke on patriotism and a citizen’s responsibility toward national service, focusing on leadership and dedication.",
      Outcome: "Attendees were motivated to take responsibility and serve the country with dedication and pride, fostering a sense of duty and awareness about civic engagement.",
    },
    {
      Date: "15-11-2022",
      Name: "Mr. Mohit Mishra",
      About: "An HR Head shared his journey, emphasizing continuous learning, adaptability, and professional growth in corporate environments.",
      Outcome: "Students learned that failure is an experience and gained motivation to grow in their careers with resilience, adaptability, and a mindset focused on self-improvement.",
    },
  
  ];
  
  
  

 
  
  
  const SeniorInsights = [
    {
      Date: "09-02- 2025",
      Name: "Ms. Khushi Chaudhary",
      About: "Ms. Khushi shared key strategies for securing job offers and advancing early careers. She emphasized the importance of networking, industry trends, and continuous learning. She also highlighted the role of soft skills in professional growth.",
    Outcome: "Attendees left with actionable career strategies, job offer techniques, and insights into professional growth. They were inspired to implement practical steps for success in their respective fields, applying the discussed strategies.",
    },

    {
      Date: "10-11-2024",
      Name: "Mr. Mohit Sharma",
      About: "Mr. Mohit Sharma, an alumnus from the batch of 2023, discussed the transformative impact of studying abroad in AI, Machine Learning, and Data Science. He emphasized the importance of international exposure, advanced research opportunities, and global networking.",
      Outcome: "Attendees gained insights into how international education enhances AI expertise, career prospects, and technological innovation. They learned how to build a global network and leverage study-abroad experiences for professional growth.",
    },
    {
      Date: "04-11-2023",
      Name: "Ms. Darshika Gupta",
      About: "Ms. Darshika discussed her journey in academia and tech, highlighting preparation strategies, upskilling, and seizing career opportunities. She shared personal experiences of overcoming challenges and adapting to industry changes.",
      Outcome: "Attendees learned key industry insights, essential career skills, and strategies for growth in tech. They were motivated by her journey and gained valuable guidance to excel in their professional and academic paths.",
    },
  ];
  
  
  const SalaahEvents = [
    {
      Date: "16-07-2024",
      Mentor: "VIKRANT SINGH",
      About: "This training covered Microsoft Azure fundamentals. Participants learned cloud deployment and management through hands-on labs.",
      Outcome: "Attendees gained cloud computing knowledge and hands-on Microsoft Azure experience, including cloud security and scalability.",
      Title: "CLOUD TRAINING",
    },

    {
      Date: "18-06-2024",
      Mentor: "N/A",
      About: "Salaah participated in the TCS Placement Drive, improving networking and industry exposure through interactive sessions.",
      Outcome: "Mock interviews prepared students for real-world hiring, and they learned effective resume-building techniques.",
      Title: "TCS PLACEMENT DRIVE",
    },


    {
      Date: "05-05-2024",
      Mentor: "RITURAJ SINGH GOUR",
      About: "Aarambh 2.0 was an intensive 50-hour bootcamp in Database Analysis, Power BI, and SQL, focusing on real-world data handling.",
      Outcome: "Participants built strong data analysis and visualization skills, learning to generate reports and automate data workflows.",
      Title: "AARAMBH 2.0",
    },
    {
      Date: "07-09-2023",
      Mentor: "SWARAJ PANDEY",
      About: "The Advanced Data Science Training covered key concepts like arrays and trees using Python, along with predictive modeling.",
      Outcome: "Attendees gained hands-on experience in data science, working on data preprocessing and building machine learning models.",
      Title: "DATA SCIENCE TRAINING",
    },
    
  ];
  
  






  SalaahEvents.sort((a, b) => {
    if (!a.Date) return 1;
    if (!b.Date) return -1;
    return new Date(b.Date.split("/").reverse().join("-")) - new Date(a.Date.split("/").reverse().join("-"));
  });

  const renderTimelineContent = (data) => {
    return data.map((item, index) => (
      <div className="timeline-content" key={index}>
        <div className="content">
          <div className="year">
            <i className="bx bxs-calendar"></i>
            {item.Date || item.Time}
          </div>
          <h3>{item.Name || item.Title}</h3>
          <p>{item.About}</p>
          <p>{item.Outcome}</p>
          {item.Mentor && <p>Mentor: {item.Mentor}</p>}
        </div>
      </div>
    ));
  };

  return (
    <section className="timeline">
      <div className="timeline-row">
        

        <div className="timeline-column">
          <h2 className="title">Podcast<span className="animate" style={{ "--i": 4 }}></span></h2>
          <div className="timeline-box">
            {renderTimelineContent(Podcast)}
            <span className="animate" style={{ "--i": 5 }}></span>
          </div>
        </div>
        <div className="timeline-column">
          <h2 className="title">Salaah Events<span className="animate" style={{ "--i": 6 }}></span></h2>
          <div className="timeline-box">
            {renderTimelineContent(SalaahEvents)}
            <span className="animate" style={{ "--i": 7 }}></span>
          </div>
        </div>
        

        <div className="timeline-column">
          <h2 className="title">Senior Insights<span className="animate" style={{ "--i": 1 }}></span></h2>
          <div className="timeline-box">
            {renderTimelineContent(SeniorInsights)}
            <span className="animate" style={{ "--i": 2 }}></span>
          </div>
        </div>
      </div>
     
    </section>






  );
};

export default Timeline;
