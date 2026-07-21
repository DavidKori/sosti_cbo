// import { email } from "zod";
import { useNavigate } from "react-router-dom";

export const images = {
  image1:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667515/pexels-shvetsa-5029923_1_s2w1ie.jpg`,
  image2:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667514/pexels-alfomedeiros-11534117_1_tzvvhc.jpg`,
  image3:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667515/pexels-rdne-6646882_1_devld5.jpg`,
  image4:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667515/pexels-shvetsa-5029853_1_gty5ca.jpg`,

  image5:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667514/pexels-esmat-sediqi-227884109-25600494_1_yiqjmq.jpg`,
  image6:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667513/pexels-frostee-lens-ug-2150016714-35744764_1_gpakfk.jpg`,
  image7:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667514/pexels-mike-mijares-78163062-33651991_1_sjn3ro.jpg`,
  image8:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667512/pexels-farrow-photography-2153739185-33062143_1_fgyvsb.jpg`,
  image9:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667514/pexels-bilbaojl-4231781_1_d93d5t.jpg`,
  image10:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667514/pexels-alfomedeiros-11534117_1_tzvvhc.jpg`,
  image11:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667514/pexels-lagosfoodbank-8054617_1_j8gsox.jpg`,
  image12:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667515/pexels-najim-kurfi-483155737-17916511_1_k7fx0a.jpg`,
  image13:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667516/pexels-balazsimon-6873614_1_x1yvul.jpg`,
  image14:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667516/pexels-zeusdcreator-17902867_1_elywyi.jpg`,
  imageLogo:`https://res.cloudinary.com/dxritu7i3/image/upload/v1784667516/sostilogo_l1ryss.png`
}
export const sliderImages = [
    {   url:images.image4,
        title:'victor',
        description:'photo1'
    },
    {   url:images.image2,
        title:'Tree Planting',
        description:'photo2'

    },
    {   url:images.image3,
        title:'Togetherness',
        description:'photo3'

    }
]

export const mainSocials = {
  phoneNumber:'+254115685773',
  facebookLink:'',
  email:'mutugidavid37@gmail.com'
}

export const blogData = [
  {
    category: "Blog",
    blogTitle: "Empowering Young People Through Community Innovation",
    author: "Victor Victor",
    excerpt:
      "Young people are driving meaningful change in their communities by creating innovative solutions to local challenges. This article explores inspiring success stories and lessons learned from grassroots initiatives.",
    blogImgLink:
      images.image5,
    postDate: "Mon, June 17, 2026",
    blogPostLink: "",

  },
  {
    category: "Post",
    blogTitle: "Five Ways Technology is Transforming Youth Advocacy",
    author: "Victor Victor",
    excerpt:
      "Digital platforms have become powerful tools for advocacy, collaboration, and awareness. Discover how young leaders are using technology to influence policy and create lasting social impact.",
    blogImgLink:
      images.image7,
    postDate: "Wed, July 2, 2026",
    blogPostLink: "",
  },
  {
    category: "Blog",
    blogTitle: "Building Inclusive Spaces for Future Leaders",
    author: "Victor Victor",
    excerpt:
      "Creating inclusive environments enables young people from diverse backgrounds to develop leadership skills, share ideas, and contribute confidently to community development initiatives.",
    blogImgLink:
      images.image8,
    postDate: "Fri, August 14, 2026",
    blogPostLink: "",
  },
  {
    category: "Post",
    blogTitle: "Volunteer Stories That Inspire Positive Change",
    author: "Victor Victor",
    excerpt:
      "Behind every successful community project are dedicated volunteers whose passion fuels progress. Read about the experiences and impact of volunteers making a difference every day.",
    blogImgLink:
      images.image10,
    postDate: "Tue, September 8, 2026",
    blogPostLink: "",
  },
  {
    category: "Blog",
    blogTitle: "Why Collaboration Matters in Community Development",
    author: "Victor Victor",
    excerpt:
      "Strong partnerships between organizations, volunteers, and local communities create sustainable solutions. Learn how collaboration strengthens projects and maximizes long-term impact.",
    blogImgLink:
      images.image9,
    postDate: "Sat, October 3, 2026",
    blogPostLink: "",
  },
  {
    category: "post",
    blogTitle: "Lessons From Youth-Led Climate Action Projects",
    author: "Victor Victor",
    excerpt:
      "Across different regions, young environmental advocates are launching initiatives that promote sustainability, conservation, and climate awareness while inspiring others to get involved.",
    blogImgLink:
      images.image5,
    postDate: "Thu, November 19, 2026",
    blogPostLink: "",
  },
];

