<template>
<v-container style="font-family: 'Sarabun', sans-serif;">
    <v-layout  wrap class="mt-1 mb-5 text-xs-left" xs12>
        <v-flex xs3 wrap>
            <h3 class="black--text">
                ที่ปรึกษาโครงการ
            </h3>
            <span class="gray--text">
        1. อาจารย์ รศ.ดร.ศันสนีย์ เอื้อพันธ์วิริยะกุล
        <br>
2. อาจารย์ รศ.ดร.นิพนธ์ ธีรอำพน

    </span>
            <h3 class="black--text">
                ฝ่ายประสานงานและประชาสัมพันธ์
            </h3>
            <span class="gray--text">
                    1. พนาสนฑ์ มโนรส
                    <br>
2. พรวิชชา​ สมทรัพย์
<br>
3. รวีวรรณ ชัยสุพัฒนากุล
<br>
4. สุภชาญา ประธาน
<br>
5. กานต์ชนา ปัญญา
<br>
6. ว่าที่ ร.ต.หญิงพรสวรรค์ อัศววุฒิไกร
                </span>

        </v-flex>
        <v-flex xs3 wrap>
            <h3 class="black--text">
                อาสาสมัครติดตั้งเครื่องตรวจจับควันไฟ
            </h3>
            <span class="gray--text">
                1. ปกรณ์ แสงงาม
                <br>
2. ณัฐพงษ์ ปัญญา
<br>
3. ปิยะณัฐ บุหรัน
<br>
4. สุภชาญา ประธาน
<br>
5. ธนาคม หัสแดง
<br>
6. วิธวินท์ อัจฉริยวิริยะ
<br>
7. พนาสนฑ์ มโนรส
<br>
8. ณัฐภัทร การะเกษ
<br>
9. Wassim TENACHI
<br>
10. Méline KIEFFER
<br>
11. Lucas LO GIUDICE
<br>
12. Nathn MANISCALCO
<br>
13. Zegui FOKY
<br>
14. Mourad EL OUALKADI
<br>
15. ภาณุวิทย์ ผลเกิด
<br>
16. พรวิชชา​ สมทรัพย์
<br>
    </span>

        </v-flex>
        <v-flex xs3 wrap>
            <h3 class="black--text">
                ผู้พัฒนาอุปกรณ์ Smoke Detectors
            </h3>
            <span class="gray--text">
1. สมนึก สุระธง
<br>
2. นายจักรภพ ใหม่เสน
<br>
3. ฤทธิพงศ์ วงค์เขื่อนแก้ว
<br>
4. กิตติยา ทุ่นศิริ
<br>
5. สุรักษ์ อุดมสม
<br>
6. พนาสนฑ์ มโนรส
<br>
7. ณัฐภัทร การะเกษ
<br>
8. พรวิชชา​ สมทรัพย์
<br>
9. สุภชาญา ประธาน
<br>
10. ธนาคม หัสแดง
<br>
11. ปกรณ์ แสงงาม
<br> 
12. อภิวัฒน์ บุตรวงค์

    </span>

        </v-flex>

        <v-flex xs3 wrap>
            <h3 class="black--text">
                ผู้พัฒนาซอฟต์แวร์เว็บไซต์และอัลกอริทึมเบื้องหลัง
            </h3>
            <span class="gray--text">
1. ภาณุวิทย์ ผลเกิด
<br>
2. ณัฐภัทร การะเกษ
<br>
3. พรวิชชา​ สมทรัพย์
<br>
4. รัชชานนท์ สมทา
<br>
5. นันทวัฒน์  วิเศษทรัพย์
    </span>

        </v-flex>


    </v-layout>
    <v-flex mb-3>
        <div wrap>
            <h3 class="black--text text-xs-left">ออกแบบโลโก้โดย
                <span class="gray--text"  >สุชาดา ยอดอยู่ดี และ ปัณณวิชญ์ พันธ์วงศ์
                    <br>
                    <span class="black--text" >ขอขอบคุณพิเศษ</span>
                พี่น้อง ผู้ใหญ่บ้านดงช้างแก้ว, พี่แอน รองผู้ใหญ่บ้านดงช้างแก้ว, พี่แนน ผู้ประสานงาน และเจ้าหน้าที่ที่ไม่ได้เอ่ยนาม ที่คอยช่วยเหลือและประสานงานในการติดตั้งเครื่องตรวจจับไฟป่าที่เสมิงใต้
                </span>
            </h3>
        </div>

    </v-flex>
    <v-divider></v-divider>

    <v-layout wrap row justify-center>
        <img src="@/img/CILab_logo.png" class="ma-3 team" >
        <img src="@/img/AIS-logo-1.png" class="ma-3 team">
        <img src="@/img/Chiang_Mai_University_Logo.png" class="ma-3 team">
        <img src="@/img/logo-th.png" class="ma-3 team">
    </v-layout>

</v-container>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kanit|Sarabun:100,400&display=swap');

v-container {
    font-family: 'Sarabun', sans-serif;
}

.img-circle {
    border-radius: 50%;
}

img.team {
    display: block;
    max-width: 200px;
    width: auto;
    height: auto;
}
</style>
