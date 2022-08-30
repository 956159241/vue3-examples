<template>
    <div>
      <h1 :data-aos="item < 96 ? item % 2 === 0 ? 'zoom-in-up' : 'zoom-in-up' : 'zoom-in-up'" v-for="(item, index) in 100" :key="index">这是子组件页面11 {{ item }}</h1>
        <div style="height: 100px"></div>
    </div>

    <div>
        <h1>测试第二部分</h1>
        <article data-aos="fade-up" v-for="item in 100" :key="item">
            测试{{ item }}
        </article>
    </div>
    </template>
    
    <script lang="ts" setup>
    import { onMounted } from 'vue';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    
    onMounted( async () => {
    AOS.init({ });
    });
    
    </script>