export const countyData = {
  "NAIROBI": {
    projects: 25,
    population: 4397073,
    status: "High",
  },

  "MOMBASA": {
    projects: 8,
    population: 1208333,
    status: "Medium",
  },

  "KWALE": {
    projects: 2,
    population: 866820,
    status: "Low",
  },

  "KILIFI": {
    projects: 0,
    population: 1453787,
    status: "Low",
  },

  "TANA RIVER": {
    projects: 0,
    population: 315943,
    status: "Low",
  },

  "LAMU": {
    projects: 0,
    population: 143920,
    status: "Low",
  },

  "TAITA TAVETA": {
    projects: 0,
    population: 340671,
    status: "Low",
  },

  "GARISSA": {
    projects: 0,
    population: 841353,
    status: "Low",
  },

  "WAJIR": {
    projects: 0,
    population: 781263,
    status: "Low",
  },

  "MANDERA": {
    projects: 0,
    population: 867457,
    status: "Low",
  },

  "MARSABIT": {
    projects: 0,
    population: 459785,
    status: "Low",
  },

  "ISIOLO": {
    projects: 0,
    population: 268002,
    status: "Low",
  },

  "MERU": {
    projects: 0,
    population: 1545714,
    status: "Low",
  },

  "THARAKA - NITHI": {
    projects: 0,
    population: 393177,
    status: "Low",
  },

  "EMBU": {
    projects: 0,
    population: 608599,
    status: "Low",
  },

  "KITUI": {
    projects: 0,
    population: 1136187,
    status: "Low",
  },

  "MACHAKOS": {
    projects: 0,
    population: 1421932,
    status: "Low",
  },

  "MAKUENI": {
    projects: 0,
    population: 987653,
    status: "Low",
  },

  "NYANDARUA": {
    projects: 0,
    population: 638289,
    status: "Low",
  },

  "NYERI": {
    projects: 0,
    population: 759164,
    status: "Low",
  },

  "KIRINYAGA": {
    projects: 0,
    population: 610411,
    status: "Low",
  },

  "MURANG'A": {
    projects: 0,
    population: 1056640,
    status: "Low",
  },

  "KIAMBU": {
    projects: 0,
    population: 2417735,
    status: "Low",
  },

  "TURKANA": {
    projects: 0,
    population: 926976,
    status: "Low",
  },

  "WEST POKOT": {
    projects: 0,
    population: 621241,
    status: "Low",
  },

  "SAMBURU": {
    projects: 0,
    population: 310327,
    status: "Low",
  },

  "UASIN GISHU": {
    projects: 0,
    population: 1163186,
    status: "Low",
  },

  "ELEGEYO-MARAKWET": {
    projects: 0,
    population: 454480,
    status: "Low",
  },

  "NANDI": {
    projects: 0,
    population: 885711,
    status: "Low",
  },

  "BARINGO": {
    projects: 0,
    population: 666763,
    status: "Low",
  },

  "LAIKIPIA": {
    projects: 0,
    population: 518560,
    status: "Low",
  },

  "NAKURU": {
    projects: 0,
    population: 2162202,
    status: "Low",
  },

  "NAROK": {
    projects: 0,
    population: 1157873,
    status: "Low",
  },

  "KAJIADO": {
    projects: 0,
    population: 1117840,
    status: "Low",
  },

  "KERICHO": {
    projects: 0,
    population: 901777,
    status: "Low",
  },

  "BOMET": {
    projects: 0,
    population: 875689,
    status: "Low",
  },

  "KAKAMEGA": {
    projects: 0,
    population: 1867579,
    status: "Low",
  },

  "VIHIGA": {
    projects: 2,
    population: 590013,
    status: "Low",
  },

  "BUNGOMA": {
    projects: 0,
    population: 1670570,
    status: "Low",
  },

  "BUSIA": {
    projects: 0,
    population: 893681,
    status: "Low",
  },

  "SIAYA": {
    projects: 0,
    population: 993183,
    status: "Low",
  },

  "HOMA BAY": {
    projects: 0,
    population: 1131950,
    status: "Low",
  },

  "MIGORI": {
    projects: 0,
    population: 1116436,
    status: "Low",
  },

  "KISII": {
    projects: 0,
    population: 1266860,
    status: "Low",
  },

  "NYAMIRA": {
    projects: 0,
    population: 605576,
    status: "Low",
  },

  "KISUMU": {
    projects: 14,
    population: 1155574,
    status: "Good",
  },

  "TRANS NZOIA": {
    projects: 0,
    population: 990341,
    status: "Low",
  },
};

