const activitiesData = [
  {
    id: 1,
    number: "01",
    title: "การซ่อมบำรุงระบบเซิร์ฟเวอร์และโปรแกรม Handy Cafe",
    topic: "System Recovery & Maintenance",
    location: "ศูนย์ ICT ชุมชน",
    description: "ดำเนินการตรวจสอบและแก้ไขระบบเซิร์ฟเวอร์เดิมที่ขัดข้อง ให้กลับมาทำงานได้เป็นปกติ พร้อมทั้งปรับปรุงการตั้งค่าโปรแกรม Handy Cafe เพื่อให้การควบคุมเครื่องลูกข่ายและจัดการเวลาการใช้งานในศูนย์ ICT กลับมาใช้งานได้อย่างมีประสิทธิภาพ",
    learning: "ได้ทักษะการวิเคราะห์หาสาเหตุของปัญหา (Troubleshooting) ในระบบที่มีอยู่เดิม และการกู้คืนระบบให้กลับมาทำงานได้ (System Recovery)",
    image: "public/images/activities/จัดการระบบเซิฟเวอร์และ Handy Cafe.jpg"
  },
  {
    id: 2,
    number: "02",
    title: "การแก้ไขปัญหาเครื่องคอมพิวเตอร์ทำงานช้า",
    topic: "System Optimization",
    location: "ศูนย์ ICT ชุมชน",
    description: "วิเคราะห์และแก้ไขปัญหาเครื่องคอมพิวเตอร์ที่มีอาการทำงานช้า โดยใช้เครื่องมือ Defragment เพื่อจัดเรียงข้อมูลในฮาร์ดดิสก์ให้เป็นระเบียบ และการจัดการ Windows Services เพื่อปิดโปรแกรมและบริการที่ไม่จำเป็นในเบื้องหลัง ทำให้เครื่องกลับมาทำงานได้อย่างรวดเร็ว",
    learning: "เรียนรู้วิธีการเพิ่มประสิทธิภาพ (Optimization) ของระบบปฏิบัติการ Windows และการจัดการทรัพยากรเครื่องอย่างถูกวิธี",
    image: "public/images/activities/แก้ไขปัญหาเครื่องช้า.jpg"
  },
  {
    id: 3,
    number: "03",
    title: "การสอนประชาชนใช้งานคอมพิวเตอร์และสืบค้นข้อมูล",
    topic: "Digital Literacy Training",
    location: "ศูนย์ ICT ชุมชน",
    description: "เป็นวิทยากรอาสาให้คำแนะนำและสอนประชาชนในชุมชนให้สามารถใช้งานคอมพิวเตอร์เบื้องต้น รวมถึงเทคนิคการค้นหาสื่อและข้อมูลที่มีประโยชน์จากอินเทอร์เน็ต เพื่อให้สามารถนำความรู้ไปประยุกต์ใช้ในชีวิตประจำวันและประกอบอาชีพได้",
    learning: "พัฒนาทักษะการถ่ายทอดความรู้ทางเทคนิคให้เข้าใจง่าย (Communication Skill) และสร้างจิตสาธารณะในการช่วยเหลือชุมชน",
    image: "public/images/activities/สอนประชาชนใช้คอมพิวเตอร์ค้นหาสื่อ.jpg"
  },
  {
    id: 4,
    number: "04",
    title: "การส่งเสริมการใช้เทคโนโลยีสำหรับผู้สูงอายุ",
    topic: "Inclusive Technology",
    location: "ชุมชนเทศบาลเมืองเสาธงหิน",
    description: "ลงพื้นที่ให้คำแนะนำและสอนผู้สูงอายุในชุมชนให้สามารถใช้งาน Smart TV และอุปกรณ์ดิจิทัลต่างๆ ได้อย่างถูกต้อง เพื่อให้ท่านสามารถเข้าถึงข้อมูลข่าวสารและความบันเทิง ลดช่องว่างทางเทคโนโลยีระหว่างวัย",
    learning: "เข้าใจหลักการออกแบบการสอนให้เหมาะสมกับกลุ่มผู้ใช้งานที่มีความต้องการพิเศษ (UX for Seniors) และการสร้างปฏิสัมพันธ์ที่ดีกับคนในชุมชน",
    image: "public/images/activities/สอนผู้สูงอายุใช้โทรทัศน์.jpg"
  },
  {
    id: 5,
    number: "05",
    title: "รอเพิ่มข้อมูลกิจกรรม",
    topic: "Pending",
    location: "-",
    description: "กิจกรรมที่ 5 กำลังดำเนินการจัดเก็บข้อมูล...",
    learning: "-",
    image: "https://via.placeholder.com/800x450?text=Coming+Soon"
  },
  {
    id: 6,
    number: "06",
    title: "รอเพิ่มข้อมูลกิจกรรม",
    topic: "Pending",
    location: "-",
    description: "กิจกรรมที่ 6 กำลังดำเนินการจัดเก็บข้อมูล...",
    learning: "-",
    image: "https://via.placeholder.com/800x450?text=Coming+Soon"
  },
  {
    id: 7,
    number: "07",
    title: "รอเพิ่มข้อมูลกิจกรรม",
    topic: "Pending",
    location: "-",
    description: "กิจกรรมที่ 7 กำลังดำเนินการจัดเก็บข้อมูล...",
    learning: "-",
    image: "https://via.placeholder.com/800x450?text=Coming+Soon"
  },
  {
    id: 8,
    number: "08",
    title: "รอเพิ่มข้อมูลกิจกรรม",
    topic: "Pending",
    location: "-",
    description: "กิจกรรมที่ 8 กำลังดำเนินการจัดเก็บข้อมูล...",
    learning: "-",
    image: "https://via.placeholder.com/800x450?text=Coming+Soon"
  },
  {
    id: 9,
    number: "09",
    title: "รอเพิ่มข้อมูลกิจกรรม",
    topic: "Pending",
    location: "-",
    description: "กิจกรรมที่ 9 กำลังดำเนินการจัดเก็บข้อมูล...",
    learning: "-",
    image: "https://via.placeholder.com/800x450?text=Coming+Soon"
  },
  {
    id: 10,
    number: "10",
    title: "รอเพิ่มข้อมูลกิจกรรม",
    topic: "Pending",
    location: "-",
    description: "กิจกรรมที่ 10 กำลังดำเนินการจัดเก็บข้อมูล...",
    learning: "-",
    image: "https://via.placeholder.com/800x450?text=Coming+Soon"
  }
];
