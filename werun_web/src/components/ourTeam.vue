<template>
  <div style="position: relative">
    <span id="title">团队成员</span>
    <div id="memberContent" @mouseover="showPics()" @mouseout="concealPics()">
      <div
        class="member"
        v-for="(item, index) in memberList"
        @click="viewDetail(item)"
      >
        <img class="member_img" :src="item.img" />
        <span class="member_name">{{ item.name }}</span>
        <span class="member_grade">{{ item.grade }}</span>
        <span class="member_major">{{ item.major }}</span>
        <span class="member_dir">{{ item.dir }}</span>
      </div>
    </div>
    <div id="more"><span @click="viewMore()">更多 ></span></div>
    <div id="left" @mouseover="showPics()" @mouseout="concealPics()">
      <img @click="moveLeft()" class="change" src="@/assets/img/左.png" />
    </div>
    <div
      id="right"
      @click="moveRight()"
      @mouseover="showPics()"
      @mouseout="concealPics()"
    >
      <img class="change" src="@/assets/img/右.png" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftDis: 0,
      /*
      info: {
        img: "",
        name: "",
        grade: "",
        major: "",
        dir: "",
      },*/
      memberList: [
        {
          img: "https://i.loli.net/2020/09/24/XYgTzaldxZJksu2.jpg",
          name: "孙一恒",
          grade: "2017",
          major: "软件工程",
          dir: "后端",
        },
        {
          img: "https://i.loli.net/2020/09/24/uNwtjIHARCJKo9r.jpg",
          name: "鹿轶轩",
          grade: "2018",
          major: "软件工程",
          dir: "后端",
        },
        {
          img: "https://i.loli.net/2020/09/24/WH32b5Y1BxUO9jG.jpg",
          name: "莫张浩",
          grade: "2018",
          major: "计算机科学与技术",
          dir: "前端",
        },
        {
          img: "https://i.loli.net/2020/09/24/3bTWSMKkhIFVENv.jpg",
          name: "刘俊良",
          grade: "2018",
          major: "软件工程",
          dir: "后端",
        },
        {
          img: "https://i.loli.net/2020/09/24/XYgTzaldxZJksu2.jpg",
          name: "孙一恒",
          grade: "2017",
          major: "软件工程",
          dir: "后端",
        },
        {
          img: "https://i.loli.net/2020/09/24/uNwtjIHARCJKo9r.jpg",
          name: "鹿轶轩",
          grade: "2018",
          major: "软件工程",
          dir: "后端",
        },
        {
          img: "https://i.loli.net/2020/09/24/WH32b5Y1BxUO9jG.jpg",
          name: "莫张浩",
          grade: "2018",
          major: "计算机科学与技术",
          dir: "前端",
        },
        {
          img: "https://i.loli.net/2020/09/24/3bTWSMKkhIFVENv.jpg",
          name: "刘俊良",
          grade: "2018",
          major: "软件工程",
          dir: "后端",
        },
      ],
    };
  },
  methods: {
    viewMore() {
      this.$router.push("teamDetail");
    },
    viewDetail(item) {
      //跳转页面并传值
      this.$router.push({
        path: "/teamMembers",
        query: {
          img: item.img,
          name: item.name,
          grade: item.grade,
          major: item.major,
          dir: item.dir,
        },
      });
    },
    showPics() {
      //console.log('ok');
      var left = document.getElementById("left");
      var right = document.getElementById("right");
      //console.log(left);
      left.style.opacity = 0.7;
      right.style.opacity = 0.7;
    },
    concealPics() {
      //console.log('ok');
      var left = document.getElementById("left");
      var right = document.getElementById("right");
      left.style.opacity = 0;
      right.style.opacity = 0;
    },
    moveRight() {
      //alert('ok');
      var member = document.getElementsByClassName("member");

      //console.log(member[0].style);
      var num = this.memberList.length;
      var dis = num - 3;
      if (this.leftDis > -450 * dis) {
        this.leftDis -= 450;
        console.log(this.leftDis + "px");
        for (let i = 0; i < member.length; i++) {
          member[i].style.left = this.leftDis + "px";
        }
      }
    },
    moveLeft() {
      //alert('ok');
      var member = document.getElementsByClassName("member");

      //console.log(member[0].style);
      var num = this.memberList.length;
      if (this.leftDis < 0) {
        this.leftDis += 450;
        console.log(this.leftDis + "px");
        console.log(member);
        for (let i = 0; i < member.length; i++) {
          member[i].style.left = this.leftDis + "px";
        }
      }
    },
  },
};
</script>
<style scoped>
.change {
  width: 50px;
  margin-top: 25px;
}
#left {
  position: absolute;
  width: 70px;
  height: 130px;
  background-color: black;
  opacity: 0;
  top: 150px;
  left: 195px;
  transition: 1s;
}
#right {
  position: absolute;
  width: 70px;
  height: 130px;
  background-color: black;
  opacity: 0;
  top: 150px;
  right: 195px;
  transition: 1s;
}
.member_date {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 25px;
  color: #888888;
  font-weight: bold;
}
.member_img {
  width: 300px;
  height: 250px;
}
.member_name {
  display: block;
  text-align: center;
  margin: 10px;
  margin-bottom: 50px;
  font-weight: bold;
  font-size: 27px;
}
.member_grade,
.member_major,
.member_dir {
  display: block;
  text-align: center;
  margin: 20px;
  font-size: 20px;
  color: #888888;
  line-height: 10px;
}
#memberContent {
  margin-left: 195px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: hidden;
  height: 625px;

  margin-top: 385px;
}
#title {
  position: absolute;
  top: -250px;
  left: 195px;
  color: #455a64;
  font-size: 45px;
}
#more {
  position: absolute;
  top: -250px;
  right: 195px;
  color: #455a64;
  font-size: 45px;
}
#more span {
  transition: all ease 0.5s;
  -webkit-transition: all ease 0.5s;
}
#more :hover {
  cursor: pointer;
  color: #0d3590;
  transition: all ease 0.5s;
  -webkit-transition: all ease 0.5s;
}
.member {
  left: 0px;
  position: relative;
  float: left;
  height: 450px;
  min-width: 300px;
  background-color: rgb(255, 255, 255);
  margin-top: 15px;
  margin-right: 50px;
  box-shadow: 5px 5px 5px 3px #888888;
  border-radius: 10px;
  transition: all 0.2s linear;
  /* transition:left 0.5s linear; */
}
.member:hover {
  cursor: pointer;
  position: relative;
  float: left;
  height: 450px;
  min-width: 300px;
  background-color: rgb(255, 255, 255);
  margin-top: 0px;
  margin-right: 50px;
  box-shadow: 5px 5px 5px 3px #888888;
  border-radius: 10px;
}
</style>