import React from 'react'
import { ProfileImage } from './ProfileImage';

const educationItems = [
  {
    title: "KAIST (Korea Advanced Institute of Science and Technology)",
    subTitle: "M.S. in Graduate School of Culture Technology (Social Computing)",
    duration: "Mar. 2016 - Feb. 2018"
  },
  {
    title: "Ajou University",
    subTitle: "B.S. in Digital Media of College of Information and Technology",
    duration: "Mar. 2010 - Feb. 2016"
  },
  {
    title: "University of Nevada, Las Vegas",
    subTitle: "Visiting Scholar in College of Engineering",
    duration: "Jan. 2015 - May. 2015"
  },
];


const experienceItems = [
  {
    title: "CLOVA in NAVER",
    subTitle: "Visualization Engineer & Researcher, Front-end web developer",
    description: [
      'Managed front-end parts of a machine learning platform including planning, design, and development.',
      'Built various visual analytics systems for analyzing and optimizing machine learning models.',
      'Published various research papers related to machine learning platforms.',
      'Developed a Design system to reuse basic UI components within a consistent design theme.',
    ],
    duration: "Feb. 2018 - Present",
    links: "https://clova.ai/"
  },
  {
    title: "3Secondz",
    subTitle: "Visualization Engineer, Front-end web developer",
    description: [
      'Developed data visualization modules that represents car racing data, where users can review and analyze their past driving records comprehensively.',
    ],
    duration: "May. 2017 - Jan. 2018",
    links: "https://3secondz.com/"
  }
]


const paperItems = [
  {
    title: "HyperTendril: Visual Analytics for User-Driven Hyperparameter Tuning of Deep Neural Networks",
    author: "Heungseok Park, Yoonsoo Nam, Ji-hoon Kim, and Jaegul Choo",
    venue: "IEEE Transactions on Visualization and Computer Graphics, In Proc. IEEE VIS 2020 (VAST, acceptance rate: 24.8%)",
    date: "2020",
    image: "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/thumbnails/HyperTendril.png?raw=true",
    linkItem: {
      'IEEE Xplore': 'https://ieeexplore.ieee.org/document/9222338',
      paper: "https://arxiv.org/abs/2009.02078",
      website: `${process.env.PUBLIC_URL}/hypertendril`,
    }
  },
  {
    title: "VisualHyperTuner: Visual Analytics for User-Driven Hyperparameter Tuning of Deep Neural Networks",
    author: "Heungseok Park, Jinwoong Kim, Minkyu Kim, Ji-hoon Kim, Jaegul Choo, Jung-Woo Ha, and Nako Sung",
    venue: "In Proc. International Conference on Machine Learning and Systems (MLSys)",
    date: "2019",
    image: "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/thumbnails/VisualHyperTuner.png?raw=true",
    linkItem: {
      paper: "https://mlsys.org/Conferences/2019/doc/2019/demo_12.pdf"
    }
  },
  {
    title: "CHOPT: Automated Hyperparameter Optimization Framework for Cloud-Based Machine Learning Platforms",
    author: "Jinwoong Kim, Minkyu Kim, Heungseok Park, Ernar Kusdavletov, Dongjun Lee, Adrian Kim, Ji-Hoon Kim, Jung-Woo Ha, and Nako Sung",
    venue: "arXiv",
    date: "2018",
    image: "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/thumbnails/CHOPT.png?raw=true",
    linkItem: {
      paper: "https://arxiv.org/abs/1810.03527",
      deview: "https://tv.naver.com/v/4584592"
    }
  },
  {
    title: "NSML: Meet the MLaaS platform with a real-world case study",
    author: "Hanjoo Kim, Minkyu Kim, Dongjoo Seo, Jinwoong Kim, Heungseok Park, Soeun Park, Hyunwoo Jo, KyungHyun Kim, Youngil Yang, Youngkwan Kim, Nako Sung, and Jung-Woo Ha",
    venue: "arXiv",
    date: "2018",
    image: "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/thumbnails/NSML.png?raw=true",
    linkItem: {
      paper: "https://arxiv.org/abs/1810.09957",
      deview: "https://tv.naver.com/v/4584592",
    }
  },
  {
    title: "What makes a Successful Course at MOOCs? The Effects of the Structural Positions in Review Networks on the Course's Popularity and Satisfaction",
    author: "Heungseok Park and Wonjae Lee",
    venue: "Master Thesis",
    date: "2018",
    image: "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/thumbnails/master_thesis.png?raw=true",
    linkItem: {
      paper: "http://library.kaist.ac.kr/search/detail/view.do?bibCtrlNo=733784&flag=dissertation"
    }
  },
  {
    title: "NetSet: A Systematic integration of visualization for analyzing set intersections with network",
    author: "Heungseok Park, Hongjun Lim, Wonjae Lee, and Kyungwon Lee",
    venue: "In Proc. IEEE Pacific Visualization Symposium (PacificVis)",
    date: "2017",
    image: "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/thumbnails/netset_paper.png?raw=true",
    linkItem: {
      paper: "https://ieeexplore.ieee.org/document/8031575",
      video: "https://www.youtube.com/watch?v=JCwPI2w7UbU",
    }
  },
  {
    title: "Extracting Placeness from Social Media: an Ontology-Based System",
    author: "Jee Jung Choi, Jungmin Kim, Heungseok Park, and Wonjae Lee, ",
    venue: "In Proc. IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM)",
    date: "2017",
    image: "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/thumbnails/placeness.png?raw=true",
    linkItem: {
      paper: "https://dl.acm.org/citation.cfm?id=3116198",
    }
  },
  {
    title: "Interactive Visualization for Analyzing Sets in Large Networks",
    author: "Heungseok Park, Hongjun Lim, and Kyungwon Lee",
    venue: "Poster, IEEE VIS Conference, Visualization in Data Science (VDS) Symposium",
    date: "2015",
    image: "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/thumbnails/netset_poster.png?raw=true",
    linkItem: {
      poster: "https://drive.google.com/open?id=0B0rjoVKRVsodQURSUkp6TFcwalE",
    }
  }
];

