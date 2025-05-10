<template>
  <div class="smart-assistant">
    <!-- 儿童心理状态 -->
    <el-card class="info-card">
      <div class="section-header">
        <h2>儿童心理状态</h2>
        <el-rate
            v-model="psychologyState.rating"
            :max="5"
            :allow-half="true"
            :colors="['#F56C6C', '#E6A23C', '#67C23A']"
            :low-threshold="2"
            :high-threshold="4"
            show-score
        ></el-rate>
      </div>
      <div class="reasoning">
        <p>{{ psychologyState.reason }}</p>
      </div>
    </el-card>

    <!-- 儿童学习状态 -->
    <el-card class="info-card">
      <div class="section-header">
        <h2>儿童学习状态</h2>
        <el-rate
            v-model="learningState.rating"
            :max="5"
            :allow-half="true"
            :colors="['#F56C6C', '#E6A23C', '#67C23A']"
            :low-threshold="2"
            :high-threshold="4"
            show-score
        ></el-rate>
      </div>
      <div class="reasoning">
        <p>{{ learningState.reason }}</p>
      </div>
    </el-card>

    <!-- 儿童社交状态 -->
    <el-card class="info-card">
      <div class="section-header">
        <h2>儿童社交状态</h2>
        <el-rate
            v-model="socialState.rating"
            :max="5"
            :allow-half="true"
            :colors="['#F56C6C', '#E6A23C', '#67C23A']"
            :low-threshold="2"
            :high-threshold="4"
            show-score
        ></el-rate>
      </div>
      <div class="reasoning">
        <p>{{ socialState.reason }}</p>
      </div>
    </el-card>

    <!-- 特殊状态标签 -->
    <el-card class="info-card">
      <div class="section-header">
        <h2>特殊状态</h2>
      </div>
      <div class="tags">
        <el-tag type="danger">生病</el-tag>
        <el-tag type="success">开学</el-tag>
        <el-tag type="info">期末考试</el-tag>
        <el-tag type="warning">家庭变故</el-tag>
        <el-tag type="primary">转学</el-tag>
        <el-tag type="success">获奖</el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "SmartAssistant",
  data() {
    return {
      psychologyState: {
        rating: 2.5,
        reason:
            "近期情绪波动较大，表现出焦虑和不安，可能与学习压力和同学关系有关，建议及时疏导。",
      },
      learningState: {
        rating: 4.5,
        reason:
            "对新知识的接受能力强，作业完成质量高，多次在班级考试中名列前茅，继续保持。",
      },
      socialState: {
        rating: 3,
        reason:
            "与同龄人交往较为正常，但偶尔出现争执，建议培养沟通技巧，增强团队合作意识。",
      },
    };
  },
};
</script>

<style scoped>
.smart-assistant {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  padding: 20px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reasoning {
  margin-top: 10px;
  font-size: 14px;
  color: #606266;
}

.tags {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
