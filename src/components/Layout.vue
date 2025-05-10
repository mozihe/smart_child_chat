<script setup>

import {
  CaretBottom,
  Crop, Document,
  EditPen, Notebook,
  Plus,
  SwitchButton, Upload, User, UserFilled, Wallet,
} from '@element-plus/icons-vue'

import {ref} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";
import {useRouter} from "vue-router";
import avatar from "@/assets/default.png";
import {useTokenStore} from "@/stores/token.js";
import {useUserInfoStore} from "@/stores/userInfo.js";


const uploadRef = ref()
const uploadVisible = ref(false)
const rePasswordVisible = ref(false)
const router = useRouter()
const tokenStore = useTokenStore()
const userInfoStore = useUserInfoStore()

const getUserInfo = async () => {
  const result = {
    data: {
      username: '张老师',
      avatarUrl: ''
    }
  }

  userInfoStore.setUserInfo(result.data)
}

getUserInfo()

const imgUrl = ref(userInfoStore.userInfo.avatarUrl)

const uploadSuccess = (result) => {
  ElMessage.success("图片上传成功")
}

const updateAvatar = async () => {
  ElMessage.success("头像更换成功")
  uploadVisible.value = false
}

const logout = () => {
    ElMessageBox.confirm(
        '你确认要退出吗？',
        '温馨提示',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        }
    ).then(
        async () => {
          tokenStore.removeToken()
          userInfoStore.removeUserInfo()
          ElMessage.success("退出成功")
          await router.push('/login')
        }
    )
}

const pwdData = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})

const updatePwdData = async () => {
  ElMessage.success("密码修改成功")
  rePasswordVisible.value = false
}
const checkRePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次确认密码'))
  } else if (value !== pwdData.value.new_pwd) {
    callback(new Error('两次密码不一样'))
  } else {
    callback()
  }
}
const rules = {
  old_pwd: [
    {required: true, message: '请输入旧密码?', trigger: 'blur'},
    {min: 5, max: 16, message: '长度为5-16位', trigger: 'blur'},
  ],
  new_pwd: [
    {required: true, message: '请输入新密码', trigger: 'blur'},
    {min: 5, max: 16, message: '长度为5-16位', trigger: 'blur'},
  ],
  re_pwd: [
    {required: true, message: '请输入确认新密码', trigger: 'blur'},
    {validator: checkRePassword, trigger: 'blur'},
  ]
}

</script>

<template>
    <el-dialog title="更换头像" v-model="uploadVisible" width="30%">
        <el-row>
          <el-col :span="12">
            <el-upload
                ref="uploadRef"
                class="avatar-uploader"
                :show-file-list="false"
                :auto-upload="true"
                action="/api/upload"
                name="file"
                :headers="{'Authorization':tokenStore.token}"
                :on-success="uploadSuccess"
            >
              <el-image v-if="imgUrl" :src="imgUrl" class="avatar"/>
              <el-image v-else :src="avatar" width="278"/>
            </el-upload>
            <br/>
            <el-button type="primary" :icon="Plus" size="large" @click="uploadRef.$el.querySelector('input').click()">
              选择图片
            </el-button>
            <el-button type="success" :icon="Upload" size="large" @click="updateAvatar">
              上传头像
            </el-button>
          </el-col>
        </el-row>
    </el-dialog>
    <el-dialog title="修改密码" v-model="rePasswordVisible">
      <el-row>
        <el-col :span="12">
          <el-form :model="pwdData" :rules="rules" label-width="100px" size="large">
            <el-form-item label="旧密码" prop="old_pwd">
              <el-input v-model="pwdData.old_pwd" type="password" placeholder="请输入旧密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="new_pwd">
              <el-input v-model="pwdData.new_pwd" type="password" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="re_pwd">
              <el-input v-model="pwdData.re_pwd" type="password" placeholder="请输入再次新密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="updatePwdData">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-dialog>

  <el-container class="layout-container">
    <el-container>
      <el-header>
        <div><strong>{{ userInfoStore.userInfo.username }}</strong></div>
        <el-dropdown placement="bottom-end">
                    <span class="el-dropdown__box">
                        <el-avatar :src="userInfoStore.userInfo.avatarUrl !== '' ? userInfoStore.userInfo.avatarUrl:avatar"/>
                        <el-icon>
                            <CaretBottom/>
                        </el-icon>
                    </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="uploadVisible = true" :icon="Crop">更换头像</el-dropdown-item>
              <el-dropdown-item @click="rePasswordVisible = true" :icon="EditPen">修改密码</el-dropdown-item>
              <el-dropdown-item @click="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main style="padding: 0">
        <el-container class="layout-container">
          <el-aside width="200px" >
            <el-menu active-text-color="#ffd04b" background-color="#232323" text-color="#fff"
                     router>
              <el-menu-item index="/chat">
                <el-icon>
                  <User />
                </el-icon>
                <span>智能助手</span>
              </el-menu-item>
              <el-menu-item index="/appointment">
                <el-icon>
                  <Document />
                </el-icon>
                <span>爱心援助</span>
              </el-menu-item>
<!--              <el-menu-item index="/fold">-->
<!--                <el-icon>-->
<!--                  <Notebook />-->
<!--                </el-icon>-->
<!--                <span>教育与情感支持</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="/win">-->
<!--                <el-icon>-->
<!--                  <Wallet/>-->
<!--                </el-icon>-->
<!--                <span>陪伴心灵</span>-->
<!--              </el-menu-item>-->
<!--              <el-sub-menu>-->
<!--                <template #title>-->
<!--                  <el-icon>-->
<!--                    <UserFilled/>-->
<!--                  </el-icon>-->
<!--                  <span>消息中心</span>-->
<!--                </template>-->
<!--                <el-menu-item index="/leave">-->
<!--                  <el-icon>-->
<!--                    <EditPen/>-->
<!--                  </el-icon>-->
<!--                  <span>留言</span>-->
<!--                </el-menu-item>-->
<!--                <el-menu-item index="/info">-->
<!--                  <el-icon>-->
<!--                    <EditPen/>-->
<!--                  </el-icon>-->
<!--                  <span>消息</span>-->
<!--                </el-menu-item>-->
<!--              </el-sub-menu>-->
            </el-menu>
          </el-aside>
          <el-container class="content-container">
            <router-view style="width: 100%"/>
          </el-container>
        </el-container>
      </el-main>
      <el-footer>明光筑梦 ©2025 Created by MoXin</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;

  .el-aside {
    background-color: #232323;
    user-select: none;


    .el-menu {
      border-right: none;
    }
  }


  .el-header {
    background-color: #5f97e7;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .el-dropdown__box {
      display: flex;
      align-items: center;

      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }

  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: black;
    background: #5f97e7;
  }
}

.content-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.avatar-uploader {
    .avatar {
      width: 278px;
      height: 278px;
      display: block;
    }

    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }

    .el-upload:hover {
      border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
}

</style>
