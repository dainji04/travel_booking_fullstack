<script setup lang="ts"></script>
<template>
    <div
        style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f8f9fc;
        "
    >
        <h1 class="error mx-auto" data-text="404">404</h1>
    </div>
</template>

<style>
.error {
    color: #5a5c69;
    font-size: 17rem; /* Đã chỉnh từ 7rem lên 17rem */
    position: relative;
    line-height: 1;
    width: 25rem; /* Tăng width để chứa vừa chữ số lớn */
    font-family: 'sf mono';
}

.error:before {
    content: attr(data-text);
    position: absolute;
    left: -4px; /* Tăng offset cho hiệu ứng mạnh hơn */
    text-shadow: 2px 0 #4e73df; /* Tăng độ đậm shadow */
    top: 0;
    color: #5a5c69;
    background: #f8f9fc;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim-2 3s infinite linear alternate-reverse;
}

.error:after {
    content: attr(data-text);
    position: absolute;
    left: 4px; /* Tăng offset cho hiệu ứng mạnh hơn */
    text-shadow: -2px 0 #e74a3b; /* Tăng độ đậm shadow */
    top: 0;
    color: #5a5c69;
    background: #f8f9fc;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim 2s infinite linear alternate-reverse;
}

/* Điều chỉnh keyframes cho font lớn */
@keyframes noise-anim {
    0% {
        clip: rect(89px, 9999px, 200px, 0);
    }
    5% {
        clip: rect(135px, 9999px, 185px, 0);
    }
    10% {
        clip: rect(165px, 9999px, 190px, 0);
    }
    15% {
        clip: rect(50px, 9999px, 160px, 0);
    }
    20% {
        clip: rect(125px, 9999px, 185px, 0);
    }
    25% {
        clip: rect(150px, 9999px, 200px, 0);
    }
    30% {
        clip: rect(155px, 9999px, 165px, 0);
    }
    35% {
        clip: rect(120px, 9999px, 180px, 0);
    }
    40% {
        clip: rect(80px, 9999px, 195px, 0);
    }
    45% {
        clip: rect(145px, 9999px, 175px, 0);
    }
    50% {
        clip: rect(110px, 9999px, 185px, 0);
    }
    55% {
        clip: rect(70px, 9999px, 200px, 0);
    }
    60% {
        clip: rect(120px, 9999px, 160px, 0);
    }
    65% {
        clip: rect(150px, 9999px, 190px, 0);
    }
    70% {
        clip: rect(90px, 9999px, 195px, 0);
    }
    75% {
        clip: rect(140px, 9999px, 180px, 0);
    }
    80% {
        clip: rect(60px, 9999px, 165px, 0);
    }
    85% {
        clip: rect(120px, 9999px, 175px, 0);
    }
    90% {
        clip: rect(130px, 9999px, 150px, 0);
    }
    95% {
        clip: rect(90px, 9999px, 180px, 0);
    }
    100% {
        clip: rect(80px, 9999px, 200px, 0);
    }
}

@keyframes noise-anim-2 {
    /* Thêm keyframe tương tự cho animation thứ 2 */
    0% {
        clip: rect(100px, 9999px, 210px, 0);
    }
    5% {
        clip: rect(140px, 9999px, 190px, 0);
    }
    10% {
        clip: rect(160px, 9999px, 195px, 0);
    }
    15% {
        clip: rect(60px, 9999px, 170px, 0);
    }
    20% {
        clip: rect(130px, 9999px, 190px, 0);
    }
    25% {
        clip: rect(155px, 9999px, 205px, 0);
    }
    30% {
        clip: rect(160px, 9999px, 170px, 0);
    }
    35% {
        clip: rect(125px, 9999px, 185px, 0);
    }
    40% {
        clip: rect(85px, 9999px, 200px, 0);
    }
    45% {
        clip: rect(150px, 9999px, 180px, 0);
    }
    50% {
        clip: rect(115px, 9999px, 190px, 0);
    }
    55% {
        clip: rect(75px, 9999px, 205px, 0);
    }
    60% {
        clip: rect(125px, 9999px, 165px, 0);
    }
    65% {
        clip: rect(155px, 9999px, 195px, 0);
    }
    70% {
        clip: rect(95px, 9999px, 200px, 0);
    }
    75% {
        clip: rect(145px, 9999px, 185px, 0);
    }
    80% {
        clip: rect(65px, 9999px, 170px, 0);
    }
    85% {
        clip: rect(125px, 9999px, 180px, 0);
    }
    90% {
        clip: rect(135px, 9999px, 155px, 0);
    }
    95% {
        clip: rect(95px, 9999px, 185px, 0);
    }
    100% {
        clip: rect(85px, 9999px, 205px, 0);
    }
}
</style>
