# 🏗️ Architecture Documentation (Vanilla JS)

เอกสารนี้อธิบายโครงสร้างทางเทคนิคของโปรเจกต์ ICT Portfolio ในเวอร์ชัน HTML/CSS/JS

## 🛠️ Technical Architecture
โปรเจกต์นี้ใช้สถาปัตยกรรมแบบ **Static Site with Dynamic Rendering** ซึ่งหมายความว่าหน้าเว็บเป็นไฟล์ HTML คงที่ แต่เนื้อหาบางส่วนจะถูกสร้างขึ้นด้วย JavaScript เมื่อโหลดหน้าเว็บ

### 1. Database & Data Management (Flat-File & Asset-Based Database)
เนื่องจากโปรเจกต์นี้เป็น Static Website เราจึงใช้แนวทางการจัดการข้อมูลแบบ **Flat-File Database** และ **Asset-Based Storage** แทนการใช้ Database Server (เช่น MySQL หรือ MongoDB) เพื่อให้เว็บไซต์ทำงานได้รวดเร็วที่สุดและง่ายต่อการ Deploy

#### 📂 ระบบการจัดเก็บข้อมูล (Data Storage Strategy)
เราแบ่งการจัดเก็บข้อมูลออกเป็น 2 ส่วนหลัก เพื่อให้ระบบมีการจัดการที่เป็นระเบียบ:

**1. Structured Data (ข้อมูลเชิงโครงสร้าง):**
เก็บข้อมูลในรูปแบบ **JSON-like Array of Objects** ภายในไฟล์ JavaScript เพื่อทำหน้าที่เป็น "ฐานข้อมูล" ของเว็บไซต์
- **กิจกรรม (Activities):** จัดเก็บใน `/js/activities.js` (ประกอบด้วย id, title, topic, description, learning, image path)
- **แกลเลอรี (Gallery):** จัดเก็บใน `/js/main.js` (รายการไฟล์รูปภาพในโฟลเดอร์ `/album`)
- **ข้อดี:** สามารถแก้ไขเนื้อหา เพิ่ม/ลบ ข้อมูลได้ทันทีโดยไม่ต้องแก้ไขโครงสร้าง HTML

**2. Asset-Based Storage (การจัดเก็บทรัพยากรและรูปภาพ):**
เราใช้ระบบ **Directory-Based Mapping** ในการเก็บรูปภาพ โดยแยกหมวดหมู่ชัดเจนในโฟลเดอร์ `/public/images/` เพื่อให้ง่ายต่อการเรียกใช้และการจัดการไฟล์:
- `/activities/` : เก็บรูปภาพประกอบกิจกรรมแต่ละรายการ
- `/profile/` : เก็บรูปภาพประวัติส่วนตัว
- `/ict/` : เก็บรูปภาพบรรยากาศศูนย์ ICT
- `/tech/` : เก็บรูปภาพด้านเทคโนโลยีและนวัตกรรม
- `/album/` : เก็บรูปภาพทั้งหมดสำหรับหน้า Gallery

#### 🚀 เหตุผลที่เลือกใช้แนวทางนี้:
- **Performance:** ข้อมูลทั้งหมดถูกโหลดพร้อมกับ Script ทำให้การแสดงผลเกิดขึ้นทันที (Zero Latency) ไม่ต้องรอการตอบกลับจาก API Server
- **Simplicity & Reliability:** ไม่จำเป็นต้องตั้งค่า Server-side หรือจัดการ Database Connection ลดจุดเสี่ยงที่ระบบจะขัดข้อง (No Single Point of Failure)
- **Data Decoupling:** มีการแยกข้อมูล (Data Layer) ออกจากตรรกะการทำงาน (Logic Layer) และส่วนการแสดงผล (Presentation Layer) อย่างชัดเจน ตามหลักการพัฒนาซอฟต์แวร์ที่ดี

### 2. Rendering Logic (`/js/main.js`)
ฟังก์ชันหลักในการทำงาน:
- **DOM Manipulation:** ใช้ `document.getElementById` และ `appendChild` เพื่อนำข้อมูลจากฐานข้อมูลไฟล์ JS มาสร้างเป็น HTML Elements แบบ Dynamic
- **Loop Logic:** ใช้ `.forEach()` วนลูปข้อมูล และใช้เงื่อนไข `index % 2 === 0` เพื่อสลับฝั่งรูปภาพและข้อความ (Alternating Layout)

### 3. Responsive Design Strategy
เราใช้กลยุทธ์ **Adaptive Layout** ด้วย CSS:
- **Mobile-First:** เขียนสไตล์หลักสำหรับมือถือ และใช้ `@media (max-width: 768px)` เพื่อปรับแต่งเฉพาะจุด
- **Flexbox & Grid:** 
    - `display: flex` พร้อม `flex-direction: column` ในมือถือ และ `row` ในคอมพิวเตอร์
    - `grid-template-columns: repeat(auto-fit, ...)` เพื่อให้การ์ดปรับจำนวนคอลัมน์ตามความกว้างหน้าจอโดยอัตโนมัติ
- **Fixed Navbar:** ใช้ `position: fixed` พร้อม `backdrop-filter: blur` เพื่อให้เมนูอยู่ด้านบนเสมอและดูทันสมัย

## 🎨 Design System
- **Color Palette:**
    - Primary: `#0a192f` (Dark Navy)
    - Accent: `#00d2ff` (Accent Blue)
    - Text: `#e6f1ff` (Main), `#8892b0` (Muted)
- **Typography:** ใช้ Font 'Sarabun' จาก Google Fonts ซึ่งเป็นฟอนต์มาตรฐานที่อ่านง่ายและดูเป็นมืออาชีพในภาษาไทย
- **Spacing:** ใช้ระบบ Padding และ Margin ที่สม่ำเสมอ (Rem unit) เพื่อให้เกิด Visual Balance
