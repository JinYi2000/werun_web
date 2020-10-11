<template>
  <div style="position: relative">
    <div class="header">
      <img id="logo" src="https://i.loli.net/2020/09/23/O9CUbHKVoPci7q3.png" />
      <div class="name">
        <span>WERUN</span>
        <br />
        <span>C L U B</span>
      </div>
      <div id="headerTitle"><p>科研成果</p></div>
    </div>
    <article id="article">
      <div id="research" v-for="(item, index) in researchList">
        <img class="research_img" :src="item.picSrc" />
        <div class="research_box">
          <span class="research_title">{{ item.context }}</span>
          <div>
            <span class="research_content">{{ item.content }}</span>
          </div>
        </div>
      </div>
    </article>
    <div id="footer">
      <myFooter></myFooter>
    </div>
  </div>
</template>
<script>
import myHeader from "@/components/header";
import myFooter from "@/components/footer";
export default {
  data() {
    return {
      researchList: [
        {
          picSrc: "https://i.loli.net/2020/09/23/1hf6wYcr2ZyMsvi.png",
          context: "针对小文件的二级缓存预取的云存储框架及构建方法",
          content:
            "多模态学习多模态学习研究的是如何同时基于视频、图像、文本、语音等不同模态的数据进行学习，这类技术能让 AI 更全面地学习有关这个世界的知识，也因此被认为是 AI 发展的未来方向，在自动驾驶、机器人、医疗和数字助理等领域都有重要的应用前景。多模态学习是腾讯 AI Lab 的重点研究领域之一，也是腾讯 AI Lab 近来重点研发的数字人的核心技术，今年有 4 篇相关论文被 ECCV 2020 接收，其涵盖的主题主要是视频/图像与文本的多模态学习。1. 针对视频中时序句子定位和事件描述任务的学习模态间交互Learning Modality Interaction for Temporal Sentence Localization and Event Captioning in Videos本文为 ECCV 2020 Spotlight 论文，由腾讯 AI Lab 与复旦大学合作完成，提出了一种用于描述并定位视频事件的视频-文本多模态学习新方法。自动生成描述事件的句子并在视频中定位句子的位置这两个重要任务连接了语言和视频两大领域。近期的技术多通过使用现成的视频特征来利用视频的多模态本质，但却很少探讨模态之间的交互。",
        },

        {
          picSrc: "https://i.loli.net/2020/09/23/RMYdVtFePlWZ9av.jpg",
          context:
            "A method of Text extremum region Extraction based on Joint-Channels",
        },
        {
          picSrc: "https://i.loli.net/2020/09/23/Qx6wHgIWF8P3sTU.jpg",
          context:
            "MMLUP: Multi-source & Multi-task Learning for User Profiles in Social Network",
        },
        {
          picSrc: "https://i.loli.net/2020/09/23/Qx6wHgIWF8P3sTU.jpg",
          context:
            "SNES: Social-network-oriented Public Opinion Monitoring Platform Based on ElasticSearch",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
  components: {
    myHeader,
    myFooter,
  },
};
</script>
<style scoped>
h1 {
  margin-top: 150px;
  font-size: 45px;
}
#article {
  width: 1000px;
  margin: 220px auto 50px;
}
#research {
  height: 350px;
  display: flex;
  padding: 0 50px 0;
  background: rgb(250, 250, 250);
  border: solid 1px #0d3590;
  margin: 10px;
}
.research_img {
  width: 220px;
  float: left;
  align-self: center;
}
.research_box {
  width: 650px;
  margin: 20px 0 20px 30px;
}
.research_title {
  font-size: 20px;
  font-weight: bold;
  color: #0d3590;
}
.research_box div {
  text-align: left;
  margin: 10px auto;
}
.research_content {
  font-size: 15px;
}
.header {
  height: 170px;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 5;
  background-color: white;
  transition: background-color 0.5s linear;
}
#headerTitle {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 20px;
  color: #0d3590;
  font-size: 40px;
  font-weight: bold;
}
#logo {
  margin-top: 70px;
  width: 50px;
  height: 50px;
  float: left;
  margin-left: 195px;
}
.name {
  float: left;
  margin-top: 67px;
  margin-left: 20px;
  color: #0d3590;
  font-size: 20px;
  font-weight: bold;
}
#footer {
  height: 270px;
  background-color: #0d3590;
}
</style>