const presentationItems = [ 
  {
    title: "Beyond TensorBoard: Sharing experience in developing interactive visual analytics services for AutoML (Korean)",
    author: "Heungseok Park",
    venue: "Naver Corporation",
    date: "2018",
    image: "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/thumbnails/fe_devtalk_automl.png?raw=true",
    linkItem: {
      video: "https://www.youtube.com/watch?v=49af9705nFE&t=11s",
      slides: "https://www.slideshare.net/NaverEngineering/beyond-tensorboard-automl-interactive-visual-analytics",
    }
  },
]

const BioItem = (props) => {
  const { item: { title, subTitle, description, duration, links }} = props;
  return(
    <div className="bio-item-wrapper">
      <div className="bio-item">
        <div className="main">
          <div className="title">{links ? <a href={links} target="_blank">{title}</a> : title}</div>
          <div className='sub-title'>{subTitle}</div>
          
        </div>               
        <div className="sub">
          {duration}
        </div>
      </div>
      <div className='description'>{Array.isArray(description) ? <ul>{description.map((d, i) => (<li key={i}>{d}</li>))}</ul> : description}</div>
    </div>
  )
}

const PaperItem = (props) => {
  const { item: { title, author, venue, image, date, linkItem }} = props;
  const authors = author.split(',');
  return(
    <div className="paper-item">
      <div className="teaserImg" style={{
        backgroundImage: `url("${image}")`
      }}>
      </div>
      <div className="main">
        <div className="mainItem">
          <div className="title">{title}</div>
          <div>
            {
              authors.map((d, i) =>
                <span
                  key={d}
                  style={{ fontWeight: d.trim() === "Heungseok Park" ? 800: "unset" }}
                >
                  {i === authors.length-1 ? d : `${d}, `}
                </span>
              )
                }
          </div>
          <div className="venue">{venue}</div>
          {
            linkItem && <div className="linkItems">
              {Object.keys(linkItem).map(type => <div key={linkItem[type]}><a target="_blank" href={linkItem[type]}>{type}</a></div>)}
            </div>
          }
        </div>
        <div className="sub">
          {date}
        </div>
      </div>
    </div>
  )
}

export default function MainPage() {
  return(
    <div className="container">
      <div className="header">
        <h1 className="title">
          <a href="https://heungseok.github.io/">Heungseok Park</a>
          <div></div>
        </h1>
        <div className="header-items">
          {/* <a href="https://github.com/heungseok/heungseok.github.io/raw/master/src/documents/CV_HeungseokPark.pdf">CV (PDF)</a> */}
          <a href="/static/documents/CV_HeungseokPark.pdf">CV (PDF)</a>
        </div>        
      </div>
      <div className="contents flex row">
        <div className="profile">
          <ProfileImage />
        </div>
        <div className="bio">
          <div className="intro">
            <p>
              Hi! I'm a data visualization researcher and engineer at <a href="https://www.navercorp.com/">NAVER Corporation</a>.
              I have build various visual analytics systems and machine learning platform called NSML, in which internal users (1,000+) at the NAVER and LINE can build machine learning models with experiment tracking, model management, and optimization.
              The goal of my career is to design visualizations to assist people in understand and interpret AI more easily, making it more accessible.
              {/* I was interested in data analysis since undergraduate years, specifically in information visualization, 
              and love the quote that “Never trust summary statistics alone, always visualize your data”. */}
            </p>
            <a href="https://scholar.google.com/citations?user=Shc__D8AAAAJ">Google Scholar</a>, <a href="https://www.linkedin.com/in/heungseok2/">LinkedIn</a>, <a href="mailto:heungseok2@gmail.com">heungseok2 at gmail</a>
          </div>
        </div>
      </div>

      <div className="contents flex row">
        <div className="bio full-width">
        <div>
            <h3>Work Experience</h3>
            {
              experienceItems.map(d => <BioItem key={d.title} item={d} />)
            }
          </div>
          <div>
            <h3>Education</h3>
            {
              educationItems.map(d => <BioItem key={d.title} item={d} />)
            }
          </div>
        </div>
      </div>

      <div className="contents flex row">
        <div className="bio full-width">
          <div>
            <h3>Publications</h3>
            {
              paperItems.map(d => <PaperItem key={d.title} item={d} />)
            }
          </div>

          <div>
            <h3>Talks</h3>
            {
              presentationItems.map(d => <PaperItem key={d.title} item={d} />)
            }
          </div>
        </div>
      </div>
          
    </div>
  )
}