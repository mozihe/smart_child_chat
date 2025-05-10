<template>
  <div class="reviews-container">
    <!-- 展示两个用户的评价 -->
    <el-card class="review-card" shadow="hover">
      <div>
        <h3>张三</h3>
        <el-rate v-model="userReviews[0].rating" disabled></el-rate>
        <p>{{ userReviews[0].comment }}</p>
      </div>
    </el-card>
    <el-card class="review-card" shadow="hover">
      <div>
        <h3>李四</h3>
        <el-rate v-model="userReviews[1].rating" disabled></el-rate>
        <p>{{ userReviews[1].comment }}</p>
      </div>
    </el-card>

    <!-- 用户评论和打星区域 -->
    <el-divider>留下您的评论</el-divider>
    <el-form ref="reviewForm" :model="newReview" label-width="100px">
      <el-form-item label="评分">
        <el-rate v-model="newReview.rating"></el-rate>
      </el-form-item>
      <el-form-item label="评价内容">
        <el-input
            v-model="newReview.comment"
            type="textarea"
            placeholder="说点什么吧"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitReview">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 固定的用户评价
      userReviews: [
        { username: "张三", rating: 5, comment: "太好用了" },
        { username: "李四", rating: 2, comment: "不好，可约律师太少了" },
      ],
      // 新评价的初始数据
      newReview: {
        username: "",
        rating: 0,
        comment: "",
      },
    };
  },
  methods: {
    // 提交评价的方法
    submitReview() {
      if (!this.newReview.rating || !this.newReview.comment) {
        this.$message.error("请填写完整的评分和评价内容！");
        return;
      }
      // 如果用户名未填写，则自动生成一个随机用户名
      if (!this.newReview.username) {
        this.newReview.username = "匿名用户_" + Math.floor(Math.random() * 10000);
      }

      this.userReviews.push({...this.newReview});
      this.$message.success("感谢您的评价！");
      this.resetForm();
    },
    // 重置表单的方法
    resetForm() {
      this.newReview = {
        username: "",
        rating: 0,
        comment: "",
      };
    },
  },
};
</script>

<style scoped>
.reviews-container {
  max-width: 600px;
  margin: 20px auto;
}

.review-card {
  margin-bottom: 20px;
}
</style>
