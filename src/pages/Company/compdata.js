import IMG1 from "../../assets/cisco2.jpg";
import IMG2 from "../../assets/amazon.jpeg";
import IMG3 from "../../assets/gold.jpg";
import IMG4 from "../../assets/infosys.jpg";
import IMG5 from "../../assets/synopsys.jpg";
import IMG6 from "../../assets/tcs.jpg";
import IMG7 from "../../assets/cogni-banner.jpg";
import IMG8 from "../../assets/capg-banner.jpg";
import IMG9 from "../../assets/accenture-banner.jpg";

import Mentors from "../Company/mentors";

import shreyanshShukla from '../../assets/shreyanshShukla.jpeg';
import vikramSeth from '../../assets/vikramSeth.jpeg';
import riturajSinghGour from '../../assets/riturajSinghGour.jpeg';
import sanjaySinghBisht from '../../assets/sanjaySinghBisht.jpeg';

export const compdata = [
  {
    id: 1,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Sameeksha Agarwal"
          img="https://drive.google.com/uc?export=view&id=1Fp11f6mutYB4msTcQqkuDxv8f71foHoB"
          link="https://www.linkedin.com/in/shreyansh-shukla-38842b187"
        />
      </div>
    ),
    company: "Cisco",
    cover: IMG1,
    alum__img:
      "https://drive.google.com/uc?export=view&id=1Fp11f6mutYB4msTcQqkuDxv8f71foHoB",
    alum__name: "Sameeksha Agarwal",
    alum__link: "https://www.linkedin.com/in/shreyansh-shukla-38842b187",
    about: (
      <div>
        Cisco Systems, Inc., or Cisco, is a global technology leader that has
        been making the Internet work since 1984. The company is based in
        California, USA. Cisco creates and sells a variety of technologies that
        power the Internet. The organisation is integrating its platforms in
        networking, security, collaboration, applications, and cloud computing.
        Since the company's inception, Cisco engineers have been pioneers in the
        development of Internet Protocol (IP)-based networking technologies.
      </div>
    ),
    jd: "Job Profile: Cisco Intern",
    process: (
      <div>
        <b>Eligibility Criteria:</b>
        <br />
        Pursuing a Bachelor of Engineering degree in Computer Science/IT or
        related branch
        <br />
        CGPA of 8.0 (out of 10) and above.
        <br />
        <br />
        Hundreds of applicants go through the Cisco interview process each year.
        Candidates that are more knowledgeable about networking principles and
        possess strong analytical abilities and computer intelligence will have
        no trouble passing the <b>Cisco interview.</b>
        <br /> <br />
        Selection Process involves three rounds:
        <br /> <br />
        <ul>
          <li>
            <b>Online Assessment Test:</b>
            <br />
            This online assessment test consists of the following sections with
            no negative marking.
            <br />
            <i>Aptitude Test:</i> Questions around Probability, Permutations and
            Combinations, Algebra, Simple & Compound Interest, Number Series,
            Profit and Loss, etc.
            <br />
            <i>Technical Test:</i> Questions around Computer Networking, C,
            Algorithms, Data Structures as well as digital electronics, CMOS and
            Microprocessor, etc.
            <br />
            There are 20 questions in the aptitude section, and 30 questions in
            the technical section. There will be a total of 50 questions to
            answer in 70 minutes.
          </li>
          <br />
          <li>
            <b>Technical Interview Rounds:</b>
            <br />
            In these, the interviewer may ask questions on various Computer
            fundamentals like Data Structures and Algorithms, Operating Systems,
            Algorithms, Database Management, Networking etc. Candidates will be
            tested in terms of in-depth knowledge in all the aspects of domains
            related to Computer Science and Networking. Other technical
            questions are normally asked from the projects or internships
            mentioned in the résumé. The company primarily focuses on a
            candidate’s approach towards a particular problem.
          </li>
          <br />
          <li>
            <b>HR Interview:</b>
            <br /> In this round, HR will usually question you about the job
            role, why do you want to join Cisco, the most challenging project
            that you were involved in, etc. Here the questions will be majorly
            asked from your résumé. Overall, you are required to be prepared
            well before this interview round and have a fair knowledge of Cisco
            and the stream from which you have got graduated/experienced.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Shreyansh Shukla"
          img= {shreyanshShukla}
          link="https://www.linkedin.com/in/shreyansh-shukla-38842b187"
        />
        <Mentors
          name="Vikram Seth"
          img={vikramSeth}
          link="https://www.linkedin.com/in/mahendra-vikram-seth-4744b513"
        />
        <Mentors
          name="RITURAJ SINGH GOUR"
          img={riturajSinghGour}
          link="https://www.linkedin.com/in/rituraj-singh-gour-bb7721171"
        />
        {/* <Mentors
          name="Sanjay Singh Bisht"
          img={sanjaySinghBisht}
          link="https://www.linkedin.com/in/sanjay-singh-bisht-744935180"
        /> */}
      </div>
    ),
    company: "Amazon",
    cover: IMG2,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        The American multinational technology corporation <b>Amazon</b> focuses
        on a wide range of industries, including e-commerce, cloud computing,
        artificial intelligence (AI), digital streaming, etc. Along with Google,
        Apple, Microsoft, and Facebook, it is regarded as one of the Big Five
        corporations in the US IT sector. Amazon is recognised for its massive
        industry disruptions brought about by technology innovation and size.
        Being the largest online retailer, provider of AI assistants, and cloud
        computing platform in the world, Amazon employs over six lakh people, of
        whom more than 50,000 are Indians. As a result of it being the largest
        Internet company in the world in terms of revenue at the moment, Amazon
        has the greatest worldwide brand valuation.
      </div>
    ),
    process: (
      <div>
        It has the following rounds for the off campus process: <br />
        <br />
        <ul>
          <li>
            <b>Application Round:</b>
            <br />
            Best way to get noticed by Amazon recruiters is to maintain a good
            Linkedin profile and message recruiters. The candidate can also
            apply on the Amazon job portal but it is suggested that they also
            get a referral from an Amazon employee.
          </li>
          <li>
            <b>Online Aptitude round: </b>
            <br />
            This round will mainly consist of tricky puzzle-like questions to
            assess the aptitude and deep knowledge of the candidate. The test
            will consist of MCQ questions from a wide range of topics.
          </li>
          <li>
            <b>Technical Test</b>
            <br />
            This round will have easy to medium questions to judge the coding
            skills and technical knowledge of the candidate. The topics on which
            the questions for software engineers would be based are dynamic
            programming, arrays, graphs, trees, recursion, strings, algorithms,
            etc. The candidate needs to have a nice understanding of basic
            concepts of computer science.
          </li>
          <li>
            <b>Interview Rounds:</b>
            <br />
            Amazon conducts four interview rounds alongside an initial coding
            test. The coding test consists of DS/Algo problems. The first round
            is an HR round where they ask behavioral questions along with
            Computer Science theory questions to the candidate. The next three
            rounds focus solely on DS/Algo.
          </li>
          <br />
          <li>
            <b>
              <h2>After Interviews: </h2>
            </b>
            <br />
            The recruiter contacts the candidate after these rounds and tells
            the verdict. They also look at the candidate’s leadership principles
            along with technical skills.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Aarushi Rai"
          img="https://drive.google.com/uc?export=view&id=1cr9C3kducCWZsfvqJS6TgVg2Z9jMwvro"
          link="https://www.linkedin.com/in/aarushi-rai-0a176a1a7/?originalSubdomain=in"
        />
      </div>
    ),
    company: "Golman Sachs",
    cover: IMG3,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        In the areas of investment banking, securities, investment management,
        and consumer banking, The <b>Goldman Sachs Group, Inc.</b> is a
        preeminent international financial organisation that offers a wide range
        of financial services to a sizable and varied clientele that consists of
        businesses, financial institutions, governments, and private citizens.
        Utilizing its more than 150 years of experience working with the finest
        businesses, entrepreneurs, and organisations in the world, Goldman Sachs
        mobilises its personnel and assets to increase client success, increase
        individual prosperity, and hasten economic growth for all. According to
        Goldman Sachs, collaboration, teamwork, and honesty provide the ideal
        environment for employees to provide the best results for their clients.
        It looks for individuals who will flourish in this setting, prioritising
        communication, passion, and rapid thinking over certain qualifications.
      </div>
    ),
    jd: "Job Profile: Golman Sachs Summer Intern",
    process: (
      <div>
        <ul>
          <li>
            <b>
              <h2>Online Assessment Test </h2>
            </b>
            <br />
            The Goldman Sachs online assessment test is divided into the
            following sections: <br /> <br />
            <b>• Quantitative Aptitude:</b> It contains questions related to
            Numerical Computations and Numerical Reasoning. Prepare questions
            related to Numbers, Profit and Loss, Permutation and Combination,
            Averages, Time Speed and Distance, Ratio, Probability among other
            topics. Candidates' mathematical ability will be assessed through
            Diagrammatic puzzles and Series. <br /> <br />
            <b>• Reasoning:</b> It contains questions related to Logical
            Reasoning, Abstract Reasoning and Diagrammatic Reasoning. Be
            prepared on questions related to Data Arrangements, Coding and
            Decoding, Data Interpretation, Algorithms/ Flowcharts, Circuits,
            Input-Output patterns among other topics. <br /> <br />
            <b>• Verbal:</b> This section is related to Reading Comprehension.
            You must practise the topics listed below in order to answer more
            efficiently: Improvement and Correction of Sentences, Articles and
            Fill in the blanks. <br />
            <br />
            <b>• Technical section:</b> Technical Test will contain questions
            related to the Coding Aptitude(Advance), Computer science,
            Competitive Programming and Subjective Questions.
          </li>
          <br />
          <li>
            <b>
              <h2>Technical Interview </h2>
            </b>{" "}
            <br />
            Candidates who successfully complete the online assessment exam
            stage will receive an invitation to a technical interview in person.
            Technical interviews are designed to evaluate your technical skills,
            which are typically tailored to the position you are pursuing, as
            well as your problem-solving and stress-management talents. The
            interviewer will also assess your ability to solve problems. You'll
            be questioned about your prior endeavours and employment history, as
            well as what you accomplished, how you used technology, and the
            degree of your achievement. Know the foundations of computers as
            well and be ready.
            <br />
            Candidates with a solid conceptual grasp of at least one programming
            language, ideally C/C++, Java, Python, or JavaScript, are sought
            after by Goldman Sachs.
          </li>
          <br />
          <li>
            <b>
              <h2>HR Interview</h2>
            </b>{" "}
            <br />
            Candidates advance to the HR phase only after successfully
            completing the technical interview. Examining a candidate's
            personality, background, strengths, and shortcomings in order to
            assess whether or not they are a suitable fit for a particular
            position is the main objective of an HR interview. Therefore, it's
            critical to prepare thoroughly for the HR interview.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Kunal Tyagi"
          img="https://drive.google.com/uc?export=view&id=1eWdwx41DmlnRx-Nf5YQP1HK_hUs5LsNw"
          link="https://www.linkedin.com/in/kunal-tyagi-4042b217a/"
        />
        <Mentors
          name="Mansi Chauhan"
          img="https://drive.google.com/u/0/open?usp=forms_web&id=1Ff3KG4qTcAtRQtUmsBFt2hc7ywOXglGz"
          link="https://www.linkedin.com/in/mansi-chauhan-1a914b197/"
        />
        <Mentors
          name="Jhanvi Singh"
          img="https://drive.google.com/u/0/open?usp=forms_web&id=1Ff3KG4qTcAtRQtUmsBFt2hc7ywOXglGz"
          link="https://www.linkedin.com/in/mansi-chauhan-1a914b197/"
        />
        <Mentors
          name="Ayush Shukla"
          img="https://drive.google.com/u/0/open?usp=forms_web&id=1Ff3KG4qTcAtRQtUmsBFt2hc7ywOXglGz"
          link="https://www.linkedin.com/in/mansi-chauhan-1a914b197/"
        />
        <Mentors
          name="Rohit Choudhary"
          img="https://drive.google.com/u/0/open?usp=forms_web&id=1Ff3KG4qTcAtRQtUmsBFt2hc7ywOXglGz"
          link="https://www.linkedin.com/in/mansi-chauhan-1a914b197/"
        />
        <Mentors
          name="Utkarsh Goel"
          img="https://drive.google.com/u/0/open?usp=forms_web&id=1Ff3KG4qTcAtRQtUmsBFt2hc7ywOXglGz"
          link="https://www.linkedin.com/in/mansi-chauhan-1a914b197/"
        />
      </div>
    ),
    company: "Infosys",
    cover: IMG4,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        A leading worldwide IT consulting firm, Infosys helps customers from a
        range of industry segments improve their business performance by
        offering end-to-end solutions in the areas of business consulting,
        information technology, and outsourcing services. Infosys primarily
        provides businesses in the manufacturing, insurance, and other
        industries with software development, product maintenance, and
        independent validation services. <br /> <br />
        Before changing its name to Infosys, the company was known as Infosys
        Technologies Ltd. N. R. Narayana Murthy and a group of six other
        engineers created Infosys in Pune. Just $250 in startup funding was used
        to launch the firm. Bangalore, India presently serves as the
        headquarters of Infosys. Infosys supports customers in more than 50
        countries as they develop and carry out various plans for their path
        toward digital transformation. Infosys not only assists its clients in
        improving their overall company performance but also promotes their
        transformation into smarter organisations. Their clients may thus
        concentrate on the most important business objectives. <br /> <br />
        Infosys has extensive industry knowledge. Infosys offers very effective,
        cutting-edge goods and services, from assisting in the development of
        lighter, stronger passenger aircraft and more fuel-efficient smart
        automobiles to supplying banks with the means to extend financial
        inclusion to the world's most remote regions. Infosys alters how people
        live and work through this rigorous procedure.
      </div>
    ),
    jd: "Job Profile: Infosys SDE Intern",
    process: (
      <div>
        In general, you must meet Infosys' academic requirements in order to
        apply. For classes 10, 12, and graduation, students must earn at least
        60 percent of the possible points. <br /> <br /> After that, the
        qualified applicants must proceed through Infosys' three recruiting
        phases, which include: <br />
        <ul>
          <li>
            <b>• Online Evaluation Test</b>
          </li>
          <li>
            <b>• HR Interview</b>
          </li>
          <li>
            <b>• Technical Interview</b>
          </li>
        </ul>
        <br />
        The hiring procedure is the same for experienced applicants as well.
        However, for some crucial positions, you might need to go through two or
        more rounds of technical interviews before an HR interview. <br />
        <br />
        <h2>Online Assessment</h2>
        <br />
        The three portions of the online assessment exam each have time
        constraints and cutoffs. The online assessment test has three portions,
        including these: <br /> <br />
        <b>Logical and Analytical Reasoning</b>: Questions in this area range in
        difficulty from easy to somewhat difficult and are based on concepts
        like data sufficiency, data interpretation, visual reasoning, statement
        reasoning, syllogism, etc. <br /> <br />
        <b>Quantitative aptitude</b>: Questions in this area range in complexity
        from moderate to high and cover topics like time, permutations and
        combinations, speed and distance, number series, analytical puzzles,
        formulas, algebra, probability, etc. <br />
        <br />
        <b>Verbal Ability</b>: In this round, you may anticipate vocabulary
        questions, fill-in-the-blanks, completion of paragraphs, sentence
        correction, and more. The number of inquiries and the amount of time
        allotted for the aforementioned parts in this round may change depending
        on the interviews.
        <br />
        <br />
        <h2>Technical Interview</h2>
        <br />
        You will be contacted for a technical interview if you pass the online
        assessment test. During this stage, questions based on the candidates'
        resumes and areas of interest are often posed. Computer foundations
        including operating systems, data structures, and algorithms, as well as
        understanding of the most recent developing technologies, are some other
        factors that might help you earn a decent score in this round. You are
        required to have some solid knowledge of at least one programming
        language. You must decide on and be ready for a subject of interest that
        is directly relevant to the position. Your ability to solve problems may
        occasionally be evaluated in this round, possibly through puzzles and
        aptitude tests. Additionally, be prepared to respond to inquiries about
        your projects and/or internships.
        <br />
        <br />
        <h2>HR Interview</h2>
        <br />
        If you pass the technical interview, you will be invited to the HR
        interview stage. Essentially, the goal of this evaluation is to
        determine if you are the greatest candidate for the firm. Your history,
        education, interests, and even your outlook on life are all up for
        scrutiny in this situation. Some queries about the Infosys corporation
        must be anticipated. Be prepared to answer any inquiries meant to gauge
        your sincerity in your application for the position.
      </div>
    ),
  },
  {
    id: 5,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Anshita Yadav"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
      </div>
    ),
    company: "Synopsys",
    cover: IMG5,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Technology from Synopsys is at the core of technologies that are
        revolutionising how people work and play. Autonomous vehicles. learning
        computers. blazing-fast connectivity among the datasphere's trillions of
        gadgets. These innovations have ushered in the era of "Smart
        Everything," where gadgets are becoming more intelligent and
        interconnected, and security is built right into the design.
        <br /> <br />
        High-performance silicon processors and an increasingly expanding volume
        of software content are driving this new age of innovation. With the
        most cutting-edge technologies available for chip design, verification,
        IP integration, and software security and quality testing, Synopsys is
        at the forefront of the Smart Everything movement. We support our
        clients' innovation efforts from silicon to software so they may create
        incredible new products.
      </div>
    ),
    jd: "Job Profile: Synopsys SDE Intern",
    process: (
      <div>
        Synopsys conducts 5-8 rounds to select freshers as Software Engineer in
        their organisation.
        <br />
        <br />
        <ul>
          <li>• Written Round</li>
          <li>• Technical Round 1</li>
          <li>• Technical Round 2</li>
          <li>• Technical Round 3</li>
          <li>• Technical Round 4</li>
          <li>• Technical Round 5</li>
          <li>• HR Round 1</li>
          <li>• HR Round 2</li>
        </ul>
        <br />
        <h1>Academic Criteria: </h1>
        <br />
        <li>• 75 percent or above in B.Tech, Class X and XII.</li>
        <li>• No backlogs at the time of interview.</li>
        <br />
        <br />
        <h2>Online Round :</h2>
        <br />
        Written round oftenly consists of questions Quantitative Aptitude,
        Logical Ability, C, C++, Algorithm, Data structures, Digital Design. To
        be prepared for aptitude section you can practice from our Placement
        Section.
        <br />
        <br />
        <h2>Technical Rounds:</h2>
        <br />
        The students who clear the written round are called for Technical
        Interview.To clear this round you should be clear with your basics. You
        should be prepared with Data structures and Algorithms, and C language.
        Students will be expected to write codes in the interview. They could
        also be ask questions from resume. You may be asked puzzles in this
        round. To be prepared for puzzles you can practice from our Puzzles
        section.
        <br />
        <br />
        <h2>HR Round :</h2>
        <br />
        You can expected general HR questions like :
        <li>• Tell me about Yourself</li>
        <li>• Why Synopsys?</li>
        <li>• What will you do if you get offer from Google/Facebook, etc ?</li>
        <li>• What kind of culture do you want to work in?</li>
        <li>• What are your strengths and weaknesses ?</li>
        <li>• Questions form resume</li>
        <br />
      </div>
    ),
  },
  {
    id: 6,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Animesh Porkhriyal"
          img="https://drive.google.com/uc?export=view&id=1GXSKEIYmP8Hlp9uPUIm9EOhMNfnn1OLO"
          link="https://www.linkedin.com/in/animesh-pokhriyal-1121441b0/"
        />
        <Mentors
          name="Rohit Jhingran"
          img="https://drive.google.com/uc?export=view&id=1GXSKEIYmP8Hlp9uPUIm9EOhMNfnn1OLO"
          link="https://www.linkedin.com/in/animesh-pokhriyal-1121441b0/"
        />
        <Mentors
          name="Abhinav Srivastava"
          img="https://drive.google.com/uc?export=view&id=1GXSKEIYmP8Hlp9uPUIm9EOhMNfnn1OLO"
          link="https://www.linkedin.com/in/animesh-pokhriyal-1121441b0/"
        />
        <Mentors
          name="Rishabh Krishna"
          img="https://drive.google.com/uc?export=view&id=1GXSKEIYmP8Hlp9uPUIm9EOhMNfnn1OLO"
          link="https://www.linkedin.com/in/animesh-pokhriyal-1121441b0/"
        />
      </div>
    ),
    company: "TCS",
    cover: IMG6,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Since more than 50 years ago, many of the top organisations in the world
        have relied on Tata Consultancy Services for IT services, consulting,
        and business solutions. Its headquarters are in Mumbai, Maharashtra,
        while Chennai, Tamil Nadu, serves as its primary campus. As of February
        2021, <b>TCS</b> had the greatest market capitalization among IT
        services providers worldwide. The Tata group, the largest international
        corporate conglomerate in India, includes TCS. Being associated with a
        brand not only gives you the confidence that your career is on the right
        course, but it also goes some way toward ensuring job stability. People
        think that TCS can help them develop in their professions while yet
        preserving a healthy work-life balance.
      </div>
    ),
    jd: "Job Profile: Software Engineer",
    process: (
      <div>
        <ul>
          <li>
            <h2>Round 1 (TCS NQT): </h2>
            <br />
            The TCS NQT (National Qualifier Test), the initial round of the
            hiring process, is regarded as one of the trickiest parts of the
            process. It is an aptitude test that assesses a candidate's
            competencies. TCS NQT Exams are available at TCS iON Authorised Exam
            Centers as well as online (at home). <br />
            This test has the following section: <br />
            <br />
            <b>Numerical ability</b>:<br /> Number Systems, Arithmetic,
            Elementary Statistics, and Data Interpretation are all assessed in
            this part. <br />
            Verbal Ability: This section assesses English grammar, how to use it
            correctly, and reading comprehension.
            <br />
            Reasoning ability: Identifying words and mathematical patterns,
            problem-solving, figurative and factual analysis, decision-making,
            propositional reasoning, and visual-spatial reasoning are all
            assessed in this section.
            <br />
            Programming Section: Pseudo-code, Algorithms, Programming
            structures, fundamental Software Development Life Cycle (SDLC) and
            its stage-wise documents, and implementation using C, C++, and Java
            will be tested. <br />
          </li>
          <li>
            <br />
            <b>Technical interview: </b>
            <br />
            Make every effort to get ready for this stage of the hiring process
            as it is the most difficult. Your technical knowledge, biography,
            and key projects will be the main topics of discussion throughout
            the entire interview process. The face-to-face technical round of
            the TCS interview consists of questions aimed at determining the
            candidate's proficiency with object-oriented programming concepts,
            database management systems, operating systems, networking, and a
            programming language of your choosing. There is a good likelihood
            that you will be required to write some code on paper.
          </li>
          <li>
            <br />
            <b>Managerial interview: </b>
            <br />A group of senior members oversee the managerial round. This
            round of interviews also takes place in person. This round may be
            made up entirely of technical questions or may include both
            managerial and technical inquiries. Most of the inquiries are
            related to the position for which you are being interviewed. Any new
            software or technology that are necessary for that position should
            be familiar to you. In order to evaluate your thinking style, you
            could also be asked questions based on your behaviour. It's possible
            that you'll face pressure to test how you handle it. The
            accomplishments listed on your CV could be contested, and you might
            need to defend them. You can be asked questions about your prior
            employment, goals, reasons for joining TCS, and other related
            subjects.
          </li>
          <li>
            <br />
            <b>HR Round: </b>
            <br />
            Along with the typical HR inquiries about your skills and
            shortcomings, motivations for applying to the company, reasons why
            you should be recruited, etc., you can anticipate inquiries about
            your work history, schooling, extracurricular activities, and family
            history. They can also inquire about TCS, including its founding
            date, goals, core principles, organisational structure, and other
            details.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Ria Pundir"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Akshat Mittal"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Harshit Bhardwaj"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Aryan Bansal"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Siddhant Chaudhary"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Utkarsh Singh"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
      </div>
    ),
    company: "Cognizant",
    cover: IMG7,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Cognizant has been named one of Fortune's Most Admired Companies for the
        eighth year in a row. Cognizant is also ranked 18th among the Forbes
        FastTech 25 businesses. Cognizant is a member of the NASDAQ-100, the
        S&amp;P 500, the Forbes Global 2000, and the Fortune 500, and is
        considered among the best performing and fastest growing firms in the
        world, with over 50 delivery centres worldwide and about 244,300 workers
        as of June 30, 2016. Everything Cognizant does is motivated by the
        desire to serve customers, solve issues, and improve human experiences.
        Discover the finest digital options for your organisation if you're as
        excited about the potential as Cognizant is.
      </div>
    ),
    jd: "Entry Level Profiles",
    process: (
      <div>
        <ul>
          <li>
            <h2>Eligibility Criteria</h2>
            <br />
            Minimum of 60 percent in class X, XII and B.Tech <br />
            No backlogs <br />
            Education gap of upto 1 year
          </li>
          <br />
          <li>
            <b>
              <h2>Online Assessment </h2>
            </b>
            <br />
            This round consists of a 240-minutes written exam made up of 61
            questions. There are 25 , 25 questions on Quantative Aptitude and
            Logical Reasoning and 10 questions over code debugging.
          </li>
          <br />
          <li>
            <b>
              <h2>Interview Round 1</h2>
            </b>
            <br />
            Candidates who qualify the written test are called for GenC
            interview. This includes questions based on programming, data
            structures, and algorithms. GenC is basically a technical interview
            round, followed by some general questions. The candidate is given
            some easy and a few difficult questions in this round.
          </li>
          <br />
          <li>
            <b>
              <h2>Interview Round 2</h2>
            </b>
            <br />
            Only those who qualify GenC interview are eligible for this round.
            However, even if the candidate is not able to clear GenC Next
            interview but qualifies GenC interview, they are hired for the
            relevant role. Usually, candidates with some coding experience only
            are able to ace GenC Next interview round .This interview mainly
            assesses the candidate's knowledge of programming concepts and
            algorithms, as well as their personality traits, communication
            skills, and problem-solving behaviours.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Shalini Rajput"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Anoop Singh"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Ujjwal Tomar"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Prakhar Khetan"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Deepanshu Chaudhary"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Abhishek Singh"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Rohit Singhwal"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Yash Suri"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Shruti Singh"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
      </div>
    ),
    company: "Capgemini",
    cover: IMG8,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Capgemini is a global leader in partnering with companies to transform
        and manage their business by harnessing the power of technology. The
        Group is guided everyday by its purpose of unleashing human energy
        through technology for an inclusive and sustainable future. It is a
        responsible and diverse organization of over 350,000 team members in
        more than 50 countries. With its strong 55 year heritage and deep
        industry expertise, Capgemini is trusted by its clients to address the
        entire breadth of their business needs, from strategy and design to
        operations, fueled by the fast evolving and innovative world of cloud,
        data, AI, connectivity, software, digital engineering and platforms.
      </div>
    ),
    jd: "Software Engineer & Senior Analyst",
    process: (
      <div>
        The following are the stages or online test pattern of the Capgemini
        recruitment process for the role of Analyst. The most recent rounds of
        Capgemini's recruitment process are listed below
        <br />
        <br />
        <ul>
          <li>• Capgemini's Pseudo Code section</li>
          <li>• MCQ Based English Communication Test</li>
          <li>• Game Based Aptitude Test</li>
          <li>• Behavioral Competency Profiling (Non Elimination Round)</li>
          <li>• Technical and HR Interview</li>
        </ul>
        <br />
        <h1>Academic Criteria: </h1>
        <br />
        <li>• 75 percent or above in B.Tech, Class X and XII.</li>
        <li>• No backlogs at the time of interview.</li>
        <br />
        <br />
        <h2>Online Round :</h2>
        <br />
        <i>Technical Test:</i> <br /> In this round there will be 45 mcq
        questions  which have to be answered in the time limit of 45 minutes.
        Ignore the syntax error, like missing semi-colon or bracket, and work on
        the logic. As this is an elimination round, so you will proceed only if
        you clear this round. <br />
        <br />
        <i>English Communication Test:</i> <br /> This will be a MCQ section
        with four options for every question. Tests your grammatical and
        vocabulary skills.
        <br />
        <br />
        <i>Game based Aptitude Test:</i> <br /> In this section there will be
        games and you have to pass them. There are a total of 24 games, out of
        which the system will select 4 games for you. You have to try to reach
        the highest level you could, withing the given time. There will be a
        time limit of 25- 30 mins per game.
        <br />
        <br />
        <i>Behaviorial Competency Test:</i> <br /> This is just an another name
        for Psychometric Test, in which there will be different situation based
        questions , and you have to answer that whether you agree or disagree
        with that situation.
        <br />
        <br />
        <i>Spoken English:</i> <br /> The Capgemini Exceller Spoken English
        round is the latest round that has been added to Capgemini Exceller
        Recruitment Process. This is a new round that Capgemini Exceller has
        introduced.
        <br />
        <br />
        <i>Coding:</i> <br /> Capgemini Exceller coding section is only for
        those students who have qualified till Spoken English Round and if you
        will be able to solve 1 questions you will get package of 5.75 LPA and
        if you will solve both question then you will get 7.50 LPA package.
        <br />
        <br />
        <h2>Technical Rounds:</h2>
        <br />
        In this round the students can expect the question about their Final
        Year Project, basic Coding Questions. Knowledge of Coding on C
        Programming & DSA is must for the students for clearing the round.
        <br />
        <br />
        <h2>HR Round :</h2>
        <br />
        You can expected general HR questions like :
        <li>• Tell me about Yourself</li>
        <li>• Why Capgemini?</li>
        <li>• What will you do if you get offer from Google/Facebook, etc ?</li>
        <li>• What kind of culture do you want to work in?</li>
        <li>• What are your strengths and weaknesses ?</li>
        <li>• Questions from resume</li>
        <br />
      </div>
    ),
  },
  {
    id: 9,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Shalini Rajput"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Anoop Singh"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Ujjwal Tomar"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Prakhar Khetan"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Deepanshu Chaudhary"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Abhishek Singh"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Rohit Singhwal"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Yash Suri"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Shruti Singh"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
      </div>
    ),
    company: "Accenture",
    cover: IMG9,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Accenture is a multinational management consulting, technology services
        and outsourcing company. It is located in Dublin, Ireland and was
        founded in 1989. Accenture is a Dublin-based company that specializes in
        offering professional services in business strategy, consulting,
        digital, technology, and operations. Each service has various
        technologies and employees dedicated to it.
      </div>
    ),
    jd: "Software Engineer & Senior Analyst",
    process: (
      <div>
        <h2>Cognitive Ability and Technical Assessment :</h2>
        <br />
        This is the most important round in the Accenture test 2023. In this
        round most of the students will get eliminated and can’t reach to the
        next round i.e coding round. This includes: <br />
        <i>
        English Ability <br />
        Analytical Reasoning <br />
        Numerical Ability
        </i>
        <br />
        <br />
        <h2>Coding Round:</h2>
        <br />
        Score of the Coding round is considered at the final round i.e Interview
        process. In this round there are 2 coding questions that can need to be
        solved in 45min.
        <br />
        <br />
        <h2>Communication Assessment Round :</h2>
        <br />
        It is a 20 min verbal test that will assess you on the below parameters:{" "}
        <br /><i>
        Sentence Mastery <br /> Vocabulary <br /> Fluency <br /> Pronunciation</i>
        <br />
      </div>
    ),
  },
];
