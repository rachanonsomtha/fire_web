<template>
<v-container style="font-family: 'Sarabun', sans-serif;">
    <v-layout wrap class="mt-1 mb-5 text-xs-left" xs12 sm6 md3>
        <v-flex xs12 sm6 md3 wrap>
            <h3 class="black--text">ที่ปรึกษาโครงการ</h3>
            <span class="black--text">
                1. อาจารย์ รศ.ดร.ศันสนีย์ เอื้อพันธ์วิริยะกุล
                <br />2. อาจารย์ รศ.ดร.นิพนธ์ ธีรอำพน
            </span>
            <h3 class="black--text">ฝ่ายประสานงานและประชาสัมพันธ์</h3>
            <span class="black--text">
                1. พนาสนฑ์ มโนรส
                <br />2. พรวิชชา​ สมทรัพย์
                <br />3. รวีวรรณ ชัยสุพัฒนากุล
                <br />4. สุภชาญา ประธาน
                <br />5. กานต์ชนา ปัญญา
                <br />6. ว่าที่ ร.ต.หญิงพรสวรรค์ อัศววุฒิไกร
            </span>
        </v-flex>
        <v-flex xs12 sm6 md3 wrap>
            <h3 class="black--text">อาสาสมัครติดตั้งเครื่องตรวจจับควันไฟ</h3>
            <span class="black--text">
                1. ปกรณ์ แสงงาม
                <br />2. ณัฐพงษ์ ปัญญา
                <br />3. ปิยะณัฐ บุหรัน
                <br />4. สุภชาญา ประธาน
                <br />5. ธนาคม หัสแดง
                <br />6. วิธวินท์ อัจฉริยวิริยะ
                <br />7. พนาสนฑ์ มโนรส
                <br />8. ณัฐภัทร การะเกษ
                <br />9. Wassim TENACHI
                <br />10. Méline KIEFFER
                <br />11. Lucas LO GIUDICE
                <br />12. Nathn MANISCALCO
                <br />13. Zegui FOKY
                <br />14. Mourad EL OUALKADI
                <br />15. ภาณุวิทย์ ผลเกิด
                <br />16. พรวิชชา​ สมทรัพย์
                <br />
            </span>
        </v-flex>
        <v-flex xs12 sm6 md3 wrap>
            <h3 class="black--text">ผู้พัฒนาอุปกรณ์ Smoke Detectors</h3>
            <span class="black--text">
                1. สมนึก สุระธง
                <br />2. จักรภพ ใหม่เสน
                <br />3. ฤทธิพงศ์ วงค์เขื่อนแก้ว
                <br />4. กิตติยา ทุ่นศิริ
                <br />5. สุรักษ์ อุดมสม
                <br />6. พนาสนฑ์ มโนรส
                <br />7. ณัฐภัทร การะเกษ
                <br />8. พรวิชชา​ สมทรัพย์
                <br />9. สุภชาญา ประธาน
                <br />10. ธนาคม หัสแดง
                <br />11. ปกรณ์ แสงงาม
                <br />12. อภิวัฒน์ บุตรวงค์
                <br />13. ภาณุวิทย์ ผลเกิด
            </span>
        </v-flex>

        <v-flex xs12 sm6 md3 wrap>
            <h3 class="black--text">ผู้พัฒนาซอฟต์แวร์เว็บไซต์และอัลกอริทึมเบื้องหลัง</h3>
            <span class="black--text">
                1. ภาณุวิทย์ ผลเกิด
                <br />2. ณัฐภัทร การะเกษ
                <br />3. พรวิชชา​ สมทรัพย์
                <br />4. รัชชานนท์ สมทา
                <br />5. นันทวัฒน์ วิเศษทรัพย์
            </span>
        </v-flex>
    </v-layout>

    <v-flex xs12 mb-3 class="text-xs-left">
        <h3 class="black--text">ออกแบบโลโก้โดย</h3>
        <span class="black--text">สุชาดา ยอดอยู่ดี และ ปัณณวิชญ์ พันธ์วงศ์</span>
        <h3 class="black--text">ขอขอบคุณพิเศษ</h3>
        <span class="black--text">พี่น้อง ผู้ใหญ่บ้านดงช้างแก้ว, พี่แอน รองผู้ใหญ่บ้านดงช้างแก้ว, พี่แนน ผู้ประสานงาน และเจ้าหน้าที่ที่ไม่ได้เอ่ยนาม ที่คอยช่วยเหลือและประสานงานในการติดตั้งเครื่องตรวจจับไฟป่าที่เสมิงใต้</span>
    </v-flex>
    <v-divider></v-divider>
    <h2 class="black--text text-xs-left font-weight-bold">Sponsored by</h2>
    <v-layout row justify-center>
        <v-img contain aspect-ratio="1" :src="require('@/img/CILab_logo.png')" class="ma-1 team"></v-img>
        <v-img contain aspect-ratio="1" :src="require('@/img/AIS-logo-1.png')" class="ma-1 team"></v-img>
        <v-img contain aspect-ratio="1" :src="require('@/img/Chiang_Mai_University_Logo.png')" class="ma-1 team"></v-img>
        <v-img contain aspect-ratio="1" :src="require('@/img/logo-th.png')" class="ma-1 team"></v-img>
        <v-img contain aspect-ratio="1" :src="require('@/img/NGG.jpg')" class="ma-1 team"></v-img>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Kanit|Sarabun:100,400&display=swap");

v-container {
    font-family: "Sarabun", sans-serif;
}

.img-circle {
    border-radius: 50%;
}

v-img.team {
    display: block;
    max-width: 350px;
    max-height: 200px;
    width: auto;
    height: auto;
}
</style>
