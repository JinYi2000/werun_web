<template>
  <div style="position: relative">
    <div class="header">
      <img id="logo" src="https://i.loli.net/2020/09/23/O9CUbHKVoPci7q3.png" />
      <div class="name">
        <span>WERUN</span>
        <br />
        <span>C L U B</span>
      </div>
      <div id="headerTitle"><p>成员介绍</p></div>
    </div>
    <article id="article">
      <div id="members">
        <div>
          <img id="member_img" :src="info.img" />
        </div>
        <div id="memberInfo">
          <span id="memberName">{{ info.name }}</span>
          </br>
          <div>
            <div>年级：{{ info.grade }}</div>
            <div>专业：{{ info.major }}</div>
            <div>方向：{{ info.dir }}</div>
            <div>个人介绍：{{info.dir }}</div>
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
      info: {
        memberId: "",
        img: "",
        name: "",
        grade: "",
        major: "",
        dir: "",
      },
    };
  },
  methods: {},
  created() {
    this.info.img = this.$route.query.img;
    this.info.name = this.$route.query.name;
    this.info.grade = this.$route.query.grade;
    this.info.major = this.$route.query.major;
    this.info.dir = this.$route.query.dir;

    //let info = JSON.parse(this.$route.query);

    console.log(this.$route.query);
  },
  components: {
    myHeader,
    myFooter,
  },
};
</script>
<style scoped>
.header {
  height: 170px;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 5;
  background-color: white;
  transition: background-color 0.5s linear;
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
#headerTitle {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 20px;
  color: #0d3590;
  font-size: 40px;
  font-weight: bold;
}
#article {
  width: 1000px;
  margin: 220px auto 200px;
}
#member_img {
  width: 220px;
  float: left;
  margin-left: 135px;
}
#memberInfo {
  position: relative;
  text-align: left;
  left: 50%;
  transform: translate(-43%, 0);

  color: #0d3590;
  font-size: 20px;
}
#memberInfo #memberName {
  font-size: 32px;
  font-weight: bold;
}
#memberInfo div {
  margin-top: 12px;
}
#memberInfo div div {
  display: block;
  margin-top: 3px;
}
#footer {
  height: 270px;
  background-color: #0d3590;
}
</style>