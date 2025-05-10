<template>
  <div class="education-support">
    <!-- 第一部分：问题列表 -->
    <el-card class="info-card">
      <div class="header">
        <h2>教育与学习支持</h2>
        <el-button type="primary" @click="openQuestionModal">发布提问</el-button>
      </div>
      <el-table :data="questions" stripe style="width: 100%">
        <el-table-column prop="question" label="问题" width="350"></el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === '已解答' ? 'success' : 'warning'">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="answer" label="答案"></el-table-column>
      </el-table>
    </el-card>

    <!-- 第二部分：统计信息 -->
    <el-card class="info-card">
      <h3>统计信息</h3>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-statistic title="提问数量" :value="statistics.questionCount"></el-statistic>
        </el-col>
        <el-col :span="6">
          <el-statistic title="浏览时长（小时）" :value="statistics.browsingTime"></el-statistic>
        </el-col>
        <el-col :span="6">
          <el-statistic title="获得积分" :value="statistics.points"></el-statistic>
        </el-col>
        <el-col :span="6">
          <div class="medal">
            <span>所获奖章</span>
            <el-divider direction="vertical"></el-divider>
            <el-tag type="success">学习小达人</el-tag>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <!-- 发布提问的弹窗 -->

    <el-dialog title="发布提问" v-model="questionModalVisible">
      <el-form :model="newQuestion" :rules="rules" ref="questionForm">
        <el-form-item label="问题内容" :label-width="formLabelWidth" prop="question">
          <el-input type="textarea" v-model="newQuestion.question" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
        <el-button @click="questionModalVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitQuestion">发 送</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "EducationSupport",
  data() {
    return {
      // 问题列表数据
      questions: [
        {
          question: "什么是细胞？",
          status: "待解答",
          answer: "",
        },
        {
          question: "如何解一元二次方程？",
          status: "已解答",
          answer: "可以使用公式求解。",
        },
        // 更多假数据...
      ],
      // 统计信息
      statistics: {
        questionCount: 20, // 可自行设定
        browsingTime: 15.2, // 以小时计
        points: 150, // 积分
      },
      // 控制提问弹窗的显示
      questionModalVisible: false,
      // 新提问的数据
      newQuestion: {
        question: "",
      },
      // 表单校验规则
      rules: {
        question: [
          { required: true, message: "请输入问题内容", trigger: "blur" },
        ],
      },
      formLabelWidth: "80px",
    };
  },
  methods: {
    openQuestionModal() {
      this.questionModalVisible = true;
      console.log(111)
    },
    submitQuestion() {
      this.$refs.questionForm.validate((valid) => {
        if (valid) {
          // 将新问题添加到列表顶部
          this.questions.unshift({
            question: this.newQuestion.question,
            status: "待解答",
            answer: "",
          });
          // 清空新问题输入框
          this.newQuestion.question = "";
          // 关闭弹窗
          this.questionModalVisible = false;
          // 更新统计信息中的提问数量
          this.statistics.questionCount += 1;
          // 提示成功
          this.$message.success("提问已发布！");
        } else {
          this.$message.error("请填写完整的提问内容！");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.education-support {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.medal {
  display: flex;
  align-items: center;
  height: 100%;
}

.medal span {
  margin-right: 8px;
}

.dialog-footer {
  text-align: right;
}

.el-statistic + .el-statistic {
  margin-left: 20px;
}
</style>
