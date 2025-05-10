<template>
  <div class="love-aid">
    <!-- 爱心捐赠 -->
    <el-card class="section-card">
      <h2>爱心捐赠</h2>
      <el-divider></el-divider>
      <h3>个性化推荐</h3>
      <el-table :data="donationItems" style="width: 100%">
        <el-table-column prop="name" label="物品名称"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>
        <el-table-column prop="personalization" label="个性化"></el-table-column>
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-button type="primary" size="small" @click="donate(scope.row)">捐赠</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 热心志愿 -->
    <el-card class="section-card">
      <h2>热心志愿</h2>
      <el-divider></el-divider>
      <div class="volunteer-section">
        <h3>您选择辅导学生作业吗？</h3>
        <el-checkbox-group v-model="selectedSubjects">
          <el-checkbox label="语文"></el-checkbox>
          <el-checkbox label="数学"></el-checkbox>
          <el-checkbox label="英语"></el-checkbox>
          <el-checkbox label="物理"></el-checkbox>
          <el-checkbox label="化学"></el-checkbox>
          <el-checkbox label="生物"></el-checkbox>
          <el-checkbox label="历史"></el-checkbox>
          <el-checkbox label="地理"></el-checkbox>
          <el-checkbox label="政治"></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="volunteer-section">
        <h3>您选择和儿童谈心吗？</h3>
        <el-checkbox-group v-model="selectedTopics">
          <el-checkbox label="心理辅导"></el-checkbox>
          <el-checkbox label="职业规划"></el-checkbox>
          <el-checkbox label="兴趣培养"></el-checkbox>
          <el-checkbox label="情感交流"></el-checkbox>
          <el-checkbox label="家庭问题"></el-checkbox>
          <el-checkbox label="校园生活"></el-checkbox>
          <el-checkbox label="网络安全"></el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>

    <!-- 线上关怀 -->
    <el-card class="section-card">
      <h2>线上关怀</h2>
      <el-divider></el-divider>
      <div class="online-care-options">
        <el-button type="primary" icon="el-icon-video-camera-solid" @click="startVideoCall">打视频</el-button>
        <el-button type="success" icon="el-icon-microphone" @click="sendVoiceMessage">发语音</el-button>
        <el-button type="info" icon="el-icon-message" @click="sendTextMessage">发文字</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "LoveAid",
  data() {
    return {
      donationItems: [
        {
          name: "书籍",
          description: "各类中小学辅导书籍、课外读物，帮助孩子拓宽知识面。",
          personalization: "一本《三国演义》来提高阅读理解。",
        },
        {
          name: "乐器",
          description: "吉他、钢琴、古筝等乐器，培养孩子的音乐兴趣。",
          personalization: "孩子对吉他非常感兴趣，希望能有一把吉他练习。",
        },
        {
          name: "体育用品",
          description: "篮球、足球、羽毛球拍等，增强孩子的体质。",
          personalization: "孩子正在学习打篮球，需要一个篮球进行练习。",
        },
        {
          name: "绘画工具",
          description: "画笔、画纸、水彩等，激发孩子的艺术潜能。",
          personalization: "孩子对绘画充满热情，缺少专业的绘画工具。",
        },
        {
          name: "电子设备",
          description: "二手电脑、平板，帮助孩子接触科技前沿。",
          personalization: "孩子家中没有电脑，无法进行线上学习，希望获得一台二手电脑。",
        },
        {
          name: "学习用品",
          description: "书包、文具盒、笔记本等，满足日常学习需求。",
          personalization: "孩子的书包已经破旧，需要一个新的书包来携带书本。",
        },
        // 可以根据需要添加更多物品
      ],
      selectedSubjects: [],
      selectedTopics: [],
    };
  },
  methods: {
    donate(item) {
      // 这里可以添加捐赠逻辑，例如弹出捐赠表单
      this.$message({
        message: `感谢您捐赠「${item.name}」！`,
        type: "success",
      });
    },
    startVideoCall() {
      // 发起视频通话的逻辑
      this.$message({
        message: "即将开始视频通话",
        type: "info",
      });
    },
    sendVoiceMessage() {
      // 发送语音消息的逻辑
      this.$message({
        message: "语音消息已发送",
        type: "success",
      });
    },
    sendTextMessage() {
      // 发送文字消息的逻辑
      this.$message({
        message: "文字消息已发送",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.love-aid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-card {
  padding: 20px;
}

.volunteer-section {
  margin-top: 20px;
}

.volunteer-section h3 {
  margin-bottom: 10px;
}

.online-care-options {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}
</style>
