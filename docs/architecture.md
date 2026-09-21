# 🏗️ Architecture Documentation (Vanilla JS)

เอกสารนี้อธิบายโครงสร้างทางเทคนิคของโปรเจกต์ ICT Portfolio ในเวอร์ชัน HTML/CSS/JS

## 🛠️ Technical Architecture
โปรเจกต์นี้ใช้สถาปัตยกรรมแบบ **Static Site with Dynamic Rendering** ซึ่งหมายความว่าหน้าเว็บเป็นไฟล์ HTML คงที่ แต่เนื้อหาบางส่วนจะถูกสร้างขึ้นด้วย JavaScript เมื่อโหลดหน้าเว็บ

### 1. Data Structure (`/js/activities.js`)
เพื่อให้เว็บไซต์สามารถพัฒนาต่อได้ง่าย เราจึงแยกข้อมูลออกจากหน้า HTML:
- ข้อมูลกิจกรรมถูกเก็บในรูปของ **Array of Objects** (`activitiesData`)
- วิธีนี้ทำให้การเพิ่มกิจกรรมใหม่ทำได้โดยการเพิ่ม Object เข้าไปใน Array เท่านั้น โดยไม่ต้องแก้ไข HTML ของทุกกิจกรรม

### 2. Rendering Logic (`/js/main.js`)
ฟังก์ชันหลักในการทำงาน:
- **DOM Manipulation:** ใช้ `document.getElementById` และ `appendChild` เพื่อนำข้อมูลจาก `activities.js` มาสร้างเป็น HTML Elements แบบ Dynamic
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