export const eventsData = [
  {
    eventStatus:'attended',
    date: new Date().toDateString(),
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quas 
      accusamus sit pariatur architecto ipsam id dignissimos ipsum eveniet, 
      numquam neque accusantium? Illum deleniti quod consequatur qui esse, 
      illo aliquam suscipit quidem reiciendis numquam minima autem, cupiditate 
      rem tempore. Ipsa blanditiis
      delectus odio eligendi nulla voluptatem officiis error non pariatur.`,
    eventName:'Place Attended or upcoming event details here',
    eventLink:"/events",
    supportLink:'',
    county:'Kilifi',
    area:'Kilifi Town',
    email:mainSocials.email

  },
  {
    eventStatus:'upcoming',
    date : 'Sat, Oct 29, 2027',
    content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quas 
      accusamus sit pariatur architecto ipsam id dignissimos ipsum eveniet, 
      numquam neque accusantium? Illum deleniti quod consequatur qui esse, 
      illo aliquam suscipit quidem reiciendis numquam minima autem, cupiditate 
      rem tempore. Ipsa blanditiis
      delectus odio eligendi nulla voluptatem officiis error non pariatur.`,
    eventName:'Youth Awareness',
    eventLink:"/events",
    supportLink:'',
    county:'Nairobi',
    area:'Westlands',
    email:mainSocials.email

  },
  {
    eventStatus:'upcoming',
    date : 'Wed, Jan 29, 2027',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quas 
      accusamus sit pariatur architecto ipsam id dignissimos ipsum eveniet, 
      numquam neque accusantium? Illum deleniti quod consequatur qui esse, 
      illo aliquam suscipit quidem reiciendis numquam minima autem, cupiditate 
      rem tempore. Ipsa blanditiis
      delectus odio eligendi nulla voluptatem officiis error non pariatur.`,
    eventName:'Tree Planting',
    eventLink:"/events",
    supportLink:'',
    county:'Mombasa',
    area:'Township',
    email:mainSocials.email

  },
]

export const latestPost = () =>{ 
  const navigate = useNavigate()
  return ([
  {
    onClick:()=>navigate('/blog'),
    postTitle:'Five Ways Technology is Transforming Youth Advocacy',
    postType:'Post', 
    imgSrc:images.image4
  },
  {
    onClick:()=>navigate('/blog'),
    postTitle:'Empowering Young People Through Community Innovation',
    postType:'Blog', 
    imgSrc:images.image5
  },
  {
    onClick:()=>navigate('/blog'),
    postTitle:'Building Inclusive Spaces for Future Leaders',
    postType:'Blog', 
    imgSrc:images.image7
  }
])
}