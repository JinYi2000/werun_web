<template>
  <div>
    <div id="fieldsContent">
      <span id="title">研究方向</span>
      <div id="fieldsbody">
        <div class="first">
          <img src="@/assets/img/fields_1.png" alt="Web前端" />
          <div class="text">
            <h3 style="text-align:left; margin:0">Web前端</h3>
            <p
              style="text-align:left; margin:0"
            >计算机视觉使得计算机能够理解真实的视觉世界。研究方向：图像/视频编辑，生成，分析，理解；物体/人脸检测，跟踪，和识别；文字识别，3D视觉，SLAM，基于视觉的强化学习。</p>
          </div>
        </div>
        <div class="second">
          <img src="@/assets/img/fields_2.png" alt="Java后端" />
          <div class="text">
            <h3 style="text-align:left; margin:0">Java后端</h3>
            <p
              style="text-align:left; margin:0"
            >计算机视觉使得计算机能够理解真实的视觉世界。研究方向：图像/视频编辑，生成，分析，理解；物体/人脸检测，跟踪，和识别；文字识别，3D视觉，SLAM，基于视觉的强化学习。</p>
          </div>
        </div>
        <div class="third">
          <img src="@/assets/img/fields_3.png" alt="ACM算法" />
          <div class="text">
            <h3 style="text-align:left; margin:0">ACM算法</h3>
            <p
              style="text-align:left; margin:0"
            >计算机视觉使得计算机能够理解真实的视觉世界。研究方向：图像/视频编辑，生成，分析，理解；物体/人脸检测，跟踪，和识别；文字识别，3D视觉，SLAM，基于视觉的强化学习。</p>
          </div>
        </div>
        <div class="forth">
          <img src="@/assets/img/fields_4.png" alt="云计算与大数据" />
          <div class="text">
            <h3 style="text-align:left; margin:0">云计算与大数据</h3>
            <p
              style="text-align:left; margin:0"
            >计算机视觉使得计算机能够理解真实的视觉世界。研究方向：图像/视频编辑，生成，分析，理解；物体/人脸检测，跟踪，和识别；文字识别，3D视觉，SLAM，基于视觉的强化学习。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
#title {
  position: absolute;
  z-index: 1;
  top: 100px;
  left: 195px;
  color: #455a64;
  font-size: 45px;
}
#fieldsContent {
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  height: 1500px;
  width: 100%;
  margin: 0 auto;
}
#fieldsbody {
  position: relative;
  display: flex;
  margin-top: 400px;
  margin-left: 300px;
  flex-wrap: wrap;
  width: 100%;
}
#fieldsbody .first {
  position: relative;
  display: flex;
  width: 50%;
  /* background-color: red; */
}
#fieldsbody .second {
  position: relative;
  display: flex;
  width: 50%;
  /* background-color: blue; */
}
#fieldsbody .third {
  position: relative;
  display: flex;
  width: 50%;
  margin-top:150px;
  /* background-color: purple; */
}
#fieldsbody .forth {
  position: relative;
  display: flex;
  width: 50%;
  margin-top:150px;
  /* background-color: gray; */
}
#fieldsbody .text {
  width: 70%;
  margin-top: 200px;
  margin-left: -30px;
  padding-right: 20%;
  line-height: 40px;
  font-size: 25px;;
}
#fieldsbody img {
  display: block;
  width: 132px;
  height: 120px;
}
</style>