<template>
  <div class="companionship">
    <!-- 留言板列表 -->
    <el-card class="info-card">
      <div class="messages">
        <div
            v-for="(message, index) in messages"
            :key="index"
            class="message-item"
        >
          <div class="message-header">
            <span class="nickname">{{ message.nickname }}</span>
            <el-tag
                :type="getTagType(message.role)"
                class="role-tag"
            >
              {{ message.role }}
            </el-tag>
          </div>
          <div class="message-content">
            <span v-if="message.role === '系统'" class="system-message">
              {{ message.content }}
            </span>
            <span v-else>
              {{ message.content }}
            </span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Companionship",
  data() {
    return {
      // 留言列表数据
      messages: [
        {
          nickname: "王老师",
          role: "志愿者",
          content: "在学习上遇到困难可以随时联系我！",
        },
        {
          nickname: "李阿姨",
          role: "家长",
          content: "孩子，加油！我们永远支持你。",
        },
        {
          nickname: "爱心人士",
          role: "捐赠者",
          content: "希望你能健康快乐地成长！",
        },
        {
          nickname: "系统消息",
          role: "系统",
          content: "王老师解答了你的问题。",
        },
        {
          nickname: "系统消息",
          role: "系统",
          content: "爱心人士向你送了一个滑板。",
        },
        // 更多假数据...
      ],
    };
  },
  methods: {
    // 根据角色获取标签类型
    getTagType(role) {
      switch (role) {
        case "家长":
          return "primary";
        case "捐赠者":
          return "success";
        case "志愿者":
          return "warning";
        case "系统":
          return "info";
        default:
          return "default";
      }
    },
  },
};
</script>

<style scoped>
.companionship {
  padding: 20px;
}

.messages {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.message-item {
  padding: 15px;
  border-bottom: 1px solid #ebeef5;
}

.message-header {
  display: flex;
  align-items: center;
}

.nickname {
  font-weight: bold;
  margin-right: 10px;
}

.role-tag {
  font-size: 12px;
}

.message-content {
  margin-top: 5px;
}

.system-message {
  color: #409eff;
}
</style>
