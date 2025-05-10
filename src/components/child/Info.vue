<template>
  <div>
    <!-- 页眉，选择进入售后或推送界面 -->
    <el-menu :default-active="currentPage" mode="horizontal" @select="handleMenuSelect">
      <el-menu-item index="after-sales">售后界面</el-menu-item>
      <el-menu-item index="push">推送界面</el-menu-item>
    </el-menu>

    <!-- 售后界面 -->
    <div v-if="currentPage === 'after-sales'" class="after-sales">
      <h2>律师事务售后服务</h2>

      <!-- 售后问题反馈 -->
      <div>
        <el-card class="card">
          <el-tag type="success">解决问题</el-tag>
          <h3>问题：我的案件文件可以修改吗？</h3>
          <p>律师回复：您好，案件文件提交后我们会提供一次免费修改机会。如需进一步修改，请联系我们的律师助理处理。</p>
        </el-card>
        <el-card class="card">
          <el-tag type="success">解决问题</el-tag>
          <h3>问题：合同审查结果与预期不符怎么办？</h3>
          <p>律师回复：合同审查结果基于合同条款和法律规定分析。如果您有特殊需求，可与负责律师进一步沟通并优化解决方案。</p>
        </el-card>
      </div>

      <!-- 律所服务祝福 -->
      <div>
        <el-card class="card">
          <el-tag type="info">祝福</el-tag>
          <p>律所：感谢您选择我们的服务，祝您的问题早日解决，生活顺心！</p>
        </el-card>
        <el-card class="card">
          <el-tag type="info">祝福</el-tag>
          <p>律所：感谢信任我们的团队，期待下次合作，祝您事业步步高升！</p>
        </el-card>
      </div>
    </div>

    <!-- 推送界面 -->
    <div v-if="currentPage === 'push'" class="push">
      <h2>法律知识推送</h2>
      <el-card class="card" v-for="(item, index) in legalKnowledge" :key="index">
        <el-tag type="warning">法律知识</el-tag>
        <h3> {{ index + 1 }}</h3>
        <p>{{ item }}</p>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "after-sales", // 当前选中的页面
      legalKnowledge: [
        "律师代理费与实际服务内容挂钩，需签订书面协议。",
        "诉讼时效：一般民事纠纷的诉讼时效为3年，特殊情况除外。",
        "合同的核心条款包括标的、价款或报酬、履行期限等，需重点关注。",
        "仲裁比诉讼更快捷，适用于合同约定了仲裁条款的情况。",
        "遗嘱需满足自书遗嘱、代书遗嘱等法定形式，避免法律效力问题。",
      ],
    };
  },
  methods: {
    handleMenuSelect(key) {
      this.currentPage = key;
    },
  },
};
</script>

<style scoped>
.after-sales,
.push {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}
.card {
  margin-bottom: 20px;
}
</style>